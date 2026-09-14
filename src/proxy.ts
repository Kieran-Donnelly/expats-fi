import { NextRequest, NextResponse } from 'next/server'

/**
 * Keep public page URLs on the same trailing-slash convention used by our
 * canonicals and sitemap. Service routes are excluded by the matcher so
 * Payload, the admin panel and OAuth callbacks keep their exact URLs.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/' || pathname.endsWith('/') || /\.[^/]+$/.test(pathname)) {
    return NextResponse.next()
  }

  // Use the platform URL object here. NextURL applies the app's global slash
  // setting while cloning and would otherwise strip the slash we are adding.
  const canonicalUrl = new URL(request.url)
  canonicalUrl.pathname = `${pathname}/`

  return NextResponse.redirect(canonicalUrl, 308)
}

export const config = {
  matcher: ['/((?!api(?:/|$)|admin(?:/|$)|_next(?:/|$)).*)'],
}
