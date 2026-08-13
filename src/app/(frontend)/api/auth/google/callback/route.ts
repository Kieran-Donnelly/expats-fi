import configPromise from '@payload-config'
import { createRemoteJWKSet, jwtVerify } from 'jose'
import { createHash, randomBytes } from 'node:crypto'
import { generatePayloadCookie, getPayload } from 'payload'
import { NextRequest, NextResponse } from 'next/server'

import { ADMIN_GOOGLE_OAUTH_COOKIE, createGoogleSessionToken, GOOGLE_OAUTH_COOKIE, GOOGLE_SESSION_COOKIE, secureCookieOptions } from '@/lib/member-auth'
import { superAdminEmails } from '@/lib/admin-access'

const googleKeys = createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'))

export async function GET(request: NextRequest) {
  const appURL = process.env.NEXT_PUBLIC_SERVER_URL || request.url
  const fail = (admin = false) => NextResponse.redirect(new URL(admin ? '/admin/login?error=google' : '/login/?error=google', appURL))
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  const code = request.nextUrl.searchParams.get('code')
  const state = request.nextUrl.searchParams.get('state')
  const expectedAdminState = request.cookies.get(ADMIN_GOOGLE_OAUTH_COOKIE)?.value
  const expectedState = request.cookies.get(GOOGLE_OAUTH_COOKIE)?.value
  const isAdminFlow = Boolean(expectedAdminState && state && state === expectedAdminState)
  if (!clientId || !clientSecret || !code || !state || (!isAdminFlow && state !== expectedState)) return fail(isAdminFlow)

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
    if (isAdminFlow) {
      const email = claims.email.toLowerCase()
      if (!superAdminEmails.includes(email as (typeof superAdminEmails)[number])) return fail(true)

      const password = createHash('sha256')
        .update(`${process.env.PAYLOAD_SECRET || 'local-development-secret-change-me'}:${claims.sub}:expats-admin-google`)
        .digest('base64url')
      const existing = await payload.find({ collection: 'users', where: { email: { equals: email } }, limit: 1, overrideAccess: true })
      const user = existing.docs[0]

      if (user) {
        await payload.update({
          collection: 'users',
          id: user.id,
          data: {
            name: typeof claims.name === 'string' && claims.name.trim() ? claims.name.trim() : user.name,
            password,
            role: 'super-admin',
          },
          overrideAccess: true,
        })
      } else {
        await payload.create({
          collection: 'users',
          data: {
            name: typeof claims.name === 'string' && claims.name.trim() ? claims.name.trim() : email.split('@')[0],
            email,
            password,
            role: 'super-admin',
          },
          overrideAccess: true,
        })
      }

      const login = await payload.login({ collection: 'users', data: { email, password }, overrideAccess: true })
      if (!login.token) return fail(true)
      const cookie = generatePayloadCookie({
        collectionAuthConfig: payload.collections.users.config.auth,
        cookiePrefix: payload.config.cookiePrefix || 'payload',
        returnCookieAsObject: true,
        token: login.token,
      })
      if (!cookie.value) return fail(true)
      const response = NextResponse.redirect(new URL('/admin/', appURL))
      response.cookies.set(cookie.name, cookie.value, {
        httpOnly: true,
        maxAge: cookie.maxAge,
        path: cookie.path || '/',
        sameSite: cookie.sameSite?.toLowerCase() as 'lax' | 'strict' | 'none' | undefined,
        secure: process.env.NODE_ENV === 'production',
      })
      response.cookies.set(ADMIN_GOOGLE_OAUTH_COOKIE, '', { ...secureCookieOptions(), maxAge: 0 })
      return response
    }

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
