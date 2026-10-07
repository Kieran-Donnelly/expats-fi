import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { TERMS_VERSION } from '@/lib/legal'
import { getCurrentMember } from '@/lib/member-auth'
import { isSameOrigin } from '@/lib/request-origin'

export async function PATCH(request: Request) {
  if (!isSameOrigin(request)) return Response.json({ message: 'Invalid request origin.' }, { status: 403 })
  const member = await getCurrentMember(request.headers)
  if (!member) return Response.json({ message: 'Sign in to update your account.' }, { status: 401 })
  const data = await request.json().catch(() => null)
  if (data?.ageConfirmed !== true || data?.termsAccepted !== true) return Response.json({ message: 'Please confirm the minimum age and account terms.' }, { status: 400 })

  const acceptedAt = new Date().toISOString()
  const payload = await getPayload({ config: configPromise })
  await payload.update({ collection: 'members', id: member.id, data: { ageConfirmedAt: acceptedAt, termsAcceptedAt: acceptedAt, termsVersion: TERMS_VERSION }, overrideAccess: true })
  return Response.json({ ok: true })
}
