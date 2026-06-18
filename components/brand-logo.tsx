import Image from "next/image"
import { cn } from "@/lib/utils"

export function BrandLogo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <span className="flex h-9 w-9 items-center justify-center">
        <Image
          src="/images/ikobiz-logo.png"
          alt="Ikobiz logo"
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
        />
      </span>
      <span className="text-lg font-semibold tracking-tight text-foreground">Ikobiz</span>
    </span>
  )
}
