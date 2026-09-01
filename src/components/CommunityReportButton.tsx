'use client'

import Link from 'next/link'
import type { FormEvent } from 'react'
import { useRef, useState } from 'react'

import { communityReportReasonOptions, type CommunityReportReason } from '@/lib/community-options'

type CommunityReportButtonProps = {
  targetType: 'post' | 'comment'
  targetId: number
  isAuthenticated: boolean
  nextPath: string
}

export function CommunityReportButton({ targetType, targetId, isAuthenticated, nextPath }: CommunityReportButtonProps) {
  const [state, setState] = useState<'idle' | 'busy' | 'sent' | 'error'>('idle')
  const [reason, setReason] = useState<CommunityReportReason>('other')
  const [details, setDetails] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const dialogRef = useRef<HTMLDialogElement>(null)
  const dialogTitleId = `community-report-title-${targetType}-${targetId}`

  if (!isAuthenticated) return <Link className="community-report-button" href={`/login/?next=${encodeURIComponent(nextPath)}`}>Sign in to report</Link>
  if (state === 'sent') return <span className="community-report-button community-report-button--sent" role="status">Thanks, reported</span>

  function openDialog() {
    setState('idle')
    setErrorMessage('')
    dialogRef.current?.showModal()
  }

  async function report(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState('busy')
    setErrorMessage('')
    try {
      const response = await fetch('/api/community/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetType, targetId, reason, details }),
      })
      const result = await response.json().catch(() => ({})) as { message?: string }
      if (!response.ok) throw new Error(result.message || 'We could not send that report.')
      dialogRef.current?.close()
      setState('sent')
    } catch (reportError) {
      setState('error')
      setErrorMessage(reportError instanceof Error ? reportError.message : 'We could not send that report.')
    }
  }

  return (
    <>
      <button type="button" className="community-report-button" onClick={openDialog}>Report</button>
      <dialog className="community-report-dialog" ref={dialogRef} aria-labelledby={dialogTitleId}>
        <form className="community-report-dialog__form" onSubmit={report}>
          <div>
            <p className="eyebrow">Help us keep this useful</p>
            <h2 id={dialogTitleId}>Report this {targetType === 'post' ? 'post' : 'reply'}</h2>
            <p>Tell us what needs a closer look. The person who posted it will not see who sent the report.</p>
          </div>
          <label>
            Reason
            <select value={reason} onChange={(event) => setReason(event.target.value as CommunityReportReason)}>
              {communityReportReasonOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
            </select>
          </label>
          <label>
            Anything else we should know? <small>Optional</small>
            <textarea value={details} onChange={(event) => setDetails(event.target.value)} maxLength={1500} rows={4} placeholder="A little context can help us make the right call." />
          </label>
          {errorMessage && <p className="community-report-dialog__error" role="alert">{errorMessage}</p>}
          <div className="community-report-dialog__actions">
            <button type="button" className="community-report-dialog__cancel" onClick={() => dialogRef.current?.close()} disabled={state === 'busy'}>Cancel</button>
            <button type="submit" className="button button--small" disabled={state === 'busy'}>{state === 'busy' ? 'Sending…' : 'Send report'}</button>
          </div>
        </form>
      </dialog>
    </>
  )
}
