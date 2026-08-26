import Image from 'next/image'

type SectionHeroProps = {
  eyebrow: string
  title: string
  intro: string
  noteLabel: string
  noteTitle: string
  noteBody: string
  tone?: 'blue' | 'warm' | 'dark'
  image?: {
    src: string
    position?: string
  }
}

export function SectionHero({
  eyebrow,
  title,
  intro,
  noteLabel,
  noteTitle,
  noteBody,
  tone = 'blue',
  image,
}: SectionHeroProps) {
  return (
    <header className={`hub-hero hub-hero--${tone}`} data-has-image={image ? true : undefined}>
      {image && (
        <div className="hub-hero__media" aria-hidden="true">
          <Image
            src={image.src}
            alt=""
            fill
            loading="eager"
            sizes="100vw"
            style={{ objectPosition: image.position ?? 'center' }}
          />
        </div>
      )}
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
