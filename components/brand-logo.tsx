import { cn } from "@/lib/utils"

export function BrandLogo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <span
        aria-hidden="true"
        className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path
            d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.6A8.5 8.5 0 1 1 21 11.5Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M8.5 12h7M12 8.5v7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight text-foreground">Ikobiz</span>
    </span>
  )
}
