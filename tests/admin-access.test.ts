import assert from 'node:assert/strict'
import test from 'node:test'

import { canManageContent, canManageMembers, canManageUsers, isSuperAdmin } from '../src/lib/admin-access'

const superAdmin = { collection: 'users' as const, email: 'kieran@podium.dev', role: 'super-admin' as const }
const editor = { collection: 'users' as const, email: 'editor@example.com', role: 'editor' as const }

test('super admins can manage users, members and content', () => {
  assert.equal(isSuperAdmin(superAdmin), true)
  assert.equal(canManageUsers(superAdmin), true)
  assert.equal(canManageMembers(superAdmin), true)
  assert.equal(canManageContent(superAdmin), true)
})

test('editors can manage content but not access or member administration', () => {
  assert.equal(isSuperAdmin(editor), false)
  assert.equal(canManageUsers(editor), false)
  assert.equal(canManageMembers(editor), false)
  assert.equal(canManageContent(editor), true)
})

test('member sessions are not treated as CMS administrators', () => {
  const member = { collection: 'members', email: 'member@example.com', role: 'super-admin' }
  assert.equal(isSuperAdmin(member), false)
  assert.equal(canManageContent(member), false)
})
