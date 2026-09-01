import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { AccountActions } from '@/components/AccountActions'
import { AccountPreferencesForm } from '@/components/AccountPreferencesForm'
import { AccountProfileForm } from '@/components/AccountProfileForm'
import { AccountSecurity } from '@/components/AccountSecurity'
import { ArticleCard } from '@/components/ArticleCard'
import { BusinessCard } from '@/components/BusinessCard'
import { getMemberSubmissions } from '@/lib/business-submissions'
import { formatCommunityDate, getMemberCommunityPosts, topicLabel } from '@/lib/community'
import { getCurrentMember } from '@/lib/member-auth'
import { getSavedArticles } from '@/lib/saved-articles'
import { getSavedBusinesses } from '@/lib/saved-businesses'

export const metadata: Metadata = { title: 'My account', robots: { index: false, follow: false } }

const submissionStatusLabels = {
  pending: 'Pending review',
  approved: 'Approved',
  'needs-changes': 'Needs changes',
  declined: 'Declined',
} as const

const communityStatus = {
  pending: { label: 'Awaiting review', tone: 'pending' },
  flagged: { label: 'Needs review', tone: 'needs-changes' },
  published: { label: 'Published', tone: 'approved' },
  hidden: { label: 'Hidden', tone: 'declined' },
  rejected: { label: 'Not published', tone: 'declined' },
} as const

function submissionDate(value: string) {
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(value))
}

export default async function AccountPage() {
  const member = await getCurrentMember(await headers())
  if (!member) redirect('/login/')

  const [savedArticles, savedBusinesses, submissions, communityPosts] = await Promise.all([
    getSavedArticles(member.id),
    getSavedBusinesses(member.id),
    getMemberSubmissions(member.id),
    getMemberCommunityPosts(member.id),
  ])

  return (
    <main id="main" className="account-page">
      <div className="shell account-page__layout">
        <header className="account-page__header">
          <div className="account-avatar" aria-hidden="true">{member.name.slice(0, 1).toUpperCase()}</div>
          <div>
            <p className="eyebrow">My account</p>
            <h1>Hello, {member.name.split(' ')[0]}.</h1>
            <p>{member.email}</p>
          </div>
          <AccountActions />
        </header>

        <div className="account-content">
          <section className="account-settings-grid" aria-label="Account settings">
            <AccountProfileForm initialName={member.name} initialCity={member.city} initialLanguages={member.languages} initialArrivalStage={member.arrivalStage} />
            <AccountPreferencesForm initialEmailUpdates={member.emailUpdates} initialInterests={member.interests} initialNewsletter={member.newsletter} />
          </section>

          <section className="account-section" aria-labelledby="saved-guides-title">
            <div className="account-section__heading">
              <div><p className="eyebrow">Saved for later</p><h2 id="saved-guides-title">Your Finland guides.</h2></div>
              <span className="account-section__count">{savedArticles.length} {savedArticles.length === 1 ? 'guide' : 'guides'}</span>
            </div>
            {savedArticles.length ? <div className="article-grid">{savedArticles.map((article) => <ArticleCard article={article} key={article.id} />)}</div> : (
              <div className="account-empty" aria-labelledby="saved-guides-empty-title">
                <span aria-hidden="true">♡</span>
                <div>
                  <h3 id="saved-guides-empty-title">Keep useful answers close.</h3>
                  <p>Save a guide whenever you find something you want to come back to. Your saved reading will appear here.</p>
                  <Link className="text-link" href="/resources/">Browse the guide library <span aria-hidden="true">→</span></Link>
                </div>
              </div>
            )}
          </section>

          <section className="account-section" aria-labelledby="saved-businesses-title">
            <div className="account-section__heading">
              <div><p className="eyebrow">Your shortlist</p><h2 id="saved-businesses-title">Saved businesses.</h2></div>
              <span className="account-section__count">{savedBusinesses.length} {savedBusinesses.length === 1 ? 'business' : 'businesses'}</span>
            </div>
            {savedBusinesses.length ? <div className="business-grid">{savedBusinesses.map((business) => <BusinessCard business={business} key={business.id} />)}</div> : (
              <div className="account-empty" aria-labelledby="saved-businesses-empty-title">
                <span aria-hidden="true">♡</span>
                <div>
                  <h3 id="saved-businesses-empty-title">Keep good local finds handy.</h3>
                  <p>Save an expat-owned business from its directory card or profile and it will appear here.</p>
                  <Link className="text-link" href="/businesses/#business-directory">Browse the business directory <span aria-hidden="true">→</span></Link>
                </div>
              </div>
            )}
          </section>

          <section className="account-section" aria-labelledby="submissions-title">
            <div className="account-section__heading">
              <div><p className="eyebrow">Community contributions</p><h2 id="submissions-title">My submissions.</h2></div>
              <Link className="text-link" href="/submit-business/">Submit a business <span aria-hidden="true">→</span></Link>
            </div>
            {submissions.length ? <div className="account-submissions">{submissions.map((submission) => <article className="account-submission" key={submission.id}><div><h3>{submission.businessName}</h3><p>{submission.location} · {submission.category}</p></div><div className="account-submission__meta"><span className={`submission-status submission-status--${submission.status}`}>{submissionStatusLabels[submission.status]}</span><time dateTime={submission.createdAt}>Submitted {submissionDate(submission.createdAt)}</time>{submission.reviewedAt && <time dateTime={submission.reviewedAt}>Reviewed {submissionDate(submission.reviewedAt)}</time>}</div></article>)}</div> : (
              <div className="account-empty" aria-labelledby="submissions-empty-title">
                <span aria-hidden="true">＋</span>
                <div>
                  <h3 id="submissions-empty-title">Know a business people should find?</h3>
                  <p>Send us the essentials and keep an eye on the review status here.</p>
                  <Link className="text-link" href="/submit-business/">Start a submission <span aria-hidden="true">→</span></Link>
                </div>
              </div>
            )}
          </section>

          <section className="account-section" aria-labelledby="community-posts-title">
            <div className="account-section__heading">
              <div><p className="eyebrow">Your conversations</p><h2 id="community-posts-title">My community posts.</h2></div>
              <Link className="text-link" href="/community/board/">Open the board <span aria-hidden="true">→</span></Link>
            </div>
            {communityPosts.length ? <div className="account-submissions account-community-posts">{communityPosts.map((post) => { const status = communityStatus[post.status]; return <article className="account-submission" key={post.id}><div><h3>{post.status === 'published' ? <Link href={`/community/board/${post.slug}/`}>{post.title}</Link> : post.title}</h3><p>{topicLabel(post.topic)} · Started {formatCommunityDate(post.createdAt)}</p></div><div className="account-submission__meta"><span className={`submission-status submission-status--${status.tone}`}>{status.label}</span></div></article> })}</div> : (
              <div className="account-empty" aria-labelledby="community-posts-empty-title">
                <span aria-hidden="true">✦</span>
                <div>
                  <h3 id="community-posts-empty-title">Your questions can help the next person.</h3>
                  <p>Start a conversation when you have a Finland question, a useful discovery or an experience worth sharing.</p>
                  <Link className="text-link" href="/community/board/">Visit the community board <span aria-hidden="true">→</span></Link>
                </div>
              </div>
            )}
          </section>

          <AccountSecurity provider={member.provider} />
        </div>
      </div>
    </main>
  )
}
