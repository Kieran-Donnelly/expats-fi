import type { Metadata } from 'next'
import Link from 'next/link'

import { SectionHero } from '@/components/SectionHero'
import { familyGuides, familySystems } from '@/data/family'

export const metadata: Metadata = {
  title: 'Family life in Helsinki and Finland',
  description: 'A warm, practical guide to healthcare, Maisa, daycare, school, Kela, family support, community and urgent help in Helsinki.',
  alternates: { canonical: '/family/' },
}

const stageLinks = [
  { label: 'Expecting or new baby', detail: 'Neuvola, baby checks, groups and parental support', href: '/family/babies-and-neuvola/' },
  { label: 'Under school age', detail: 'Daycare, fees, Edlevo and preschool', href: '/family/daycare-and-preschool/' },
  { label: 'At comprehensive school', detail: 'Local schools, preparatory teaching and Wilma', href: '/family/schooling-in-helsinki/' },
  { label: 'Teenager in the house', detail: 'Lukio, vocational school, TUVA and Ohjaamo', href: '/family/teenagers-and-next-steps/' },
] as const

export default function FamilyPage() {
  return (
    <main id="main" className="family-hub" data-hub-tone="warm">
      <SectionHero
        eyebrow="Family life in Finland"
        title="Family life, without needing a Finnish relative on standby."
        intro="Healthcare, schools, daycare, Kela, support and the little pieces of admin nobody thinks to explain. Helsinki first, plain English throughout."
        noteLabel="Our promise"
        noteTitle="Useful before overwhelming."
        noteBody="We have separated the systems, pulled out the common catches and linked to the official place where you can actually get the job done."
        tone="warm"
      />

      <section className="family-urgent" aria-label="Urgent family help">
        <div className="shell family-urgent__inner">
          <div><span>Need help now?</span><strong>112 for immediate danger · 116 117 for urgent medical advice · 116 016 for domestic violence support</strong></div>
          <Link href="/family/urgent-help-and-safety/">Open the calm, practical help page <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="shell family-stages" aria-labelledby="family-stage-heading">
        <div className="section-heading">
          <div><p className="eyebrow">Start where you are</p><h2 id="family-stage-heading">What stage is your family in?</h2></div>
          <p>Skip the grand tour and go straight to the guide that matches the chaos currently happening at home.</p>
        </div>
        <div className="family-stage-grid">
          {stageLinks.map((stage, index) => (
            <Link href={stage.href} key={stage.label}>
              <span>0{index + 1}</span><strong>{stage.label}</strong><small>{stage.detail}</small><i aria-hidden="true">→</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="family-systems" aria-labelledby="family-systems-heading">
        <div className="shell section">
          <div className="section-heading family-systems__heading">
            <div><p className="eyebrow">The four logins you will meet</p><h2 id="family-systems-heading">Same family. Completely different systems.</h2></div>
            <p>This is the bit that saves six open tabs and a mild domestic disagreement.</p>
          </div>
          <div className="family-system-grid">
            {familySystems.map((system) => (
              <a href={system.url} target="_blank" rel="noreferrer" key={system.name}>
                <small>{system.label}</small><strong>{system.name}</strong><p>{system.description}</p><span>Official information ↗</span>
              </a>
            ))}
          </div>
          <div className="family-maisa-tip">
            <span>Worth knowing</span>
            <div><strong>Your partner can help from their own Maisa account.</strong><p>Grant proxy access through Manage proxy access, then choose what they can do. Do not share bank credentials. MyKanta needs a separate Suomi.fi authorisation.</p></div>
            <Link href="/family/healthcare-and-maisa/">Show me how →</Link>
          </div>
        </div>
      </section>

      <section className="shell section family-guides" aria-labelledby="family-guides-heading">
        <div className="section-heading">
          <div><p className="eyebrow">The properly useful guides</p><h2 id="family-guides-heading">No vague “contact your municipality” dead ends.</h2></div>
          <p>Each guide has the basics, the catches, the insider tips and the official links.</p>
        </div>
        <div className="family-guide-grid">
          {familyGuides.map((guide) => (
            <article className="family-guide-card" key={guide.slug} data-urgent={guide.slug === 'urgent-help-and-safety' || undefined}>
              <div><span>{guide.number}</span><small>{guide.label}</small></div>
              <h3><Link href={`/family/${guide.slug}/`}>{guide.title}</Link></h3>
              <p>{guide.summary}</p>
              <Link className="text-link" href={`/family/${guide.slug}/`}>Open the guide <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="family-real-life" aria-labelledby="family-tips-heading">
        <div className="shell family-real-life__inner">
          <div className="family-real-life__copy">
            <p className="eyebrow">The bits we would tell a mate</p>
            <h2 id="family-tips-heading">A few things that make the system kinder.</h2>
            <p>The official pages tell you what exists. These are the habits that stop family admin swallowing the week.</p>
          </div>
          <ol className="family-real-life__list">
            <li><span>01</span><div><strong>Ask for English or an interpreter while booking.</strong><p>A child should never have to translate a parent’s medical or social-service conversation.</p></div></li>
            <li><span>02</span><div><strong>Set up proper proxy access.</strong><p>It lets one adult help with appointments and results without everybody sharing passwords.</p></div></li>
            <li><span>03</span><div><strong>Keep home languages alive.</strong><p>Good support for Finnish does not require flattening the language your family actually lives in.</p></div></li>
            <li><span>04</span><div><strong>Ask while the problem is still small.</strong><p>Neuvola, school welfare and family social services are built to offer early support.</p></div></li>
            <li><span>05</span><div><strong>Write down who owns the next step.</strong><p>After any call, note the person, date and when you should hear back. Public systems become much easier to chase.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="shell family-local-note">
        <div><p className="eyebrow">Helsinki first</p><h2>Living somewhere else in Finland?</h2></div>
        <p>The national parts, including Kela, MyKanta, 112 and the school structure, still apply. Healthcare, social services and local applications belong to your municipality or wellbeing services county, so use the same guide but swap Helsinki’s service link for your local one.</p>
      </section>
    </main>
  )
}
