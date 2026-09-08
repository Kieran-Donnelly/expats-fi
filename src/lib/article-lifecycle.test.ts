import assert from 'node:assert/strict'
import test from 'node:test'

import { retiredArticleRedirects, retiredArticleSlugs } from './article-lifecycle'

test('retired guides point to their stronger replacements', () => {
  assert.deepEqual(retiredArticleRedirects, {
    'guide-moving-to-finland-index': '/start-here/',
    'guide-moving-to-finland-quick-guide': '/start-here/first-90-days-in-finland/',
    'guide-finance-banking': '/resources/guide-finance-index/',
    'guide-finance-online-banking': '/start-here/digital-finland-survival-kit/',
    'guide-employment-te-employment-service': '/resources/guide-employment-employment-services/',
  })
  assert.deepEqual(retiredArticleSlugs, Object.keys(retiredArticleRedirects))
})
