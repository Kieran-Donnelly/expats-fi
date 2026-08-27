'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'

import { memberArrivalStages, type MemberArrivalStage } from '@/lib/account-options'

export function AccountProfileForm({
  initialArrivalStage,
  initialCity,
  initialLanguages,
  initialName,
}: {
  initialArrivalStage?: MemberArrivalStage | null
  initialCity?: string | null
  initialLanguages?: string | null
  initialName: string
}) {
  const [name, setName] = useState(initialName)
  const [city, setCity] = useState(initialCity || '')
  const [languages, setLanguages] = useState(initialLanguages || '')
  const [arrivalStage, setArrivalStage] = useState(initialArrivalStage || '')
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  async function saveProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
    setStatus('')
    setError('')

    try {
      const response = await fetch('/api/account/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name, city, languages, arrivalStage }),
      })
      const body = await response.json().catch(() => null) as { message?: string; name?: string; city?: string | null; languages?: string | null; arrivalStage?: MemberArrivalStage | null } | null
      if (!response.ok) throw new Error(body?.message || 'We could not save your profile.')
      if (body?.name) setName(body.name)
      setCity(body?.city || '')
      setLanguages(body?.languages || '')
      setArrivalStage(body?.arrivalStage || '')
      setStatus('Profile saved.')
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'We could not save your profile.')
    } finally {
      setPending(false)
    }
  }

  return (
    <form className="account-form" onSubmit={saveProfile}>
      <div className="account-form__heading"><p className="eyebrow">Your profile</p><h2>Make it useful to you.</h2><p>These details help us tailor future guides without making your profile public.</p></div>
      <label>Name<input name="name" value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" required maxLength={120} /></label>
      <label>City or municipality<input name="city" value={city} onChange={(event) => setCity(event.target.value)} autoComplete="address-level2" maxLength={120} placeholder="Helsinki, Tampere, Turku…" /></label>
      <label>Languages you use<input name="languages" value={languages} onChange={(event) => setLanguages(event.target.value)} maxLength={240} placeholder="English, Finnish, Spanish…" /></label>
      <label>Where are you in your move?<select name="arrivalStage" value={arrivalStage} onChange={(event) => setArrivalStage(event.target.value as MemberArrivalStage | '')}><option value="">Prefer not to say</option>{memberArrivalStages.map((stage) => <option value={stage.value} key={stage.value}>{stage.label}</option>)}</select></label>
      {error && <p className="account-form__message account-form__message--error" role="alert">{error}</p>}
      {status && <p className="account-form__message" role="status">{status}</p>}
      <button className="button" type="submit" disabled={pending}>{pending ? 'Saving…' : 'Save profile'}</button>
    </form>
  )
}
