import type { Metadata } from 'next'

import type { LearningResource } from '@/data/finnishLearning'
import { HeroBackdrop } from '@/components/HeroBackdrop'
import { getLearningPageData } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Finnish, finally: learn Finnish in Finland',
  description: 'A carefully checked guide to Finnish courses, free resources, apps, podcasts, YouTube channels, YKI preparation and Helsinki language cafés.',
}

const sections: Array<{ category: LearningResource['category']; id: string; title: string; eyebrow: string; intro: string }> = [
  {
    category: 'Free foundations',
    id: 'free-resources',
    title: 'Begin without buying seventeen subscriptions',
    eyebrow: 'Free foundations',
    intro: 'These are the dependable tabs worth keeping open: clear explanations, real listening and material selected by people who teach Finnish.',
  },
  {
    category: 'Courses & teachers',
    id: 'courses',
    title: 'When structure and feedback matter',
    eyebrow: 'Courses and teachers',
    intro: 'A good class creates rhythm, deadlines and conversations you cannot skip. Compare the workload as carefully as the price.',
  },
  {
    category: 'Apps & tools',
    id: 'apps',
    title: 'Useful tools, not tiny teachers in your pocket',
    eyebrow: 'Apps and study tools',
    intro: 'Apps are strongest at repetition, vocabulary and habit-building. Combine one with explanations, listening and actual human conversation.',
  },
  {
    category: 'Listen & watch',
    id: 'listen',
    title: 'Train your ear for the Finnish people actually use',
    eyebrow: 'Podcasts and video',
    intro: 'Start with learner-paced audio, replay short sections and resist the urge to understand every word before moving on.',
  },
]

function ExternalLink({ children, className, href }: { children: React.ReactNode; className?: string; href: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>
}

function ResourceCard({ resource }: { resource: LearningResource }) {
  return (
    <article className="learning-resource-card" data-featured={resource.featured || undefined}>
      <div className="learning-resource-card__top">
        <div className="learning-tags"><span>{resource.cost}</span><span>{resource.level}</span></div>
        <span>{resource.format}</span>
      </div>
      <h3>{resource.name}</h3>
      <p>{resource.description}</p>
      <div className="learning-resource-card__best"><strong>Best for</strong><span>{resource.bestFor}</span></div>
      {resource.note && <p className="learning-resource-card__note">Good to know: {resource.note}</p>}
      <ExternalLink href={resource.url}>Visit {resource.name} <span aria-hidden="true">↗</span></ExternalLink>
    </article>
  )
}

export const dynamic = 'force-dynamic'

export default async function LearnFinnishPage() {
  const { lastLearningReview, learningPaths, learningResources, practiceGroups, ykiResources } = await getLearningPageData()

  return (
    <main id="main">
      <header className="learning-hero photo-hero photo-hero--dark">
        <HeroBackdrop src="/images/heroes/learn-finnish-class.webp" position="center 45%" />
        <div className="shell learning-hero__inner">
          <div>
            <p className="eyebrow">Learn Finnish without losing the plot</p>
            <h1>Finnish, finally.</h1>
            <p>Free resources, serious courses, useful apps and welcoming places to say something slightly wrong until it starts coming out right.</p>
            <div className="learning-hero__actions"><a className="button" href="#choose-your-path">Find your starting point</a><a href="#practice">Practise in Helsinki ↓</a></div>
          </div>
          <div className="learning-word-stack" aria-hidden="true">
            <span>Moi!</span><span>Mitä kuuluu?</span><span>No niin.</span><span>Kyllä se siitä.</span>
          </div>
        </div>
      </header>

      <nav className="learning-jump-nav" aria-label="On this page">
        <div className="shell"><strong>Jump to</strong><a href="#free-resources">Free</a><a href="#courses">Courses</a><a href="#apps">Apps</a><a href="#listen">Listen & watch</a><a href="#practice">Language cafés</a><a href="#yki">YKI</a></div>
      </nav>

      <section className="shell learning-paths" id="choose-your-path" aria-labelledby="learning-path-heading">
        <div className="section-heading"><div><p className="eyebrow">Choose your route</p><h2 id="learning-path-heading">What do you need Finnish to do?</h2></div></div>
        <div className="learning-path-grid">
          {learningPaths.map((path, index) => (
            <article key={path.title}>
              <span className="learning-path-grid__number">0{index + 1}</span>
              <p>{path.level}</p><h3>{path.title}</h3><p>{path.recipe}</p>
              <div>{path.links.map((link) => <span key={link}>{link}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <aside className="shell learning-reality-check">
        <div><p className="eyebrow">The honest version</p><h2>Written Finnish and spoken Finnish are close relatives, not identical twins.</h2></div>
        <p>Courses usually begin with <em>kirjakieli</em>, the standard written language. Helsinki conversations quickly introduce <em>puhekieli</em>: <strong>minä olen</strong> becomes <strong>mä oon</strong>. Learn the standard foundation, but start listening to everyday speech early so the bus stop does not sound like an entirely different course.</p>
      </aside>

      {sections.map((section) => {
        const resources = learningResources.filter((resource) => resource.category === section.category)
        return (
          <section className="shell learning-resource-section" id={section.id} key={section.id} aria-labelledby={`${section.id}-heading`}>
            <div className="learning-section-heading"><div><p className="eyebrow">{section.eyebrow}</p><h2 id={`${section.id}-heading`}>{section.title}</h2></div><p>{section.intro}</p></div>
            <div className="learning-resource-grid">{resources.map((resource) => <ResourceCard resource={resource} key={resource.name} />)}</div>
          </section>
        )
      })}

      <section className="learning-practice" id="practice" aria-labelledby="practice-heading">
        <div className="shell">
          <div className="learning-section-heading"><div><p className="eyebrow">Practise in Helsinki</p><h2 id="practice-heading">Coffee, courage and complete sentences</h2></div><p>Language cafés are not tests. Arrive with two questions, one story from your week and permission to be slower than you are in English.</p></div>
          <div className="practice-grid">
            {practiceGroups.map((group) => (
              <article key={group.name}>
                <div><span>{group.cost}</span><span>{group.schedule}</span></div>
                <h3>{group.name}</h3><p className="practice-grid__location">{group.location}</p><p>{group.description}</p>
                <small>{group.checkFirst}</small><ExternalLink href={group.url}>Check the next session <span aria-hidden="true">↗</span></ExternalLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell learning-yki" id="yki" aria-labelledby="yki-heading">
        <div className="learning-yki__intro"><p className="eyebrow">Preparing for YKI</p><h2 id="yki-heading">Train the test, but build the language</h2><p>The official YKI certificate measures functional language in everyday situations. It has four separately assessed parts: speaking, listening, reading and writing. A vocabulary app alone cannot prepare all four.</p></div>
        <div className="learning-yki__links">
          {ykiResources.map((resource, index) => <ExternalLink href={resource.url} key={resource.name}><span>0{index + 1}</span><strong>{resource.name}</strong><small>{resource.description}</small><b aria-hidden="true">↗</b></ExternalLink>)}
        </div>
      </section>

      <section className="shell learning-routine" aria-labelledby="routine-heading">
        <div><p className="eyebrow">A routine that can survive real life</p><h2 id="routine-heading">The 20–20–1 plan</h2></div>
        <ol><li><strong>20 minutes of structure</strong><span>A course, textbook or one carefully chosen app.</span></li><li><strong>20 minutes of Finnish input</strong><span>Easy news, a podcast, video or something you genuinely care about.</span></li><li><strong>1 conversation each week</strong><span>A café, colleague, neighbour or teacher, with a polite request not to switch immediately to English.</span></li></ol>
      </section>

      <div className="shell learning-review-note"><strong>Curated, not scraped.</strong><p>We checked these resources on {lastLearningReview}. Courses, prices and meetup schedules change; follow the provider link before enrolling or travelling.</p></div>
    </main>
  )
}
