'use client';

import React from 'react';
import { FileText, Download, Eye, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { LightboxData } from './LightboxModal';
import styles from './ResumeSection.module.css';

interface ResumeSectionProps {
  onOpenLightbox: (data: LightboxData) => void;
}

export default function ResumeSection({ onOpenLightbox }: ResumeSectionProps) {
  const handlePreview = () => {
    onOpenLightbox({
      title: 'Harshvardhan Shinde — Official Curriculum Vitae',
      organization: 'Pillai HOC College of Engineering & Technology',
      role: 'Backend Developer',
      date: 'Latest Verified',
      filePath: PERSONAL_INFO.resumePdf,
      fileName: PERSONAL_INFO.resumeFileName,
      fileType: 'pdf',
      description:
        'Official verified Curriculum Vitae detailing academic degree, technical capabilities, leadership, and engineering internships.',
    });
  };

  return (
    <section id="resume" className={`section ${styles.resumeSection}`}>
      <div className="container">
        
        {/* Section Header with Large Watermark */}
        <div className="section-header-editorial">
          <div className="section-watermark">CURRICULUM</div>
          <div className="section-label-editorial">/RESUME</div>
          <h2 className="section-title-editorial">Official Curriculum Vitae</h2>
          <p className="section-subtitle-editorial">
            Complete documentation of engineering education, technical capabilities, verified leadership, and backend development experience.
          </p>
        </div>

        {/* Editorial Resume Card */}
        <div className={styles.resumeCard}>
          <div className={styles.cardMain}>
            <div className={styles.fileIconBox}>
              <FileText size={36} className={styles.fileIcon} />
              <span className={styles.pdfBadge}>PDF</span>
            </div>

            <div className={styles.infoCol}>
              <div className={styles.statusRow}>
                <span className={styles.verifiedBadge}>
                  <ShieldCheck size={13} />
                  <span>Verified Document</span>
                </span>
                <span className={styles.fileSizeBadge}>188 KB &bull; PDF Format</span>
              </div>

              <h3 className={styles.docTitle}>Harshvardhan Shinde &mdash; Official Resume</h3>
              <p className={styles.docSubtitle}>
                Backend Developer &bull; Computer Engineering Student (May 2024 &ndash; May 2028)
              </p>

              <div className={styles.highlightsGrid}>
                <div className={styles.highlightItem}>
                  <CheckCircle2 size={15} className={styles.checkIcon} />
                  <span>Python, Django, Flask, FastAPI &amp; PostgreSQL</span>
                </div>
                <div className={styles.highlightItem}>
                  <CheckCircle2 size={15} className={styles.checkIcon} />
                  <span>Manager @ TechSpace &bull; Founder @ NexSpace</span>
                </div>
                <div className={styles.highlightItem}>
                  <CheckCircle2 size={15} className={styles.checkIcon} />
                  <span>Technical Lead &mdash; Tipper Lifecycle Management</span>
                </div>
                <div className={styles.highlightItem}>
                  <CheckCircle2 size={15} className={styles.checkIcon} />
                  <span>Smart India Hackathon 2026 Participation</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.actionsBar}>
            <button
              type="button"
              onClick={handlePreview}
              className="btn-editorial-primary"
              id="resume-preview-btn"
              title="Preview Resume in Interactive Viewer"
            >
              <Eye size={16} />
              <span>Preview Resume</span>
            </button>

            <a
              href={PERSONAL_INFO.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-secondary"
              id="resume-newtab-btn"
              title="Open Official Resume PDF in New Tab"
            >
              <span>Open in New Tab</span>
              <ExternalLink size={14} />
            </a>

            <a
              href={PERSONAL_INFO.resumePdf}
              download={PERSONAL_INFO.resumeFileName}
              className="btn-editorial-secondary"
              id="resume-download-btn"
              title="Download Resume PDF to Device"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
