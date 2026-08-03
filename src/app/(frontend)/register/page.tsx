import type { Metadata } from 'next'
import Link from 'next/link'

import { AuthForm } from '@/components/AuthForm'

export const metadata: Metadata = { title: 'Create an account' }

export default function RegisterPage() {
  return (
    <main id="main" className="auth-page">
      <div className="shell auth-page__layout">
        <section className="auth-page__intro">
          <Link className="back-link" href="/">← Back to Expats.fi</Link>
          <h1>Make Finland feel more familiar.</h1>
          <p>Create your free account. For now it gives you a home on Expats.fi; saved resources and community features will follow.</p>
          <div className="auth-promise"><strong>Free to join</strong><span>No subscription and no clutter.</span></div>
        </section>
        <section aria-labelledby="create-account-title">
          <h2 id="create-account-title" className="auth-page__form-title">Create your account</h2>
          <AuthForm mode="register" googleEnabled={Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET)} />
        </section>
      </div>
    </main>
  )
}
