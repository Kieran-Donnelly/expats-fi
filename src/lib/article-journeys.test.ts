import assert from 'node:assert/strict'
import test from 'node:test'

import { articleJourneyLinks, articleSeoTitle } from './article-journeys'

test('gives focused search titles to the registration cluster', () => {
  assert.equal(
    articleSeoTitle('guide-moving-to-finland-registration', 'Fallback'),
    'Registering in Finland: identity code, address and kotikunta',
  )
  assert.equal(articleSeoTitle('another-guide', 'Fallback'), 'Fallback')
})

test('connects the registration, bank account, digital identity and Kela journeys', () => {
  assert.deepEqual(
    articleJourneyLinks['guide-moving-to-finland-registration'].map(({ href }) => href),
    [
      '/resources/guide-finance-account/',
      '/start-here/digital-finland-survival-kit/',
      '/resources/guide-living-in-finland-social-security/',
    ],
  )
})

test('separates job search, public employment services and employment rights', () => {
  assert.equal(
    articleSeoTitle('guide-employment-employment-services', 'Fallback'),
    'Job Market Finland and local employment services',
  )
  assert.deepEqual(
    articleJourneyLinks['guide-employment-employment-contract'].map(({ href }) => href),
    [
      '/resources/guide-employment-wages-conditions/',
      '/resources/guide-employment-unions/',
      '/resources/guide-employment-employment-law-and-disputes/',
    ],
  )
})

test('connects older housing resources to the stronger housing journeys', () => {
  assert.equal(
    articleSeoTitle('guide-housing-renting-in-finland', 'Fallback'),
    'Renting in Finland: leases, deposits and tenant rights',
  )
  assert.deepEqual(
    articleJourneyLinks['guide-housing-renting-in-finland'].map(({ href }) => href),
    [
      '/housing/lease-deposit-and-moving-in/',
      '/housing/setting-up-and-running-your-home/',
      '/housing/repairs-rent-trouble-and-moving-out/',
    ],
  )
  assert.equal(articleJourneyLinks['guide-housing-student-housing-in-finland'][0].href, '/study/')
  assert.equal(articleJourneyLinks['guide-housing-emergency-accommodation-in-finland'][0].href, '/help/')
})
