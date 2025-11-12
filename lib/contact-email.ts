import nodemailer from "nodemailer"

export type ContactMessage = {
  id: number
  timestamp: string
  name: string
  email: string
  subject: string
  message: string
}

const DEFAULT_CLINIC_EMAIL = "laxmidentalhospital0@gmail.com"

function toDigits(input: string) {
  return (input || "").replace(/\D/g, "")
}

function buildClinicWhatsappLink(contact: ContactMessage) {
  const clinicNumber = toDigits(process.env.CLINIC_WHATSAPP_NUMBER || "7794879535")
  const message = [
    "New contact form message:",
    `Name: ${contact.name}`,
    `Email: ${contact.email}`,
    `Subject: ${contact.subject}`,
    `Message: ${contact.message}`,
  ].join("\n")
  return `https://wa.me/${clinicNumber}?text=${encodeURIComponent(message)}`
}

function buildHtml(contact: ContactMessage, whatsappLink?: string) {
  return `
    <div style="font-family: Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.6; color:#0f172a">
      <h2 style="margin:0 0 12px 0; color:#065f46">New Contact Form Message</h2>
      <p style="margin:0 0 16px 0;">You have received a new message from your website:</p>
      <table style="border-collapse:collapse; width:100%">
        <tbody>
          <tr><td style="padding:6px 0; font-weight:600">Name</td><td>${contact.name}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Email</td><td>${contact.email}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Subject</td><td>${contact.subject}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600; vertical-align:top">Message</td><td style="padding:6px 0;">${contact.message.replace(/\n/g, '<br>')}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600">Submitted</td><td>${new Date(contact.timestamp).toLocaleString()}</td></tr>
        </tbody>
      </table>
      ${whatsappLink ? `<div style="margin-top:16px;"><a href="${whatsappLink}" style="display:inline-block; background:#10b981; color:#ffffff; text-decoration:none; padding:10px 14px; border-radius:10px">Open WhatsApp</a></div>` : ""}
    </div>
  `
}

function buildText(contact: ContactMessage, whatsappLink?: string) {
  return [
    "New Contact Form Message",
    "",
    `Name: ${contact.name}`,
    `Email: ${contact.email}`,
    `Subject: ${contact.subject}`,
    `Message: ${contact.message}`,
    `Submitted: ${new Date(contact.timestamp).toLocaleString()}`,
    whatsappLink ? `\nWhatsApp: ${whatsappLink}` : "",
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

export async function sendContactEmails(contact: ContactMessage, whatsappLink?: string) {
  const toEmail = process.env.CLINIC_TO_EMAIL || DEFAULT_CLINIC_EMAIL
  
  // Verify email address is set correctly
  console.log(`[Email] Sending contact form message to: ${toEmail}`)
  console.log(`[Email] Message from: ${contact.name} (${contact.email})`)
  console.log(`[Email] Subject: ${contact.subject}`)

  const fromEmail = process.env.CLINIC_FROM_EMAIL || process.env.GMAIL_USER || DEFAULT_CLINIC_EMAIL

  const subject = `New Contact Form: ${contact.subject} — ${contact.name}`
  const html = buildHtml(contact, whatsappLink)
  const text = buildText(contact, whatsappLink)

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

    console.log(`[Email] Contact form notification sent to ${toEmail}`)

    // Optional: confirmation to sender if their email exists
    if (contact.email && contact.email !== toEmail) {
      await transporter.sendMail({
        from: fromEmail,
        to: contact.email,
        subject: "We received your message",
        html: `
          <div style="font-family: Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.6; color:#0f172a">
            <h2 style="margin:0 0 12px 0; color:#065f46">Thanks, ${contact.name}!</h2>
            <p style="margin:0 0 12px 0;">We've received your message regarding "${contact.subject}".</p>
            <p style="margin:0 0 12px 0;">Our team will get back to you shortly. For quicker help, you can contact us on WhatsApp:</p>
            <div style="margin-top:8px;">
              <a href="https://wa.me/${toDigits(process.env.CLINIC_WHATSAPP_NUMBER || "7794879535")}" style="display:inline-block; background:#10b981; color:#ffffff; text-decoration:none; padding:10px 14px; border-radius:10px">Chat on WhatsApp</a>
            </div>
          </div>
        `,
        text: `Thanks, ${contact.name}! We received your message regarding "${contact.subject}". We'll get back to you shortly. WhatsApp: https://wa.me/${toDigits(process.env.CLINIC_WHATSAPP_NUMBER || "7794879535")}`,
      })

      console.log(`[Email] Confirmation sent to sender: ${contact.email}`)
    }

    return { sent: true }
  } catch (error) {
    console.error("[Email] Failed to send email:", error)
    throw error
  }
}

