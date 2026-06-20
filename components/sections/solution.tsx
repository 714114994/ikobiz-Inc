import Image from "next/image"
import { Search, Store, MessageCircle, HeartHandshake } from "lucide-react"

const features = [
  { icon: Search, text: "Search for products instantly" },
  { icon: Store, text: "Discover nearby trusted sellers" },
  { icon: MessageCircle, text: "Buy directly through WhatsApp" },
  { icon: HeartHandshake, text: "Support local businesses in your community" },
]

export function Solution() {
  return (
    <section id="solution" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl border border-border bg-secondary/40">
            <Image
              src="/images/solution-commerce-flow.png"
              alt="A shopper receiving a delivery from a local vendor in a Nairobi neighborhood, with a phone showing a chat conversation"
              width={1000}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">The solution</p>
          <h2 className="text-balance font-heading text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            A marketplace built around how people already communicate
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Ikobiz allows buyers to discover products, connect with local sellers, and complete purchases directly
            through familiar messaging experiences.
          </p>
          <ul className="mt-2 flex flex-col gap-4">
            {features.map((feature) => (
              <li key={feature.text} className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <feature.icon className="size-5" />
                </span>
                <span className="text-lg text-foreground">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
