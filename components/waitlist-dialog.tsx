"use client"

import { useActionState, useEffect } from "react"
import { useFormStatus } from "react-dom"
import { useRouter } from "next/navigation"
import { joinWaitlist, type WaitlistResult } from "@/app/actions/waitlist"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full text-base">
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          Joining…
        </>
      ) : (
        "Join Early Access"
      )}
    </Button>
  )
}

export function WaitlistDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const router = useRouter()
  const [state, formAction] = useActionState<WaitlistResult | null, FormData>(joinWaitlist, null)

  useEffect(() => {
    if (state?.success) {
      const timeout = setTimeout(() => {
        onOpenChange(false)
        router.push("/success")
      }, 600)
      return () => clearTimeout(timeout)
    }
  }, [state, onOpenChange, router])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Join the early supporter list</DialogTitle>
          <DialogDescription className="text-pretty">
            Want to follow Ikobiz as it grows? Join our early supporter list and be first to know when we launch in
            your community.
          </DialogDescription>
        </DialogHeader>

        <form action={formAction} className="mt-2 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required autoComplete="name" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">
              Phone number <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Input id="phone" name="phone" type="tel" placeholder="+254 7XX XXX XXX" autoComplete="tel" />
          </div>

          {state && !state.success ? (
            <p role="alert" className="text-sm font-medium text-destructive">
              {state.message}
            </p>
          ) : null}
          {state?.success ? (
            <p role="status" className="text-sm font-medium text-primary">
              {state.message} Redirecting…
            </p>
          ) : null}

          <SubmitButton />
          <p className="text-center text-xs text-muted-foreground">
            We&apos;ll only use your details to share Ikobiz updates. No spam.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
