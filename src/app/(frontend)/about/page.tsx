import type { Metadata } from 'next'
import Link from 'next/link'

import { SectionHero } from '@/components/SectionHero'
import { socialMetadata } from '@/lib/seo'

export const metadata: Metadata = socialMetadata({
  title: 'About Expats.fi',
  description: 'Why two Kiwi expats built a warmer, clearer guide to moving to Finland, settling in and finding your people here.',
  path: '/about/',
  image: '/images/heroes/home-helsinki-cathedral-v2.webp',
})

const principles = [
  {
    number: '01',
    title: 'Useful before impressive',
    body: 'We start with the question somebody is actually trying to solve. The clever wording can wait until the appointment is booked and the right form has been found.',
  },
  {
    number: '02',
    title: 'Warm, but properly checked',
    body: 'We translate the official stuff into ordinary English, link back to the authority and say clearly when a rule, deadline or individual decision needs confirming.',
  },
  {
    number: '03',
    title: 'A life, not just paperwork',
    body: 'Permits and Kela matter. So do finding a decent lunch, joining a team, meeting another parent and having somewhere worth going on Saturday.',
  },
] as const

export default function AboutPage() {
  return (
    <main id="main" className="about-page family-hub">
      <SectionHero
        eyebrow="About Expats.fi"
        title="The guide we wish somebody had handed us."
        intro="Built in Finland by two Kiwi expats who got tired of useful answers being scattered across twelve tabs, three languages and one strangely stressful Tuesday afternoon."
        noteLabel="The short version"
        noteTitle="Finland is easier when somebody shows you where to start."
        noteBody="We join the useful pieces together, explain them like humans and leave you with the official link when it matters."
        image={{ src: '/images/heroes/home-helsinki-cathedral-v2.webp', position: 'center 52%' }}
      />

      <section className="shell section about-origin" aria-labelledby="about-origin-heading">
        <div>
          <p className="eyebrow">How this started</p>
          <h2 id="about-origin-heading">After years here, the simple stuff was still far too hard to find.</h2>
        </div>
        <div className="about-origin__story">
          <p>We are two Kiwi mates who have both spent years building lives in Finland. One of us made the move from Australia with his wife and kids. Part of the pull was giving the children a real connection to their Finnish roots, but it was also about building a proper family life here rather than simply passing through. Between us, we have spent plenty of time trying to work out what needs doing, which office actually handles it and whether the short Finnish email we just received is bad news or simply a short Finnish email.</p>
          <p>There is excellent information out there, but it is often spread between official services, city pages, community groups and advice that has quietly gone out of date. We wanted one place that could pull the useful bits together without sounding like another government form.</p>
          <p>So we began building Expats.fi in the spare hours around work and family life. It started as the practical guide we would have wanted ourselves. It is slowly becoming something much bigger.</p>
        </div>
      </section>

      <section className="about-principles" aria-labelledby="about-principles-heading">
        <div className="shell section">
          <div className="section-heading">
            <div><p className="eyebrow">What matters to us</p><h2 id="about-principles-heading">Clear enough to use. Human enough to trust.</h2></div>
            <p>We are not trying to replace Finnish authorities or pretend every expat has the same experience. We are trying to make the next step easier to see.</p>
          </div>
          <div className="about-principles__grid">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section about-method" aria-labelledby="about-method-heading">
        <div>
          <p className="eyebrow">How we work</p>
          <h2 id="about-method-heading">Friendly does not mean making things up.</h2>
          <p>For practical guides and news, we begin with official and primary sources wherever possible. We check dates, keep the source links visible and update things as the details move. Community posts can tell us what people are worried about, but they are never treated as proof on their own.</p>
          <p>Business listings and directory features are written in our own voice. Where we are working directly with an owner, we send the piece through so they can correct the facts before it goes live. The warmth is ours. Their story remains theirs.</p>
        </div>
        <aside>
          <strong>Independent, not official</strong>
          <p>Expats.fi is not connected to the Finnish government. The linked authority or service always has the final word on current rules, eligibility and individual decisions.</p>
          <Link className="text-link" href="/privacy/">How we handle privacy <span aria-hidden="true">→</span></Link>
        </aside>
      </section>

      <section className="about-community" aria-labelledby="about-community-heading">
        <div className="shell section about-community__inner">
          <div>
            <p className="eyebrow">Where this is heading</p>
            <h2 id="about-community-heading">A useful site, with a real community behind it.</h2>
          </div>
          <div>
            <p>We want Expats.fi to become somewhere people can ask honest questions, share local knowledge, suggest events, find familiar faces and help us notice the gaps we have missed.</p>
            <p>The community board is being built carefully, with moderation, reporting and the option to post or reply under an anonymous public name. Useful conversations can then help shape new guides, better events coverage and practical improvements across the site.</p>
            <div className="about-community__actions">
              <Link className="button" href="/community/board/">Visit the community board</Link>
              <Link className="button button--quiet" href="/start-here/">See where to start</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="shell section about-invitation" aria-labelledby="about-invitation-heading">
        <p className="eyebrow">Help us make it better</p>
        <h2 id="about-invitation-heading">What took you far too long to figure out?</h2>
        <p>If something confused you when you arrived, there is a fair chance somebody else is wrestling with it now. Tell us what is missing, point us towards a brilliant local project or let us know when a useful detail has changed.</p>
        <a className="button" href="mailto:hello@expats.fi?subject=An%20idea%20for%20Expats.fi">Email hello@expats.fi</a>
      </section>
    </main>
  )
}
