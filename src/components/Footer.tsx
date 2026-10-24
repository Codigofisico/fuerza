import React, { useState } from 'react';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import { TermsModal } from './TermsModal';
import { HOTMART_REFUND_URL } from '../utils/analytics';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);

  return (
    <footer className="bg-[#101115] border-t border-white/5 py-12 text-[#B8BBC2] text-xs">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Brand & Details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#F4B735] flex items-center justify-center font-black text-[#101115] text-xs">
              CF
            </div>
            <span className="font-extrabold tracking-wider text-white uppercase text-sm">
              CÓDIGO <span className="text-[#F4B735]">FÍSICO</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <span>Producto 100% digital</span>
            <span className="hidden sm:inline">·</span>
            <span>Garantía oficial de 7 días</span>
            <span className="hidden sm:inline">·</span>
            <span>Plataforma segura de entrega vía Hotmart</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setModalType('terms')}
              className="text-[#B8BBC2] hover:text-[#F4B735] transition-colors underline cursor-pointer"
            >
              Términos del Servicio
            </button>
            <span>·</span>
            <button
              onClick={() => setModalType('privacy')}
              className="text-[#B8BBC2] hover:text-[#F4B735] transition-colors underline cursor-pointer"
            >
              Políticas de Privacidad
            </button>
          </div>
        </div>

        {/* Disclaimer section */}
        <div className="pt-8 space-y-4 text-gray-500 leading-relaxed text-[11px] text-center md:text-left">
          <p>
            <strong>Aviso de responsabilidad sobre salud y resultados:</strong> El contenido de Código Fuerza 28 y sus bonos digitales tiene un propósito estrictamente educativo e informativo. No sustituye la consulta, diagnóstico o recomendación médica ni de un profesional de la salud certificado. Los resultados individuales varían según la dedicación, consistencia, técnica, descanso y nutrición de cada individuo. Escucha a tu cuerpo y realiza las adaptaciones necesarias según tu condición actual.
          </p>
          <p>
            <strong>Plataforma de distribución:</strong> Este producto se comercializa con el apoyo de Hotmart. La plataforma no realiza una evaluación de control editorial previo de los productos vendidos, ni valora la tecnicidad y experiencia de quienes los elaboran. La existencia de un producto y su adquisición a través de la plataforma no pueden considerarse como garantía de calidad de contenido o resultado en ningún caso. Al comprarlo, el comprador declara conocer esta información. Puedes consultar los términos de compra y{' '}
            <a
              href={HOTMART_REFUND_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#F4B735] underline inline-flex items-center gap-0.5"
            >
              políticas de reembolso de Hotmart aquí <ExternalLink className="w-3 h-3" />
            </a>.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-gray-500 gap-2 border-t border-white/5">
            <p>© 2026 Código Físico. Todos los derechos reservados.</p>
            <p>Edición Digital Oficial · Calistenia y Fuerza Desde Cero</p>
          </div>
        </div>
      </div>

      <TermsModal
        isOpen={modalType !== null}
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </footer>
  );
};
