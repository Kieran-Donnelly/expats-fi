import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'

import { ArticleCard } from '@/components/ArticleCard'
import { HeroBackdrop } from '@/components/HeroBackdrop'
import { getArticles } from '@/lib/content'
import { getCurrentMember } from '@/lib/member-auth'
import { getSavedArticleIds } from '@/lib/saved-articles'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Life in Finland guides',
  description: 'Plain-English guides covering permits, work, money, healthcare, housing and everyday life in Finland.',
}

const categories = ['Immigration & permits', 'Work & money', 'Housing', 'Health & wellbeing', 'Getting around', 'Family', 'Everyday life']

function getResourceHero(category: string, query: string) {
  if (category === 'Work & money') {
    return {
      src: '/images/heroes/work-money-financial-planning.webp',
      position: 'center 54%',
      eyebrow: 'Work and money',
      title: 'Work, tax and money without the mystery.',
      description: 'Practical help with finding work, understanding pay, banking, tax cards, benefits and the bits that only seem obvious after somebody explains them.',
    }
  }

  if (category === 'Immigration & permits') {
    return {
      src: '/images/heroes/immigration-permits.webp',
      position: 'center 42%',
      eyebrow: 'Immigration and permits',
      title: 'Find the route that actually fits your move.',
      description: 'Residence permits, EU registration, citizenship and the documents to check before dates, jobs or family plans become expensive.',
    }
  }

  if (query.trim().toLowerCase() === 'relocation') {
    return {
      src: '/images/heroes/moving-relocation.webp',
      position: 'center 46%',
      eyebrow: 'Moving to Finland',
      title: 'Pack the move in the right order.',
      description: 'Clear help with relocation services, belongings, storage, customs and the practical choices between deciding to move and getting the keys.',
    }
  }

  if (query.trim().toLowerCase() === 'registration') {
    return {
      src: '/images/heroes/registration-established.webp',
      position: 'center 42%',
      eyebrow: 'Getting established',
      title: 'Get your Finnish details connected.',
      description: 'Personal identity codes, addresses, municipality of residence and the registrations that unlock everyday services after you arrive.',
    }
  }

  return {
    src: '/images/heroes/resources-documents-laptop.webp',
    position: 'center 48%',
    eyebrow: 'Life in Finland',
    title: 'Practical answers, without the runaround.',
    description: 'Use these guides as a clear starting point, then confirm changing rules with the Finnish authority responsible.',
  }
}

export default async function ResourcesPage({ searchParams }: { searchParams: Promise<{ category?: string; q?: string }> }) {
  const { category = '', q = '' } = await searchParams
  const articles = await getArticles({ category: category || undefined, query: q || undefined })
  const member = await getCurrentMember(await headers())
  const savedArticleIds = member ? await getSavedArticleIds(member.id) : new Set<number>()
  const hero = getResourceHero(category, q)
  const hasFilters = Boolean(category || q.trim())
  const resultTitle = q.trim()
    ? `Guides matching “${q.trim()}”`
    : category
      ? `${category} guides`
      : 'All practical guides'

  return (
    <main id="main">
      <header className="page-hero photo-hero">
        <HeroBackdrop
          src={hero.src}
          position={hero.position}
        />
        <div className="shell page-hero__inner">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
        </div>
      </header>
      <section className="shell listing-section filter-target" id="resource-library" aria-label="Resource library">
        <form className="filter-form" action="/resources/#resource-library" method="get" role="search">
          <label>Search<input name="q" defaultValue={q} placeholder="Permits, tax, healthcare…" /></label>
          <label>Topic<select name="category" defaultValue={category}><option value="">All topics</option>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
          <button type="submit">Find guides</button>
        </form>
        <div className="resource-listing__heading">
          <div className="filter-results-copy"><p className="eyebrow">Guide library</p><h2>{resultTitle}</h2><p>{hasFilters ? 'The results below match your current search. Clear the filters whenever you want the full library back.' : 'Browse the full collection or use the search and topic filters to narrow things down.'}</p></div>
          <div className="filter-results-status"><p aria-live="polite">{articles.length} {articles.length === 1 ? 'guide' : 'guides'} found</p>{hasFilters && <Link href="/resources/#resource-library">Show everything</Link>}</div>
        </div>
        {articles.length ? <div className="article-grid">{articles.map((article) => <ArticleCard article={article} key={article.id} showSave saved={savedArticleIds.has(article.id)} />)}</div> : <div className="empty-state"><h2>No guides match that search</h2><p>Try a broader phrase or choose all topics.</p></div>}
      </section>
    </main>
  )
}
