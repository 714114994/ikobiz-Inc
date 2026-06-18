import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WaitlistProvider } from "@/components/waitlist-provider"
import { SuccessActions } from "@/components/success-actions"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Thank you for supporting innovation — Ikobiz",
  description: "Your support helps bring better local commerce solutions to communities across Africa.",
}

export default function SuccessPage() {
  return (
    <WaitlistProvider>
      <SiteHeader />
      <main className="flex min-h-[calc(100svh-4rem)] items-center justify-center px-4 py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <span className="flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <CheckCircle2 className="size-9" />
          </span>
          <h1 className="mt-8 text-balance font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
            Thank you for supporting innovation
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Your support helps bring better local commerce solutions to communities across Africa.
          </p>
          <SuccessActions />
        </div>
      </main>
      <SiteFooter />
    </WaitlistProvider>
  )
}
