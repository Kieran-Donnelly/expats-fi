'use client'

import Link from 'next/link'
import { useState } from 'react'

import { isCommunityReportReason } from '@/lib/community-options'

type CommunityReportButtonProps = {
  targetType: 'post' | 'comment'
  targetId: number
  isAuthenticated: boolean
  nextPath: string
}

export function CommunityReportButton({ targetType, targetId, isAuthenticated, nextPath }: CommunityReportButtonProps) {
  const [state, setState] = useState<'idle' | 'busy' | 'sent' | 'error'>('idle')

  if (!isAuthenticated) return <Link className="community-report-button" href={`/login/?next=${encodeURIComponent(nextPath)}`}>Sign in to report</Link>
  if (state === 'sent') return <span className="community-report-button community-report-button--sent" role="status">Thanks, reported</span>

  async function report() {
    if (!window.confirm(`Report this ${targetType} to the Expats.fi team?`)) return
    const rawReason = window.prompt('Choose a reason: spam, harassment, misinformation, or other', 'other')
    if (rawReason === null) return
    const reason = rawReason.trim().toLowerCase()
    if (!isCommunityReportReason(reason)) {
      setState('error')
      return
    }
    const details = window.prompt('Optional details for the moderation team (or leave blank):')
    if (details === null) return
    setState('busy')
    try {
      const response = await fetch('/api/community/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetType, targetId, reason, details }),
      })
      if (!response.ok) throw new Error('Report failed')
      setState('sent')
    } catch {
      setState('error')
    }
  }

  return <button type="button" className="community-report-button" onClick={report} disabled={state === 'busy'}>{state === 'busy' ? 'Sending…' : state === 'error' ? 'Try reporting again' : 'Report'}</button>
}
