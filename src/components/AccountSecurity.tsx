import Link from 'next/link'

export function AccountSecurity({ provider }: { provider?: string | null }) {
  const signInMethod = provider === 'google' ? 'Google' : provider === 'both' ? 'Email and Google' : 'Email and password'

  return (
    <section className="account-security" aria-labelledby="account-security-title">
      <div><p className="eyebrow">Security and privacy</p><h2 id="account-security-title">You stay in control.</h2><p>Your saved items and profile details are private to your account. We only ask for the information that makes the member experience useful.</p></div>
      <dl className="account-security__facts"><div><dt>Sign-in method</dt><dd>{signInMethod}</dd></div><div><dt>Account access</dt><dd>Private to you</dd></div></dl>
      <div className="account-security__links"><Link className="text-link" href="/privacy/">Read the privacy details <span aria-hidden="true">→</span></Link><Link className="text-link" href="mailto:hello@expats.fi?subject=Account%20data%20or%20deletion%20request">Request your data or account deletion <span aria-hidden="true">→</span></Link></div>
    </section>
  )
}
