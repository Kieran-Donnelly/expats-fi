import config from '@payload-config'
import Link from 'next/link'
import { getPayload, type CollectionSlug, type Where } from 'payload'

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
    const [articles, newsStories, businesses, embassies, events, learningResources, practiceGroups, draftBusinesses, draftArticles, draftNewsStories] = await Promise.all([
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
    ])

    return { articles, newsStories, businesses, embassies, events, learningResources, practiceGroups, draftBusinesses, draftArticles, draftNewsStories }
  } catch {
    return null
  }
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

      <div className="expats-admin-dashboard__columns">
        <section className="expats-admin-dashboard__panel" aria-labelledby="expats-admin-quick-actions">
          <div className="expats-admin-dashboard__panel-heading"><div><p className="expats-admin-dashboard__eyebrow">Shortcuts</p><h3 id="expats-admin-quick-actions">Common actions</h3></div></div>
          <div className="expats-admin-dashboard__actions">
            <Link href="/admin/collections/articles/create"><strong>Write a guide</strong><span>Start a draft article</span><b aria-hidden="true">＋</b></Link>
            <Link href="/admin/collections/news-stories/create"><strong>Write a news story</strong><span>Start with context and checked sources</span><b aria-hidden="true">＋</b></Link>
            <Link href="/admin/collections/businesses/create"><strong>Add a business</strong><span>Create a directory profile</span><b aria-hidden="true">＋</b></Link>
            <Link href="/admin/collections/events/create"><strong>List an event</strong><span>Add a community pick</span><b aria-hidden="true">＋</b></Link>
            <Link href="/admin/collections/embassies"><strong>Review embassies</strong><span>Check addresses and flags</span><b aria-hidden="true">→</b></Link>
          </div>
        </section>

        <section className="expats-admin-dashboard__panel" aria-labelledby="expats-admin-attention">
          <div className="expats-admin-dashboard__panel-heading"><div><p className="expats-admin-dashboard__eyebrow">Review queue</p><h3 id="expats-admin-attention">Needs attention</h3></div></div>
          <div className="expats-admin-dashboard__attention-list">
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
