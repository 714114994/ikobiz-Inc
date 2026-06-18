"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { WaitlistDialog } from "@/components/waitlist-dialog"

type WaitlistContextValue = {
  open: () => void
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null)

export function useWaitlist() {
  const ctx = useContext(WaitlistContext)
  if (!ctx) {
    throw new Error("useWaitlist must be used within a WaitlistProvider")
  }
  return ctx
}

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <WaitlistContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <WaitlistDialog open={isOpen} onOpenChange={setIsOpen} />
    </WaitlistContext.Provider>
  )
}
