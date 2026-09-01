import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { canManageContent } from '@/lib/admin-access'
import { isCommunityContentAction } from '@/lib/community-options'
import { isSameOrigin } from '@/lib/request-origin'

type RouteContext = { params: Promise<{ id: string; targetType: string }> }

function json(data: Record<string, unknown>, status = 200) {
  return Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } })
}

export async function POST(request: Request, { params }: RouteContext) {
  if (!isSameOrigin(request)) return json({ message: 'Invalid request origin.' }, 403)
  const payload = await getPayload({ config: configPromise })
  const auth = await payload.auth({ headers: request.headers })
  if (!canManageContent(auth.user)) return json({ message: 'Administrator access is required.' }, 403)

  const { id: rawId, targetType } = await params
  const id = Number(rawId)
  if (!Number.isInteger(id) || id < 1) return json({ message: 'Invalid community content id.' }, 400)
  if (targetType !== 'post' && targetType !== 'comment') return json({ message: 'Invalid community content type.' }, 400)
  const data = await request.json().catch(() => null) as Record<string, unknown> | null
  if (!isCommunityContentAction(data?.action)) return json({ message: 'Choose a valid moderation action.' }, 400)

  const collection = targetType === 'post' ? 'community-posts' : 'community-comments'
  const content = await payload.findByID({ collection, id, depth: 0, overrideAccess: true }).catch(() => null)
  if (!content) return json({ message: 'That community contribution could not be found.' }, 404)

  const now = new Date().toISOString()
  const status = data.action === 'reject' ? 'rejected' : 'published'
  const updated = await payload.update({
    collection,
    id,
    data: { status, reviewedAt: now, reviewedByEmail: auth.user.email },
    depth: 0,
    overrideAccess: true,
  })

  if (data.action === 'approve-and-trust') {
    const authorId = typeof content.author === 'object' && content.author ? content.author.id : content.author
    if (authorId) await payload.update({ collection: 'members', id: authorId, data: { communityTrust: 'trusted' }, depth: 0, overrideAccess: true })
  }

  if (targetType === 'comment' && status === 'published') {
    const post = 'post' in content ? content.post : null
    const postId = typeof post === 'object' && post ? post.id : post
    if (postId) await payload.update({ collection: 'community-posts', id: postId, data: { lastActivityAt: now }, depth: 0, overrideAccess: true })
  }

  return json({ ok: true, id: updated.id, status: updated.status })
}
