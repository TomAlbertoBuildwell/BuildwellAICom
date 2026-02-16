# Contact Form & Resend Email Integration

This document describes the contact form implementation and its integration with the Resend email service.

## Overview

The contact form allows users to submit support requests directly from the `/contact` page. Submissions are sent to the support team via the Resend API using HTML email templates.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    /contact (page.tsx)                          │
│                         │                                       │
│                         ▼                                       │
│                 POST /api/contact                               │
│                         │                                       │
│                         ▼                                       │
│           ┌─────────────────────────────────────────┐           │
│           │        Resend API                       │           │
│           │   (HTML Email Template)                 │           │
│           └─────────────────────────────────────────┘           │
│                         │                                       │
│                         ▼                                       │
│              support@buildwellai.com                            │
└─────────────────────────────────────────────────────────────────┘
```

## Files

| File | Purpose |
|------|---------|
| `app/contact/page.tsx` | Contact form UI with validation and submission handling |
| `app/api/contact/route.ts` | API endpoint that processes form data and sends email via Resend |

## Environment Variables

```env
# Required for Resend
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Optional: Override recipient email (defaults to support@buildwellai.com)
CONTACT_EMAIL=support@buildwellai.com
```

## Form Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `name` | ✅ | string | User's full name |
| `email` | ✅ | email | User's email address (used for reply-to) |
| `company` | ✅ | string | Company name |
| `phone` | ❌ | tel | Phone number |
| `message` | ✅ | string | Support request content |

## API Endpoint

### POST `/api/contact`

**Request Body:**
```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "company": "ACME Construction",
  "phone": "+44 20 1234 5678",
  "message": "I need help with..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "resend-message-id"
  }
}
```

**Error Response (400/500):**
```json
{
  "error": "Missing required fields"
}
```

## Email Template

The API uses an inline HTML template that renders:
- BuildwellAI branded header with gold (#FBB429) background
- Contact details table (name, email, company, phone)
- Full message content with preserved formatting
- Dark footer with branding

## Resend Setup

1. Create account at [resend.com](https://resend.com)
2. Verify your domain (`buildwellai.com`)
3. Generate API key
4. Add `RESEND_API_KEY` to `.env.local`

> [!IMPORTANT]
> The `from` address must use a verified domain. Currently: `support@buildwellai.com`

## Form Features

- **Client-side validation**: Required fields enforced before submission
- **Loading state**: Button shows spinner during API call
- **Error handling**: Displays error message if submission fails
- **Success feedback**: Shows confirmation message for 5 seconds
- **Form reset**: Clears all fields after successful submission
