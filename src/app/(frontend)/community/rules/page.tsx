import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community rules',
  description: 'The practical boundaries that keep the Expats.fi community board useful, welcoming and safe.',
  alternates: { canonical: '/community/rules/' },
}

const rules = [
  ['Be useful and treat people like people.', 'Disagreement is fine. Harassment, hate, threats, pile-ons and personal attacks are not.'],
  ['Keep private information private.', 'Do not post identity numbers, bank details, private addresses, personal documents or somebody else’s contact details.'],
  ['Personal experience is not an official decision.', 'Say when something happened to you and when it happened. Do not present legal, medical, immigration or financial advice as guaranteed fact.'],
  ['Be honest about promotion.', 'If you own, work for or benefit from recommending something, say so clearly. Repetitive promotion, recruitment schemes and disguised advertising may be removed.'],
  ['Keep it relevant.', 'Posts should help people moving to, living in or visiting Finland. Use a clear title and enough context for somebody to answer properly.'],
  ['Take extra care around meetups and children.', 'Use public places, keep guardians involved and do not pressure anyone to share private contact details or meet alone.'],
  ['Anonymous does not mean unaccountable.', 'You can use a friendly public alias, but the post or reply stays privately connected to your account so moderators can act on serious or repeated misuse.'],
  ['Report problems instead of escalating them.', 'A report sends the post or reply to the private moderation queue. It does not prove the author has done something wrong.'],
]

export default function CommunityRulesPage() {
  return (
    <main id="main" className="community-rules-page">
      <header className="community-rules-hero">
        <div className="shell"><Link className="back-link" href="/community/board/">← Community board</Link><p className="eyebrow">The Expats.fi community rules</p><h1>Useful, kind and safe enough to trust.</h1><p>This is a place for ordinary questions, lived experience and the small bits of local knowledge that help people settle in. These boundaries keep it from turning into a spam wall or an argument nobody needed.</p></div>
      </header>
      <div className="shell community-rules-layout">
        <section aria-labelledby="community-rules-heading">
          <h2 id="community-rules-heading">The rules</h2>
          <ol>{rules.map(([title, body]) => <li key={title}><strong>{title}</strong><p>{body}</p></li>)}</ol>
        </section>
        <aside>
          <div><strong>New here?</strong><p>Your first contributions may wait briefly in the review queue. Trusted members can post clear, ordinary content without that hold.</p></div>
          <div><strong>What moderation means</strong><p>Expats.fi may move, hide or reject content, restrict accounts and keep private moderation notes when needed. Automated warnings help us sort the queue, but people make the final call on questionable material.</p></div>
          <div><strong>Urgent danger</strong><p>The board is not an emergency service. Call 112 when somebody is in immediate danger.</p></div>
        </aside>
      </div>
    </main>
  )
}
