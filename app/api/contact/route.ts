import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

import he from 'he';

const resend = new Resend(process.env.RESEND_API_KEY);

function generateEmailHtml(name: string, email: string, company?: string, phone?: string, message?: string) {
    const firstName = name?.split(' ')[0] || 'there';

    // Sanitize user inputs to prevent HTML injection
    const safeName = he.encode(name || '');
    const safeEmail = he.encode(email || '');
    const safeCompany = company ? he.encode(company) : undefined;
    const safePhone = phone ? he.encode(phone) : undefined;
    const safeMessage = message ? he.encode(message) : '';
    const safeFirstName = he.encode(firstName);

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;700&family=Inter:wght@400;600&family=Courier+Prime&display=swap');
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Inter, Helvetica, Arial, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    
                    <!-- HEADER -->
                    <tr>
                        <td style="background-color: #0a1929; padding: 30px 40px; text-align: center;">
                            <img src="https://buildwellai.com/logo.png" alt="BuildwellAI" style="max-height: 40px; display: inline-block;" />
                        </td>
                    </tr>

                    <!-- HERO SECTION -->
                    <tr>
                        <td style="padding: 40px 40px 20px 40px; text-align: center;">
                            <h1 style="font-family: 'Big Shoulders Display', Impact, 'Arial Narrow', sans-serif; font-size: 38px; font-weight: 400; text-transform: uppercase; color: #0a1929; margin: 0 0 8px 0; letter-spacing: 1px;">
                                NEW <span style="color: #ff8a00;">MESSAGE</span>
                            </h1>
                            <p style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 16px; color: #607d8b; line-height: 1.6; margin: 12px 0 0 0;">
                                You've received a new contact form submission from <strong style="color: #0a1929;">${safeName}</strong>.
                            </p>
                        </td>
                    </tr>

                    <!-- CONTACT DETAILS CARD -->
                    <tr>
                        <td style="padding: 0 40px 20px 40px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-left: 4px solid #FBB429; border-radius: 0 6px 6px 0;">
                                <tr>
                                    <td style="padding: 20px 24px;">
                                        <p style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #0a1929; margin: 0 0 16px 0;">
                                            CONTACT DETAILS:
                                        </p>
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td style="padding: 4px 0; font-family: Inter, Helvetica, Arial, sans-serif; font-size: 13px; color: #607d8b; width: 110px;">Name</td>
                                                <td style="padding: 4px 0; font-family: Inter, Helvetica, Arial, sans-serif; font-size: 13px; color: #0a1929; font-weight: 600;">${safeName}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 4px 0; font-family: Inter, Helvetica, Arial, sans-serif; font-size: 13px; color: #607d8b;">Email</td>
                                                <td style="padding: 4px 0; font-family: Inter, Helvetica, Arial, sans-serif; font-size: 13px; color: #0a1929; font-weight: 600;">
                                                    <a href="mailto:${safeEmail}" style="color: #FBB429; text-decoration: none;">${safeEmail}</a>
                                                </td>
                                            </tr>
                                            ${safeCompany ? `<tr>
                                                <td style="padding: 4px 0; font-family: Inter, Helvetica, Arial, sans-serif; font-size: 13px; color: #607d8b;">Company</td>
                                                <td style="padding: 4px 0; font-family: Inter, Helvetica, Arial, sans-serif; font-size: 13px; color: #0a1929; font-weight: 600;">${safeCompany}</td>
                                            </tr>` : ''}
                                            ${safePhone ? `<tr>
                                                <td style="padding: 4px 0; font-family: Inter, Helvetica, Arial, sans-serif; font-size: 13px; color: #607d8b;">Phone</td>
                                                <td style="padding: 4px 0; font-family: Inter, Helvetica, Arial, sans-serif; font-size: 13px; color: #0a1929; font-weight: 600;">
                                                    <a href="tel:${safePhone}" style="color: #FBB429; text-decoration: none;">${safePhone}</a>
                                                </td>
                                            </tr>` : ''}
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- MESSAGE CARD -->
                    <tr>
                        <td style="padding: 0 40px 20px 40px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-left: 4px solid #2196f3; border-radius: 0 6px 6px 0;">
                                <tr>
                                    <td style="padding: 20px 24px;">
                                        <p style="font-family: 'Courier Prime', 'Courier New', monospace; font-size: 14px; font-weight: 700; color: #0a1929; margin: 0 0 12px 0;">
                                            MESSAGE:
                                        </p>
                                        <p style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 14px; color: #607d8b; line-height: 1.7; margin: 0; white-space: pre-wrap;">${safeMessage}</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- CTA -->
                    <tr>
                        <td style="padding: 10px 40px 40px 40px; text-align: center;">
                            <a href="mailto:${safeEmail}" style="display: inline-block; background: linear-gradient(135deg, #FBB429, #F87866); background-color: #ff8a00; color: #ffffff; text-decoration: none; font-family: Inter, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; padding: 14px 40px; border-radius: 5px; width: 260px; text-align: center; box-shadow: 0 4px 6px rgba(255, 138, 0, 0.2);">
                                REPLY TO ${safeFirstName.toUpperCase()}
                            </a>
                        </td>
                    </tr>

                    <!-- FOOTER -->
                    <tr>
                        <td style="background-color: #0a1929; padding: 30px 40px; text-align: center;">
                            <p style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 700; color: #ffffff; margin: 0 0 4px 0;">BuildwellAI</p>
                            <p style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 12px; color: #607d8b; margin: 0 0 12px 0;">AI-powered solutions for UK construction.</p>
                            <p style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 11px; color: #607d8b; margin: 0;">&copy; 2026 BuildwellAI. All rights reserved.</p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `;
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, company, phone, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields (name, email, message)' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        const recipientEmail = process.env.CONTACT_EMAIL || 'support@buildwellai.com';

        const { data, error } = await resend.emails.send({
            from: 'BuildwellAI Contact Form <support@buildwellai.com>',
            to: [recipientEmail],
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: generateEmailHtml(name, email, company, phone, message),
        });

        if (error) {
            console.error('Resend API error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
