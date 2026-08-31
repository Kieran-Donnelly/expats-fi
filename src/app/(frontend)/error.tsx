'use client'

import Link from 'next/link'

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main id="main" className="status-page status-page--error">
      <section className="shell status-page__hero" aria-labelledby="error-heading">
        <div className="status-page__code" aria-hidden="true">Oops</div>
        <div className="status-page__copy">
          <p className="eyebrow">A small wobble at our end</p>
          <h1 id="error-heading">That page did not load properly.</h1>
          <p>You have not done anything wrong. Give it another go, head back to the homepage, or let us know if it keeps happening.</p>
          <div className="status-page__actions">
            <button className="button" type="button" onClick={reset}>Try again</button>
            <Link className="button button--quiet" href="/">Back to the homepage</Link>
          </div>
          <p className="status-page__help">Still stuck? <a href="mailto:hello@expats.fi?subject=Page%20error%20on%20Expats.fi">Tell us what happened</a> and we will take a look.</p>
        </div>
      </section>
    </main>
  )
}
