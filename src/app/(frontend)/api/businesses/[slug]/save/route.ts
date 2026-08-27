import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { getSavedBusinessIds, savedBusinessId } from '@/lib/saved-businesses'
import { getCurrentMember } from '@/lib/member-auth'
import { isSameOrigin } from '@/lib/request-origin'

type RouteContext = { params: Promise<{ slug: string }> }

async function findPublishedBusiness(slug: string, payload: Awaited<ReturnType<typeof getPayload>>) {
  const result = await payload.find({
    collection: 'businesses',
    depth: 0,
    limit: 1,
    pagination: false,
    overrideAccess: false,
    where: {
      and: [
        { slug: { equals: slug } },
        { status: { equals: 'published' } },
      ],
    },
  })
  return result.docs[0] || null
}

function json(data: Record<string, unknown>, status = 200) {
  return Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } })
}

async function getMemberAndBusiness(request: Request, slug: string) {
  const member = await getCurrentMember(request.headers)
  if (!member) return { response: json({ message: 'Sign in to save businesses.' }, 401) }

  const payload = await getPayload({ config: configPromise })
  const business = await findPublishedBusiness(slug, payload)
  if (!business) return { response: json({ message: 'That business could not be found.' }, 404) }

  return { member, business, payload }
}

export async function GET(request: Request, { params }: RouteContext) {
  const { slug } = await params
  const result = await getMemberAndBusiness(request, slug)
  if ('response' in result) return result.response

  const saved = (await getSavedBusinessIds(result.member.id, result.payload)).has(result.business.id)
  return json({ saved })
}

async function setSaved(request: Request, { params }: RouteContext, shouldSave: boolean) {
  if (!isSameOrigin(request)) return json({ message: 'Invalid request origin.' }, 403)

  const { slug } = await params
  const result = await getMemberAndBusiness(request, slug)
  if ('response' in result) return result.response

  const member = await result.payload.findByID({
    collection: 'members',
    id: result.member.id,
    depth: 0,
    overrideAccess: true,
  })
  const currentIds = (member.savedBusinesses || [])
    .map(savedBusinessId)
    .filter((id): id is number => id !== null)
  const nextIds = shouldSave
    ? [...new Set([...currentIds, result.business.id])]
    : currentIds.filter((id) => id !== result.business.id)

  await result.payload.update({
    collection: 'members',
    id: result.member.id,
    data: { savedBusinesses: nextIds },
    depth: 0,
    overrideAccess: true,
  })

  return json({ saved: shouldSave })
}

export async function POST(request: Request, context: RouteContext) {
  return setSaved(request, context, true)
}

export async function DELETE(request: Request, context: RouteContext) {
  return setSaved(request, context, false)
}
