import React from 'react';
import { ShieldCheck, Check, BookOpen, HeartHandshake, Compass } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const pillars = [
    {
      icon: <Compass className="w-5 h-5 text-[#F4B735]" />,
      title: 'Pedagogía clara',
      desc: 'Explicaciones directas y sin rodeos, pensadas para personas que quieren entender por qué hacen cada movimiento.',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-[#F4B735]" />,
      title: 'Estructura progresiva',
      desc: 'Cada día y cada semana tienen un propósito específico en tu adaptación neuromuscular y fuerza de base.',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#F4B735]" />,
      title: 'Transparencia total',
      desc: 'Sin promesas de transformaciones milagrosas en 7 días ni fórmulas secretas. Solo disciplina y constancia aplicable.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#101115] relative">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#191B20] border border-white/10 text-xs font-bold text-[#F4B735] uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Filosofía de marca</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight uppercase mb-4">
            UN MÉTODO CREADO PARA APRENDER Y APLICAR
          </h2>

          <p className="text-[#B8BBC2] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            <strong className="text-white font-bold">Código Físico</strong> nació como un proyecto dedicado a simplificar el entrenamiento físico con el propio cuerpo, priorizando la ejecución correcta por encima de la complejidad innecesaria.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#191B20] border border-white/5 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#101115] border border-white/10 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-black text-white uppercase mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#B8BBC2] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Badge */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#191B20] to-[#14161C] border border-[#F4B735]/25 text-center max-w-3xl mx-auto">
          <h4 className="text-lg sm:text-xl font-black text-white uppercase mb-3">
            Compromiso ético con tu proceso
          </h4>
          <p className="text-sm text-[#B8BBC2] leading-relaxed max-w-2xl mx-auto mb-4">
            Creemos que la fuerza se forja con paciencia y técnica. Por eso no utilizamos testimonios fabricados, fotos editadas de antes/después ni testimonios simulados. Te entregamos un método probado en sus bases para que tú seas el protagonista de tu avance.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F4B735] uppercase tracking-wider">
            <Check className="w-4 h-4 stroke-[3]" />
            <span>Contenido digital original de Código Físico</span>
          </div>
        </div>
      </div>
    </section>
  );
};
