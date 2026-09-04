import type { Metadata } from 'next'
import { headers } from 'next/headers'

import { BusinessCard } from '@/components/BusinessCard'
import { HeroBackdrop } from '@/components/HeroBackdrop'
import { getBusinesses, labels } from '@/lib/content'
import { getCurrentMember } from '@/lib/member-auth'
import { getSavedBusinessIds } from '@/lib/saved-businesses'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Expat-owned businesses in Finland',
  description: 'Find restaurants, services and independent businesses owned by people who moved to Finland.',
  alternates: { canonical: '/businesses/' },
}

export default async function BusinessesPage({ searchParams }: { searchParams: Promise<{ category?: string; location?: string; q?: string }> }) {
  const { category = '', location = '', q = '' } = await searchParams
  const [businesses, allBusinesses] = await Promise.all([
    getBusinesses({ category: category || undefined, location: location || undefined, query: q || undefined }),
    getBusinesses(),
  ])
  const member = await getCurrentMember(await headers())
  const savedBusinessIds = member ? await getSavedBusinessIds(member.id) : new Set<number>()
  const categories = [...new Set(allBusinesses.flatMap((business) => labels(business.categories)))].sort()
  const locations = [...new Set(allBusinesses.flatMap((business) => labels(business.locations)))].sort()

  return (
    <main id="main">
      <header className="page-hero photo-hero">
        <HeroBackdrop src="/images/heroes/businesses-bookshop-owner.webp" position="center 45%" />
        <div className="shell page-hero__inner"><p className="eyebrow">Community directory</p><h1>Find expat-owned businesses across Finland.</h1><p>Spend locally and discover the people building restaurants, services and independent companies here.</p></div>
      </header>
      <section className="shell listing-section filter-target" id="business-directory" aria-label="Business directory">
        <form className="filter-form" action="/businesses/#business-directory" method="get" role="search" data-analytics-event="search_submitted" data-analytics-section="businesses">
          <label>Search<input name="q" defaultValue={q} placeholder="Pizza, barber, Helsinki…" /></label>
          <label>Category<select name="category" defaultValue={category}><option value="">All categories</option>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label>Location<select name="location" defaultValue={location}><option value="">All locations</option>{locations.map((item) => <option key={item}>{item}</option>)}</select></label>
          <button type="submit">Find businesses</button>
        </form>
        <p className="results-note">{businesses.length} {businesses.length === 1 ? 'business' : 'businesses'} found</p>
        {businesses.length ? <div className="business-grid">{businesses.map((business) => <BusinessCard business={business} key={business.id} showSave saved={savedBusinessIds.has(business.id)} />)}</div> : <div className="empty-state"><h2>No businesses match those filters</h2><p>Try removing a filter or searching for a wider area.</p></div>}
      </section>
    </main>
  )
}
