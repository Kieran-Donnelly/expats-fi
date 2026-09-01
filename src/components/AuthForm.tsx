'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

type AuthMode = 'login' | 'register'

export function AuthForm({ mode, googleEnabled, returnTo = '/account/' }: { mode: AuthMode; googleEnabled: boolean; returnTo?: string }) {
  const router = useRouter()
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)
  const isRegister = mode === 'register'

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setPending(true)
    const form = new FormData(event.currentTarget)
    const email = String(form.get('email') || '').trim().toLowerCase()
    const password = String(form.get('password') || '')

    try {
      if (isRegister) {
        const registration = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: String(form.get('name') || '').trim(), email, password }),
        })
        const registrationBody = await registration.json()
        if (!registration.ok) throw new Error(registrationBody.message || 'We could not create your account.')
      }

      const login = await fetch('/api/members/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })
      if (!login.ok) {
        const body = await login.json().catch(() => null)
        throw new Error(body?.errors?.[0]?.message || 'The email or password is not correct.')
      }

      router.push(returnTo)
      router.refresh()
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Something went wrong. Please try again.')
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="auth-panel">
      <a className={`google-button${googleEnabled ? '' : ' google-button--disabled'}`} href={googleEnabled ? `/api/auth/google/start?next=${encodeURIComponent(returnTo)}` : undefined} aria-disabled={!googleEnabled}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.8 3-4.3 3-7.3Z"/><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1a5.8 5.8 0 0 1-5.5-4H3.2v2.6A10 10 0 0 0 12 22Z"/><path fill="#FBBC05" d="M6.5 14a6 6 0 0 1 0-3.9V7.5H3.2a10 10 0 0 0 0 9.1L6.5 14Z"/><path fill="#EA4335" d="M12 6.1c1.5 0 2.8.5 3.9 1.5l2.8-2.8A9.4 9.4 0 0 0 3.2 7.5l3.3 2.6a5.8 5.8 0 0 1 5.5-4Z"/></svg>
        Continue with Google
      </a>
      {!googleEnabled && <p className="auth-panel__notice">Google sign-in is being configured. Email sign-in is ready.</p>}

      <div className="auth-divider"><span>or continue with email</span></div>

      <form className="auth-form" onSubmit={submit} aria-busy={pending}>
        {isRegister && (
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required maxLength={120} placeholder="Your name" />
          </label>
        )}
        <label>
          Email address
          <input name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input name="password" type="password" autoComplete={isRegister ? 'new-password' : 'current-password'} required minLength={8} placeholder={isRegister ? 'At least 8 characters' : 'Your password'} />
        </label>

        {error && <p className="auth-error" role="alert">{error}</p>}
        <button className="button auth-form__submit" type="submit" disabled={pending}>
          {pending ? (isRegister ? 'Creating account…' : 'Signing in…') : (isRegister ? 'Create account' : 'Sign in')}
        </button>
      </form>

      <p className="auth-panel__switch">
        {isRegister ? 'Already have an account?' : 'New to Expats.fi?'}{' '}
        <Link href={`${isRegister ? '/login/' : '/register/'}?next=${encodeURIComponent(returnTo)}`}>{isRegister ? 'Sign in' : 'Create an account'}</Link>
      </p>
    </div>
  )
}
