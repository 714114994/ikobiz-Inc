"use server"

import { db } from "@/lib/db"
import { waitlist } from "@/lib/db/schema"

export type WaitlistResult = {
  success: boolean
  message: string
}

const VALID_INTENTS = ["sell", "shop", "both"] as const

export async function joinWaitlist(_prev: WaitlistResult | null, formData: FormData): Promise<WaitlistResult> {
  const name = String(formData.get("name") ?? "").trim()
  const whatsappNumber = String(formData.get("whatsappNumber") ?? "").trim()
  const intent = String(formData.get("intent") ?? "").trim()

  if (name.length < 2) {
    return { success: false, message: "Please enter your name." }
  }

  if (whatsappNumber.length < 5) {
    return { success: false, message: "Please enter your WhatsApp number so we can send your invite." }
  }

  if (!VALID_INTENTS.includes(intent as any)) {
    return { success: false, message: "Please select how you'd like to use the platform." }
  }

  try {
    await db.insert(waitlist).values({ name, whatsappNumber, intent })
    return { success: true, message: "You're on the list!" }
  } catch (error) {
    console.log("[v0] joinWaitlist error:", error)
    return { success: false, message: "Something went wrong. Please try again." }
  }
}
