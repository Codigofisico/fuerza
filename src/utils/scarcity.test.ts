import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateScarcity, INITIAL_SCARCITY } from './scarcity';

test('calculateScarcity computes remaining spots and percentage correctly', () => {
  const result = calculateScarcity(50, 44, 18);
  assert.equal(result.totalSpots, 50);
  assert.equal(result.takenSpots, 44);
  assert.equal(result.remainingSpots, 6);
  assert.equal(result.percentageTaken, 88);
  assert.equal(result.activeViewers, 18);
});

test('calculateScarcity handles boundary cases cleanly', () => {
  const zeroResult = calculateScarcity(50, 50, 5);
  assert.equal(zeroResult.remainingSpots, 0);
  assert.equal(zeroResult.percentageTaken, 100);

  const overflowResult = calculateScarcity(50, 60, 5);
  assert.equal(overflowResult.remainingSpots, 0);
  assert.equal(overflowResult.percentageTaken, 100);
});

test('INITIAL_SCARCITY maintains strong FOMO trigger with under 10 spots left', () => {
  assert.ok(INITIAL_SCARCITY.remainingSpots > 0);
  assert.ok(INITIAL_SCARCITY.remainingSpots <= 8);
  assert.ok(INITIAL_SCARCITY.percentageTaken >= 80);
});
