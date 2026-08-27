import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { getCurrentMember } from '@/lib/member-auth'
import { isCommunityTopic, slugifyCommunityTitle } from '@/lib/community-options'
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

  if (title.length < 3) return json({ message: 'Please add a title of at least three characters.' }, 400)
  if (body.length < 10) return json({ message: 'Please add a little more context to your post.' }, 400)
  if (!isCommunityTopic(selectedTopic)) return json({ message: 'Choose a valid community topic.' }, 400)

  const payload = await getPayload({ config: configPromise })
  const recent = await payload.find({
    collection: 'community-posts',
    depth: 0,
    limit: 10,
    pagination: false,
    overrideAccess: true,
    sort: '-createdAt',
    where: { author: { equals: member.id } },
  })
  const postedRecently = recent.docs.some((post) => Date.now() - new Date(post.createdAt).getTime() < 20_000)
  if (postedRecently) return json({ message: 'Give your last post a moment before starting another.' }, 429)

  const slug = await uniqueSlug(title, payload)
  const post = await payload.create({
    collection: 'community-posts',
    data: {
      title,
      slug,
      body,
      topic: selectedTopic,
      author: Number(member.id),
      status: 'published',
      lastActivityAt: new Date().toISOString(),
    },
    depth: 0,
    overrideAccess: true,
  })

  return json({ ok: true, id: post.id, slug: post.slug, status: post.status }, 201)
}
