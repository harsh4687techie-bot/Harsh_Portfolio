export interface EmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  fallbackMailto?: string;
}

const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';

export async function sendContactEmail(payload: EmailPayload): Promise<EmailResponse> {
  const { name, email, subject, message, honeypot } = payload;

  // Anti-spam honeypot defense
  if (honeypot && honeypot.trim().length > 0) {
    // Silently return success to bot without executing dispatch
    return {
      success: true,
      message: 'Your inquiry has been received.',
    };
  }

  // Pre-formatted mailto fallback URL
  const mailtoBody = `Sender Name: ${name.trim()}
Sender Email: ${email.trim()}
Subject: ${subject.trim()}

Message:
${message.trim()}

---
Sent via Harshvardhan Shinde Developer Portfolio.`;

  const fallbackMailto = `mailto:harsh4687.techie@gmail.com?subject=${encodeURIComponent(
    `[Portfolio Inquiry] ${subject.trim()}`
  )}&body=${encodeURIComponent(mailtoBody)}`;

  // If EmailJS template or credentials are not yet configured
  if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_TEMPLATE_ID) {
    return {
      success: false,
      message:
        'EmailJS service is awaiting Template ID configuration. Please click below to send directly to harsh4687.techie@gmail.com.',
      fallbackMailto,
    };
  }

  // Direct client-side EmailJS REST API dispatch
  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
          from_name: name.trim(),
          reply_to: email.trim(),
          from_email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
          to_email: 'harsh4687.techie@gmail.com',
        },
      }),
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Thank you! Your message has been sent successfully to harsh4687.techie@gmail.com.',
      };
    } else {
      const errText = await response.text();
      return {
        success: false,
        message: `Email delivery issue (${response.status}: ${errText.slice(0, 100) || 'Dispatch rejected'}). Please send directly via your email client.`,
        fallbackMailto,
      };
    }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Network error';
    return {
      success: false,
      message: `Network error (${errorMsg}). You can send directly via your email client.`,
      fallbackMailto,
    };
  }
}
