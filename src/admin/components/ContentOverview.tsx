import config from '@payload-config'
import Link from 'next/link'
import { getPayload, type CollectionSlug, type Where } from 'payload'

import type { BusinessSubmission, CommunityComment, CommunityPost, CommunityReport } from '@/payload-types'
import { communityReportReasonLabels } from '@/lib/community-options'

import { CommunityContentAction } from './CommunityContentAction'
import { CommunityReportAction } from './CommunityReportAction'
import { CommunityReviewRunner } from './CommunityReviewRunner'
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
    const [articles, newsStories, businesses, embassies, events, learningResources, practiceGroups, draftBusinesses, draftArticles, draftNewsStories, pendingSubmissionsCount, pendingSubmissionsResult, communityPosts, communityComments, pendingCommunityContentCount, pendingCommunityPostsResult, pendingCommunityCommentsResult, pendingCommunityReportsCount, pendingCommunityReportsResult] = await Promise.all([
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
      countCollection(payload, 'community-posts'),
      countCollection(payload, 'community-comments'),
      Promise.all([
        countCollection(payload, 'community-posts', { status: { in: ['pending', 'flagged'] } }),
        countCollection(payload, 'community-comments', { status: { in: ['pending', 'flagged'] } }),
      ]).then(([posts, comments]) => posts + comments),
      payload.find({
        collection: 'community-posts',
        depth: 1,
        limit: 8,
        pagination: false,
        overrideAccess: true,
        sort: 'createdAt',
        where: { status: { in: ['pending', 'flagged'] } },
      }),
      payload.find({
        collection: 'community-comments',
        depth: 1,
        limit: 8,
        pagination: false,
        overrideAccess: true,
        sort: 'createdAt',
        where: { status: { in: ['pending', 'flagged'] } },
      }),
      countCollection(payload, 'community-reports', { status: { equals: 'pending' } }),
      payload.find({
        collection: 'community-reports',
        depth: 1,
        limit: 8,
        pagination: false,
        overrideAccess: true,
        sort: '-createdAt',
        where: { status: { equals: 'pending' } },
      }),
    ])

    const pendingCommunityContent = [
      ...pendingCommunityPostsResult.docs.map((post) => ({ kind: 'post' as const, item: post as CommunityPost })),
      ...pendingCommunityCommentsResult.docs.map((comment) => ({ kind: 'comment' as const, item: comment as CommunityComment })),
    ].sort((a, b) => new Date(a.item.createdAt).getTime() - new Date(b.item.createdAt).getTime()).slice(0, 10)

    return { articles, newsStories, businesses, embassies, events, learningResources, practiceGroups, draftBusinesses, draftArticles, draftNewsStories, pendingSubmissionsCount, pendingSubmissions: pendingSubmissionsResult.docs as BusinessSubmission[], communityPosts, communityComments, pendingCommunityContentCount, pendingCommunityContent, pendingCommunityReportsCount, pendingCommunityReports: pendingCommunityReportsResult.docs as CommunityReport[] }
  } catch {
    return null
  }
}

function formatSubmissionDate(value: string): string {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Date unknown'
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date)
}

function reportTargetLabel(report: CommunityReport): string {
  if (report.targetType === 'post') {
    return report.post && typeof report.post === 'object' ? report.post.title : `Post #${report.post || 'unknown'}`
  }
  if (report.comment && typeof report.comment === 'object') return report.comment.body.slice(0, 110)
  return `Reply #${report.comment || 'unknown'}`
}

function communityContributionLabel(kind: 'post' | 'comment', item: CommunityPost | CommunityComment): string {
  if (kind === 'post' && 'title' in item) return item.title
  return 'body' in item ? item.body.slice(0, 130) : 'Community contribution'
}

function communityAuthorLabel(item: CommunityPost | CommunityComment): string {
  const author = item.author
  if (author && typeof author === 'object') return author.name || author.email || 'Expats.fi member'
  return `Member #${author || 'unknown'}`
}

function communityScreeningLabel(item: CommunityPost | CommunityComment): string {
  const signals = Array.isArray(item.screeningSignals) ? item.screeningSignals.filter((value): value is string => typeof value === 'string') : []
  if (signals.length) return signals.join(' · ')
  return item.status === 'flagged' ? 'Automatic screening asked for a closer look' : 'Awaiting a human decision'
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
    { label: 'Community posts', value: metrics?.communityPosts ?? null, href: '/admin/collections/community-posts' },
    { label: 'Community replies', value: metrics?.communityComments ?? null, href: '/admin/collections/community-comments' },
    { label: 'Community contributions to review', value: metrics?.pendingCommunityContentCount ?? null, href: '/admin/collections/community-posts?where%5Bstatus%5D%5Bin%5D%5B0%5D=pending&where%5Bstatus%5D%5Bin%5D%5B1%5D=flagged', tone: 'attention' },
    { label: 'Submissions to review', value: metrics?.pendingSubmissionsCount ?? null, href: '/admin/collections/business-submissions?where%5Bstatus%5D%5Bequals%5D=pending', tone: 'attention' },
    { label: 'Reports to review', value: metrics?.pendingCommunityReportsCount ?? null, href: '/admin/collections/community-reports?where%5Bstatus%5D%5Bequals%5D=pending', tone: 'attention' },
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

      <section className="expats-admin-dashboard__panel expats-admin-dashboard__review-panel" aria-labelledby="expats-admin-community-content">
        <div className="expats-admin-dashboard__panel-heading expats-admin-dashboard__review-heading">
          <div><p className="expats-admin-dashboard__eyebrow">Community contributions</p><h3 id="expats-admin-community-content">Posts and replies to review</h3></div>
          <CommunityReviewRunner />
        </div>
        <div className="expats-admin-dashboard__submission-list">
          {metrics?.pendingCommunityContent?.length ? metrics.pendingCommunityContent.map(({ kind, item }) => (
            <div className="expats-admin-dashboard__submission" key={`${kind}-${item.id}`}>
              <div className="expats-admin-dashboard__submission-info">
                <strong>{communityContributionLabel(kind, item)}</strong>
                <span>{kind === 'post' ? 'Post' : 'Reply'} by {communityAuthorLabel(item)} · {item.status === 'flagged' ? 'Needs attention' : 'New member review'}</span>
                <small className="expats-admin-dashboard__screening-note">{communityScreeningLabel(item)}</small>
                <time dateTime={item.createdAt}>Submitted {formatSubmissionDate(item.createdAt)}</time>
              </div>
              <div className="expats-admin-dashboard__submission-actions">
                <Link className="expats-admin-dashboard__open-review" href={`/admin/collections/community-${kind === 'post' ? 'posts' : 'comments'}/${item.id}`}>Open</Link>
                <CommunityContentAction action="approve" contentId={item.id} targetType={kind} />
                <CommunityContentAction action="approve-and-trust" contentId={item.id} targetType={kind} />
                <CommunityContentAction action="reject" contentId={item.id} targetType={kind} />
              </div>
            </div>
          )) : <p className="expats-admin-dashboard__empty-queue">Nothing is waiting. Run the review whenever new posts arrive, then make the final call here.</p>}
        </div>
      </section>

      <section className="expats-admin-dashboard__panel expats-admin-dashboard__review-panel" aria-labelledby="expats-admin-community-reports">
        <div className="expats-admin-dashboard__panel-heading expats-admin-dashboard__review-heading">
          <div><p className="expats-admin-dashboard__eyebrow">Community safety</p><h3 id="expats-admin-community-reports">Reports to review</h3></div>
          <Link className="expats-admin-dashboard__panel-link" href="/admin/collections/community-reports?where%5Bstatus%5D%5Bequals%5D=pending">Open full queue →</Link>
        </div>
        <div className="expats-admin-dashboard__submission-list">
          {metrics?.pendingCommunityReports?.length ? metrics.pendingCommunityReports.map((report) => (
            <div className="expats-admin-dashboard__submission" key={report.id}>
              <div className="expats-admin-dashboard__submission-info">
                <strong>{reportTargetLabel(report)}</strong>
                <span>{communityReportReasonLabels[report.reason]} · {report.targetType === 'post' ? 'Post' : 'Reply'}</span>
                <time dateTime={report.createdAt}>Reported {formatSubmissionDate(report.createdAt)}</time>
              </div>
              <div className="expats-admin-dashboard__submission-actions">
                <Link className="expats-admin-dashboard__open-review" href={`/admin/collections/community-reports/${report.id}`}>Open report</Link>
                <CommunityReportAction action="hide" reportId={report.id} confirmMessage="Hide the reported community content from public view?" />
                <CommunityReportAction action="dismiss" reportId={report.id} />
              </div>
            </div>
          )) : <p className="expats-admin-dashboard__empty-queue">No pending community reports. The board is quiet for now.</p>}
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
            <Link href="/admin/collections/community-posts"><strong>Review community posts</strong><span>Read conversations and hide content when needed</span><b aria-hidden="true">→</b></Link>
            <Link href="/admin/collections/community-reports?where%5Bstatus%5D%5Bequals%5D=pending"><strong>Review community reports</strong><span>Keep the member board welcoming</span><b aria-hidden="true">→</b></Link>
            <Link href="/admin/collections/events/create"><strong>List an event</strong><span>Add a community pick</span><b aria-hidden="true">＋</b></Link>
            <Link href="/admin/collections/embassies"><strong>Review embassies</strong><span>Check addresses and flags</span><b aria-hidden="true">→</b></Link>
          </div>
        </section>

        <section className="expats-admin-dashboard__panel" aria-labelledby="expats-admin-attention">
          <div className="expats-admin-dashboard__panel-heading"><div><p className="expats-admin-dashboard__eyebrow">Review queue</p><h3 id="expats-admin-attention">Needs attention</h3></div></div>
          <div className="expats-admin-dashboard__attention-list">
            <Link href="/admin/collections/community-posts"><span className="expats-admin-dashboard__status-dot expats-admin-dashboard__status-dot--red" /> <strong>{metrics?.pendingCommunityContentCount ?? '—'}</strong><span>community contributions waiting for review</span><b aria-hidden="true">→</b></Link>
            <Link href="/admin/collections/community-reports?where%5Bstatus%5D%5Bequals%5D=pending"><span className="expats-admin-dashboard__status-dot expats-admin-dashboard__status-dot--red" /> <strong>{metrics?.pendingCommunityReportsCount ?? '—'}</strong><span>community reports waiting for review</span><b aria-hidden="true">→</b></Link>
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
