import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShipWheel, Wrench, Clock, Award, ArrowRight, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ezcaray Custom Bikes | Taller de Motos Clásicas y Custom",
  description: "Restauración, reparación y servicio experto para motos clásicas, custom y vintage en Ezcaray Custom Bikes.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-1">
        <section className="relative bg-vintage-darkBrown py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative h-[72vw] w-[72vw] min-h-[320px] min-w-[320px] max-h-[900px] max-w-[900px]">
            <Image
              src="/images/logo.png"
              alt=""
              fill
              priority
              aria-hidden="true"
              className="object-contain object-center opacity-30"
            />
            </div>
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,240,230,0.08),transparent_34%),linear-gradient(180deg,rgba(61,41,20,0.46)_0%,rgba(61,41,20,0.76)_55%,rgba(61,41,20,0.92)_100%)]" />

          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(201, 162, 39, 0.1) 10px,
                rgba(201, 162, 39, 0.1) 20px
              )`,
            }} />
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center min-h-[42vh] flex flex-col items-center justify-center">
              <p className="text-vintage-gold font-serif tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">
                Est. 1973
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-vintage-cream mb-6">
                Ezcaray Custom Bikes
              </h1>
              <div className="ornament-divider mb-6">
                <span>⚙</span>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-vintage-tan max-w-2xl mx-auto mb-10">
                Donde la pasión se une con la precisión. Restauración y reparación experta para
                motos vintage, custom y clásicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book" className="vintage-button text-sm sm:text-lg">
                  Reservar Cita
                </Link>
                <Link href="/services" className="vintage-button-secondary text-sm sm:text-lg">
                  Servicios
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-vintage-cream">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-vintage-darkBrown mb-4">
                Nuestros Servicios
              </h2>
              <div className="ornament-divider">
                <span>⚙</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              {[
                {
                  icon: Wrench,
                  title: "Restauración Experta",
                  description: "Desde cafe racers hasta baggers, nuestros maestros mecánicos devuelven la vida a cada clásica.",
                },
                {
                  icon: ShipWheel,
                  title: "Proyectos a Medida",
                  description: "Diseña la moto de tus sueños desde cero junto a nuestros especialistas.",
                },
                {
                  icon: Clock,
                  title: "Trabajo de Calidad",
                  description: "Nos tomamos el tiempo necesario para hacerlo bien. Cada tornillo, cada cable y cada ajuste cuentan.",
                },
              ].map((feature) => (
                <div key={feature.title} className="vintage-card text-center">
                  <div className="w-16 h-16 bg-vintage-brown rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-vintage-gold" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-vintage-darkBrown mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-vintage-brown">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-vintage-tan/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-vintage-darkBrown mb-6">
                  Un Legado de Oficio
                </h2>
                <p className="text-sm sm:text-base text-vintage-brown mb-6 leading-relaxed">
                  Durante más de 55 años, Ezcaray Custom Bikes ha sido un referente para los amantes de las motos.
                  Entendemos que tu moto es mucho más que un medio de transporte: es historia, pasión y una parte de ti.
                </p>
                <p className="text-sm sm:text-base text-vintage-brown mb-8 leading-relaxed">
                  Nuestro equipo de maestros mecánicos reúne décadas de experiencia, piezas de calidad
                  y una atención minuciosa al detalle. Ya sea una Harley anterior a la guerra
                  o una custom moderna, tratamos cada moto con el respeto que merece.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="font-serif text-3xl sm:text-4xl font-bold text-vintage-gold">55+</p>
                    <p className="text-xs sm:text-sm text-vintage-brown">Años de Experiencia</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-3xl sm:text-4xl font-bold text-vintage-gold">8K+</p>
                    <p className="text-xs sm:text-sm text-vintage-brown">Motos Restauradas</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-3xl sm:text-4xl font-bold text-vintage-gold">10</p>
                    <p className="text-xs sm:text-sm text-vintage-brown">Maestros Mecánicos</p>
                  </div>
                </div>
              </div>
              <div className="vintage-card">
                <div className="bg-vintage-darkBrown text-vintage-cream p-6 sm:p-8 text-center">
                  <Award className="w-12 sm:w-16 h-12 sm:h-16 text-vintage-gold mx-auto mb-4" aria-hidden="true" />
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">
                    Servicio Reconocido
                  </h3>
                  <p className="text-sm sm:text-base text-vintage-tan">
                    Elegido como mejor taller de motos de la región durante 5 años consecutivos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-vintage-cream px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="vintage-card overflow-hidden p-0">
              <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[260px] overflow-hidden bg-vintage-darkBrown">
                  <div
                    className="absolute inset-0 opacity-25"
                    aria-hidden="true"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, rgba(201,162,39,0.45), transparent 40%), radial-gradient(circle at 30% 20%, rgba(245,240,230,0.18), transparent 28%), radial-gradient(circle at 70% 60%, rgba(139,154,125,0.2), transparent 24%)",
                    }}
                  />
                  <div className="relative z-10 flex h-full flex-col justify-between p-8 text-vintage-cream">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-vintage-gold/60 bg-vintage-gold/10">
                      <ShoppingBag className="h-8 w-8 text-vintage-gold" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-vintage-gold">Nuevo Espacio</p>
                      <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">Tienda</h2>
                    </div>
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  <p className="text-sm uppercase tracking-[0.3em] text-vintage-tan">Merchandising</p>
                  <h3 className="mt-3 font-serif text-3xl font-bold text-vintage-darkBrown sm:text-4xl">
                    Lleva el carácter del taller contigo
                  </h3>
                  <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-vintage-brown sm:text-base">
                    Hemos abierto una colección de ropa, accesorios y piezas de lifestyle con estética de
                    garaje, acabados honestos y detalles inspirados en el universo Ezcaray Custom Bikes.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link href="/tienda" className="vintage-button inline-flex items-center justify-center gap-2 text-sm sm:text-base">
                      Ver Tienda <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                    <Link href="/book" className="vintage-button-secondary inline-flex items-center justify-center text-sm sm:text-base">
                      Consultar Disponibilidad
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-vintage-darkBrown">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-vintage-cream mb-6">
              ¿Listo para Rodar?
            </h2>
            <p className="text-sm sm:text-lg text-vintage-tan mb-8">
              Reserva tu cita hoy y deja que devolvamos tu moto a la vida.
            </p>
            <Link href="/book" className="vintage-button text-sm sm:text-lg inline-flex items-center gap-2">
              Reservar Servicio <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
