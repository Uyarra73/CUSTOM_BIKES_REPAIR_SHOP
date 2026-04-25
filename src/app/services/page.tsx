import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/bikes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios de Moto | Ezcaray Custom Bikes",
  description: "Descubre los servicios de restauración, reconstrucción, puesta a punto, electricidad, frenos, suspensión y trabajos a medida de Ezcaray Custom Bikes.",
};

const serviceImages: Record<string, string> = {
  "full-restoration": "https://images.pexels.com/photos/1599/building-vehicle-motorbike-motorcycle.jpg?cs=srgb&dl=pexels-splitshire-1599.jpg&fm=jpg",
  "engine-rebuild": "https://images.pexels.com/photos/8550664/pexels-photo-8550664.jpeg?cs=srgb&dl=pexels-kindelmedia-8550664.jpg&fm=jpg",
  "carburetor-rebuild": "https://images.pexels.com/photos/11890958/pexels-photo-11890958.jpeg?cs=srgb&dl=pexels-mickhaupt-11890958.jpg&fm=jpg",
  electrical: "https://images.pexels.com/photos/3855231/pexels-photo-3855231.jpeg?cs=srgb&dl=pexels-olly-3855231.jpg&fm=jpg",
  suspension: "https://images.pexels.com/photos/9606859/pexels-photo-9606859.jpeg?cs=srgb&dl=pexels-anastasia-shuraeva-9606859.jpg&fm=jpg",
  "brake-system": "https://images.pexels.com/photos/33516391/pexels-photo-33516391.jpeg?cs=srgb&dl=pexels-b-o-minh-1883288-33516391.jpg&fm=jpg",
  "custom-build": "https://images.pexels.com/photos/12282074/pexels-photo-12282074.jpeg?cs=srgb&dl=pexels-maarten-bressers-122441826-12282074.jpg&fm=jpg",
  "tune-up": "https://images.pexels.com/photos/5184921/pexels-photo-5184921.jpeg?cs=srgb&dl=pexels-cottonbro-5184921.jpg&fm=jpg",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-1">
        <section className="bg-vintage-darkBrown py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-vintage-cream mb-4">
              Nuestros Servicios
            </h1>
            <div className="ornament-divider">
              <span>⚙</span>
            </div>
            <p className="text-sm sm:text-lg text-vintage-tan max-w-2xl mx-auto mt-6">
              Desde el mantenimiento habitual hasta restauraciones integrales chasis al desnudo,
              ofrecemos un servicio completo para motos de todas las marcas y modelos.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-vintage-cream">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {services.map((service) => (
                <div key={service.id} className="vintage-card relative overflow-hidden hover:shadow-lg transition-shadow min-h-[260px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-[0.17] saturate-75"
                    aria-hidden="true"
                    style={{ backgroundImage: `url('${serviceImages[service.id]}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/92 via-vintage-cream/88 to-vintage-cream/95" aria-hidden="true" />

                  <div className="relative z-10 flex items-start justify-between mb-4 gap-4 flex-wrap">
                    <h3 className="font-serif text-lg sm:text-2xl font-bold text-vintage-darkBrown">
                      {service.name}
                    </h3>
                    <span className="font-serif text-lg sm:text-xl font-bold text-vintage-gold whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                  <p className="relative z-10 text-sm sm:text-base text-vintage-brown mb-4 max-w-[44ch]">
                    {service.description}
                  </p>
                  <div className="relative z-10 flex items-center gap-2 text-vintage-tan text-xs sm:text-sm">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    <span>{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-vintage-tan/20">
          <div className="max-w-4xl mx-auto">
            <div className="vintage-card">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-vintage-darkBrown mb-6 text-center">
                ¿No Sabes Qué Necesitas?
              </h2>
              <p className="text-sm sm:text-base text-vintage-brown text-center mb-6">
                Reserva una consulta gratuita y evaluaremos tu moto para recomendarte el mejor servicio.
              </p>
              <div className="text-center">
                <Link href="/book" className="vintage-button inline-flex items-center gap-2 text-sm sm:text-base">
                  Reservar Consulta <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
