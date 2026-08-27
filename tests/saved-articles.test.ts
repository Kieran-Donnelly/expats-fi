import assert from 'node:assert/strict'
import test from 'node:test'

import { savedArticleId, savedArticleIdSet } from '../src/lib/saved-articles'

test('normalises saved article relationship values to numeric IDs', () => {
  assert.equal(savedArticleId(12), 12)
  assert.equal(savedArticleId({ id: 24 } as never), 24)
  assert.equal(savedArticleId({ id: '24' } as never), null)
})

test('deduplicates saved article IDs for archive state checks', () => {
  const ids = savedArticleIdSet({ savedArticles: [12, { id: 12 }, 24] as never })
  assert.deepEqual([...ids], [12, 24])
})
