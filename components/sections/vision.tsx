import { Sprout, Compass, Globe2 } from "lucide-react"

const impacts = [
  {
    icon: Sprout,
    title: "Empowering local sellers",
    description: "Giving informal traders and growing businesses a simple path into digital commerce.",
  },
  {
    icon: Compass,
    title: "Faster discovery for buyers",
    description: "Helping people find the products already around them, without the guesswork.",
  },
  {
    icon: Globe2,
    title: "Digitizing community commerce",
    description: "Building the foundation for accessible local commerce across Africa.",
  },
]

export function Vision() {
  return (
    <section id="vision" className="bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">Why this matters</p>
        <h2 className="mt-4 text-balance font-heading text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          This is bigger than shopping
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85 sm:text-xl">
          We believe technology should make local commerce accessible to everyone — from informal traders in
          neighborhoods to growing businesses across Kenya.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 px-4 sm:px-6 md:grid-cols-3">
        {impacts.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 text-left backdrop-blur-sm"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <item.icon className="size-6" />
            </span>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="leading-relaxed text-primary-foreground/80">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
