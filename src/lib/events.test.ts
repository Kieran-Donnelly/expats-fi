import assert from 'node:assert/strict'
import test from 'node:test'

import { eventOfferJsonLd, helsinkiDateKey, isPastEvent } from './events'

test('uses the calendar date in Helsinki', () => {
  assert.equal(helsinkiDateKey(new Date('2026-09-04T21:30:00Z')), '2026-09-05')
})

test('keeps events searchable through their final day', () => {
  const now = new Date('2026-09-05T10:00:00Z')

  assert.equal(isPastEvent('2026-09-04', now), true)
  assert.equal(isPastEvent('2026-09-05', now), false)
  assert.equal(isPastEvent('2026-09-06', now), false)
})

test('publishes a zero-priced offer for a free event', () => {
  assert.deepEqual(eventOfferJsonLd({ free: true, sourceUrl: 'https://example.com/free-event' }), {
    '@type': 'Offer',
    url: 'https://example.com/free-event',
    price: 0,
    priceCurrency: 'EUR',
  })
})

test('publishes a verified ticket price and direct offer URL', () => {
  assert.deepEqual(eventOfferJsonLd({
    free: false,
    offerPrice: 12.5,
    offerUrl: 'https://tickets.example.com/event',
    sourceUrl: 'https://example.com/event',
  }), {
    '@type': 'Offer',
    url: 'https://tickets.example.com/event',
    price: 12.5,
    priceCurrency: 'EUR',
  })
})

test('does not invent a ticket price when a paid event has not been verified', () => {
  assert.deepEqual(eventOfferJsonLd({ free: false, sourceUrl: 'https://example.com/paid-event' }), {
    '@type': 'Offer',
    url: 'https://example.com/paid-event',
  })
})
