import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { bikeBrands, services } from "@/data/bikes";

interface BookingEmailData {
  name: string;
  email: string;
  phone: string;
  brand: string;
  model: string;
  serviceId: string;
  date: string;
  time: string;
  description?: string;
}

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00",
] as const;

const EMAIL_RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const EMAIL_RATE_LIMIT_MAX_REQUESTS = 5;
const emailAttemptsByIp = new Map<string, number[]>();

function parseDateParts(dateString: string): { year: number; month: number; day: number } | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateString);

  if (!match) {
    return null;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) {
    return null;
  }

  return { year, month, day };
}

function createLocalDate(dateString: string): Date | null {
  const dateParts = parseDateParts(dateString);

  if (!dateParts) {
    return null;
  }

  return new Date(dateParts.year, dateParts.month - 1, dateParts.day);
}

function formatDate(dateString: string): string {
  const parsedDate = createLocalDate(dateString);

  if (!parsedDate) {
    return dateString;
  }

  return parsedDate.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function cleanText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  return /^[0-9+\-().\s]{7,25}$/.test(phone);
}

function isValidDate(date: string): boolean {
  const dateParts = parseDateParts(date);

  if (!dateParts) {
    return false;
  }

  const parsedDate = new Date(dateParts.year, dateParts.month - 1, dateParts.day);

  if (
    Number.isNaN(parsedDate.getTime()) ||
    parsedDate.getFullYear() !== dateParts.year ||
    parsedDate.getMonth() !== dateParts.month - 1 ||
    parsedDate.getDate() !== dateParts.day
  ) {
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return parsedDate >= today;
}

function isValidTimeSlot(time: string): boolean {
  return TIME_SLOTS.includes(time as (typeof TIME_SLOTS)[number]);
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return "";
}

function isRateLimited(ip: string): boolean {
  if (!ip) {
    return false;
  }

  const now = Date.now();
  const recentAttempts = (emailAttemptsByIp.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < EMAIL_RATE_LIMIT_WINDOW_MS,
  );

  if (recentAttempts.length >= EMAIL_RATE_LIMIT_MAX_REQUESTS) {
    emailAttemptsByIp.set(ip, recentAttempts);
    return true;
  }

  recentAttempts.push(now);
  emailAttemptsByIp.set(ip, recentAttempts);
  return false;
}

function isTrustedOrigin(request: NextRequest): boolean {
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");

  if (!host) {
    return false;
  }

  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== host) {
        return false;
      }
    } catch {
      return false;
    }
  }

  const referer = request.headers.get("referer");
  if (referer) {
    try {
      if (new URL(referer).host !== host) {
        return false;
      }
    } catch {
      return false;
    }
  }

  return true;
}

function validateBookingData(payload: unknown): BookingEmailData | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const rawData = payload as Record<string, unknown>;
  const data: BookingEmailData = {
    name: cleanText(rawData.name, 100),
    email: cleanText(rawData.email, 254).toLowerCase(),
    phone: cleanText(rawData.phone, 25),
    brand: cleanText(rawData.brand, 100),
    model: cleanText(rawData.model, 100),
    serviceId: cleanText(rawData.serviceId, 50),
    date: cleanText(rawData.date, 10),
    time: cleanText(rawData.time, 20),
    description: cleanText(rawData.description, 1000),
  };

  const selectedBrand = bikeBrands.find((brand) => brand.name === data.brand);
  const selectedService = services.find((service) => service.id === data.serviceId);

  if (!data.name || !data.email || !data.phone || !data.brand || !data.model || !data.serviceId || !data.date || !data.time) {
    return null;
  }

  if (!isValidEmail(data.email) || !isValidPhone(data.phone) || !isValidDate(data.date) || !isValidTimeSlot(data.time)) {
    return null;
  }

  if (!selectedBrand || !selectedBrand.models.includes(data.model) || !selectedService) {
    return null;
  }

  return data;
}

export async function POST(request: NextRequest) {
  try {
    if (request.headers.get("content-type")?.includes("application/json") !== true) {
      return NextResponse.json({ error: "Tipo de contenido no compatible" }, { status: 415 });
    }

    if (!isTrustedOrigin(request)) {
      return NextResponse.json({ error: "Origen de la solicitud no válido" }, { status: 403 });
    }

    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Demasiados intentos de reserva. Inténtalo de nuevo más tarde." },
        { status: 429 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Falta la variable de entorno RESEND_API_KEY");
      return NextResponse.json({ error: "El servicio de correo no está disponible" }, { status: 503 });
    }

    const requestBody = await request.json();
    const data = validateBookingData(requestBody);

    if (!data) {
      return NextResponse.json({ error: "Los datos de la reserva no son válidos" }, { status: 400 });
    }

    const selectedService = services.find((service) => service.id === data.serviceId);
    if (!selectedService) {
      return NextResponse.json({ error: "El servicio seleccionado no es válido" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const formattedDate = formatDate(data.date);

    const safeName = escapeHtml(data.name);
    const safeBrand = escapeHtml(data.brand);
    const safeModel = escapeHtml(data.model);
    const safePhone = escapeHtml(data.phone);
    const safeTime = escapeHtml(data.time);
    const safeServiceName = escapeHtml(selectedService.name);
    const safeFormattedDate = escapeHtml(formattedDate);
    const safeDescription = data.description ? escapeHtml(data.description) : "";

    await resend.emails.send({
      from: "Ezcaray Custom Bikes <onboarding@resend.dev>",
      to: data.email,
      subject: `Cita confirmada - ${formattedDate}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Inter', system-ui, sans-serif; background-color: #F5F0E6; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: white; border: 2px solid #D4A574; border-radius: 4px; }
            .header { background-color: #3D2914; padding: 30px; text-align: center; }
            .header h1 { color: #F5F0E6; font-family: 'Playfair Display', Georgia, serif; margin: 0; font-size: 28px; }
            .header p { color: #C9A227; margin: 5px 0 0; font-size: 12px; letter-spacing: 2px; }
            .content { padding: 30px; }
            .title { font-family: 'Playfair Display', Georgia, serif; font-size: 24px; color: #3D2914; margin-bottom: 20px; }
            .details { background: #F5F0E6; padding: 20px; border-radius: 4px; margin: 20px 0; }
            .detail-row { display: flex; justify-content: space-between; gap: 16px; padding: 8px 0; border-bottom: 1px solid #D4A574; }
            .detail-row:last-child { border-bottom: none; }
            .label { color: #5C4033; }
            .value { font-weight: 600; color: #3D2914; text-align: right; }
            .footer { background: #3D2914; color: #D4A574; padding: 20px; text-align: center; font-size: 14px; }
            .footer a { color: #C9A227; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Ezcaray Custom Bikes</h1>
              <p>RESTAURACION DE MOTOS</p>
            </div>
            <div class="content">
              <h2 class="title">¡Cita confirmada!</h2>
              <p>Hola ${safeName},</p>
              <p>Gracias por reservar con Ezcaray Custom Bikes. Tu cita ha quedado confirmada y estaremos encantados de atenderte.</p>
              
              <div class="details">
                <div class="detail-row">
                  <span class="label">Moto:</span>
                  <span class="value">${safeBrand} ${safeModel}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Servicio:</span>
                  <span class="value">${safeServiceName}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Fecha:</span>
                  <span class="value">${safeFormattedDate}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Hora:</span>
                  <span class="value">${safeTime}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Contacto:</span>
                  <span class="value">${safePhone}</span>
                </div>
                ${safeDescription ? `
                <div class="detail-row">
                  <span class="label">Notas:</span>
                  <span class="value">${safeDescription}</span>
                </div>
                ` : ""}
              </div>
              
              <p><strong>Te pedimos que llegues 10 minutos antes</strong> para poder realizar la recepción con calma.</p>
              <p>Si necesitas cambiar la cita o tienes alguna duda, llámanos al (555) 987-6543.</p>
              <p>¡Nos vemos pronto!</p>
            </div>
            <div class="footer">
              <p>Ezcaray Custom Bikes | 456 Chrome Avenue, Motorcycle Row</p>
              <p><a href="mailto:hello@ironandoil.com">hello@ironandoil.com</a> | (555) 987-6543</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el correo de confirmación" },
      { status: 500 },
    );
  }
}
