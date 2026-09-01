import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'

import { CommunityPostForm } from '@/components/CommunityPostForm'
import { CommunityReportButton } from '@/components/CommunityReportButton'
import { getCurrentMember } from '@/lib/member-auth'
import { communityAuthorName, getCommunityPostCommentCounts, getCommunityPosts, topicLabel } from '@/lib/community'
import { communityTopicOptions, isCommunityTopic } from '@/lib/community-options'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Community board',
  description: 'Ask questions, share practical Finland advice and meet other people building a life here.',
  alternates: { canonical: '/community/board/' },
}

type BoardSearchParams = Promise<{ topic?: string; q?: string }>

function excerpt(value: string, maxLength = 260) {
  const clean = value.trim().replace(/\s+/g, ' ')
  return clean.length > maxLength ? `${clean.slice(0, maxLength).trimEnd()}…` : clean
}

function displayDate(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Date unknown'
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(date)
}

export default async function CommunityBoardPage({ searchParams }: { searchParams: BoardSearchParams }) {
  const [member, params] = await Promise.all([getCurrentMember(await headers()), searchParams])
  const selectedTopic = isCommunityTopic(params.topic) ? params.topic : undefined
  const query = typeof params.q === 'string' ? params.q.trim().slice(0, 80) : ''
  const posts = await getCommunityPosts({ topic: selectedTopic, query })
  const commentCounts = await getCommunityPostCommentCounts(posts.map((post) => post.id))

  return (
    <main id="main" className="community-board-page">
      <header className="community-board-hero">
        <div className="shell community-board-hero__inner">
          <div><Link className="back-link" href="/community/">← Community in Helsinki</Link><p className="eyebrow">The Expats.fi community board</p><h1>A place to ask, share and find your people.</h1><p>Practical questions, small discoveries and the kind of local knowledge that makes Finland feel easier to live in.</p><div className="community-board-hero__actions"><a className="button" href="#community-conversations">Browse conversations</a><a className="button button--secondary" href="#start-a-conversation">Start a post</a></div></div>
          <aside><strong>Your name can stay private</strong><p>Post or answer under a friendly anonymous alias. The public will not see your account, but moderators can still step in if somebody abuses the feature.</p><Link href="/community/rules/">See how anonymity and moderation work →</Link></aside>
        </div>
      </header>

      <div className="shell community-board__layout">
        <div id="start-a-conversation" className="community-board__composer"><CommunityPostForm isAuthenticated={Boolean(member)} canPost={member?.communityTrust !== 'restricted'} rulesAccepted={Boolean(member?.communityRulesAcceptedAt)} /></div>

        <section id="community-conversations" className="community-board-feed" aria-labelledby="community-board-feed-title">
          <div className="community-board-feed__heading"><div><p className="eyebrow">Recent conversations</p><h2 id="community-board-feed-title">What people are talking about</h2></div><span>{posts.length} {posts.length === 1 ? 'conversation' : 'conversations'}</span></div>
          <form className="community-board-filter" method="get">
            <label>Search<input type="search" name="q" defaultValue={query} placeholder="Search the board" /></label>
            <label>Topic<select name="topic" defaultValue={selectedTopic || ''}><option value="">All topics</option>{communityTopicOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}</select></label>
            <button className="button button--small" type="submit">Filter</button>
            {(query || selectedTopic) && <Link className="community-board-filter__clear" href="/community/board/">Clear</Link>}
          </form>

          {posts.length ? <div className="community-board-feed__list">{posts.map((post) => (
            <article className="community-post-card" key={post.id}>
              <div className="community-post-card__meta"><span>{topicLabel(post.topic)}</span><time dateTime={post.createdAt}>{displayDate(post.createdAt)}</time></div>
              <h3><Link href={`/community/board/${post.slug}/`}>{post.title}</Link></h3>
              <p className="community-post-card__body">{excerpt(post.body)}</p>
              <div className="community-post-card__footer"><span>By {communityAuthorName(post)}</span><span>{commentCounts.get(post.id) || 0} {commentCounts.get(post.id) === 1 ? 'reply' : 'replies'}</span><Link className="text-link" href={`/community/board/${post.slug}/`}>Open conversation <span aria-hidden="true">→</span></Link><CommunityReportButton targetType="post" targetId={post.id} isAuthenticated={Boolean(member)} nextPath={`/community/board/${post.slug}/`} /></div>
            </article>
          ))}</div> : (
            <div className="community-empty"><span aria-hidden="true">＋</span><div><h3>{query || selectedTopic ? 'No conversations match that search.' : 'Be the first to start a conversation.'}</h3><p>{query || selectedTopic ? 'Try a different phrase or clear the filters. The board is still growing.' : 'Ask about a neighbourhood, share a small Finland win or explain something you wish you had known sooner.'}</p>{(query || selectedTopic) && <Link className="text-link" href="/community/board/">Show all conversations <span aria-hidden="true">→</span></Link>}</div></div>
          )}
        </section>
      </div>
    </main>
  )
}
