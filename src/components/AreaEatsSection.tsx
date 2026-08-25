import Link from 'next/link'

import { EatsCard } from '@/components/EatsCard'
import { EatsMap } from '@/components/EatsMap'
import { getEatSpotsForArea } from '@/data/eats'

export function AreaEatsSection({ area }: { area: string }) {
  const spots = getEatSpotsForArea(area)
  if (!spots.length) return null

  return (
    <section className="area-eats" aria-labelledby="area-eats-heading">
      <div className="shell section">
        <div className="section-heading area-eats__heading">
          <div><p className="eyebrow">Eat your way around</p><h2 id="area-eats-heading">More than one nice café and a dinner suggestion.</h2></div>
          <p>{spots.length} useful places across coffee, quick bites, brunch and proper evenings. Check the current menu and hours before making a special trip.</p>
        </div>
        <EatsMap spots={spots} compact />
        <div className="area-eats__grid">{spots.map((spot) => <EatsCard key={spot.slug} spot={spot} compact />)}</div>
        <div className="area-eats__more">
          <div><strong>Choosing by craving instead?</strong><p>The full Eats guide lets you jump across neighbourhoods and filter by mood, spend and kind of place.</p></div>
          <Link href={`/eats/?area=${encodeURIComponent(area)}`}>Open {area} in Eats →</Link>
        </div>
      </div>
    </section>
  )
}
