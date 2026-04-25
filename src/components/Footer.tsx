import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-vintage-darkBrown text-vintage-cream py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/images/logo.png" 
                alt="Ezcaray Custom Bikes Logo" 
                width={50} 
                height={50}
                className="object-contain"
              />
              <h3 className="font-serif text-lg sm:text-xl font-bold">Ezcaray Custom Bikes</h3>
            </div>
            <p className="text-vintage-tan text-xs sm:text-sm leading-relaxed">
              Pasión y experiencia para motos vintage, custom y clásicas desde 1973.
              Restauramos leyendas y las mantenemos en plena forma.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold mb-4 text-vintage-gold">Contacto</h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start sm:items-center gap-3">
                <MapPin className="w-4 h-4 text-vintage-tan flex-shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
                <span>456 Chrome Avenue, Motorcycle Row</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-vintage-tan flex-shrink-0" aria-hidden="true" />
                <span>(555) 987-6543</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-vintage-tan flex-shrink-0" aria-hidden="true" />
                <span>hello@ironandoil.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold mb-4 text-vintage-gold">Horario</h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-vintage-tan flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p>Lun - Vie: 9:00 - 18:00</p>
                  <p>Sábado: 9:00 - 16:00</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-vintage-brown pt-6 sm:pt-8 text-center text-xs sm:text-sm text-vintage-tan">
          <p>&copy; {new Date().getFullYear()} Ezcaray Custom Bikes. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
