import * as React from 'react';

interface ContactEmailTemplateProps {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
    name,
    email,
    company,
    phone,
    message,
}) => (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#FBB429', padding: '20px', textAlign: 'center' as const }}>
            <h1 style={{ color: '#ffffff', margin: 0, fontSize: '24px' }}>New Contact Form Submission</h1>
        </div>

        <div style={{ padding: '30px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ color: '#333', marginTop: 0 }}>Contact Details</h2>

            <table style={{ width: '100%', borderCollapse: 'collapse' as const }}>
                <tbody>
                    <tr>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold', width: '120px' }}>Name:</td>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{name}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>Email:</td>
                        <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
                            <a href={`mailto:${email}`} style={{ color: '#FBB429' }}>{email}</a>
                        </td>
                    </tr>
                    {company && (
                        <tr>
                            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>Company:</td>
                            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{company}</td>
                        </tr>
                    )}
                    {phone && (
                        <tr>
                            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>Phone:</td>
                            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
                                <a href={`tel:${phone}`} style={{ color: '#FBB429' }}>{phone}</a>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <h2 style={{ color: '#333', marginTop: '30px' }}>Message</h2>
            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                <p style={{ margin: 0, whiteSpace: 'pre-wrap' as const, lineHeight: '1.6' }}>{message}</p>
            </div>
        </div>

        <div style={{ backgroundColor: '#0a1929', padding: '20px', textAlign: 'center' as const }}>
            <p style={{ color: '#888', margin: 0, fontSize: '12px' }}>
                This email was sent from the BuildwellAI contact form.
            </p>
        </div>
    </div>
);

export default ContactEmailTemplate;
