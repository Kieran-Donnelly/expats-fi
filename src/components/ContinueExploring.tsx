import Link from 'next/link'

type ContinueLink = {
  eyebrow: string
  title: string
  description: string
  href: string
}

type ContinueExploringProps = {
  title: string
  intro: string
  links: ContinueLink[]
}

export function ContinueExploring({ title, intro, links }: ContinueExploringProps) {
  return (
    <section className="continue-exploring" aria-labelledby="continue-exploring-heading">
      <div className="shell section">
        <div className="section-heading">
          <div><p className="eyebrow">Where to next?</p><h2 id="continue-exploring-heading">{title}</h2></div>
          <p>{intro}</p>
        </div>
        <div className="continue-exploring__grid">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              <span>{link.eyebrow}</span>
              <strong>{link.title}</strong>
              <small>{link.description}</small>
              <i aria-hidden="true">→</i>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
