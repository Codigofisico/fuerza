import React, { useState } from 'react';
import { BookOpen, Calendar, Dumbbell, CheckSquare, Sparkles, ChevronRight } from 'lucide-react';

export const InsideLookSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const previewCards = [
    {
      id: 'semana',
      title: 'Planificación de una semana',
      icon: <Calendar className="w-4 h-4" />,
      badge: 'Estructura Temporal',
      headline: 'Distribución equilibrada entre estímulo y descanso',
      description:
        'Cada semana organiza los días de entrenamiento intercalados con jornadas de descanso y movilidad activa, evitando sobrecargas.',
      features: [
        'Días de entrenamiento principal (3 a 4 sesiones semanales).',
        'Días de recuperación activa y descanso total programados.',
        'Duración estimada por sesión: 30 a 45 minutos.',
      ],
    },
    {
      id: 'rutina',
      title: 'Ejemplo de rutina estructurada',
      icon: <Dumbbell className="w-4 h-4" />,
      badge: 'Sesión Típica',
      headline: 'Bloques de trabajo por series, repeticiones y descansos',
      description:
        'Cada sesión sigue un orden lógico: calentamiento específico, bloque de fuerza principal y vuelta a la calma.',
      features: [
        'Bloque de activación y movilidad previa.',
        'Series de aproximación y series efectivas claras.',
        'Tiempos de pausa recomendados entre series según el objetivo.',
      ],
    },
    {
      id: 'tecnica',
      title: 'Técnica de un ejercicio',
      icon: <BookOpen className="w-4 h-4" />,
      badge: 'Guía de Ejecución',
      headline: 'Puntos clave anatómicos para entrenar sin molestias',
      description:
        'Instrucciones paso a paso de colocación articular, tensión del core y errores frecuentes a evitar.',
      features: [
        'Posición inicial: apoyos, agarre y alineación corporal.',
        'Fase concéntrica y excéntrica con ritmo controlado.',
        'Variantes de regresión si el ejercicio resulta muy exigente.',
      ],
    },
    {
      id: 'registro',
      title: 'Registro de progreso',
      icon: <CheckSquare className="w-4 h-4" />,
      badge: 'Hoja de Control',
      headline: 'Medición tangible de repeticiones y sensaciones',
      description:
        'Sistema para anotar tu avance semana a semana sin depender de la báscula ni de métricas confusas.',
      features: [
        'Registro de repeticiones limpias por cada ejercicio.',
        'Escala de esfuerzo percibido (RPE) sencilla de aplicar.',
        'Espacio para notas personales y sensaciones de fatiga.',
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#14161C] border-y border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#191B20] border border-white/10 text-xs font-bold text-[#F4B735] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Formato práctico y aplicable</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight uppercase mb-4">
            NO ES SOLO UN LIBRO PARA LEER. ES UNA GUÍA PARA PONER EN PRÁCTICA.
          </h2>

          <p className="text-[#B8BBC2] text-base md:text-lg max-w-2xl mx-auto">
            El contenido está concebido con un diseño editorial claro y funcional para que puedas abrir el PDF en tu teléfono, tablet o computador y empezar de inmediato.
          </p>
        </div>

        {/* Tab Selector for Mobile / Desktop */}
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist">
          {previewCards.map((card, idx) => (
            <button
              key={card.id}
              role="tab"
              aria-selected={activeTab === idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#F4B735] text-[#101115] shadow-md'
                  : 'bg-[#191B20] text-gray-300 hover:text-white hover:bg-[#20232a] border border-white/5'
              }`}
            >
              {card.icon}
              <span>{card.title}</span>
            </button>
          ))}
        </div>

        {/* Active Content Showcase Box */}
        <div className="bg-[#191B20] rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left detail */}
            <div className="lg:col-span-7">
              <div className="inline-block px-3 py-1 rounded-full bg-[#14161C] border border-white/10 text-[#F4B735] text-xs font-bold uppercase tracking-wider mb-4">
                {previewCards[activeTab].badge}
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight mb-4 uppercase">
                {previewCards[activeTab].headline}
              </h3>

              <p className="text-[#B8BBC2] text-base leading-relaxed mb-6">
                {previewCards[activeTab].description}
              </p>

              <div className="space-y-3">
                {previewCards[activeTab].features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-[#F4B735] shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Editorial Mock Frame */}
            <div className="lg:col-span-5 bg-[#101115] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs text-gray-400">
                <span className="font-mono text-[#F4B735]">CÓDIGO FUERZA 28 · PDF</span>
                <span>MÓDULO EDITORIAL</span>
              </div>

              {/* Sample clean card layout */}
              <div className="space-y-3 font-mono text-xs text-gray-300">
                <div className="p-3 bg-[#191B20] rounded-lg border border-white/5">
                  <div className="text-[#F4B735] font-bold uppercase mb-1">
                    {previewCards[activeTab].title}
                  </div>
                  <div className="text-gray-400 text-[11px] leading-relaxed">
                    Estructurado para máxima claridad en pantalla de teléfono sin necesidad de zoom molesto.
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 bg-[#14161C] rounded border border-white/5">
                    <div className="text-gray-400">Objetivo:</div>
                    <div className="text-white font-bold">Consistencia & Forma</div>
                  </div>
                  <div className="p-2.5 bg-[#14161C] rounded border border-white/5">
                    <div className="text-gray-400">Equipamiento:</div>
                    <div className="text-white font-bold">Cero Máquinas</div>
                  </div>
                </div>

                <div className="p-2.5 bg-[#14161C] rounded border border-white/5 text-[11px] text-gray-300">
                  <span className="text-[#F4B735] font-bold">Regla clave:</span> Detén la serie antes de que la técnica se descomponga.
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-gray-500">
          Nota de transparencia: Las tarjetas anteriores describen con exactitud la estructura pedagógica incluida en el ebook en formato PDF.
        </p>
      </div>
    </section>
  );
};
