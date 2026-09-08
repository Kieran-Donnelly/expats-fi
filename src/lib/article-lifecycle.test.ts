import assert from 'node:assert/strict'
import test from 'node:test'

import { retiredArticleRedirects, retiredArticleSlugs } from './article-lifecycle'

test('retired moving guides point to their stronger replacements', () => {
  assert.deepEqual(retiredArticleRedirects, {
    'guide-moving-to-finland-index': '/start-here/',
    'guide-moving-to-finland-quick-guide': '/start-here/first-90-days-in-finland/',
  })
  assert.deepEqual(retiredArticleSlugs, Object.keys(retiredArticleRedirects))
})
