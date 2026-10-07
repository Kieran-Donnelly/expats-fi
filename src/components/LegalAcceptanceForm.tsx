'use client'

import Link from 'next/link'
import { useState } from 'react'

import { ACCOUNT_MINIMUM_AGE } from '@/lib/legal'

export function LegalAcceptanceForm() {
  const [accepted, setAccepted] = useState(false)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  async function save() {
    setPending(true)
    setError('')
    try {
      const response = await fetch('/api/account/legal', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ ageConfirmed: accepted, termsAccepted: accepted }),
      })
      const body = await response.json().catch(() => null) as { message?: string } | null
      if (!response.ok) throw new Error(body?.message || 'We could not save your confirmation.')
      window.location.reload()
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'We could not save your confirmation.')
      setPending(false)
    }
  }

  return (
    <section className="account-welcome" aria-labelledby="account-terms-title">
      <div className="account-welcome__intro"><p className="eyebrow">One account check</p><h2 id="account-terms-title">Please confirm the current ground rules.</h2><p>We added clearer terms for accounts, community posts and submitted content. This confirmation is needed before contributing.</p></div>
      <div className="account-welcome__steps">
        <label className="auth-form__legal"><input type="checkbox" checked={accepted} onChange={(event) => setAccepted(event.target.checked)} /><span>I confirm I am at least {ACCOUNT_MINIMUM_AGE} and accept the <Link href="/terms/" target="_blank">Terms of Use</Link> and <Link href="/privacy/" target="_blank">Privacy Notice</Link>.</span></label>
        {error && <p className="auth-error" role="alert">{error}</p>}
        <button className="button" type="button" onClick={save} disabled={!accepted || pending}>{pending ? 'Saving…' : 'Confirm and continue'}</button>
      </div>
    </section>
  )
}
