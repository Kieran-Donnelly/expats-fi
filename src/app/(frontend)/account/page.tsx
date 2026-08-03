import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { AccountActions } from '@/components/AccountActions'
import { getCurrentMember } from '@/lib/member-auth'

export const metadata: Metadata = { title: 'My account' }

export default async function AccountPage() {
  const member = await getCurrentMember(await headers())
  if (!member) redirect('/login/')

  return (
    <main id="main" className="account-page">
      <div className="shell account-page__layout">
        <header className="account-page__header">
          <div className="account-avatar" aria-hidden="true">{member.name.slice(0, 1).toUpperCase()}</div>
          <div>
            <p className="eyebrow">My account</p>
            <h1>Hello, {member.name.split(' ')[0]}.</h1>
            <p>{member.email}</p>
          </div>
          <AccountActions />
        </header>
        <section className="account-empty" aria-labelledby="account-coming-title">
          <span aria-hidden="true">⌂</span>
          <div>
            <h2 id="account-coming-title">This is your space.</h2>
            <p>Your account is ready. Saved guides, favourite businesses, and submission history can be added here when you decide what matters most.</p>
          </div>
        </section>
      </div>
    </main>
  )
}
