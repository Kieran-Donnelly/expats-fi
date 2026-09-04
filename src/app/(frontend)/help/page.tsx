import type { Metadata } from 'next'
import Link from 'next/link'

import { ContinueExploring } from '@/components/ContinueExploring'
import { SectionHero } from '@/components/SectionHero'

export const metadata: Metadata = {
  title: 'When things go wrong in Finland',
  description: 'A calm, practical route to urgent healthcare, housing help, scam and crime support, workplace advice, debt help, safety services and lost-document guidance in Finland.',
  alternates: { canonical: '/help/' },
}

const helpRoutes = [
  { number: '01', title: 'Urgent health', detail: 'Emergency care, medical advice, poisoning and a sudden crisis', href: '#urgent-health' },
  { number: '02', title: 'Housing trouble', detail: 'Repairs, landlord disputes, rent problems and housing advice', href: '#housing-trouble' },
  { number: '03', title: 'Scams, crime or lost documents', detail: 'Protect yourself, preserve evidence and report what happened', href: '#crime-and-documents' },
  { number: '04', title: 'Work has gone wrong', detail: 'Missing pay, unsafe conditions, exploitation or an unclear contract', href: '#work-trouble' },
  { number: '05', title: 'Money is getting tight', detail: 'Bills, debt, benefits and help before the situation snowballs', href: '#money-trouble' },
  { number: '06', title: 'Violence or an unsafe home', detail: 'Confidential support, shelters and help for crime victims', href: '#personal-safety' },
] as const

const helpSections = [
  {
    id: 'urgent-health',
    number: '01',
    label: 'Health and crisis',
    title: 'You need medical help, but you are not sure where to start.',
    summary: 'Call 112 if life or health is in immediate danger. For urgent medical advice when your health station is closed, call 116 117. The Poison Information Center answers acute poisoning questions around the clock on 0800 147 111. Helsinki Crisis Emergency Services supports people facing a sudden traumatic event on +358 9 310 44222.',
    tip: 'If you call, have the address, symptoms, medicines or substance involved and the time the problem began ready. Do not delay a 112 call while searching this page.',
    links: [
      { label: 'Helsinki urgent and emergency care', href: 'https://www.hel.fi/en/health-and-social-services/health-care/urgent-and-emergency-care' },
      { label: 'Poison Information Center', href: 'https://www.hus.fi/en/patient/hospitals-and-other-units/poison-information-center' },
      { label: 'Helsinki Crisis Emergency Services', href: 'https://www.hel.fi/en/health-and-social-services/health-care/health-stations/urgent-and-emergency-care/crisis-emergency-services' },
    ],
  },
  {
    id: 'housing-trouble',
    number: '02',
    label: 'Home and rent',
    title: 'The repair is being ignored, the rent is slipping or the landlord disagrees.',
    summary: 'Report non-urgent defects in writing and keep the message, photos and dates. Helsinki housing counselling can help with rental agreements, rent-payment problems and housing difficulties. For a dispute with a private landlord, the Finnish Competition and Consumer Authority explains tenant rights and has a complaint assistant that helps you put the issue in writing.',
    tip: 'If water, fire, electricity or another fault creates immediate danger, contact the building maintenance emergency number first. If someone is in danger, call 112.',
    links: [
      { label: 'Our full housing trouble guide', href: '/housing/repairs-rent-trouble-and-moving-out/' },
      { label: 'Helsinki housing counselling', href: 'https://www.hel.fi/en/health-and-social-services/social-support-and-financial-assistance/guidance-and-advice/housing-counselling' },
      { label: 'KKV rental apartment advice', href: 'https://www.kkv.fi/en/consumer-affairs/housing/rental-apartments/' },
      { label: 'Write a rental complaint', href: 'https://www.kkv.fi/en/consumer-affairs/consumer-advisory-services/making-a-complaint/rental-apartment/' },
    ],
  },
  {
    id: 'crime-and-documents',
    number: '03',
    label: 'Scams, crime and documents',
    title: 'Something was stolen, you were scammed or an important card has vanished.',
    summary: 'Move quickly, but do it in order. Freeze affected bank cards, change exposed passwords and save receipts, messages, account details and screenshots. Report suspected crime to the police. Lost or stolen passports, identity cards and driving licences should also be reported to prevent misuse. If a Finnish residence permit card is lost or stolen in Finland, report it to the police, then apply for a replacement through Enter Finland and attach the police report.',
    tip: 'Do not keep negotiating with a scammer. Preserve the evidence before blocking the account or deleting the conversation.',
    links: [
      { label: 'Police advice and online crime report', href: 'https://poliisi.fi/en/offences' },
      { label: 'Report a scam to KKV', href: 'https://www.kkv.fi/en/consumer-affairs/scams/report-a-scam/' },
      { label: 'Migri residence permit card guidance', href: 'https://migri.fi/en/faq-residence-permit-card' },
      { label: 'Find your embassy or consulate', href: '/embassies/' },
    ],
  },
  {
    id: 'work-trouble',
    number: '04',
    label: 'Work and pay',
    title: 'Your pay is missing, the workplace feels unsafe or the contract does not match reality.',
    summary: 'Save the contract, payslips, work schedules, hours, messages and any photos that safely document the problem. Ask the employer for a written explanation. Finland’s Occupational Safety and Health Administration gives guidance on employment terms and working conditions. Victim Support Finland can also assist if you suspect labour exploitation or another crime.',
    tip: 'Do not sign a document you do not understand. Ask for time, a translation or independent advice first.',
    links: [
      { label: 'Occupational Safety and Health Administration', href: 'https://tyosuojelu.fi/en' },
      { label: 'Victim Support Finland', href: 'https://www.riku.fi/en/service-brochure-english/' },
      { label: 'Work and money resources', href: '/resources/?category=Work%20%26%20money#resource-library' },
    ],
  },
  {
    id: 'money-trouble',
    number: '05',
    label: 'Bills and debt',
    title: 'There is not enough money to cover everything this month.',
    summary: 'Open every letter and list the due dates before choosing what to do next. Contact the landlord, lender or service provider early and ask what arrangement is possible. Finland’s public financial and debt counselling can help you understand the options, and Helsinki housing counselling can help when rent or the risk of losing your home is part of the problem.',
    tip: 'A missed payment is easier to sort than months of unopened letters. Asking early is sensible, not embarrassing.',
    links: [
      { label: 'Payment difficulties and debt', href: 'https://www.oikeus.fi/en/themes/payment-difficulties-and-debt/take-control-of-your-finances/' },
      { label: 'Find financial and debt counselling', href: 'https://www.oikeus.fi/en/contact-information/' },
      { label: 'Helsinki emergency social services', href: 'https://www.hel.fi/en/health-and-social-services/social-support-and-financial-assistance/guidance-and-advice/emergency-social-services' },
    ],
  },
  {
    id: 'personal-safety',
    number: '06',
    label: 'Personal safety',
    title: 'Home does not feel safe, or you need support after a crime.',
    summary: 'Call 112 if you or somebody else is in immediate danger. Nollalinja offers free, confidential support in English around the clock on 116 016 for people experiencing violence or the threat of violence. Shelters are free, open all day and night, and do not require a referral. Victim Support Finland offers practical and emotional support to victims, witnesses and their loved ones.',
    tip: 'You do not need to wait for violence to become physical before asking for help. A threat, coercive control or fear at home is enough reason to speak to somebody.',
    links: [
      { label: 'Nollalinja help in English', href: 'https://nollalinja.fi/en/about-nollalinja/' },
      { label: 'Find a shelter', href: 'https://nollalinja.fi/en/shelters-for-victims-of-domestic-violence/' },
      { label: 'Victim Support Finland contact options', href: 'https://www.riku.fi/en/contact-information/' },
      { label: 'Family urgent help and safety guide', href: '/family/urgent-help-and-safety/' },
    ],
  },
] as const

export default function HelpPage() {
  return (
    <main id="main" className="family-hub help-hub">
      <SectionHero
        eyebrow="When things go wrong"
        title="Take a breath. Find the right door. Deal with the next step."
        intro="Urgent health, housing trouble, scams, missing pay, debt, lost documents and personal safety. One calm starting point for the moments when Finland suddenly feels much harder."
        noteLabel="First question"
        noteTitle="Is anybody in immediate danger?"
        noteBody="Call 112 for an accident, fire, crime in progress or an immediate threat to life or health. You can call without a SIM card."
        tone="dark"
        image={{ src: '/images/heroes/when-things-go-wrong-help.webp', position: 'center 48%' }}
      />

      <section className="family-urgent" aria-label="Emergency numbers">
        <div className="shell family-urgent__inner">
          <div><span>Save these now</span><strong>112 immediate danger · 116 117 urgent medical advice · 116 016 violence support · 0800 147 111 poisoning</strong></div>
          <a href="tel:112">Call 112 <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="shell family-stages" aria-labelledby="help-route-heading">
        <div className="section-heading">
          <div><p className="eyebrow">Start with what happened</p><h2 id="help-route-heading">Which problem is in front of you?</h2></div>
          <p>You do not need to understand the whole Finnish system. Pick the closest match and take the first useful step.</p>
        </div>
        <div className="family-stage-grid">
          {helpRoutes.map((route) => (
            <Link href={route.href} key={route.number}>
              <span>{route.number}</span><strong>{route.title}</strong><small>{route.detail}</small><i aria-hidden="true">↓</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="family-systems" aria-labelledby="steady-heading">
        <div className="shell section">
          <div className="section-heading family-systems__heading">
            <div><p className="eyebrow">Before the admin begins</p><h2 id="steady-heading">Make it safe. Save the evidence. Then make the call.</h2></div>
            <p>That order works for most non-emergency problems, from a broken flat to missing wages or a suspicious payment.</p>
          </div>
          <div className="family-system-grid">
            <article className="help-step"><small>Step one</small><strong>Deal with immediate risk</strong><p>Leave an unsafe place, stop a leak if you safely can, freeze the card or call 112 when somebody is in danger.</p></article>
            <article className="help-step"><small>Step two</small><strong>Keep a clean record</strong><p>Save dates, names, messages, contracts, photos, receipts and what you have already tried.</p></article>
            <article className="help-step"><small>Step three</small><strong>Use the official route</strong><p>Call the correct service or send a short written account with the result you are asking for.</p></article>
            <article className="help-step"><small>Step four</small><strong>Note the next deadline</strong><p>Write down who owns the next step, when they promised to respond and when you will follow up.</p></article>
          </div>
        </div>
      </section>

      <section className="shell section family-guides" aria-labelledby="help-guides-heading">
        <div className="section-heading">
          <div><p className="eyebrow">The calm route through it</p><h2 id="help-guides-heading">What to do, who can help and what to keep.</h2></div>
          <p>These are starting points, not substitutes for emergency, medical or legal advice. Use the linked official service for your exact situation.</p>
        </div>
        <div className="family-guide-grid">
          {helpSections.map((section) => (
            <article className="family-guide-card help-guide-card" id={section.id} key={section.id}>
              <div><span>{section.number}</span><small>{section.label}</small></div>
              <h3>{section.title}</h3>
              <p>{section.summary}</p>
              <p><strong>Worth doing:</strong> {section.tip}</p>
              <div className="help-link-list">
                {section.links.map((link) => link.href.startsWith('/')
                  ? <Link className="text-link" href={link.href} key={link.href}>{link.label} →</Link>
                  : <a className="text-link" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} ↗</a>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell family-local-note">
        <div><p className="eyebrow">A useful habit</p><h2>Save this page before you need it.</h2></div>
        <p>Official numbers and opening arrangements can change. We check this hub, but the linked authority is always the final word. If you spot something that has moved, email <a className="text-link" href="mailto:hello@expats.fi">hello@expats.fi</a> and we will sort it.</p>
      </section>

      <ContinueExploring
        title="Keep the right backup close."
        intro="A little preparation makes the next difficult day less confusing. Save the route that fits your situation."
        links={[
          { eyebrow: 'Family safety', title: 'Family urgent help', description: 'Health, child safety, violence support and practical help for families.', href: '/family/urgent-help-and-safety/' },
          { eyebrow: 'Housing', title: 'Handle problems at home', description: 'Renting, landlord issues and the practical side of keeping a secure home.', href: '/housing/' },
          { eyebrow: 'Documents abroad', title: 'Find your embassy', description: 'Official representation and consular contacts for every country in Finland.', href: '/embassies/' },
        ]}
      />
    </main>
  )
}
