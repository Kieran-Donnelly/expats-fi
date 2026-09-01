'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { communityContentActions, type CommunityContentAction } from '@/lib/community-options'

export function CommunityContentAction({ action, contentId, targetType }: { action: CommunityContentAction; contentId: number; targetType: 'post' | 'comment' }) {
  const router = useRouter()
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  async function run() {
    const message = action === communityContentActions.reject
      ? 'Reject this contribution? It will remain private in the moderation record.'
      : action === communityContentActions.approveAndTrust
        ? 'Publish this contribution and trust this member’s future clear posts?'
        : 'Publish this contribution?'
    if (!window.confirm(message)) return
    setPending(true)
    setError('')
    try {
      const response = await fetch(`/api/admin/community/content/${targetType}/${contentId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action }),
      })
      const result = await response.json().catch(() => ({})) as { message?: string }
      if (!response.ok) throw new Error(result.message || 'The moderation action failed.')
      router.refresh()
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'The moderation action failed.')
      setPending(false)
    }
  }

  const label = action === communityContentActions.approve ? 'Publish' : action === communityContentActions.approveAndTrust ? 'Publish & trust' : 'Reject'
  return <span className="expats-admin-moderation-action"><button type="button" onClick={run} disabled={pending}>{pending ? 'Saving…' : label}</button>{error && <small role="alert">{error}</small>}</span>
}
