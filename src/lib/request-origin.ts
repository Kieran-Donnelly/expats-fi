function normalizeOrigin(value: string | null | undefined): string | null {
  if (!value) return null

  try {
    const url = new URL(value)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return null
    return url.origin
  } catch {
    return null
  }
}

/**
 * Check a browser Origin header against the public application URL.
 *
 * Railway can terminate TLS and forward the request with an internal URL, so
 * request.url is not a reliable public origin in production. The configured
 * public URL is authoritative when present; the request URL remains the local
 * development fallback.
 */
export function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get('origin')
  if (!origin) return true

  const expectedOrigin = normalizeOrigin(process.env.NEXT_PUBLIC_SERVER_URL) || new URL(request.url).origin
  return normalizeOrigin(origin) === expectedOrigin
}
