'use client';

import React from 'react';
import { Eye, Download, Calendar, Briefcase, FileCheck } from 'lucide-react';
import { INTERNSHIPS, INTERNSHALA_PARTNER } from '@/data/portfolioData';
import { LightboxData } from './LightboxModal';
import styles from './Internships.module.css';

interface InternshipsProps {
  onOpenLightbox: (data: LightboxData) => void;
}

export default function Internships({ onOpenLightbox }: InternshipsProps) {
  return (
    <section id="internships" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Briefcase size={14} aria-hidden="true" />
            <span>06 — INTERNSHIPS</span>
          </div>
          <h2 className="section-title">Internships & Appointments</h2>
          <p className="section-subtitle">
            Industry exposure across backend software engineering, full-stack workflows, and student career mentorship programs.
          </p>
        </div>

        {/* Internships Grid */}
        <div className={styles.internshipsGrid}>
          {INTERNSHIPS.map((intern, index) => {
            const isPdf = intern.credential.fileType === 'pdf';

            return (
              <article key={intern.id} className={styles.internCard}>
                <div className={styles.cardTop}>
                  <div className={styles.roleHeader}>
                    <span className={styles.indexNumber}>0{index + 1}</span>
                    <span className={styles.formatTag}>{intern.credential.fileType.toUpperCase()}</span>
                  </div>
                  <h3 className={styles.roleName}>{intern.role}</h3>
                  <div className={styles.orgRow}>
                    <Briefcase size={14} className={styles.blueIcon} />
                    <span className={styles.orgName}>{intern.organization}</span>
                  </div>
                  <div className={styles.dateRow}>
                    <Calendar size={13} className={styles.blueIcon} />
                    <span>{intern.period}</span>
                  </div>
                </div>

                <div className={styles.cardBottom}>
                  <p className={styles.desc}>{intern.description}</p>

                  <div className={styles.actionButtonGroup}>
                    {isPdf ? (
                      <a
                        href={intern.credential.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-icon-subtle blue-fill"
                        title={`View ${intern.credential.title} in new tab`}
                      >
                        <Eye size={14} />
                        <span>View Credential</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          onOpenLightbox({
                            title: intern.credential.title,
                            organization: intern.organization,
                            role: intern.role,
                            date: intern.period,
                            filePath: intern.credential.filePath,
                            fileName: intern.credential.fileName,
                            fileType: intern.credential.fileType,
                          })
                        }
                        className="btn-icon-subtle blue-fill"
                        title={`View ${intern.credential.title} in lightbox`}
                      >
                        <Eye size={14} />
                        <span>View Credential</span>
                      </button>
                    )}

                    <a
                      href={intern.credential.filePath}
                      download={intern.credential.fileName}
                      className="btn-icon-subtle"
                      title={`Download original ${intern.credential.fileName}`}
                    >
                      <Download size={14} />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Dedicated Section: Internshala Student Partner Showcase */}
        <div className={styles.ispBanner}>
          <div className={styles.ispContent}>
            <div className={styles.ispHeaderRow}>
              <div className={styles.ispBadge}>
                <FileCheck size={14} className={styles.blueIcon} />
                <span>Verified Campus Appointment</span>
              </div>
              <span className={styles.ispDate}>
                Appointed: {INTERNSHALA_PARTNER.appointmentDate} • {INTERNSHALA_PARTNER.programDuration}
              </span>
            </div>

            <h3 className={styles.ispTitle}>{INTERNSHALA_PARTNER.role}</h3>
            <h4 className={styles.ispOrg}>{INTERNSHALA_PARTNER.organization}</h4>
            <p className={styles.ispDesc}>{INTERNSHALA_PARTNER.description}</p>
          </div>

          <div className={styles.ispActions}>
            <a
              href={INTERNSHALA_PARTNER.credential.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              title="View Appointment Letter PDF in New Tab"
            >
              <Eye size={15} />
              <span>View Appointment Letter</span>
            </a>

            <a
              href={INTERNSHALA_PARTNER.credential.filePath}
              download={INTERNSHALA_PARTNER.credential.fileName}
              className="btn-outline"
              title="Download Appointment Letter PDF"
            >
              <Download size={15} />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
