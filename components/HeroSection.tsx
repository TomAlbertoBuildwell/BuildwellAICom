import Image from 'next/image'

type CTA = {
  text: string
  href: string
}

type HeroSectionProps = {
  title: React.ReactNode
  subtitle?: string
  callToActionPrimary?: CTA
  callToActionSecondary?: CTA
  backgroundImage?: string
}

export function HeroSection({
  title,
  subtitle,
  callToActionPrimary,
  callToActionSecondary,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative py-20 md:py-28 bg-background dark:bg-background overflow-hidden">
      {backgroundImage ? (
        <div className="absolute inset-0 -z-10">
          <Image src={backgroundImage} alt="hero background" fill className="object-cover opacity-30 dark:opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      ) : null}

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white leading-tight">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-6 text-lg md:text-xl text-muted-foreground dark:text-neutral-300">
              {subtitle}
            </p>
          ) : null}

          <div className="mt-8 flex justify-center gap-4">
            {callToActionPrimary ? (
              <a
                href={callToActionPrimary.href}
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#FBB429] to-[#F87866] px-5 py-3 text-sm font-semibold text-black shadow-md"
              >
                {callToActionPrimary.text}
              </a>
            ) : null}

            {callToActionSecondary ? (
              <a
                href={callToActionSecondary.href}
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground dark:text-white"
              >
                {callToActionSecondary.text}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
