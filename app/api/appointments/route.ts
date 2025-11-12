import type { NextRequest } from "next/server"
import { sendAppointmentEmails } from "@/lib/email"
import { sendWhatsAppMessage } from "@/lib/whatsapp"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// In-memory store for appointments (in production, use a database)
const appointmentsStore: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.name || !body.email || !body.phone || !body.date || !body.time || !body.service) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    const newAppointment = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...body,
    }

    appointmentsStore.push(newAppointment)

    console.log("[v0] Appointment saved:", newAppointment)
    console.log("[v0] Total appointments:", appointmentsStore.length)

    // Send WhatsApp message (get link for email)
    let whatsappSent = false
    let whatsappLink = ""
    try {
      const whatsappResult = await sendWhatsAppMessage(newAppointment as any)
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
      await sendAppointmentEmails(newAppointment as any)
      emailSent = true
      console.log("[v0] Email sent successfully")
    } catch (emailErr) {
      console.error("[v0] Failed to send appointment email:", emailErr)
      // Don't fail the entire request if email fails
    }

    return Response.json(
      { success: true, appointment: newAppointment, emailSent, whatsappSent, whatsappLink },
      { status: 201 }
    )
  } catch (error) {
    console.error("[v0] Appointment API error:", error)
    return Response.json({ error: "Failed to save appointment" }, { status: 500 })
  }
}

export async function GET() {
  try {
    return Response.json({ appointments: appointmentsStore, count: appointmentsStore.length })
  } catch (error) {
    console.error("[v0] Get appointments error:", error)
    return Response.json({ appointments: appointmentsStore, count: appointmentsStore.length })
  }
}
