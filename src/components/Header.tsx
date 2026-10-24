import React from 'react';
import { Shield, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#101115]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F4B735] to-[#D49B24] flex items-center justify-center font-black text-[#101115] text-sm tracking-tighter shadow-md">
            CF
          </div>
          <span className="font-extrabold tracking-wider text-sm md:text-base text-white uppercase">
            CÓDIGO <span className="text-[#F4B735]">FÍSICO</span>
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs md:text-sm">
          <div className="hidden sm:flex items-center gap-1.5 text-[#B8BBC2]">
            <Shield className="w-3.5 h-3.5 text-[#F4B735]" />
            <span>Garantía de 7 días</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#191B20] px-3 py-1 rounded-full border border-white/10 text-xs font-semibold text-white">
            <Sparkles className="w-3 h-3 text-[#F4B735]" />
            <span>50% OFF · $12 USD</span>
          </div>
        </div>
      </div>
    </header>
  );
};
