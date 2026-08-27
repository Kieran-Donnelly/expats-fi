import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { normaliseMemberInterests } from '@/lib/account-options'
import { getCurrentMember } from '@/lib/member-auth'
import { isSameOrigin } from '@/lib/request-origin'

function json(data: Record<string, unknown>, status = 200) {
  return Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } })
}

export async function PATCH(request: Request) {
  if (!isSameOrigin(request)) return json({ message: 'Invalid request origin.' }, 403)

  const member = await getCurrentMember(request.headers)
  if (!member) return json({ message: 'Sign in to update your preferences.' }, 401)

  const data = await request.json().catch(() => null) as Record<string, unknown> | null
  if (typeof data?.emailUpdates !== 'boolean' || typeof data?.newsletter !== 'boolean') {
    return json({ message: 'Please choose valid email preferences.' }, 400)
  }

  const interests = normaliseMemberInterests(data?.interests)
  const payload = await getPayload({ config: configPromise })
  await payload.update({
    collection: 'members',
    id: member.id,
    data: {
      interests,
      emailUpdates: data.emailUpdates,
      newsletter: data.newsletter,
    },
    overrideAccess: true,
  })

  return json({ ok: true, interests, emailUpdates: data.emailUpdates, newsletter: data.newsletter })
}
