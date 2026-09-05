import assert from 'node:assert/strict'
import test from 'node:test'

import { businessSummary, isBusinessSubmissionAction, normalizeBusinessWebsite, slugifyBusinessName } from '../src/lib/business-moderation'
import { businessVerificationDescription, businessVerificationLabel, isPubliclyVerifiedBusiness } from '../src/lib/business-verification'

test('normalises business websites for duplicate checks', () => {
  assert.equal(normalizeBusinessWebsite('https://www.Example.fi/'), 'example.fi')
  assert.equal(normalizeBusinessWebsite('https://example.fi/services/?source=directory'), 'example.fi/services')
  assert.equal(normalizeBusinessWebsite('  '), '')
})

test('creates stable, readable slugs and summaries for approved submissions', () => {
  assert.equal(slugifyBusinessName('Äiti & Co. Café'), 'aiti-co-cafe')
  assert.equal(slugifyBusinessName('   '), 'business')
  assert.equal(businessSummary('A short description'), 'A short description')
  assert.equal(businessSummary('1234567890', 6), '12345…')
})

test('whitelists moderation actions and exposes public verification labels', () => {
  assert.equal(isBusinessSubmissionAction('approve'), true)
  assert.equal(isBusinessSubmissionAction('delete'), false)
  assert.equal(isPubliclyVerifiedBusiness('reviewed'), true)
  assert.equal(isPubliclyVerifiedBusiness('unverified'), false)
  assert.equal(businessVerificationLabel('reviewed'), 'Details checked')
  assert.equal(businessVerificationLabel('owner-verified'), 'Confirmed by business')
  assert.equal(businessVerificationDescription('reviewed'), 'Expats.fi has checked the listing details against public information')
  assert.equal(businessVerificationDescription('owner-verified'), 'The business has confirmed its listing details')
  assert.equal(businessVerificationLabel('unknown'), 'Unverified')
})
