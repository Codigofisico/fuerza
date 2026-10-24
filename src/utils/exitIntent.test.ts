import test from 'node:test';
import assert from 'node:assert/strict';
import { shouldTriggerExitIntent } from './exitIntent';

test('shouldTriggerExitIntent triggers when cursor moves to the top edge (clientY <= 15)', () => {
  assert.equal(shouldTriggerExitIntent(10, false), true);
  assert.equal(shouldTriggerExitIntent(0, false), true);
  assert.equal(shouldTriggerExitIntent(-5, false), true);
});

test('shouldTriggerExitIntent does not trigger inside viewport (clientY > 15)', () => {
  assert.equal(shouldTriggerExitIntent(50, false), false);
  assert.equal(shouldTriggerExitIntent(300, false), false);
});

test('shouldTriggerExitIntent honors alreadyTriggered flag to prevent spamming', () => {
  assert.equal(shouldTriggerExitIntent(5, true), false);
  assert.equal(shouldTriggerExitIntent(0, true), false);
});
