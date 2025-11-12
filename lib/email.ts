import nodemailer from "nodemailer"

export type Appointment = {
  id: number
  timestamp: string
  name: string
  email: string
  phone: string
  date: string
  time: string
  service: string
}

const DEFAULT_CLINIC_WA = "7794879535"
const PRIMARY_CLINIC_EMAIL = "laxmidentalhospital0@gmail.com"
const LEGACY_CLINIC_EMAILS = new Set(["laxmidentalhospital0@gmail.com"])
const DEFAULT_CLINIC_EMAIL = PRIMARY_CLINIC_EMAIL

function toDigits(input: string) {
  return (input || "").replace(/\D/g, "")
}

function buildClinicWhatsappLinkToPatient(appointment: Appointment) {
  const digits = toDigits(appointment.phone)
  if (!digits) return ""
  const message = [
    "Hello",
    appointment.name ? appointment.name : "there",
    "— this is Laxmi Face and Dental Hospital. We received your appointment request for",
    `${appointment.service} on ${appointment.date} at ${appointment.time}.`
  ].join(" ")
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${digits}?text=${encoded}`
}

function buildClinicWhatsappLink(appointment: Appointment) {
  const clinicNumber = toDigits(process.env.CLINIC_WHATSAPP_NUMBER || DEFAULT_CLINIC_WA)
  const message = [
    "New appointment received:",
    `Name: ${appointment.name}`,
    `Service: ${appointment.service}`,
    `Preferred: ${appointment.date} ${appointment.time}`,
  ].join("\n")
  return `https://wa.me/${clinicNumber}?text=${encodeURIComponent(message)}`
}

function normalizeClinicEmail(email?: string | null) {
  const trimmed = email?.trim()
  if (!trimmed) return PRIMARY_CLINIC_EMAIL

  if (LEGACY_CLINIC_EMAILS.has(trimmed.toLowerCase())) {
    return PRIMARY_CLINIC_EMAIL
  }

  return trimmed
}

function buildHtml(appointment: Appointment) {
  const clinicWa = buildClinicWhatsappLink(appointment)
  const toPatientWa = buildClinicWhatsappLinkToPatient(appointment)
  return `
    <div style="font-family: Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.6; color:#0f172a">
      <h2 style="margin:0 0 12px 0; color:#065f46">New Appointment Request</h2>
      <p style="margin:0 0 16px 0;">You have received a new appointment booking:</p>
      <table style="border-collapse:collapse; width:100%">
        <tbody>
          <tr><td style="padding:6px 0; font-weight:600">Name</td><td>${appointment.name}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Email</td><td>${appointment.email}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Phone</td><td>${appointment.phone}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Preferred Date</td><td>${appointment.date}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Preferred Time</td><td>${appointment.time}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Service</td><td>${appointment.service}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Submitted</td><td>${new Date(appointment.timestamp).toLocaleString()}</td></tr>
        </tbody>
      </table>
      <div style="margin-top:16px; display:flex; gap:10px; flex-wrap:wrap">
        <a href="${clinicWa}" style="display:inline-block; background:#10b981; color:#ffffff; text-decoration:none; padding:10px 14px; border-radius:10px">Open WhatsApp (Clinic)</a>
        ${toPatientWa ? `<a href="${toPatientWa}" style="display:inline-block; background:#059669; color:#ffffff; text-decoration:none; padding:10px 14px; border-radius:10px">WhatsApp Patient</a>` : ""}
      </div>
    </div>
  `
}

function buildText(appointment: Appointment) {
  const clinicWa = buildClinicWhatsappLink(appointment)
  const toPatientWa = buildClinicWhatsappLinkToPatient(appointment)
  return [
    "New Appointment Request",
    "",
    `Name: ${appointment.name}`,
    `Email: ${appointment.email}`,
    `Phone: ${appointment.phone}`,
    `Preferred Date: ${appointment.date}`,
    `Preferred Time: ${appointment.time}`,
    `Service: ${appointment.service}`,
    `Submitted: ${new Date(appointment.timestamp).toLocaleString()}`,
    "",
    `WhatsApp (Clinic): ${clinicWa}`,
    toPatientWa ? `WhatsApp Patient: ${toPatientWa}` : "",
  ].join("\n")
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

export async function sendAppointmentEmails(appointment: Appointment) {
  const toEmail = normalizeClinicEmail(process.env.CLINIC_TO_EMAIL)
  const fromEmail =
    process.env.CLINIC_FROM_EMAIL ||
    process.env.GMAIL_USER ||
    DEFAULT_CLINIC_EMAIL

  const subject = `New Appointment: ${appointment.name} — ${appointment.date} ${appointment.time}`
  const html = buildHtml(appointment)
  const text = buildText(appointment)

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

    console.log(`[Email] Appointment notification sent to ${toEmail}`)

    // Optional: confirmation to patient if their email exists
    if (appointment.email && appointment.email !== toEmail) {
      await transporter.sendMail({
        from: fromEmail,
        to: appointment.email,
        subject: "We received your appointment request",
        html: `
          <div style="font-family: Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.6; color:#0f172a">
            <h2 style="margin:0 0 12px 0; color:#065f46">Thanks, ${appointment.name}!</h2>
            <p style="margin:0 0 12px 0;">We've received your appointment request for ${appointment.service}.</p>
            <p style="margin:0 0 6px 0;">Preferred date & time: <strong>${appointment.date} at ${appointment.time}</strong></p>
            <p style="margin:0 0 12px 0;">Our team will confirm shortly. For quicker help, you can contact us on WhatsApp:</p>
            <div style="margin-top:8px;">
              <a href="https://wa.me/${toDigits(process.env.CLINIC_WHATSAPP_NUMBER || DEFAULT_CLINIC_WA)}" style="display:inline-block; background:#10b981; color:#ffffff; text-decoration:none; padding:10px 14px; border-radius:10px">Chat on WhatsApp</a>
            </div>
          </div>
        `,
        text: `Thanks, ${appointment.name}! We received your request for ${appointment.service} on ${appointment.date} at ${appointment.time}. We'll confirm shortly. WhatsApp: https://wa.me/${toDigits(process.env.CLINIC_WHATSAPP_NUMBER || DEFAULT_CLINIC_WA)}`,
      })

      console.log(`[Email] Confirmation sent to patient: ${appointment.email}`)
    }

    return { sent: true }
  } catch (error) {
    console.error("[Email] Failed to send email:", error)
    throw error
  }
}


