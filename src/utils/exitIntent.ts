/**
 * Exit intent detection utility
 */

export const EXIT_INTENT_STORAGE_KEY = 'cf28_exit_intent_dismissed';

export function shouldTriggerExitIntent(
  clientY: number,
  alreadyTriggered: boolean
): boolean {
  if (alreadyTriggered) return false;
  // Trigger when cursor leaves towards the top browser chrome (tabs / close button)
  return clientY <= 15;
}

export function isExitIntentDismissed(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return sessionStorage.getItem(EXIT_INTENT_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export function markExitIntentDismissed(): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(EXIT_INTENT_STORAGE_KEY, 'true');
  } catch {
    // Ignore storage errors
  }
}
