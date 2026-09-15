'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { Map as LeafletMap, Marker as LeafletMarker } from 'leaflet'

export type PlaygroundMapItem = {
  id: string
  name: string
  region: 'Central' | 'West' | 'North' | 'East'
  address: string
  bestFor?: string
  detailId?: string
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
        details.textContent = [playground.region, playground.bestFor].filter(Boolean).join(' · ')
        const link = document.createElement('a')
        link.href = `#${playground.detailId ?? `directory-${playground.id}`}`
        link.textContent = playground.detailId ? 'Read our full playground note ↓' : 'Open this directory entry ↓'
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

  return <div className="event-map__canvas" ref={containerRef} role="region" aria-label="Interactive map of Helsinki staffed playgrounds" />
}

export function PlaygroundsMap({ playgrounds }: { playgrounds: readonly PlaygroundMapItem[] }) {
  const [selectedId, setSelectedId] = useState<string>()
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState<'All' | PlaygroundMapItem['region']>('All')
  const filteredPlaygrounds = useMemo(() => {
    const search = query.trim().toLocaleLowerCase('en')
    return playgrounds.filter((playground) => {
      const matchesRegion = region === 'All' || playground.region === region
      const matchesSearch = !search || `${playground.name} ${playground.address} ${playground.region}`.toLocaleLowerCase('en').includes(search)
      return matchesRegion && matchesSearch
    })
  }, [playgrounds, query, region])

  function chooseRegion(nextRegion: 'All' | PlaygroundMapItem['region']) {
    setRegion(nextRegion)
    setSelectedId(undefined)
  }

  return (
    <section className="events-map playground-map" aria-labelledby="playground-map-heading">
      <div className="events-map__intro">
        <div><p className="eyebrow">Pick it on the map</p><h2 id="playground-map-heading">What is actually near you?</h2></div>
        <p>{playgrounds.length} staffed playgrounds across Helsinki</p>
      </div>
      <div className="playground-map__controls">
        <label><span>Find by name or street</span><input type="search" value={query} onChange={(event) => { setQuery(event.target.value); setSelectedId(undefined) }} placeholder="Try Maunula or Mannerheimintie" /></label>
        <div aria-label="Filter playgrounds by part of Helsinki">
          {(['All', 'Central', 'West', 'North', 'East'] as const).map((option) => <button key={option} type="button" data-active={region === option || undefined} aria-pressed={region === option} onClick={() => chooseRegion(option)}>{option}</button>)}
        </div>
      </div>
      <p className="playground-map__results" aria-live="polite">Showing {filteredPlaygrounds.length} of {playgrounds.length}</p>
      {filteredPlaygrounds.length ? (
        <div className="events-map__layout">
          <PlaygroundMapCanvas playgrounds={filteredPlaygrounds} selectedId={selectedId} onSelect={setSelectedId} />
          <ol className="events-map__list">
            {filteredPlaygrounds.map((playground, index) => (
              <li key={playground.id} data-active={playground.id === selectedId || undefined}>
                <button type="button" onClick={() => setSelectedId(playground.id)} aria-pressed={playground.id === selectedId}>
                  <span>{index + 1}</span>
                  <span><strong>{playground.name}</strong><small>{playground.region} · {playground.address}</small></span>
                </button>
                <a href={openStreetMapUrl(playground)} target="_blank" rel="noreferrer" aria-label={`Open ${playground.name} in a larger map`}>↗</a>
              </li>
            ))}
          </ol>
        </div>
      ) : <div className="playground-map__empty"><strong>No playgrounds match that search.</strong><p>Try a shorter street name or switch the area back to All.</p></div>}
      <p className="events-map__note">Tap a playground name to find its pin. Use the arrow for a larger map and directions. Opening hours describe staffed and indoor services, so check the official page before relying on them.</p>
    </section>
  )
}
