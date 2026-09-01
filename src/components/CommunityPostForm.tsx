'use client'

import Link from 'next/link'
import type { FormEvent } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { communityTopicOptions } from '@/lib/community-options'

const starterPrompts = [
  { title: 'What do you wish somebody had explained when you arrived?', topic: 'general' },
  { title: 'Can somebody help me understand this Finnish system?', topic: 'everyday-life' },
  { title: 'Where can I meet people without it feeling forced?', topic: 'culture-events' },
  { title: 'Which neighbourhood might suit my situation?', topic: 'housing' },
] as const

export function CommunityPostForm({ canPost = true, isAuthenticated, rulesAccepted = false }: { canPost?: boolean; isAuthenticated: boolean; rulesAccepted?: boolean }) {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [topic, setTopic] = useState('general')
  const [body, setBody] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [acceptedRules, setAcceptedRules] = useState(rulesAccepted)
  const [anonymous, setAnonymous] = useState(false)

  if (!isAuthenticated) {
    return (
      <div className="community-board__join" aria-labelledby="community-join-title">
        <div><p className="eyebrow">Want to join in?</p><h2 id="community-join-title">Ask a question or share what you have learned.</h2><p>Sign in to start a conversation. Reading is open to everyone.</p></div>
        <Link className="button" href="/login/?next=/community/board/">Sign in to post</Link>
      </div>
    )
  }

  if (!canPost) {
    return <div className="community-board__join"><div><p className="eyebrow">Posting paused</p><h2>This account cannot post right now.</h2><p>Email hello@expats.fi if you believe this is a mistake.</p></div></div>
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
        body: JSON.stringify({ title, topic, body, anonymous, rulesAccepted: acceptedRules }),
      })
      const result = await response.json().catch(() => ({})) as { message?: string; slug?: string; status?: string }
      if (!response.ok) throw new Error(result.message || 'We could not publish that post.')
      if (result.status === 'published') {
        setMessage('Post published. Opening the conversation…')
        if (result.slug) router.push(`/community/board/${result.slug}/`)
        else router.refresh()
      } else {
        setTitle('')
        setBody('')
        setAnonymous(false)
        setMessage('Thanks. Your post is safely in the review queue and will appear once it has been checked.')
      }
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'We could not publish that post.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <form className="community-form" onSubmit={submit} aria-busy={busy}>
      <div className="community-form__heading"><div><p className="eyebrow">Start a conversation</p><h2>What would you like to ask?</h2></div><span>Be specific, kind and useful.</span></div>
      {error && <p className="community-form__message community-form__message--error" role="alert">{error}</p>}
      {message && <p className="community-form__message" role="status">{message}</p>}
      <div className="community-form__starters"><span>Need a starting point?</span><div>{starterPrompts.map((prompt) => <button type="button" key={prompt.title} onClick={() => { setTitle(prompt.title); setTopic(prompt.topic) }}>{prompt.title}</button>)}</div></div>
      <label>Title<input value={title} onChange={(event) => setTitle(event.target.value)} required minLength={3} maxLength={120} placeholder="e.g. Which neighbourhood is easiest without a car?" /></label>
      <label>Topic<select value={topic} onChange={(event) => setTopic(event.target.value)}>{communityTopicOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}</select></label>
      <label>Your post<textarea value={body} onChange={(event) => setBody(event.target.value)} required minLength={10} maxLength={5000} rows={7} placeholder="Share the context that would help another expat give a useful answer." /></label>
      <label className="community-anonymous-check"><input type="checkbox" checked={anonymous} onChange={(event) => setAnonymous(event.target.checked)} /> <span><strong>Post anonymously</strong><small>Your friendly alias is public. Expats.fi moderators can still see the account behind it.</small></span></label>
      {!rulesAccepted && <label className="community-rules-check"><input type="checkbox" checked={acceptedRules} onChange={(event) => setAcceptedRules(event.target.checked)} required /> <span>I have read and agree to the <Link href="/community/rules/" target="_blank">community rules</Link>.</span></label>}
      <div className="community-form__footer"><small>New members are reviewed first. Never share private identity, banking or contact details.</small><button className="button" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Send post'}</button></div>
    </form>
  )
}
