import Link from 'next/link'

import { DesktopNavigation, MobileNavigation, SearchIcon } from './HeaderNavigation'
import { AccountNav } from './AccountNav'
import { businessDirectoryHref } from './siteNavigation'

export function Logo() {
  return (
    <span className="logo" aria-label="expats.fi">
      <span className="logo__mark" aria-hidden="true"><i /></span>
      <span className="logo__word">expats<span>.fi</span></span>
    </span>
  )
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Expats.fi home"><Logo /></Link>
        <DesktopNavigation />
        <div className="site-header__actions">
          <Link className="icon-button site-header__search" href="/resources/" aria-label="Search"><SearchIcon /></Link>
          <AccountNav />
          <Link className="button button--small site-header__directory" href={businessDirectoryHref}>Business directory</Link>
          <MobileNavigation account={<AccountNav mobile />} />
        </div>
      </div>
    </header>
  )
}
