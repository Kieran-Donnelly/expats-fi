import assert from 'node:assert/strict'
import test from 'node:test'

import { communitySubmissionStatus, screenCommunityContent } from '../src/lib/community-safety'

test('keeps ordinary community questions in the clear lane', () => {
  assert.deepEqual(
    screenCommunityContent('Which swimming pool is easiest with children?', 'We have just moved to Espoo and would love a beginner-friendly recommendation.'),
    { status: 'clear', signals: [] },
  )
})

test('flags contact details, link-heavy posts and urgent money language', () => {
  const screened = screenCommunityContent(
    'Guaranteed investment today',
    'Email deal@example.com or call +358 40 123 4567. Pay in crypto immediately. https://one.test https://two.test https://three.test',
  )
  assert.equal(screened.status, 'attention')
  assert.ok(screened.signals.includes('Several external links'))
  assert.ok(screened.signals.includes('Contains an email address'))
  assert.ok(screened.signals.includes('Contains a possible phone number'))
  assert.ok(screened.signals.includes('Contains urgent financial or payment language'))
})

test('only trusted members publish clear content immediately', () => {
  const clear = screenCommunityContent('A useful question', 'Where can I borrow sports equipment in Helsinki?')
  const attention = screenCommunityContent('Contact me', 'My number is +358 40 123 4567')
  assert.equal(communitySubmissionStatus('new', clear), 'pending')
  assert.equal(communitySubmissionStatus('trusted', clear), 'published')
  assert.equal(communitySubmissionStatus('trusted', attention), 'flagged')
  assert.equal(communitySubmissionStatus('restricted', clear), 'rejected')
})
