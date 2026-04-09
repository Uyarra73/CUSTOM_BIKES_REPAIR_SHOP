"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, Calendar, ShipWheel, Wrench, User, Mail, Phone } from "lucide-react";
import { bikeBrands, services, Service } from "@/data/bikes";

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
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"
];

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
          service: selectedService?.name,
          date: bookingData.date,
          time: bookingData.time,
          description: bookingData.description,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send confirmation email");
      }

      setSubmitted(true);
    } catch (err) {
      setError("There was a problem sending your confirmation email. Please call us at (555) 987-6543.");
      console.error("Booking error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const getToday = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  if (submitted) {
    return (
      <div className="vintage-card max-w-2xl mx-auto text-center py-8 sm:py-12 px-4 sm:px-6">
        <div className="w-16 sm:w-20 h-16 sm:h-20 bg-vintage-sage rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <Check className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
        </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-vintage-darkBrown mb-4">
          Appointment Confirmed!
        </h2>
        <p className="text-sm sm:text-base text-vintage-brown mb-6">
          Thank you for booking with Iron & Oil. We look forward to seeing you!
        </p>
        <div className="bg-vintage-cream p-4 sm:p-6 text-left max-w-md mx-auto text-sm sm:text-base">
          <h4 className="font-serif font-semibold text-vintage-darkBrown mb-3">Appointment Details</h4>
          <p><strong>Motorcycle:</strong> {bookingData.brand} {bookingData.model}</p>
          <p><strong>Service:</strong> {selectedService?.name}</p>
          <p><strong>Date:</strong> {new Date(bookingData.date).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
          <p><strong>Time:</strong> {bookingData.time}</p>
          <p><strong>Contact:</strong> {bookingData.name}</p>
        </div>
        <p className="mt-6 text-sm text-vintage-tan">
          A confirmation email has been sent to {bookingData.email}
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
              <ShipWheel className="w-5 sm:w-6 h-5 sm:h-6 text-vintage-gold flex-shrink-0" />
              <h2 className="font-serif text-lg sm:text-2xl font-bold text-vintage-darkBrown">Select Your Motorcycle</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block font-serif text-sm font-semibold text-vintage-brown mb-2">
                  Motorcycle Brand
                </label>
                <select
                  value={bookingData.brand}
                  onChange={(e) => updateData("brand", e.target.value)}
                  className="vintage-select"
                >
                  <option value="">Select a brand...</option>
                  {bikeBrands.map((brand) => (
                    <option key={brand.name} value={brand.name}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>
              
              {bookingData.brand && (
                <div>
                  <label className="block font-serif text-sm font-semibold text-vintage-brown mb-2">
                    Model
                  </label>
                  <select
                    value={bookingData.model}
                    onChange={(e) => updateData("model", e.target.value)}
                    className="vintage-select"
                    disabled={!selectedBrand}
                  >
                    <option value="">Select a model...</option>
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
              <Wrench className="w-5 sm:w-6 h-5 sm:h-6 text-vintage-gold flex-shrink-0" />
              <h2 className="font-serif text-lg sm:text-2xl font-bold text-vintage-darkBrown">Choose Service</h2>
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
                      <p className="text-xs text-vintage-tan mt-1">Duration: {service.duration}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <div className="mt-6">
              <label className="block font-serif text-sm font-semibold text-vintage-brown mb-2">
                Additional Notes (optional)
              </label>
              <textarea
                value={bookingData.description}
                onChange={(e) => updateData("description", e.target.value)}
                className="vintage-input resize-none"
                rows={3}
                placeholder="Describe any specific issues or requests..."
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 sm:w-6 h-5 sm:h-6 text-vintage-gold flex-shrink-0" />
              <h2 className="font-serif text-lg sm:text-2xl font-bold text-vintage-darkBrown">Pick Date & Time</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block font-serif text-sm font-semibold text-vintage-brown mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => updateData("date", e.target.value)}
                  min={getToday()}
                  className="vintage-input"
                />
              </div>
              
              <div>
                <label className="block font-serif text-sm font-semibold text-vintage-brown mb-2">
                  Preferred Time
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
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
              <User className="w-5 sm:w-6 h-5 sm:h-6 text-vintage-gold flex-shrink-0" />
              <h2 className="font-serif text-lg sm:text-2xl font-bold text-vintage-darkBrown">Your Details</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block font-serif text-sm font-semibold text-vintage-brown mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-vintage-tan" />
                  <input
                    type="text"
                    value={bookingData.name}
                    onChange={(e) => updateData("name", e.target.value)}
                    className="vintage-input pl-10 sm:pl-12"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-serif text-sm font-semibold text-vintage-brown mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-vintage-tan" />
                  <input
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => updateData("email", e.target.value)}
                    className="vintage-input pl-10 sm:pl-12"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-serif text-sm font-semibold text-vintage-brown mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-vintage-tan" />
                  <input
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
            <h2 className="font-serif text-lg sm:text-2xl font-bold text-vintage-darkBrown mb-6">Confirm Your Booking</h2>
            
            <div className="bg-vintage-cream p-4 sm:p-6 space-y-3 sm:space-y-4 text-sm sm:text-base">
              <div className="flex justify-between gap-2 border-b border-vintage-tan pb-3">
                <span className="text-vintage-brown">Motorcycle</span>
                <span className="font-semibold text-vintage-darkBrown text-right">{bookingData.brand} {bookingData.model}</span>
              </div>
              <div className="flex justify-between gap-2 border-b border-vintage-tan pb-3">
                <span className="text-vintage-brown">Service</span>
                <span className="font-semibold text-vintage-darkBrown text-right">{selectedService?.name}</span>
              </div>
              <div className="flex justify-between gap-2 border-b border-vintage-tan pb-3">
                <span className="text-vintage-brown">Date</span>
                <span className="font-semibold text-vintage-darkBrown text-right">
                  {bookingData.date && new Date(bookingData.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                </span>
              </div>
              <div className="flex justify-between gap-2 border-b border-vintage-tan pb-3">
                <span className="text-vintage-brown">Time</span>
                <span className="font-semibold text-vintage-darkBrown">{bookingData.time}</span>
              </div>
              <div className="flex justify-between gap-2 border-b border-vintage-tan pb-3">
                <span className="text-vintage-brown">Name</span>
                <span className="font-semibold text-vintage-darkBrown text-right">{bookingData.name}</span>
              </div>
              <div className="flex justify-between gap-2 border-b border-vintage-tan pb-3">
                <span className="text-vintage-brown">Email</span>
                <span className="font-semibold text-vintage-darkBrown text-right break-all">{bookingData.email}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-vintage-brown">Phone</span>
                <span className="font-semibold text-vintage-darkBrown">{bookingData.phone}</span>
              </div>
            </div>
            
            {bookingData.description && (
              <div className="mt-4">
                <span className="text-vintage-brown text-xs sm:text-sm">Notes:</span>
                <p className="text-sm sm:text-base text-vintage-darkBrown">{bookingData.description}</p>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 border-t border-vintage-tan">
          {step > 1 ? (
            <button onClick={prevStep} className="vintage-button-secondary flex items-center justify-center gap-2 text-sm sm:text-base order-2 sm:order-1">
              <ChevronLeft className="w-4 h-4" /> Back
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
              Next <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`vintage-button flex items-center justify-center gap-2 text-sm sm:text-base order-1 sm:order-2 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isLoading ? (
                <>Sending...</>
              ) : (
                <><Check className="w-4 h-4" /> Confirm Booking</>
              )}
            </button>
          )}
        </div>

        {error && (
          <div className="mt-4 p-3 sm:p-4 bg-red-100 border border-red-400 text-red-700 rounded text-sm sm:text-base">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
