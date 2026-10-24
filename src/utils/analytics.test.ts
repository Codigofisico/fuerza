import test from 'node:test';
import assert from 'node:assert/strict';
import {
  HOTMART_CHECKOUT_URL,
  validateCheckoutUrl,
  OFFICIAL_PRICING,
  trackEvent,
} from './analytics';

test('Hotmart checkout URL contains exact required discount and mode parameters', () => {
  assert.equal(validateCheckoutUrl(HOTMART_CHECKOUT_URL), true);
  assert.ok(HOTMART_CHECKOUT_URL.includes('checkoutMode=10'));
  assert.ok(HOTMART_CHECKOUT_URL.includes('offDiscount=CODIGO'));
});

test('validateCheckoutUrl rejects invalid or modified URLs', () => {
  assert.equal(validateCheckoutUrl('https://otherdomain.com?checkoutMode=10&offDiscount=CODIGO'), false);
  assert.equal(validateCheckoutUrl('https://pay.hotmart.com/X108167592L?checkoutMode=5&offDiscount=CODIGO'), false);
  assert.equal(validateCheckoutUrl('https://pay.hotmart.com/X108167592L?checkoutMode=10'), false);
  assert.equal(validateCheckoutUrl('not-a-url'), false);
});

test('official pricing matches brief exactly: $24 to $12 with 50% discount', () => {
  assert.equal(OFFICIAL_PRICING.regularPrice, 24);
  assert.equal(OFFICIAL_PRICING.promoPrice, 12);
  assert.equal(OFFICIAL_PRICING.discountPercent, 50);
  assert.equal(
    OFFICIAL_PRICING.regularPrice * (1 - OFFICIAL_PRICING.discountPercent / 100),
    OFFICIAL_PRICING.promoPrice
  );
});

test('trackEvent safely generates InitiateCheckout payload without triggering Purchase', () => {
  const result = trackEvent('InitiateCheckout', { cta_location: 'hero_section' });
  assert.equal(result.eventName, 'InitiateCheckout');
  assert.equal(result.value, 12);
  assert.equal(result.currency, 'USD');
  assert.equal(result.cta_location, 'hero_section');
  assert.notEqual(result.eventName, 'Purchase', 'Never fire Purchase on button click');
});

test('BOOK_CONTENT_PAGES contains exactly 8 official images and valid titles', async () => {
  const { BOOK_CONTENT_PAGES } = await import('../data/landingData');
  assert.equal(BOOK_CONTENT_PAGES.length, 8);
  for (let i = 1; i <= 8; i++) {
    const item = BOOK_CONTENT_PAGES[i - 1];
    assert.equal(item.id, i);
    assert.ok(item.imageUrl.includes(`CONTENIDO-${i}.png`));
    assert.ok(item.title.length > 5);
    assert.ok(item.description.length > 10);
  }
});

