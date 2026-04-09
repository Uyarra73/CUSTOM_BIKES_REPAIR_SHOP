import Link from "next/link";
import { services } from "@/data/bikes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-vintage-darkBrown py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-vintage-cream mb-4">
              Our Services
            </h1>
            <div className="ornament-divider">
              <span>⚙</span>
            </div>
            <p className="text-sm sm:text-lg text-vintage-tan max-w-2xl mx-auto mt-6">
              From routine maintenance to full frame-off restorations, 
              we offer comprehensive motorcycle services for all makes and models.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-vintage-cream">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="vintage-card hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4 gap-4 flex-wrap">
                    <h3 className="font-serif text-lg sm:text-2xl font-bold text-vintage-darkBrown">
                      {service.name}
                    </h3>
                    <span className="font-serif text-lg sm:text-xl font-bold text-vintage-gold whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-vintage-brown mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-vintage-tan text-xs sm:text-sm">
                    <Clock className="w-4 h-4" />
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
                Not Sure What You Need?
              </h2>
              <p className="text-sm sm:text-base text-vintage-brown text-center mb-6">
                Book a free consultation and we'll assess your motorcycle and recommend the best service.
              </p>
              <div className="text-center">
                <Link href="/book" className="vintage-button inline-flex items-center gap-2 text-sm sm:text-base">
                  Book Consultation <ArrowRight className="w-4 h-4" />
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
