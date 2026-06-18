import Image from "next/image"

export function Builder() {
  return (
    <section id="story" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[5fr_7fr] lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm">
            <Image
              src="/images/ikobiz-logo.png"
              alt="Ikobiz logo"
              width={800}
              height={900}
              className="h-auto w-full object-contain"
            />
          </div>
          <span className="absolute -bottom-4 left-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-card-foreground shadow-md">
            Built in Kenya
            <span aria-hidden="true">🇰🇪</span>
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">The story</p>
          <h2 className="text-balance font-heading text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Built to solve a real African problem
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Ikobiz was created with a simple belief: local businesses deserve access to digital commerce without
            expensive infrastructure, and buyers deserve easier access to the products already around them.
          </p>
          <blockquote className="border-l-4 border-primary pl-5 text-pretty text-lg italic leading-relaxed text-foreground">
            &ldquo;The technology that helps communities thrive shouldn&apos;t be reserved for big players. It should
            start with the shop around the corner.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
