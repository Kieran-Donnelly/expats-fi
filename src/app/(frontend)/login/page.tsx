import type { Metadata } from 'next'
import Link from 'next/link'

import { AuthForm } from '@/components/AuthForm'
import { getAuthJourney } from '@/lib/auth-journey'
import { safeReturnPath } from '@/lib/return-path'

export const metadata: Metadata = { title: 'Sign in', robots: { index: false, follow: false } }

export default function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string; next?: string; reason?: string }> }) {
  return <AuthPage searchParams={searchParams} />
}

async function AuthPage({ searchParams }: { searchParams: Promise<{ error?: string; next?: string; reason?: string }> }) {
  const { error, next, reason } = await searchParams
  const returnTo = safeReturnPath(next)
  const authJourney = getAuthJourney(reason)
  return (
    <main id="main" className="auth-page">
      <div className="shell auth-page__layout">
        <section className="auth-page__intro">
          <Link className="back-link" href="/">← Back to Expats.fi</Link>
          <h1>Welcome back.</h1>
          <p>Sign in to your Expats.fi account. Keep useful guides and businesses saved in one place, manage your preferences and join the community board.</p>
          <div className="auth-promise"><strong>One account for life in Finland</strong><span>Your saved reading, local finds and community conversations stay together.</span></div>
        </section>
        <section aria-labelledby="sign-in-title">
          <h2 id="sign-in-title" className="auth-page__form-title">Sign in</h2>
          {error === 'google' && <p className="auth-error" role="alert">Google sign-in could not be completed. Please try again.</p>}
          <AuthForm authJourney={authJourney} mode="login" googleEnabled={Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET)} returnTo={returnTo} />
        </section>
      </div>
    </main>
  )
}
