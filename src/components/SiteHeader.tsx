import Link from 'next/link'

const guideLinks = [
  ['Immigration', 'Immigration & permits'],
  ['Work', 'Work & money'],
  ['Housing', 'Housing'],
  ['Money', 'Work & money'],
  ['Family', 'Family'],
] as const

export function Logo() {
  return (
    <span className="logo" aria-label="expats.fi">
      <span className="logo__mark" aria-hidden="true"><i /><b /></span>
      <span className="logo__word">expats<span>.fi</span></span>
    </span>
  )
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Expats.fi home"><Logo /></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/">Start Here</Link>
          {guideLinks.map(([label, category]) => (
            <Link key={label} href={`/resources/?category=${encodeURIComponent(category)}`}>{label}</Link>
          ))}
          <Link href="/businesses/">Community</Link>
        </nav>
        <div className="site-header__actions">
          <Link className="icon-button" href="/resources/" aria-label="Search guides">
            <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5" /><path d="m13 13 4 4" /></svg>
          </Link>
          <Link className="button button--small" href="/businesses/">Business directory</Link>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><span /><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              <Link href="/">Start Here</Link>
              <Link href="/resources/">All guides</Link>
              {guideLinks.map(([label, category]) => (
                <Link key={label} href={`/resources/?category=${encodeURIComponent(category)}`}>{label}</Link>
              ))}
              <Link href="/businesses/">Business directory</Link>
              <Link href="/submit-business/">List a business</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
