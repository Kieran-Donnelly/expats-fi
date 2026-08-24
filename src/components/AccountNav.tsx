import Link from 'next/link'
import { cookies } from 'next/headers'

function isMemberToken(token?: string) {
  if (!token) return false
  try {
    const encoded = token.split('.')[1]
    if (!encoded) return false
    const claims = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8')) as { collection?: string; exp?: number }
    return claims.collection === 'members' && (!claims.exp || claims.exp * 1000 > Date.now())
  } catch {
    return false
  }
}

export async function AccountNav({ mobile = false }: { mobile?: boolean }) {
  const cookieStore = await cookies()
  const signedIn = Boolean(cookieStore.get('expats-google-session')?.value) || isMemberToken(cookieStore.get('payload-token')?.value)
  const href = signedIn ? '/account/' : '/login/'
  const label = mobile ? (signedIn ? 'My account' : 'Sign in') : (signedIn ? 'Account' : 'Sign in')
  return <Link className={mobile ? undefined : 'account-link'} href={href}>{label}</Link>
}
