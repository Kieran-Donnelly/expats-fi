'use client'

import { useEffect, useRef, useState } from 'react'
import type { Map as LeafletMap, Marker as LeafletMarker } from 'leaflet'

import type { EatSpot } from '@/data/eats'

function openStreetMapUrl(spot: EatSpot) {
  const { latitude, longitude } = spot.coordinates
  return `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=17/${latitude}/${longitude}`
}

function EatsMapCanvas({ spots, selectedSlug, onSelect, compact }: {
  spots: EatSpot[]
  selectedSlug?: string
  onSelect: (slug: string) => void
  compact: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LeafletMap | null>(null)
  const markersRef = useRef(new Map<string, LeafletMarker>())
  const selectRef = useRef(onSelect)

  useEffect(() => {
    selectRef.current = onSelect
  }, [onSelect])

  useEffect(() => {
    if (!containerRef.current || !spots.length) return

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
      spots.forEach((spot, index) => {
        const { latitude, longitude } = spot.coordinates
        const marker = L.marker([latitude, longitude], {
          icon: L.divIcon({
            className: 'event-map-pin-wrap',
            html: `<span class="event-map-pin eats-map-pin"><b>${index + 1}</b></span>`,
            iconAnchor: [18, 42],
            iconSize: [36, 42],
            popupAnchor: [0, -38],
          }),
          title: spot.name,
        })

        const popup = document.createElement('div')
        popup.className = 'event-map-popup'
        const title = document.createElement('strong')
        title.textContent = spot.name
        const details = document.createElement('span')
        details.textContent = spot.address
        const link = document.createElement('a')
        link.href = spot.url
        link.target = '_blank'
        link.rel = 'noreferrer'
        link.textContent = 'Check current details ↗'
        popup.append(title, details, link)

        marker.bindPopup(popup).on('click', () => selectRef.current(spot.slug)).addTo(map)
        markers.set(spot.slug, marker)
        bounds.extend([latitude, longitude])
      })

      if (spots.length === 1) map.setView(bounds.getCenter(), 15)
      else map.fitBounds(bounds, { padding: compact ? [28, 28] : [44, 44], maxZoom: compact ? 14 : 13 })
    }

    createMap()
    return () => {
      cancelled = true
      markers.clear()
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [compact, spots])

  useEffect(() => {
    if (!selectedSlug) return
    const spot = spots.find((item) => item.slug === selectedSlug)
    const marker = markersRef.current.get(selectedSlug)
    if (!spot || !marker || !mapRef.current) return
    mapRef.current.flyTo(
      [spot.coordinates.latitude, spot.coordinates.longitude],
      Math.max(mapRef.current.getZoom(), 14),
      { duration: 0.65 },
    )
    marker.openPopup()
  }, [selectedSlug, spots])

  return <div className="event-map__canvas" data-compact={compact || undefined} ref={containerRef} role="region" aria-label="Interactive map of Helsinki places to eat" />
}

export function EatsMap({ spots, compact = false }: { spots: EatSpot[]; compact?: boolean }) {
  const [selectedSlug, setSelectedSlug] = useState(spots[0]?.slug)
  const activeSlug = spots.some((spot) => spot.slug === selectedSlug) ? selectedSlug : spots[0]?.slug
  if (!spots.length) return null

  return (
    <section className="events-map eats-map" data-compact={compact || undefined} aria-labelledby={compact ? 'area-eats-map-heading' : 'eats-map-heading'}>
      <div className="events-map__intro">
        <div><p className="eyebrow">Pick it on the map</p><h3 id={compact ? 'area-eats-map-heading' : 'eats-map-heading'}>{compact ? 'What is nearby?' : 'See where everything is'}</h3></div>
        <p>{spots.length} pinpointed {spots.length === 1 ? 'place' : 'places'}</p>
      </div>
      <div className="events-map__layout">
        <EatsMapCanvas spots={spots} selectedSlug={activeSlug} onSelect={setSelectedSlug} compact={compact} />
        <ol className="events-map__list">
          {spots.map((spot, index) => (
            <li key={spot.slug} data-active={spot.slug === activeSlug || undefined}>
              <button type="button" onClick={() => setSelectedSlug(spot.slug)} aria-pressed={spot.slug === activeSlug}>
                <span>{index + 1}</span><span><strong>{spot.name}</strong><small>{spot.address}</small></span>
              </button>
              <a href={openStreetMapUrl(spot)} target="_blank" rel="noreferrer" aria-label={`Open ${spot.name} in OpenStreetMap`}>↗</a>
            </li>
          ))}
        </ol>
      </div>
      <p className="events-map__note">Tap a name to find its pin. Open the arrow for a larger map and directions.</p>
    </section>
  )
}
