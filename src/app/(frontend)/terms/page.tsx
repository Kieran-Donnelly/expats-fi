import type { Metadata } from 'next'
import Link from 'next/link'

import { ACCOUNT_MINIMUM_AGE, TERMS_VERSION } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'The plain-language terms for Expats.fi accounts, community contributions and directory submissions.',
  alternates: { canonical: '/terms/' },
}

export default function TermsPage() {
  return (
    <main id="main" className="privacy-page">
      <header className="privacy-hero"><div className="shell"><p className="eyebrow">Using Expats.fi</p><h1>Clear ground rules.</h1><p>Expats.fi is here to make life in Finland easier. These terms explain what you can expect from us and what we ask from anyone creating an account or sending us content.</p><small>Version {TERMS_VERSION}</small></div></header>
      <div className="shell privacy-layout">
        <article className="privacy-content">
          <section><h2>About the service</h2><p>Expats.fi is an independent information and community service operated from Finland. It is not a Finnish authority and is not a substitute for legal, medical, financial, immigration or other professional advice. Official sources and qualified professionals remain the final word for decisions that affect your rights, money, health or immigration status.</p></section>
          <section><h2>Accounts and minimum age</h2><p>You must be at least {ACCOUNT_MINIMUM_AGE} to create an account or contribute to the community board. Give accurate account information, keep your sign-in details secure and tell us promptly if you believe somebody else has accessed your account.</p><p>If we learn that an account holder does not meet the minimum age, we may close the account and remove or anonymise its personal information.</p></section>
          <section><h2>Community contributions</h2><p>Keep contributions lawful, honest and useful. Do not post harassment, threats, hate, scams, impersonation, private information, unlawful material, undisclosed advertising or content that infringes somebody else’s rights. The more detailed <Link href="/community/rules/">community rules</Link> form part of these terms.</p><p>We may review, hold, edit for formatting, decline, restrict or remove contributions when reasonably necessary to protect people, keep information accurate or operate the service. Anonymous posting hides your public identity, not your identity from authorised moderators.</p></section>
          <section><h2>Your content and permission to publish</h2><p>You keep ownership of content you create. By submitting something for publication, you give Expats.fi a non-exclusive, worldwide and royalty-free permission to store, reproduce, format, display and distribute it through Expats.fi and related social posts used to promote that published page. You can ask us to stop using your content, although existing discussions, backups and already-published promotional material may take time to update.</p><p>Only submit words, photographs, logos and other material that you created or have permission to provide. Business submitters also confirm that the listing information is accurate to the best of their knowledge and that they are authorised to represent the business or suggest it for review.</p></section>
          <section><h2>Copyright and other complaints</h2><p>If material on Expats.fi belongs to you and appears without permission, email <a href="mailto:moi@expats.fi?subject=Copyright%20or%20content%20complaint">moi@expats.fi</a>. Include your name, the page address, a description of the material, why you believe you hold the rights and how we can contact you. We will review credible notices and may temporarily remove material while checking them.</p><p>Do not knowingly submit a false complaint. We may ask for further information before acting.</p></section>
          <section><h2>Email choices</h2><p>Guide updates and the monthly newsletter are optional. You can change those choices in your account or use the unsubscribe option included in a marketing email. Essential account, security or moderation messages are not marketing and may still be sent when needed to provide or protect the service.</p></section>
          <section><h2>Links, availability and changes</h2><p>Expats.fi links to authorities, businesses and other third parties. We do not control their availability, accuracy or privacy practices. We work hard to keep the service useful, but cannot promise that every page will always be available or error-free.</p><p>We may update these terms when the service materially changes. If an important update affects member accounts, we will give reasonable notice and may ask members to accept the new version.</p></section>
          <section><h2>Ending access and Finnish law</h2><p>You can request account deletion by emailing <a href="mailto:moi@expats.fi?subject=Account%20deletion">moi@expats.fi</a>. We may restrict or close accounts that seriously or repeatedly breach these terms, threaten users or misuse the service.</p><p>These terms are governed by Finnish law. Mandatory consumer and data-protection rights continue to apply regardless of anything written here. Contact us first at <a href="mailto:moi@expats.fi?subject=Terms%20question">moi@expats.fi</a> so we have a fair chance to resolve a problem.</p></section>
        </article>
        <aside className="privacy-aside"><div><strong>Something does not look right?</strong><p>Questions, corrections, copyright concerns and account requests all reach the same small team.</p><a href="mailto:moi@expats.fi">Email moi@expats.fi</a></div><div><strong>Your personal information</strong><p>The Privacy Notice explains what we collect, why we use it and the choices available to you.</p><Link href="/privacy/">Read the Privacy Notice</Link></div></aside>
      </div>
    </main>
  )
}
