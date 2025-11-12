import nodemailer from "nodemailer"

export type SmileConsultation = {
  id: number
  timestamp: string
  name: string
  email: string
  phone: string
  city: string
  concern: string
  alignmentIssue: string
  hadBraces: string
  ageGroup: string
  budget: string
  photo?: string // base64 image data
}

const DEFAULT_CLINIC_WA = "7794879535"
const DEFAULT_CLINIC_EMAIL = "laxmidentalhospital0@gmail.com"

function toDigits(input: string) {
  return (input || "").replace(/\D/g, "")
}

function buildClinicWhatsappLink(consultation: SmileConsultation) {
  const clinicNumber = toDigits(process.env.CLINIC_WHATSAPP_NUMBER || DEFAULT_CLINIC_WA)
  const message = [
    "Smile View Simulator Consultation Request:",
    `Name: ${consultation.name}`,
    `Email: ${consultation.email}`,
    `Phone: ${consultation.phone}`,
    `City: ${consultation.city}`,
    "",
    "Invisalign Quiz Results:",
    `Alignment Issue: ${consultation.alignmentIssue}`,
    `Had Braces Before: ${consultation.hadBraces}`,
    `Age Group: ${consultation.ageGroup}`,
    `Budget: ${consultation.budget}`,
    "",
    `Concern: ${consultation.concern || "Not specified"}`,
  ].join("\n")
  return `https://wa.me/${clinicNumber}?text=${encodeURIComponent(message)}`
}

function buildHtml(consultation: SmileConsultation) {
  const clinicWa = buildClinicWhatsappLink(consultation)
  return `
    <div style="font-family: Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.6; color:#0f172a">
      <h2 style="margin:0 0 12px 0; color:#065f46">Smile View Simulator Consultation Request</h2>
      <p style="margin:0 0 16px 0;">You have received a new consultation request from the Smile View Simulator:</p>
      <table style="border-collapse:collapse; width:100%">
        <tbody>
          <tr><td style="padding:6px 0; font-weight:600">Name</td><td>${consultation.name}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Email</td><td>${consultation.email}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Phone</td><td>${consultation.phone}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">City</td><td>${consultation.city}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Concern</td><td>${consultation.concern || "Not specified"}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600" colspan="2"><strong>Invisalign Quiz Results:</strong></td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Alignment Issue</td><td>${consultation.alignmentIssue}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Had Braces Before</td><td>${consultation.hadBraces}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Age Group</td><td>${consultation.ageGroup}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Budget</td><td>${consultation.budget}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Submitted</td><td>${new Date(consultation.timestamp).toLocaleString()}</td></tr>
        </tbody>
      </table>
      ${consultation.photo ? `<div style="margin-top:16px;">
        <p style="font-weight:600; margin-bottom:8px;">Patient Photo:</p>
        <img src="${consultation.photo}" alt="Patient photo" style="max-width:100%; height:auto; border:1px solid #ddd; border-radius:8px; padding:4px;" />
        <p style="margin-top:8px; font-size:12px; color:#666;">(Photo is also attached as a file)</p>
      </div>` : ""}
      <div style="margin-top:16px; display:flex; gap:10px; flex-wrap:wrap">
        <a href="${clinicWa}" style="display:inline-block; background:#10b981; color:#ffffff; text-decoration:none; padding:10px 14px; border-radius:10px">Open WhatsApp (Clinic)</a>
      </div>
    </div>
  `
}

function buildText(consultation: SmileConsultation) {
  const clinicWa = buildClinicWhatsappLink(consultation)
  return [
    "Smile View Simulator Consultation Request",
    "",
    `Name: ${consultation.name}`,
    `Email: ${consultation.email}`,
    `Phone: ${consultation.phone}`,
    `City: ${consultation.city}`,
    `Concern: ${consultation.concern || "Not specified"}`,
    "",
    "Invisalign Quiz Results:",
    `Alignment Issue: ${consultation.alignmentIssue}`,
    `Had Braces Before: ${consultation.hadBraces}`,
    `Age Group: ${consultation.ageGroup}`,
    `Budget: ${consultation.budget}`,
    "",
    `Submitted: ${new Date(consultation.timestamp).toLocaleString()}`,
    consultation.photo ? "Patient photo is attached." : "",
    "",
    `WhatsApp (Clinic): ${clinicWa}`,
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

export async function sendSmileConsultationEmails(consultation: SmileConsultation) {
  const toEmail = process.env.CLINIC_TO_EMAIL || DEFAULT_CLINIC_EMAIL
  const fromEmail = process.env.CLINIC_FROM_EMAIL || process.env.GMAIL_USER || DEFAULT_CLINIC_EMAIL

  const subject = `Smile View Simulator Consultation: ${consultation.name}`
  const html = buildHtml(consultation)
  const text = buildText(consultation)

  // Prepare attachments if photo exists
  const attachments = consultation.photo
    ? [
        {
          filename: `patient-photo-${consultation.name.replace(/\s+/g, "-")}-${Date.now()}.jpg`,
          content: consultation.photo.includes(",") 
            ? consultation.photo.split(",")[1] // Remove data:image/jpeg;base64, prefix
            : consultation.photo, // Already base64 without prefix
          encoding: "base64",
        },
      ]
    : []

  try {
    const transporter = await createTransporter()

    // Send to clinic
    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject,
      html,
      text,
      attachments,
    })

    console.log(`[Email] Smile consultation notification sent to ${toEmail}`)

    // Optional: confirmation to patient if their email exists
    if (consultation.email && consultation.email !== toEmail) {
      await transporter.sendMail({
        from: fromEmail,
        to: consultation.email,
        subject: "We received your Smile View Simulator consultation request",
        html: `
          <div style="font-family: Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.6; color:#0f172a">
            <h2 style="margin:0 0 12px 0; color:#065f46">Thanks, ${consultation.name}!</h2>
            <p style="margin:0 0 12px 0;">We've received your consultation request from the Smile View Simulator.</p>
            <p style="margin:0 0 12px 0;">Our team will review your Invisalign quiz results and contact you shortly to discuss your smile goals.</p>
            <p style="margin:0 0 12px 0;">For quicker help, you can contact us on WhatsApp:</p>
            <div style="margin-top:8px;">
              <a href="https://wa.me/${toDigits(process.env.CLINIC_WHATSAPP_NUMBER || DEFAULT_CLINIC_WA)}" style="display:inline-block; background:#10b981; color:#ffffff; text-decoration:none; padding:10px 14px; border-radius:10px">Chat on WhatsApp</a>
            </div>
          </div>
        `,
        text: `Thanks, ${consultation.name}! We received your Smile View Simulator consultation request. Our team will review your Invisalign quiz results and contact you shortly. WhatsApp: https://wa.me/${toDigits(process.env.CLINIC_WHATSAPP_NUMBER || DEFAULT_CLINIC_WA)}`,
      })

      console.log(`[Email] Confirmation sent to patient: ${consultation.email}`)
    }

    return { sent: true }
  } catch (error) {
    console.error("[Email] Failed to send email:", error)
    throw error
  }
}

