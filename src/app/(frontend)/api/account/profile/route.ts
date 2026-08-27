import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { isMemberArrivalStage } from '@/lib/account-options'
import { getCurrentMember } from '@/lib/member-auth'
import { isSameOrigin } from '@/lib/request-origin'

function json(data: Record<string, unknown>, status = 200) {
  return Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } })
}

export async function PATCH(request: Request) {
  if (!isSameOrigin(request)) return json({ message: 'Invalid request origin.' }, 403)

  const member = await getCurrentMember(request.headers)
  if (!member) return json({ message: 'Sign in to update your profile.' }, 401)

  const data = await request.json().catch(() => null) as Record<string, unknown> | null
  const name = typeof data?.name === 'string' ? data.name.trim() : ''
  const city = typeof data?.city === 'string' ? data.city.trim() : ''
  const languages = typeof data?.languages === 'string' ? data.languages.trim() : ''
  const arrivalStageInput = typeof data?.arrivalStage === 'string' ? data.arrivalStage : ''

  if (name.length < 2) return json({ message: 'Please enter your name.' }, 400)
  if (name.length > 120) return json({ message: 'Your name is too long.' }, 400)
  if (city.length > 120) return json({ message: 'Your city or municipality is too long.' }, 400)
  if (languages.length > 240) return json({ message: 'Your language list is too long.' }, 400)
  if (arrivalStageInput && !isMemberArrivalStage(arrivalStageInput)) return json({ message: 'Please choose a valid arrival stage.' }, 400)
  const arrivalStage = isMemberArrivalStage(arrivalStageInput) ? arrivalStageInput : null

  const payload = await getPayload({ config: configPromise })
  await payload.update({
    collection: 'members',
    id: member.id,
    data: {
      name,
      city: city || null,
      languages: languages || null,
      arrivalStage,
    },
    overrideAccess: true,
  })

  return json({ ok: true, name, city: city || null, languages: languages || null, arrivalStage })
}
