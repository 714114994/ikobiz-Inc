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
          <div className="relative animate-float overflow-hidden rounded-[2rem] border border-border bg-card/90">
            <Image
              src="/images/screen.png"
              alt="A smartphone showing a WhatsApp conversation where a shopper searches for products and receives nearby seller results"
              width={900}
              height={900}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full rounded-[2rem] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
