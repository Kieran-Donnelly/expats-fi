import type { Metadata } from 'next'
import Link from 'next/link'

import { ContinueExploring } from '@/components/ContinueExploring'
import { SectionHero } from '@/components/SectionHero'
import { studyGuides, studyProviders } from '@/data/study'

export const metadata: Metadata = {
  title: 'Study in Finland: degrees, vocational education and integration training',
  description: 'A friendly, practical guide to universities, UAS, vocational schools, integration training, online study, fees, permits and funding in Finland.',
  alternates: { canonical: '/study/' },
}

const routes = [
  { label: 'I want a degree', detail: 'University and UAS routes, applications and English programmes', href: '/study/universities-and-universities-of-applied-sciences/' },
  { label: 'I want practical job skills', detail: 'Vocational qualifications, workplace learning and apprenticeships', href: '/study/vocational-study-and-apprenticeships/' },
  { label: 'I need Finnish and a way in', detail: 'Integration training, working-life language and supported study', href: '/study/integration-training-and-finnish-for-working-life/' },
  { label: 'I need something flexible', detail: 'Open university, online courses, MOOCs and part-time routes', href: '/study/open-university-online-and-flexible-study/' },
] as const

const providerTypes = ['University', 'University of applied sciences', 'Vocational college'] as const

export default function StudyPage() {
  return (
    <main id="main" className="study-hub family-hub">
      <SectionHero
        eyebrow="Study in Finland"
        title="A new qualification, a new trade or simply a way forward."
        intro="Universities, vocational colleges, integration training and flexible study, with the fees, language requirements and permit catches explained before you apply."
        noteLabel="The important bit"
        noteTitle="Free for some does not mean free for everyone."
        noteBody="Citizenship, residence status, teaching language and qualification level can all change the price. We will help you ask the right question before the application becomes expensive."
        tone="dark"
        image={{ src: '/images/heroes/study-finland-students.webp', position: 'center 50%' }}
      />

      <section className="study-truth" aria-label="Study cost summary">
        <div className="shell study-truth__inner">
          <div><span>The short version</span><strong>There are brilliant free and low-cost routes here, but your exact status matters.</strong></div>
          <Link href="/study/tuition-fees-permits-and-paying-for-study/">Check the fees and permit guide <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="shell family-stages" aria-labelledby="study-routes-heading">
        <div className="section-heading">
          <div><p className="eyebrow">Start with the outcome</p><h2 id="study-routes-heading">What are you hoping study will change?</h2></div>
          <p>The institution comes second. First work out whether you need a degree, a profession, Finnish for working life or a smaller step back into learning.</p>
        </div>
        <div className="family-stage-grid">
          {routes.map((route, index) => (
            <Link href={route.href} key={route.label}>
              <span>0{index + 1}</span><strong>{route.label}</strong><small>{route.detail}</small><i aria-hidden="true">→</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="study-map" aria-labelledby="study-map-heading">
        <div className="shell section">
          <div className="section-heading study-map__heading">
            <div><p className="eyebrow">The education map</p><h2 id="study-map-heading">Three systems that do different jobs.</h2></div>
            <p>They can all lead somewhere good. The difference is how academic, professional or hands-on you need the route to be.</p>
          </div>
          <div className="study-system-grid">
            <article><span>01</span><small>Research-led</small><h3>University</h3><p>Academic bachelor’s, master’s and doctoral study. Best when theory, research or a university qualification is central to the profession.</p></article>
            <article><span>02</span><small>Profession-led</small><h3>University of applied sciences</h3><p>Practical higher education with projects and workplace training. Known in Finnish as ammattikorkeakoulu or AMK.</p></article>
            <article><span>03</span><small>Competence-led</small><h3>Vocational education</h3><p>Learn and demonstrate a profession through college and workplace tasks. Available to adults, career changers and school-leavers.</p></article>
          </div>
          <div className="study-open-note"><span>And outside the boxes</span><p><strong>Integration training and open studies are routes into the system, not extra qualification levels.</strong> One builds language and working-life readiness through an agreed integration route. The other lets almost anyone take real higher-education courses without first becoming a degree student.</p></div>
        </div>
      </section>

      <section className="shell section family-guides" aria-labelledby="study-guides-heading">
        <div className="section-heading">
          <div><p className="eyebrow">The properly useful guides</p><h2 id="study-guides-heading">Choose the route before choosing the school.</h2></div>
          <p>Every guide includes the catches, the application logic and the official place to check the current rules.</p>
        </div>
        <div className="family-guide-grid">
          {studyGuides.map((guide) => (
            <article className="family-guide-card" key={guide.slug}>
              <div><span>{guide.number}</span><small>{guide.label}</small></div>
              <h3><Link href={`/study/${guide.slug}/`}>{guide.title}</Link></h3>
              <p>{guide.summary}</p>
              <Link className="text-link" href={`/study/${guide.slug}/`}>Open the guide <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="study-providers" aria-labelledby="study-providers-heading">
        <div className="shell section">
          <div className="section-heading study-providers__heading">
            <div><p className="eyebrow">Helsinki region starting points</p><h2 id="study-providers-heading">Schools worth knowing by type.</h2></div>
            <p>This is a practical starting list, not a ranking. Search Studyinfo for the full national picture and the exact programme open today.</p>
          </div>
          {providerTypes.map((type) => (
            <section className="study-provider-group" key={type} aria-labelledby={`provider-${type.replaceAll(' ', '-').toLowerCase()}`}>
              <div><h3 id={`provider-${type.replaceAll(' ', '-').toLowerCase()}`}>{type}</h3><span>{studyProviders.filter((provider) => provider.type === type).length} Helsinki-region starting points</span></div>
              <div className="study-provider-grid">
                {studyProviders.filter((provider) => provider.type === type).map((provider) => (
                  <a href={provider.url} target="_blank" rel="noreferrer" key={provider.name}>
                    <small>{provider.area}</small><strong>{provider.name}</strong><p>{provider.note}</p><span>Visit the school <i aria-hidden="true">↗</i></span>
                  </a>
                ))}
              </div>
            </section>
          ))}
          <div className="study-studyinfo-callout"><div><span>Do not stop at this list</span><strong>Studyinfo is where the current programmes and application dates live.</strong><p>Filter by qualification, teaching language, location and application status. Then open the admission criteria for the exact course.</p></div><a className="button" href="https://opintopolku.fi/konfo/en/" target="_blank" rel="noreferrer">Search Studyinfo ↗</a></div>
        </div>
      </section>

      <section className="shell family-local-note">
        <div><p className="eyebrow">Already qualified abroad?</p><h2>You may not need another entire degree.</h2></div>
        <p>Start by checking whether your profession is regulated and speak with a SIMHE higher-education guidance service. Recognition, bridging studies or a smaller qualification may be the sensible answer. Repeating five years of education should not be the default plan.</p>
      </section>

      <ContinueExploring
        title="Make the study plan work outside the classroom too."
        intro="Language, money and family arrangements can change which route is realistic. These are the useful next checks."
        links={[
          { eyebrow: 'Language', title: 'Build your Finnish alongside it', description: 'Courses, apps, listening practice, language cafés and YKI preparation.', href: '/learn-finnish/' },
          { eyebrow: 'Work and money', title: 'Check the practical finances', description: 'Guides to working, tax, benefits and managing money in Finland.', href: '/resources/?category=Work%20%26%20money#resource-library' },
          { eyebrow: 'Family', title: 'Plan around family life', description: 'Daycare, schools, healthcare and support for families living in Finland.', href: '/family/' },
        ]}
      />
    </main>
  )
}
