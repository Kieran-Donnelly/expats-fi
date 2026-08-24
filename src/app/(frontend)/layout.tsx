import type { Metadata } from 'next'
import { Schibsted_Grotesk } from 'next/font/google'
import Script from 'next/script'
import type { ReactNode } from 'react'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

import 'flag-icons/css/flag-icons.min.css'
import 'leaflet/dist/leaflet.css'
import './styles.css'
import './sports.css'

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
  description: 'Practical guides for life in Finland, things to do in Helsinki, events, sports and a directory of expat-owned Finnish businesses.',
  icons: {
    icon: [
      { url: '/favicon-finland.svg', type: 'image/svg+xml' },
      { url: '/favicon-finland-32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon-finland.svg',
    apple: [{ url: '/apple-touch-icon-finland.png', sizes: '180x180', type: 'image/png' }],
  },
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CB5QYGM914"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CB5QYGM914');
          `}
        </Script>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
