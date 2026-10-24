import React from 'react';
import { Shield, ExternalLink, CheckCircle } from 'lucide-react';
import { HOTMART_REFUND_URL } from '../utils/analytics';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#14161C] border-y border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Professional Gold Seal / Shield Badge */}
        <div className="inline-flex items-center justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#FFD46B] via-[#F4B735] to-[#B8861B] p-1 shadow-2xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#101115] flex flex-col items-center justify-center p-2 border-2 border-dashed border-[#F4B735]/60 text-center">
                <span className="text-2xl sm:text-3xl font-black text-[#F4B735] leading-none">
                  7
                </span>
                <span className="text-[10px] font-black text-white uppercase tracking-widest leading-tight">
                  DÍAS
                </span>
                <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">
                  GARANTÍA
                </span>
              </div>
            </div>

            {/* Sparkle icon */}
            <div className="absolute -bottom-1 -right-1 bg-[#F4B735] text-[#101115] p-1.5 rounded-full shadow-md">
              <Shield className="w-4 h-4 fill-current" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase mb-6 leading-tight">
          TU COMPRA CUENTA CON 7 DÍAS DE GARANTÍA
        </h2>

        {/* Text */}
        <p className="text-base sm:text-lg text-[#B8BBC2] leading-relaxed max-w-2xl mx-auto mb-6">
          Queremos que puedas conocer el contenido con confianza. Tu compra incluye una garantía de 7 días. Si deseas solicitar un reembolso dentro de ese plazo, puedes hacerlo a través de los canales oficiales de Hotmart, de acuerdo con sus condiciones de compra.
        </p>

        {/* Official Link */}
        <div className="mb-6">
          <a
            href={HOTMART_REFUND_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#F4B735] hover:text-[#FFD46B] underline underline-offset-4 transition-colors"
          >
            <span>Consultar el portal oficial de reembolsos de Hotmart</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Grounding terms note */}
        <div className="inline-block px-4 py-2 rounded-xl bg-[#101115] border border-white/5 text-xs text-gray-400">
          El plazo comienza desde la compra. Aplican las condiciones de reembolso de Hotmart.
        </div>
      </div>
    </section>
  );
};
