"use client"

import { Button } from "@/components/ui/button"
import { BrandLogo } from "@/components/brand-logo"
import { VoteButton } from "@/components/vote-button"
import { useWaitlist } from "@/components/waitlist-provider"

export function SiteHeader() {
  const { open } = useWaitlist()

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <BrandLogo />
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            variant="ghost"
            onClick={open}
            className="hidden text-sm font-medium sm:inline-flex"
          >
            Join Early Access
          </Button>
          <VoteButton size="default" showArrow={false} className="text-sm" />
        </div>
      </div>
    </header>
  )
}
