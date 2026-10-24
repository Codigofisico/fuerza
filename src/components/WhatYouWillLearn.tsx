import React from 'react';
import {
  Flame,
  Activity,
  ShieldCheck,
  Layers,
  RotateCw,
  Calendar,
  TrendingUp,
  Award,
  CheckCircle,
} from 'lucide-react';
import { WHAT_YOU_WILL_LEARN } from '../data/landingData';

export const WhatYouWillLearn: React.FC = () => {
  const renderIcon = (name: string) => {
    const props = { className: 'w-6 h-6 text-[#F4B735]' };
    switch (name) {
      case 'Flame':
        return <Flame {...props} />;
      case 'Activity':
        return <Activity {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'RotateCw':
        return <RotateCw {...props} />;
      case 'Calendar':
        return <Calendar {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'Award':
        return <Award {...props} />;
      default:
        return <CheckCircle {...props} />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#101115] relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#191B20] border border-white/10 text-xs font-bold text-[#F4B735] uppercase tracking-wider mb-4">
            <span>Contenido práctico</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight uppercase mb-5">
            TODO LO QUE NECESITAS PARA DAR TUS PRIMEROS PASOS CON SEGURIDAD Y CONSTANCIA
          </h2>

          <p className="text-[#B8BBC2] text-base md:text-lg max-w-2xl mx-auto">
            Habilidades y conceptos reales que te servirán tanto durante los 28 días como en cualquier entrenamiento futuro.
          </p>
        </div>

        {/* 8-Benefit Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHAT_YOU_WILL_LEARN.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#191B20] border border-white/5 hover:border-[#F4B735]/40 transition-all duration-200 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#14161C] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-[#F4B735]/30 transition-transform">
                  {renderIcon(item.icon)}
                </div>

                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                  Módulo 0{item.id}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#F4B735] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#B8BBC2] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
