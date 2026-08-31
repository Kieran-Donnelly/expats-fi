import Link from 'next/link'

import { eventDateParts, type CityEvent } from '@/data/events'

export function EventCard({ event, featured = false }: { event: CityEvent; featured?: boolean }) {
  const date = eventDateParts(event)

  return (
    <article className="event-card" data-featured={featured || undefined}>
      <div className="event-card__date" aria-hidden="true"><strong>{date.day}</strong><span>{date.month}</span></div>
      <div className="event-card__body">
        <div className="event-card__meta"><span>{event.category}</span><span>{event.district}</span></div>
        <h3><Link href={`/events/${event.slug}/`} data-analytics-event="event_opened" data-analytics-label={event.slug} data-analytics-position="title">{event.title}</Link></h3>
        <p>{event.blurb}</p>
        <div className="event-card__facts"><span>{event.dateLabel}</span><span>{event.price}</span></div>
        <Link className="text-link" href={`/events/${event.slug}/`} data-analytics-event="event_opened" data-analytics-label={event.slug} data-analytics-position="card_cta">Plan your visit <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  )
}
