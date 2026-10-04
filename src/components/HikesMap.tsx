'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { Map as LeafletMap, Marker as LeafletMarker } from 'leaflet'

import type { HikeGuide } from '@/data/hikes'
import { hikeGoogleMapsUrl, hikeHslUrl } from '@/data/hikes'
import { useNearViewport } from '@/hooks/useNearViewport'

function HikesMapCanvas({ hikes, selectedSlug, onSelect }: {
  hikes: readonly HikeGuide[]
  selectedSlug?: string
  onSelect: (slug: string) => void
}) {
  const [containerRef, shouldLoad] = useNearViewport<HTMLDivElement>()
  const mapRef = useRef<LeafletMap | null>(null)
  const markersRef = useRef(new Map<string, LeafletMarker>())
  const selectRef = useRef(onSelect)

  useEffect(() => { selectRef.current = onSelect }, [onSelect])

  useEffect(() => {
    if (!shouldLoad || !containerRef.current || !hikes.length) return

    let cancelled = false
    const markers = markersRef.current

    async function createMap() {
      const L = await import('leaflet')
      if (cancelled || !containerRef.current) return

      const map = L.map(containerRef.current, { scrollWheelZoom: false, zoomControl: true })
      mapRef.current = map
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map)

      const bounds = L.latLngBounds([])
      hikes.forEach((hike, index) => {
        const marker = L.marker([hike.latitude, hike.longitude], {
          icon: L.divIcon({
            className: 'event-map-pin-wrap',
            html: `<span class="event-map-pin hike-map-pin"><b>${index + 1}</b></span>`,
            iconAnchor: [18, 42],
            iconSize: [36, 42],
          }),
          title: hike.name,
        })
        marker.on('click', () => selectRef.current(hike.slug)).addTo(map)
        markers.set(hike.slug, marker)
        bounds.extend([hike.latitude, hike.longitude])
      })

      map.fitBounds(bounds, { padding: [44, 44], maxZoom: 11 })
    }

    createMap()
    return () => {
      cancelled = true
      markers.clear()
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [containerRef, hikes, shouldLoad])

  useEffect(() => {
    if (!selectedSlug || !mapRef.current) return
    const hike = hikes.find((item) => item.slug === selectedSlug)
    const marker = markersRef.current.get(selectedSlug)
    if (!hike || !marker) return
    const point: [number, number] = [hike.latitude, hike.longitude]
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) mapRef.current.setView(point, 12, { animate: false })
    else mapRef.current.flyTo(point, 12, { duration: .65 })
  }, [hikes, selectedSlug])

  return <div className="event-map__canvas" ref={containerRef} role="region" aria-busy={!shouldLoad} aria-label="Interactive map of walks and hiking areas around Helsinki" />
}

export function HikesMap({ hikes }: { hikes: readonly HikeGuide[] }) {
  const [query, setQuery] = useState('')
  const [duration, setDuration] = useState('')
  const [needGrill, setNeedGrill] = useState(false)
  const [needSwim, setNeedSwim] = useState(false)
  const [selectedSlug, setSelectedSlug] = useState<string>()
  const filtered = useMemo(() => {
    const search = query.trim().toLocaleLowerCase('en')
    return hikes.filter((hike) => {
      if (duration && hike.duration !== duration) return false
      if (needGrill && !hike.grillAvailable) return false
      if (needSwim && !hike.swimming) return false
      return !search || `${hike.name} ${hike.area} ${hike.landscape} ${hike.summary}`.toLocaleLowerCase('en').includes(search)
    })
  }, [duration, hikes, needGrill, needSwim, query])
  const activeSlug = filtered.some((item) => item.slug === selectedSlug) ? selectedSlug : filtered[0]?.slug

  return (
    <section className="hike-map" aria-labelledby="hike-map-heading">
      <div className="hike-map__intro">
        <div><p className="eyebrow">Start with the map</p><h2 id="hike-map-heading">Find a walk that fits the day.</h2></div>
        <p>{filtered.length} of {hikes.length} places shown</p>
      </div>
      <div className="hike-map__filters">
        <label>Search<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Lake, forest, Vuosaari…" /></label>
        <label>Time<select value={duration} onChange={(event) => setDuration(event.target.value)}><option value="">Any length</option><option>Under 3 hours</option><option>Half day</option><option>Full day</option></select></label>
        <label className="hike-map__check"><input type="checkbox" checked={needGrill} onChange={(event) => setNeedGrill(event.target.checked)} />Official grill place</label>
        <label className="hike-map__check"><input type="checkbox" checked={needSwim} onChange={(event) => setNeedSwim(event.target.checked)} />Swimming option</label>
      </div>
      {filtered.length ? (
        <div className="hike-map__layout">
          <HikesMapCanvas hikes={filtered} selectedSlug={activeSlug} onSelect={setSelectedSlug} />
          <ol className="hike-map__list">
            {filtered.map((hike, index) => (
              <li key={hike.slug} data-active={hike.slug === activeSlug || undefined}>
                <button type="button" onClick={() => setSelectedSlug(hike.slug)} aria-pressed={hike.slug === activeSlug}>
                  <span>{index + 1}</span>
                  <span><strong>{hike.name}</strong><small>{hike.area} · {hike.duration}</small></span>
                </button>
                <a href={`#${hike.slug}`} aria-label={`Read the ${hike.name} guide`}>↓</a>
              </li>
            ))}
          </ol>
        </div>
      ) : <div className="empty-state"><h3>No exact match</h3><p>Remove one filter and the nearby options will return.</p></div>}
      {activeSlug && (() => {
        const hike = filtered.find((item) => item.slug === activeSlug)
        if (!hike) return null
        return <div className="hike-map__actions"><strong>{hike.name}</strong><a href={hikeHslUrl(hike)} target="_blank" rel="noreferrer">Plan with HSL ↗</a><a href={hikeGoogleMapsUrl(hike)} target="_blank" rel="noreferrer">Driving directions ↗</a></div>
      })()}
    </section>
  )
}
