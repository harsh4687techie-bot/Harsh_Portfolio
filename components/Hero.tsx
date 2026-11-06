'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import styles from './Hero.module.css';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const portraitSrc = imageError
    ? '/images/profile-placeholder.svg'
    : '/images/profile.jpg';

  return (
    <section id="home" className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        
        {/* Massive Signature Name Typography Header */}
        <div className={styles.nameHeader}>
          <h1 className={styles.massiveName}>
            <span className={styles.firstNameOutlined}>HARSHVARDHAN</span>{' '}
            <span className={styles.lastNameSolid}>SHINDE</span>
          </h1>
        </div>

        {/* Hero Visual Composition Stage */}
        <div className={styles.stageGrid}>
          
          {/* Left Column: Role & Introduction */}
          <div className={styles.leftCol}>
            <div className={styles.roleBlock}>
              <span className={styles.roleLabel}>/ROLE</span>
              <h2 className={styles.roleTitle}>Backend Developer</h2>
              <p className={styles.roleSubtitle}>
                &amp; AI/ML Engineer in Training
              </p>
            </div>

            <p className={styles.introParagraph}>
              Hi, I&apos;m Harshvardhan Shinde &mdash; a Backend Developer passionate about building practical software solutions, developing reliable backend systems, working with APIs and databases, and exploring Artificial Intelligence and Machine Learning.
            </p>

            <div className={styles.leftActions}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="btn-editorial-primary"
                id="hero-collaborate-btn"
              >
                <span>Let&apos;s collaborate</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Center Column: Prominent Portrait Overlapping Name */}
          <div className={styles.centerCol}>
            <div className={styles.portraitWrapper}>
              <div className={styles.portraitFrame}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={portraitSrc}
                  alt="Harshvardhan Shinde — Backend Developer"
                  className={styles.portraitImage}
                  onError={() => setImageError(true)}
                  loading="eager"
                />
              </div>
              <div className={styles.portraitGradientFade}></div>
            </div>
          </div>

          {/* Right Column: Direct Channels & Actions */}
          <div className={styles.rightCol}>
            <div className={styles.socialBlock}>
              <span className={styles.socialHeader}>/CONNECT</span>
              <ul className={styles.socialList}>
                <li>
                  <a
                    href={PERSONAL_INFO.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialItem}
                    title="Inspect GitHub Profile"
                  >
                    <span className={styles.socialDot}></span>
                    <span className={styles.socialName}>GitHub</span>
                    <ArrowUpRight size={13} className={styles.socialArrow} />
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialItem}
                    title="Connect on LinkedIn"
                  >
                    <span className={styles.socialDot}></span>
                    <span className={styles.socialName}>LinkedIn</span>
                    <ArrowUpRight size={13} className={styles.socialArrow} />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className={styles.socialItem}
                    title="Send Direct Email"
                  >
                    <span className={styles.socialDot}></span>
                    <span className={styles.socialName}>Email</span>
                    <ArrowUpRight size={13} className={styles.socialArrow} />
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialItem}
                    title="View Verified Resume PDF"
                  >
                    <span className={styles.socialDot}></span>
                    <span className={styles.socialName}>Resume PDF</span>
                    <ArrowUpRight size={13} className={styles.socialArrow} />
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.locationPill}>
              <span className={styles.locationCity}>Navi Mumbai, IN</span>
              <span className={styles.locationDot}>&bull;</span>
              <span className={styles.locationCollege}>Pillai HOC CET</span>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Cue */}
        <div className={styles.scrollCue}>
          <button
            type="button"
            onClick={() => scrollToSection('work')}
            className={styles.scrollBtn}
            aria-label="Scroll to Selected Work"
          >
            <span className={styles.scrollText}>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} className={styles.scrollArrow} />
          </button>
        </div>

      </div>
    </section>
  );
}
