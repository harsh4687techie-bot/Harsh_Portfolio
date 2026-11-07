'use client';

import React, { useState } from 'react';
import { Eye, Download, ExternalLink } from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolioData';
import { LightboxData } from './LightboxModal';
import styles from './Experience.module.css';

interface ExperienceProps {
  onOpenLightbox: (data: LightboxData) => void;
}

// Visual preview assets matching each experience
const EXPERIENCE_PREVIEWS: Record<string, string> = {
  'techspace-manager': '/projects/om-sai-transport.jpg',
  'nexspace-founder': '/projects/student-project-hub.jpg',
  'tipper-tech-lead': '/projects/om-sai-transport.jpg',
  'she-can-foundation': '/certificates/She_Can_Foundation_Python_Development_Internship.png',
  'sankey-solutions': '/certificates/Sankey_Solutions_Python_Developer_Offer_Letter.jpg',
  'ai-asesro': '/certificates/AI_Asesro_Python_Developer_Intern_Offer_Letter.pdf',
  'upskill-campus': '/certificates/upSkill_Campus_Full_Stack_Developer_Intern_Offer_Letter.jpg',
  'letsupgrade-ambassador': '/certificates/LetsUpgrade_Campus_Ambassador_Offer_Letter.jpg',
  'internshala-isp': '/certificates/Internshala_Student_Partner_Appointment_Letter.pdf',
};

export default function Experience({ onOpenLightbox }: ExperienceProps) {
  const [activeExpId, setActiveExpId] = useState<string>(EXPERIENCES[0]?.id || 'techspace-manager');

  const activeExp = EXPERIENCES.find((e) => e.id === activeExpId) || EXPERIENCES[0];
  const activePreviewImage = EXPERIENCE_PREVIEWS[activeExpId] || '/projects/om-sai-transport.jpg';
  const isPdfPreview = activePreviewImage.endsWith('.pdf');
  const isDocument = activePreviewImage.includes('/certificates/');

  // Helper to extract a 2-letter monogram for organizations without an uploaded logo
  const getMonogram = (name: string) => {
    const parts = name.split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section id="experience" className={`section section-dark ${styles.experienceSection}`} aria-label="Experience & Roles">
      <div className="container">
        
        {/* Section Header with Watermark */}
        <div className="section-header-editorial">
          <div className="section-watermark">EXPERIENCE</div>
          <div className="section-label-editorial">/EXPERIENCE</div>
          <div className={styles.headerFlex}>
            <h2 className="section-title-editorial">Leadership &amp; Technical Roles</h2>
            <span className={styles.expBadge}>Verified Responsibilities</span>
          </div>
          <p className="section-subtitle-editorial">
            Hover or tap each organization to reveal authentic branding, engineering deliverables, and verified credentials.
          </p>
        </div>

        {/* 2-Column Interactive Experience Layout */}
        <div className={styles.experienceGrid}>
          
          {/* Left: Interactive Organization List */}
          <div className={styles.listCol} role="tablist" aria-label="Experience Roles">
            {EXPERIENCES.map((exp, idx) => {
              const isActive = activeExpId === exp.id;

              return (
                <div
                  key={exp.id}
                  className={`${styles.experienceRow} ${isActive ? styles.activeRow : ''}`}
                  onMouseEnter={() => setActiveExpId(exp.id)}
                  onClick={() => setActiveExpId(exp.id)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="experience-detail-panel"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveExpId(exp.id);
                    }
                  }}
                >
                  <div className={styles.rowMain}>
                    <div className={styles.rowLeft}>
                      <span className={styles.rowIndex}>0{idx + 1}</span>
                      
                      {/* Organization Logo Thumbnail */}
                      <div className={styles.rowLogoThumb}>
                        {exp.logo ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={exp.logo}
                            alt=""
                            className={styles.rowLogoImg}
                            loading="lazy"
                          />
                        ) : (
                          <span className={styles.rowLogoFallback}>
                            {getMonogram(exp.organization)}
                          </span>
                        )}
                      </div>

                      <div>
                        <h3 className={styles.orgName}>{exp.organization}</h3>
                        <div className={styles.roleName}>{exp.role}</div>
                      </div>
                    </div>

                    <div className={styles.rowRight}>
                      <span className={styles.periodText}>{exp.period}</span>
                      <span className={`${styles.typePill} ${styles[exp.type.replace(/\s+/g, '')]}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Floating Interactive Preview & Details Panel */}
          <div className={styles.previewCol} id="experience-detail-panel" role="tabpanel">
            <div className={styles.previewCard}>
              
              {/* Media Preview Frame with Adaptive Aspect Ratio */}
              <div
                className={`${styles.previewMediaFrame} ${
                  isDocument ? styles.previewMediaFrameDocument : ''
                }`}
              >
                {isPdfPreview ? (
                  <div className={styles.pdfPreviewBox}>
                    <iframe
                      src={`${activePreviewImage}#view=FitH&toolbar=0`}
                      title={`${activeExp.organization} Document`}
                      className={styles.pdfPreviewFrame}
                    />
                  </div>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={activePreviewImage}
                    alt={`${activeExp.organization} Preview`}
                    className={`${styles.previewImage} ${
                      isDocument ? styles.previewImageDocument : ''
                    }`}
                    loading="lazy"
                  />
                )}

                <div className={styles.previewOverlay}>
                  <span className={styles.previewTag}>
                    {activeExp.organization}
                  </span>
                </div>
              </div>

              {/* In-depth Role Breakdown with Organization Branding */}
              <div className={styles.cardDetails}>
                <div className={styles.detailsHeader}>
                  <div className={styles.brandingGroup}>
                    {/* Organization Logo Container */}
                    <div className={styles.orgLogoContainer}>
                      {activeExp.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={activeExp.logo}
                          alt={`${activeExp.organization} Logo`}
                          className={styles.orgLogoImg}
                        />
                      ) : (
                        <span className={styles.orgLogoFallback}>
                          {getMonogram(activeExp.organization)}
                        </span>
                      )}
                    </div>

                    <div className={styles.orgDetailsContent}>
                      <span className={styles.metaType}>{activeExp.type}</span>
                      <h4 className={styles.detailsTitle}>{activeExp.role}</h4>
                      <div className={styles.detailsOrg}>
                        <span className={styles.orgNameHighlight}>{activeExp.organization}</span>
                        <span>&bull;</span>
                        <span>{activeExp.location}</span>
                      </div>
                    </div>
                  </div>

                  <span className={styles.detailsPeriod}>{activeExp.period}</span>
                </div>

                <ul className={styles.bulletList}>
                  {activeExp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className={styles.bulletItem}>
                      <span className={styles.bulletDot}>&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Verified Credential Actions */}
                {activeExp.credential && (
                  <div className={styles.credentialBar}>
                    <button
                      type="button"
                      className="btn-editorial-dark"
                      onClick={() => {
                        if (!activeExp.credential) return;
                        onOpenLightbox({
                          title: activeExp.credential.title,
                          organization: activeExp.organization,
                          role: activeExp.role,
                          date: activeExp.period,
                          filePath: activeExp.credential.filePath,
                          fileName: activeExp.credential.fileName,
                          fileType: activeExp.credential.fileType,
                        });
                      }}
                      title="Preview verified credential"
                      aria-label={`Preview ${activeExp.organization} credential`}
                    >
                      <Eye size={15} />
                      <span>Preview ({activeExp.credential.fileType.toUpperCase()})</span>
                    </button>

                    <a
                      href={activeExp.credential.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.credActionBtnDark}
                      title="Open in new tab"
                      aria-label={`Open ${activeExp.organization} document in new tab`}
                    >
                      <span>New Tab</span>
                      <ExternalLink size={14} />
                    </a>

                    <a
                      href={activeExp.credential.filePath}
                      download={activeExp.credential.fileName}
                      className={styles.credActionBtnDark}
                      title="Download document"
                      aria-label={`Download ${activeExp.organization} document`}
                    >
                      <Download size={15} />
                    </a>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
