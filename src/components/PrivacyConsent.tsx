'use client'

import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useSyncExternalStore } from 'react'

import { AnalyticsEvents } from '@/components/AnalyticsEvents'

const privacyChoiceKey = 'expats-fi-privacy-choice'
const privacyChoiceEvent = 'expats-fi-privacy-choice-changed'

type PrivacyChoice = 'analytics' | 'essential'
type PrivacySnapshot = PrivacyChoice | 'loading' | 'unset'

function storedChoice(): PrivacyChoice | null {
  if (typeof window === 'undefined') return null
  const value = window.localStorage.getItem(privacyChoiceKey)
  return value === 'analytics' || value === 'essential' ? value : null
}

function clearAnalyticsCookies() {
  if (typeof document === 'undefined') return
  const names = document.cookie.split(';').map((cookie) => cookie.split('=')[0]?.trim()).filter((name) => name && (name === '_ga' || name === '_gid' || name === '_gat' || name.startsWith('_ga_')))
  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`
    document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.expats.fi; SameSite=Lax`
  }
}

function saveChoice(choice: PrivacyChoice) {
  const previous = storedChoice()
  window.localStorage.setItem(privacyChoiceKey, choice)
  window.dispatchEvent(new CustomEvent(privacyChoiceEvent, { detail: choice }))

  if (choice === 'essential') {
    clearAnalyticsCookies()
    if (previous === 'analytics') window.location.reload()
  }
}

function subscribeToPrivacyChoice(onStoreChange: () => void) {
  window.addEventListener(privacyChoiceEvent, onStoreChange)
  window.addEventListener('storage', onStoreChange)
  return () => {
    window.removeEventListener(privacyChoiceEvent, onStoreChange)
    window.removeEventListener('storage', onStoreChange)
  }
}

function privacySnapshot(): PrivacySnapshot {
  return storedChoice() || 'unset'
}

function usePrivacyChoice() {
  const snapshot = useSyncExternalStore(subscribeToPrivacyChoice, privacySnapshot, () => 'loading')

  useEffect(() => {
    if (snapshot !== 'analytics') clearAnalyticsCookies()
  }, [snapshot])

  return { choice: snapshot === 'analytics' || snapshot === 'essential' ? snapshot : null, ready: snapshot !== 'loading' }
}

export function PrivacyConsent() {
  const { choice, ready } = usePrivacyChoice()

  return (
    <>
      {choice === 'analytics' && (
        <>
          <Script src="https://analytics.podium.dev/api/script.js" data-site-id="98fd41b83b7e" strategy="afterInteractive" />
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-CB5QYGM914" strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CB5QYGM914', { anonymize_ip: true });
            `}
          </Script>
          <AnalyticsEvents />
        </>
      )}

      {ready && choice === null && (
        <section className="privacy-banner" aria-label="Privacy choices">
          <div>
            <strong>Your privacy, your call.</strong>
            <p>Essential sign-in storage keeps accounts working. With your permission, analytics help us see which guides are useful. The site works either way.</p>
            <Link href="/privacy/">Read the privacy details</Link>
          </div>
          <div className="privacy-banner__actions">
            <button type="button" onClick={() => saveChoice('essential')}>Essential only</button>
            <button className="privacy-banner__accept" type="button" onClick={() => saveChoice('analytics')}>Allow analytics</button>
          </div>
        </section>
      )}
    </>
  )
}

export function PrivacyChoicePanel() {
  const { choice, ready } = usePrivacyChoice()

  if (!ready) return <div className="privacy-choice-panel"><p>Loading your privacy choice…</p></div>

  return (
    <div className="privacy-choice-panel" id="analytics-choice">
      <p className="eyebrow">Your analytics choice</p>
      <strong>{choice === 'analytics' ? 'Analytics allowed' : choice === 'essential' ? 'Essential storage only' : 'No choice saved yet'}</strong>
      <p>Essential account and security storage always stays available. Analytics are optional and can be changed whenever you like.</p>
      <div>
        <button type="button" className={choice === 'essential' ? 'is-selected' : ''} onClick={() => saveChoice('essential')}>Essential only</button>
        <button type="button" className={choice === 'analytics' ? 'is-selected' : ''} onClick={() => saveChoice('analytics')}>Allow analytics</button>
      </div>
    </div>
  )
}
