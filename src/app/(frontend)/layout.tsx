import type { Metadata } from 'next'
import { Schibsted_Grotesk } from 'next/font/google'
import type { ReactNode } from 'react'

import { PrivacyConsent } from '@/components/PrivacyConsent'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

import 'flag-icons/css/flag-icons.min.css'
import 'leaflet/dist/leaflet.css'
import './styles.css'
import './sports.css'
import './family.css'
import './eats.css'
import './study.css'

import { defaultSocialImage } from '@/lib/seo'

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
      { url: '/favicon-expats-mark-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-expats-mark-48.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/favicon-expats-mark-32.png',
    apple: [{ url: '/apple-touch-icon-expats-mark.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    siteName: 'Expats.fi',
    type: 'website',
    locale: 'en_FI',
    images: [{ url: defaultSocialImage, width: 1600, height: 1067, alt: 'Helsinki Cathedral beneath a blue Finnish sky' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [defaultSocialImage],
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
}

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={schibsted.variable}>
      <body>
        <PrivacyConsent />
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
