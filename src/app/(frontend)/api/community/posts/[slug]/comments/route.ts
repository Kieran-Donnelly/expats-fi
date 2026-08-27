import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { getCurrentMember } from '@/lib/member-auth'
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
  if (body.length < 2) return json({ message: 'Please add a little more to your reply.' }, 400)

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
    limit: 10,
    pagination: false,
    overrideAccess: true,
    sort: '-createdAt',
    where: { author: { equals: member.id } },
  })
  const repliedRecently = recent.docs.some((comment) => Date.now() - new Date(comment.createdAt).getTime() < 10_000)
  if (repliedRecently) return json({ message: 'Give your last reply a moment before adding another.' }, 429)

  const comment = await payload.create({
    collection: 'community-comments',
    data: {
      post: post.id,
      author: Number(member.id),
      body,
      status: 'published',
    },
    depth: 0,
    overrideAccess: true,
  })

  await payload.update({
    collection: 'community-posts',
    id: post.id,
    data: { lastActivityAt: new Date().toISOString() },
    depth: 0,
    overrideAccess: true,
  })

  return json({ ok: true, id: comment.id, status: comment.status }, 201)
}
