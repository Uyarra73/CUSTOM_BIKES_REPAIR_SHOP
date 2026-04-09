import Link from "next/link";
import { ShipWheel, Wrench, Clock, Award, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative bg-vintage-darkBrown py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
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
            <div className="text-center">
              <p className="text-vintage-gold font-serif tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">
                Est. 1968
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-vintage-cream mb-6">
                Iron & Oil
              </h1>
              <div className="ornament-divider mb-6">
                <span>⚙</span>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-vintage-tan max-w-2xl mx-auto mb-10">
                Where passion meets precision. Expert restoration and repair for vintage, 
                custom, and classic motorcycles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book" className="vintage-button text-sm sm:text-lg">
                  Book Appointment
                </Link>
                <Link href="/services" className="vintage-button-secondary text-sm sm:text-lg">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-vintage-cream">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-vintage-darkBrown mb-4">
                Our Services
              </h2>
              <div className="ornament-divider">
                <span>⚙</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              {[
                {
                  icon: Wrench,
                  title: "Expert Restoration",
                  description: "From cafe racers to baggers, our master technicians breathe new life into classics.",
                },
                {
                  icon: ShipWheel,
                  title: "Custom Builds",
                  description: "Design your dream machine from the ground up with our expert craftsmen.",
                },
                {
                  icon: Clock,
                  title: "Quality Work",
                  description: "We take the time to do it right. Every bolt torqued, every wire routed perfectly.",
                },
              ].map((feature, idx) => (
                <div key={idx} className="vintage-card text-center">
                  <div className="w-16 h-16 bg-vintage-brown rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-vintage-gold" />
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
                  A Legacy of Craftsmanship
                </h2>
                <p className="text-sm sm:text-base text-vintage-brown mb-6 leading-relaxed">
                  For over 55 years, Iron & Oil has been the premier destination for motorcycle 
                  enthusiasts. We understand that your motorcycle is more than just transportation—it's 
                  a piece of history, a passion, and an extension of who you are.
                </p>
                <p className="text-sm sm:text-base text-vintage-brown mb-8 leading-relaxed">
                  Our team of master mechanics brings together decades of experience with 
                  genuine parts and meticulous attention to detail. Whether it's a pre-war Harley 
                  or a modern custom, we treat every motorcycle with the respect it deserves.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="font-serif text-3xl sm:text-4xl font-bold text-vintage-gold">55+</p>
                    <p className="text-xs sm:text-sm text-vintage-brown">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-3xl sm:text-4xl font-bold text-vintage-gold">8K+</p>
                    <p className="text-xs sm:text-sm text-vintage-brown">Motorcycles Restored</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-3xl sm:text-4xl font-bold text-vintage-gold">10</p>
                    <p className="text-xs sm:text-sm text-vintage-brown">Master Mechanics</p>
                  </div>
                </div>
              </div>
              <div className="vintage-card">
                <div className="bg-vintage-darkBrown text-vintage-cream p-6 sm:p-8 text-center">
                  <Award className="w-12 sm:w-16 h-12 sm:h-16 text-vintage-gold mx-auto mb-4" />
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">
                    Award Winning Service
                  </h3>
                  <p className="text-sm sm:text-base text-vintage-tan">
                    Voted Best Motorcycle Shop in the region for 5 consecutive years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-vintage-darkBrown">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-vintage-cream mb-6">
              Ready to Ride?
            </h2>
            <p className="text-sm sm:text-lg text-vintage-tan mb-8">
              Book your appointment today and let us bring your motorcycle back to life.
            </p>
            <Link href="/book" className="vintage-button text-sm sm:text-lg inline-flex items-center gap-2">
              Schedule Service <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
