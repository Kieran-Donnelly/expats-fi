'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import type { BusinessSubmissionAction } from '@/lib/business-moderation'

type ModerationActionProps = {
  action: BusinessSubmissionAction
  label: string
  submissionId: number
  confirmMessage?: string
}

export function ModerationAction({ action, confirmMessage, label, submissionId }: ModerationActionProps) {
  const router = useRouter()
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  async function handleClick() {
    if (confirmMessage && !window.confirm(confirmMessage)) return

    setError('')
    setPending(true)
    try {
      const response = await fetch(`/api/admin/business-submissions/${submissionId}`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action }),
      })
      const result = await response.json().catch(() => null) as { message?: string } | null
      if (!response.ok) throw new Error(result?.message || 'Could not update this submission.')
      router.refresh()
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Could not update this submission.')
    } finally {
      setPending(false)
    }
  }

  return (
    <span className="expats-admin-moderation-action">
      <button type="button" onClick={handleClick} disabled={pending}>
        {pending ? 'Saving…' : label}
      </button>
      {error && <small role="status">{error}</small>}
    </span>
  )
}
