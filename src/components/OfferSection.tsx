import React from 'react';
import { Check, Sparkles, ShieldCheck, Lock, Award, FileText } from 'lucide-react';
import { OFFICIAL_IMAGES, BONUSES } from '../data/landingData';
import { CtaButton } from './CtaButton';

export const OfferSection: React.FC = () => {
  const checklistItems = [
    '1 ebook principal de 28 días.',
    '4 bonos digitales complementarios.',
    'Material en formato digital.',
    'Acceso mediante Hotmart una vez aprobado el pago.',
    'Garantía de 7 días.',
  ];

  return (
    <section id="oferta" className="py-20 md:py-28 bg-[#101115] relative overflow-hidden">
      {/* Gold atmospheric background aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#F4B735]/12 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Main Offer Card Container */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#191B20] via-[#14161C] to-[#101115] border-2 border-[#F4B735]/40 shadow-2xl overflow-hidden p-6 sm:p-10 lg:p-14 gold-glow-lg">
          {/* Top Banner Tag */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4B735] text-[#101115] font-black text-xs sm:text-sm uppercase tracking-wider shadow-md">
              <Sparkles className="w-4 h-4" />
              <span>OFERTA COMPLETA DISPONIBLE HOY</span>
            </div>
          </div>

          {/* Title */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase mb-4">
              TODO ESTO PUEDE SER TUYO POR SOLO <span className="text-[#F4B735]">$12 USD</span>
            </h2>
            <p className="text-base sm:text-lg text-[#B8BBC2]">
              El programa completo de 28 días más los 4 bonos digitales complementarios en una sola compra sin mensualidades.
            </p>
          </div>

          {/* Custom Composition of the 5 Books */}
          <div className="mb-14">
            <div className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
              PAQUETE COMPLETO: 1 EBOOK PRINCIPAL + 4 BONOS INCLUIDOS
            </div>

            {/* Desktop / Tablet showcase: Main book prominent in center with 4 bonuses */}
            <div className="relative max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6">
                {/* Bonus 1 & 2 flanking left */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4 w-full md:w-44 order-2 md:order-1">
                  <div className="group rounded-xl p-2 bg-[#101115]/80 border border-white/5 hover:border-[#F4B735]/40 transition-all text-center">
                    <img
                      src={BONUSES[0].coverImage}
                      alt={BONUSES[0].title}
                      loading="lazy"
                      className="w-full h-auto object-contain rounded-lg book-shadow-sm group-hover:scale-105 transition-transform"
                    />
                    <span className="block mt-1.5 text-[10px] font-bold text-gray-300 uppercase truncate">
                      Bono 1: Anti Excusas
                    </span>
                  </div>

                  <div className="group rounded-xl p-2 bg-[#101115]/80 border border-white/5 hover:border-[#F4B735]/40 transition-all text-center">
                    <img
                      src={BONUSES[1].coverImage}
                      alt={BONUSES[1].title}
                      loading="lazy"
                      className="w-full h-auto object-contain rounded-lg book-shadow-sm group-hover:scale-105 transition-transform"
                    />
                    <span className="block mt-1.5 text-[10px] font-bold text-gray-300 uppercase truncate">
                      Bono 2: Recuperación
                    </span>
                  </div>
                </div>

                {/* Center Main Book (Prominent & Larger) */}
                <div className="relative w-full max-w-xs sm:max-w-sm order-1 md:order-2 flex flex-col items-center">
                  <div className="absolute -top-3 z-20 px-3 py-1 rounded-full bg-[#F4B735] text-[#101115] text-[11px] font-black uppercase tracking-wider shadow-lg">
                    ★ Ebook Principal 28 Días ★
                  </div>
                  <div className="relative p-3 rounded-2xl bg-[#101115] border-2 border-[#F4B735] shadow-2xl group">
                    <img
                      src={OFFICIAL_IMAGES.mainBook}
                      alt="Código Fuerza 28 Ebook Principal"
                      loading="lazy"
                      className="w-full h-auto object-contain rounded-xl book-shadow group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Bonus 3 & 4 flanking right */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4 w-full md:w-44 order-3">
                  <div className="group rounded-xl p-2 bg-[#101115]/80 border border-white/5 hover:border-[#F4B735]/40 transition-all text-center">
                    <img
                      src={BONUSES[2].coverImage}
                      alt={BONUSES[2].title}
                      loading="lazy"
                      className="w-full h-auto object-contain rounded-lg book-shadow-sm group-hover:scale-105 transition-transform"
                    />
                    <span className="block mt-1.5 text-[10px] font-bold text-gray-300 uppercase truncate">
                      Bono 3: Progreso
                    </span>
                  </div>

                  <div className="group rounded-xl p-2 bg-[#101115]/80 border border-white/5 hover:border-[#F4B735]/40 transition-all text-center">
                    <img
                      src={BONUSES[3].coverImage}
                      alt={BONUSES[3].title}
                      loading="lazy"
                      className="w-full h-auto object-contain rounded-lg book-shadow-sm group-hover:scale-105 transition-transform"
                    />
                    <span className="block mt-1.5 text-[10px] font-bold text-gray-300 uppercase truncate">
                      Bono 4: Nutrición
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Checklist Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#101115] rounded-2xl border border-white/10 p-6 sm:p-8">
            {/* Checklist */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="text-xs font-bold text-[#F4B735] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                <span>Resumen de lo que recibirás hoy</span>
              </div>

              {checklistItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F4B735] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#101115] stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-white">{item}</span>
                </div>
              ))}
            </div>

            {/* Price Box & Action */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-[#191B20] border border-[#F4B735]/30">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                ANTES: <span className="line-through text-red-400 font-semibold">$24 USD</span>
              </span>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  $12
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-black text-[#F4B735] leading-none">USD</span>
                  <span className="text-[11px] text-gray-400 font-medium">Pago único</span>
                </div>
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-xs uppercase tracking-wider mb-6">
                50% DE DESCUENTO APLICADO
              </div>

              <CtaButton
                text="¡SÍ, QUIERO CÓDIGO FUERZA 28 POR $12!"
                location="special_offer_section"
                size="large"
                fullWidth={true}
                showSubtext={false}
              />

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#B8BBC2]">
                <Lock className="w-3.5 h-3.5 text-[#F4B735]" />
                <span>Pago único · Compra procesada por Hotmart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
