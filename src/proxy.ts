import { NextResponse } from 'next/server'

/**
 * Let the application serve both URL forms directly.
 *
 * Expats.fi publishes trailing-slash canonicals and sitemap URLs, but the
 * production edge currently normalises those requests before they reach the
 * app. Redirecting them back to the slash form here creates a redirect loop
 * for fresh visitors arriving from search or social links.
 */
export function proxy() {
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api(?:/|$)|admin(?:/|$)|_next(?:/|$)).*)'],
}
