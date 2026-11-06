'use client';

import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className="container">
        
        {/* Section Header with Large Watermark */}
        <div className="section-header-editorial">
          <div className="section-watermark">ABOUT</div>
          <div className="section-label-editorial">/ABOUT</div>
          <h2 className="section-title-editorial">Engineering Focus &amp; Background</h2>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className={styles.editorialGrid}>
          
          {/* Left Column: Core Manifesto */}
          <div className={styles.leadCol}>
            <p className={styles.leadParagraph}>
              &ldquo;I&apos;m Harshvardhan Shinde, a Backend Developer interested in building practical software solutions, developing reliable backend systems, working with APIs and databases, and exploring Artificial Intelligence and Machine Learning.&rdquo;
            </p>

            <div className={styles.taglineBox}>
              <span className={styles.taglineLabel}>Core Trait</span>
              <p className={styles.taglineText}>
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            <div className={styles.leadMeta}>
              <div className={styles.metaStat}>
                <span className={styles.statNum}>3rd Year</span>
                <span className={styles.statLabel}>Computer Engineering (5th Sem)</span>
              </div>
              <div className={styles.metaStat}>
                <span className={styles.statNum}>8+</span>
                <span className={styles.statLabel}>Architected Systems &amp; Tools</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Initiatives */}
          <div className={styles.narrativeCol}>
            <p className={styles.paragraph}>
              My engineering approach is centered on what makes software dependable behind the scenes: strict relational data modeling, clear object-oriented architecture, deterministic RESTful contracts, and modular service separation.
            </p>

            <p className={styles.paragraph}>
              With extensive hands-on development in <strong>Python</strong>, <strong>Django</strong>, <strong>Flask</strong>, <strong>FastAPI</strong>, and <strong>PostgreSQL</strong>, I build systems designed for maintainability and scalability rather than quick throwaway prototypes.
            </p>

            <p className={styles.paragraph}>
              Beyond core backend infrastructure, I actively explore <strong>Artificial Intelligence and Machine Learning</strong>, with a focus on prediction uncertainty calibration, Human-In-The-Loop evaluation pipelines, and high-volume quantitative data processing.
            </p>

            {/* Leadership Callouts */}
            <div className={styles.leadershipList}>
              <div className={styles.leadershipItem}>
                <div className={styles.itemHeader}>
                  <h3 className={styles.orgTitle}>TechSpace Academy</h3>
                  <span className={styles.roleBadge}>Manager</span>
                </div>
                <p className={styles.orgDesc}>
                  Supervising engineering lifecycle workflows, coordinating technical modularity, and enforcing clean code and documentation standards across student technical teams.
                </p>
              </div>

              <div className={styles.leadershipItem}>
                <div className={styles.itemHeader}>
                  <h3 className={styles.orgTitle}>NexSpace</h3>
                  <span className={styles.roleBadge}>Founder</span>
                </div>
                <p className={styles.orgDesc}>
                  Leading software development initiatives, coordinating project architecture from concept to implementation, and delivering practical engineering solutions.
                </p>
              </div>
            </div>

            <div className={styles.principlesRow}>
              <div className={styles.principleItem}>
                <CheckCircle2 size={15} className={styles.checkIcon} />
                <span>Zero guesswork in database schema normalization</span>
              </div>
              <div className={styles.principleItem}>
                <CheckCircle2 size={15} className={styles.checkIcon} />
                <span>Stateless REST API endpoints with strict input gating</span>
              </div>
              <div className={styles.principleItem}>
                <CheckCircle2 size={15} className={styles.checkIcon} />
                <span>Continuous exploration of AI model validation pipelines</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
