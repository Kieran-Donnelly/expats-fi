import Image from 'next/image'

type HeroBackdropProps = {
  src: string
  position?: string
}

export function HeroBackdrop({ src, position = 'center' }: HeroBackdropProps) {
  return (
    <div className="photo-hero__media" aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        loading="eager"
        sizes="100vw"
        style={{ objectPosition: position }}
      />
    </div>
  )
}
