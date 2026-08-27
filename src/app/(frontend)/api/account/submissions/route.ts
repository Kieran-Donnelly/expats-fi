import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { getCurrentMember } from '@/lib/member-auth'
import { isSameOrigin } from '@/lib/request-origin'

function json(data: Record<string, unknown>, status = 200) {
  return Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } })
}

function text(value: unknown, maxLength: number): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return json({ message: 'Invalid request origin.' }, 403)

  const member = await getCurrentMember(request.headers)
  if (!member) return json({ message: 'Sign in to submit a business and track its review.' }, 401)

  const data = await request.json().catch(() => null) as Record<string, unknown> | null
  const businessName = text(data?.businessName, 160)
  const website = text(data?.website, 500)
  const location = text(data?.location, 160)
  const category = text(data?.category, 120)
  const description = text(data?.description, 3000)
  const contactName = text(data?.contactName, 120)
  const contactEmail = text(data?.contactEmail, 254).toLowerCase()

  if (businessName.length < 2) return json({ message: 'Please enter the business name.' }, 400)
  if (!website) return json({ message: 'Please enter the business website.' }, 400)
  try {
    const parsedWebsite = new URL(website)
    if (!['http:', 'https:'].includes(parsedWebsite.protocol)) throw new Error('unsupported protocol')
  } catch {
    return json({ message: 'Please enter a valid website URL.' }, 400)
  }
  if (!location) return json({ message: 'Please enter a city or service area.' }, 400)
  if (!category) return json({ message: 'Please enter a business category.' }, 400)
  if (description.length < 20) return json({ message: 'Please tell us a little more about the business.' }, 400)
  if (contactName.length < 2) return json({ message: 'Please enter your name.' }, 400)
  if (!/^\S+@\S+\.\S+$/.test(contactEmail)) return json({ message: 'Please enter a valid email address.' }, 400)

  const payload = await getPayload({ config: configPromise })
  const submission = await payload.create({
    collection: 'business-submissions',
    data: {
      submittedBy: Number(member.id),
      businessName,
      website,
      location,
      category,
      description,
      contactName,
      contactEmail,
      status: 'pending',
    },
    overrideAccess: true,
  })

  return json({ ok: true, id: submission.id, status: submission.status }, 201)
}
