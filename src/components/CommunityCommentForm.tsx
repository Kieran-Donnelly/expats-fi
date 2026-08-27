'use client'

import Link from 'next/link'
import type { FormEvent } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function CommunityCommentForm({ postSlug, isAuthenticated }: { postSlug: string; isAuthenticated: boolean }) {
  const router = useRouter()
  const [body, setBody] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [busy, setBusy] = useState(false)

  if (!isAuthenticated) {
    return <p className="community-comments__join">Have something useful to add? <Link href={`/login/?next=/community/board/${postSlug}/`}>Sign in to reply</Link>.</p>
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true)
    setError('')
    setMessage('')
    try {
      const response = await fetch(`/api/community/posts/${encodeURIComponent(postSlug)}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body }),
      })
      const result = await response.json().catch(() => ({})) as { message?: string }
      if (!response.ok) throw new Error(result.message || 'We could not publish that reply.')
      setBody('')
      setMessage('Reply published.')
      router.refresh()
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'We could not publish that reply.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <form className="community-form community-form--reply" onSubmit={submit}>
      <div className="community-form__heading"><div><p className="eyebrow">Keep it going</p><h2>Add your perspective.</h2></div></div>
      {error && <p className="community-form__message community-form__message--error" role="alert">{error}</p>}
      {message && <p className="community-form__message" role="status">{message}</p>}
      <label className="sr-only" htmlFor="community-reply">Your reply</label>
      <textarea id="community-reply" value={body} onChange={(event) => setBody(event.target.value)} required minLength={2} maxLength={3000} rows={5} placeholder="Add a useful detail, personal experience or kind follow-up." />
      <div className="community-form__footer"><small>Keep personal information private and assume good intent.</small><button className="button" type="submit" disabled={busy}>{busy ? 'Publishing…' : 'Reply'}</button></div>
    </form>
  )
}
