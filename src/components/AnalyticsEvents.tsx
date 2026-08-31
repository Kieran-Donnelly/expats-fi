'use client'

import { useEffect } from 'react'

import { trackAnalyticsEvent } from '@/lib/analytics'

type TrackedElement = HTMLElement & {
  dataset: DOMStringMap & {
    analyticsEvent?: string
    analyticsLabel?: string
    analyticsPosition?: string
    analyticsSection?: string
  }
}

function trackElement(element: TrackedElement) {
  const eventName = element.dataset.analyticsEvent
  if (!eventName) return

  trackAnalyticsEvent(eventName, {
    item_label: element.dataset.analyticsLabel,
    item_position: element.dataset.analyticsPosition,
    site_section: element.dataset.analyticsSection,
  })
}

export function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return
      const tracked = target.closest<TrackedElement>('[data-analytics-event]')
      if (tracked && tracked.tagName !== 'FORM') trackElement(tracked)
    }

    function handleSubmit(event: SubmitEvent) {
      const form = event.target
      if (form instanceof HTMLFormElement && form.dataset.analyticsEvent) {
        trackElement(form as TrackedElement)
      }
    }

    document.addEventListener('click', handleClick)
    document.addEventListener('submit', handleSubmit)
    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('submit', handleSubmit)
    }
  }, [])

  return null
}
