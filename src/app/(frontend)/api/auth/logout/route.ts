import { NextResponse } from 'next/server'

import { GOOGLE_OAUTH_COOKIE, GOOGLE_OAUTH_RETURN_COOKIE, GOOGLE_SESSION_COOKIE, secureCookieOptions } from '@/lib/member-auth'

export async function POST() {
  const response = NextResponse.json({ ok: true })
  response.cookies.set(GOOGLE_SESSION_COOKIE, '', { ...secureCookieOptions(), maxAge: 0 })
  response.cookies.set(GOOGLE_OAUTH_COOKIE, '', { ...secureCookieOptions(), maxAge: 0 })
  response.cookies.set(GOOGLE_OAUTH_RETURN_COOKIE, '', { ...secureCookieOptions(), maxAge: 0 })
  return response
}
