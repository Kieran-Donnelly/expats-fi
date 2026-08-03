import type { Metadata } from 'next'
import { SubmissionForm } from '@/components/SubmissionForm'

export const metadata: Metadata = { title: 'List an expat-owned business', description: 'Suggest an expat-owned business for the Expats.fi Finland directory.' }

export default function SubmitBusinessPage() {
  return <main id="main"><div className="shell submission-page"><div className="submission-page__intro"><p className="eyebrow">Free community listing</p><h1>Help people discover a brilliant expat-owned business.</h1><p>Send the essentials. We will check that the business is Finland-based and expat-owned before publishing it in the directory.</p></div><SubmissionForm /></div></main>
}
