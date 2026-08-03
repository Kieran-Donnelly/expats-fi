'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function AccountActions() {
  const router = useRouter()
  const [pending, setPending] = useState(false)

  async function signOut() {
    setPending(true)
    await Promise.allSettled([
      fetch('/api/members/logout', { method: 'POST', credentials: 'include' }),
      fetch('/api/auth/logout', { method: 'POST', credentials: 'include' }),
    ])
    router.push('/')
    router.refresh()
  }

  return <button className="text-button" type="button" onClick={signOut} disabled={pending}>{pending ? 'Signing out…' : 'Sign out'}</button>
}
