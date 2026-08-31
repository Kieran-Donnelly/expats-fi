'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { Map as LeafletMap, Marker as LeafletMarker } from 'leaflet'

import type { SportsListing } from '@/data/sports'

type MappedSportsListing = SportsListing & { coordinates: NonNullable<SportsListing['coordinates']> }

function hasCoordinates(listing: SportsListing): listing is MappedSportsListing {
  return Boolean(listing.coordinates)
}

function SportsMapCanvas({ listings, selectedSlug, onSelect }: {
  listings: MappedSportsListing[]
  selectedSlug?: string
  onSelect?: (slug: string) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LeafletMap | null>(null)
  const markersRef = useRef(new Map<string, LeafletMarker>())
  const selectRef = useRef(onSelect)

  useEffect(() => {
    selectRef.current = onSelect
  }, [onSelect])

  useEffect(() => {
    if (!containerRef.current || !listings.length) return

    let cancelled = false
    const markers = markersRef.current

    async function createMap() {
      const L = await import('leaflet')
      if (cancelled || !containerRef.current) return

      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
      })
      mapRef.current = map

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map)

      const bounds = L.latLngBounds([])

      listings.forEach((listing, index) => {
        const { latitude, longitude } = listing.coordinates
        const marker = L.marker([latitude, longitude], {
          icon: L.divIcon({
            className: 'event-map-pin-wrap',
            html: `<span class="event-map-pin sports-map-pin"><b>${index + 1}</b></span>`,
            iconAnchor: [18, 42],
            iconSize: [36, 42],
            popupAnchor: [0, -38],
          }),
          title: listing.name,
        })

        const popup = document.createElement('div')
        popup.className = 'event-map-popup'
        const title = document.createElement('strong')
        title.textContent = listing.name
        const details = document.createElement('span')
        details.textContent = `${listing.type} · ${listing.area}`
        const link = document.createElement('a')
        link.href = `/sports/${listing.slug}/`
        link.textContent = 'See how to join →'
        popup.append(title, details, link)

        marker.bindPopup(popup).on('click', () => selectRef.current?.(listing.slug)).addTo(map)
        markers.set(listing.slug, marker)
        bounds.extend([latitude, longitude])
      })

      if (listings.length === 1) map.setView(bounds.getCenter(), 14)
      else map.fitBounds(bounds, { padding: [44, 44], maxZoom: 13 })
    }

    createMap()

    return () => {
      cancelled = true
      markers.clear()
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [listings])

  useEffect(() => {
    if (!selectedSlug) return
    const listing = listings.find((item) => item.slug === selectedSlug)
    const marker = markersRef.current.get(selectedSlug)
    if (!listing || !marker || !mapRef.current) return
    const position: [number, number] = [listing.coordinates.latitude, listing.coordinates.longitude]
    const zoom = Math.max(mapRef.current.getZoom(), 13)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) mapRef.current.setView(position, zoom, { animate: false })
    else mapRef.current.flyTo(position, zoom, { duration: 0.65 })
    marker.openPopup()
  }, [listings, selectedSlug])

  return <div className="event-map__canvas" ref={containerRef} role="region" aria-label="Interactive map of Helsinki sports and activity locations" />
}

export function SportsMap({ listings }: { listings: SportsListing[] }) {
  const mappedListings = useMemo(() => listings.filter(hasCoordinates), [listings])
  const multiLocationCount = listings.length - mappedListings.length
  const [selectedSlug, setSelectedSlug] = useState(mappedListings[0]?.slug)
  const activeSlug = mappedListings.some((listing) => listing.slug === selectedSlug) ? selectedSlug : mappedListings[0]?.slug

  if (!mappedListings.length) return null

  return (
    <section className="events-map sports-map" aria-labelledby="sports-map-heading">
      <div className="events-map__intro">
        <div><p className="eyebrow">Find something nearby</p><h3 id="sports-map-heading">Where to get moving</h3></div>
        <p>{mappedListings.length} pinpointed {mappedListings.length === 1 ? 'place' : 'places'}{multiLocationCount ? ` · ${multiLocationCount} citywide or rotating` : ''}</p>
      </div>
      <div className="events-map__layout">
        <SportsMapCanvas listings={mappedListings} onSelect={setSelectedSlug} selectedSlug={activeSlug} />
        <ol className="events-map__list">
          {mappedListings.map((listing, index) => (
            <li key={listing.slug} data-active={listing.slug === activeSlug || undefined}>
              <button type="button" onClick={() => setSelectedSlug(listing.slug)} aria-pressed={listing.slug === activeSlug}>
                <span>{index + 1}</span><span><strong>{listing.name}</strong><small>{listing.area} · {listing.type}</small></span>
              </button>
              <Link href={`/sports/${listing.slug}/`} aria-label={`Open ${listing.name}`}>→</Link>
            </li>
          ))}
        </ol>
      </div>
      {multiLocationCount > 0 && <p className="events-map__note">Clubs with changing or multiple venues stay in the full directory below. Open their profile to check the current meeting point before setting off.</p>}
    </section>
  )
}
