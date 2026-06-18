"use client"

import Link from "next/link"
import { useState } from "react"
import { Share2, Home, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SuccessActions() {
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    const shareData = {
      title: "Ikobiz",
      text: "Support Ikobiz — making local commerce as simple as a WhatsApp message. Vote and join early access!",
      url: typeof window !== "undefined" ? window.location.origin : "",
    }
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share(shareData)
        return
      }
      await navigator.clipboard.writeText(shareData.url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // user dismissed the share sheet; no action needed
    }
  }

  return (
    <div className="mt-10 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
      <Button size="lg" onClick={handleShare} className="w-full gap-2 sm:w-auto">
        {copied ? <Check className="size-4" /> : <Share2 className="size-4" />}
        {copied ? "Link copied!" : "Share With Friends"}
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="w-full gap-2 border-border bg-card sm:w-auto"
        render={<Link href="/" />}
      >
        <Home className="size-4" />
        Return Home
      </Button>
    </div>
  )
}
