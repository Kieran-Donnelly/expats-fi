'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { communityReportActions, type CommunityReportAction } from '@/lib/community-options'

export function CommunityReportAction({ action, reportId, confirmMessage }: { action: CommunityReportAction; reportId: number; confirmMessage?: string }) {
  const router = useRouter()
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  async function run() {
    if (confirmMessage && !window.confirm(confirmMessage)) return
    setPending(true)
    setError('')
    try {
      const response = await fetch(`/api/admin/community/reports/${reportId}`, {
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

  return <span className="expats-admin-moderation-action"><button type="button" onClick={run} disabled={pending}>{pending ? 'Saving…' : action === communityReportActions.hide ? 'Hide' : 'Dismiss'}</button>{error && <small role="alert">{error}</small>}</span>
}
