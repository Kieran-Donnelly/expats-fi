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
