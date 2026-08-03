import type { Metadata } from 'next'
import { Schibsted_Grotesk } from 'next/font/google'
import type { ReactNode } from 'react'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

import './styles.css'

const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-schibsted',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://expats.fi'),
  title: {
    default: 'Expats.fi | Living in Finland, made clearer',
    template: '%s | Expats.fi',
  },
  description: 'Practical guides for life in Finland and a directory of expat-owned Finnish businesses.',
  openGraph: {
    siteName: 'Expats.fi',
    type: 'website',
    locale: 'en_FI',
  },
}

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={schibsted.variable}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
