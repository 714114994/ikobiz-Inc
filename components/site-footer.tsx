import { BrandLogo } from "@/components/brand-logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background pb-24 pt-12 lg:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
        <BrandLogo />
        <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          Building accessible local commerce for communities across Kenya and beyond.
        </p>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Ikobiz. Made with care in Kenya.
        </p>
      </div>
    </footer>
  )
}
