# WhatsApp Automatic Sending Setup

To automatically send WhatsApp messages when appointments are booked, you need to set up WhatsApp Cloud API (Meta's official API - **FREE**).

## Quick Setup - WhatsApp Cloud API (Recommended - FREE)

### Step 1: Create a Meta Developer Account

1. Go to https://developers.facebook.com/
2. Sign in with your Facebook account
3. Click "My Apps" → "Create App"
4. Select "Business" as the app type
5. Fill in your app details and create the app

### Step 2: Add WhatsApp Product

1. In your app dashboard, go to "Add Products"
2. Find "WhatsApp" and click "Set Up"
3. Follow the setup wizard

### Step 3: Get Your Access Token

1. Go to WhatsApp → "API Setup" in your app dashboard
2. Copy your **Temporary Access Token** (for testing)
3. For production, you'll need to generate a permanent token

### Step 4: Get Your Phone Number ID

1. In the same "API Setup" page, you'll see your **Phone Number ID**
2. Copy this ID

### Step 5: Add to Environment Variables

Add these to your `.env.local` file:

```env
# WhatsApp Cloud API Configuration (FREE)
WHATSAPP_ACCESS_TOKEN=your_access_token_here
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id_here
CLINIC_WHATSAPP_NUMBER=7794879535
```

### Step 6: Test Phone Number (Important!)

For testing, you need to add your phone number to the test recipients list:

1. Go to WhatsApp → "API Setup" in Meta Developer Console
2. Scroll to "Step 2: Send a message to a test number"
3. Click "Manage phone number list"
4. Add your phone number (e.g., +917794879535)
5. You'll receive a code via WhatsApp - enter it to verify

**Note:** You can only send messages to verified test numbers during development. For production, you need to complete business verification.

## Alternative Options

### Option 2: Twilio WhatsApp API (Paid)

If you prefer Twilio:

```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
CLINIC_WHATSAPP_NUMBER=7794879535
```

### Option 3: Custom WhatsApp API

If you have your own WhatsApp Business API:

```env
WHATSAPP_API_KEY=your_api_key
WHATSAPP_API_URL=https://your-api-endpoint.com/send
CLINIC_WHATSAPP_NUMBER=7794879535
```

## How It Works

When a user books an appointment:

1. **Email is sent** to `laxmidentalhospital0@gmail.com` ✅
2. **WhatsApp message is sent** to `7794879535` automatically ✅
3. Both include all appointment details (name, email, phone, date, time, service)

## Troubleshooting

### WhatsApp messages not sending?

1. **Check environment variables** - Make sure `WHATSAPP_ACCESS_TOKEN` and `WHATSAPP_PHONE_NUMBER_ID` are set
2. **Verify phone number** - Ensure your phone number is added to test recipients list
3. **Check server logs** - Look for WhatsApp API errors in the console
4. **Access token expired** - Temporary tokens expire in 24 hours. Generate a new one or use a permanent token

### Getting "Recipient phone number not in allowed list" error?

- You need to add your phone number to the test recipients in Meta Developer Console
- Format: +91 followed by your 10-digit number (e.g., +917794879535)

## Testing

After setup:

1. Book a test appointment through your website
2. Check your WhatsApp (7794879535) for the message
3. Check your email (laxmidentalhospital0@gmail.com) for the email notification

Both should arrive automatically!




