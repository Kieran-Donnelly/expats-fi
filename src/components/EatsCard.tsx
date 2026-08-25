import type { EatSpot } from '@/data/eats'

export function EatsCard({ spot, compact = false }: { spot: EatSpot; compact?: boolean }) {
  const mapUrl = `https://www.openstreetmap.org/?mlat=${spot.coordinates.latitude}&mlon=${spot.coordinates.longitude}#map=17/${spot.coordinates.latitude}/${spot.coordinates.longitude}`

  return (
    <article className="eats-card" data-compact={compact || undefined}>
      <div className="eats-card__topline">
        <span>{spot.kind}</span>
        <span>{spot.price}</span>
      </div>
      <div className="eats-card__location">{spot.neighbourhood}</div>
      <h3>{spot.name}</h3>
      <a className="eats-card__address" href={mapUrl} target="_blank" rel="noreferrer">{spot.address} <span aria-hidden="true">↗</span></a>
      <p>{spot.blurb}</p>
      {!compact && <div className="eats-card__moods">{spot.moods.slice(0, 3).map((mood) => <span key={mood}>{mood}</span>)}</div>}
      <div className="eats-card__footer">
        <small>{spot.orderTip}</small>
        <a className="text-link" href={spot.url} target="_blank" rel="noreferrer">Check current details <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  )
}
