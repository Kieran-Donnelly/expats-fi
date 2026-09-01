'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

import { trackAnalyticsEvent } from '@/lib/analytics'

export function SaveArticleButton({
  articleSlug,
  compact = false,
  initialSaved = false,
}: {
  articleSlug: string
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
      const response = await fetch(`/api/articles/${encodeURIComponent(articleSlug)}/save`, {
        method: saved ? 'DELETE' : 'POST',
        credentials: 'include',
      })

      if (response.status === 401) {
        router.push(`/login/?next=${encodeURIComponent(pathname || '/')}`)
        return
      }

      const body = await response.json().catch(() => null) as { saved?: boolean; message?: string } | null
      if (!response.ok) throw new Error(body?.message || 'We could not update your saved guides.')
      const isNowSaved = Boolean(body?.saved)
      setSaved(isNowSaved)
      trackAnalyticsEvent(isNowSaved ? 'guide_saved' : 'guide_unsaved', { item_label: articleSlug })
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'We could not update your saved guides.')
    } finally {
      setPending(false)
    }
  }

  return (
    <span className={`save-article${compact ? ' save-article--compact' : ''}`}>
      <button
        className="save-article-button"
        type="button"
        aria-pressed={saved}
        aria-label={saved ? 'Remove this guide from your saved guides' : 'Save this guide to your account'}
        onClick={toggleSaved}
        disabled={pending}
      >
        <span aria-hidden="true">{saved ? '✓' : '♡'}</span>
        {pending ? (saved ? 'Removing…' : 'Saving…') : (saved ? 'Saved' : 'Save guide')}
      </button>
      {error && <span className="save-article__error" role="alert">{error}</span>}
    </span>
  )
}
