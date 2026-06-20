"use client"

import { useActionState, useEffect, useState } from "react"
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
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import { Loader2, Check } from "lucide-react"

const INTENTS = [
  { value: "sell", label: "I want to sell", description: "List products and reach local buyers" },
  { value: "shop", label: "I want to shop", description: "Browse and buy from local sellers" },
  { value: "both", label: "Both", description: "Sell and shop on the platform" },
] as const

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

function IntentRadio({
  value,
  label,
  description,
  selected,
  onChange,
}: {
  value: string
  label: string
  description: string
  selected: string
  onChange: (value: string) => void
}) {
  const isSelected = selected === value
  return (
    <label
      className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-colors ${
        isSelected
          ? "border-primary bg-primary/5"
          : "border-input hover:border-muted-foreground/30"
      }`}
    >
      <input
        type="radio"
        name="intent"
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      <span
        className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
          isSelected ? "border-primary bg-primary" : "border-muted-foreground/40"
        }`}
      >
        {isSelected && <Check className="size-3 text-primary-foreground" />}
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-sm font-medium leading-snug text-foreground">{label}</span>
        <span className="text-xs leading-snug text-muted-foreground">{description}</span>
      </span>
    </label>
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
  const [intent, setIntent] = useState("")
  const [phone, setPhone] = useState<string | undefined>()
  const [phoneError, setPhoneError] = useState(false)

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
            <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
            <p className="-mt-1 text-xs text-muted-foreground">Where we&apos;ll send your invite</p>
            <div
              className={`flex items-center rounded-lg border bg-background px-3 py-2 text-base transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:border-ring ${
                phoneError ? "border-destructive" : "border-input"
              }`}
            >
              <PhoneInput
                defaultCountry="KE"
                placeholder="712 345 678"
                value={phone}
                onChange={(v) => {
                  setPhone(v)
                  setPhoneError(false)
                }}
                className="w-full [&_.PhoneInputCountry]:ml-0 [&_.PhoneInputCountry]:mr-1.5 [&_.PhoneInputInput]:w-full [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:focus:outline-none [&_.PhoneInputInput]:text-foreground [&_.PhoneInputInput]:placeholder:text-muted-foreground/60"
              />
            </div>
            <input type="hidden" name="whatsappNumber" value={phone || ""} />
            <p className="text-xs text-muted-foreground">
              Tap the flag to change country. Kenyans just type your local number.
            </p>
          </div>

          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm leading-none font-medium select-none">How do you intend to use the platform?</legend>
            <div className="flex flex-col gap-2" role="radiogroup">
              {INTENTS.map((item) => (
                <IntentRadio
                  key={item.value}
                  value={item.value}
                  label={item.label}
                  description={item.description}
                  selected={intent}
                  onChange={setIntent}
                />
              ))}
            </div>
          </fieldset>

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
