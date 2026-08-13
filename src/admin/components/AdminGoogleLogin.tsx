import Link from 'next/link'

export default function AdminGoogleLogin() {
  return (
    <div className="expats-admin-google-login">
      <p className="expats-admin-google-login__label">Team access</p>
      <Link href="/api/auth/google/admin/start" className="expats-admin-google-login__button">
        <span aria-hidden="true">G</span>
        Continue with Google
      </Link>
      <p className="expats-admin-google-login__note">Only the two approved Podium identities can use Google admin access.</p>
    </div>
  )
}
