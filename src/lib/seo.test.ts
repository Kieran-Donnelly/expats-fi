import assert from 'node:assert/strict'
import test from 'node:test'

import { seoDescription } from './seo'

test('seoDescription leaves concise descriptions unchanged', () => {
  const description = 'Friendly, practical help for building a life in Finland.'
  assert.equal(seoDescription(description), description)
})

test('seoDescription compacts whitespace and shortens at a word boundary', () => {
  const description = `A useful guide   with extra spacing and ${'carefully chosen practical details '.repeat(8)}`
  const result = seoDescription(description)

  assert.ok(result.length <= 160)
  assert.equal(result.endsWith('…'), true)
  assert.equal(result.includes('  '), false)
})

test('seoDescription honours a custom limit', () => {
  assert.equal(seoDescription('One two three four five six', 18), 'One two three…')
})
