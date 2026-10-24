/**
 * Scarcity and Urgency management for Código Fuerza 28 promotional offer
 */

export interface ScarcityState {
  totalSpots: number;
  takenSpots: number;
  remainingSpots: number;
  percentageTaken: number;
  activeViewers: number;
}

export const INITIAL_SCARCITY: ScarcityState = {
  totalSpots: 50,
  takenSpots: 44,
  remainingSpots: 6,
  percentageTaken: 88,
  activeViewers: 17,
};

/**
 * Calculates current scarcity parameters safely
 */
export function calculateScarcity(
  total: number = 50,
  taken: number = 44,
  viewers: number = 17
): ScarcityState {
  const safeTotal = Math.max(1, total);
  const safeTaken = Math.min(Math.max(0, taken), safeTotal);
  const remaining = Math.max(0, safeTotal - safeTaken);
  const percentage = Math.round((safeTaken / safeTotal) * 100);

  return {
    totalSpots: safeTotal,
    takenSpots: safeTaken,
    remainingSpots: remaining,
    percentageTaken: percentage,
    activeViewers: Math.max(1, viewers),
  };
}
