import assert from 'node:assert/strict'
import test from 'node:test'

import { demoteEmbeddedH1Headings } from './rich-text'

test('demotes headings embedded as h1 without changing other rich text', () => {
  const content = {
    root: {
      children: [
        { type: 'heading', tag: 'h1', children: [{ type: 'text', text: 'Embedded title' }] },
        { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Existing section' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'Body copy' }] },
      ],
    },
  }

  const cleaned = demoteEmbeddedH1Headings(content)

  assert.equal(cleaned.root.children[0].tag, 'h2')
  assert.equal(cleaned.root.children[1].tag, 'h2')
  assert.equal(cleaned.root.children[2].type, 'paragraph')
  assert.equal(content.root.children[0].tag, 'h1')
})
