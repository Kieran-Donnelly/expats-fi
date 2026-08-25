import type { Metadata } from 'next'
import Link from 'next/link'

import { cultureGuides } from '@/data/culture'

export const metadata: Metadata = {
  title: 'How Finland actually works',
  description: 'Warm, practical guides to Finnish communication, friendship, home life, sauna and workplace culture without the tired stereotypes.',
  alternates: { canonical: '/culture/' },
}

export default function CulturePage() {
  return (
    <main id="main" className="family-hub">
      <header className="page-hero"><div className="shell page-hero__inner"><p className="eyebrow">How Finland actually works</p><h1>The cultural bits nobody puts on the residence permit.</h1><p>Friendly answers to the everyday questions that can leave you wondering whether you have missed something.</p></div></header>

      <section className="shell family-stages" aria-labelledby="culture-start-heading">
        <div className="section-heading"><div><p className="eyebrow">Start with the situation</p><h2 id="culture-start-heading">Start with the bit that feels unfamiliar.</h2></div><p>These are common patterns, not a rulebook for every Finn. Use them as helpful context, then pay attention to the person in front of you.</p></div>
        <div className="family-stage-grid">{cultureGuides.map((guide) => <Link href={`/culture/${guide.slug}/`} key={guide.slug}><span>{guide.number}</span><strong>{guide.label}</strong><small>{guide.title}</small><i aria-hidden="true">↗</i></Link>)}</div>
      </section>

      <section className="shell section family-guides" aria-labelledby="culture-guides-heading">
        <div className="section-heading"><div><p className="eyebrow">No stereotype bingo</p><h2 id="culture-guides-heading">Warm context, practical answers.</h2></div><p>Each guide explains what people often mean, where expectations differ and how to stay yourself without missing the local signal.</p></div>
        <div className="family-guide-grid">{cultureGuides.map((guide) => <article className="family-guide-card" key={guide.slug}><div><span>{guide.number}</span><small>{guide.label}</small></div><h3><Link href={`/culture/${guide.slug}/`}>{guide.title}</Link></h3><p>{guide.summary}</p>{guide.tags && <div className="explore-card__tags">{guide.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}<Link className="text-link" href={`/culture/${guide.slug}/`}>Open the guide <span aria-hidden="true">→</span></Link></article>)}</div>
      </section>

      <section className="shell family-local-note"><div><p className="eyebrow">A useful warning</p><h2>Culture is context, not an excuse.</h2></div><p>Directness can explain a short reply. It does not excuse discrimination, harassment or somebody repeatedly treating you badly. Use cultural context to reduce needless worry, not to talk yourself out of reasonable boundaries.</p></section>
    </main>
  )
}
