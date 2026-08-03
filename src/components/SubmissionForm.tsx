'use client'

import type { FormEvent } from 'react'

export function SubmissionForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = [
      `Business name: ${data.get('name') || ''}`,
      `Website: ${data.get('website') || ''}`,
      `Location: ${data.get('location') || ''}`,
      `Category: ${data.get('category') || ''}`,
      '',
      String(data.get('description') || ''),
      '',
      `Submitted by: ${data.get('contact') || ''}`,
    ].join('\n')
    window.location.href = `mailto:listings@expats.fi?subject=${encodeURIComponent(`Business listing: ${data.get('name') || ''}`)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="form-card" onSubmit={submit}>
      <label>Business name<input name="name" required /></label>
      <label>Website<input name="website" type="url" required placeholder="https://" /></label>
      <label>City or service area<input name="location" required /></label>
      <label>Business category<input name="category" required /></label>
      <label>What does the business do?<textarea name="description" required /></label>
      <label>Your name and email<input name="contact" required /></label>
      <button className="button" type="submit">Email this listing</button>
      <p className="form-note">This opens an email to listings@expats.fi so you can review the details before sending.</p>
    </form>
  )
}
