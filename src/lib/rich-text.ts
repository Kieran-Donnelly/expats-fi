export function demoteEmbeddedH1Headings<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item) => demoteEmbeddedH1Headings(item)) as T
  }

  if (!value || typeof value !== 'object') return value

  const record = value as Record<string, unknown>
  const copy = Object.fromEntries(
    Object.entries(record).map(([key, item]) => [key, demoteEmbeddedH1Headings(item)]),
  ) as Record<string, unknown>

  if (copy.type === 'heading' && copy.tag === 'h1') copy.tag = 'h2'

  return copy as T
}
