"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, Calendar, ShipWheel, Wrench, User, Mail, Phone } from "lucide-react";
import { bikeBrands, services } from "@/data/bikes";

interface BookingData {
  brand: string;
  model: string;
  service: string;
  description: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
}

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00"
];

function formatBookingDate(date: string, options: Intl.DateTimeFormatOptions): string {
  const [year, month, day] = date.split("-").map(Number);
  const parsedDate = new Date(year, (month ?? 1) - 1, day ?? 1);

  return new Intl.DateTimeFormat("es-ES", options).format(parsedDate);
}

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    brand: "",
    model: "",
    service: "",
    description: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedBrand = bikeBrands.find(b => b.name === bookingData.brand);
  const selectedService = services.find(s => s.id === bookingData.service);

  const updateData = (field: keyof BookingData, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
    if (field === "brand") {
      setBookingData(prev => ({ ...prev, model: "" }));
    }
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const canProceed = () => {
    switch (step) {
      case 1: return bookingData.brand && bookingData.model;
      case 2: return bookingData.service;
      case 3: return bookingData.date && bookingData.time;
      case 4: return bookingData.name && bookingData.email && bookingData.phone;
      default: return true;
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: bookingData.name,
          email: bookingData.email,
          phone: bookingData.phone,
          brand: bookingData.brand,
          model: bookingData.model,
          serviceId: bookingData.service,
          date: bookingData.date,
          time: bookingData.time,
          description: bookingData.description,
        }),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el correo de confirmación");
      }

      setSubmitted(true);
    } catch (err) {
      setError("Ha habido un problema al enviar el correo de confirmación. Llámanos al (555) 987-6543.");
      console.error("Error de reserva:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const getToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  if (submitted) {
    return (
      <div className="vintage-card max-w-2xl mx-auto text-center py-8 sm:py-12 px-4 sm:px-6">
        <div className="w-16 sm:w-20 h-16 sm:h-20 bg-vintage-sage rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <Check className="w-8 sm:w-10 h-8 sm:h-10 text-white" aria-hidden="true" />
        </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-vintage-darkBrown mb-4">
          ¡Cita Confirmada!
        </h2>
        <p className="text-sm sm:text-base text-vintage-brown mb-6">
          Gracias por reservar con Ezcaray Custom Bikes. ¡Te esperamos en el taller!
        </p>
        <div className="bg-vintage-cream p-4 sm:p-6 text-left max-w-md mx-auto text-sm sm:text-base">
          <h4 className="font-serif font-semibold text-vintage-darkBrown mb-3">Detalles de la Cita</h4>
          <p><strong>Moto:</strong> {bookingData.brand} {bookingData.model}</p>
          <p><strong>Servicio:</strong> {selectedService?.name}</p>
          <p><strong>Fecha:</strong> {formatBookingDate(bookingData.date, { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
          <p><strong>Hora:</strong> {bookingData.time}</p>
          <p><strong>Contacto:</strong> {bookingData.name}</p>
        </div>
        <p className="mt-6 text-sm text-vintage-tan">
          Hemos enviado un correo de confirmación a {bookingData.email}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-0">
      <div className="flex items-center justify-between mb-6 sm:mb-8 overflow-x-auto pb-2">
        {[1, 2, 3, 4, 5].map((s) => (
          <div key={s} className="flex items-center flex-shrink-0">
            <div
              className={`w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center font-serif font-bold text-sm sm:text-base transition-colors ${
                s < step
                  ? "bg-vintage-sage text-white"
                  : s === step
                  ? "bg-vintage-brown text-white"
                  : "bg-vintage-tan text-vintage-darkBrown"
              }`}
            >
              {s < step ? <Check className="w-4 sm:w-5 h-4 sm:h-5" /> : s}
            </div>
            {s < 5 && (
              <div className={`w-8 sm:w-12 md:w-20 h-1 mx-1 sm:mx-2 ${s < step ? "bg-vintage-sage" : "bg-vintage-tan"}`} />
            )}
          </div>
        ))}
      </div>

      <div className="vintage-card">
        {step === 1 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ShipWheel className="w-5 sm:w-6 h-5 sm:h-6 text-vintage-gold flex-shrink-0" aria-hidden="true" />
              <h2 className="font-serif text-lg sm:text-2xl font-bold text-vintage-darkBrown">Selecciona Tu Moto</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="brand" className="block font-serif text-sm font-semibold text-vintage-brown mb-2">
                  Marca de la Moto
                </label>
                <select
                  id="brand"
                  value={bookingData.brand}
                  onChange={(e) => updateData("brand", e.target.value)}
                  className="vintage-select"
                >
                  <option value="">Selecciona una marca...</option>
                  {bikeBrands.map((brand) => (
                    <option key={brand.name} value={brand.name}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>
              
              {bookingData.brand && (
                <div>
                  <label htmlFor="model" className="block font-serif text-sm font-semibold text-vintage-brown mb-2">
                    Modelo
                  </label>
                  <select
                    id="model"
                    value={bookingData.model}
                    onChange={(e) => updateData("model", e.target.value)}
                    className="vintage-select"
                    disabled={!selectedBrand}
                  >
                    <option value="">Selecciona un modelo...</option>
                    {selectedBrand?.models.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-5 sm:w-6 h-5 sm:h-6 text-vintage-gold flex-shrink-0" aria-hidden="true" />
              <h2 className="font-serif text-lg sm:text-2xl font-bold text-vintage-darkBrown">Elige el Servicio</h2>
            </div>
            
            <div className="space-y-3">
              {services.map((service) => (
                <label
                  key={service.id}
                  className={`block p-3 sm:p-4 border-2 cursor-pointer transition-all ${
                    bookingData.service === service.id
                      ? "border-vintage-brown bg-vintage-cream"
                      : "border-vintage-tan hover:border-vintage-brown"
                  }`}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <input
                      type="radio"
                      name="service"
                      value={service.id}
                      checked={bookingData.service === service.id}
                      onChange={(e) => updateData("service", e.target.value)}
                      className="mt-1 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start sm:items-center justify-between gap-2 flex-wrap">
                        <span className="font-serif font-semibold text-sm sm:text-base text-vintage-darkBrown">
                          {service.name}
                        </span>
                        <span className="font-serif text-sm sm:text-base text-vintage-gold font-bold whitespace-nowrap">{service.price}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-vintage-brown mt-1">{service.description}</p>
                      <p className="text-xs text-vintage-tan mt-1">Duración: {service.duration}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <div className="mt-6">
              <label htmlFor="description" className="block font-serif text-sm font-semibold text-vintage-brown mb-2">
                Notas Adicionales (opcional)
              </label>
              <textarea
                id="description"
                name="description"
                value={bookingData.description}
                onChange={(e) => updateData("description", e.target.value)}
                className="vintage-input resize-none"
                rows={3}
                placeholder="Describe cualquier problema o petición concreta…"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 sm:w-6 h-5 sm:h-6 text-vintage-gold flex-shrink-0" aria-hidden="true" />
              <h2 className="font-serif text-lg sm:text-2xl font-bold text-vintage-darkBrown">Elige Fecha y Hora</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="date" className="block font-serif text-sm font-semibold text-vintage-brown mb-2">
                  Fecha Preferida
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={bookingData.date}
                  onChange={(e) => updateData("date", e.target.value)}
                  min={getToday()}
                  className="vintage-input"
                />
              </div>
              
              <div>
                <label className="block font-serif text-sm font-semibold text-vintage-brown mb-2" id="preferred-time-label">
                  Hora Preferida
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2" role="group" aria-labelledby="preferred-time-label">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => updateData("time", time)}
                      className={`py-2 px-2 sm:px-3 text-xs sm:text-sm font-medium border-2 transition-all ${
                        bookingData.time === time
                          ? "bg-vintage-brown text-vintage-cream border-vintage-brown"
                          : "border-vintage-tan hover:border-vintage-brown"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <User className="w-5 sm:w-6 h-5 sm:h-6 text-vintage-gold flex-shrink-0" aria-hidden="true" />
              <h2 className="font-serif text-lg sm:text-2xl font-bold text-vintage-darkBrown">Tus Datos</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-serif text-sm font-semibold text-vintage-brown mb-2">
                  Nombre Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-vintage-tan" aria-hidden="true" />
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    type="text"
                    value={bookingData.name}
                    onChange={(e) => updateData("name", e.target.value)}
                    className="vintage-input pl-10 sm:pl-12"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block font-serif text-sm font-semibold text-vintage-brown mb-2">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-vintage-tan" aria-hidden="true" />
                  <input
                    id="email"
                    name="email"
                    autoComplete="email"
                    spellCheck={false}
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => updateData("email", e.target.value)}
                    className="vintage-input pl-10 sm:pl-12"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block font-serif text-sm font-semibold text-vintage-brown mb-2">
                  Teléfono
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-vintage-tan" aria-hidden="true" />
                  <input
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    type="tel"
                    value={bookingData.phone}
                    onChange={(e) => updateData("phone", e.target.value)}
                    className="vintage-input pl-10 sm:pl-12"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h2 className="font-serif text-lg sm:text-2xl font-bold text-vintage-darkBrown mb-6">Confirma Tu Reserva</h2>
            
            <div className="bg-vintage-cream p-4 sm:p-6 space-y-3 sm:space-y-4 text-sm sm:text-base">
              <div className="flex justify-between gap-2 border-b border-vintage-tan pb-3">
                <span className="text-vintage-brown">Moto</span>
                <span className="font-semibold text-vintage-darkBrown text-right">{bookingData.brand} {bookingData.model}</span>
              </div>
              <div className="flex justify-between gap-2 border-b border-vintage-tan pb-3">
                <span className="text-vintage-brown">Servicio</span>
                <span className="font-semibold text-vintage-darkBrown text-right">{selectedService?.name}</span>
              </div>
              <div className="flex justify-between gap-2 border-b border-vintage-tan pb-3">
                <span className="text-vintage-brown">Fecha</span>
                <span className="font-semibold text-vintage-darkBrown text-right">
                  {bookingData.date && formatBookingDate(bookingData.date, { weekday: "short", month: "short", day: "numeric" })}
                </span>
              </div>
              <div className="flex justify-between gap-2 border-b border-vintage-tan pb-3">
                <span className="text-vintage-brown">Hora</span>
                <span className="font-semibold text-vintage-darkBrown">{bookingData.time}</span>
              </div>
              <div className="flex justify-between gap-2 border-b border-vintage-tan pb-3">
                <span className="text-vintage-brown">Nombre</span>
                <span className="font-semibold text-vintage-darkBrown text-right">{bookingData.name}</span>
              </div>
              <div className="flex justify-between gap-2 border-b border-vintage-tan pb-3">
                <span className="text-vintage-brown">Correo</span>
                <span className="font-semibold text-vintage-darkBrown text-right break-all">{bookingData.email}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-vintage-brown">Teléfono</span>
                <span className="font-semibold text-vintage-darkBrown">{bookingData.phone}</span>
              </div>
            </div>
            
            {bookingData.description && (
              <div className="mt-4">
                <span className="text-vintage-brown text-xs sm:text-sm">Notas:</span>
                <p className="text-sm sm:text-base text-vintage-darkBrown">{bookingData.description}</p>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 border-t border-vintage-tan">
          {step > 1 ? (
            <button onClick={prevStep} className="vintage-button-secondary flex items-center justify-center gap-2 text-sm sm:text-base order-2 sm:order-1">
              <ChevronLeft className="w-4 h-4" aria-hidden="true" /> Atrás
            </button>
          ) : (
            <div className="order-2 sm:order-1" />
          )}
          
          {step < 5 ? (
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className={`vintage-button flex items-center justify-center gap-2 text-sm sm:text-base order-1 sm:order-2 ${!canProceed() ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              Siguiente <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`vintage-button flex items-center justify-center gap-2 text-sm sm:text-base order-1 sm:order-2 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isLoading ? (
                <>Enviando…</>
              ) : (
                <><Check className="w-4 h-4" aria-hidden="true" /> Confirmar Reserva</>
              )}
            </button>
          )}
        </div>

        {error && (
          <div
            className="mt-4 p-3 sm:p-4 bg-red-100 border border-red-400 text-red-700 rounded text-sm sm:text-base"
            aria-live="polite"
          >
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
