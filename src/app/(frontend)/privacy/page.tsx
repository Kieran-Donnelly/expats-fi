import type { Metadata } from 'next'

import { PrivacyChoicePanel } from '@/components/PrivacyConsent'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How Expats.fi handles account, community and analytics data, including anonymous community posts and your privacy choices.',
  alternates: { canonical: '/privacy/' },
}

export default function PrivacyPage() {
  return (
    <main id="main" className="privacy-page">
      <header className="privacy-hero">
        <div className="shell">
          <p className="eyebrow">Privacy at Expats.fi</p>
          <h1>Plain answers about your data.</h1>
          <p>We collect the information needed to run accounts, keep the community board safe and understand whether the site is useful. This page explains what that means without burying the important bits.</p>
          <small>Last updated 1 September 2026</small>
        </div>
      </header>

      <div className="shell privacy-layout">
        <article className="privacy-content">
          <section>
            <h2>Who is responsible</h2>
            <p>Expats.fi is operated by the Expats.fi founding team, who decide why and how information is used on this service. For privacy questions, access requests, corrections or account deletion requests, email <a href="mailto:hello@expats.fi?subject=Privacy%20request">hello@expats.fi</a>.</p>
          </section>

          <section>
            <h2>What we collect</h2>
            <ul>
              <li><strong>Account information:</strong> your name, email address, sign-in provider and securely hashed password information or Google account identifier.</li>
              <li><strong>Optional profile choices:</strong> city, languages, arrival stage, interests, email preferences and saved guides or businesses.</li>
              <li><strong>Things you send us:</strong> business submissions, community posts, replies, reports and messages sent to our contact address.</li>
              <li><strong>Community safety information:</strong> review status, trust level, screening signals, reports and factual moderator notes.</li>
              <li><strong>Technical information:</strong> essential session and security data. If you allow analytics, we also receive general page and interaction measurements.</li>
            </ul>
          </section>

          <section>
            <h2>Anonymous community posts</h2>
            <p>An anonymous post or reply hides your account name from the public and shows a generated alias. It is still privately connected to your account so authorised moderators can respond to reports, scams, threats or repeated misuse. Anonymous on the board means private from other visitors, not invisible to the moderation team.</p>
          </section>

          <section>
            <h2>Why we use it</h2>
            <p>Account and contribution data are used to provide the service you request. Security and moderation information are used for our legitimate interest in protecting members, the site and the wider community. Email updates and analytics are optional and rely on your consent, which you can withdraw.</p>
            <p>Automated checks may flag a contribution for a closer look, but they do not make the final decision on questionable community content. Uriah or Kieran reviews anything that needs a human call.</p>
          </section>

          <section>
            <h2>Cookies and local storage</h2>
            <p>Essential storage supports sign-in, account security, Google sign-in state and your saved privacy choice. It is needed for the features you ask the site to provide.</p>
            <p>Google Analytics and the Podium analytics service load only after you choose to allow analytics. Saying no does not block guides, the directory, community reading or member features.</p>
          </section>

          <section>
            <h2>Who helps us run the service</h2>
            <p>Expats.fi uses service providers for hosting, database storage, security, media delivery, Google sign-in and, when permitted, analytics. They receive only the information needed for their part of the service and may process it under their own infrastructure and contractual safeguards.</p>
          </section>

          <section>
            <h2>How long we keep information</h2>
            <p>Account information is kept while the account is active or until a valid deletion request is completed. Community and moderation records are kept only for as long as they remain useful for the conversation, safety, dispute handling or a legal obligation. Technical security logs and backups follow limited operational schedules.</p>
            <p>If an account closes, some public contributions may remain so existing conversations still make sense. We will remove or separate identifying profile information where reasonably possible and explain any information that cannot be erased.</p>
          </section>

          <section>
            <h2>Your choices and rights</h2>
            <p>You can ask what personal information we hold, request a copy, correct inaccurate details, object to certain uses or ask for deletion or restriction where the law provides it. You can update profile and email preferences in your account and change analytics permission on this page.</p>
            <p>Start with <a href="mailto:hello@expats.fi?subject=Privacy%20request">hello@expats.fi</a>. You may also contact the <a href="https://tietosuoja.fi/en/home" target="_blank" rel="noreferrer">Office of the Data Protection Ombudsman ↗</a>. The European Commission has a useful <a href="https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en" target="_blank" rel="noreferrer">plain-language guide to individual data rights ↗</a>.</p>
          </section>
        </article>

        <aside className="privacy-aside">
          <PrivacyChoicePanel />
          <div><strong>Need something changed?</strong><p>Profile details can be edited in your account. For a data copy or account deletion, email us from the address connected to the account.</p><a href="mailto:hello@expats.fi?subject=Privacy%20request">Email hello@expats.fi</a></div>
        </aside>
      </div>
    </main>
  )
}
