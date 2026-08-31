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
  return item.children?.some((child) => isCurrentPath(pathname, child.href) || child.children?.some((leaf) => isCurrentPath(pathname, leaf.href))) ?? false
}

function isCurrentChild(pathname: string, child: NonNullable<NavigationItem['children']>[number]): boolean {
  return isCurrentPath(pathname, child.href) || child.children?.some((leaf) => isCurrentPath(pathname, leaf.href)) || false
}

function leafIsCurrent(pathname: string, href: string): boolean {
  return !href.includes('?') && !href.includes('#') && isCurrentPath(pathname, href)
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

function currentMobileSections(pathname: string): Set<string> {
  const labels = new Set<string>()

  for (const item of primaryNavigation) {
    if (!item.children || !isCurrentItem(pathname, item)) continue
    labels.add(item.label)

    for (const child of item.children) {
      if (child.children && isCurrentChild(pathname, child)) labels.add(`${item.label}:${child.label}`)
    }
  }

  return labels
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
                {item.children.map((child) => {
                  const childCurrent = isCurrentChild(pathname, child)

                  if (!child.children) {
                    return (
                      <Link
                        key={child.label}
                        href={child.href}
                        role="menuitem"
                        aria-current={childCurrent ? 'page' : undefined}
                        onClick={() => setOpenLabel(null)}
                      >
                        <span>{child.label}</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    )
                  }

                  return (
                    <div className="desktop-nav__submenu-item" data-current={childCurrent || undefined} role="none" key={child.label}>
                      <Link
                        href={child.href}
                        role="menuitem"
                        aria-haspopup="menu"
                        aria-current={childCurrent ? 'page' : undefined}
                        onClick={() => setOpenLabel(null)}
                      >
                        <span>{child.label}</span>
                        <span className="desktop-nav__submenu-arrow" aria-hidden="true">›</span>
                      </Link>
                      <div className="desktop-nav__submenu" role="menu" aria-label={child.label}>
                        {child.children.map((leaf) => (
                          <Link
                            href={leaf.href}
                            role="menuitem"
                            aria-current={leafIsCurrent(pathname, leaf.href) ? 'page' : undefined}
                            onClick={() => setOpenLabel(null)}
                            key={leaf.label}
                          >
                            {leaf.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                })}
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
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    closeRef.current?.focus()

    function closeOnPointerDown(event: PointerEvent) {
      if (!navigationRef.current?.contains(event.target as Node)) setOpen(false)
    }

    function closeOnKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    function keepFocusInMenu(event: globalThis.KeyboardEvent) {
      if (event.key !== 'Tab' || !panelRef.current) return
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      )
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    function closeAtDesktopWidth(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false)
    }

    const desktopQuery = window.matchMedia('(min-width: 1101px)')

    document.addEventListener('pointerdown', closeOnPointerDown)
    document.addEventListener('keydown', closeOnKeyDown)
    document.addEventListener('keydown', keepFocusInMenu)
    desktopQuery.addEventListener('change', closeAtDesktopWidth)
    return () => {
      document.documentElement.style.overflow = previousOverflow
      document.removeEventListener('pointerdown', closeOnPointerDown)
      document.removeEventListener('keydown', closeOnKeyDown)
      document.removeEventListener('keydown', keepFocusInMenu)
      desktopQuery.removeEventListener('change', closeAtDesktopWidth)
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

  function toggleMenu() {
    if (!open) {
      setExpandedLabels((expanded) => new Set([...expanded, ...currentMobileSections(pathname)]))
    }
    setOpen(!open)
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
        onClick={toggleMenu}
      >
        <span className="mobile-menu__toggle-icon" aria-hidden="true"><i /><i /><i /></span>
      </button>
      {open && (
        <>
          <button
            className="mobile-menu__backdrop"
            type="button"
            aria-label="Close navigation"
            tabIndex={-1}
            onClick={() => {
              setOpen(false)
              toggleRef.current?.focus()
            }}
          />
          <div
            ref={panelRef}
            id="mobile-navigation"
            className="mobile-menu__panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="mobile-menu__panel-header">
              <span>Menu</span>
              <button
                ref={closeRef}
                type="button"
                aria-label="Close navigation"
                onClick={() => {
                  setOpen(false)
                  toggleRef.current?.focus()
                }}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
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
                      {item.children.map((child) => {
                        const childCurrent = isCurrentChild(pathname, child)

                        if (!child.children) {
                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              aria-current={childCurrent ? 'page' : undefined}
                              onClick={() => setOpen(false)}
                            >
                              {child.label}
                            </Link>
                          )
                        }

                        const childKey = `${item.label}:${child.label}`
                        const childExpanded = expandedLabels.has(childKey)
                        const childId = `${sectionId}-${slugFor(child.label)}`

                        return (
                          <div className="mobile-menu__nested-section" data-current={childCurrent || undefined} key={child.label}>
                            <div className="mobile-menu__nested-row">
                              <Link href={child.href} aria-current={childCurrent ? 'page' : undefined} onClick={() => setOpen(false)}>
                                {child.label}
                              </Link>
                              <button
                                type="button"
                                aria-label={`${childExpanded ? 'Close' : 'Open'} ${child.label} links`}
                                aria-controls={childId}
                                aria-expanded={childExpanded}
                                onClick={() => toggleExpanded(childKey)}
                              >
                                <Chevron open={childExpanded} />
                              </button>
                            </div>
                            {childExpanded && (
                              <div className="mobile-menu__grandchildren" id={childId}>
                                {child.children.map((leaf) => (
                                  <Link
                                    href={leaf.href}
                                    aria-current={leafIsCurrent(pathname, leaf.href) ? 'page' : undefined}
                                    onClick={() => setOpen(false)}
                                    key={leaf.label}
                                  >
                                    {leaf.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )
                      })}
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
        </>
      )}
    </div>
  )
}

export { SearchIcon }
