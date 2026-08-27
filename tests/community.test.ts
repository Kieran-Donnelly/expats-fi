import assert from 'node:assert/strict'
import test from 'node:test'

import { communityReportReasonLabels, isCommunityReportAction, isCommunityReportReason, isCommunityTopic, memberDisplayName, slugifyCommunityTitle } from '../src/lib/community-options'

test('whitelists community topics and report reasons', () => {
  assert.equal(isCommunityTopic('housing'), true)
  assert.equal(isCommunityTopic('classifieds'), false)
  assert.equal(isCommunityReportReason('harassment'), true)
  assert.equal(isCommunityReportReason('something-else'), false)
  assert.equal(communityReportReasonLabels.misinformation, 'Misinformation')
})

test('only exposes moderation actions the admin endpoint understands', () => {
  assert.equal(isCommunityReportAction('hide'), true)
  assert.equal(isCommunityReportAction('dismiss'), true)
  assert.equal(isCommunityReportAction('delete'), false)
})

test('creates readable community slugs and safe member names', () => {
  assert.equal(slugifyCommunityTitle('Ärsyttääkö talven pimeys?'), 'arsyttaako-talven-pimeys')
  assert.equal(slugifyCommunityTitle('   '), 'community-post')
  assert.equal(memberDisplayName({ name: '  Kieran Donnelly ' }), 'Kieran Donnelly')
  assert.equal(memberDisplayName({ email: 'newcomer@example.com' }), 'newcomer')
  assert.equal(memberDisplayName(null), 'Expats.fi member')
})
