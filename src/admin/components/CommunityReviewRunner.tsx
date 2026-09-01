'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function CommunityReviewRunner() {
  const router = useRouter()
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState('')

  async function run() {
    setPending(true)
    setMessage('')
    try {
      const response = await fetch('/api/admin/community/review', { method: 'POST' })
      const result = await response.json().catch(() => ({})) as { message?: string; screened?: number; published?: number; attention?: number; pending?: number }
      if (!response.ok) throw new Error(result.message || 'The community review could not run.')
      setMessage(`Screened ${result.screened || 0}. Published ${result.published || 0} trusted contributions. ${result.attention || 0} need attention and ${result.pending || 0} await a human decision.`)
      router.refresh()
    } catch (caught) {
      setMessage(caught instanceof Error ? caught.message : 'The community review could not run.')
    } finally {
      setPending(false)
    }
  }

  return <div className="expats-admin-community-runner"><button type="button" onClick={run} disabled={pending}>{pending ? 'Screening…' : 'Run community review'}</button>{message && <p role="status">{message}</p>}</div>
}
