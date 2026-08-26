export type WeatherIconName = 'clear' | 'cloud' | 'fog' | 'rain' | 'snow' | 'storm'

export type HelsinkiWeather = {
  condition: string
  feelsLike: number
  icon: WeatherIconName
  isDay: boolean
  temperature: number
  windSpeed: number
}

type OpenMeteoCurrent = {
  apparent_temperature?: number
  is_day?: number
  temperature_2m?: number
  weather_code?: number
  wind_speed_10m?: number
}

type OpenMeteoResponse = {
  current?: OpenMeteoCurrent
}

function describeWeather(code: number): Pick<HelsinkiWeather, 'condition' | 'icon'> {
  if (code === 0) return { condition: 'Clear skies', icon: 'clear' }
  if (code === 1) return { condition: 'Mostly clear', icon: 'clear' }
  if (code === 2) return { condition: 'Partly cloudy', icon: 'cloud' }
  if (code === 3) return { condition: 'Overcast', icon: 'cloud' }
  if (code === 45 || code === 48) return { condition: 'Foggy', icon: 'fog' }
  if ([51, 53, 55, 56, 57].includes(code)) return { condition: 'Drizzle', icon: 'rain' }
  if ([61, 63, 65, 66, 67].includes(code)) return { condition: 'Rain', icon: 'rain' }
  if ([71, 73, 75, 77].includes(code)) return { condition: 'Snow', icon: 'snow' }
  if ([80, 81, 82].includes(code)) return { condition: 'Rain showers', icon: 'rain' }
  if (code === 85 || code === 86) return { condition: 'Snow showers', icon: 'snow' }
  if ([95, 96, 99].includes(code)) return { condition: 'Thunderstorms', icon: 'storm' }
  return { condition: 'Changeable skies', icon: 'cloud' }
}

export async function getHelsinkiWeather(): Promise<HelsinkiWeather | null> {
  const params = new URLSearchParams({
    latitude: '60.1699',
    longitude: '24.9384',
    current: 'temperature_2m,apparent_temperature,weather_code,wind_speed_10m,is_day',
    timezone: 'Europe/Helsinki',
    wind_speed_unit: 'ms',
  })

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, {
      next: { revalidate: 1800 },
    })
    if (!response.ok) return null

    const data = await response.json() as OpenMeteoResponse
    const current = data.current
    if (
      !current ||
      typeof current.temperature_2m !== 'number' ||
      typeof current.apparent_temperature !== 'number' ||
      typeof current.weather_code !== 'number' ||
      typeof current.wind_speed_10m !== 'number'
    ) return null

    return {
      ...describeWeather(current.weather_code),
      temperature: Math.round(current.temperature_2m),
      feelsLike: Math.round(current.apparent_temperature),
      windSpeed: Math.round(current.wind_speed_10m * 10) / 10,
      isDay: current.is_day !== 0,
    }
  } catch {
    return null
  }
}
