import React, { useState, useEffect } from 'react';
import { Flame, Users, AlertTriangle, Clock } from 'lucide-react';
import { calculateScarcity } from '../utils/scarcity';

// Global listener to synchronize all counter instances on the page
let globalTakenSpots = 44;
const listeners = new Set<(val: number) => void>();

function notifyListeners(val: number) {
  globalTakenSpots = val;
  listeners.forEach((listener) => listener(val));
}

interface ScarcityCounterProps {
  compact?: boolean;
  className?: string;
}

export const ScarcityCounter: React.FC<ScarcityCounterProps> = ({
  compact = false,
  className = '',
}) => {
  const [taken, setTaken] = useState(globalTakenSpots);
  const [viewers, setViewers] = useState(16);

  useEffect(() => {
    const updateListener = (newVal: number) => {
      setTaken(newVal);
    };
    listeners.add(updateListener);

    // Simulate realistic live visitor activity
    const viewerInterval = setInterval(() => {
      setViewers((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return next >= 12 && next <= 24 ? next : prev;
      });
    }, 4500);

    // After 45 seconds of session, simulate 1 spot being reserved (FOMO acceleration)
    const spotTimer = setTimeout(() => {
      if (globalTakenSpots < 46) {
        notifyListeners(globalTakenSpots + 1);
      }
    }, 45000);

    return () => {
      listeners.delete(updateListener);
      clearInterval(viewerInterval);
      clearTimeout(spotTimer);
    };
  }, []);

  const data = calculateScarcity(50, taken, viewers);

  if (compact) {
    return (
      <div
        className={`w-full max-w-md mt-3.5 p-3 rounded-xl bg-[#14161C] border border-[#F4B735]/30 text-center shadow-lg ${className}`}
      >
        <div className="flex items-center justify-between gap-2 text-xs mb-2">
          <span className="flex items-center gap-1.5 text-[#F4B735] font-black uppercase tracking-wide">
            <Flame className="w-3.5 h-3.5 text-[#F4B735] fill-[#F4B735] animate-pulse" />
            ¡Solo quedan {data.remainingSpots} cupos a $12!
          </span>
          <span className="text-[11px] text-gray-400 font-medium">
            {data.takenSpots}/{data.totalSpots} tomados
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-[#101115] rounded-full h-2 overflow-hidden border border-white/5 mb-2">
          <div
            className="bg-gradient-to-r from-[#D49B24] via-[#F4B735] to-[#FFD46B] h-full rounded-full transition-all duration-700 ease-out"
            style={{ width: `${data.percentageTaken}%` }}
          />
        </div>

        <p className="text-[11px] text-gray-400 leading-tight">
          Al agotarse los cupos, el precio volverá a <span className="text-white font-semibold">$24 USD</span>.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`w-full max-w-lg mt-4 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-b from-[#191B20] to-[#14161C] border border-[#F4B735]/40 shadow-xl ${className}`}
      aria-live="polite"
    >
      {/* Top Scarcity Alert */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F4B735]/15 border border-[#F4B735]/40 text-[#F4B735] text-[11px] font-black uppercase tracking-wider">
          <Flame className="w-3.5 h-3.5 fill-[#F4B735] animate-pulse shrink-0" />
          <span>ALTA DEMANDA: ÚLTIMOS {data.remainingSpots} CUPOS</span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <Users className="w-3.5 h-3.5" />
          <span>{data.activeViewers} viendo ahora</span>
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="space-y-1.5 mb-2.5">
        <div className="flex justify-between text-xs">
          <span className="text-gray-300 font-bold">
            Cupos promocionales con 50% OFF:
          </span>
          <span className="text-[#F4B735] font-black">
            {data.takenSpots} de {data.totalSpots} reservados ({data.percentageTaken}%)
          </span>
        </div>

        {/* Outer bar */}
        <div className="w-full bg-[#101115] rounded-full h-2.5 sm:h-3 p-0.5 overflow-hidden border border-white/10 shadow-inner">
          <div
            className="bg-gradient-to-r from-[#D49B24] via-[#F4B735] to-[#FFD46B] h-full rounded-full transition-all duration-700 ease-out relative"
            style={{ width: `${data.percentageTaken}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Urgency Explanation Footer */}
      <div className="flex items-start gap-2 pt-2 border-t border-white/5 text-[11px] sm:text-xs text-[#B8BBC2] leading-snug">
        <AlertTriangle className="w-3.5 h-3.5 text-[#F4B735] shrink-0 mt-0.5" />
        <p>
          Una vez reservados los últimos {data.remainingSpots} cupos, la plataforma desactivará el cupón <code className="text-[#F4B735] bg-[#101115] px-1 rounded font-mono">CODIGO</code> y el acceso regresará a su precio regular de <span className="line-through text-red-400">$24 USD</span>.
        </p>
      </div>
    </div>
  );
};
