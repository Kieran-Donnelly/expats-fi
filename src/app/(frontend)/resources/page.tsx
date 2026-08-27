import type { Metadata } from 'next'

import { ArticleCard } from '@/components/ArticleCard'
import { HeroBackdrop } from '@/components/HeroBackdrop'
import { getArticles } from '@/lib/content'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Life in Finland guides',
  description: 'Plain-English guides covering permits, work, money, healthcare, housing and everyday life in Finland.',
}

const categories = ['Immigration & permits', 'Work & money', 'Housing', 'Health & wellbeing', 'Getting around', 'Family', 'Everyday life']

export default async function ResourcesPage({ searchParams }: { searchParams: Promise<{ category?: string; q?: string }> }) {
  const { category = '', q = '' } = await searchParams
  const articles = await getArticles({ category: category || undefined, query: q || undefined })
  const isWorkAndMoney = category === 'Work & money'

  return (
    <main id="main">
      <header className="page-hero photo-hero">
        <HeroBackdrop
          src={isWorkAndMoney ? '/images/heroes/work-money-financial-planning.jpg' : '/images/heroes/resources-documents-laptop.webp'}
          position={isWorkAndMoney ? 'center 54%' : 'center 48%'}
        />
        <div className="shell page-hero__inner">
          <p className="eyebrow">{isWorkAndMoney ? 'Work and money' : 'Life in Finland'}</p>
          <h1>{isWorkAndMoney ? 'Work, tax and money without the mystery.' : 'Practical answers, without the runaround.'}</h1>
          <p>{isWorkAndMoney
            ? 'Practical help with finding work, understanding pay, banking, tax cards, benefits and the bits that only seem obvious after somebody explains them.'
            : 'Use these guides as a clear starting point, then confirm changing rules with the Finnish authority responsible.'}</p>
        </div>
      </header>
      <section className="shell listing-section" aria-label="Resource library">
        <form className="filter-form" action="/resources/" method="get" role="search">
          <label>Search<input name="q" defaultValue={q} placeholder="Permits, tax, healthcare…" /></label>
          <label>Topic<select name="category" defaultValue={category}><option value="">All topics</option>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
          <button type="submit">Find guides</button>
        </form>
        <p className="results-note">{articles.length} {articles.length === 1 ? 'guide' : 'guides'} found</p>
        {articles.length ? <div className="article-grid">{articles.map((article) => <ArticleCard article={article} key={article.id} />)}</div> : <div className="empty-state"><h2>No guides match that search</h2><p>Try a broader phrase or choose all topics.</p></div>}
      </section>
    </main>
  )
}
