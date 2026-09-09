import assert from 'node:assert/strict'
import test from 'node:test'

import { retiredArticleDestination, retiredArticleRedirects, retiredArticleSlugs } from './article-lifecycle'

test('retired guides point to their stronger replacements', () => {
  assert.deepEqual(retiredArticleRedirects, {
    'guide-moving-to-finland-index': '/start-here/',
    'guide-moving-to-finland-quick-guide': '/start-here/first-90-days-in-finland/',
    'guide-moving-to-finland-study-in-finland': '/study/',
    'guide-finance-banking': '/resources/guide-finance-index/',
    'guide-finance-online-banking': '/start-here/digital-finland-survival-kit/',
    'guide-employment-te-employment-service': '/resources/guide-employment-employment-services/',
    'guide-housing-index': '/housing/',
    'guide-housing-finding-housing-in-finland': '/housing/finding-a-rental-home-in-finland/',
    'guide-housing-renting-in-finland': '/housing/lease-deposit-and-moving-in/',
    'guide-housing-emergency-accommodation-in-finland': '/help/',
    'guide-living-in-finland-preschools-kindergartens': '/family/daycare-and-preschool/',
    'guide-living-in-finland-international-schools': '/family/schooling-in-helsinki/',
    'guide-living-in-finland-education': '/study/',
    'guide-living-in-finland-language-training': '/learn-finnish/',
    'guide-living-in-finland-culture': '/culture/',
    'guide-living-in-finland-finnish-language': '/learn-finnish/',
    'guide-living-in-finland-news': '/news/',
    'guide-connections-index': '/community/',
    'guide-connections-forums': '/community/',
    'guide-connections-groups': '/community/',
    'guide-connections-friendship-societies': '/community/',
    'guide-connections-embassies': '/embassies/',
    'guide-events-index': '/events/',
    'guide-events-expat-sports': '/sports/',
    'guide-events-finnish-sports': '/sports/',
  })
  assert.deepEqual(retiredArticleSlugs, Object.keys(retiredArticleRedirects))
  assert.equal(retiredArticleDestination('guide-moving-to-finland-study-in-finland'), '/study/')
  assert.equal(retiredArticleDestination('not-a-retired-guide'), undefined)
})
