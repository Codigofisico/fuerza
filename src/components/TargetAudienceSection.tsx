import React from 'react';
import { CheckCircle2, Info, Users, Home, Ban, CalendarCheck, Zap, Repeat } from 'lucide-react';
import { TARGET_AUDIENCE } from '../data/landingData';

export const TargetAudienceSection: React.FC = () => {
  const icons = [
    <Users key="1" className="w-6 h-6 text-[#F4B735]" />,
    <Home key="2" className="w-6 h-6 text-[#F4B735]" />,
    <Ban key="3" className="w-6 h-6 text-[#F4B735]" />,
    <CalendarCheck key="4" className="w-6 h-6 text-[#F4B735]" />,
    <Zap key="5" className="w-6 h-6 text-[#F4B735]" />,
    <Repeat key="6" className="w-6 h-6 text-[#F4B735]" />,
  ];

  return (
    <section className="py-16 md:py-24 bg-[#14161C] border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#191B20] border border-white/10 text-xs font-bold text-[#F4B735] uppercase tracking-wider mb-4">
            <span>Perfil ideal</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight uppercase mb-4">
            ¿CÓDIGO FUERZA 28 ES PARA TI?
          </h2>

          <p className="text-[#B8BBC2] text-base md:text-lg max-w-2xl mx-auto">
            Este programa fue creado pensando en situaciones cotidianas reales, sin exigencias irreales de tiempo ni material caro.
          </p>
        </div>

        {/* 6 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TARGET_AUDIENCE.map((point, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-[#191B20] border border-white/5 hover:border-[#F4B735]/40 transition-all duration-200 flex items-start gap-4 shadow-lg group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#101115] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {icons[index]}
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#F4B735] uppercase mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Para ti si</span>
                </div>
                <p className="text-base font-bold text-white leading-snug">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Note */}
        <div className="max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#101115] border border-white/10 flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-lg bg-[#F4B735]/15 flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-4 h-4 text-[#F4B735]" />
          </div>
          <div className="text-xs sm:text-sm text-[#B8BBC2] leading-relaxed">
            <span className="font-bold text-white block mb-0.5">Nota de transparencia y seguridad:</span>
            El programa requiere adaptar los ejercicios a tu condición física. Algunos movimientos de tracción utilizan apoyos domésticos firmes, como una mesa estable o el marco de una puerta.
          </div>
        </div>
      </div>
    </section>
  );
};
