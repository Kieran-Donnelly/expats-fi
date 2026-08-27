import assert from 'node:assert/strict'
import test from 'node:test'

import { savedBusinessId, savedBusinessIdSet } from '../src/lib/saved-businesses'

test('normalises saved business relationship values to numeric IDs', () => {
  assert.equal(savedBusinessId(12), 12)
  assert.equal(savedBusinessId({ id: 24 } as never), 24)
  assert.equal(savedBusinessId({ id: '24' } as never), null)
})

test('deduplicates saved business IDs for archive state checks', () => {
  const ids = savedBusinessIdSet({ savedBusinesses: [12, { id: 12 }, 24] as never })
  assert.deepEqual([...ids], [12, 24])
})
