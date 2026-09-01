'use client'

import Link from 'next/link'
import type { FormEvent } from 'react'
import { useState } from 'react'

import { trackAnalyticsEvent } from '@/lib/analytics'

export function SubmissionForm({
  initialContactEmail = '',
  initialContactName = '',
  isAuthenticated,
}: {
  initialContactEmail?: string
  initialContactName?: string
  isAuthenticated: boolean
}) {
  const [businessName, setBusinessName] = useState('')
  const [website, setWebsite] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [contactName, setContactName] = useState(initialContactName)
  const [contactEmail, setContactEmail] = useState(initialContactEmail)
  const [pending, setPending] = useState(false)
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')

  if (!isAuthenticated) {
    return (
      <div className="form-card" aria-labelledby="submission-sign-in-title">
        <p className="eyebrow">One quick step</p>
        <h2 id="submission-sign-in-title">Sign in before sending your listing.</h2>
        <p>That gives you a place to follow the review and means we can come back to you if anything needs checking.</p>
        <div className="button-row">
          <Link className="button" href="/login/?next=%2Fsubmit-business%2F">Sign in to continue</Link>
          <Link className="button button--quiet" href="/register/?next=%2Fsubmit-business%2F">Create an account</Link>
        </div>
        <p className="form-note">Once you are signed in, we will bring you straight back here.</p>
      </div>
    )
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('')
    setError('')
    setPending(true)
    try {
      const response = await fetch('/api/account/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ businessName, website, location, category, description, contactName, contactEmail }),
      })
      const body = await response.json().catch(() => null) as { message?: string } | null
      if (!response.ok) throw new Error(body?.message || 'We could not save this submission.')
      setBusinessName('')
      setWebsite('')
      setLocation('')
      setCategory('')
      setDescription('')
      setStatus('Submission sent. We will review it and show the status in My Account.')
      trackAnalyticsEvent('business_submission_completed')
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'We could not save this submission.')
    } finally {
      setPending(false)
    }
  }

  return (
    <form className="form-card" onSubmit={submit} aria-busy={pending}>
      <label>Business name<input name="name" value={businessName} onChange={(event) => setBusinessName(event.target.value)} required /></label>
      <label>Website<input name="website" type="url" value={website} onChange={(event) => setWebsite(event.target.value)} required placeholder="https://" /></label>
      <label>City or service area<input name="location" value={location} onChange={(event) => setLocation(event.target.value)} required /></label>
      <label>Business category<input name="category" value={category} onChange={(event) => setCategory(event.target.value)} required /></label>
      <label>What does the business do?<textarea name="description" value={description} onChange={(event) => setDescription(event.target.value)} required /></label>
      <label>Your name<input name="contactName" value={contactName} onChange={(event) => setContactName(event.target.value)} required /></label>
      <label>Your email<input name="contactEmail" type="email" value={contactEmail} onChange={(event) => setContactEmail(event.target.value)} required /></label>
      {error && <p className="form-note form-note--error" role="alert">{error}</p>}
      {status && <p className="form-note form-note--success" role="status">{status}</p>}
      <button className="button" type="submit" disabled={pending}>{pending ? 'Sending…' : 'Submit for review'}</button>
      <p className="form-note">We will check that the business is Finland-based and expat-owned before publishing it.</p>
    </form>
  )
}
