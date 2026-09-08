import { writeFile } from 'node:fs/promises'
import { JSDOM } from 'jsdom'

const ORIGIN = 'https://expats.fi'
const SITEMAP_URL = `${ORIGIN}/sitemap.xml`
const OUTPUT_PATH = process.argv[2] || '/tmp/expats-fi-seo-audit.json'
const CONCURRENCY = 8
const TIMEOUT_MS = 20_000

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds))

function normalizeUrl(value) {
  const url = new URL(value, ORIGIN)
  url.hash = ''
  if (url.pathname !== '/') url.pathname = url.pathname.replace(/\/+$/, '')
  return url.toString()
}

async function request(url, options = {}, attempt = 0) {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'user-agent': 'Expats.fi internal SEO audit',
        ...options.headers,
      },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    })

    if (response.status >= 500 && attempt < 1) {
      await sleep(750)
      return request(url, options, attempt + 1)
    }

    return response
  } catch (error) {
    if (attempt < 1) {
      await sleep(750)
      return request(url, options, attempt + 1)
    }
    throw error
  }
}

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length)
  let cursor = 0

  async function run() {
    while (cursor < items.length) {
      const index = cursor++
      results[index] = await worker(items[index], index)
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run))
  return results
}

function metaContent(document, selector) {
  return document.querySelector(selector)?.getAttribute('content')?.trim() || ''
}

function textContent(element) {
  return element?.textContent?.replace(/\s+/g, ' ').trim() || ''
}

function jsonLdTypes(document) {
  const types = new Set()

  for (const script of document.querySelectorAll('script[type="application/ld+json"]')) {
    try {
      const parsed = JSON.parse(script.textContent)
      const entries = Array.isArray(parsed) ? parsed : [parsed]
      for (const entry of entries) {
        const graph = Array.isArray(entry?.['@graph']) ? entry['@graph'] : [entry]
        for (const node of graph) {
          const value = node?.['@type']
          for (const type of Array.isArray(value) ? value : [value]) {
            if (type) types.add(type)
          }
        }
      }
    } catch {
      types.add('INVALID_JSON_LD')
    }
  }

  return [...types]
}

async function inspectPage(url, index, total) {
  const startedAt = Date.now()
  const result = {
    url,
    initialStatus: null,
    status: null,
    finalUrl: '',
    redirectLocation: '',
    contentType: '',
    title: '',
    description: '',
    canonical: '',
    robots: '',
    h1: [],
    wordCount: 0,
    jsonLdTypes: [],
    internalLinks: [],
    images: 0,
    imagesMissingAlt: 0,
    elapsedMs: 0,
    error: '',
  }

  try {
    const initial = await request(url, { redirect: 'manual' })
    result.initialStatus = initial.status
    result.redirectLocation = initial.headers.get('location') || ''

    const response = await request(url)
    result.status = response.status
    result.finalUrl = normalizeUrl(response.url || url)
    result.contentType = response.headers.get('content-type') || ''

    if (result.contentType.includes('text/html')) {
      const html = await response.text()
      const dom = new JSDOM(html, { url: result.finalUrl })
      const { document } = dom.window
      result.title = textContent(document.querySelector('title'))
      result.description = metaContent(document, 'meta[name="description"]')
      result.canonical = document.querySelector('link[rel="canonical"]')?.href || ''
      result.robots = metaContent(document, 'meta[name="robots"]')
      result.h1 = [...document.querySelectorAll('h1')].map(textContent).filter(Boolean)
      result.jsonLdTypes = jsonLdTypes(document)

      const content = document.querySelector('main') || document.body
      result.wordCount = textContent(content).split(/\s+/).filter(Boolean).length

      const links = new Set()
      for (const anchor of document.querySelectorAll('a[href]')) {
        try {
          const target = new URL(anchor.getAttribute('href'), result.finalUrl)
          if (target.origin === ORIGIN && ['http:', 'https:'].includes(target.protocol)) {
            links.add(normalizeUrl(target))
          }
        } catch {}
      }
      result.internalLinks = [...links].sort()

      const images = [...document.querySelectorAll('img')]
      result.images = images.length
      result.imagesMissingAlt = images.filter((image) => image.getAttribute('alt') === null).length
      dom.window.close()
    }
  } catch (error) {
    result.error = error instanceof Error ? error.message : String(error)
  }

  result.elapsedMs = Date.now() - startedAt
  if ((index + 1) % 50 === 0 || index + 1 === total) {
    console.log(`Inspected ${index + 1}/${total} sitemap URLs`)
  }
  return result
}

function duplicates(pages, field) {
  const grouped = new Map()
  for (const page of pages) {
    const value = page[field]?.trim()
    if (!value) continue
    grouped.set(value, [...(grouped.get(value) || []), page.url])
  }
  return [...grouped.entries()]
    .filter(([, urls]) => urls.length > 1)
    .map(([value, urls]) => ({ value, urls }))
}

const sitemapResponse = await request(SITEMAP_URL)
if (!sitemapResponse.ok) throw new Error(`Sitemap returned ${sitemapResponse.status}`)
const sitemapXml = await sitemapResponse.text()
const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => normalizeUrl(match[1]))
  .filter((url) => url.startsWith(ORIGIN))

console.log(`Found ${sitemapUrls.length} URLs in the sitemap`)
const pages = await mapLimit(sitemapUrls, CONCURRENCY, (url, index) =>
  inspectPage(url, index, sitemapUrls.length),
)

const linkedUrls = [...new Set(pages.flatMap((page) => page.internalLinks))]
const sitemapSet = new Set(sitemapUrls)
const nonSitemapInternalUrls = linkedUrls.filter((url) => !sitemapSet.has(url))
  .filter((url) => new URL(url).pathname !== '/cdn-cgi/l/email-protection')

console.log(`Checking ${nonSitemapInternalUrls.length} linked URLs outside the sitemap`)
const linkedChecks = await mapLimit(nonSitemapInternalUrls, CONCURRENCY, async (url, index) => {
  const check = { url, status: null, finalUrl: '', error: '' }
  try {
    const response = await request(url)
    check.status = response.status
    check.finalUrl = normalizeUrl(response.url || url)
  } catch (error) {
    check.error = error instanceof Error ? error.message : String(error)
  }
  if ((index + 1) % 100 === 0 || index + 1 === nonSitemapInternalUrls.length) {
    console.log(`Checked ${index + 1}/${nonSitemapInternalUrls.length} linked URLs`)
  }
  return check
})

const normalizedCanonical = (page) => {
  try {
    return page.canonical ? normalizeUrl(page.canonical) : ''
  } catch {
    return page.canonical
  }
}

const findings = {
  sitemapNon200: pages.filter((page) => page.status !== 200 || page.error).map((page) => ({
    url: page.url,
    status: page.status,
    error: page.error,
  })),
  sitemapRedirects: pages.filter((page) => page.initialStatus >= 300 && page.initialStatus < 400).map((page) => ({
    url: page.url,
    status: page.initialStatus,
    location: page.redirectLocation,
    finalUrl: page.finalUrl,
  })),
  missingTitle: pages.filter((page) => !page.title).map((page) => page.url),
  missingDescription: pages.filter((page) => !page.description).map((page) => page.url),
  missingCanonical: pages.filter((page) => !page.canonical).map((page) => page.url),
  canonicalMismatch: pages.filter((page) => page.canonical && normalizedCanonical(page) !== page.url).map((page) => ({
    url: page.url,
    canonical: page.canonical,
  })),
  noindexInSitemap: pages.filter((page) => /noindex/i.test(page.robots)).map((page) => ({
    url: page.url,
    robots: page.robots,
  })),
  missingH1: pages.filter((page) => page.h1.length === 0).map((page) => page.url),
  multipleH1: pages.filter((page) => page.h1.length > 1).map((page) => ({ url: page.url, h1: page.h1 })),
  duplicateTitles: duplicates(pages, 'title'),
  duplicateDescriptions: duplicates(pages, 'description'),
  missingImageAlt: pages.filter((page) => page.imagesMissingAlt > 0).map((page) => ({
    url: page.url,
    missing: page.imagesMissingAlt,
    total: page.images,
  })),
  brokenInternalLinks: linkedChecks.filter((check) => check.error || check.status >= 400).map((check) => ({
    ...check,
    foundOn: pages.filter((page) => page.internalLinks.includes(check.url)).map((page) => page.url),
  })),
}

const report = {
  generatedAt: new Date().toISOString(),
  origin: ORIGIN,
  sitemapUrl: SITEMAP_URL,
  totals: {
    sitemapUrls: sitemapUrls.length,
    internalUrlsOutsideSitemap: nonSitemapInternalUrls.length,
    ...Object.fromEntries(Object.entries(findings).map(([key, value]) => [key, value.length])),
  },
  findings,
  pages,
  linkedChecks,
}

await writeFile(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`)
console.log(`Audit written to ${OUTPUT_PATH}`)
console.log(JSON.stringify(report.totals, null, 2))
