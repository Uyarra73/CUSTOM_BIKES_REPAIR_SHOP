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
                src="/images/IRON&OIL.png" 
                alt="Iron & Oil Logo" 
                width={50} 
                height={50}
                className="object-contain"
              />
              <h3 className="font-serif text-lg sm:text-xl font-bold">Iron & Oil</h3>
            </div>
            <p className="text-vintage-tan text-xs sm:text-sm leading-relaxed">
              Passion and expertise for vintage, custom, and classic motorcycles since 1968. 
              We restore legends and keep them running strong.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold mb-4 text-vintage-gold">Contact</h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start sm:items-center gap-3">
                <MapPin className="w-4 h-4 text-vintage-tan flex-shrink-0 mt-0.5 sm:mt-0" />
                <span>456 Chrome Avenue, Motorcycle Row</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-vintage-tan flex-shrink-0" />
                <span>(555) 987-6543</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-vintage-tan flex-shrink-0" />
                <span>hello@ironandoil.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold mb-4 text-vintage-gold">Hours</h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-vintage-tan flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Fri: 9AM - 6PM</p>
                  <p>Saturday: 9AM - 4PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-vintage-brown pt-6 sm:pt-8 text-center text-xs sm:text-sm text-vintage-tan">
          <p>&copy; {new Date().getFullYear()} Iron & Oil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
