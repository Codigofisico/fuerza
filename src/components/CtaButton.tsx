import React from 'react';
import { HOTMART_CHECKOUT_URL, trackEvent } from '../utils/analytics';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { ScarcityCounter } from './ScarcityCounter';

interface CtaButtonProps {
  text?: string;
  location: string;
  size?: 'normal' | 'large' | 'mobile-bar';
  showSubtext?: boolean;
  subtext?: string;
  showScarcity?: boolean;
  compactScarcity?: boolean;
  fullWidth?: boolean;
  animateEntrance?: boolean;
  className?: string;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  text = '¡QUIERO EMPEZAR POR $12!',
  location,
  size = 'normal',
  showSubtext = false,
  subtext = 'Pago único · Entrega digital vía Hotmart · Garantía de 7 días',
  showScarcity = true,
  compactScarcity = false,
  fullWidth = false,
  animateEntrance = false,
  className = '',
}) => {
  const handleClick = () => {
    trackEvent('InitiateCheckout', {
      cta_location: location,
      cta_text: text,
      timestamp: new Date().toISOString(),
    });
  };

  const isMobileBar = size === 'mobile-bar';

  // Base sizing adhering to min-h-[56px] and responsive full-width behavior
  const sizeClasses = {
    'large': 'min-h-[56px] py-4 px-8 text-base md:text-lg',
    'normal': 'min-h-[56px] py-3.5 px-6 text-sm md:text-base',
    'mobile-bar': 'min-h-[44px] py-2.5 px-4 text-xs md:text-sm',
  }[size];

  return (
    <div className={`inline-flex flex-col items-center w-full ${fullWidth ? 'w-full' : 'sm:w-auto'}`}>
      <a
        href={HOTMART_CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label={`${text} - Abrir checkout seguro de Hotmart`}
        className={`group relative inline-flex items-center justify-center font-bold uppercase rounded-[12px] bg-[#FFC83D] text-[#101115] cursor-pointer text-center select-none shadow-md hover:shadow-xl hover:shadow-[#FFC83D]/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC83D]/50 cta-button-base ${
          animateEntrance ? 'animate-cta-entrance' : ''
        } ${sizeClasses} ${fullWidth ? 'w-full' : 'w-full sm:w-auto'} ${className}`}
      >
        <span className="flex items-center justify-center gap-2.5 font-bold tracking-wide">
          <span>{text}</span>
          <ArrowRight className="w-5 h-5 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-[4px] stroke-[2.5]" />
        </span>
      </a>

      {/* Scarcity & Urgency spots counter beneath button */}
      {showScarcity && !isMobileBar && (
        <ScarcityCounter compact={compactScarcity} />
      )}

      {showSubtext && (
        <p className="mt-3 text-xs text-[#B8BBC2] text-center flex items-center justify-center gap-1.5 opacity-90">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FFC83D] shrink-0" />
          <span>{subtext}</span>
        </p>
      )}
    </div>
  );
};
