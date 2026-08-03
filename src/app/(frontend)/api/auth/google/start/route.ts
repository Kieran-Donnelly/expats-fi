import { randomBytes } from 'node:crypto'
import { NextResponse } from 'next/server'

import { GOOGLE_OAUTH_COOKIE, secureCookieOptions } from '@/lib/member-auth'

export async function GET(request: Request) {
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  if (!clientId || !clientSecret) return NextResponse.redirect(new URL('/login/?error=google', request.url))

  const state = randomBytes(32).toString('base64url')
  const redirectUri = new URL('/api/auth/google/callback', request.url).toString()
  const authorization = new URL('https://accounts.google.com/o/oauth2/v2/auth')
  authorization.search = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'openid email profile',
    state,
    nonce: state,
    prompt: 'select_account',
  }).toString()

  const response = NextResponse.redirect(authorization)
  response.cookies.set(GOOGLE_OAUTH_COOKIE, state, { ...secureCookieOptions(), maxAge: 10 * 60 })
  return response
}
