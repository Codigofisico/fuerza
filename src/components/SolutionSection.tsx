import React from 'react';
import { Check, Target, Compass, Sparkles } from 'lucide-react';
import { OFFICIAL_IMAGES } from '../data/landingData';
import { CtaButton } from './CtaButton';

export const SolutionSection: React.FC = () => {
  const benefits = [
    'Ejercicios con el propio peso corporal.',
    'Instrucciones para mejorar la técnica.',
    'Rutinas organizadas por nivel y etapa.',
    'Entrenamiento adaptable al progreso individual.',
    'Recomendaciones para continuar después del día 28.',
  ];

  return (
    <section className="py-16 md:py-24 bg-[#101115] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4B735]/10 border border-[#F4B735]/30 text-[#F4B735] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>La solución progresiva</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase mb-4">
            CONOCE CÓDIGO FUERZA 28
          </h2>

          <p className="text-lg sm:text-xl font-bold text-[#F4B735] leading-relaxed max-w-2xl mx-auto">
            Un plan progresivo para dejar de improvisar y empezar a entrenar con dirección.
          </p>

          <p className="mt-4 text-[#B8BBC2] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Este ebook reúne fundamentos de calistenia, técnica correcta, ejercicios prácticos, rutinas organizadas y un seguimiento claro estructurado durante cuatro semanas completas.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#191B20] border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Official Cover */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-xs sm:max-w-sm w-full">
              <div
                className="absolute inset-0 bg-[#F4B735]/15 rounded-2xl blur-xl -z-10"
                aria-hidden="true"
              />
              <img
                src={OFFICIAL_IMAGES.mainBook}
                alt="Ebook Código Fuerza 28 Desde Cero"
                loading="lazy"
                width="380"
                height="520"
                className="w-full h-auto object-contain rounded-2xl book-shadow"
              />
            </div>
          </div>

          {/* Benefits list */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-bold text-[#F4B735] uppercase tracking-wider mb-3">
              <Target className="w-4 h-4" />
              <span>Qué encontrarás dentro del método</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white uppercase mb-6">
              Diseñado para construir fuerza real, paso a paso
            </h3>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#14161C] border border-white/5 hover:border-[#F4B735]/30 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-[#F4B735]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#F4B735] stroke-[3]" />
                  </div>
                  <span className="text-white text-sm sm:text-base font-medium leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA 2 */}
            <div className="pt-2">
              <CtaButton
                text="QUIERO ENTRENAR CON UN PLAN"
                location="solution_section"
                size="large"
                showSubtext={true}
                subtext="Acceso inmediato · $12 USD · Garantía de 7 días"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
