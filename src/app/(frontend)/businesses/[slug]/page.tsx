import type { Metadata } from 'next'
import Image from 'next/image'
import { headers } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { SaveBusinessButton } from '@/components/SaveBusinessButton'
import { JsonLd } from '@/components/JsonLd'
import { ShareButton } from '@/components/ShareButton'
import { businessVerificationDescription, businessVerificationLabel, isPubliclyVerifiedBusiness } from '@/lib/business-verification'
import { getBusiness, labels } from '@/lib/content'
import { getCurrentMember } from '@/lib/member-auth'
import { getSavedBusinessIds } from '@/lib/saved-businesses'
import { absoluteUrl, breadcrumbJsonLd, defaultSocialImage } from '@/lib/seo'

export const dynamic = 'force-dynamic'

function displayVerificationDate(value: string | null | undefined): string {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date)
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const business = await getBusiness(slug)
  if (!business) return {}
  const image = business.imagePath ? absoluteUrl(business.imagePath) : defaultSocialImage
  return {
    title: business.name,
    description: business.summary,
    alternates: { canonical: `/businesses/${business.slug}/` },
    openGraph: { title: business.name, description: business.summary, type: 'website', url: `/businesses/${business.slug}/`, images: [image] },
    twitter: { card: 'summary_large_image', title: business.name, description: business.summary, images: [image] },
  }
}

export default async function BusinessPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const business = await getBusiness(slug)
  if (!business) notFound()
  const member = await getCurrentMember(await headers())
  const saved = member ? (await getSavedBusinessIds(member.id)).has(business.id) : false
  const categories = labels(business.categories)
  const locations = labels(business.locations)
  const publiclyVerified = isPubliclyVerifiedBusiness(business.verificationStatus)
  const verificationLabel = businessVerificationLabel(business.verificationStatus)
  const verificationDescription = businessVerificationDescription(business.verificationStatus)
  const verificationDate = displayVerificationDate(business.verifiedAt)
  // This force-dynamic server page checks the request time so short-lived offers disappear automatically.
  // eslint-disable-next-line react-hooks/purity
  const requestTime = Date.now()
  const hasCurrentOffer = Boolean(
    business.currentOffer &&
    (!business.currentOfferEndsAt || new Date(business.currentOfferEndsAt).getTime() >= requestTime),
  )
  const sameAs = [business.website, business.instagram, business.facebook, business.youtube, business.tiktok].filter((value): value is string => Boolean(value))

  return (
    <main id="main"><div className="shell detail-shell business-profile">
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: business.name, description: business.summary, url: absoluteUrl(`/businesses/${business.slug}/`), image: business.imagePath ? absoluteUrl(business.imagePath) : undefined, logo: business.logoPath ? absoluteUrl(business.logoPath) : undefined, telephone: business.phone || undefined, address: { '@type': 'PostalAddress', streetAddress: business.address, addressCountry: 'FI' }, sameAs },
        breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Business directory', path: '/businesses/' }, { name: business.name, path: `/businesses/${business.slug}/` }]),
      ]} />
      <Link className="back-link" href="/businesses/">← Business directory</Link>
      <header className="business-profile__header">
        <div><p className="eyebrow">{categories.join(' · ')}</p><h1>{business.name}</h1><p className="business-profile__summary">{business.summary}</p>{publiclyVerified && <p className="business-profile__verification" title={verificationDescription}><span aria-hidden="true">✓</span> {verificationLabel}{verificationDate && <span> · Last checked {verificationDate}</span>}</p>}<div className="business-profile__actions"><SaveBusinessButton businessSlug={business.slug} initialSaved={saved} /><ShareButton contentType="business" path={`/businesses/${business.slug}/`} title={business.name} text={business.summary} /></div></div>
        <div className={`business-profile__mark${business.logoPath ? ' business-profile__mark--logo' : ''}`} data-business={business.slug} aria-hidden={!business.logoPath}>
          {business.logoPath
            ? <Image src={business.logoPath} alt={business.logoAlt || `${business.name} logo`} width={220} height={220} />
            : business.name.slice(0, 1)}
        </div>
      </header>
      <div className="business-profile__body">
        <article>
          <h2>About {business.name}</h2>
          <p>{business.description}</p>
          {business.imagePath && <figure className="business-profile__image"><Image src={business.imagePath} alt={business.imageAlt || business.name} width={1200} height={900} /></figure>}
        </article>
        <aside className="facts">
          {hasCurrentOffer && <div className="facts__offer"><strong>Current offer</strong><span>{business.currentOffer}</span></div>}
          <div><strong>Locations</strong><span>{locations.join(', ')}</span></div>
          <div><strong>Address or service area</strong><span>{business.address}</span></div>
          {business.phone && <div><strong>Phone</strong><a href={`tel:${business.phone.replace(/\s/g, '')}`} data-analytics-event="business_contact_clicked" data-analytics-label={business.slug} data-analytics-position="phone">{business.phone}</a></div>}
          {business.website && <div><strong>Website</strong><a href={business.website} target="_blank" rel="noreferrer" data-analytics-event="business_website_clicked" data-analytics-label={business.slug}>Visit {business.name} ↗</a></div>}
          {business.email && <div><strong>Email</strong><a href={`mailto:${business.email}`} data-analytics-event="business_contact_clicked" data-analytics-label={business.slug} data-analytics-position="email">{business.email}</a></div>}
          {business.newsletterUrl && <div><strong>Newsletter</strong><a href={business.newsletterUrl} target="_blank" rel="noreferrer" data-analytics-event="business_contact_clicked" data-analytics-label={business.slug} data-analytics-position="newsletter">Keep up with events ↗</a></div>}
          {business.bookingUrl && <div><strong>Booking</strong><a href={business.bookingUrl} target="_blank" rel="noreferrer" data-analytics-event="business_contact_clicked" data-analytics-label={business.slug} data-analytics-position="booking">Book an appointment ↗</a></div>}
          {business.whatsapp && <div><strong>WhatsApp</strong><a href={business.whatsapp} target="_blank" rel="noreferrer" data-analytics-event="business_contact_clicked" data-analytics-label={business.slug} data-analytics-position="whatsapp">Send a message ↗</a></div>}
          {business.instagram && <div><strong>Instagram</strong><a href={business.instagram} target="_blank" rel="noreferrer">{business.instagramHandle || 'Instagram'} ↗</a></div>}
          {business.facebook && <div><strong>Facebook</strong><a href={business.facebook} target="_blank" rel="noreferrer">Facebook ↗</a></div>}
          {business.tiktok && <div><strong>TikTok</strong><a href={business.tiktok} target="_blank" rel="noreferrer">TikTok ↗</a></div>}
          {business.youtube && <div><strong>YouTube</strong><a href={business.youtube} target="_blank" rel="noreferrer">YouTube ↗</a></div>}
        </aside>
      </div>
    </div></main>
  )
}
