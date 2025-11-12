import type { NextRequest } from "next/server"
import { sendSmileConsultationEmails } from "@/lib/smile-consultation"
import { sendWhatsAppMessage } from "@/lib/whatsapp-smile"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// In-memory store for consultations (in production, use a database)
const consultationsStore: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.name || !body.email || !body.phone || !body.city) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    const newConsultation = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...body,
    }

    consultationsStore.push(newConsultation)

    console.log("[v0] Smile consultation saved:", newConsultation)
    console.log("[v0] Total consultations:", consultationsStore.length)

    // Send WhatsApp message (get link for email)
    let whatsappSent = false
    let whatsappLink = ""
    try {
      const whatsappResult = await sendWhatsAppMessage(newConsultation as any)
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

    // Send email (includes photo attachment and WhatsApp link if available)
    let emailSent = false
    try {
      await sendSmileConsultationEmails(newConsultation as any)
      emailSent = true
      console.log("[v0] Email sent successfully with photo attachment")
    } catch (emailErr) {
      console.error("[v0] Failed to send consultation email:", emailErr)
      // Don't fail the entire request if email fails
    }

    return Response.json(
      { success: true, consultation: newConsultation, emailSent, whatsappSent },
      { status: 201 }
    )
  } catch (error) {
    console.error("[v0] Smile consultation API error:", error)
    return Response.json({ error: "Failed to save consultation" }, { status: 500 })
  }
}

export async function GET() {
  try {
    return Response.json({ consultations: consultationsStore, count: consultationsStore.length })
  } catch (error) {
    console.error("[v0] Get consultations error:", error)
    return Response.json({ consultations: consultationsStore, count: consultationsStore.length })
  }
}



