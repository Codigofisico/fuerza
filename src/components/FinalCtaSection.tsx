import React from 'react';
import { OFFICIAL_IMAGES } from '../data/landingData';
import { ShieldCheck, Mail, Sparkles, Check } from 'lucide-react';
import { CtaButton } from './CtaButton';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#14161C] to-[#101115] border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F4B735]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191B20] border border-[#F4B735]/30 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#F4B735]" />
          <span className="text-xs font-bold tracking-widest text-[#F4B735] uppercase">
            Comienza hoy mismo
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight uppercase mb-5 max-w-3xl mx-auto">
          NO NECESITAS ESPERAR A TENER UN GIMNASIO. NECESITAS EMPEZAR CON UN PLAN.
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Comienza tu programa progresivo de 28 días y recibe también los cuatro bonos digitales por un único pago de $12 USD.
        </p>

        {/* Main Book compact showcase */}
        <div className="flex justify-center mb-8">
          <div className="relative max-w-[200px] sm:max-w-[240px]">
            <img
              src={OFFICIAL_IMAGES.mainBook}
              alt="Ebook Código Fuerza 28"
              loading="lazy"
              width="240"
              height="330"
              className="w-full h-auto object-contain rounded-xl book-shadow"
            />
          </div>
        </div>

        {/* Summary Details Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 p-4 rounded-2xl bg-[#191B20] border border-white/10 mb-8 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-gray-300">
            <span className="text-gray-400">Precio anterior:</span>
            <span className="line-through text-red-400 font-semibold">$24 USD</span>
          </div>

          <div className="w-px h-4 bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-2 text-white font-bold">
            <span className="text-[#F4B735]">Precio actual:</span>
            <span className="text-lg font-black text-[#F4B735]">$12 USD</span>
          </div>

          <div className="w-px h-4 bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-1.5 text-gray-300">
            <ShieldCheck className="w-4 h-4 text-[#F4B735]" />
            <span>Garantía: 7 días</span>
          </div>

          <div className="w-px h-4 bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-1.5 text-gray-300">
            <Mail className="w-4 h-4 text-[#F4B735]" />
            <span>Entrega: Hotmart, tras aprobación</span>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-md mx-auto">
          <CtaButton
            text="QUIERO EMPEZAR HOY POR $12"
            location="final_section"
            size="large"
            fullWidth={true}
            showSubtext={true}
            subtext="Pago único · Acceso inmediato vía correo · Garantía de 7 días"
          />
        </div>
      </div>
    </section>
  );
};
