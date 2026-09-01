import type { Metadata } from 'next'
import Link from 'next/link'

import { AuthForm } from '@/components/AuthForm'
import { safeReturnPath } from '@/lib/return-path'

export const metadata: Metadata = { title: 'Sign in', robots: { index: false, follow: false } }

export default function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string; next?: string }> }) {
  return <AuthPage searchParams={searchParams} />
}

async function AuthPage({ searchParams }: { searchParams: Promise<{ error?: string; next?: string }> }) {
  const { error, next } = await searchParams
  const returnTo = safeReturnPath(next)
  return (
    <main id="main" className="auth-page">
      <div className="shell auth-page__layout">
        <section className="auth-page__intro">
          <Link className="back-link" href="/">← Back to Expats.fi</Link>
          <h1>Welcome back.</h1>
          <p>Sign in to your Expats.fi account. Keep useful Finland guides saved in one place, with more member tools to come.</p>
          <div className="auth-promise"><strong>One account for life in Finland</strong><span>We are building the useful parts next.</span></div>
        </section>
        <section aria-labelledby="sign-in-title">
          <h2 id="sign-in-title" className="auth-page__form-title">Sign in</h2>
          {error === 'google' && <p className="auth-error" role="alert">Google sign-in could not be completed. Please try again.</p>}
          <AuthForm mode="login" googleEnabled={Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET)} returnTo={returnTo} />
        </section>
      </div>
    </main>
  )
}
