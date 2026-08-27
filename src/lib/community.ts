import config from '@payload-config'
import { getPayload, type Payload, type Where } from 'payload'

import type { CommunityComment, CommunityPost, Member } from '@/payload-types'

import { communityTopicLabels, isCommunityTopic, type CommunityTopic } from './community-options'

function canQueryDatabase() {
  return Boolean(process.env.DATABASE_URL)
}

function topic(value: unknown): CommunityTopic {
  return isCommunityTopic(value) ? value : 'general'
}

export function topicLabel(value: unknown): string {
  return communityTopicLabels[topic(value)]
}

export function memberName(value: unknown): string {
  if (value && typeof value === 'object') {
    const candidate = value as Partial<Member>
    if (typeof candidate.name === 'string' && candidate.name.trim()) return candidate.name.trim()
    if (typeof candidate.email === 'string' && candidate.email.trim()) return candidate.email.split('@')[0]
  }
  return 'Expats.fi member'
}

export function formatCommunityDate(value: string): string {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Date unknown'
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

export async function getCommunityPosts({
  limit = 30,
  topic: selectedTopic,
  query,
  payload: providedPayload,
}: {
  limit?: number
  topic?: string
  query?: string
  payload?: Payload
} = {}): Promise<CommunityPost[]> {
  if (!canQueryDatabase() && !providedPayload) return []

  const cms = providedPayload || await getPayload({ config })
  const and: Where[] = [{ status: { equals: 'published' } }]
  if (isCommunityTopic(selectedTopic)) and.push({ topic: { equals: selectedTopic } })
  if (query?.trim()) {
    const value = query.trim()
    and.push({ or: [{ title: { contains: value } }, { body: { contains: value } }] })
  }

  const result = await cms.find({
    collection: 'community-posts',
    depth: 1,
    limit,
    pagination: false,
    overrideAccess: false,
    sort: '-lastActivityAt',
    where: { and },
  })
  return result.docs
}

export async function getCommunityPost(slug: string, payload?: Payload): Promise<CommunityPost | null> {
  if (!canQueryDatabase() && !payload) return null
  const cms = payload || await getPayload({ config })
  const result = await cms.find({
    collection: 'community-posts',
    depth: 1,
    limit: 1,
    pagination: false,
    overrideAccess: false,
    where: { and: [{ slug: { equals: slug } }, { status: { equals: 'published' } }] },
  })
  return result.docs[0] || null
}

export async function getCommunityComments(postId: string | number, payload?: Payload): Promise<CommunityComment[]> {
  if (!canQueryDatabase() && !payload) return []
  const cms = payload || await getPayload({ config })
  const result = await cms.find({
    collection: 'community-comments',
    depth: 1,
    limit: 100,
    pagination: false,
    overrideAccess: false,
    sort: 'createdAt',
    where: { and: [{ post: { equals: postId } }, { status: { equals: 'published' } }] },
  })
  return result.docs
}

export async function getCommunityPostCommentCounts(postIds: Array<string | number>, payload?: Payload): Promise<Map<number, number>> {
  const counts = new Map<number, number>()
  const ids = postIds.map(Number).filter(Number.isInteger)
  if (!ids.length || (!canQueryDatabase() && !payload)) return counts

  const cms = payload || await getPayload({ config })
  const result = await cms.find({
    collection: 'community-comments',
    depth: 0,
    limit: 1000,
    pagination: false,
    overrideAccess: false,
    where: { and: [{ post: { in: ids } }, { status: { equals: 'published' } }] },
  })
  for (const comment of result.docs) {
    const postId = typeof comment.post === 'object' && comment.post ? comment.post.id : comment.post
    const numericPostId = Number(postId)
    if (Number.isInteger(numericPostId)) counts.set(numericPostId, (counts.get(numericPostId) || 0) + 1)
  }
  return counts
}

export async function getMemberCommunityPosts(memberId: string | number, payload?: Payload): Promise<CommunityPost[]> {
  if (!canQueryDatabase() && !payload) return []
  const cms = payload || await getPayload({ config })
  const result = await cms.find({
    collection: 'community-posts',
    depth: 0,
    limit: 30,
    pagination: false,
    overrideAccess: true,
    sort: '-createdAt',
    where: { author: { equals: memberId } },
  })
  return result.docs
}
