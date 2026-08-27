import Link from 'next/link'
import { Logo } from './SiteHeader'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__intro">
          <Link href="/" aria-label="Expats.fi home"><Logo /></Link>
          <p>An independent guide to moving to, living in and settling in Finland.</p>
        </div>
        <nav aria-label="Guide categories">
          <strong>Guides</strong>
          <Link href="/start-here/">Start here</Link>
          <Link href="/resources/?category=Immigration%20%26%20permits">Immigration</Link>
          <Link href="/housing/">Housing</Link>
          <Link href="/resources/?category=Work%20%26%20money">Work and money</Link>
          <Link href="/family/">Family</Link>
          <Link href="/culture/">How Finland actually works</Link>
        </nav>
        <nav aria-label="Community links">
          <strong>Community</strong>
          <Link href="/community/">Community in Helsinki</Link>
          <Link href="/community/board/">Community board</Link>
          <Link href="/learn-finnish/">Learn Finnish</Link>
          <Link href="/news/">News</Link>
          <Link href="/areas/">Helsinki neighbourhoods</Link>
          <Link href="/eats/">Food & Drink</Link>
          <Link href="/explore/">Things to do in Helsinki</Link>
          <Link href="/events/">Helsinki events</Link>
          <Link href="/sports/">Sports and activities</Link>
          <Link href="/businesses/">Business directory</Link>
          <Link href="/embassies/">Embassies and consulates</Link>
          <Link href="/submit-business/">List a business</Link>
          <Link href="/resources/">Latest guides</Link>
        </nav>
        <nav aria-label="About links">
          <strong>Expats.fi</strong>
          <Link href="/admin">Editor login</Link>
          <a href="mailto:listings@expats.fi">Contact</a>
          <Link href="/sitemap.xml">Sitemap</Link>
        </nav>
      </div>
      <div className="shell site-footer__bottom">
        <span>© {new Date().getFullYear()} expats.fi</span>
        <span>Not affiliated with any Finnish authority.</span>
      </div>
    </footer>
  )
}
