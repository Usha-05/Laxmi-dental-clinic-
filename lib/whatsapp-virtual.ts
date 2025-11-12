import type { VirtualConsultation } from "./virtual-consultation"

const DEFAULT_CLINIC_WHATSAPP = "7794879535"

function toDigits(input: string) {
  return (input || "").replace(/\D/g, "")
}

function formatWhatsAppNumber(phone: string): string {
  const digits = toDigits(phone)
  // If it's already in international format, return as is
  if (digits.startsWith("91") && digits.length === 12) {
    return `whatsapp:+${digits}`
  }
  // If it's a 10-digit number, assume it's Indian and add country code
  if (digits.length === 10) {
    return `whatsapp:+91${digits}`
  }
  // Otherwise, try to format it
  return `whatsapp:+${digits}`
}

export function buildWhatsAppMessage(consultation: VirtualConsultation): string {
  const consultationTypeText = consultation.consultationType === "video" ? "Video Call" : "Phone Call"
  const serviceText = consultation.serviceName ? `\n🩺 *Service:* ${consultation.serviceName}` : ""
  return `🦷 *Virtual Consultation Request*

${serviceText}
👤 *Name:* ${consultation.name}
📧 *Email:* ${consultation.email}
📱 *Phone:* ${consultation.phone}
📞 *Consultation Type:* ${consultationTypeText}
📅 *Preferred Date:* ${consultation.preferredDate}
${consultation.preferredTime ? `⏰ *Preferred Time:* ${consultation.preferredTime}` : ""}
💭 *Concern:* ${consultation.concern}
📝 *Submitted:* ${new Date(consultation.timestamp).toLocaleString()}

Thank you for choosing Laxmi Face and Dental Hospital!`
}

export async function sendWhatsAppMessage(consultation: VirtualConsultation): Promise<{ success: boolean; error?: string; whatsappLink?: string }> {
  const clinicWhatsApp = process.env.CLINIC_WHATSAPP_NUMBER || DEFAULT_CLINIC_WHATSAPP
  const message = buildWhatsAppMessage(consultation)

  // Option 1: Use WhatsApp Cloud API (Meta's official API - FREE)
  const whatsappAccessToken = process.env.WHATSAPP_ACCESS_TOKEN
  const whatsappPhoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID

  if (whatsappAccessToken && whatsappPhoneNumberId) {
    try {
      // Format phone number (remove + and spaces, ensure country code)
      let phoneNumber = toDigits(clinicWhatsApp)
      if (!phoneNumber.startsWith("91") && phoneNumber.length === 10) {
        phoneNumber = `91${phoneNumber}` // Add India country code if missing
      }

      const apiUrl = `https://graph.facebook.com/v18.0/${whatsappPhoneNumberId}/messages`

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${whatsappAccessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: phoneNumber,
          type: "text",
          text: {
            body: message,
          },
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error("[WhatsApp] WhatsApp Cloud API error:", errorData)
        // Fall through to next option
      } else {
        const data = await response.json()
        console.log("[WhatsApp] Message sent via WhatsApp Cloud API:", data.messages?.[0]?.id)
        return { success: true, whatsappLink: "" }
      }
    } catch (error) {
      console.error("[WhatsApp] WhatsApp Cloud API error:", error)
      // Fall through to next option
    }
  }

  // Option 2: Use Twilio WhatsApp API (if configured)
  const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID
  const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN
  const twilioFromNumber = process.env.TWILIO_WHATSAPP_FROM

  if (twilioAccountSid && twilioAuthToken && twilioFromNumber) {
    try {
      const toNumber = formatWhatsAppNumber(clinicWhatsApp)
      const response = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${Buffer.from(`${twilioAccountSid}:${twilioAuthToken}`).toString("base64")}`,
          },
          body: new URLSearchParams({
            From: twilioFromNumber,
            To: toNumber,
            Body: message,
          }),
        }
      )

      if (!response.ok) {
        const errorText = await response.text()
        console.error("[WhatsApp] Twilio error:", errorText)
        return { success: false, error: `Twilio error: ${errorText}` }
      }

      const data = await response.json()
      console.log("[WhatsApp] Message sent via Twilio:", data.sid)
      return { success: true, whatsappLink: "" }
    } catch (error) {
      console.error("[WhatsApp] Twilio error:", error)
      return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
    }
  }

  // Option 3: Use Custom WhatsApp Business API (if configured)
  const whatsappApiKey = process.env.WHATSAPP_API_KEY
  const whatsappApiUrl = process.env.WHATSAPP_API_URL

  if (whatsappApiKey && whatsappApiUrl) {
    try {
      const response = await fetch(whatsappApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${whatsappApiKey}`,
        },
        body: JSON.stringify({
          to: clinicWhatsApp,
          message: message,
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error("[WhatsApp] API error:", errorText)
        return { success: false, error: `API error: ${errorText}` }
      }

      console.log("[WhatsApp] Message sent via API")
      return { success: true, whatsappLink: "" }
    } catch (error) {
      console.error("[WhatsApp] API error:", error)
      return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
    }
  }

  // Option 4: Fallback - Generate WhatsApp link (included in email)
  // This creates a clickable link that can be sent via email if APIs aren't configured
  const whatsappLink = `https://wa.me/${toDigits(clinicWhatsApp)}?text=${encodeURIComponent(message)}`
  console.log("[WhatsApp] WhatsApp link generated:", whatsappLink)
  console.log("[WhatsApp] Message:", message)
  console.log(
    "[WhatsApp] The WhatsApp link will be included in the email notification. You can click it to open WhatsApp with the message pre-filled."
  )

  // Return success with the link (it will be included in email)
  return { success: true, whatsappLink }
}


