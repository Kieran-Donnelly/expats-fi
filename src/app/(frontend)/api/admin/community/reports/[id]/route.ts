import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { canManageContent } from '@/lib/admin-access'
import { isCommunityReportAction } from '@/lib/community-options'
import { isSameOrigin } from '@/lib/request-origin'

type RouteContext = { params: Promise<{ id: string }> }

function json(data: Record<string, unknown>, status = 200) {
  return Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } })
}

export async function POST(request: Request, { params }: RouteContext) {
  if (!isSameOrigin(request)) return json({ message: 'Invalid request origin.' }, 403)

  const payload = await getPayload({ config: configPromise })
  const auth = await payload.auth({ headers: request.headers })
  if (!canManageContent(auth.user)) return json({ message: 'Administrator access is required.' }, 403)

  const { id: rawId } = await params
  const id = Number(rawId)
  if (!Number.isInteger(id) || id < 1) return json({ message: 'Invalid report id.' }, 400)
  const data = await request.json().catch(() => null) as Record<string, unknown> | null
  if (!isCommunityReportAction(data?.action)) return json({ message: 'Choose a valid moderation action.' }, 400)

  const report = await payload.findByID({ collection: 'community-reports', id, depth: 0, overrideAccess: true }).catch(() => null)
  if (!report) return json({ message: 'That report could not be found.' }, 404)
  if (report.status !== 'pending') return json({ message: 'That report has already been reviewed.' }, 409)

  const now = new Date().toISOString()
  if (data.action === 'hide') {
    const targetId = typeof report.targetType === 'string' && report.targetType === 'post'
      ? (typeof report.post === 'object' && report.post ? report.post.id : report.post)
      : (typeof report.comment === 'object' && report.comment ? report.comment.id : report.comment)
    if (!targetId) return json({ message: 'The report target is missing.' }, 422)
    await payload.update({
      collection: report.targetType === 'post' ? 'community-posts' : 'community-comments',
      id: targetId,
      data: { status: 'hidden' },
      depth: 0,
      overrideAccess: true,
    })
  }

  const updated = await payload.update({
    collection: 'community-reports',
    id,
    data: {
      status: data.action === 'hide' ? 'resolved' : 'dismissed',
      reviewedAt: now,
      reviewedByEmail: auth.user.email,
    },
    depth: 0,
    overrideAccess: true,
  })

  return json({ ok: true, id: updated.id, status: updated.status })
}
