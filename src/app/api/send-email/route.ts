import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

interface BookingEmailData {
  name: string;
  email: string;
  phone: string;
  brand: string;
  model: string;
  service: string;
  date: string;
  time: string;
  description?: string;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data: BookingEmailData = await request.json();

    const formattedDate = formatDate(data.date);

    await resend.emails.send({
      from: "Iron & Oil <onboarding@resend.dev>",
      to: data.email,
      subject: `Appointment Confirmed - ${formattedDate}`,
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
            .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #D4A574; }
            .detail-row:last-child { border-bottom: none; }
            .label { color: #5C4033; }
            .value { font-weight: 600; color: #3D2914; }
            .footer { background: #3D2914; color: #D4A574; padding: 20px; text-align: center; font-size: 14px; }
            .footer a { color: #C9A227; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Iron & Oil</h1>
              <p>MOTORCYCLE RESTORATION</p>
            </div>
            <div class="content">
              <h2 class="title">Appointment Confirmed!</h2>
              <p>Dear ${data.name},</p>
              <p>Thank you for booking with Iron & Oil. Your appointment has been confirmed and we're looking forward to seeing you!</p>
              
              <div class="details">
                <div class="detail-row">
                  <span class="label">Motorcycle:</span>
                  <span class="value">${data.brand} ${data.model}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Service:</span>
                  <span class="value">${data.service}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Date:</span>
                  <span class="value">${formattedDate}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Time:</span>
                  <span class="value">${data.time}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Contact:</span>
                  <span class="value">${data.phone}</span>
                </div>
                ${data.description ? `
                <div class="detail-row">
                  <span class="label">Notes:</span>
                  <span class="value">${data.description}</span>
                </div>
                ` : ""}
              </div>
              
              <p><strong>Please arrive 10 minutes early</strong> to allow time for check-in.</p>
              <p>If you need to reschedule or have any questions, please call us at (555) 987-6543.</p>
              <p>See you soon!</p>
            </div>
            <div class="footer">
              <p>Iron & Oil | 456 Chrome Avenue, Motorcycle Row</p>
              <p><a href="mailto:hello@ironandoil.com">hello@ironandoil.com</a> | (555) 987-6543</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send confirmation email" },
      { status: 500 }
    );
  }
}
