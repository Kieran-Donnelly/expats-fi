import assert from 'node:assert/strict'
import test from 'node:test'

import { authJourneyMessages, getAuthJourney } from '../src/lib/auth-journey'

test('accepts only known sign-in journey reasons', () => {
  assert.equal(getAuthJourney('save-guide'), 'save-guide')
  assert.equal(getAuthJourney('reply'), 'reply')
  assert.equal(getAuthJourney('made-up'), undefined)
  assert.equal(getAuthJourney(undefined), undefined)
})

test('keeps every journey message specific about the next step', () => {
  assert.match(authJourneyMessages['save-business'], /business/)
  assert.match(authJourneyMessages['start-post'], /conversation/)
  assert.match(authJourneyMessages['submit-business'], /listing/)
})
