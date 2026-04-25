import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Reservar Servicio de Moto | Ezcaray Custom Bikes",
  description: "Reserva una cita para reparación, restauración o consulta con Ezcaray Custom Bikes en unos pocos pasos guiados.",
};

export default function BookPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-1 py-8 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-vintage-darkBrown mb-4">
              Reservar Cita
            </h1>
            <div className="ornament-divider">
              <span>⚙</span>
            </div>
            <p className="text-sm sm:text-base text-vintage-brown mt-6 max-w-xl mx-auto">
              Programa el servicio de tu moto en unos pocos pasos. Nosotros nos encargamos del resto.
            </p>
          </div>
          
          <BookingForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
