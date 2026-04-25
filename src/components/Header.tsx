"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-vintage-darkBrown text-vintage-cream sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <Image 
              src="/images/logo.png" 
              alt="Ezcaray Custom Bikes Logo" 
              width={60} 
              height={60}
              className="object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="font-serif text-2xl font-bold tracking-wide">Ezcaray Custom Bikes</h1>
              <p className="text-xs text-vintage-tan tracking-widest uppercase">Est. 1973</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
            <Link href="/" className="font-serif text-sm uppercase tracking-wider hover:text-vintage-gold transition-colors">
              Inicio
            </Link>
            <Link href="/services" className="font-serif text-sm uppercase tracking-wider hover:text-vintage-gold transition-colors">
              Servicios
            </Link>
            <Link href="/tienda" className="font-serif text-sm uppercase tracking-wider hover:text-vintage-gold transition-colors">
              Tienda
            </Link>
            <Link href="/book" className="vintage-button text-sm">
              Reservar Cita
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-vintage-brown rounded transition-colors"
            aria-label="Abrir menú"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            id="mobile-navigation"
            className="md:hidden mt-4 pb-4 border-t border-vintage-brown space-y-3 pt-4"
            aria-label="Móvil"
          >
            <Link
              href="/"
              className="block font-serif text-sm uppercase tracking-wider hover:text-vintage-gold transition-colors py-2"
              onClick={closeMenu}
            >
              Inicio
            </Link>
            <Link
              href="/services"
              className="block font-serif text-sm uppercase tracking-wider hover:text-vintage-gold transition-colors py-2"
              onClick={closeMenu}
            >
              Servicios
            </Link>
            <Link
              href="/tienda"
              className="block font-serif text-sm uppercase tracking-wider hover:text-vintage-gold transition-colors py-2"
              onClick={closeMenu}
            >
              Tienda
            </Link>
            <Link
              href="/book"
              className="block vintage-button text-sm w-full text-center"
              onClick={closeMenu}
            >
              Reservar Cita
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
