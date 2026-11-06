'use client';

import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  AlertCircle,
  Loader2,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { sendContactEmail } from '@/lib/email/emailService';
import styles from './Contact.module.css';

interface ContactProps {
  onShowToast: (message: string) => void;
}

export default function Contact({ onShowToast }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [fallbackUrl, setFallbackUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      onShowToast(`Copied to clipboard: ${PERSONAL_INFO.email}`);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      onShowToast('Could not copy email automatically');
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    } else if (formData.name.trim().length > 80) {
      newErrors.name = 'Name cannot exceed 80 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim())
    ) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    } else if (formData.subject.trim().length > 120) {
      newErrors.subject = 'Subject cannot exceed 120 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please include your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    } else if (formData.message.trim().length > 3000) {
      newErrors.message = 'Message cannot exceed 3000 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmissionTime < 30000 && status === 'success') {
      onShowToast('Message already sent! Please wait a moment before sending another.');
      return;
    }

    if (!validate()) {
      onShowToast('Please review the form errors.');
      return;
    }

    setStatus('loading');
    setStatusMessage('Transmitting message via EmailJS...');

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setStatus('success');
        setStatusMessage(result.message);
        setLastSubmissionTime(now);
        onShowToast('Inquiry sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus('error');
        setStatusMessage(result.message);
        if (result.fallbackMailto) {
          setFallbackUrl(result.fallbackMailto);
        }
        onShowToast('Notice: Using direct email dispatch.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Unexpected dispatch error. Please click below to send via your email client.');
      setFallbackUrl(
        `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Inquiry'
        )}`
      );
    }
  };

  const primaryMailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    'Engineering Inquiry — Harshvardhan Shinde'
  )}`;

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        
        {/* Giant Editorial Heading (Frame 15s) */}
        <div className={styles.closingBanner}>
          <div className="section-label-editorial">/CONTACT</div>
          <h2 className={styles.closingHeadline}>
            HAVE A PROJECT IN MIND?
          </h2>
          <p className={styles.closingSubtext}>
            Let&apos;s build something meaningful together.
          </p>
        </div>

        {/* 2-Column Contact & Form Layout */}
        <div className={styles.contactLayout}>
          
          {/* Left: Direct Channels */}
          <div className={styles.infoCol}>
            <div className={styles.channelCard}>
              <span className={styles.cardOverline}>DIRECT INQUIRY</span>
              <h3 className={styles.cardTitle}>Get in Touch</h3>
              <p className={styles.cardDesc}>
                Open to backend engineering internships, high-impact software positions, and collaborative startup initiatives.
              </p>

              {/* Email Pill with Copy */}
              <div className={styles.emailPillWrap}>
                <a
                  href={primaryMailto}
                  className={styles.emailLink}
                  title="Compose in email client"
                >
                  <Mail size={16} className={styles.mailIcon} />
                  <span>{PERSONAL_INFO.email}</span>
                </a>

                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className={styles.copyBtn}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check size={16} className={styles.copiedIcon} />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              <div className={styles.directActionRow}>
                <a
                  href={primaryMailto}
                  className="btn-editorial-primary"
                  id="direct-mailto-btn"
                >
                  <span>Open Email Client</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* Verified Profiles */}
            <div className={styles.profilesBox}>
              <span className={styles.profilesLabel}>VERIFIED PROFILES</span>
              <div className={styles.profilesList}>
                <a
                  href={PERSONAL_INFO.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.profileRow}
                >
                  <div className={styles.profileMeta}>
                    <Github size={18} />
                    <span>GitHub (@harsh4687techie-bot)</span>
                  </div>
                  <ArrowUpRight size={14} className={styles.profileArrow} />
                </a>

                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.profileRow}
                >
                  <div className={styles.profileMeta}>
                    <Linkedin size={18} />
                    <span>LinkedIn (/in/harshvardhanshinde4687)</span>
                  </div>
                  <ArrowUpRight size={14} className={styles.profileArrow} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: EmailJS Form */}
          <div className={styles.formCol}>
            <form onSubmit={handleSubmit} className={styles.formCard} noValidate>
              
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Send a Message</h3>
                <span className={styles.formSubtitle}>Powered by EmailJS REST Service</span>
              </div>

              {/* Anti-spam Honeypot Field */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="form-honeypot">Leave empty</label>
                <input
                  id="form-honeypot"
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, honeypot: e.target.value }))
                  }
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Full Name */}
              <div className={styles.inputGroup}>
                <label htmlFor="contact-name" className={styles.label}>
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Maya Sharma"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, name: e.target.value }));
                    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                  }}
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  disabled={status === 'loading'}
                  maxLength={80}
                  required
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>

              {/* Email Address */}
              <div className={styles.inputGroup}>
                <label htmlFor="contact-email" className={styles.label}>
                  Email Address <span className={styles.required}>*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="e.g. maya@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, email: e.target.value }));
                    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                  }}
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  disabled={status === 'loading'}
                  maxLength={100}
                  required
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              {/* Subject */}
              <div className={styles.inputGroup}>
                <label htmlFor="contact-subject" className={styles.label}>
                  Subject <span className={styles.required}>*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="e.g. Backend Internship Inquiry / Project Collaboration"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, subject: e.target.value }));
                    if (errors.subject) setErrors((prev) => ({ ...prev, subject: '' }));
                  }}
                  className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
                  disabled={status === 'loading'}
                  maxLength={120}
                  required
                />
                {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className={styles.inputGroup}>
                <label htmlFor="contact-message" className={styles.label}>
                  Message <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell me about your project, team, or opportunity..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, message: e.target.value }));
                    if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                  }}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  disabled={status === 'loading'}
                  maxLength={3000}
                  required
                />
                {errors.message && <span className={styles.errorText}>{errors.message}</span>}
              </div>

              {/* Feedback Status Alert */}
              {statusMessage && (
                <div
                  className={`${styles.statusBox} ${
                    status === 'success'
                      ? styles.statusSuccess
                      : status === 'error'
                      ? styles.statusError
                      : styles.statusNotice
                  }`}
                  role="alert"
                >
                  <p className={styles.statusMessageText}>{statusMessage}</p>
                  {fallbackUrl && (
                    <a
                      href={fallbackUrl}
                      className={styles.fallbackButton}
                      title="Open in your default email client"
                    >
                      <span>Send directly via your email client</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-editorial-primary"
                style={{ width: '100%' }}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className={styles.spinner} />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={15} />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
