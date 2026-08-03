'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export function AccountNav({ mobile = false }: { mobile?: boolean }) {
  const [signedIn, setSignedIn] = useState(false)

  useEffect(() => {
    fetch('/api/auth/session', { credentials: 'include' })
      .then((response) => response.ok ? response.json() : null)
      .then((data) => setSignedIn(Boolean(data?.member)))
      .catch(() => undefined)
  }, [])

  const href = signedIn ? '/account/' : '/login/'
  const label = signedIn ? 'My account' : 'Sign in'
  return <Link className={mobile ? undefined : 'account-link'} href={href}>{label}</Link>
}
