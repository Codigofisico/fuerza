import React from 'react';
import { XCircle, Compass, Clock, Dumbbell, Flame, Shuffle } from 'lucide-react';
import { PROBLEM_POINTS } from '../data/landingData';

export const ProblemSection: React.FC = () => {
  const problemIcons = [
    <Compass key="1" className="w-5 h-5 text-red-500 shrink-0" />,
    <Clock key="2" className="w-5 h-5 text-red-500 shrink-0" />,
    <Dumbbell key="3" className="w-5 h-5 text-red-500 shrink-0" />,
    <Flame key="4" className="w-5 h-5 text-red-500 shrink-0" />,
    <Shuffle key="5" className="w-5 h-5 text-red-500 shrink-0" />,
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F5F5F5] text-[#101115]">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
            <XCircle className="w-3.5 h-3.5" />
            <span>El obstáculo real</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#101115] leading-tight uppercase">
            ¿CUÁNTAS VECES HAS QUERIDO EMPEZAR A ENTRENAR Y LO HAS DEJADO PARA DESPUÉS?
          </h2>
        </div>

        {/* 5 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {PROBLEM_POINTS.map((problem, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                  {problemIcons[index]}
                </div>
                <div className="font-semibold text-gray-400 text-xs uppercase tracking-wider">
                  Obstáculo #{index + 1}
                </div>
              </div>
              <p className="text-base font-semibold text-[#101115] leading-snug">
                {problem}
              </p>
            </div>
          ))}
        </div>

        {/* Transition Quote Card */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#101115] text-white border-l-4 border-[#F4B735] shadow-xl text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed text-gray-100">
            &ldquo;El problema muchas veces no es la falta de ganas. Es no tener un plan sencillo que puedas seguir desde tu nivel actual.&rdquo;
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#F4B735] font-semibold tracking-wide uppercase">
            <span>Enfoque Código Físico</span>
          </div>
        </div>
      </div>
    </section>
  );
};
