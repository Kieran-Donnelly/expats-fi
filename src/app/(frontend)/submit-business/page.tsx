import type { Metadata } from 'next'
import { headers } from 'next/headers'

import { SubmissionForm } from '@/components/SubmissionForm'
import { getCurrentMember } from '@/lib/member-auth'

export const metadata: Metadata = {
  title: 'List an expat-owned business',
  description: 'Suggest an expat-owned business for the Expats.fi Finland directory.',
  robots: { index: false, follow: true },
}

export default async function SubmitBusinessPage() {
  const member = await getCurrentMember(await headers())
  return <main id="main"><div className="shell submission-page"><div className="submission-page__intro"><p className="eyebrow">Free community listing</p><h1>Help people discover a brilliant expat-owned business.</h1><p>Send the essentials. We will check that the business is Finland-based and expat-owned before publishing it in the directory.</p></div><SubmissionForm isAuthenticated={Boolean(member)} initialContactName={member?.name} initialContactEmail={member?.email} /></div></main>
}
