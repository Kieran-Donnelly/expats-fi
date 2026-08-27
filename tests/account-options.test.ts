import assert from 'node:assert/strict'
import test from 'node:test'

import { isMemberArrivalStage, memberArrivalStageLabel, normaliseMemberInterests } from '../src/lib/account-options'

test('accepts only the configured member arrival stages', () => {
  assert.equal(isMemberArrivalStage('new-arrival'), true)
  assert.equal(isMemberArrivalStage('somewhere-else'), false)
  assert.equal(memberArrivalStageLabel('settling-in'), 'Settling in')
  assert.equal(memberArrivalStageLabel(null), 'Not set')
})

test('normalises and whitelists member interests', () => {
  assert.deepEqual(
    normaliseMemberInterests(['Housing', 'Housing', 'Unknown', 'Finnish language']),
    ['Housing', 'Finnish language'],
  )
  assert.deepEqual(normaliseMemberInterests('Housing'), [])
})
