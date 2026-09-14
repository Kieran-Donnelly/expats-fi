'use client'

import { useEffect, useRef, useState } from 'react'
import type { Map as LeafletMap, Marker as LeafletMarker } from 'leaflet'

export type PlaygroundMapItem = {
  id: string
  name: string
  area: string
  address: string
  bestFor: string
  coordinates: {
    latitude: number
    longitude: number
  }
}

function openStreetMapUrl(playground: PlaygroundMapItem) {
  const { latitude, longitude } = playground.coordinates
  return `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=17/${latitude}/${longitude}`
}

function PlaygroundMapCanvas({ playgrounds, selectedId, onSelect }: {
  playgrounds: readonly PlaygroundMapItem[]
  selectedId?: string
  onSelect: (id: string) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LeafletMap | null>(null)
  const markersRef = useRef(new Map<string, LeafletMarker>())
  const selectRef = useRef(onSelect)

  useEffect(() => {
    selectRef.current = onSelect
  }, [onSelect])

  useEffect(() => {
    if (!containerRef.current || !playgrounds.length) return

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

      playgrounds.forEach((playground, index) => {
        const { latitude, longitude } = playground.coordinates
        const marker = L.marker([latitude, longitude], {
          icon: L.divIcon({
            className: 'event-map-pin-wrap',
            html: `<span class="event-map-pin playground-map-pin"><b>${index + 1}</b></span>`,
            iconAnchor: [18, 42],
            iconSize: [36, 42],
            popupAnchor: [0, -38],
          }),
          title: playground.name,
        })

        const popup = document.createElement('div')
        popup.className = 'event-map-popup'
        const title = document.createElement('strong')
        title.textContent = playground.name
        const details = document.createElement('span')
        details.textContent = `${playground.area} · ${playground.bestFor}`
        const link = document.createElement('a')
        link.href = `#${playground.id}`
        link.textContent = 'Read the full playground note ↓'
        popup.append(title, details, link)

        marker.bindPopup(popup).on('click', () => selectRef.current(playground.id)).addTo(map)
        markers.set(playground.id, marker)
        bounds.extend([latitude, longitude])
      })

      map.fitBounds(bounds, { padding: [44, 44], maxZoom: 13 })
    }

    createMap()

    return () => {
      cancelled = true
      markers.clear()
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [playgrounds])

  useEffect(() => {
    if (!selectedId) return
    const playground = playgrounds.find((item) => item.id === selectedId)
    const marker = markersRef.current.get(selectedId)
    if (!playground || !marker || !mapRef.current) return

    const position: [number, number] = [playground.coordinates.latitude, playground.coordinates.longitude]
    const zoom = Math.max(mapRef.current.getZoom(), 13)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) mapRef.current.setView(position, zoom, { animate: false })
    else mapRef.current.flyTo(position, zoom, { duration: 0.65 })
    marker.openPopup()
  }, [playgrounds, selectedId])

  return <div className="event-map__canvas" ref={containerRef} role="region" aria-label="Interactive map of the featured Helsinki playgrounds" />
}

export function PlaygroundsMap({ playgrounds }: { playgrounds: readonly PlaygroundMapItem[] }) {
  const [selectedId, setSelectedId] = useState<string>()

  return (
    <section className="events-map playground-map" aria-labelledby="playground-map-heading">
      <div className="events-map__intro">
        <div><p className="eyebrow">Pick it on the map</p><h2 id="playground-map-heading">What is actually near you?</h2></div>
        <p>{playgrounds.length} playgrounds across Helsinki</p>
      </div>
      <div className="events-map__layout">
        <PlaygroundMapCanvas playgrounds={playgrounds} selectedId={selectedId} onSelect={setSelectedId} />
        <ol className="events-map__list">
          {playgrounds.map((playground, index) => (
            <li key={playground.id} data-active={playground.id === selectedId || undefined}>
              <button type="button" onClick={() => setSelectedId(playground.id)} aria-pressed={playground.id === selectedId}>
                <span>{index + 1}</span>
                <span><strong>{playground.name}</strong><small>{playground.area} · {playground.address}</small></span>
              </button>
              <a href={openStreetMapUrl(playground)} target="_blank" rel="noreferrer" aria-label={`Open ${playground.name} in a larger map`}>↗</a>
            </li>
          ))}
        </ol>
      </div>
      <p className="events-map__note">Tap a playground name to find its pin. Use the arrow for a larger map and directions, or open the marker to jump to our full notes below.</p>
    </section>
  )
}
