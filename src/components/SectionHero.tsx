type SectionHeroProps = {
  eyebrow: string
  title: string
  intro: string
  noteLabel: string
  noteTitle: string
  noteBody: string
  tone?: 'blue' | 'warm' | 'dark'
}

export function SectionHero({
  eyebrow,
  title,
  intro,
  noteLabel,
  noteTitle,
  noteBody,
  tone = 'blue',
}: SectionHeroProps) {
  return (
    <header className={`hub-hero hub-hero--${tone}`}>
      <div className="shell hub-hero__inner">
        <div className="hub-hero__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <aside className="hub-hero__note">
          <span>{noteLabel}</span>
          <strong>{noteTitle}</strong>
          <p>{noteBody}</p>
        </aside>
      </div>
    </header>
  )
}
