import React from 'react';
import { Calendar, Gift, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_IMAGES } from '../data/landingData';
import { CtaButton } from './CtaButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-[#101115] via-[#14161C] to-[#101115]">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#F4B735]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & Pricing */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191B20] border border-[#F4B735]/30 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#F4B735] animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-[#F4B735] uppercase">
                PROGRAMA DIGITAL DE 28 DÍAS
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-black text-white leading-[1.15] mb-4 uppercase">
              EMPIEZA A ENTRENAR EN CASA CON UN PLAN CLARO DE 28 DÍAS
            </h1>

            {/* Gold Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#F4B735] mb-4 leading-snug">
              Sin pesas. Sin máquinas de gimnasio. Desde cero.
            </p>

            {/* Support Copy */}
            <p className="text-[#B8BBC2] text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
              Descubre un programa progresivo para desarrollar fuerza con tu propio peso, aprender a entrenar correctamente y construir el hábito que necesitas para seguir avanzando.
            </p>

            {/* 3 Microbenefits */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#191B20]/80 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#F4B735]/15 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 text-[#F4B735]" />
                </div>
                <span className="text-xs md:text-sm font-medium text-white">
                  Plan progresivo de 28 días
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#191B20]/80 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#F4B735]/15 flex items-center justify-center shrink-0">
                  <Gift className="w-4 h-4 text-[#F4B735]" />
                </div>
                <span className="text-xs md:text-sm font-medium text-white">
                  4 bonos digitales incluidos
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#191B20]/80 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#F4B735]/15 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-[#F4B735]" />
                </div>
                <span className="text-xs md:text-sm font-medium text-white">
                  Acceso después de aprobarse el pago
                </span>
              </div>
            </div>

            {/* Pricing Box */}
            <div className="w-full max-w-md p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#191B20] to-[#14161C] border border-[#F4B735]/25 mb-6 flex flex-col items-center sm:items-start">
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-xs font-semibold text-[#B8BBC2] uppercase tracking-wider">
                  Acceso completo inmediato
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-[#F4B735] text-[#101115] uppercase tracking-wide">
                  50% DE DESCUENTO
                </span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-sm sm:text-base text-[#B8BBC2] line-through font-medium">
                  $24 USD
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                  $12 <span className="text-lg sm:text-xl font-bold text-[#F4B735]">USD</span>
                </span>
                <span className="text-xs text-[#B8BBC2] font-normal">
                  / pago único
                </span>
              </div>
            </div>

            {/* CTA Button with smooth entrance animation */}
            <div className="w-full sm:w-auto">
              <CtaButton
                text="¡QUIERO EMPEZAR POR $12!"
                location="hero_section"
                size="large"
                animateEntrance={true}
                showSubtext={true}
                subtext="Pago único · Entrega digital vía Hotmart · Garantía de 7 días"
                className="w-full sm:w-auto"
              />
            </div>
          </div>

          {/* Right Column: Official Ebook Cover */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Back subtle glow */}
              <div
                className="absolute inset-0 bg-[#F4B735]/20 rounded-3xl blur-2xl -z-10 group-hover:bg-[#F4B735]/30 transition-all duration-300"
                aria-hidden="true"
              />

              {/* Verified Digital Badge */}
              <div className="absolute -top-3 -right-3 sm:-right-4 z-20 bg-[#101115] border border-[#F4B735] px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F4B735]" />
                <span className="text-[11px] font-black text-white uppercase tracking-wider">
                  Ebook Oficial PDF
                </span>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#14161C] p-2 sm:p-3 shadow-2xl">
                <img
                  src={OFFICIAL_IMAGES.mainBook}
                  alt="Portada oficial del libro Código Fuerza 28: Desde Cero"
                  width="440"
                  height="600"
                  fetchPriority="high"
                  className="w-full h-auto object-contain rounded-xl book-shadow transform hover:scale-[1.02] transition-transform duration-300"
                />
              </div>

              {/* Bottom badge */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#B8BBC2]">
                <ShieldCheck className="w-4 h-4 text-[#F4B735]" />
                <span>Edición digital completa en formato PDF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
