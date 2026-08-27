import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { AccountActions } from '@/components/AccountActions'
import { ArticleCard } from '@/components/ArticleCard'
import { getCurrentMember } from '@/lib/member-auth'
import { getSavedArticles } from '@/lib/saved-articles'

export const metadata: Metadata = { title: 'My account' }

export default async function AccountPage() {
  const member = await getCurrentMember(await headers())
  if (!member) redirect('/login/')
  const savedArticles = await getSavedArticles(member.id)

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
          <section className="account-empty account-empty--future" aria-labelledby="account-coming-title">
            <span aria-hidden="true">⌂</span>
            <div>
              <h2 id="account-coming-title">This is your space.</h2>
              <p>Favourite businesses, submissions and more member tools can live here as Expats.fi grows.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
