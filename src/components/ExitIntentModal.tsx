import React, { useState, useEffect } from 'react';
import { X, Sparkles, ShieldCheck, Flame, ArrowRight, Eye } from 'lucide-react';
import {
  HOTMART_CHECKOUT_URL,
  trackEvent,
} from '../utils/analytics';
import {
  shouldTriggerExitIntent,
  isExitIntentDismissed,
  markExitIntentDismissed,
} from '../utils/exitIntent';
import { OFFICIAL_IMAGES } from '../data/landingData';

export const ExitIntentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if already dismissed in session
    if (isExitIntentDismissed()) return;

    // Check query param for immediate testing preview: ?exitIntent=1
    if (typeof window !== 'undefined' && window.location.search.includes('exitIntent=1')) {
      setIsOpen(true);
    }

    // Expose programmatic trigger for verification/testing
    (window as unknown as { showExitIntentModal?: () => void }).showExitIntentModal = () => {
      setIsOpen(true);
    };

    let triggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (shouldTriggerExitIntent(e.clientY, triggered)) {
        triggered = true;
        setIsOpen(true);
        trackEvent('ViewContent', { content_name: 'Exit_Intent_Popup_Shown' });
      }
    };

    // Keyboard Escape listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    markExitIntentDismissed();
  };

  const handleCtaClick = () => {
    trackEvent('InitiateCheckout', {
      cta_location: 'exit_intent_popup',
      cta_text: 'TIENES RAZÓN, ME QUEDO Y EMPIEZO POR $12',
    });
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="relative max-w-xl w-full bg-gradient-to-b from-[#191B20] via-[#14161C] to-[#101115] border-2 border-[#F4B735]/60 rounded-3xl p-5 sm:p-8 shadow-2xl text-center overflow-hidden gold-glow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Cerrar ventana de oferta de salida"
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-xl bg-[#101115] border border-white/10 hover:border-[#F4B735] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Pattern Break Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4B735]/20 border border-[#F4B735]/40 text-[#F4B735] text-xs font-black uppercase tracking-wider mb-4">
          <Eye className="w-3.5 h-3.5" />
          <span>¡ALTO AHÍ! UN SEGUNDO...</span>
        </div>

        {/* Humorous / Pattern Break Headline */}
        <h3
          id="exit-modal-title"
          className="text-2xl sm:text-3xl font-black text-white leading-tight uppercase mb-3"
        >
          ¿Ibas a cerrar la pestaña en piloto automático? ✋
        </h3>

        {/* Lighthearted, relatable copy */}
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md mx-auto mb-5">
          Te conocemos: ibas a decir <em>&ldquo;luego lo veo&rdquo;</em>, cerrar esta página y volver al scroll de redes sociales. 😅 Pero seamos sinceros: tus flexiones no se van a hacer solas en el sofá.
        </p>

        {/* Offer Recap Box */}
        <div className="p-4 rounded-2xl bg-[#101115] border border-white/10 mb-6 flex flex-col sm:flex-row items-center gap-4 text-left">
          <div className="w-20 shrink-0 hidden sm:block">
            <img
              src={OFFICIAL_IMAGES.mainBook}
              alt="Ebook Código Fuerza 28"
              className="w-full h-auto object-contain rounded-lg book-shadow-sm"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-gray-400 line-through font-semibold">$24 USD</span>
              <span className="text-xl sm:text-2xl font-black text-[#F4B735]">$12 USD</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#F4B735] text-[#101115] uppercase">
                50% OFF
              </span>
            </div>
            <p className="text-xs text-gray-300 leading-snug">
              Código Fuerza 28 (28 días) + 4 bonos digitales incluidos. Pago único · Garantía de 7 días.
            </p>
          </div>
        </div>

        {/* Urgency Trigger */}
        <div className="flex items-center justify-center gap-1.5 text-xs text-[#F4B735] font-bold mb-5">
          <Flame className="w-4 h-4 fill-current shrink-0 animate-pulse" />
          <span>Si sales ahora, este cupón expira y el precio volverá a $24 USD.</span>
        </div>

        {/* Action Button */}
        <div className="space-y-3">
          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            aria-label="Aprovechar oferta de salida por 12 dólares"
            className="w-full min-h-[56px] py-4 px-6 rounded-[12px] text-[#101115] font-bold uppercase text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-xl cta-button-base group"
          >
            <span className="text-[#101115]">¡TIENES RAZÓN, ME QUEDO Y EMPIEZO POR $12!</span>
            <ArrowRight className="w-5 h-5 text-[#101115] transition-transform duration-200 ease-out group-hover:translate-x-[4px]" />
          </a>

          <button
            onClick={handleClose}
            className="text-xs text-gray-400 hover:text-gray-300 underline underline-offset-4 cursor-pointer transition-colors block mx-auto pt-1"
          >
            Prefiero seguir postergándolo y pagar $24 después
          </button>
        </div>

        {/* Reassurance badge */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-center gap-2 text-[11px] text-gray-400">
          <ShieldCheck className="w-3.5 h-3.5 text-[#F4B735]" />
          <span>Compra 100% segura procesada por Hotmart · Acceso inmediato</span>
        </div>
      </div>
    </div>
  );
};
