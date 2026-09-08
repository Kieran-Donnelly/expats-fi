import type { Metadata } from 'next'
import Link from 'next/link'

import { AuthForm } from '@/components/AuthForm'
import { safeReturnPath } from '@/lib/return-path'

export const metadata: Metadata = { title: 'Create an account', robots: { index: false, follow: false } }

export default async function RegisterPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next } = await searchParams
  const returnTo = safeReturnPath(next)
  return (
    <main id="main" className="auth-page">
      <div className="shell auth-page__layout">
        <section className="auth-page__intro">
          <Link className="back-link" href="/">← Back to Expats.fi</Link>
          <h1>Make Finland feel more familiar.</h1>
          <p>Create an account to keep the useful bits together and take part when you have a question, a recommendation or something worth sharing.</p>
          <ul className="auth-benefits" aria-label="What your account includes">
            <li><span aria-hidden="true">01</span><strong>Save the guides you will actually need again.</strong></li>
            <li><span aria-hidden="true">02</span><strong>Keep good local businesses in one shortlist.</strong></li>
            <li><span aria-hidden="true">03</span><strong>Join practical community conversations.</strong></li>
          </ul>
          <div className="auth-promise"><strong>Free to join</strong><span>Your profile is not made public.</span></div>
        </section>
        <section aria-labelledby="create-account-title">
          <h2 id="create-account-title" className="auth-page__form-title">Create your account</h2>
          <AuthForm mode="register" googleEnabled={Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET)} returnTo={returnTo} />
        </section>
      </div>
    </main>
  )
}
