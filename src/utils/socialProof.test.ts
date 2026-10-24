import test from 'node:test';
import assert from 'node:assert/strict';
import { RECENT_PURCHASES, getNextNotificationIndex } from './socialProof';

test('RECENT_PURCHASES contains diverse buyers and locations', () => {
  assert.ok(RECENT_PURCHASES.length >= 6);
  RECENT_PURCHASES.forEach((item) => {
    assert.ok(item.name.length > 2);
    assert.ok(item.location.length > 5);
    assert.ok(item.product.includes('Código Fuerza 28'));
    assert.ok(item.timeAgo.includes('hace'));
  });
});

test('getNextNotificationIndex rotates cyclically', () => {
  assert.equal(getNextNotificationIndex(0, 8), 1);
  assert.equal(getNextNotificationIndex(7, 8), 0);
  assert.equal(getNextNotificationIndex(4, 8), 5);
});
