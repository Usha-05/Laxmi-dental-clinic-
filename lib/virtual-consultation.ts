import nodemailer from "nodemailer"

export type VirtualConsultation = {
  id: number
  timestamp: string
  name: string
  email: string
  phone: string
  preferredDate: string
  preferredTime: string
  concern: string
  consultationType: "video" | "call"
  serviceName?: string // Optional service name from consultation modal
}

const DEFAULT_CLINIC_WA = "7794879535"
const DEFAULT_CLINIC_EMAIL = "laxmidentalhospital0@gmail.com"

function toDigits(input: string) {
  return (input || "").replace(/\D/g, "")
}

function buildClinicWhatsappLink(consultation: VirtualConsultation) {
  const clinicNumber = toDigits(process.env.CLINIC_WHATSAPP_NUMBER || DEFAULT_CLINIC_WA)
  const consultationTypeText = consultation.consultationType === "video" ? "Video Call" : "Phone Call"
  const serviceText = consultation.serviceName ? `\nService: ${consultation.serviceName}` : ""
  const message = [
    "Virtual Consultation Request:",
    serviceText,
    `Name: ${consultation.name}`,
    `Email: ${consultation.email}`,
    `Phone: ${consultation.phone}`,
    `Consultation Type: ${consultationTypeText}`,
    `Preferred Date: ${consultation.preferredDate}`,
    consultation.preferredTime ? `Preferred Time: ${consultation.preferredTime}` : "",
    `Concern: ${consultation.concern}`,
  ]
    .filter(Boolean)
    .join("\n")
  return `https://wa.me/${clinicNumber}?text=${encodeURIComponent(message)}`
}

function buildHtml(consultation: VirtualConsultation) {
  const clinicWa = buildClinicWhatsappLink(consultation)
  const consultationTypeText = consultation.consultationType === "video" ? "Video Call" : "Phone Call"
  return `
    <div style="font-family: Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.6; color:#0f172a">
      <h2 style="margin:0 0 12px 0; color:#065f46">Virtual Consultation Request</h2>
      <p style="margin:0 0 16px 0;">You have received a new virtual consultation request:</p>
      <table style="border-collapse:collapse; width:100%">
        <tbody>
          ${consultation.serviceName ? `<tr><td style="padding:6px 0; font-weight:600">Service</td><td>${consultation.serviceName}</td></tr>` : ""}
          <tr><td style="padding:6px 0; font-weight:600">Name</td><td>${consultation.name}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Email</td><td>${consultation.email}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Phone</td><td>${consultation.phone}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Consultation Type</td><td>${consultationTypeText}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Preferred Date</td><td>${consultation.preferredDate}</td></tr>
          ${consultation.preferredTime ? `<tr><td style="padding:6px 0; font-weight:600">Preferred Time</td><td>${consultation.preferredTime}</td></tr>` : ""}
          <tr><td style="padding:6px 0; font-weight:600">Concern</td><td>${consultation.concern}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Submitted</td><td>${new Date(consultation.timestamp).toLocaleString()}</td></tr>
        </tbody>
      </table>
      <div style="margin-top:16px; display:flex; gap:10px; flex-wrap:wrap">
        <a href="${clinicWa}" style="display:inline-block; background:#10b981; color:#ffffff; text-decoration:none; padding:10px 14px; border-radius:10px">Open WhatsApp (Clinic)</a>
      </div>
    </div>
  `
}

function buildText(consultation: VirtualConsultation) {
  const clinicWa = buildClinicWhatsappLink(consultation)
  const consultationTypeText = consultation.consultationType === "video" ? "Video Call" : "Phone Call"
  return [
    "Virtual Consultation Request",
    "",
    consultation.serviceName ? `Service: ${consultation.serviceName}` : "",
    `Name: ${consultation.name}`,
    `Email: ${consultation.email}`,
    `Phone: ${consultation.phone}`,
    `Consultation Type: ${consultationTypeText}`,
    `Preferred Date: ${consultation.preferredDate}`,
    consultation.preferredTime ? `Preferred Time: ${consultation.preferredTime}` : "",
    `Concern: ${consultation.concern}`,
    "",
    `Submitted: ${new Date(consultation.timestamp).toLocaleString()}`,
    "",
    `WhatsApp (Clinic): ${clinicWa}`,
  ]
    .filter(Boolean)
    .join("\n")
}

async function createTransporter() {
  // Option 1: Gmail SMTP (Free, recommended)
  const gmailUser = process.env.GMAIL_USER
  const gmailPassword = process.env.GMAIL_APP_PASSWORD

  if (gmailUser && gmailPassword) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    })
  }

  // Option 2: Custom SMTP
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = process.env.SMTP_PORT
  const smtpUser = process.env.SMTP_USER
  const smtpPassword = process.env.SMTP_PASSWORD

  if (smtpHost && smtpPort && smtpUser && smtpPassword) {
    return nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: smtpPort === "465",
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    })
  }

  // Option 3: Resend API (fallback)
  const resendApiKey = process.env.RESEND_API_KEY
  if (resendApiKey) {
    return nodemailer.createTransport({
      service: "resend",
      host: "smtp.resend.com",
      port: 465,
      secure: true,
      auth: {
        user: "resend",
        pass: resendApiKey,
      },
    })
  }

  throw new Error(
    "Email not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD, or SMTP settings, or RESEND_API_KEY"
  )
}

export async function sendVirtualConsultationEmails(consultation: VirtualConsultation) {
  const toEmail = process.env.CLINIC_TO_EMAIL || DEFAULT_CLINIC_EMAIL
  const fromEmail = process.env.CLINIC_FROM_EMAIL || process.env.GMAIL_USER || DEFAULT_CLINIC_EMAIL

  const consultationTypeText = consultation.consultationType === "video" ? "Video Call" : "Phone Call"
  const subject = `Virtual Consultation Request: ${consultation.name} — ${consultationTypeText}`
  const html = buildHtml(consultation)
  const text = buildText(consultation)

  try {
    const transporter = await createTransporter()

    // Send to clinic
    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject,
      html,
      text,
    })

    console.log(`[Email] Virtual consultation notification sent to ${toEmail}`)

    // Optional: confirmation to patient if their email exists
    if (consultation.email && consultation.email !== toEmail) {
      await transporter.sendMail({
        from: fromEmail,
        to: consultation.email,
        subject: "We received your virtual consultation request",
        html: `
          <div style="font-family: Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.6; color:#0f172a">
            <h2 style="margin:0 0 12px 0; color:#065f46">Thanks, ${consultation.name}!</h2>
            <p style="margin:0 0 12px 0;">We've received your virtual consultation request for ${consultationTypeText}.</p>
            <p style="margin:0 0 6px 0;">Preferred date & time: <strong>${consultation.preferredDate}${consultation.preferredTime ? ` at ${consultation.preferredTime}` : ""}</strong></p>
            <p style="margin:0 0 12px 0;">Our team will confirm shortly. For quicker help, you can contact us on WhatsApp:</p>
            <div style="margin-top:8px;">
              <a href="https://wa.me/${toDigits(process.env.CLINIC_WHATSAPP_NUMBER || DEFAULT_CLINIC_WA)}" style="display:inline-block; background:#10b981; color:#ffffff; text-decoration:none; padding:10px 14px; border-radius:10px">Chat on WhatsApp</a>
            </div>
          </div>
        `,
        text: `Thanks, ${consultation.name}! We received your virtual consultation request for ${consultationTypeText} on ${consultation.preferredDate}${consultation.preferredTime ? ` at ${consultation.preferredTime}` : ""}. We'll confirm shortly. WhatsApp: https://wa.me/${toDigits(process.env.CLINIC_WHATSAPP_NUMBER || DEFAULT_CLINIC_WA)}`,
      })

      console.log(`[Email] Confirmation sent to patient: ${consultation.email}`)
    }

    return { sent: true }
  } catch (error) {
    console.error("[Email] Failed to send email:", error)
    throw error
  }
}


