import configPromise from '@payload-config'
import { jwtVerify, SignJWT } from 'jose'
import { getPayload, type Payload } from 'payload'

import { isMemberArrivalStage, normaliseMemberInterests, type MemberArrivalStage, type MemberInterest } from '@/lib/account-options'
import { isCommunityTrustLevel, type CommunityTrustLevel } from '@/lib/community-safety'

export const GOOGLE_SESSION_COOKIE = 'expats-google-session'
export const GOOGLE_OAUTH_COOKIE = 'expats-google-oauth'
export const GOOGLE_OAUTH_RETURN_COOKIE = 'expats-google-return'
export const ADMIN_GOOGLE_OAUTH_COOKIE = 'expats-admin-google-oauth'

export type MemberSession = {
  id: string | number
  email: string
  name: string
  picture?: string | null
  provider?: string | null
  city?: string | null
  languages?: string | null
  arrivalStage?: MemberArrivalStage | null
  interests?: MemberInterest[]
  emailUpdates?: boolean
  newsletter?: boolean
  emailVerifiedAt?: string | null
  communityTrust?: CommunityTrustLevel
  communityRulesAcceptedAt?: string | null
}

function sessionSecret() {
  const value = process.env.AUTH_SESSION_SECRET || process.env.PAYLOAD_SECRET
  if (!value) throw new Error('AUTH_SESSION_SECRET or PAYLOAD_SECRET is required')
  return new TextEncoder().encode(value)
}

export async function createGoogleSessionToken(member: MemberSession) {
  return new SignJWT({
    email: member.email,
    name: member.name,
    picture: member.picture || undefined,
    provider: member.provider || 'google',
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(String(member.id))
    .setIssuer('expats.fi')
    .setAudience('expats.fi-members')
    .setIssuedAt()
    .setExpirationTime('30d')
    .sign(sessionSecret())
}

export async function verifyGoogleSessionToken(token: string): Promise<MemberSession | null> {
  try {
    const { payload } = await jwtVerify(token, sessionSecret(), {
      issuer: 'expats.fi',
      audience: 'expats.fi-members',
    })
    if (!payload.sub || typeof payload.email !== 'string' || typeof payload.name !== 'string') return null
    return {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
      picture: typeof payload.picture === 'string' ? payload.picture : null,
      provider: typeof payload.provider === 'string' ? payload.provider : 'google',
    }
  } catch {
    return null
  }
}

function toMemberSession(user: Record<string, unknown>): MemberSession | null {
  if (user.collection !== 'members' || !user.id || typeof user.email !== 'string') return null
  return {
    id: user.id as string | number,
    email: user.email,
    name: typeof user.name === 'string' ? user.name : user.email.split('@')[0],
    picture: typeof user.picture === 'string' ? user.picture : null,
    provider: typeof user.provider === 'string' ? user.provider : null,
    city: typeof user.city === 'string' ? user.city : null,
    languages: typeof user.languages === 'string' ? user.languages : null,
    arrivalStage: isMemberArrivalStage(user.arrivalStage) ? user.arrivalStage : null,
    interests: normaliseMemberInterests(user.interests),
    emailUpdates: user.emailUpdates === true,
    newsletter: user.newsletter === true,
    emailVerifiedAt: typeof user.emailVerifiedAt === 'string' ? user.emailVerifiedAt : null,
    communityTrust: isCommunityTrustLevel(user.communityTrust) ? user.communityTrust : 'new',
    communityRulesAcceptedAt: typeof user.communityRulesAcceptedAt === 'string' ? user.communityRulesAcceptedAt : null,
  }
}

export async function getCurrentMember(headers: Headers, payload?: Payload): Promise<MemberSession | null> {
  const cookie = headers.get('cookie') || ''
  const googleToken = cookie.match(new RegExp(`(?:^|;\\s*)${GOOGLE_SESSION_COOKIE}=([^;]+)`))?.[1]
  if (googleToken) {
    const tokenMember = await verifyGoogleSessionToken(decodeURIComponent(googleToken))
    if (tokenMember) {
      const cms = payload || await getPayload({ config: configPromise })
      try {
        const member = await cms.findByID({ collection: 'members', id: tokenMember.id, overrideAccess: true })
        return toMemberSession({ ...member, collection: 'members' })
      } catch {
        return null
      }
    }
  }

  const cms = payload || await getPayload({ config: configPromise })
  const result = await cms.auth({ headers })
  return result.user ? toMemberSession(result.user as unknown as Record<string, unknown>) : null
}

export function secureCookieOptions() {
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  }
}
