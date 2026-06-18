"use client"

import Image from "next/image"
import { MapPin, ShoppingBag, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VoteButton } from "@/components/vote-button"
import { useWaitlist } from "@/components/waitlist-provider"

export function Hero() {
  const { open } = useWaitlist()

  return (
    <section className="relative overflow-hidden">
      {/* soft brand wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_80%_0%,color-mix(in_oklch,var(--color-primary)_14%,transparent),transparent),radial-gradient(50%_40%_at_0%_100%,color-mix(in_oklch,var(--color-accent)_22%,transparent),transparent)]"
      />
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-20">
        <div className="flex flex-col items-start gap-6 text-left animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" />
            Built in Kenya for local commerce
          </span>
          <h1 className="text-balance font-heading text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            What if shopping locally was as simple as sending a WhatsApp message?
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Ikobiz is building a smarter way for communities in Kenya to discover nearby sellers, shop instantly, and
            help small businesses thrive digitally.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <VoteButton size="lg" className="w-full sm:w-auto" />
            <Button
              size="lg"
              variant="outline"
              onClick={open}
              className="w-full border-border bg-card text-base sm:w-auto"
            >
              Join Early Access
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative animate-float">
            <Image
              src="/images/hero-whatsapp-mockup.png"
              alt="A smartphone showing a WhatsApp conversation where a shopper searches for products and receives nearby seller results"
              width={900}
              height={900}
              priority
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>

          {/* floating marketplace cards */}
          <div className="absolute -left-2 top-10 hidden rounded-2xl border border-border bg-card/95 p-3 shadow-lg backdrop-blur sm:block">
            <div className="flex items-center gap-2 text-sm">
              <span className="flex size-8 items-center justify-center rounded-lg bg-secondary text-primary">
                <MapPin className="size-4" />
              </span>
              <div>
                <p className="font-semibold leading-tight text-card-foreground">3 sellers nearby</p>
                <p className="text-xs text-muted-foreground">within 1.2 km</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 top-1/3 hidden rounded-2xl border border-border bg-card/95 p-3 shadow-lg backdrop-blur sm:block">
            <div className="flex items-center gap-2 text-sm">
              <span className="flex size-8 items-center justify-center rounded-lg bg-secondary text-primary">
                <ShoppingBag className="size-4" />
              </span>
              <div>
                <p className="font-semibold leading-tight text-card-foreground">Order placed</p>
                <p className="text-xs text-muted-foreground">Mama Njeri Groceries</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-2 left-6 hidden rounded-2xl border border-border bg-card/95 p-3 shadow-lg backdrop-blur sm:block">
            <div className="flex items-center gap-2 text-sm">
              <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Star className="size-4 fill-current" />
              </span>
              <div>
                <p className="font-semibold leading-tight text-card-foreground">Trusted local</p>
                <p className="text-xs text-muted-foreground">4.9 community rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
