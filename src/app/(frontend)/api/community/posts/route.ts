import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { getCurrentMember } from '@/lib/member-auth'
import { anonymousCommunityAlias, isCommunityTopic, slugifyCommunityTitle } from '@/lib/community-options'
import { communitySubmissionStatus, screenCommunityContent } from '@/lib/community-safety'
import { isSameOrigin } from '@/lib/request-origin'

function json(data: Record<string, unknown>, status = 200) {
  return Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } })
}

function text(value: unknown, maxLength: number): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

async function uniqueSlug(title: string, payload: Awaited<ReturnType<typeof getPayload>>) {
  const base = slugifyCommunityTitle(title)
  let slug = `${base}-${Date.now().toString(36)}`
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const existing = await payload.find({
      collection: 'community-posts',
      depth: 0,
      limit: 1,
      pagination: false,
      overrideAccess: true,
      where: { slug: { equals: slug } },
    })
    if (!existing.docs.length) return slug
    slug = `${base}-${Date.now().toString(36)}-${attempt + 1}`
  }
  return `${base}-${crypto.randomUUID().slice(0, 8)}`
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return json({ message: 'Invalid request origin.' }, 403)

  const member = await getCurrentMember(request.headers)
  if (!member) return json({ message: 'Sign in to start a community conversation.' }, 401)

  const data = await request.json().catch(() => null) as Record<string, unknown> | null
  const title = text(data?.title, 120)
  const body = text(data?.body, 5000)
  const selectedTopic = data?.topic
  const anonymous = data?.anonymous === true
  const rulesAccepted = data?.rulesAccepted === true || Boolean(member.communityRulesAcceptedAt)

  if (title.length < 3) return json({ message: 'Please add a title of at least three characters.' }, 400)
  if (body.length < 10) return json({ message: 'Please add a little more context to your post.' }, 400)
  if (!isCommunityTopic(selectedTopic)) return json({ message: 'Choose a valid community topic.' }, 400)
  if (!rulesAccepted) return json({ message: 'Please read and accept the community rules before posting.' }, 400)
  if (member.communityTrust === 'restricted') return json({ message: 'Community posting is not available for this account. Contact hello@expats.fi if you think this is a mistake.' }, 403)

  const payload = await getPayload({ config: configPromise })
  const recent = await payload.find({
    collection: 'community-posts',
    depth: 0,
    limit: 21,
    pagination: false,
    overrideAccess: true,
    sort: '-createdAt',
    where: { author: { equals: member.id } },
  })
  const now = Date.now()
  const cooldown = member.communityTrust === 'trusted' ? 20_000 : 60_000
  const postedRecently = recent.docs.some((post) => now - new Date(post.createdAt).getTime() < cooldown)
  if (postedRecently) return json({ message: 'Give your last post a moment before starting another.' }, 429)
  const postsToday = recent.docs.filter((post) => now - new Date(post.createdAt).getTime() < 24 * 60 * 60 * 1000).length
  if (postsToday >= (member.communityTrust === 'trusted' ? 20 : 5)) return json({ message: 'You have reached today’s community posting limit. Please come back tomorrow.' }, 429)

  const slug = await uniqueSlug(title, payload)
  const screening = screenCommunityContent(title, body)
  const status = communitySubmissionStatus(member.communityTrust, screening)
  const screenedAt = new Date().toISOString()
  if (!member.communityRulesAcceptedAt) {
    await payload.update({
      collection: 'members',
      id: member.id,
      data: { communityRulesAcceptedAt: screenedAt },
      depth: 0,
      overrideAccess: true,
    })
  }
  const post = await payload.create({
    collection: 'community-posts',
    data: {
      title,
      slug,
      body,
      topic: selectedTopic,
      author: Number(member.id),
      anonymous,
      anonymousAlias: anonymous ? anonymousCommunityAlias(`${member.id}:${slug}`) : undefined,
      status,
      screeningStatus: screening.status,
      screeningSignals: screening.signals,
      screenedAt,
      editorialStatus: 'none',
      lastActivityAt: screenedAt,
    },
    depth: 0,
    overrideAccess: true,
  })

  return json({ ok: true, id: post.id, slug: post.slug, status: post.status }, 201)
}
