'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { Map as LeafletMap, Marker as LeafletMarker } from 'leaflet'

import type { CityEvent } from '@/data/events'

type MappedEvent = CityEvent & { coordinates: NonNullable<CityEvent['coordinates']> }

function hasCoordinates(event: CityEvent): event is MappedEvent {
  return Boolean(event.coordinates)
}

function openStreetMapUrl(event: CityEvent) {
  if (!event.coordinates) {
    return `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${event.location}, Helsinki`)}`
  }

  const { latitude, longitude } = event.coordinates
  return `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=16/${latitude}/${longitude}`
}

function MapCanvas({ events, selectedSlug, onSelect, compact = false }: {
  events: MappedEvent[]
  selectedSlug?: string
  onSelect?: (slug: string) => void
  compact?: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LeafletMap | null>(null)
  const markersRef = useRef(new Map<string, LeafletMarker>())
  const selectRef = useRef(onSelect)

  useEffect(() => {
    selectRef.current = onSelect
  }, [onSelect])

  useEffect(() => {
    if (!containerRef.current || !events.length) return

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

      events.forEach((event, index) => {
        const { latitude, longitude } = event.coordinates
        const marker = L.marker([latitude, longitude], {
          icon: L.divIcon({
            className: 'event-map-pin-wrap',
            html: `<span class="event-map-pin"><b>${index + 1}</b></span>`,
            iconAnchor: [18, 42],
            iconSize: [36, 42],
            popupAnchor: [0, -38],
          }),
          title: event.title,
        })

        const popup = document.createElement('div')
        popup.className = 'event-map-popup'
        const title = document.createElement('strong')
        title.textContent = event.title
        const details = document.createElement('span')
        details.textContent = `${event.dateLabel} · ${event.district}`
        const link = document.createElement('a')
        link.href = `/events/${event.slug}/`
        link.textContent = 'Plan your visit →'
        popup.append(title, details, link)

        marker.bindPopup(popup).on('click', () => selectRef.current?.(event.slug)).addTo(map)
        markers.set(event.slug, marker)
        bounds.extend([latitude, longitude])
      })

      if (events.length === 1) map.setView(bounds.getCenter(), 14)
      else map.fitBounds(bounds, { padding: compact ? [24, 24] : [44, 44], maxZoom: 13 })
    }

    createMap()

    return () => {
      cancelled = true
      markers.clear()
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [compact, events])

  useEffect(() => {
    if (!selectedSlug) return
    const event = events.find((item) => item.slug === selectedSlug)
    const marker = markersRef.current.get(selectedSlug)
    if (!event || !marker || !mapRef.current) return
    mapRef.current.flyTo([event.coordinates.latitude, event.coordinates.longitude], Math.max(mapRef.current.getZoom(), 13), { duration: 0.65 })
    marker.openPopup()
  }, [events, selectedSlug])

  return <div className="event-map__canvas" data-compact={compact || undefined} ref={containerRef} role="region" aria-label={compact ? `Map showing ${events[0]?.location}` : 'Interactive map of Helsinki event locations'} />
}

export function EventsMap({ events }: { events: CityEvent[] }) {
  const mappedEvents = useMemo(() => events.filter(hasCoordinates), [events])
  const citywideCount = events.length - mappedEvents.length
  const [selectedSlug, setSelectedSlug] = useState(mappedEvents[0]?.slug)
  const activeSlug = mappedEvents.some((event) => event.slug === selectedSlug) ? selectedSlug : mappedEvents[0]?.slug

  if (!mappedEvents.length) return null

  return (
    <section className="events-map" aria-labelledby="events-map-heading">
      <div className="events-map__intro">
        <div><p className="eyebrow">See the city</p><h3 id="events-map-heading">Where the plans are</h3></div>
        <p>{mappedEvents.length} pinpointed {mappedEvents.length === 1 ? 'venue' : 'venues'}{citywideCount ? ` · ${citywideCount} citywide ${citywideCount === 1 ? 'event' : 'events'}` : ''}</p>
      </div>
      <div className="events-map__layout">
        <MapCanvas events={mappedEvents} onSelect={setSelectedSlug} selectedSlug={activeSlug} />
        <ol className="events-map__list">
          {mappedEvents.map((event, index) => (
            <li key={event.slug} data-active={event.slug === activeSlug || undefined}>
              <button type="button" onClick={() => setSelectedSlug(event.slug)} aria-pressed={event.slug === activeSlug}>
                <span>{index + 1}</span><span><strong>{event.title}</strong><small>{event.district} · {event.dateLabel}</small></span>
              </button>
              <Link href={`/events/${event.slug}/`} aria-label={`Open ${event.title}`}>→</Link>
            </li>
          ))}
        </ol>
      </div>
      {citywideCount > 0 && <p className="events-map__note">Events with several changing venues stay in the listings below. Check their detail page before setting off.</p>}
    </section>
  )
}

export function EventLocationMap({ event }: { event: CityEvent }) {
  const mappedEvent = event.coordinates ? event as MappedEvent : null

  if (!mappedEvent) {
    return <div className="event-location-card"><p className="eyebrow">Across Helsinki</p><strong>Multiple locations</strong><p>Open the organiser’s programme to choose a venue before planning your route.</p></div>
  }

  return (
    <div className="event-location-card">
      <div><p className="eyebrow">On the map</p><strong>{event.location}</strong></div>
      <MapCanvas compact events={[mappedEvent]} selectedSlug={event.slug} />
      <a href={openStreetMapUrl(event)} target="_blank" rel="noreferrer">Open larger map <span aria-hidden="true">↗</span></a>
    </div>
  )
}
