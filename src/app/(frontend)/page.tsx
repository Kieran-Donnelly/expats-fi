import Image from 'next/image'
import Link from 'next/link'

import { ArticleCard } from '@/components/ArticleCard'
import { BusinessCard } from '@/components/BusinessCard'
import { EventCard } from '@/components/EventCard'
import { HelsinkiNow } from '@/components/HelsinkiNow'
import { getArticles, getBusinesses, getEvents } from '@/lib/content'
import { getHelsinkiWeather } from '@/lib/weather'

export const dynamic = 'force-dynamic'

const practicalHubs = [
  { number: '01', label: 'Start here', detail: 'The first 90 days, official systems and what to do in what order', href: '/start-here/', icon: 'flag' },
  { number: '02', label: 'Housing', detail: 'Finding a home, reading the lease and sorting problems early', href: '/housing/', icon: 'home' },
  { number: '03', label: 'Family', detail: 'Healthcare, daycare, schools, support and the admin nobody explains', href: '/family/', icon: 'people' },
  { number: '04', label: 'Learn Finnish', detail: 'Free resources, courses, apps, podcasts and places to practise', href: '/learn-finnish/', icon: 'speech' },
  { number: '05', label: 'Study in Finland', detail: 'Degrees, vocational routes, integration training and flexible ways to learn', href: '/study/', icon: 'book' },
  { number: '06', label: 'Work and money', detail: 'Jobs, tax, banking, benefits and getting your footing', href: '/resources/?category=Work%20%26%20money#resource-library', icon: 'case' },
  { number: '07', label: 'How Finland works', detail: 'Directness, punctuality, friendship and the cultural bits between the rules', href: '/culture/', icon: 'spark' },
  { number: '08', label: 'When things go wrong', detail: 'Urgent health, housing trouble, scams, work problems and the right place to ask for help', href: '/help/', icon: 'lifebuoy' },
] as const

const helsinkiHubs = [
  { label: 'Events', detail: 'What is actually happening around Helsinki', href: '/events/', icon: 'calendar' },
  { label: 'Food & Drink', detail: 'Finnish dishes and recipes, plus cafés and places worth planning dinner around', href: '/eats/', icon: 'food' },
  { label: 'Neighbourhoods', detail: 'Eleven local guides with walks, food and honest area notes', href: '/areas/', icon: 'map' },
  { label: 'Things to do', detail: 'Museums, islands, saunas, libraries and family days out', href: '/explore/', icon: 'compass' },
  { label: 'Sports and activities', detail: 'Teams, beginner sessions and places to get moving', href: '/sports/', icon: 'ball' },
  { label: 'Meet people', detail: 'Language cafés, groups, volunteering and routes into community', href: '/community/', icon: 'people' },
] as const

function QuickIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    flag: <><path d="M5 21V4M5 5h12l-2 4 2 4H5" /></>,
    home: <><path d="m3 11 9-7 9 7v9H3Z" /><path d="M9 20v-6h6v6" /></>,
    people: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2" /><path d="M3 20c0-4 2-6 6-6s6 2 6 6M15 15c4 0 6 2 6 5" /></>,
    speech: <><path d="M4 5h16v11H9l-5 4Z" /><path d="M8 9h8M8 12h5" /></>,
    book: <><path d="M4 4h6c2 0 3 1 3 3v13c0-2-1-3-3-3H4Z" /><path d="M20 4h-6c-1 0-1 .3-1 1v15c0-2 1-3 3-3h4Z" /></>,
    case: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V4h8v3M3 12h18" /></>,
    spark: <><path d="M12 2c0 6-3 9-9 10 6 1 9 4 9 10 0-6 3-9 9-10-6-1-9-4-9-10Z" /></>,
    lifebuoy: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path d="m5.6 5.6 4.3 4.3M14.1 14.1l4.3 4.3M18.4 5.6l-4.3 4.3M9.9 14.1l-4.3 4.3" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4M17 3v4M3 10h18" /></>,
    food: <><path d="M6 3v7M3 3v5c0 2 1 3 3 3s3-1 3-3V3M6 11v10M16 3v18M16 3c3 2 5 5 5 9h-5" /></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3Z" /><path d="M9 3v15M15 6v15" /></>,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5Z" /></>,
    ball: <><circle cx="12" cy="12" r="9" /><path d="m12 7 4 3-1.5 5h-5L8 10ZM4 11l4-1M7 19l2.5-4M17 19l-2.5-4M20 10l-4-1" /></>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>
}

export default async function HomePage() {
  const hasDatabase = Boolean(process.env.DATABASE_URL)
  const [articles, businesses, upcoming, weather] = await Promise.all([
    hasDatabase ? getArticles({ limit: 3 }) : Promise.resolve([]),
    getBusinesses({ limit: 3 }),
    hasDatabase ? getEvents({ upcoming: true }) : Promise.resolve([]),
    getHelsinkiWeather(),
  ])
  const upcomingEvents = upcoming.slice(0, 3)

  return (
    <main id="main">
      <section className="home-hero">
        <div className="home-hero__media" aria-hidden="true">
          <Image
            src="/images/heroes/home-helsinki-cathedral-v2.webp"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="shell home-hero__inner">
          <div className="home-hero__layout">
            <div className="home-hero__copy">
              <p className="trust-pill"><span />Welcome to Expats.fi</p>
              <h1>Finland is easier when someone shows you where to start.</h1>
              <p className="home-hero__lede">We are building the useful, friendly guide we wish we had when we arrived: clear help with the serious stuff, good reasons to get out of the house and a place to find the people making life here better.</p>
              <div className="home-hero__actions">
                <Link className="button" href="/start-here/">I’m new here</Link>
                <Link className="button button--quiet" href="/explore/">Explore Helsinki</Link>
              </div>
              <p className="home-hero__made-here">Built in Finland by two Kiwi expats. Independent and free to use.</p>
            </div>
            <HelsinkiNow initialNow={new Date().toISOString()} weather={weather} />
          </div>

          <form className="search-box" action="/search/" method="get" role="search" data-analytics-event="search_submitted" data-analytics-section="home">
            <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5" /><path d="m13 13 4 4" /></svg>
            <label className="sr-only" htmlFor="home-search">Search Expats.fi</label>
            <input id="home-search" name="q" placeholder="What are you trying to sort out?" />
            <button type="submit">Search</button>
          </form>
          <div className="popular-links"><span>Good places to begin</span><Link href="/start-here/first-90-days-in-finland/">your first 90 days</Link><Link href="/community/">meet people</Link><Link href="/learn-finnish/">learn Finnish</Link><Link href="/study/">study in Finland</Link><Link href="/events/">what’s on</Link><Link href="/areas/">explore an area</Link></div>
        </div>
      </section>

      <section className="home-purpose" aria-label="What Expats.fi is here to do">
        <div className="shell home-purpose__grid">
          <Link href="/start-here/"><span>01</span><div><strong>Sort the serious stuff.</strong><p>Permits, homes, work, money and family systems in ordinary English.</p></div><i aria-hidden="true">→</i></Link>
          <Link href="/explore/"><span>02</span><div><strong>Actually enjoy living here.</strong><p>Good food, local events, neighbourhoods and days worth leaving the apartment for.</p></div><i aria-hidden="true">→</i></Link>
          <Link href="/community/"><span>03</span><div><strong>Find your people.</strong><p>Community groups, sports, language practice and businesses built by fellow expats.</p></div><i aria-hidden="true">→</i></Link>
        </div>
      </section>

      <section className="shell section home-pathways" aria-labelledby="pathways-heading">
        <div className="section-heading">
          <div><p className="eyebrow">Living in Finland</p><h2 id="pathways-heading">What do you need help with today?</h2></div>
          <p>Start with the thing in front of you. The rest of Finland can wait its turn.</p>
        </div>
        <div className="home-hub-grid">
          {practicalHubs.map((hub) => (
            <Link href={hub.href} key={hub.label}>
              <div><QuickIcon name={hub.icon} /><span>{hub.number}</span></div>
              <strong>{hub.label}</strong><small>{hub.detail}</small><i aria-hidden="true">→</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-arrival">
        <div className="shell home-arrival__inner">
          <div className="home-arrival__copy"><p className="eyebrow">New to Finland?</p><h2>Your first 90 days, in the right order.</h2><p>One calm route through Migri, DVV, tax, banking, Kela, healthcare and the ordinary jobs that turn arriving into actually living here.</p><Link className="button" href="/start-here/first-90-days-in-finland/">Open the 90-day guide</Link></div>
          <ol className="home-arrival__steps">
            <li><span>01</span><strong>Before you arrive</strong><small>Legal route, documents and a sensible buffer</small></li>
            <li><span>02</span><strong>The first two weeks</strong><small>Registration, address, tax and daily basics</small></li>
            <li><span>03</span><strong>By day 90</strong><small>Banking, healthcare, language and a routine</small></li>
          </ol>
        </div>
      </section>

      <section className="shell section home-helsinki" aria-labelledby="helsinki-heading">
        <div className="section-heading">
          <div><p className="eyebrow">Make a life here</p><h2 id="helsinki-heading">Go somewhere. Eat something. Meet somebody.</h2></div>
          <p>Life in Finland should not be one endless admin queue. These are the doors into Helsinki we keep opening.</p>
        </div>
        <div className="home-helsinki-grid">
          {helsinkiHubs.map((hub) => <Link href={hub.href} key={hub.label}><QuickIcon name={hub.icon} /><strong>{hub.label}</strong><small>{hub.detail}</small><span>Open the hub →</span></Link>)}
        </div>
      </section>

      {upcomingEvents.length > 0 && <section className="home-events-band">
        <div className="shell section home-events" aria-labelledby="home-events-heading">
          <div className="section-heading">
            <div><p className="eyebrow">Helsinki, right now</p><h2 id="home-events-heading">A reason to leave the apartment.</h2></div>
            <Link className="text-link" href="/events/">Explore all events <span aria-hidden="true">→</span></Link>
          </div>
          <div className="event-grid">{upcomingEvents.map((event) => <EventCard event={event} key={event.slug} />)}</div>
        </div>
      </section>}

      <section className="business-preview">
        <div className="shell section">
          <div className="section-heading">
            <div><p className="eyebrow">Expat-owned in Finland</p><h2>Spend local. Meet the people building here.</h2></div>
            <Link className="text-link" href="/businesses/#business-directory">Open the directory <span aria-hidden="true">→</span></Link>
          </div>
          <div className="business-grid">{businesses.map((business) => <BusinessCard business={business} key={business.id} />)}</div>
          <div className="directory-callout"><div><strong>Know a business we should include?</strong><p>Help us grow the directory beyond the capital region.</p></div><Link className="button" href="/submit-business/" data-analytics-event="business_submission_started" data-analytics-section="home">List a business for free</Link></div>
        </div>
      </section>

      {articles.length > 0 && <section className="section shell home-reading" aria-labelledby="latest-heading">
        <div className="section-heading"><div><p className="eyebrow">Useful when you need it</p><h2 id="latest-heading">Practical reading, without taking over the front door.</h2></div><div className="home-reading__links"><Link className="text-link" href="/news/">Read the news <span aria-hidden="true">→</span></Link><Link className="text-link" href="/resources/">Browse every guide <span aria-hidden="true">→</span></Link></div></div>
        <div className="article-grid">{articles.map((article) => <ArticleCard article={article} key={article.id} />)}</div>
      </section>}
    </main>
  )
}
