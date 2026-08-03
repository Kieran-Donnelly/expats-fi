import configPromise from '@payload-config'
import { getPayload } from 'payload'

function isSameOrigin(request: Request) {
  const origin = request.headers.get('origin')
  if (!origin) return true
  return origin === new URL(request.url).origin
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return Response.json({ message: 'Invalid request origin.' }, { status: 403 })

  const data = await request.json().catch(() => null)
  const name = typeof data?.name === 'string' ? data.name.trim() : ''
  const email = typeof data?.email === 'string' ? data.email.trim().toLowerCase() : ''
  const password = typeof data?.password === 'string' ? data.password : ''

  if (name.length < 2) return Response.json({ message: 'Please enter your name.' }, { status: 400 })
  if (!/^\S+@\S+\.\S+$/.test(email)) return Response.json({ message: 'Please enter a valid email address.' }, { status: 400 })
  if (password.length < 8) return Response.json({ message: 'Use at least 8 characters for your password.' }, { status: 400 })

  const payload = await getPayload({ config: configPromise })
  const existing = await payload.find({ collection: 'members', where: { email: { equals: email } }, limit: 1, overrideAccess: true })
  if (existing.totalDocs) return Response.json({ message: 'An account already exists for this email. Try signing in instead.' }, { status: 409 })

  await payload.create({
    collection: 'members',
    data: { name, email, password, provider: 'password' },
    overrideAccess: true,
  })

  return Response.json({ ok: true }, { status: 201 })
}
