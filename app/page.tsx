import { WaitlistProvider } from "@/components/waitlist-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { StickyVoteBar } from "@/components/sticky-vote-bar"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { Solution } from "@/components/sections/solution"
import { Vision } from "@/components/sections/vision"
import { Journey } from "@/components/sections/journey"
import { Builder } from "@/components/sections/builder"
import { FinalCta } from "@/components/sections/final-cta"

export default function Page() {
  return (
    <WaitlistProvider>
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Vision />
        <Journey />
        <Builder />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyVoteBar />
    </WaitlistProvider>
  )
}
