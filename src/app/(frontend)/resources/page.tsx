import type { Metadata } from 'next'

import { ArticleCard } from '@/components/ArticleCard'
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

  return (
    <main id="main">
      <header className="page-hero"><div className="shell page-hero__inner"><p className="eyebrow">Life in Finland</p><h1>Practical answers, without the runaround.</h1><p>Use these guides as a clear starting point, then confirm changing rules with the Finnish authority responsible.</p></div></header>
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
