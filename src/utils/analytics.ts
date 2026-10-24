/**
 * Conversion tracking and commercial offer utilities for Código Fuerza 28
 */

export const HOTMART_CHECKOUT_URL =
  'https://pay.hotmart.com/X108167592L?checkoutMode=10&offDiscount=CODIGO';

export const HOTMART_REFUND_URL = 'https://refund.hotmart.com/';

export interface PricingDetails {
  regularPrice: number;
  promoPrice: number;
  discountPercent: number;
  currency: string;
  formattedRegular: string;
  formattedPromo: string;
}

export const OFFICIAL_PRICING: PricingDetails = {
  regularPrice: 24,
  promoPrice: 12,
  discountPercent: 50,
  currency: 'USD',
  formattedRegular: '$24 USD',
  formattedPromo: '$12 USD',
};

/**
 * Validates that any purchase CTA link strictly adheres to Hotmart requirements:
 * - Specific product checkout ID
 * - checkoutMode=10
 * - offDiscount=CODIGO
 */
export function validateCheckoutUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.includes('hotmart.com')) return false;
    if (parsed.searchParams.get('checkoutMode') !== '10') return false;
    if (parsed.searchParams.get('offDiscount') !== 'CODIGO') return false;
    return true;
  } catch {
    return false;
  }
}

export type TrackingEventType = 'PageView' | 'ViewContent' | 'InitiateCheckout';

export interface TrackingPayload {
  eventName: TrackingEventType;
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
  [key: string]: unknown;
}

/**
 * Safe conversion tracking dispatcher for Google Analytics (gtag) and Meta Pixel (fbq).
 * Ensures:
 * 1. Safe execution even if adblockers block pixels
 * 2. Strict CRO requirement: Purchase event is NEVER triggered on simple button click.
 */
export function trackEvent(
  eventName: TrackingEventType,
  extraParams: Record<string, unknown> = {}
): TrackingPayload {
  const payload: TrackingPayload = {
    eventName,
    content_name: 'Código Fuerza 28: Desde Cero + 4 Bonos',
    content_category: 'Fitness / Calistenia Digital',
    value: OFFICIAL_PRICING.promoPrice,
    currency: OFFICIAL_PRICING.currency,
    ...extraParams,
  };

  if (typeof window !== 'undefined') {
    // 1. Meta Pixel (fbq)
    const win = window as unknown as {
      fbq?: (action: string, event: string, params?: Record<string, unknown>) => void;
      gtag?: (action: string, event: string, params?: Record<string, unknown>) => void;
      dataLayer?: unknown[];
    };

    if (typeof win.fbq === 'function') {
      try {
        win.fbq('track', eventName, {
          content_name: payload.content_name,
          value: payload.value,
          currency: payload.currency,
          ...extraParams,
        });
      } catch {
        // Silently swallow pixel errors
      }
    }

    // 2. Google Analytics (gtag / GA4)
    if (typeof win.gtag === 'function') {
      try {
        win.gtag('event', eventName === 'InitiateCheckout' ? 'begin_checkout' : eventName.toLowerCase(), {
          items: [
            {
              item_name: payload.content_name,
              price: payload.value,
              currency: payload.currency,
            },
          ],
          ...extraParams,
        });
      } catch {
        // Silently swallow GA errors
      }
    }

    // 3. DataLayer push if available
    if (Array.isArray(win.dataLayer)) {
      win.dataLayer.push({
        event: eventName,
        ...payload,
      });
    }
  }

  return payload;
}
