import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { CommunityCommentForm } from '@/components/CommunityCommentForm'
import { CommunityReportButton } from '@/components/CommunityReportButton'
import { getCurrentMember } from '@/lib/member-auth'
import { formatCommunityDate, getCommunityComments, getCommunityPost, memberName, topicLabel } from '@/lib/community'

export const dynamic = 'force-dynamic'

type RouteContext = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: RouteContext): Promise<Metadata> {
  const { slug } = await params
  const post = await getCommunityPost(slug)
  if (!post) return { title: 'Community conversation' }
  return { title: post.title, description: post.body.slice(0, 155), alternates: { canonical: `/community/board/${post.slug}/` } }
}

export default async function CommunityPostPage({ params }: RouteContext) {
  const { slug } = await params
  const member = await getCurrentMember(await headers())
  const post = await getCommunityPost(slug)
  if (!post) notFound()
  const comments = await getCommunityComments(post.id)

  return (
    <main id="main" className="community-post-page">
      <div className="shell community-post-page__shell">
        <Link className="back-link" href="/community/board/">← Community board</Link>
        <header className="community-post-page__header">
          <div className="community-post-page__meta"><span>{topicLabel(post.topic)}</span><time dateTime={post.createdAt}>{formatCommunityDate(post.createdAt)}</time></div>
          <h1>{post.title}</h1>
          <p className="community-post-page__byline">By {memberName(post.author)}</p>
        </header>
        <div className="community-post-page__layout">
          <article className="community-post-page__story">
            <div className="community-post-page__body">{post.body}</div>
            <div className="community-post-page__report"><CommunityReportButton targetType="post" targetId={post.id} isAuthenticated={Boolean(member)} nextPath={`/community/board/${post.slug}/`} /></div>
            <section className="community-comments" aria-labelledby="community-comments-title">
              <div className="community-comments__heading"><div><p className="eyebrow">Join the conversation</p><h2 id="community-comments-title">{comments.length} {comments.length === 1 ? 'reply' : 'replies'}</h2></div><span>Keep it kind and practical.</span></div>
              {comments.length ? <div className="community-comments__list">{comments.map((comment) => <article className="community-comment" key={comment.id}><div className="community-comment__meta"><strong>{memberName(comment.author)}</strong><time dateTime={comment.createdAt}>{formatCommunityDate(comment.createdAt)}</time></div><p>{comment.body}</p><CommunityReportButton targetType="comment" targetId={comment.id} isAuthenticated={Boolean(member)} nextPath={`/community/board/${post.slug}/`} /></article>)}</div> : <p className="community-comments__empty">No replies yet. A thoughtful first answer can change the whole shape of a conversation.</p>}
            <CommunityCommentForm postSlug={post.slug} isAuthenticated={Boolean(member)} canPost={member?.communityTrust !== 'restricted'} rulesAccepted={Boolean(member?.communityRulesAcceptedAt)} />
            </section>
          </article>
          <aside className="community-post-page__aside"><div><strong>Good community habits</strong><p>Share what worked for you, say when advice depends on a municipality or date, and leave room for a different experience.</p></div><div><strong>Need official help?</strong><p>Community answers are personal experience. Use our <Link href="/resources/">guide library</Link> and the linked authorities for decisions that affect your permit, housing, work or benefits.</p></div></aside>
        </div>
      </div>
    </main>
  )
}
