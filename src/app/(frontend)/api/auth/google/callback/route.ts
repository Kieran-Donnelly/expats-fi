import configPromise from '@payload-config'
import { createRemoteJWKSet, jwtVerify } from 'jose'
import { randomBytes } from 'node:crypto'
import { getPayload } from 'payload'
import { NextRequest, NextResponse } from 'next/server'

import { createGoogleSessionToken, GOOGLE_OAUTH_COOKIE, GOOGLE_SESSION_COOKIE, secureCookieOptions } from '@/lib/member-auth'

const googleKeys = createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'))

export async function GET(request: NextRequest) {
  const appURL = process.env.NEXT_PUBLIC_SERVER_URL || request.url
  const fail = () => NextResponse.redirect(new URL('/login/?error=google', appURL))
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  const code = request.nextUrl.searchParams.get('code')
  const state = request.nextUrl.searchParams.get('state')
  const expectedState = request.cookies.get(GOOGLE_OAUTH_COOKIE)?.value
  if (!clientId || !clientSecret || !code || !state || state !== expectedState) return fail()

  try {
    const redirectUri = new URL('/api/auth/google/callback', appURL).toString()
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ code, client_id: clientId, client_secret: clientSecret, redirect_uri: redirectUri, grant_type: 'authorization_code' }),
      cache: 'no-store',
    })
    if (!tokenResponse.ok) return fail()
    const tokens = await tokenResponse.json() as { id_token?: string }
    if (!tokens.id_token) return fail()

    const verified = await jwtVerify(tokens.id_token, googleKeys, {
      issuer: ['https://accounts.google.com', 'accounts.google.com'],
      audience: clientId,
    })
    const claims = verified.payload
    if (!claims.sub || typeof claims.email !== 'string' || claims.email_verified !== true || claims.nonce !== state) return fail()

    const payload = await getPayload({ config: configPromise })
    const bySubject = await payload.find({ collection: 'members', where: { googleSubject: { equals: claims.sub } }, limit: 1, overrideAccess: true })
    const byEmail = bySubject.totalDocs ? bySubject : await payload.find({ collection: 'members', where: { email: { equals: claims.email.toLowerCase() } }, limit: 1, overrideAccess: true })
    let member = byEmail.docs[0]

    if (member) {
      member = await payload.update({
        collection: 'members',
        id: member.id,
        data: {
          googleSubject: claims.sub,
          picture: typeof claims.picture === 'string' ? claims.picture : undefined,
          provider: member.provider === 'password' ? 'both' : 'google',
        },
        overrideAccess: true,
      })
    } else {
      member = await payload.create({
        collection: 'members',
        data: {
          name: typeof claims.name === 'string' && claims.name.trim() ? claims.name.trim() : claims.email.split('@')[0],
          email: claims.email.toLowerCase(),
          password: randomBytes(48).toString('base64url'),
          googleSubject: claims.sub,
          picture: typeof claims.picture === 'string' ? claims.picture : undefined,
          provider: 'google',
        },
        overrideAccess: true,
      })
    }

    const session = await createGoogleSessionToken({ id: member.id, email: member.email, name: member.name, picture: member.picture, provider: member.provider })
    const response = NextResponse.redirect(new URL('/account/', appURL))
    response.cookies.set(GOOGLE_SESSION_COOKIE, session, { ...secureCookieOptions(), maxAge: 60 * 60 * 24 * 30 })
    response.cookies.set(GOOGLE_OAUTH_COOKIE, '', { ...secureCookieOptions(), maxAge: 0 })
    return response
  } catch {
    return fail()
  }
}
