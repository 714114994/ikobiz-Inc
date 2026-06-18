import { MessageSquare, Search, Store, ShoppingCart, BadgeCheck, Truck } from "lucide-react"

const steps = [
  { icon: MessageSquare, title: "Open WhatsApp", caption: "Start in the app you already use every day." },
  { icon: Search, title: "Search product", caption: "Type what you need in plain language." },
  { icon: Store, title: "Discover sellers", caption: "See trusted sellers near you." },
  { icon: ShoppingCart, title: "Place order", caption: "Order directly in the chat." },
  { icon: BadgeCheck, title: "Get confirmation", caption: "Receive an instant confirmation." },
  { icon: Truck, title: "Delivery or pickup", caption: "Choose what works for you." },
]

export function Journey() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Product experience</p>
          <h2 className="mt-3 text-balance font-heading text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Shopping reimagined around everyday communication
          </h2>
        </div>

        <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col items-center text-center">
              {/* connector line */}
              {index < steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-7 hidden h-px w-full bg-gradient-to-r from-primary/40 to-border lg:block"
                />
              ) : null}
              <span className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-sm">
                <step.icon className="size-6" />
                <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
                  {index + 1}
                </span>
              </span>
              <h3 className="mt-4 font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.caption}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
