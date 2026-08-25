import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { familyGuides, getFamilyGuide } from '@/data/family'

export function generateStaticParams() {
  return familyGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getFamilyGuide(slug)
  if (!guide) return {}
  return { title: guide.title, description: guide.summary, alternates: { canonical: `/family/${guide.slug}/` } }
}

export default async function FamilyGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getFamilyGuide(slug)
  if (!guide) notFound()
  const related = familyGuides.filter((item) => item.slug !== guide.slug).slice(0, 3)

  return (
    <main id="main" className="family-detail">
      <div className="shell family-detail__shell">
        <Link className="back-link" href="/family/">← The full Family hub</Link>
        <header className="family-detail__header">
          <div><p className="eyebrow">{guide.number} · {guide.label}</p><h1>{guide.title}</h1><p>{guide.summary}</p></div>
          <aside><span>Best for</span><p>{guide.goodFor}</p><small>Information checked 25 August 2026</small></aside>
        </header>

        <div className="family-detail__layout">
          <article className="family-detail__story">
            <div className="family-detail__intro">{guide.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <section className="family-key-facts" aria-labelledby="key-facts-heading">
              <p className="eyebrow">The quick version</p><h2 id="key-facts-heading">Four things to know first</h2>
              <ul>{guide.keyFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
            </section>
            {guide.sections.map((section) => (
              <section className="family-story-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
            <section className="family-insider" aria-labelledby="insider-heading">
              <p className="eyebrow">The insider bits</p><h2 id="insider-heading">What we would tell a mate</h2>
              <ul>{guide.insiderTips.map((tip) => <li key={tip}>{tip}</li>)}</ul>
            </section>
          </article>

          <aside className="family-detail__aside">
            <div className="family-jump"><strong>On this page</strong>{guide.sections.map((section, index) => <span key={section.title}>{String(index + 1).padStart(2, '0')} {section.title}</span>)}</div>
            <div className="family-source-box"><strong>Official links</strong><p>Open the service, check current details and get the job done.</p>{guide.resources.map((resource) => <a href={resource.url} target="_blank" rel="noreferrer" key={resource.title}><span>{resource.title}</span><small>{resource.source} ↗</small></a>)}</div>
            <div className="family-editor-note"><strong>Independent, not official</strong><p>We have translated the system into ordinary English. The linked authority always has the final word on eligibility, appointments and current rules.</p></div>
          </aside>
        </div>
      </div>

      <section className="family-related">
        <div className="shell section"><div className="section-heading"><div><p className="eyebrow">Keep going</p><h2>More family life, made clearer</h2></div><Link className="text-link" href="/family/">All family guides <span aria-hidden="true">→</span></Link></div><div className="family-related__grid">{related.map((item) => <Link href={`/family/${item.slug}/`} key={item.slug}><span>{item.number} · {item.label}</span><strong>{item.title}</strong><small>{item.summary}</small></Link>)}</div></div>
      </section>
    </main>
  )
}
