import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VOTE_URL } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function VoteButton({
  size = "lg",
  className,
  children = "Vote for Ikobiz",
  showArrow = true,
}: {
  size?: "default" | "sm" | "lg"
  className?: string
  children?: React.ReactNode
  showArrow?: boolean
}) {
  const isExternal = VOTE_URL.startsWith("http")
  return (
    <Button
      size={size}
      className={cn("group gap-2 text-base", className)}
      render={
        <Link
          href={VOTE_URL}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        />
      }
    >
      {children}
      {showArrow ? (
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      ) : null}
    </Button>
  )
}
