import Link from 'next/link'

export default function NotFound() {
  return <main id="main"><div className="shell detail-shell"><p className="eyebrow">404</p><h1>That page has moved or does not exist.</h1><p className="business-profile__summary">Try the guide library or the business directory instead.</p><div style={{ display: 'flex', gap: '.75rem', marginTop: '2rem' }}><Link className="button" href="/resources/">Browse guides</Link><Link className="button" href="/businesses/">Find businesses</Link></div></div></main>
}
