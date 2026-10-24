import React from 'react';
import { ROADMAP_WEEKS } from '../data/landingData';
import { Compass, Shield, Zap, Trophy, Calendar } from 'lucide-react';

export const RoadmapTimeline: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#101115]" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#101115]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#101115]" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-[#101115]" />;
      default:
        return <Calendar className="w-5 h-5 text-[#101115]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#14161C] border-y border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#191B20] border border-white/10 text-white text-xs font-bold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5 text-[#F4B735]" />
            <span>Progresión clara</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight uppercase mb-4">
            TU RUTA DE ENTRENAMIENTO EN 4 SEMANAS
          </h2>

          <p className="text-[#B8BBC2] text-base md:text-lg max-w-2xl mx-auto">
            Un itinerario pensado para respetar tus articulaciones, asimilar el movimiento y ganar fuerza de forma medible.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {ROADMAP_WEEKS.map((item, index) => (
            <div
              key={item.week}
              className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#191B20] border border-white/10 hover:border-[#F4B735]/40 transition-all duration-300 group shadow-lg"
            >
              {/* Top Week Badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-black tracking-widest text-[#F4B735] uppercase">
                  {item.title}
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#F4B735] flex items-center justify-center font-black group-hover:scale-110 transition-transform shadow-md">
                  {getIcon(item.iconName)}
                </div>
              </div>

              {/* Focus Name */}
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-black text-white uppercase group-hover:text-[#F4B735] transition-colors leading-tight">
                  {item.focus}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-[#B8BBC2] leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Step indicator */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span>Días {(index * 7) + 1} - {(index + 1) * 7}</span>
                <span className="font-semibold text-white">Etapa 0{item.week}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Grounding Message */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="inline-block p-4 sm:p-5 rounded-2xl bg-[#101115] border border-[#F4B735]/30">
            <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
              &ldquo;No se trata de hacer todo desde el primer día. Se trata de avanzar paso a paso.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
