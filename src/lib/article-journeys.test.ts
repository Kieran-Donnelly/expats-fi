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

test('connects health, family and study resources to the detailed hubs', () => {
  assert.equal(
    articleSeoTitle('guide-living-in-finland-public-healthcare', 'Fallback'),
    'Public healthcare in Finland: appointments, costs and urgent care',
  )
  assert.deepEqual(
    articleJourneyLinks['guide-living-in-finland-public-healthcare'].map(({ href }) => href),
    ['/family/healthcare-and-maisa/', '/family/urgent-help-and-safety/', '/help/'],
  )
  assert.equal(articleJourneyLinks['guide-living-in-finland-preschools-kindergartens'][0].href, '/family/daycare-and-preschool/')
  assert.equal(articleJourneyLinks['guide-living-in-finland-education'][2].href, '/study/')
  assert.equal(articleJourneyLinks['guide-moving-to-finland-study-in-finland'][0].href, '/study/')
  assert.equal(articleJourneyLinks['guide-living-in-finland-social-security'][2].href, '/family/benefits-and-family-money/')
})

test('gives the remaining practical library clearer reader-facing titles', () => {
  assert.equal(
    articleSeoTitle('guide-telecommunications-and-media-index', 'Fallback'),
    'Phones, internet and television in Finland: getting connected',
  )
  assert.equal(
    articleSeoTitle('guide-shopping-in-finland-online-shopping', 'Fallback'),
    'Online shopping in Finland: delivery, VAT, returns and scams',
  )
  assert.equal(
    articleSeoTitle('guide-housing-investment-property-in-finland', 'Fallback'),
    'Buying an investment property in Finland: costs, tenants and risk',
  )
  assert.equal(
    articleSeoTitle('guide-moving-to-finland-address-and-postal-services', 'Fallback'),
    'Your address and post in Finland: registrations, mail and moving notices',
  )
})

test('connects the remaining library hubs to clear next steps', () => {
  assert.deepEqual(
    articleJourneyLinks['guide-telecommunications-and-media-index'].map(({ href }) => href),
    [
      '/resources/guide-telecommunications-and-media-telephone/',
      '/resources/guide-telecommunications-and-media-isp/',
      '/resources/guide-telecommunications-and-media-television/',
    ],
  )
  assert.equal(articleJourneyLinks['guide-travel-finland-index'][2].href, '/explore/day-trips/')
  assert.equal(articleJourneyLinks['guide-shopping-in-finland-index'][1].href, '/resources/guide-shopping-in-finland-groceries/')
  assert.equal(articleJourneyLinks['guide-living-in-finland-index'][0].href, '/start-here/')
})
