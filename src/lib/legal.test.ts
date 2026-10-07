import assert from 'node:assert/strict'
import test from 'node:test'

import { ACCOUNT_MINIMUM_AGE, hasAcceptedCurrentTerms, TERMS_VERSION } from './legal'

test('keeps the account minimum age explicit', () => {
  assert.equal(ACCOUNT_MINIMUM_AGE, 16)
})

test('requires age confirmation and the current terms version', () => {
  const acceptedAt = '2026-10-07T12:00:00.000Z'
  assert.equal(hasAcceptedCurrentTerms({ ageConfirmedAt: acceptedAt, termsAcceptedAt: acceptedAt, termsVersion: TERMS_VERSION }), true)
  assert.equal(hasAcceptedCurrentTerms({ ageConfirmedAt: acceptedAt, termsAcceptedAt: acceptedAt, termsVersion: 'older-version' }), false)
  assert.equal(hasAcceptedCurrentTerms({ ageConfirmedAt: null, termsAcceptedAt: acceptedAt, termsVersion: TERMS_VERSION }), false)
})
