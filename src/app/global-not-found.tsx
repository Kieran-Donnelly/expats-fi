import { Schibsted_Grotesk } from 'next/font/google'

import { NotFoundPage } from '@/components/NotFoundPage'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

import './(frontend)/styles.css'

const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-schibsted',
  display: 'swap',
})

export default function GlobalNotFound() {
  return (
    <html lang="en" className={schibsted.variable}>
      <head><title>Page not found | Expats.fi</title><meta name="robots" content="noindex, follow" /></head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <NotFoundPage />
        <SiteFooter />
      </body>
    </html>
  )
}
