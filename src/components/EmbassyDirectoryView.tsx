'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

import { embassyLocations } from '@/data/embassy-locations'
import { representationLabels } from '@/lib/embassies'
import type { Embassy } from '@/payload-types'

import { EmbassyCard } from './EmbassyCard'

type DirectoryView = 'list' | 'map'

export function EmbassyDirectoryView({
  embassies,
  initialView,
}: {
  embassies: Embassy[]
  initialView: DirectoryView
}) {
  const [view, setView] = useState<DirectoryView>(initialView)
  const mappedEmbassies = useMemo(
    () => embassies.filter((embassy) => embassyLocations[embassy.countryCode]),
    [embassies],
  )
  const approximateCount = mappedEmbassies.filter(
    (embassy) => embassyLocations[embassy.countryCode].precision === 'city',
  ).length

  function changeView(nextView: DirectoryView) {
    setView(nextView)
    const url = new URL(window.location.href)
    if (nextView === 'map') url.searchParams.set('view', 'map')
    else url.searchParams.delete('view')
    window.history.replaceState({}, '', url)
  }

  if (!embassies.length) {
    return <div className="empty-state"><h2>No countries match those filters</h2><p>Try a country name, capital, or remove one of the filters.</p></div>
  }

  return (
    <>
      <div className="directory-toolbar">
        <p className="results-note">{embassies.length} {embassies.length === 1 ? 'country' : 'countries'} found</p>
        <div className="view-toggle" role="group" aria-label="Directory view">
          <button type="button" aria-pressed={view === 'list'} onClick={() => changeView('list')}>
            <ListIcon /> List
          </button>
          <button type="button" aria-pressed={view === 'map'} onClick={() => changeView('map')}>
            <MapIcon /> Map
          </button>
        </div>
      </div>
      {view === 'list' ? (
        <div className="embassy-grid">
          {embassies.map((embassy) => <EmbassyCard embassy={embassy} key={embassy.id} />)}
        </div>
      ) : (
        <EmbassyMap embassies={mappedEmbassies} approximateCount={approximateCount} />
      )}
    </>
  )
}

function EmbassyMap({
  embassies,
  approximateCount,
}: {
  embassies: Embassy[]
  approximateCount: number
}) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const [mapError, setMapError] = useState(false)

  useEffect(() => {
    if (!mapContainerRef.current || !embassies.length) return

    let disposed = false
    let mapInstance: import('maplibre-gl').Map | undefined

    async function initialiseMap() {
      try {
        const maplibre = await import('maplibre-gl')
        if (disposed || !mapContainerRef.current) return

        mapInstance = new maplibre.Map({
          container: mapContainerRef.current,
          style: {
            version: 8,
            sources: {
              openStreetMap: {
                type: 'raster',
                tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                tileSize: 256,
                attribution: '© OpenStreetMap contributors',
              },
            },
            layers: [{ id: 'openStreetMap', type: 'raster', source: 'openStreetMap' }],
          },
          center: [18, 56],
          zoom: 2.1,
          maxZoom: 18,
          cooperativeGestures: true,
        })
        mapInstance.addControl(new maplibre.NavigationControl({ showCompass: false }), 'top-right')

        const bounds = new maplibre.LngLatBounds()
        const coordinateGroups = new Map<string, number>()

        embassies.forEach((embassy) => {
          const location = embassyLocations[embassy.countryCode]
          const key = `${location.lat.toFixed(5)}:${location.lng.toFixed(5)}`
          const offsetIndex = coordinateGroups.get(key) || 0
          coordinateGroups.set(key, offsetIndex + 1)

          const markerButton = document.createElement('button')
          markerButton.type = 'button'
          markerButton.className = `embassy-map-marker${location.precision === 'city' ? ' embassy-map-marker--approximate' : ''}`
          markerButton.setAttribute('aria-label', `Open ${embassy.country} representation details`)
          markerButton.title = `${embassy.country} — ${embassy.city}, ${embassy.hostCountry}`

          const flag = document.createElement('span')
          flag.className = `fi fi-${embassy.countryCode.toLowerCase()}`
          flag.setAttribute('aria-hidden', 'true')
          markerButton.append(flag)

          const popupContent = document.createElement('article')
          popupContent.className = 'embassy-map-popup'

          const heading = document.createElement('strong')
          heading.textContent = embassy.country
          popupContent.append(heading)

          const type = document.createElement('span')
          type.textContent = representationLabels[embassy.representationType]
          popupContent.append(type)

          if (embassy.address) {
            const address = document.createElement('p')
            address.textContent = embassy.address
            popupContent.append(address)
          }

          if (location.precision === 'city') {
            const accuracy = document.createElement('small')
            accuracy.textContent = 'Approximate location — the published address could not be placed precisely.'
            popupContent.append(accuracy)
          }

          const link = document.createElement('a')
          link.href = `/embassies/${embassy.slug}/`
          link.textContent = 'View representation →'
          popupContent.append(link)

          const angle = offsetIndex * 1.7
          const radius = offsetIndex ? 13 + Math.floor(offsetIndex / 5) * 5 : 0
          new maplibre.Marker({
            element: markerButton,
            anchor: 'bottom',
            offset: [Math.cos(angle) * radius, Math.sin(angle) * radius],
          })
            .setLngLat([location.lng, location.lat])
            .setPopup(new maplibre.Popup({ offset: 22, closeButton: true, maxWidth: '19rem' }).setDOMContent(popupContent))
            .addTo(mapInstance!)

          bounds.extend([location.lng, location.lat])
        })

        if (embassies.length === 1) {
          const location = embassyLocations[embassies[0].countryCode]
          mapInstance.jumpTo({ center: [location.lng, location.lat], zoom: location.precision === 'address' ? 13 : 9 })
        } else {
          mapInstance.fitBounds(bounds, { padding: 55, maxZoom: 11, duration: 0 })
        }
      } catch {
        if (!disposed) setMapError(true)
      }
    }

    void initialiseMap()
    return () => {
      disposed = true
      mapInstance?.remove()
    }
  }, [embassies])

  if (!embassies.length) {
    return (
      <div className="map-empty-state">
        <MapIcon />
        <h2>No mappable offices match these filters</h2>
        <p>These results are official fallback contacts without a published embassy address. Switch to list view for their details.</p>
      </div>
    )
  }

  if (mapError) {
    return (
      <div className="map-empty-state" role="status">
        <MapIcon />
        <h2>The map could not load</h2>
        <p>The full directory is still available in list view.</p>
      </div>
    )
  }

  return (
    <div className="embassy-map-shell">
      <div className="embassy-map-meta">
        <strong>{embassies.length} offices on the map</strong>
        <span>Flags mark published office addresses{approximateCount ? `; ${approximateCount} ${approximateCount === 1 ? 'location is' : 'locations are'} approximate` : ''}.</span>
      </div>
      <div className="embassy-map" ref={mapContainerRef} aria-label="Map of embassies and official representations" />
    </div>
  )
}

function ListIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 5h2M8 5h9M3 10h2M8 10h9M3 15h2M8 15h9" /></svg>
}

function MapIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m2.5 5 5-2 5 2 5-2v12l-5 2-5-2-5 2V5Zm5-2v12m5-10v12" /></svg>
}
