import React, { useState, useEffect } from 'react';
import { HOTMART_CHECKOUT_URL, trackEvent } from '../utils/analytics';
import { ArrowRight, Sparkles } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after user scrolls past the top 250px so it doesn't block the hero
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleClick = () => {
    trackEvent('InitiateCheckout', {
      cta_location: 'mobile_sticky_bar',
      cta_text: 'COMPRAR AHORA',
    });
  };

  return (
    <aside
      aria-label="Barra de compra rápida"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#101115]/95 backdrop-blur-lg border-t border-[#F4B735]/30 px-4 py-2.5 shadow-2xl transition-all duration-300 transform translate-y-0"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        {/* Offer Info */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-[10px] text-[#F4B735] font-black tracking-wider uppercase">
            <Sparkles className="w-3 h-3" />
            <span>OFERTA $12 USD</span>
          </div>
          <div className="text-[11px] text-[#B8BBC2]">
            <span className="line-through text-gray-500 mr-1.5">$24</span>
            <span className="text-white font-black text-sm">$12</span>
            <span className="text-[10px] ml-1 text-emerald-400 font-bold">-50%</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={HOTMART_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          aria-label="Comprar ahora por 12 dólares en Hotmart"
          className="flex-1 max-w-[175px] min-h-[48px] inline-flex items-center justify-center gap-1.5 px-3 rounded-[12px] bg-[#FFC83D] active:scale-[0.98] active:bg-[#FFD45F] text-[#101115] font-bold text-xs uppercase tracking-wider shadow-md transition-all duration-100 select-none"
        >
          <span className="text-[#101115]">COMPRAR AHORA</span>
          <ArrowRight className="w-4 h-4 text-[#101115] shrink-0" />
        </a>
      </div>
    </aside>
  );
};
