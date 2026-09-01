import assert from 'node:assert/strict'
import test from 'node:test'

import { safeReturnPath } from '../src/lib/return-path'

test('keeps valid Expats.fi return paths', () => {
  assert.equal(safeReturnPath('/submit-business/'), '/submit-business/')
  assert.equal(safeReturnPath('/community/board/example/?reply=true#comments'), '/community/board/example/?reply=true#comments')
})

test('rejects external, malformed and protocol-relative return paths', () => {
  assert.equal(safeReturnPath('https://example.com'), '/account/')
  assert.equal(safeReturnPath('//example.com/path'), '/account/')
  assert.equal(safeReturnPath('/\\example.com/path'), '/account/')
  assert.equal(safeReturnPath(undefined), '/account/')
})

test('supports a page-specific fallback', () => {
  assert.equal(safeReturnPath('not-a-path', '/community/board/'), '/community/board/')
})
