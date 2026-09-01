import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { getCurrentMember } from '@/lib/member-auth'
import { anonymousCommunityAlias } from '@/lib/community-options'
import { communitySubmissionStatus, screenCommunityContent } from '@/lib/community-safety'
import { isSameOrigin } from '@/lib/request-origin'

type RouteContext = { params: Promise<{ slug: string }> }

function json(data: Record<string, unknown>, status = 200) {
  return Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } })
}

function text(value: unknown, maxLength: number): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

export async function POST(request: Request, { params }: RouteContext) {
  if (!isSameOrigin(request)) return json({ message: 'Invalid request origin.' }, 403)

  const member = await getCurrentMember(request.headers)
  if (!member) return json({ message: 'Sign in to reply to a community post.' }, 401)

  const { slug } = await params
  const data = await request.json().catch(() => null) as Record<string, unknown> | null
  const body = text(data?.body, 3000)
  const anonymous = data?.anonymous === true
  const rulesAccepted = data?.rulesAccepted === true || Boolean(member.communityRulesAcceptedAt)
  if (body.length < 2) return json({ message: 'Please add a little more to your reply.' }, 400)
  if (!rulesAccepted) return json({ message: 'Please read and accept the community rules before replying.' }, 400)
  if (member.communityTrust === 'restricted') return json({ message: 'Community posting is not available for this account. Contact hello@expats.fi if you think this is a mistake.' }, 403)

  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'community-posts',
    depth: 0,
    limit: 1,
    pagination: false,
    overrideAccess: true,
    where: { and: [{ slug: { equals: slug } }, { status: { equals: 'published' } }] },
  })
  const post = posts.docs[0]
  if (!post) return json({ message: 'That community post could not be found.' }, 404)

  const recent = await payload.find({
    collection: 'community-comments',
    depth: 0,
    limit: 101,
    pagination: false,
    overrideAccess: true,
    sort: '-createdAt',
    where: { author: { equals: member.id } },
  })
  const now = Date.now()
  const cooldown = member.communityTrust === 'trusted' ? 10_000 : 30_000
  const repliedRecently = recent.docs.some((comment) => now - new Date(comment.createdAt).getTime() < cooldown)
  if (repliedRecently) return json({ message: 'Give your last reply a moment before adding another.' }, 429)
  const repliesToday = recent.docs.filter((comment) => now - new Date(comment.createdAt).getTime() < 24 * 60 * 60 * 1000).length
  if (repliesToday >= (member.communityTrust === 'trusted' ? 100 : 20)) return json({ message: 'You have reached today’s reply limit. Please come back tomorrow.' }, 429)

  const screening = screenCommunityContent('', body)
  const status = communitySubmissionStatus(member.communityTrust, screening)
  const screenedAt = new Date().toISOString()
  const postAuthorId = typeof post.author === 'object' && post.author ? post.author.id : post.author
  const anonymousAlias = anonymous
    ? Number(postAuthorId) === Number(member.id) && post.anonymous && post.anonymousAlias
      ? post.anonymousAlias
      : anonymousCommunityAlias(`${member.id}:${post.slug}`)
    : undefined
  if (!member.communityRulesAcceptedAt) {
    await payload.update({
      collection: 'members',
      id: member.id,
      data: { communityRulesAcceptedAt: screenedAt },
      depth: 0,
      overrideAccess: true,
    })
  }
  const comment = await payload.create({
    collection: 'community-comments',
    data: {
      post: post.id,
      author: Number(member.id),
      anonymous,
      anonymousAlias,
      body,
      status,
      screeningStatus: screening.status,
      screeningSignals: screening.signals,
      screenedAt,
    },
    depth: 0,
    overrideAccess: true,
  })

  if (status === 'published') {
    await payload.update({
      collection: 'community-posts',
      id: post.id,
      data: { lastActivityAt: screenedAt },
      depth: 0,
      overrideAccess: true,
    })
  }

  return json({ ok: true, id: comment.id, status: comment.status }, 201)
}
