'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Eye, Download, Calendar, MapPin, Briefcase, ExternalLink } from 'lucide-react';
import { EXPERIENCES, ExperienceItem } from '@/data/portfolioData';
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

  return (
    <section id="experience" className={`section section-dark ${styles.experienceSection}`}>
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
            Hover or tap each organization to reveal engineering deliverables, responsibilities, and verified credentials.
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
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveExpId(exp.id);
                    }
                  }}
                >
                  <div className={styles.rowMain}>
                    <div className={styles.rowLeft}>
                      <span className={styles.rowIndex}>0{idx + 1}</span>
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
          <div className={styles.previewCol}>
            <div className={styles.previewCard}>
              
              {/* Media Preview Frame */}
              <div className={styles.previewMediaFrame}>
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
                    className={styles.previewImage}
                  />
                )}

                <div className={styles.previewOverlay}>
                  <span className={styles.previewTag}>
                    {activeExp.organization}
                  </span>
                </div>
              </div>

              {/* In-depth Role Breakdown */}
              <div className={styles.cardDetails}>
                <div className={styles.detailsHeader}>
                  <div>
                    <span className={styles.metaType}>{activeExp.type}</span>
                    <h4 className={styles.detailsTitle}>{activeExp.role}</h4>
                    <div className={styles.detailsOrg}>
                      <span>{activeExp.organization}</span>
                      <span>&bull;</span>
                      <span>{activeExp.location}</span>
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
                    >
                      <Eye size={14} />
                      <span>Preview ({activeExp.credential.fileType.toUpperCase()})</span>
                    </button>

                    <a
                      href={activeExp.credential.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-editorial-secondary"
                      style={{ color: '#FFFFFF', borderColor: '#404040' }}
                      title="Open in new tab"
                    >
                      <span>New Tab</span>
                      <ExternalLink size={13} />
                    </a>

                    <a
                      href={activeExp.credential.filePath}
                      download={activeExp.credential.fileName}
                      className="btn-editorial-secondary"
                      style={{ color: '#FFFFFF', borderColor: '#404040' }}
                      title="Download document"
                    >
                      <Download size={14} />
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
