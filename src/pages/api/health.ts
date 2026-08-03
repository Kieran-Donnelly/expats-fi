export const prerender = false;
export function GET() {
  return new Response(JSON.stringify({ status: 'ok', service: 'expats-fi' }), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
}
