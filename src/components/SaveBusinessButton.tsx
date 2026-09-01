'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

import { trackAnalyticsEvent } from '@/lib/analytics'

export function SaveBusinessButton({
  businessSlug,
  compact = false,
  initialSaved = false,
}: {
  businessSlug: string
  compact?: boolean
  initialSaved?: boolean
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [saved, setSaved] = useState(initialSaved)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  async function toggleSaved() {
    setPending(true)
    setError('')

    try {
      const response = await fetch(`/api/businesses/${encodeURIComponent(businessSlug)}/save`, {
        method: saved ? 'DELETE' : 'POST',
        credentials: 'include',
      })

      if (response.status === 401) {
        router.push(`/login/?next=${encodeURIComponent(pathname || '/')}`)
        return
      }

      const body = await response.json().catch(() => null) as { saved?: boolean; message?: string } | null
      if (!response.ok) throw new Error(body?.message || 'We could not update your saved businesses.')
      const isNowSaved = Boolean(body?.saved)
      setSaved(isNowSaved)
      trackAnalyticsEvent(isNowSaved ? 'business_saved' : 'business_unsaved', { item_label: businessSlug })
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'We could not update your saved businesses.')
    } finally {
      setPending(false)
    }
  }

  return (
    <span className={`save-business${compact ? ' save-business--compact' : ''}`}>
      <button
        className="save-business-button"
        type="button"
        aria-pressed={saved}
        aria-label={saved ? 'Remove this business from your saved businesses' : 'Save this business to your account'}
        onClick={toggleSaved}
        disabled={pending}
      >
        <span aria-hidden="true">{saved ? '✓' : '♡'}</span>
        {pending ? (saved ? 'Removing…' : 'Saving…') : (saved ? 'Saved' : 'Save business')}
      </button>
      {error && <span className="save-business__error" role="alert">{error}</span>}
    </span>
  )
}
