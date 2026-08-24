'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'

import { businessDirectoryHref, primaryNavigation, type NavigationItem } from './siteNavigation'

function slugFor(label: string): string {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

function pathFor(href: string): string {
  return href.split('?')[0].replace(/\/$/, '') || '/'
}

function isCurrentPath(pathname: string, href: string): boolean {
  const path = pathFor(href)
  if (path === '/') return pathname === '/'
  return pathname === path || pathname.startsWith(`${path}/`)
}

function isCurrentItem(pathname: string, item: NavigationItem): boolean {
  if (item.href) return isCurrentPath(pathname, item.href)
  return item.children?.some((child) => isCurrentPath(pathname, child.href)) ?? false
}

function Chevron({ open = false }: { open?: boolean }) {
  return (
    <svg className="nav-chevron" viewBox="0 0 16 16" aria-hidden="true" data-open={open || undefined}>
      <path d="m3.5 6 4.5 4 4.5-4" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="5.5" />
      <path d="m13 13 4 4" />
    </svg>
  )
}

function itemIsOpen(item: NavigationItem, openLabel: string | null): boolean {
  return Boolean(item.children && item.label === openLabel)
}

export function DesktopNavigation() {
  const pathname = usePathname() || ''
  const [openLabel, setOpenLabel] = useState<string | null>(null)
  const navigationRef = useRef<HTMLElement>(null)
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const menuRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    if (!openLabel) return
    const activeLabel = openLabel

    function closeOnPointerDown(event: PointerEvent) {
      if (!navigationRef.current?.contains(event.target as Node)) setOpenLabel(null)
    }

    function closeOnKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key !== 'Escape') return
      const trigger = triggerRefs.current[activeLabel]
      setOpenLabel(null)
      trigger?.focus()
    }

    document.addEventListener('pointerdown', closeOnPointerDown)
    document.addEventListener('keydown', closeOnKeyDown)
    return () => {
      document.removeEventListener('pointerdown', closeOnPointerDown)
      document.removeEventListener('keydown', closeOnKeyDown)
    }
  }, [openLabel])

  function toggleItem(item: NavigationItem) {
    setOpenLabel((current) => (current === item.label ? null : item.label))
  }

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>, item: NavigationItem) {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setOpenLabel(item.label)
      window.setTimeout(() => menuRefs.current[item.label]?.querySelector<HTMLAnchorElement>('a')?.focus(), 0)
    }
  }

  return (
    <nav ref={navigationRef} className="desktop-nav" aria-label="Primary navigation">
      {primaryNavigation.map((item) => {
        const current = isCurrentItem(pathname, item)
        const open = itemIsOpen(item, openLabel)
        const menuId = `desktop-nav-${slugFor(item.label)}`

        if (!item.children) {
          return (
            <Link
              key={item.label}
              className="desktop-nav__link"
              href={item.href || '/'}
              aria-current={current ? 'page' : undefined}
            >
              {item.label}
            </Link>
          )
        }

        return (
          <div
            key={item.label}
            className="desktop-nav__dropdown"
            data-open={open || undefined}
            data-current={current || undefined}
          >
            <button
              ref={(element) => { triggerRefs.current[item.label] = element }}
              className="desktop-nav__trigger"
              type="button"
              aria-controls={menuId}
              aria-expanded={open}
              aria-haspopup="menu"
              onClick={() => toggleItem(item)}
              onKeyDown={(event) => handleTriggerKeyDown(event, item)}
            >
              {item.label}
              <Chevron open={open} />
            </button>
            {open && (
              <div
                ref={(element) => { menuRefs.current[item.label] = element }}
                id={menuId}
                className="desktop-nav__menu"
                role="menu"
              >
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    role="menuitem"
                    onClick={() => setOpenLabel(null)}
                  >
                    <span>{child.label}</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}

export function MobileNavigation({ account }: { account?: ReactNode }) {
  const pathname = usePathname() || ''
  const [open, setOpen] = useState(false)
  const [expandedLabels, setExpandedLabels] = useState<Set<string>>(new Set())
  const navigationRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    function closeOnPointerDown(event: PointerEvent) {
      if (!navigationRef.current?.contains(event.target as Node)) setOpen(false)
    }

    function closeOnKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', closeOnPointerDown)
    document.addEventListener('keydown', closeOnKeyDown)
    return () => {
      document.removeEventListener('pointerdown', closeOnPointerDown)
      document.removeEventListener('keydown', closeOnKeyDown)
    }
  }, [open])

  function toggleExpanded(label: string) {
    setExpandedLabels((current) => {
      const next = new Set(current)
      if (next.has(label)) next.delete(label)
      else next.add(label)
      return next
    })
  }

  return (
    <div ref={navigationRef} className="mobile-menu">
      <button
        ref={toggleRef}
        className="mobile-menu__toggle"
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="mobile-menu__toggle-icon" aria-hidden="true"><i /><i /><i /></span>
      </button>
      {open && (
        <div id="mobile-navigation" className="mobile-menu__panel">
          <nav aria-label="Mobile navigation">
            {primaryNavigation.map((item) => {
              const current = isCurrentItem(pathname, item)
              const expanded = expandedLabels.has(item.label)
              const sectionId = `mobile-nav-${slugFor(item.label)}`

              if (!item.children) {
                return (
                  <Link
                    key={item.label}
                    className="mobile-menu__link"
                    href={item.href || '/'}
                    aria-current={current ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              }

              return (
                <div key={item.label} className="mobile-menu__section" data-current={current || undefined}>
                  <button
                    className="mobile-menu__section-trigger"
                    type="button"
                    aria-controls={sectionId}
                    aria-expanded={expanded}
                    onClick={() => toggleExpanded(item.label)}
                  >
                    <span>{item.label}</span>
                    <Chevron open={expanded} />
                  </button>
                  {expanded && (
                    <div id={sectionId} className="mobile-menu__children">
                      {item.children.map((child) => (
                        <Link key={child.label} href={child.href} onClick={() => setOpen(false)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
            <div className="mobile-menu__divider" />
            <div className="mobile-menu__account">{account}</div>
            <Link className="button mobile-menu__cta" href={businessDirectoryHref} onClick={() => setOpen(false)}>
              Business directory
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

export { SearchIcon }
