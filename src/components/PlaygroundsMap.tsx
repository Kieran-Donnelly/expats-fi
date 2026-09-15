'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { CircleMarker as LeafletCircleMarker, Map as LeafletMap, Marker as LeafletMarker } from 'leaflet'

export type PlaygroundMapItem = {
  id: string
  name: string
  region: 'Central' | 'West' | 'North' | 'East'
  address: string
  bestFor?: string
  detailId?: string
  officialUrl: string
  coordinates: {
    latitude: number
    longitude: number
  }
}

function openStreetMapUrl(playground: PlaygroundMapItem) {
  const { latitude, longitude } = playground.coordinates
  return `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=17/${latitude}/${longitude}`
}

function PlaygroundMapCanvas({ playgrounds, selectedId, userLocation, onSelect }: {
  playgrounds: readonly PlaygroundMapItem[]
  selectedId?: string
  userLocation?: { latitude: number; longitude: number }
  onSelect: (id: string) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LeafletMap | null>(null)
  const markersRef = useRef(new Map<string, LeafletMarker>())
  const locationMarkerRef = useRef<LeafletCircleMarker | null>(null)
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

      playgrounds.forEach((playground) => {
        const { latitude, longitude } = playground.coordinates
        const marker = L.marker([latitude, longitude], {
          icon: L.divIcon({
            className: 'event-map-pin-wrap',
            html: '<span class="event-map-pin playground-map-pin"><b aria-hidden="true"></b></span>',
            iconAnchor: [18, 42],
            iconSize: [36, 42],
            popupAnchor: [0, -38],
          }),
          title: playground.name,
        })

        marker.on('click', () => selectRef.current(playground.id)).addTo(map)
        markers.set(playground.id, marker)
        bounds.extend([latitude, longitude])
      })

      map.fitBounds(bounds, { padding: [44, 44], maxZoom: 13 })
    }

    createMap()

    return () => {
      cancelled = true
      markers.clear()
      locationMarkerRef.current = null
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [playgrounds])

  useEffect(() => {
    if (!userLocation || !mapRef.current) return

    let cancelled = false
    import('leaflet').then((L) => {
      if (cancelled || !mapRef.current) return
      locationMarkerRef.current?.remove()
      locationMarkerRef.current = L.circleMarker([userLocation.latitude, userLocation.longitude], {
        radius: 9,
        color: '#ffffff',
        weight: 3,
        fillColor: '#075fae',
        fillOpacity: 1,
      }).bindTooltip('Your approximate location').addTo(mapRef.current)
      mapRef.current.flyTo([userLocation.latitude, userLocation.longitude], 14, { duration: 0.7 })
    })

    return () => { cancelled = true }
  }, [playgrounds, userLocation])

  useEffect(() => {
    if (!selectedId) return
    const playground = playgrounds.find((item) => item.id === selectedId)
    const marker = markersRef.current.get(selectedId)
    if (!playground || !marker || !mapRef.current) return

    const position: [number, number] = [playground.coordinates.latitude, playground.coordinates.longitude]
    const zoom = Math.max(mapRef.current.getZoom(), 13)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) mapRef.current.setView(position, zoom, { animate: false })
    else mapRef.current.flyTo(position, zoom, { duration: 0.65 })
  }, [playgrounds, selectedId])

  return <div className="event-map__canvas" ref={containerRef} role="region" aria-label="Interactive map of Helsinki staffed playgrounds" />
}

export function PlaygroundsMap({ playgrounds }: { playgrounds: readonly PlaygroundMapItem[] }) {
  const [selectedId, setSelectedId] = useState<string>()
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState<'All' | PlaygroundMapItem['region']>('All')
  const [featuredOnly, setFeaturedOnly] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [showList, setShowList] = useState(false)
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number }>()
  const [locationMessage, setLocationMessage] = useState('')
  const filteredPlaygrounds = useMemo(() => {
    const search = query.trim().toLocaleLowerCase('en')
    return playgrounds.filter((playground) => {
      const matchesRegion = region === 'All' || playground.region === region
      const matchesSearch = !search || `${playground.name} ${playground.address} ${playground.region}`.toLocaleLowerCase('en').includes(search)
      const matchesFeatured = !featuredOnly || Boolean(playground.detailId)
      return matchesRegion && matchesSearch && matchesFeatured
    })
  }, [featuredOnly, playgrounds, query, region])

  const selectedPlayground = filteredPlaygrounds.find((playground) => playground.id === selectedId)

  function chooseRegion(nextRegion: 'All' | PlaygroundMapItem['region']) {
    setRegion(nextRegion)
    setSelectedId(undefined)
  }

  function findMe() {
    if (!navigator.geolocation) {
      setLocationMessage('Location is not available in this browser.')
      return
    }
    setLocationMessage('Finding you…')
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude })
        setLocationMessage('Your approximate location is marked in blue.')
      },
      () => setLocationMessage('We could not access your location. You can still search by street.'),
      { enableHighAccuracy: false, timeout: 8000 },
    )
  }

  function resetFilters() {
    setQuery('')
    setRegion('All')
    setFeaturedOnly(false)
    setSelectedId(undefined)
  }

  return (
    <section className="playground-map" aria-labelledby="playground-map-heading">
      <div className="playground-map__heading shell">
        <div><p className="eyebrow">Explore the whole network</p><h2 id="playground-map-heading">Find a playground near you.</h2></div>
        <p>{playgrounds.length} staffed playgrounds, with current City of Helsinki links.</p>
      </div>
      <div className="playground-map__stage">
        {filteredPlaygrounds.length
          ? <PlaygroundMapCanvas playgrounds={filteredPlaygrounds} selectedId={selectedId} userLocation={userLocation} onSelect={setSelectedId} />
          : <div className="playground-map__empty"><strong>No playgrounds match that search.</strong><p>Try a shorter street name or clear the filters.</p><button type="button" onClick={resetFilters}>Show all playgrounds</button></div>}

        <div className="playground-map__toolbar">
          <label className="playground-map__search">
            <span className="sr-only">Find a playground by name or street</span>
            <span aria-hidden="true">⌕</span>
            <input type="search" value={query} onChange={(event) => { setQuery(event.target.value); setSelectedId(undefined) }} placeholder="Search a playground or street…" />
          </label>
          <button type="button" className="playground-map__filter-button" data-active={showFilters || region !== 'All' || featuredOnly || undefined} aria-expanded={showFilters} onClick={() => setShowFilters((current) => !current)}>Filters</button>
          <button type="button" className="playground-map__list-button" data-active={showList || undefined} aria-expanded={showList} onClick={() => setShowList((current) => !current)}>List · {filteredPlaygrounds.length}</button>
        </div>

        {showFilters && <aside className="playground-map__filter-panel" aria-label="Filter playgrounds">
          <div><strong>Filter playgrounds</strong><button type="button" onClick={() => setShowFilters(false)} aria-label="Close filters">×</button></div>
          <fieldset><legend>Part of Helsinki</legend><div>{(['All', 'Central', 'West', 'North', 'East'] as const).map((option) => <button key={option} type="button" data-active={region === option || undefined} aria-pressed={region === option} onClick={() => chooseRegion(option)}>{option}</button>)}</div></fieldset>
          <label className="playground-map__check"><input type="checkbox" checked={featuredOnly} onChange={(event) => { setFeaturedOnly(event.target.checked); setSelectedId(undefined) }} /><span><strong>Expats.fi deeper picks</strong><small>Only show playgrounds with our full practical note.</small></span></label>
          <button type="button" className="playground-map__reset" onClick={resetFilters}>Clear all filters</button>
        </aside>}

        <div className="playground-map__utility">
          <button type="button" onClick={findMe}>◎ Near me</button>
          <span aria-live="polite">{locationMessage || `Showing ${filteredPlaygrounds.length} of ${playgrounds.length}`}</span>
        </div>

        {showList && <aside className="playground-map__list-panel" aria-label="Visible playgrounds">
          <div><strong>{filteredPlaygrounds.length} playgrounds</strong><button type="button" onClick={() => setShowList(false)} aria-label="Close playground list">×</button></div>
          <ol>{filteredPlaygrounds.map((playground) => <li key={playground.id}><button type="button" data-active={playground.id === selectedId || undefined} onClick={() => { setSelectedId(playground.id); setShowList(false) }}><strong>{playground.name.replace(/^Playground /, '')}</strong><span>{playground.address}</span></button></li>)}</ol>
        </aside>}

        {selectedPlayground && <article className="playground-map__card">
          <button type="button" onClick={() => setSelectedId(undefined)} aria-label="Close playground details">×</button>
          <span>{selectedPlayground.region} Helsinki</span>
          <h3>{selectedPlayground.name}</h3>
          <p>{selectedPlayground.address}</p>
          {selectedPlayground.bestFor && <strong>Best for: {selectedPlayground.bestFor}</strong>}
          <div>
            {selectedPlayground.detailId && <a href={`#${selectedPlayground.detailId}`}>Read our note ↓</a>}
            <a href={selectedPlayground.officialUrl} target="_blank" rel="noreferrer">Official details ↗</a>
            <a href={openStreetMapUrl(selectedPlayground)} target="_blank" rel="noreferrer">Directions ↗</a>
          </div>
        </article>}
      </div>
      <p className="playground-map__note shell">Outdoor yards can remain open beyond staffed hours. Check the official page before relying on indoor rooms, activities or seasonal water play.</p>
    </section>
  )
}
