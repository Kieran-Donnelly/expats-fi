import assert from 'node:assert/strict'
import test from 'node:test'

import { isSameOrigin } from '../src/lib/request-origin'

const originalServerUrl = process.env.NEXT_PUBLIC_SERVER_URL

test.afterEach(() => {
  if (originalServerUrl === undefined) delete process.env.NEXT_PUBLIC_SERVER_URL
  else process.env.NEXT_PUBLIC_SERVER_URL = originalServerUrl
})

test('allows requests without an Origin header', () => {
  process.env.NEXT_PUBLIC_SERVER_URL = 'https://expats.fi'
  assert.equal(isSameOrigin(new Request('http://payload-internal/api/auth/register')), true)
})

test('uses the configured public origin behind a reverse proxy', () => {
  process.env.NEXT_PUBLIC_SERVER_URL = 'https://expats.fi/'
  const request = new Request('http://expats-fi.railway.internal/api/auth/register', {
    headers: { Origin: 'https://expats.fi' },
  })

  assert.equal(isSameOrigin(request), true)
})

test('normalizes origins while rejecting a different host', () => {
  process.env.NEXT_PUBLIC_SERVER_URL = 'https://expats.fi'
  const request = new Request('http://payload-internal/api/auth/register', {
    headers: { Origin: 'https://expats.fi.evil.example' },
  })

  assert.equal(isSameOrigin(request), false)
})

test('falls back to the request origin during local development', () => {
  delete process.env.NEXT_PUBLIC_SERVER_URL
  const matching = new Request('http://localhost:3000/api/auth/register', {
    headers: { Origin: 'http://localhost:3000' },
  })
  const mismatched = new Request('http://localhost:3000/api/auth/register', {
    headers: { Origin: 'https://expats.fi' },
  })

  assert.equal(isSameOrigin(matching), true)
  assert.equal(isSameOrigin(mismatched), false)
})
