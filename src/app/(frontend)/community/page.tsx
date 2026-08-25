import type { Metadata } from 'next'
import Link from 'next/link'

import { communityGuides } from '@/data/community'

export const metadata: Metadata = {
  title: 'Community in Helsinki: meet people, find groups and support local businesses',
  description: 'A friendly route into Helsinki community life through newcomer programmes, language cafés, hobbies, volunteering, family groups, meetups and expat-owned businesses.',
  alternates: { canonical: '/community/' },
}

const communityRoutes = [
  { number: '01', title: 'I have just arrived', detail: 'A first-month plan when you know nobody yet', href: '/community/where-to-start-when-you-know-nobody/' },
  { number: '02', title: 'I want to practise Finnish', detail: 'Language cafés and international communities', href: '/community/language-cafes-and-international-communities/' },
  { number: '03', title: 'I would rather do something', detail: 'Hobbies, sport, volunteering and work connections', href: '/community/hobbies-sport-volunteering-and-work-connections/' },
  { number: '04', title: 'I want to meet other families', detail: 'Playgrounds, family cafés and local routines', href: '/community/parents-families-and-meeting-locally/' },
  { number: '05', title: 'I could bring people together', detail: 'How to host a small, safe and welcoming meetup', href: '/community/how-to-host-a-small-meetup-safely/' },
] as const

const usefulDoorways = [
  { label: 'Newcomer route', name: 'Friend Program', description: 'Free one-to-one, small-group and community activities for international newcomers.', href: 'https://ihhelsinki.fi/guidance-and-settling-in/friend-program/', external: true },
  { label: 'Close to home', name: 'Community houses', description: 'Open neighbourhood spaces with free groups, events, support and people to ask what is happening locally.', href: 'https://www.hel.fi/en/decision-making/get-involved/support-and-collaboration/helsinkis-community-houses', external: true },
  { label: 'Practise speaking', name: 'Language cafés', description: 'Public and recurring Finnish conversation groups around Helsinki, with current organiser links.', href: '/learn-finnish/#practice', external: false },
  { label: 'Do something together', name: 'Sports and activities', description: 'Beginner-friendly clubs, free sessions, outdoor facilities and less obvious ways to join in.', href: '/sports/', external: false },
  { label: 'Help with something useful', name: 'Volunteer Helsinki', description: 'One-off and recurring opportunities across community, culture, nature and events.', href: 'https://vapaaehtoistoiminta.hel.fi/en/', external: true },
  { label: 'Parents and children', name: 'Family cafés', description: 'Free, informal MLL gatherings where children play and the adults get to meet another grown-up.', href: 'https://www.mll.fi/en/for-families/family-cafes/', external: true },
  { label: 'See what is on', name: 'Events in Helsinki', description: 'Current happenings, gatherings and useful local events with filters for cost and interest.', href: '/events/', external: false },
  { label: 'Find your people', name: 'Multicultural associations', description: 'A broad network of organisations built around culture, identity, interests and participation.', href: 'https://moniheli.fi/en/', external: true },
] as const

export default function CommunityPage() {
  return (
    <main id="main" className="family-hub">
      <header className="page-hero">
        <div className="shell page-hero__inner">
          <p className="eyebrow">Community in Helsinki</p>
          <h1>Find your people in Helsinki.</h1>
          <p>Real places to start, recurring groups worth returning to and practical ways to turn a familiar face into somebody you actually know.</p>
        </div>
      </header>

      <section className="shell family-stages" aria-labelledby="community-routes-heading">
        <div className="section-heading">
          <div><p className="eyebrow">Start with your situation</p><h2 id="community-routes-heading">What kind of doorway feels manageable?</h2></div>
          <p>You do not need to attend everything. Pick one route that fits your life, then give people enough time to recognise you.</p>
        </div>
        <div className="family-stage-grid">
          {communityRoutes.map((route) => <Link href={route.href} key={route.number}><span>{route.number}</span><strong>{route.title}</strong><small>{route.detail}</small><i aria-hidden="true">↗</i></Link>)}
        </div>
      </section>

      <section className="family-systems" aria-labelledby="community-doorways-heading">
        <div className="shell section">
          <div className="section-heading family-systems__heading">
            <div><p className="eyebrow">Useful doors that already exist</p><h2 id="community-doorways-heading">You do not have to build a social life from scratch.</h2></div>
            <p>These are practical starting points with a real organiser, a clear purpose and somewhere you can reasonably arrive on your own.</p>
          </div>
          <div className="family-system-grid">
            {usefulDoorways.map((doorway) => (
              doorway.external
                ? <a href={doorway.href} target="_blank" rel="noreferrer" key={doorway.name}><small>{doorway.label}</small><strong>{doorway.name}</strong><p>{doorway.description}</p><span>Check the current details ↗</span></a>
                : <Link href={doorway.href} key={doorway.name}><small>{doorway.label}</small><strong>{doorway.name}</strong><p>{doorway.description}</p><span>Find a way in →</span></Link>
            ))}
          </div>
          <div className="family-maisa-tip">
            <span>Built by expats here</span>
            <div><strong>Find and support expat-owned businesses.</strong><p>Meet the people building cafés, studios, services and useful local businesses around Finland.</p></div>
            <Link href="/businesses/">Open the business directory →</Link>
          </div>
        </div>
      </section>

      <section className="shell section family-guides" aria-labelledby="community-guides-heading">
        <div className="section-heading">
          <div><p className="eyebrow">The Meet People guides</p><h2 id="community-guides-heading">Five honest routes into community.</h2></div>
          <p>Each guide gives you somewhere real to begin, what to expect and the small next step that helps a room stop feeling full of strangers.</p>
        </div>
        <div className="family-guide-grid">
          {communityGuides.map((guide) => (
            <article className="family-guide-card" key={guide.slug}>
              <div><span>{guide.number}</span><small>{guide.label}</small></div>
              <h3><Link href={`/community/${guide.slug}/`}>{guide.title}</Link></h3>
              <p>{guide.summary}</p>
              {guide.tags && <div className="explore-card__tags">{guide.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
              <Link className="text-link" href={`/community/${guide.slug}/`}>Open the guide <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="shell family-local-note">
        <div><p className="eyebrow">A quiet but important rule</p><h2>Community still needs boundaries.</h2></div>
        <p>Meet new people in public, control your own journey home and ask before sharing photographs or contact details. A friendly group should make room for privacy, different languages and a clear no.<br /><Link className="text-link" href="/community/how-to-host-a-small-meetup-safely/">Read the small meetup guide →</Link></p>
      </section>
    </main>
  )
}
