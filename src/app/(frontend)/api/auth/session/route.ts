import { getCurrentMember } from '@/lib/member-auth'

export async function GET(request: Request) {
  const member = await getCurrentMember(request.headers)
  return Response.json({ member }, { headers: { 'Cache-Control': 'no-store' } })
}
