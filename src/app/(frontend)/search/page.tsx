import type { Metadata } from 'next'
import Link from 'next/link'

import { HeroBackdrop } from '@/components/HeroBackdrop'
import { areaGuides } from '@/data/areas'
import { eatSpots } from '@/data/eats'
import { exploreListings } from '@/data/explore'
import { finlandFoodGuides } from '@/data/finland-food-guides'
import { sportsListings } from '@/data/sports'
import { getCommunityPosts } from '@/lib/community'
import { getArticles, getBusinesses, getEmbassies, getEvents, getNewsStories, labels } from '@/lib/content'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Search Expats.fi',
  description: 'Search practical Finland guides, events, places, businesses, community conversations and more.',
  robots: { index: false, follow: true },
}

type SearchResult = {
  href: string
  label: string
  title: string
  description: string
  meta?: string
}

type ResultGroup = {
  title: string
  eyebrow: string
  results: SearchResult[]
  moreHref?: string
  moreLabel?: string
}

const hubs = [
  { title: 'Start here', description: 'Your first 90 days, registrations and what to sort in what order.', href: '/start-here/', keywords: 'new arrival moving first months checklist registration' },
  { title: 'Immigration and permits', description: 'Residence permits, EU registration, citizenship and official paperwork.', href: '/resources/?category=Immigration%20%26%20permits#resource-library', keywords: 'migri visa permit immigration eu citizen residence' },
  { title: 'Housing', description: 'Finding a home, reading the lease, deposits, utilities and housing problems.', href: '/housing/', keywords: 'rent flat apartment landlord electricity home' },
  { title: 'Work and money', description: 'Jobs, tax cards, banking, pay, benefits and getting your footing.', href: '/resources/?category=Work%20%26%20money#resource-library', keywords: 'job work career tax bank kela salary unemployment' },
  { title: 'Family', description: 'Healthcare, daycare, schools, support and the admin nobody explains.', href: '/family/', keywords: 'children kids school daycare health maisa parent baby' },
  { title: 'Learn Finnish', description: 'Free resources, courses, apps, podcasts and places to practise.', href: '/learn-finnish/', keywords: 'language finnish suomi yki course integration' },
  { title: 'Study in Finland', description: 'Universities, vocational education, integration training and flexible study routes.', href: '/study/', keywords: 'university school vocational degree student education' },
  { title: 'When things go wrong', description: 'Urgent health, housing trouble, scams, work problems and the right place to ask.', href: '/help/', keywords: 'emergency crisis police scam problem help 112' },
  { title: 'Community', description: 'Meet people, find groups, ask questions and support expat-owned businesses.', href: '/community/', keywords: 'friends groups meetup people social board' },
  { title: 'Events', description: 'Fresh Helsinki festivals, gatherings, markets and memorable nights.', href: '/events/', keywords: 'happening concert festival market free weekend' },
  { title: 'Food and drink', description: 'Finnish dishes, recipes, cafés and neighbourhood places worth knowing.', href: '/eats/', keywords: 'restaurant cafe coffee food recipe eat dinner lunch' },
  { title: 'Neighbourhood guides', description: 'Local walks, honest area notes and good places around Helsinki.', href: '/areas/', keywords: 'area live neighbourhood district kallio toolo helsinki' },
  { title: 'Things to do', description: 'Museums, islands, saunas, libraries, beaches and family days out.', href: '/explore/', keywords: 'attraction museum sauna beach island free family' },
  { title: 'Sports and activities', description: 'Teams, beginner sessions, facilities and ways to get moving.', href: '/sports/', keywords: 'sport club gym exercise running swimming rugby' },
  { title: 'News', description: 'Useful Finland news with the background and practical meaning included.', href: '/news/', keywords: 'latest update law change helsinki finland' },
  { title: 'Business directory', description: 'Warm profiles of expat-owned businesses across Finland.', href: '/businesses/', keywords: 'business service shop expat owned directory' },
  { title: 'Embassies and consulates', description: 'Find your country’s official representation in Finland.', href: '/embassies/', keywords: 'embassy consulate passport country diplomatic' },
] as const

function searchable(value: string) {
  return value.toLocaleLowerCase('en').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function matches(query: string, ...values: Array<string | undefined | null>) {
  const haystack = searchable(values.filter(Boolean).join(' '))
  return searchable(query).split(/\s+/).filter(Boolean).every((word) => haystack.includes(word))
}

function excerpt(value: string, maxLength = 190) {
  const clean = value.trim().replace(/\s+/g, ' ')
  return clean.length > maxLength ? `${clean.slice(0, maxLength).trimEnd()}…` : clean
}

function ResultSection({ group }: { group: ResultGroup }) {
  if (!group.results.length) return null
  const headingId = `search-${group.eyebrow.replace(/\W+/g, '-').toLowerCase()}`
  return (
    <section className="site-search-results__group" aria-labelledby={headingId}>
      <div className="site-search-results__heading">
        <div><p className="eyebrow">{group.eyebrow}</p><h2 id={headingId}>{group.title}</h2></div>
        <span>{group.results.length} {group.results.length === 1 ? 'match' : 'matches'}</span>
      </div>
      <div className="site-search-results__grid">
        {group.results.map((result) => (
          <article className="site-search-card" key={`${result.label}-${result.href}`}>
            <div><span>{result.label}</span>{result.meta && <small>{result.meta}</small>}</div>
            <h3><Link href={result.href}>{result.title}</Link></h3>
            <p>{excerpt(result.description)}</p>
            <Link className="text-link" href={result.href}>Open this result <span aria-hidden="true">→</span></Link>
          </article>
        ))}
      </div>
      {group.moreHref && <Link className="site-search-results__more" href={group.moreHref}>{group.moreLabel || 'See more'} <span aria-hidden="true">→</span></Link>}
    </section>
  )
}

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = '' } = await searchParams
  const query = q.trim().slice(0, 100)
  const encodedQuery = encodeURIComponent(query)

  if (!query) {
    return (
      <main id="main" className="site-search-page">
        <header className="site-search-hero photo-hero photo-hero--dark">
          <HeroBackdrop src="/images/heroes/resources-documents-laptop.webp" position="center 48%" />
          <div className="shell site-search-hero__inner">
            <div><p className="eyebrow">Search Expats.fi</p><h1>One search. The whole useful bit.</h1><p>Guides, events, neighbourhoods, food, sports, businesses, community conversations and official contacts all live here.</p></div>
            <form className="site-search-form" action="/search/" method="get" role="search">
              <label htmlFor="site-search-query">What are you trying to find?</label>
              <div><input id="site-search-query" name="q" autoFocus placeholder="Kela, Kallio, rugby, daycare…" /><button type="submit">Search everything</button></div>
            </form>
          </div>
        </header>
        <section className="shell site-search-starts" aria-labelledby="search-starts-heading">
          <div className="section-heading"><div><p className="eyebrow">Good places to begin</p><h2 id="search-starts-heading">Or choose the part of life in front of you.</h2></div><p>You do not need the perfect search phrase. Pick a door and keep moving.</p></div>
          <div className="site-search-starts__grid">{hubs.slice(0, 12).map((hub) => <Link href={hub.href} key={hub.title}><strong>{hub.title}</strong><span>{hub.description}</span><i aria-hidden="true">→</i></Link>)}</div>
        </section>
      </main>
    )
  }

  const [articles, newsStories, businesses, events, embassies, communityPosts] = await Promise.all([
    getArticles({ limit: 250 }),
    getNewsStories({ limit: 100 }),
    getBusinesses({ limit: 100 }),
    getEvents({ upcoming: true }),
    getEmbassies(),
    getCommunityPosts({ query, limit: 8 }),
  ])

  const hubResults: SearchResult[] = hubs.filter((hub) => matches(query, hub.title, hub.description, hub.keywords)).map((hub) => ({ href: hub.href, label: 'Section', title: hub.title, description: hub.description }))
  const guideResults: SearchResult[] = articles.filter((article) => matches(query, article.title, article.description, article.category)).slice(0, 12).map((article) => ({ href: `/resources/${article.slug}/`, label: article.category, title: article.title, description: article.description, meta: `${article.readingMinutes} min read` }))
  const newsResults: SearchResult[] = newsStories.filter((story) => matches(query, story.title, story.standfirst, story.practicalSummary, story.category)).slice(0, 10).map((story) => ({ href: `/news/${story.slug}/`, label: 'News', title: story.title, description: story.standfirst, meta: story.category }))
  const eventResults: SearchResult[] = events.filter((event) => matches(query, event.title, event.blurb, event.location, event.district, event.category)).slice(0, 12).map((event) => ({ href: `/events/${event.slug}/`, label: 'Event', title: event.title, description: event.blurb, meta: `${event.dateLabel} · ${event.location}` }))
  const businessResults: SearchResult[] = businesses.filter((business) => matches(query, business.name, business.summary, ...labels(business.categories), ...labels(business.locations))).slice(0, 12).map((business) => ({ href: `/businesses/${business.slug}/`, label: 'Expat-owned business', title: business.name, description: business.summary, meta: [...labels(business.categories), ...labels(business.locations)].slice(0, 3).join(' · ') }))
  const communityResults: SearchResult[] = communityPosts.map((post) => ({ href: `/community/board/${post.slug}/`, label: 'Community conversation', title: post.title, description: post.body }))
  const embassyResults: SearchResult[] = embassies.filter((embassy) => matches(query, embassy.country, embassy.missionName, embassy.city, embassy.hostCountry)).slice(0, 12).map((embassy) => ({ href: `/embassies/${embassy.slug}/`, label: 'Embassy or consulate', title: embassy.country, description: embassy.missionName, meta: embassy.city || undefined }))
  const localResults: SearchResult[] = [
    ...areaGuides.filter((guide) => matches(query, guide.title, guide.summary, guide.label, guide.goodFor, ...(guide.tags || []))).map((guide) => ({ href: `/areas/${guide.slug}/`, label: 'Neighbourhood guide', title: guide.title, description: guide.summary })),
    ...exploreListings.filter((listing) => matches(query, listing.name, listing.category, listing.area, listing.blurb, ...listing.tags)).map((listing) => ({ href: `/explore/${listing.slug}/`, label: listing.category, title: listing.name, description: listing.blurb, meta: listing.area })),
    ...eatSpots.filter((spot) => matches(query, spot.name, spot.area, spot.neighbourhood, spot.kind, spot.blurb, ...spot.moods)).map((spot) => ({ href: `/eats/?q=${encodeURIComponent(spot.name)}#helsinki-food`, label: 'Food and drink', title: spot.name, description: spot.blurb, meta: `${spot.neighbourhood} · ${spot.price}` })),
    ...finlandFoodGuides.filter((guide) => matches(query, guide.title, guide.summary, guide.label, ...(guide.tags || []))).map((guide) => ({ href: `/eats/finland-on-a-plate/${guide.slug}/`, label: 'Finland on a Plate', title: guide.title, description: guide.summary })),
    ...sportsListings.filter((listing) => matches(query, listing.name, listing.type, listing.category, listing.area, listing.blurb, ...listing.sports, ...listing.languages)).map((listing) => ({ href: `/sports/${listing.slug}/`, label: 'Sport or activity', title: listing.name, description: listing.blurb, meta: `${listing.category} · ${listing.area}` })),
  ].slice(0, 24)

  const groups: ResultGroup[] = [
    { eyebrow: 'Best place to start', title: 'Useful sections', results: hubResults },
    { eyebrow: 'Practical help', title: 'Guides and explainers', results: guideResults, moreHref: `/resources/?q=${encodedQuery}#resource-library`, moreLabel: 'See all matching guides' },
    { eyebrow: 'Around Helsinki', title: 'Places, food, areas and activities', results: localResults },
    { eyebrow: 'What is happening', title: 'Upcoming events', results: eventResults, moreHref: `/events/?q=${encodedQuery}#events-listing`, moreLabel: 'Search the full events calendar' },
    { eyebrow: 'The useful news', title: 'News and current explainers', results: newsResults },
    { eyebrow: 'Support local', title: 'Expat-owned businesses', results: businessResults, moreHref: `/businesses/?q=${encodedQuery}#business-directory`, moreLabel: 'Search the full business directory' },
    { eyebrow: 'From the community', title: 'Member conversations', results: communityResults, moreHref: `/community/board/?q=${encodedQuery}`, moreLabel: 'Search the community board' },
    { eyebrow: 'Official contacts', title: 'Embassies and consulates', results: embassyResults, moreHref: `/embassies/?q=${encodedQuery}`, moreLabel: 'Search every country' },
  ]
  const totalResults = groups.reduce((total, group) => total + group.results.length, 0)

  return (
    <main id="main" className="site-search-page">
      <header className="site-search-hero site-search-hero--results photo-hero photo-hero--dark">
        <HeroBackdrop src="/images/heroes/resources-documents-laptop.webp" position="center 48%" />
        <div className="shell site-search-hero__inner">
          <div><p className="eyebrow">Search Expats.fi</p><h1>Results for “{query}”</h1><p>{totalResults ? `${totalResults} useful matches from across the site.` : 'No exact match yet. Try a broader word or use one of the routes below.'}</p></div>
          <form className="site-search-form" action="/search/" method="get" role="search">
            <label htmlFor="site-search-query">Search again</label>
            <div><input id="site-search-query" name="q" defaultValue={query} /><button type="submit">Search everything</button></div>
          </form>
        </div>
      </header>
      <div className="shell site-search-results">
        {totalResults ? groups.map((group) => <ResultSection group={group} key={group.eyebrow} />) : (
          <section className="site-search-no-results"><span aria-hidden="true">?</span><div><h2>Try one wider word.</h2><p>Search for the job instead of the office, or the area instead of the exact venue. “Tax”, “Kallio”, “kids” and “Finnish” are all good starting points.</p><Link className="text-link" href="/search/">Browse the main sections <span aria-hidden="true">→</span></Link></div></section>
        )}
      </div>
    </main>
  )
}
