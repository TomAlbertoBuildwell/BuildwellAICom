import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function generateEmailHtml(name: string, email: string, company?: string, phone?: string, message?: string) {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0;">
    <div style="background-color: #FBB429; padding: 20px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
    </div>
    
    <div style="padding: 30px; background-color: #f9f9f9;">
        <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
            <tbody>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                        <a href="mailto:${email}" style="color: #FBB429;">${email}</a>
                    </td>
                </tr>
                ${company ? `
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${company}</td>
                </tr>
                ` : ''}
                ${phone ? `
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                        <a href="tel:${phone}" style="color: #FBB429;">${phone}</a>
                    </td>
                </tr>
                ` : ''}
            </tbody>
        </table>
        
        <h2 style="color: #333; margin-top: 30px;">Message</h2>
        <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #eee;">
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
    </div>
    
    <div style="background-color: #0a1929; padding: 20px; text-align: center;">
        <p style="color: #888; margin: 0; font-size: 12px;">
            This email was sent from the BuildwellAI contact form.
        </p>
    </div>
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
