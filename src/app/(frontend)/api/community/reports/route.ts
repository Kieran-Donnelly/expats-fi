import configPromise from '@payload-config'
import { getPayload, type Where } from 'payload'

import { getCurrentMember } from '@/lib/member-auth'
import { isCommunityReportReason } from '@/lib/community-options'
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
  if (!member) return json({ message: 'Sign in to report a community post or reply.' }, 401)

  const data = await request.json().catch(() => null) as Record<string, unknown> | null
  const targetType = data?.targetType === 'post' || data?.targetType === 'comment' ? data.targetType : null
  const targetId = Number(data?.targetId)
  const reason = data?.reason
  const details = text(data?.details, 1000)
  if (!targetType) return json({ message: 'Choose a valid report target.' }, 400)
  if (!Number.isInteger(targetId) || targetId < 1) return json({ message: 'Choose a valid report target.' }, 400)
  if (!isCommunityReportReason(reason)) return json({ message: 'Choose a valid report reason.' }, 400)

  const payload = await getPayload({ config: configPromise })
  let postId: number | undefined
  let commentId: number | undefined
  if (targetType === 'post') {
    const post = await payload.findByID({ collection: 'community-posts', id: targetId, depth: 0, overrideAccess: true }).catch(() => null)
    if (!post || post.status !== 'published') return json({ message: 'That post is no longer available.' }, 404)
    postId = post.id
  } else {
    const comment = await payload.findByID({ collection: 'community-comments', id: targetId, depth: 0, overrideAccess: true }).catch(() => null)
    if (!comment || comment.status !== 'published') return json({ message: 'That reply is no longer available.' }, 404)
    const parentId = typeof comment.post === 'object' && comment.post ? comment.post.id : comment.post
    const parent = await payload.findByID({ collection: 'community-posts', id: parentId, depth: 0, overrideAccess: true }).catch(() => null)
    if (!parent || parent.status !== 'published') return json({ message: 'That reply is no longer available.' }, 404)
    commentId = comment.id
  }

  const duplicateWhere: Where[] = [
    { reporter: { equals: member.id } },
    { targetType: { equals: targetType } },
    { status: { equals: 'pending' } },
    targetType === 'post' ? { post: { equals: postId } } : { comment: { equals: commentId } },
  ]
  const duplicate = await payload.find({
    collection: 'community-reports',
    depth: 0,
    limit: 1,
    pagination: false,
    overrideAccess: true,
    where: { and: duplicateWhere },
  })
  if (duplicate.docs.length) return json({ message: 'You have already reported this. The team will review it.' }, 409)

  const report = await payload.create({
    collection: 'community-reports',
    data: {
      reporter: Number(member.id),
      targetType,
      ...(postId ? { post: postId } : {}),
      ...(commentId ? { comment: commentId } : {}),
      reason,
      ...(details ? { details } : {}),
      status: 'pending',
    },
    depth: 0,
    overrideAccess: true,
  })

  return json({ ok: true, id: report.id, status: report.status }, 201)
}
