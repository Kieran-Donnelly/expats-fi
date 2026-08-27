'use client'

import Link from 'next/link'
import type { FormEvent } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { communityTopicOptions } from '@/lib/community-options'

export function CommunityPostForm({ isAuthenticated }: { isAuthenticated: boolean }) {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [topic, setTopic] = useState('general')
  const [body, setBody] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  if (!isAuthenticated) {
    return (
      <div className="community-board__join" aria-labelledby="community-join-title">
        <div><p className="eyebrow">Want to join in?</p><h2 id="community-join-title">Ask a question or share what you have learned.</h2><p>Sign in to start a conversation. Reading is open to everyone.</p></div>
        <Link className="button" href="/login/?next=/community/board/">Sign in to post</Link>
      </div>
    )
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true)
    setMessage('')
    setError('')
    try {
      const response = await fetch('/api/community/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, topic, body }),
      })
      const result = await response.json().catch(() => ({})) as { message?: string; slug?: string }
      if (!response.ok) throw new Error(result.message || 'We could not publish that post.')
      setMessage('Post published. Opening the conversation…')
      if (result.slug) router.push(`/community/board/${result.slug}/`)
      else router.refresh()
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'We could not publish that post.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <form className="community-form" onSubmit={submit}>
      <div className="community-form__heading"><div><p className="eyebrow">Start a conversation</p><h2>What would you like to ask?</h2></div><span>Be specific, kind and useful.</span></div>
      {error && <p className="community-form__message community-form__message--error" role="alert">{error}</p>}
      {message && <p className="community-form__message" role="status">{message}</p>}
      <label>Title<input value={title} onChange={(event) => setTitle(event.target.value)} required minLength={3} maxLength={120} placeholder="e.g. Which neighbourhood is easiest without a car?" /></label>
      <label>Topic<select value={topic} onChange={(event) => setTopic(event.target.value)}>{communityTopicOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}</select></label>
      <label>Your post<textarea value={body} onChange={(event) => setBody(event.target.value)} required minLength={10} maxLength={5000} rows={7} placeholder="Share the context that would help another expat give a useful answer." /></label>
      <div className="community-form__footer"><small>Posts appear immediately. Please do not share private contact, identity or bank details.</small><button className="button" type="submit" disabled={busy}>{busy ? 'Publishing…' : 'Publish post'}</button></div>
    </form>
  )
}
