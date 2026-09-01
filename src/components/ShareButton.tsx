'use client'

import { useEffect, useId, useRef, useState } from 'react'

import { trackAnalyticsEvent } from '@/lib/analytics'

type ShareButtonProps = {
  contentType: 'business' | 'event' | 'guide' | 'news' | 'place' | 'sport'
  path: string
  text?: string
  title: string
}

export function ShareButton({ contentType, path, text, title }: ShareButtonProps) {
  const menuId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)
  const [open, setOpen] = useState(false)
  const hasNativeShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function'
  const shareUrl = `https://expats.fi${path}`

  useEffect(() => {
    if (!open) return

    function closeOnOutsideClick(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  function track(method: string) {
    trackAnalyticsEvent('content_shared', { content_type: contentType, share_method: method })
  }

  async function shareWithDevice() {
    try {
      await navigator.share({ title, text, url: shareUrl })
      track('native')
      setOpen(false)
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl)
    } catch {
      const input = document.createElement('textarea')
      input.value = shareUrl
      input.style.position = 'fixed'
      input.style.opacity = '0'
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      input.remove()
    }

    track('copy_link')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  const shareMessage = `${title}\n${shareUrl}`
  const emailBody = `Thought you might find this useful:\n\n${title}\n${shareUrl}`

  return (
    <div className="share-control" ref={rootRef}>
      <button
        className="share-button"
        type="button"
        aria-controls={menuId}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5" /></svg>
        Share
      </button>

      {open && (
        <div className="share-menu" id={menuId}>
          <strong>Share this {contentType === 'news' ? 'story' : contentType}</strong>
          {hasNativeShare && <button type="button" onClick={shareWithDevice}><span aria-hidden="true">↗</span> Share with an app</button>}
          <a href={`https://wa.me/?text=${encodeURIComponent(shareMessage)}`} target="_blank" rel="noreferrer" onClick={() => track('whatsapp')}><span aria-hidden="true">W</span> WhatsApp</a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" onClick={() => track('facebook')}><span aria-hidden="true">f</span> Facebook</a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" onClick={() => track('linkedin')}><span aria-hidden="true">in</span> LinkedIn</a>
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" onClick={() => track('x')}><span aria-hidden="true">X</span> X</a>
          <a href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(emailBody)}`} onClick={() => track('email')}><span aria-hidden="true">@</span> Email</a>
          <button type="button" onClick={copyLink}><span aria-hidden="true">⧉</span> {copied ? 'Link copied' : 'Copy link'}</button>
          <span className="sr-only" role="status" aria-live="polite">{copied ? 'Link copied to your clipboard.' : ''}</span>
        </div>
      )}
    </div>
  )
}
