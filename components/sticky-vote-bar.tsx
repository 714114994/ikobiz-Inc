"use client"

import { Button } from "@/components/ui/button"
import { VoteButton } from "@/components/vote-button"
import { useWaitlist } from "@/components/waitlist-provider"

export function StickyVoteBar() {
  const { open } = useWaitlist()

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Button
          variant="outline"
          onClick={open}
          className="flex-1 border-border bg-card"
        >
          Join Early Access
        </Button>
        <VoteButton size="default" showArrow={false} className="flex-1" />
      </div>
    </div>
  )
}
