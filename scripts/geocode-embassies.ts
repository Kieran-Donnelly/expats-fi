import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

import { embassySeeds } from '../src/data/embassies'

type GeocodeResult = {
  lat: number
  lng: number
  precision: 'address' | 'city'
  displayName: string
}

const cachePath = path.resolve('scripts/embassy-geocode-cache.json')
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

let cache: Record<string, GeocodeResult> = {}
try {
  cache = JSON.parse(await readFile(cachePath, 'utf8')) as Record<string, GeocodeResult>
} catch {
  await mkdir(path.dirname(cachePath), { recursive: true })
}

async function search(query: string) {
  const params = new URLSearchParams({
    q: query,
    format: 'jsonv2',
    limit: '1',
    addressdetails: '1',
  })
  const response = await fetch(`https://nominatim.openstreetmap.org/search?${params}`, {
    headers: {
      'User-Agent': 'expats.fi-embassy-map/1.0 (https://expats.fi)',
      'Accept-Language': 'en',
    },
  })
  if (!response.ok) throw new Error(`Nominatim returned ${response.status}`)
  const body = await response.json() as Array<{ lat: string; lon: string; display_name: string; addresstype?: string }>
  await delay(1100)
  return body[0]
}

const targets = embassySeeds.filter((embassy) => embassy.address)
for (const [index, embassy] of targets.entries()) {
  if (cache[embassy.countryCode]?.precision === 'address') {
    console.log(`${index + 1}/${targets.length} ${embassy.country}: cached`)
    continue
  }

  const addressLines = embassy.address!.split('\n').map((line) => line.trim()).filter(Boolean)
  const streetIndex = addressLines.findIndex((line) =>
    /\d/.test(line) && !/^(embassy|high commission|mission|consulate|holy see|taipei representative|saint vincent|box|p\.o\.)/i.test(line),
  )
  const cleanLine = (line: string) => line
    .replace(/\s*\([^)]*floor[^)]*\)/gi, '')
    .replace(/,?\s*(\d+(st|nd|rd|th)?\s+)?floors?\b.*$/i, '')
    .replace(/,?\s*\d+\s*(tr|tv|fl)\b.*$/i, '')
    .trim()
  const addressOnly = (streetIndex >= 0 ? addressLines.slice(streetIndex) : addressLines)
    .filter((line) => !/^(box|p\.o\.)/i.test(line))
    .map(cleanLine)
  const queries = [
    addressOnly.join(', '),
    streetIndex >= 0 ? `${cleanLine(addressLines[streetIndex])}, ${embassy.city}, ${embassy.hostCountry}` : '',
    `${embassy.missionName}, ${embassy.city}, ${embassy.hostCountry}`,
    `${embassy.city}, ${embassy.hostCountry}`,
  ].filter(Boolean)

  let match: Awaited<ReturnType<typeof search>> | undefined
  let precision: GeocodeResult['precision'] = 'address'
  for (const [queryIndex, query] of queries.entries()) {
    match = await search(query)
    if (match) {
      precision = queryIndex === queries.length - 1 || ['city', 'town', 'village', 'municipality', 'administrative'].includes(match.addresstype || '') ? 'city' : 'address'
      break
    }
  }

  if (!match) throw new Error(`Could not geocode ${embassy.country} (${embassy.address})`)
  cache[embassy.countryCode] = {
    lat: Number(match.lat),
    lng: Number(match.lon),
    precision,
    displayName: match.display_name,
  }
  await writeFile(cachePath, JSON.stringify(cache, null, 2) + '\n')
  console.log(`${index + 1}/${targets.length} ${embassy.country}: ${precision} @ ${match.lat}, ${match.lon}`)
}

console.log(`Geocoded ${Object.keys(cache).length} embassy locations.`)
