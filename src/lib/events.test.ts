import assert from 'node:assert/strict'
import test from 'node:test'

import { helsinkiDateKey, isPastEvent } from './events'

test('uses the calendar date in Helsinki', () => {
  assert.equal(helsinkiDateKey(new Date('2026-09-04T21:30:00Z')), '2026-09-05')
})

test('keeps events searchable through their final day', () => {
  const now = new Date('2026-09-05T10:00:00Z')

  assert.equal(isPastEvent('2026-09-04', now), true)
  assert.equal(isPastEvent('2026-09-05', now), false)
  assert.equal(isPastEvent('2026-09-06', now), false)
})
