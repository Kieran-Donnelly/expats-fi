import assert from 'node:assert/strict'
import test from 'node:test'

import { publicPreview } from '../src/lib/admin-preview'

test('creates public preview links only for published records with a slug', () => {
  const preview = publicPreview('/news')

  assert.equal(preview({ slug: 'a-useful-story', status: 'published' }), 'https://expats.fi/news/a-useful-story/')
  assert.equal(preview({ slug: 'still-being-written', status: 'draft' }), null)
  assert.equal(preview({ status: 'published' }), null)
})

test('supports Payload drafts and always-public collections', () => {
  assert.equal(publicPreview('/resources', '_status')({ slug: 'first-steps', _status: 'published' }), 'https://expats.fi/resources/first-steps/')
  assert.equal(publicPreview('/embassies', null)({ slug: 'new-zealand' }), 'https://expats.fi/embassies/new-zealand/')
})
