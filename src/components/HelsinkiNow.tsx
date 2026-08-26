'use client'

import { useEffect, useState } from 'react'

import type { HelsinkiWeather, WeatherIconName } from '@/lib/weather'

const timeFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Helsinki',
  hour: '2-digit',
  minute: '2-digit',
})

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Helsinki',
  weekday: 'long',
  day: 'numeric',
  month: 'long',
})

function WeatherIcon({ icon, isDay }: { icon: WeatherIconName; isDay: boolean }) {
  if (icon === 'clear' && !isDay) {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M31.5 8.5a17 17 0 1 0 8 28.5A18 18 0 0 1 31.5 8.5Z" /></svg>
  }
  if (icon === 'clear') {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="8" /><path d="M24 5v6M24 37v6M5 24h6M37 24h6M10.5 10.5l4.3 4.3M33.2 33.2l4.3 4.3M37.5 10.5l-4.3 4.3M14.8 33.2l-4.3 4.3" /></svg>
  }

  const cloud = <path d="M13 31h22a7 7 0 0 0 .5-14A12 12 0 0 0 13 20.5 5.5 5.5 0 0 0 13 31Z" />
  if (icon === 'fog') return <svg viewBox="0 0 48 48" aria-hidden="true">{cloud}<path d="M11 37h26M15 42h18" /></svg>
  if (icon === 'rain') return <svg viewBox="0 0 48 48" aria-hidden="true">{cloud}<path d="m17 36-2 5M25 36l-2 5M33 36l-2 5" /></svg>
  if (icon === 'snow') return <svg viewBox="0 0 48 48" aria-hidden="true">{cloud}<path d="M16 38h.1M24 41h.1M32 38h.1" /></svg>
  if (icon === 'storm') return <svg viewBox="0 0 48 48" aria-hidden="true">{cloud}<path d="m26 34-5 7h5l-3 5" /></svg>
  return <svg viewBox="0 0 48 48" aria-hidden="true">{cloud}</svg>
}

export function HelsinkiNow({ initialNow, weather }: { initialNow: string; weather: HelsinkiWeather | null }) {
  const [now, setNow] = useState(() => new Date(initialNow))

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <aside className="helsinki-now" aria-label="Current time and weather in Helsinki">
      <div className="helsinki-now__topline"><span>Helsinki right now</span><small>Finland</small></div>
      <div className="helsinki-now__time">
        <time dateTime={now.toISOString()}>{timeFormatter.format(now)}</time>
        <span>{dateFormatter.format(now)}</span>
      </div>
      {weather ? (
        <div className="helsinki-now__weather">
          <WeatherIcon icon={weather.icon} isDay={weather.isDay} />
          <div><strong>{weather.temperature}°</strong><span>{weather.condition}</span></div>
          <dl><div><dt>Feels like</dt><dd>{weather.feelsLike}°</dd></div><div><dt>Wind</dt><dd>{weather.windSpeed} m/s</dd></div></dl>
        </div>
      ) : <p className="helsinki-now__unavailable">The weather is taking a quick break. Helsinki time is still ticking along.</p>}
      {weather && <a className="helsinki-now__credit" href="https://open-meteo.com/" target="_blank" rel="noreferrer">Weather data by Open-Meteo.com ↗</a>}
    </aside>
  )
}
