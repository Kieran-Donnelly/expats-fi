import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { canManageContent } from '@/lib/admin-access'
import { communitySubmissionStatus, screenCommunityContent } from '@/lib/community-safety'
import { isSameOrigin } from '@/lib/request-origin'

function json(data: Record<string, unknown>, status = 200) {
  return Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } })
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return json({ message: 'Invalid request origin.' }, 403)
  const payload = await getPayload({ config: configPromise })
  const auth = await payload.auth({ headers: request.headers })
  if (!canManageContent(auth.user)) return json({ message: 'Administrator access is required.' }, 403)

  const [posts, comments] = await Promise.all([
    payload.find({ collection: 'community-posts', depth: 1, limit: 250, pagination: false, overrideAccess: true, where: { status: { in: ['pending', 'flagged'] } } }),
    payload.find({ collection: 'community-comments', depth: 1, limit: 250, pagination: false, overrideAccess: true, where: { status: { in: ['pending', 'flagged'] } } }),
  ])
  const screenedAt = new Date().toISOString()
  let published = 0
  let attention = 0
  let pending = 0
  let rejected = 0

  for (const post of posts.docs) {
    const screening = screenCommunityContent(post.title, post.body)
    const trust = typeof post.author === 'object' && post.author ? post.author.communityTrust : 'new'
    const status = communitySubmissionStatus(trust, screening)
    await payload.update({ collection: 'community-posts', id: post.id, data: { status, screeningStatus: screening.status, screeningSignals: screening.signals, screenedAt }, depth: 0, overrideAccess: true })
    if (status === 'published') published += 1
    else if (status === 'flagged') attention += 1
    else if (status === 'rejected') rejected += 1
    else pending += 1
  }

  for (const comment of comments.docs) {
    const screening = screenCommunityContent('', comment.body)
    const trust = typeof comment.author === 'object' && comment.author ? comment.author.communityTrust : 'new'
    const status = communitySubmissionStatus(trust, screening)
    await payload.update({ collection: 'community-comments', id: comment.id, data: { status, screeningStatus: screening.status, screeningSignals: screening.signals, screenedAt }, depth: 0, overrideAccess: true })
    if (status === 'published') published += 1
    else if (status === 'flagged') attention += 1
    else if (status === 'rejected') rejected += 1
    else pending += 1
  }

  return json({ ok: true, screened: posts.docs.length + comments.docs.length, published, attention, pending, rejected })
}
