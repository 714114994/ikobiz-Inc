import { MapPinOff, EyeOff, Unplug } from "lucide-react"

const problems = [
  {
    icon: MapPinOff,
    title: "Finding products nearby is frustrating",
    description: "People waste time walking around or asking multiple shops just to check if something is available.",
  },
  {
    icon: EyeOff,
    title: "Small sellers remain invisible online",
    description: "Many local businesses have no digital storefront or easy way for buyers to discover them.",
  },
  {
    icon: Unplug,
    title: "Commerce is fragmented",
    description: "Ordering, delivery, communication, and trust are spread across disconnected channels.",
  },
]

export function Problem() {
  return (
    <section id="problem" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">The problem</p>
          <h2 className="mt-3 text-balance font-heading text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            The everyday problem millions face
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <item.icon className="size-6" />
              </span>
              <h3 className="text-pretty text-xl font-semibold text-card-foreground">{item.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
