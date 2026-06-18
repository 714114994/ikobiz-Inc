"use server"

import { db } from "@/lib/db"
import { waitlist } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

export type WaitlistResult = {
  success: boolean
  message: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function joinWaitlist(_prev: WaitlistResult | null, formData: FormData): Promise<WaitlistResult> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase()
  const phoneRaw = String(formData.get("phone") ?? "").trim()
  const phone = phoneRaw.length > 0 ? phoneRaw : null

  if (name.length < 2) {
    return { success: false, message: "Please enter your name." }
  }
  if (!isValidEmail(email)) {
    return { success: false, message: "Please enter a valid email address." }
  }

  try {
    const existing = await db.select({ id: waitlist.id }).from(waitlist).where(eq(waitlist.email, email)).limit(1)

    if (existing.length > 0) {
      return { success: true, message: "You're already on the list. Thank you for your support!" }
    }

    await db.insert(waitlist).values({ name, email, phone })
    return { success: true, message: "You're on the list!" }
  } catch (error) {
    console.log("[v0] joinWaitlist error:", error)
    return { success: false, message: "Something went wrong. Please try again." }
  }
}
