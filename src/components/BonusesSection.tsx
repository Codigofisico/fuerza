import React from 'react';
import { Gift, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { BONUSES } from '../data/landingData';
import { CtaButton } from './CtaButton';

export const BonusesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#101115] relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F4B735]/8 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#191B20] border border-[#F4B735]/30 text-xs font-bold text-[#F4B735] uppercase tracking-wider mb-4">
            <Gift className="w-3.5 h-3.5" />
            <span>Valor complementario incluido</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight uppercase mb-5">
            Y PARA AYUDARTE A MANTENER EL RUMBO, TAMBIÉN RECIBES 4 BONOS DIGITALES
          </h2>

          <p className="text-[#B8BBC2] text-base md:text-lg max-w-2xl mx-auto">
            Porque entrenar es solo una parte del proceso. También necesitas constancia, recuperación, seguimiento y hábitos de alimentación.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-14">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="group rounded-3xl bg-[#191B20] border border-white/10 hover:border-[#F4B735]/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-lg bg-[#F4B735]/15 border border-[#F4B735]/30 text-xs font-black text-[#F4B735] uppercase tracking-wider">
                    BONO DIGITAL 0{bonus.number}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-emerald-400 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Incluido $0</span>
                  </div>
                </div>

                {/* Book Cover + Content layout */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
                  {/* Cover */}
                  <div className="sm:col-span-5 flex justify-center">
                    <div className="relative w-40 sm:w-full max-w-[180px]">
                      <img
                        src={bonus.coverImage}
                        alt={`Portada de ${bonus.title}`}
                        loading="lazy"
                        width="240"
                        height="340"
                        className="w-full h-auto object-contain rounded-xl book-shadow group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="sm:col-span-7">
                    <h3 className="text-lg sm:text-xl font-black text-white uppercase mb-3 leading-snug group-hover:text-[#F4B735] transition-colors">
                      {bonus.title}
                    </h3>
                    <p className="text-sm text-[#B8BBC2] leading-relaxed mb-4">
                      {bonus.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlighted Benefit Banner */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs sm:text-sm font-bold text-[#F4B735]">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>{bonus.highlightedBenefit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner: LOS 4 BONOS YA ESTÁN INCLUIDOS EN TU COMPRA */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#191B20] via-[#14161C] to-[#191B20] border border-[#F4B735]/40 shadow-lg">
            <p className="text-base sm:text-lg font-black text-white uppercase tracking-wider">
              LOS 4 BONOS YA ESTÁN INCLUIDOS EN TU COMPRA.
            </p>
            <p className="text-xs text-[#B8BBC2] mt-1">
              Sin suscripciones mensuales ni pagos ocultos. Todo se desbloquea con el pago único de $12 USD.
            </p>
          </div>
        </div>

        {/* CTA 3 */}
        <div className="text-center">
          <CtaButton
            text="QUIERO EL EBOOK Y LOS 4 BONOS POR $12"
            location="bonuses_section"
            size="large"
            showSubtext={true}
            subtext="Pago único de $12 USD · Entrega digital vía Hotmart · Garantía de 7 días"
          />
        </div>
      </div>
    </section>
  );
};
