'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'

import { memberInterestOptions, type MemberInterest } from '@/lib/account-options'

export function AccountPreferencesForm({
  initialEmailUpdates = false,
  initialInterests = [],
  initialNewsletter = false,
}: {
  initialEmailUpdates?: boolean
  initialInterests?: MemberInterest[]
  initialNewsletter?: boolean
}) {
  const [emailUpdates, setEmailUpdates] = useState(initialEmailUpdates)
  const [newsletter, setNewsletter] = useState(initialNewsletter)
  const [interests, setInterests] = useState<MemberInterest[]>(initialInterests)
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  function toggleInterest(interest: MemberInterest) {
    setInterests((current) => current.includes(interest) ? current.filter((item) => item !== interest) : [...current, interest])
  }

  async function savePreferences(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
    setStatus('')
    setError('')

    try {
      const response = await fetch('/api/account/preferences', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ emailUpdates, newsletter, interests }),
      })
      const body = await response.json().catch(() => null) as { message?: string; emailUpdates?: boolean; newsletter?: boolean; interests?: MemberInterest[] } | null
      if (!response.ok) throw new Error(body?.message || 'We could not save your preferences.')
      if (typeof body?.emailUpdates === 'boolean') setEmailUpdates(body.emailUpdates)
      if (typeof body?.newsletter === 'boolean') setNewsletter(body.newsletter)
      if (body?.interests) setInterests(body.interests)
      setStatus('Preferences saved.')
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'We could not save your preferences.')
    } finally {
      setPending(false)
    }
  }

  return (
    <form className="account-form" onSubmit={savePreferences}>
      <div className="account-form__heading"><p className="eyebrow">Preferences</p><h2>Choose what follows you.</h2><p>Pick topics now; we will use them for recommendations and occasional updates.</p></div>
      <fieldset className="account-check-list"><legend>Topics you care about</legend>{memberInterestOptions.map((interest) => <label key={interest}><input type="checkbox" checked={interests.includes(interest)} onChange={() => toggleInterest(interest)} />{interest}</label>)}</fieldset>
      <fieldset className="account-check-list"><legend>Email</legend><label><input type="checkbox" checked={emailUpdates} onChange={(event) => setEmailUpdates(event.target.checked)} />Useful guide and directory updates</label><label><input type="checkbox" checked={newsletter} onChange={(event) => setNewsletter(event.target.checked)} />Monthly Expats.fi newsletter</label></fieldset>
      {error && <p className="account-form__message account-form__message--error" role="alert">{error}</p>}
      {status && <p className="account-form__message" role="status">{status}</p>}
      <button className="button" type="submit" disabled={pending}>{pending ? 'Saving…' : 'Save preferences'}</button>
    </form>
  )
}
