"use client"

import { Button } from "@/components/ui/button"
import { VoteButton } from "@/components/vote-button"
import { useWaitlist } from "@/components/waitlist-provider"

export function FinalCta() {
  const { open } = useWaitlist()

  return (
    <section id="vote" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_0%,color-mix(in_oklch,var(--color-accent)_28%,transparent),transparent)]"
      />
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-balance font-heading text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Support innovation shaping the future of local commerce
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Your vote helps bring this vision closer to reality while supporting innovation solving real-world problems.
        </p>

        <div className="mt-10 flex justify-center">
          <VoteButton size="lg" className="h-14 px-10 text-lg" />
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="text-muted-foreground">Interested in seeing Ikobiz launch?</p>
          <Button variant="outline" size="lg" onClick={open} className="border-border bg-card">
            Join Early Access
          </Button>
        </div>
      </div>
    </section>
  )
}
