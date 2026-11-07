import emailjs from '@emailjs/browser';

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
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
  process.env.VITE_EMAILJS_SERVICE_ID ||
  'service_efm4e8g';
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
  process.env.VITE_EMAILJS_PUBLIC_KEY ||
  '5PMJMdsT_OQKOjo06';
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
  process.env.VITE_EMAILJS_TEMPLATE_ID ||
  'template_v9m6bdv';

// Pre-initialize client SDK in browser context
if (typeof window !== 'undefined' && EMAILJS_PUBLIC_KEY) {
  try {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  } catch {
    // Non-fatal if already initialized
  }
}

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

  // Client-side EmailJS dispatch using @emailjs/browser
  try {
    const templateParams = {
      from_name: name.trim(),
      name: name.trim(),
      reply_to: email.trim(),
      from_email: email.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      to_email: 'harsh4687.techie@gmail.com',
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: EMAILJS_PUBLIC_KEY,
      }
    );

    if (response.status === 200 || response.text === 'OK') {
      return {
        success: true,
        message: 'Thank you! Your message has been sent successfully to harsh4687.techie@gmail.com.',
      };
    } else {
      return {
        success: false,
        message: `Email delivery issue (${response.status}: ${response.text || 'Dispatch rejected'}). Please send directly via your email client.`,
        fallbackMailto,
      };
    }
  } catch (err: unknown) {
    // Catch EmailJSResponseStatus or generic errors
    let statusText = 'Dispatch failed';
    if (err && typeof err === 'object') {
      if ('text' in err && typeof (err as { text?: unknown }).text === 'string') {
        statusText = (err as { text: string }).text;
      } else if ('message' in err && typeof (err as { message?: unknown }).message === 'string') {
        statusText = (err as { message: string }).message;
      }
    }

    return {
      success: false,
      message: `EmailJS notice: ${statusText}. Click below to send directly to harsh4687.techie@gmail.com.`,
      fallbackMailto,
    };
  }
}
