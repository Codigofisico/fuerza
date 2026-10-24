import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { RECENT_PURCHASES, PurchaseNotification, getNextNotificationIndex } from '../utils/socialProof';
import { OFFICIAL_IMAGES } from '../data/landingData';

export const SocialProofToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // First appearance after 4 seconds of initial load
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    let hideTimer: NodeJS.Timeout;
    let nextTimer: NodeJS.Timeout;

    if (isVisible) {
      // Stay visible for 5.5 seconds
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5500);
    } else {
      // Stay hidden for 9 seconds before showing next
      nextTimer = setTimeout(() => {
        setCurrentIndex((prev) => getNextNotificationIndex(prev));
        setIsVisible(true);
      }, 9000);
    }

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [isVisible, isDismissed]);

  if (isDismissed) return null;

  const current: PurchaseNotification = RECENT_PURCHASES[currentIndex];

  const handleToastClick = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-live="polite"
      aria-atomic="true"
      className={`fixed bottom-20 sm:bottom-6 left-3 sm:left-6 z-40 max-w-[340px] sm:max-w-[360px] w-full transition-all duration-500 transform ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-6 opacity-0 pointer-events-none'
      }`}
    >
      <div
        onClick={handleToastClick}
        className="group relative flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#14161C]/95 backdrop-blur-md border border-[#F4B735]/40 shadow-2xl text-left cursor-pointer hover:border-[#F4B735] transition-all hover:scale-[1.02]"
        title="Ver oferta oficial"
      >
        {/* Book Cover Thumbnail with verified check badge */}
        <div className="relative w-12 h-16 shrink-0 rounded-lg overflow-hidden bg-[#101115] border border-white/10 shadow-md">
          <img
            src={OFFICIAL_IMAGES.mainBook}
            alt="Código Fuerza 28"
            className="w-full h-full object-contain"
          />
          <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-[#101115] p-0.5 rounded-full shadow">
            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
          </div>
        </div>

        {/* Content Details */}
        <div className="flex-1 min-w-0 pr-4">
          <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Compra verificada</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-400 font-medium lowercase">{current.timeAgo}</span>
          </div>

          <h5 className="text-xs sm:text-sm font-black text-white truncate leading-tight mt-0.5">
            {current.name} <span className="font-medium text-gray-400 text-[11px]">de {current.location}</span>
          </h5>

          <p className="text-[11px] text-[#F4B735] font-semibold truncate mt-0.5">
            Adquirió {current.product}
          </p>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsDismissed(true);
          }}
          aria-label="Cerrar notificaciones de compra"
          className="absolute top-2 right-2 p-1 text-gray-500 hover:text-white rounded-md hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
