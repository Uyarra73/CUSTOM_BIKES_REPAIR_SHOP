import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeEuro, Package, ShieldCheck, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { merchCategories, merchItems } from "@/data/merch";

export const metadata: Metadata = {
  title: "Tienda | Ezcaray Custom Bikes",
  description: "Descubre la tienda de merchandising de Ezcaray Custom Bikes con ropa, accesorios y piezas de lifestyle inspiradas en el taller.",
};

function MerchMockup({ itemId }: { itemId: string }) {
  const logo = (
    <Image
      src="/images/logo.png"
      alt=""
      fill
      aria-hidden="true"
      className="object-contain"
    />
  );

  switch (itemId) {
    case "camiseta-taller":
      return (
        <div className="relative mx-auto h-[260px] w-[220px]">
          <div className="absolute inset-x-10 top-0 h-16 rounded-t-[28px] bg-[#2c2c2c]" />
          <div className="absolute left-0 top-10 h-20 w-16 -rotate-[28deg] rounded-[28px] bg-[#2c2c2c]" />
          <div className="absolute right-0 top-10 h-20 w-16 rotate-[28deg] rounded-[28px] bg-[#2c2c2c]" />
          <div className="absolute inset-x-6 top-10 bottom-0 rounded-[34px] border border-white/10 bg-[#232323] shadow-[0_28px_50px_rgba(0,0,0,0.35)]" />
          <div className="absolute inset-x-[54px] top-[86px] h-[108px]">
            {logo}
          </div>
          <div className="absolute inset-x-12 bottom-10 border-t border-dashed border-vintage-gold/40" />
        </div>
      );
    case "sudadera-cremallera":
      return (
        <div className="relative mx-auto h-[260px] w-[228px]">
          <div className="absolute inset-x-12 top-0 h-16 rounded-t-[26px] bg-[#181818]" />
          <div className="absolute left-1 top-12 h-20 w-16 -rotate-[24deg] rounded-[24px] bg-[#181818]" />
          <div className="absolute right-1 top-12 h-20 w-16 rotate-[24deg] rounded-[24px] bg-[#181818]" />
          <div className="absolute inset-x-6 top-10 bottom-0 rounded-[30px] border border-white/10 bg-gradient-to-b from-[#2f2f2f] to-[#171717] shadow-[0_30px_60px_rgba(0,0,0,0.4)]" />
          <div className="absolute inset-y-12 left-1/2 w-px -translate-x-1/2 bg-vintage-cream/40" />
          <div className="absolute left-1/2 top-[84px] h-[84px] w-[84px] -translate-x-1/2 opacity-90">
            {logo}
          </div>
          <div className="absolute left-[72px] top-[66px] h-6 w-6 rounded-full border border-vintage-cream/35" />
        </div>
      );
    case "gorra-patch":
      return (
        <div className="relative mx-auto h-[220px] w-[260px]">
          <div className="absolute left-10 right-10 top-10 h-[108px] rounded-t-[100px] rounded-b-[42px] border border-white/10 bg-gradient-to-b from-[#363636] to-[#1d1d1d] shadow-[0_24px_46px_rgba(0,0,0,0.35)]" />
          <div className="absolute left-20 right-20 top-[76px] h-[42px] rounded-[10px] border border-vintage-gold/35 bg-[#262626]" />
          <div className="absolute left-[92px] right-[92px] top-[82px] h-[28px]">
            {logo}
          </div>
          <div className="absolute right-2 top-[118px] h-10 w-[132px] rounded-r-[80px] rounded-l-[22px] bg-[#1a1a1a]" />
        </div>
      );
    case "mug-enamel":
      return (
        <div className="relative mx-auto h-[220px] w-[220px]">
          <div className="absolute inset-x-7 top-8 bottom-8 rounded-b-[26px] rounded-t-[10px] border border-[#c8b79a] bg-gradient-to-b from-[#f6f1e8] to-[#e1d3bf] shadow-[0_24px_46px_rgba(92,64,51,0.2)]" />
          <div className="absolute inset-x-7 top-8 h-3 rounded-full bg-[#d0c1ac]" />
          <div className="absolute left-1/2 top-[82px] h-[66px] w-[66px] -translate-x-1/2 opacity-75">
            {logo}
          </div>
          <div className="absolute right-4 top-[72px] h-16 w-10 rounded-r-[24px] border-[8px] border-l-0 border-[#d8c9b4]" />
        </div>
      );
    case "bolsa-tool-roll":
      return (
        <div className="relative mx-auto h-[220px] w-[280px]">
          <div className="absolute inset-x-3 top-14 h-[112px] rounded-[24px] border border-black/10 bg-gradient-to-br from-[#756449] via-[#5d4b35] to-[#413423] shadow-[0_26px_48px_rgba(61,41,20,0.32)]" />
          <div className="absolute inset-x-8 top-[88px] h-[54px] opacity-85">
            {logo}
          </div>
          <div className="absolute left-8 right-8 top-[70px] border-t border-dashed border-vintage-gold/35" />
          <div className="absolute left-8 right-8 top-[154px] border-t border-dashed border-vintage-gold/35" />
          <div className="absolute left-12 top-[162px] h-8 w-3 rounded-full bg-[#2f2418]" />
          <div className="absolute right-12 top-[162px] h-8 w-3 rounded-full bg-[#2f2418]" />
        </div>
      );
    case "poster-blueprint":
      return (
        <div className="relative mx-auto h-[260px] w-[200px] rounded-[6px] border border-[#d3c1a2] bg-gradient-to-b from-[#f2ecdf] to-[#e3d4bf] shadow-[0_28px_50px_rgba(92,64,51,0.24)]">
          <div className="absolute inset-4 border border-dashed border-vintage-tan/50" />
          <div className="absolute inset-x-7 top-12 h-[96px] opacity-35">
            {logo}
          </div>
          <div className="absolute inset-x-8 top-[158px] border-t border-vintage-brown/25" />
          <div className="absolute inset-x-8 top-[176px] border-t border-vintage-brown/25" />
          <div className="absolute inset-x-8 top-[194px] border-t border-vintage-brown/25" />
          <div className="absolute left-8 top-6 text-[10px] uppercase tracking-[0.3em] text-vintage-brown/70">
            Serie 73
          </div>
        </div>
      );
    default:
      return (
        <div className="relative mx-auto h-[220px] w-[220px] rounded-[28px] border border-white/20 bg-white/80 shadow-[0_24px_46px_rgba(92,64,51,0.18)]">
          <div className="absolute inset-10 opacity-80">
            {logo}
          </div>
        </div>
      );
  }
}

export default function TiendaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main id="main-content" className="flex-1">
        <section className="relative overflow-hidden bg-vintage-darkBrown px-4 py-14 sm:px-6 sm:py-20">
          <div
            className="absolute inset-0 opacity-20"
            aria-hidden="true"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 20%, rgba(201,162,39,0.22), transparent 28%), radial-gradient(circle at 80% 30%, rgba(212,165,116,0.18), transparent 24%), linear-gradient(135deg, rgba(245,240,230,0.06), transparent 40%)",
            }}
          />

          <div className="relative mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-xs uppercase tracking-[0.35em] text-vintage-gold sm:text-sm">
                Merchandising Oficial
              </p>
              <h1 className="mt-4 font-serif text-4xl font-bold text-vintage-cream sm:text-5xl md:text-6xl">
                Tienda
              </h1>
              <div className="ornament-divider mt-6">
                <span>⚙</span>
              </div>
              <p className="mx-auto mt-6 max-w-2xl text-sm text-vintage-tan sm:text-lg">
                Una selección de prendas, accesorios y piezas de lifestyle con el carácter del taller:
                materiales honestos, gráfica con alma de garaje y mucho metal en la actitud.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  icon: ShoppingBag,
                  title: "Series Cortas",
                  copy: "Producciones limitadas y diseños que cambian con cada temporada del taller.",
                },
                {
                  icon: ShieldCheck,
                  title: "Calidad de Garaje",
                  copy: "Prendas y accesorios pensados para aguantar uso real, no solo para escaparate.",
                },
                {
                  icon: Package,
                  title: "Recogida o Envío",
                  copy: "Disponible para recoger en tienda o para preparar pedidos bajo encargo.",
                },
              ].map((item) => (
                <div key={item.title} className="vintage-card bg-white/95">
                  <item.icon className="h-8 w-8 text-vintage-gold" aria-hidden="true" />
                  <h2 className="mt-4 font-serif text-2xl font-bold text-vintage-darkBrown">{item.title}</h2>
                  <p className="mt-3 text-sm text-vintage-brown sm:text-base">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-vintage-cream px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-vintage-tan">Colección</p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-vintage-darkBrown sm:text-4xl">
                  Hecho para la gente del taller
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {merchCategories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-vintage-tan bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-vintage-brown"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
              {merchItems.map((item) => (
                <article
                  key={item.id}
                  className="vintage-card relative overflow-hidden border-vintage-tan bg-white/95 p-0"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.accentClassName} opacity-[0.16]`} aria-hidden="true" />
                  <div
                    className="absolute right-[-32px] top-[-32px] h-28 w-28 rounded-full border border-vintage-gold/40 bg-vintage-gold/10 blur-2xl"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 grid h-full grid-cols-1 gap-4 p-6 sm:gap-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div className="rounded-[28px] border border-vintage-tan/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(245,240,230,0.92))] p-5">
                      <MerchMockup itemId={item.id} />
                    </div>

                    <div className="flex h-full flex-col gap-6">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-vintage-tan">{item.category}</p>
                          <h3 className="mt-2 font-serif text-2xl font-bold text-vintage-darkBrown sm:text-3xl">
                            {item.name}
                          </h3>
                        </div>
                        <span className="rounded-full bg-vintage-darkBrown px-3 py-2 text-xs uppercase tracking-[0.2em] text-vintage-cream">
                          {item.badge}
                        </span>
                      </div>

                      <p className="max-w-[46ch] text-sm leading-relaxed text-vintage-brown sm:text-base">
                        {item.description}
                      </p>

                      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-vintage-tan pt-5">
                        <div className="flex items-center gap-2 text-vintage-darkBrown">
                          <BadgeEuro className="h-5 w-5 text-vintage-gold" aria-hidden="true" />
                          <span className="font-serif text-2xl font-bold">{item.price}</span>
                        </div>
                        <span className="text-xs uppercase tracking-[0.25em] text-vintage-tan">
                          Bajo Encargo
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-vintage-tan/20 px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="vintage-card grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-vintage-tan">Pedidos</p>
                <h2 className="mt-3 font-serif text-3xl font-bold text-vintage-darkBrown sm:text-4xl">
                  ¿Quieres una pieza de la casa?
                </h2>
                <p className="mt-4 max-w-[48ch] text-sm leading-relaxed text-vintage-brown sm:text-base">
                  Podemos preparar pedidos de merchandising desde el taller y ayudarte a elegir talla,
                  disponibilidad o próximas reposiciones. Si buscas algo concreto, también te avisamos
                  cuando vuelva a entrar.
                </p>
              </div>

              <div className="flex flex-col justify-between gap-4 rounded-sm border border-vintage-tan bg-vintage-darkBrown p-6 text-vintage-cream">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-vintage-gold">Atención Tienda</p>
                  <p className="mt-4 font-serif text-2xl font-bold">Escríbenos o pásate por el taller</p>
                  <p className="mt-3 text-sm text-vintage-tan">
                    Te ayudamos con tallas, stock y reservas de artículos especiales.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/book" className="vintage-button inline-flex items-center justify-center gap-2 text-sm">
                    Contactar <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/services" className="vintage-button-secondary inline-flex items-center justify-center text-sm">
                    Ver Servicios
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
