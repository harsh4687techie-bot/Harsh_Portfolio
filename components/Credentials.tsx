'use client';

import React, { useState } from 'react';
import { Eye, Download, FileText } from 'lucide-react';
import { CREDENTIALS, CredentialItem } from '@/data/portfolioData';
import { LightboxData } from './LightboxModal';
import styles from './Credentials.module.css';

interface CredentialsProps {
  onOpenLightbox: (data: LightboxData) => void;
}

const CATEGORIES = ['All', 'Offer Letter', 'Appointment', 'Certificate', 'Internship'] as const;

export default function Credentials({ onOpenLightbox }: CredentialsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredCredentials = activeCategory === 'All'
    ? CREDENTIALS
    : CREDENTIALS.filter((item) => item.category === activeCategory);

  return (
    <section id="credentials" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <FileText size={14} aria-hidden="true" />
            <span>07 — CREDENTIALS</span>
          </div>
          <h2 className="section-title">Document Archive & Credentials</h2>
          <p className="section-subtitle">
            Authentic repository of verified offer letters, institutional appointments, and competitive participation records.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className={styles.filterBar}>
          <div className={styles.filterList} role="tablist" aria-label="Filter Credentials">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
              >
                <span>{cat}</span>
                <span className={styles.countBadge}>
                  {cat === 'All'
                    ? CREDENTIALS.length
                    : CREDENTIALS.filter((c) => c.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Credentials Digital Archive Grid */}
        <div className={styles.credentialsGrid}>
          {filteredCredentials.map((cred) => {
            const isPdf = cred.fileType === 'pdf';

            return (
              <article key={cred.id} className={styles.credCard}>
                {/* Archive Card Top Metadata */}
                <div className={styles.credHeader}>
                  <div className={styles.fileTypeIndicator}>
                    <span className={`${styles.typeBadge} ${styles[cred.fileType]}`}>
                      {cred.fileType.toUpperCase()}
                    </span>
                    <span className={styles.categoryLabel}>{cred.category}</span>
                  </div>
                  <span className={styles.credDate}>{cred.date}</span>
                </div>

                {/* Organization & Title */}
                <div className={styles.credContent}>
                  <div className={styles.credOrg}>{cred.organization}</div>
                  <h3 className={styles.credTitle}>{cred.title}</h3>
                  <p className={styles.credDesc}>{cred.description}</p>
                </div>

                {/* Action Controls */}
                <div className={styles.credActions}>
                  {isPdf ? (
                    <a
                      href={cred.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon-subtle blue-fill"
                      title={`Open ${cred.fileName} in new tab`}
                    >
                      <Eye size={14} />
                      <span>VIEW</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightbox({
                          title: cred.title,
                          organization: cred.organization,
                          role: cred.role,
                          date: cred.date,
                          filePath: cred.filePath,
                          fileName: cred.fileName,
                          fileType: cred.fileType,
                          description: cred.description,
                        })
                      }
                      className="btn-icon-subtle blue-fill"
                      title={`View ${cred.fileName} in lightbox`}
                    >
                      <Eye size={14} />
                      <span>VIEW</span>
                    </button>
                  )}

                  <a
                    href={cred.filePath}
                    download={cred.fileName}
                    className="btn-icon-subtle"
                    title={`Download ${cred.fileName}`}
                  >
                    <Download size={14} />
                    <span>DOWNLOAD</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
