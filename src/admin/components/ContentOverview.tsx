import config from '@payload-config'
import Link from 'next/link'
import { getPayload, type CollectionSlug, type Where } from 'payload'

import type { BusinessSubmission } from '@/payload-types'

import { ModerationAction } from './ModerationAction'

type Metric = {
  label: string
  value: number | null
  href: string
  tone?: 'default' | 'attention'
}

async function countCollection(payload: Awaited<ReturnType<typeof getPayload>>, collection: CollectionSlug, where?: Where): Promise<number> {
  const result = await payload.find({ collection, limit: 0, overrideAccess: true, where })
  return result.totalDocs
}

async function getMetrics() {
  try {
    const payload = await getPayload({ config })
    const [articles, newsStories, businesses, embassies, events, learningResources, practiceGroups, draftBusinesses, draftArticles, draftNewsStories, pendingSubmissionsCount, pendingSubmissionsResult] = await Promise.all([
      countCollection(payload, 'articles'),
      countCollection(payload, 'news-stories'),
      countCollection(payload, 'businesses'),
      countCollection(payload, 'embassies'),
      countCollection(payload, 'events'),
      countCollection(payload, 'learning-resources'),
      countCollection(payload, 'practice-groups'),
      countCollection(payload, 'businesses', { status: { equals: 'draft' } }),
      countCollection(payload, 'articles', { _status: { equals: 'draft' } }),
      countCollection(payload, 'news-stories', { status: { equals: 'draft' } }),
      countCollection(payload, 'business-submissions', { status: { equals: 'pending' } }),
      payload.find({
        collection: 'business-submissions',
        depth: 0,
        limit: 8,
        pagination: false,
        overrideAccess: true,
        sort: 'createdAt',
        where: { status: { equals: 'pending' } },
      }),
    ])

    return { articles, newsStories, businesses, embassies, events, learningResources, practiceGroups, draftBusinesses, draftArticles, draftNewsStories, pendingSubmissionsCount, pendingSubmissions: pendingSubmissionsResult.docs as BusinessSubmission[] }
  } catch {
    return null
  }
}

function formatSubmissionDate(value: string): string {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Date unknown'
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date)
}

function MetricCard({ metric }: { metric: Metric }) {
  return (
    <a className={`expats-admin-dashboard__metric expats-admin-dashboard__metric--${metric.tone || 'default'}`} href={metric.href}>
      <span>{metric.label}</span>
      <strong>{metric.value === null ? '—' : metric.value}</strong>
      <small>Open collection →</small>
    </a>
  )
}

export default async function ContentOverview() {
  const metrics = await getMetrics()
  const cards: Metric[] = [
    { label: 'Guides', value: metrics?.articles ?? null, href: '/admin/collections/articles' },
    { label: 'News stories', value: metrics?.newsStories ?? null, href: '/admin/collections/news-stories' },
    { label: 'Businesses', value: metrics?.businesses ?? null, href: '/admin/collections/businesses' },
    { label: 'Embassy records', value: metrics?.embassies ?? null, href: '/admin/collections/embassies' },
    { label: 'Events', value: metrics?.events ?? null, href: '/admin/collections/events' },
    { label: 'Learning resources', value: metrics?.learningResources ?? null, href: '/admin/collections/learning-resources' },
    { label: 'Language groups', value: metrics?.practiceGroups ?? null, href: '/admin/collections/practice-groups' },
    { label: 'Submissions to review', value: metrics?.pendingSubmissionsCount ?? null, href: '/admin/collections/business-submissions?where%5Bstatus%5D%5Bequals%5D=pending', tone: 'attention' },
  ]

  return (
    <section className="expats-admin-dashboard" aria-labelledby="expats-admin-dashboard-heading">
      <div className="expats-admin-dashboard__header">
        <div>
          <p className="expats-admin-dashboard__eyebrow">Expats.fi content desk</p>
          <h2 id="expats-admin-dashboard-heading">Keep the useful things current.</h2>
          <p>Manage the directory, guides, events and Finnish-learning resources from one place. Draft changes first, then publish when the details are checked.</p>
        </div>
      <Link className="expats-admin-dashboard__primary-action" href="/">View public site <span aria-hidden="true">↗</span></Link>
      </div>

      <div className="expats-admin-dashboard__metrics">
        {cards.map((metric) => <MetricCard key={metric.label} metric={metric} />)}
      </div>

      <section className="expats-admin-dashboard__panel expats-admin-dashboard__review-panel" aria-labelledby="expats-admin-submissions">
        <div className="expats-admin-dashboard__panel-heading expats-admin-dashboard__review-heading">
          <div><p className="expats-admin-dashboard__eyebrow">Member submissions</p><h3 id="expats-admin-submissions">Review queue</h3></div>
          <Link className="expats-admin-dashboard__panel-link" href="/admin/collections/business-submissions?where%5Bstatus%5D%5Bequals%5D=pending">Open full queue →</Link>
        </div>
        <div className="expats-admin-dashboard__submission-list">
          {metrics?.pendingSubmissions?.length ? metrics.pendingSubmissions.map((submission) => (
            <div className="expats-admin-dashboard__submission" key={submission.id}>
              <div className="expats-admin-dashboard__submission-info">
                <strong>{submission.businessName}</strong>
                <span>{submission.category} · {submission.location}</span>
                <time dateTime={submission.createdAt}>Submitted {formatSubmissionDate(submission.createdAt)}</time>
              </div>
              <div className="expats-admin-dashboard__submission-actions">
                <Link className="expats-admin-dashboard__open-review" href={`/admin/collections/business-submissions/${submission.id}`}>Open review</Link>
                <ModerationAction action="approve" label="Approve & publish" submissionId={submission.id} confirmMessage={`Approve ${submission.businessName} and publish it in the directory?`} />
                <ModerationAction action="needs-changes" label="Request changes" submissionId={submission.id} />
                <ModerationAction action="decline" label="Decline" submissionId={submission.id} confirmMessage={`Decline the submission for ${submission.businessName}?`} />
              </div>
            </div>
          )) : <p className="expats-admin-dashboard__empty-queue">No pending business submissions. New member proposals will appear here.</p>}
        </div>
      </section>

      <div className="expats-admin-dashboard__columns">
        <section className="expats-admin-dashboard__panel" aria-labelledby="expats-admin-quick-actions">
          <div className="expats-admin-dashboard__panel-heading"><div><p className="expats-admin-dashboard__eyebrow">Shortcuts</p><h3 id="expats-admin-quick-actions">Common actions</h3></div></div>
          <div className="expats-admin-dashboard__actions">
            <Link href="/admin/collections/articles/create"><strong>Write a guide</strong><span>Start a draft article</span><b aria-hidden="true">＋</b></Link>
            <Link href="/admin/collections/news-stories/create"><strong>Write a news story</strong><span>Start with context and checked sources</span><b aria-hidden="true">＋</b></Link>
            <Link href="/admin/collections/businesses/create"><strong>Add a business</strong><span>Create a directory profile</span><b aria-hidden="true">＋</b></Link>
            <Link href="/admin/collections/business-submissions?where%5Bstatus%5D%5Bequals%5D=pending"><strong>Review submissions</strong><span>Approve, request changes or decline</span><b aria-hidden="true">→</b></Link>
            <Link href="/admin/collections/events/create"><strong>List an event</strong><span>Add a community pick</span><b aria-hidden="true">＋</b></Link>
            <Link href="/admin/collections/embassies"><strong>Review embassies</strong><span>Check addresses and flags</span><b aria-hidden="true">→</b></Link>
          </div>
        </section>

        <section className="expats-admin-dashboard__panel" aria-labelledby="expats-admin-attention">
          <div className="expats-admin-dashboard__panel-heading"><div><p className="expats-admin-dashboard__eyebrow">Review queue</p><h3 id="expats-admin-attention">Needs attention</h3></div></div>
          <div className="expats-admin-dashboard__attention-list">
            <Link href="/admin/collections/business-submissions?where%5Bstatus%5D%5Bequals%5D=pending"><span className="expats-admin-dashboard__status-dot expats-admin-dashboard__status-dot--red" /> <strong>{metrics?.pendingSubmissionsCount ?? '—'}</strong><span>business submissions waiting for review</span><b aria-hidden="true">→</b></Link>
            <Link href="/admin/collections/businesses?where%5Bstatus%5D%5Bequals%5D=draft"><span className="expats-admin-dashboard__status-dot expats-admin-dashboard__status-dot--amber" /> <strong>{metrics?.draftBusinesses ?? '—'}</strong><span>business drafts waiting for review</span><b aria-hidden="true">→</b></Link>
            <Link href="/admin/collections/articles?where%5B_status%5D%5Bequals%5D=draft"><span className="expats-admin-dashboard__status-dot expats-admin-dashboard__status-dot--blue" /> <strong>{metrics?.draftArticles ?? '—'}</strong><span>guide drafts in progress</span><b aria-hidden="true">→</b></Link>
            <Link href="/admin/collections/news-stories?where%5Bstatus%5D%5Bequals%5D=draft"><span className="expats-admin-dashboard__status-dot expats-admin-dashboard__status-dot--amber" /> <strong>{metrics?.draftNewsStories ?? '—'}</strong><span>news drafts waiting for a fact check</span><b aria-hidden="true">→</b></Link>
            <Link href="/admin/collections/learning-resources"><span className="expats-admin-dashboard__status-dot expats-admin-dashboard__status-dot--green" /> <strong>Routine</strong><span>review links, prices and dates before publishing</span><b aria-hidden="true">→</b></Link>
          </div>
        </section>
      </div>

      <p className="expats-admin-dashboard__note"><strong>Roles are deliberate.</strong> Super admins manage access and member records. Editors can create, update and publish site content without changing the team.</p>
    </section>
  )
}
