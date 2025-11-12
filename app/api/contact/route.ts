import type { NextRequest } from "next/server"
import { sendContactEmails } from "@/lib/contact-email"
import { sendWhatsAppMessage } from "@/lib/whatsapp-contact"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// In-memory store for contact messages (in production, use a database)
const contactMessagesStore: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.name || !body.email || !body.subject || !body.message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    const newContact = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...body,
    }

    contactMessagesStore.push(newContact)

    console.log("[v0] Contact message saved:", newContact)
    console.log("[v0] Total contact messages:", contactMessagesStore.length)

    // Send WhatsApp message (get link for email)
    let whatsappSent = false
    let whatsappLink = ""
    try {
      const whatsappResult = await sendWhatsAppMessage(newContact as any)
      whatsappSent = whatsappResult.success
      whatsappLink = whatsappResult.whatsappLink || ""
      if (whatsappSent) {
        console.log("[v0] WhatsApp notification prepared")
        if (whatsappLink) {
          console.log("[v0] WhatsApp link:", whatsappLink)
        }
      } else {
        console.error("[v0] Failed to prepare WhatsApp notification:", whatsappResult.error)
      }
    } catch (whatsappErr) {
      console.error("[v0] Failed to prepare WhatsApp notification:", whatsappErr)
    }

    // Send email (includes WhatsApp link if available)
    let emailSent = false
    try {
      await sendContactEmails(newContact as any, whatsappLink)
      emailSent = true
      console.log("[v0] Email sent successfully")
    } catch (emailErr) {
      console.error("[v0] Failed to send contact email:", emailErr)
      // Don't fail the entire request if email fails
    }

    return Response.json(
      { success: true, contact: newContact, emailSent, whatsappSent, whatsappLink },
      { status: 201 }
    )
  } catch (error) {
    console.error("[v0] Contact API error:", error)
    return Response.json({ error: "Failed to send message" }, { status: 500 })
  }
}

export async function GET() {
  try {
    return Response.json({ messages: contactMessagesStore, count: contactMessagesStore.length })
  } catch (error) {
    console.error("[v0] Get contact messages error:", error)
    return Response.json({ messages: contactMessagesStore, count: contactMessagesStore.length })
  }
}

