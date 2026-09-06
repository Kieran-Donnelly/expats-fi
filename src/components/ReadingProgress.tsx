'use client'

import { useEffect, useRef } from 'react'

export function ReadingProgress() {
  const bar = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const available = document.documentElement.scrollHeight - window.innerHeight
      const progress = available > 0 ? Math.min(1, Math.max(0, window.scrollY / available)) : 0
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`
    }

    const queueUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', queueUpdate, { passive: true })
    window.addEventListener('resize', queueUpdate)

    return () => {
      window.removeEventListener('scroll', queueUpdate)
      window.removeEventListener('resize', queueUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return <div className="reading-progress" aria-hidden="true"><span ref={bar} /></div>
}
