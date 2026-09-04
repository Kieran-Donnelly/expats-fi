import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

import type { EditorialGuide } from '@/data/editorial-guide'
import { ShareButton } from '@/components/ShareButton'
import { JsonLd } from '@/components/JsonLd'
import { absoluteUrl, breadcrumbJsonLd, publisher } from '@/lib/seo'

type EditorialGuideDetailProps = {
  guide: EditorialGuide
  guides: EditorialGuide[]
  hubHref: string
  hubLabel: string
  relatedHeading: string
  reviewedAt: string
  extraSection?: ReactNode
  heroImage?: {
    src: string
    position?: string
  }
  tone?: 'blue' | 'warm'
}

export function EditorialGuideDetail({ guide, guides, hubHref, hubLabel, relatedHeading, reviewedAt, extraSection, heroImage, tone = 'blue' }: EditorialGuideDetailProps) {
  const related = guides
    .filter((item) => item.slug !== guide.slug)
    .map((item) => ({
      item,
      score: Number(item.label === guide.label) + (item.tags?.filter((tag) => guide.tags?.includes(tag)).length ?? 0),
    }))
    .sort((a, b) => b.score - a.score || a.item.number.localeCompare(b.item.number))
    .slice(0, 3)
    .map(({ item }) => item)

  return (
    <main id="main" className="family-detail" data-guide-tone={tone}>
      <JsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: guide.title,
          description: guide.summary,
          mainEntityOfPage: absoluteUrl(`${hubHref}${guide.slug}/`),
          author: publisher,
          publisher,
          inLanguage: 'en',
        },
        breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: hubLabel, path: hubHref },
          { name: guide.title, path: `${hubHref}${guide.slug}/` },
        ]),
      ]} />
      <div className="shell family-detail__shell">
        <Link className="back-link" href={hubHref}>← {hubLabel}</Link>
        <header className="family-detail__header" data-has-image={heroImage ? true : undefined}>
          {heroImage && (
            <div className="family-detail__header-media" aria-hidden="true">
              <Image
                src={heroImage.src}
                alt=""
                fill
                loading="eager"
                sizes="(max-width: 960px) 100vw, 1200px"
                style={{ objectPosition: heroImage.position ?? 'center' }}
              />
            </div>
          )}
          <div><p className="eyebrow">{guide.number} · {guide.label}</p><h1>{guide.title}</h1><p>{guide.summary}</p>{guide.tags && <div className="explore-card__tags">{guide.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}</div>
          <aside><span>Best for</span><p>{guide.goodFor}</p><small>Last reviewed {reviewedAt}</small></aside>
        </header>
        <div className="family-detail__actions"><ShareButton contentType="guide" path={`${hubHref}${guide.slug}/`} title={guide.title} text={guide.summary} /></div>

        <div className="family-detail__layout">
          <article className="family-detail__story">
            <div className="family-detail__intro">{guide.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <section className="family-key-facts" aria-labelledby="key-facts-heading">
              <p className="eyebrow">The quick version</p><h2 id="key-facts-heading">A few things worth knowing first</h2>
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
            <div className="family-source-box"><strong>Official and trusted links</strong><p>Open the source, check the current details and get the job done.</p>{guide.resources.map((resource) => <a href={resource.url} target="_blank" rel="noreferrer" key={resource.title}><span>{resource.title}</span><small>{resource.source} ↗</small></a>)}</div>
            <div className="family-editor-note"><strong>Independent, not official</strong><p>We have joined the pieces together in ordinary English. The linked authority or service always has the final word on current rules and individual decisions.</p></div>
          </aside>
        </div>
      </div>

      {extraSection}

      {related.length > 0 && <section className="family-related">
        <div className="shell section"><div className="section-heading"><div><p className="eyebrow">Keep going</p><h2>{relatedHeading}</h2></div><Link className="text-link" href={hubHref}>Open the full hub <span aria-hidden="true">→</span></Link></div><div className="family-related__grid">{related.map((item) => <Link href={`${hubHref}${item.slug}/`} key={item.slug}><span>{item.number} · {item.label}</span><strong>{item.title}</strong><small>{item.summary}</small></Link>)}</div></div>
      </section>}
    </main>
  )
}
