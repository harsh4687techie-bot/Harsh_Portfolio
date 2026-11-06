'use client';

import React from 'react';
import { ArrowUp, Mail, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        
        <div className={styles.topRow}>
          <div>
            <h2 className={styles.brandName}>{PERSONAL_INFO.displayName}</h2>
            <p className={styles.brandRole}>
              {PERSONAL_INFO.role} &mdash; {PERSONAL_INFO.location}
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTopBtn}
            aria-label="Back to top"
            title="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className={styles.arrowIcon} />
          </button>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.socialLinks}>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className={styles.footerLink}
              title="Direct Email"
            >
              <span>Email</span>
            </a>
            <span className={styles.divider}>&bull;</span>
            <a
              href={PERSONAL_INFO.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
              title="GitHub Profile"
            >
              <span>GitHub</span>
            </a>
            <span className={styles.divider}>&bull;</span>
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
              title="LinkedIn Profile"
            >
              <span>LinkedIn</span>
            </a>
            <span className={styles.divider}>&bull;</span>
            <a
              href={PERSONAL_INFO.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
              title="Verified Resume PDF"
            >
              <span>Resume</span>
            </a>
          </div>

          <div className={styles.copyText}>
            &copy; {currentYear} Harshvardhan Shinde. Crafted with an editorial black &amp; white aesthetic.
          </div>
        </div>

      </div>
    </footer>
  );
}
