# Email and WhatsApp Setup Instructions

## Quick Setup (Gmail - FREE)

To receive appointment notifications via email, set up Gmail SMTP:

### Step 1: Create a Gmail App Password

1. Go to your Google Account: https://myaccount.google.com
2. Enable 2-Step Verification if not already enabled
3. Go to: https://myaccount.google.com/apppasswords
4. Select "Mail" and "Other (Custom name)" 
5. Enter "Dental Clinic App" as the name
6. Click "Generate"
7. Copy the 16-character password (you'll use this in Step 2)

### Step 2: Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
# Gmail Configuration (FREE)
GMAIL_USER=laxmidentalhospital0@gmail.com
GMAIL_APP_PASSWORD= mgds ltbz ceka vazc

# Recipient Email (where you want to receive notifications)
CLINIC_TO_EMAIL=laxmidentalhospital0@gmail.com

# WhatsApp Number
CLINIC_WHATSAPP_NUMBER=7794879535
```

### Step 3: Restart Your Development Server

After adding the environment variables, restart your Next.js server:

```bash
npm run dev
```

## How It Works

When a user books an appointment:

1. **Email is sent** to `laxmidentalhospital0@gmail.com` with:
   - All appointment details (name, email, phone, date, time, service)
   - A clickable WhatsApp link that opens WhatsApp with the appointment details pre-filled

2. **WhatsApp notification**:
   - If you have Twilio or WhatsApp Business API configured, it sends automatically
   - Otherwise, the email includes a WhatsApp link you can click
   - The link opens WhatsApp with all appointment details pre-filled

## Alternative: Custom SMTP

If you prefer to use a different email provider:

```env
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
CLINIC_TO_EMAIL=laxmidentalhospital0@gmail.com
CLINIC_FROM_EMAIL=your-email@example.com
```

## Testing

After setup, test by booking an appointment. You should receive:
- An email notification with all appointment details
- A WhatsApp link in the email that you can click to open WhatsApp

## Troubleshooting

### Email not sending?
- Check that `GMAIL_USER` and `GMAIL_APP_PASSWORD` are correct
- Make sure you're using an App Password (not your regular Gmail password)
- Check your server logs for error messages

### WhatsApp link not working?
- The WhatsApp link opens WhatsApp Web/App with the message pre-filled
- You can click it from the email to send the message manually
- For automatic sending, you'll need to set up Twilio WhatsApp API




