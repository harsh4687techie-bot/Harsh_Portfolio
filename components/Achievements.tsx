'use client';

import React, { useState } from 'react';
import {
  Trophy,
  Calendar,
  MapPin,
  Eye,
  Download,
  ExternalLink,
  FileCheck2,
  FileText,
} from 'lucide-react';
import { CREDENTIALS, CredentialItem } from '@/data/portfolioData';
import { LightboxData } from './LightboxModal';
import styles from './Achievements.module.css';

interface AchievementsProps {
  onOpenLightbox: (data: LightboxData) => void;
}

const CATEGORIES = ['All', 'Certificate', 'Internship', 'Offer Letter', 'Appointment'] as const;

export default function Achievements({ onOpenLightbox }: AchievementsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredCredentials =
    activeCategory === 'All'
      ? CREDENTIALS
      : CREDENTIALS.filter((item) => item.category === activeCategory);

  return (
    <section id="credentials" className={`section ${styles.credentialsSection}`}>
      <div className="container">
        
        {/* Section Header with Large Watermark */}
        <div className="section-header-editorial">
          <div className="section-watermark">CREDENTIALS</div>
          <div className="section-label-editorial">/CREDENTIALS</div>
          <h2 className="section-title-editorial">Verified Documents &amp; Certificates</h2>
          <p className="section-subtitle-editorial">
            Authentic repository of verified offer letters, institutional appointments, and competitive hackathon achievements.
          </p>
        </div>

        {/* Featured SIH 2026 Spotlight Banner */}
        <div className={styles.spotlightCard}>
          <div className={styles.spotlightMain}>
            <div className={styles.spotlightHeader}>
              <div className={styles.spotlightBadge}>Competitive Hackathon</div>
              <h3 className={styles.spotlightTitle}>Smart India Hackathon 2026</h3>
              <h4 className={styles.spotlightSubtitle}>
                Internal Hackathon &bull; Pillai HOC College of Engineering &amp; Technology
              </h4>
            </div>

            <div className={styles.spotlightMeta}>
              <div className={styles.metaRow}>
                <Calendar size={13} className={styles.metaIcon} />
                <span>29 August 2026</span>
              </div>
              <div className={styles.metaRow}>
                <MapPin size={13} className={styles.metaIcon} />
                <span>Rasayani, Navi Mumbai, India</span>
              </div>
            </div>
          </div>

          <p className={styles.spotlightDesc}>
            Successfully participated in the Internal Hackathon of Smart India Hackathon 2026 organized by Pillai HOC College of Engineering and Technology, Rasayani. Demonstrated rapid prototyping, collaborative engineering, and modular system design.
          </p>

          <div className={styles.spotlightActions}>
            <button
              type="button"
              className="btn-editorial-primary"
              onClick={() =>
                onOpenLightbox({
                  title: 'Smart India Hackathon 2026 Participation',
                  organization: 'Pillai HOC College of Engineering & Technology',
                  role: 'Hackathon Participant',
                  date: '29 August 2026',
                  filePath: '/certificates/Smart_India_Hackathon_2026_Participation.pdf',
                  fileName: 'Smart_India_Hackathon_2026_Participation.pdf',
                  fileType: 'pdf',
                  description:
                    'Certificate of Participation in the Internal Hackathon of Smart India Hackathon 2026.',
                })
              }
              title="Preview Certificate PDF in viewer"
            >
              <Eye size={15} />
              <span>Preview Certificate</span>
            </button>

            <a
              href="/certificates/Smart_India_Hackathon_2026_Participation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-secondary"
              title="Open Certificate PDF in new tab"
            >
              <span>Open in New Tab</span>
              <ExternalLink size={13} />
            </a>

            <a
              href="/certificates/Smart_India_Hackathon_2026_Participation.pdf"
              download="Smart_India_Hackathon_2026_Participation.pdf"
              className="btn-editorial-secondary"
              title="Download original certificate PDF"
            >
              <Download size={15} />
              <span>Download</span>
            </a>
          </div>
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
                className={`${styles.filterBtn} ${
                  activeCategory === cat ? styles.filterBtnActive : ''
                }`}
              >
                <span>{cat}</span>
                <span className={styles.filterCount}>
                  {cat === 'All'
                    ? CREDENTIALS.length
                    : CREDENTIALS.filter((c) => c.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Credentials Grid */}
        <div className={styles.credentialsGrid}>
          {filteredCredentials.map((cred) => {
            return (
              <article key={cred.id} className={styles.credCard}>
                <div className={styles.credTop}>
                  <span className={`${styles.typeBadge} ${styles[cred.fileType]}`}>
                    {cred.fileType.toUpperCase()}
                  </span>
                  <span className={styles.credCategory}>{cred.category}</span>
                  <span className={styles.credDate}>{cred.date}</span>
                </div>

                <div className={styles.credContent}>
                  <div className={styles.credOrg}>{cred.organization}</div>
                  <h3 className={styles.credTitle}>{cred.title}</h3>
                  <p className={styles.credDesc}>{cred.description}</p>
                </div>

                <div className={styles.credActions}>
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
                    className={styles.actionBtn}
                    title={`Preview ${cred.title}`}
                  >
                    <Eye size={13} />
                    <span>PREVIEW</span>
                  </button>

                  <a
                    href={cred.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionBtn}
                    title={`Open ${cred.fileName} in new tab`}
                  >
                    <ExternalLink size={13} />
                    <span>NEW TAB</span>
                  </a>

                  <a
                    href={cred.filePath}
                    download={cred.fileName}
                    className={`${styles.actionBtn} ${styles.actionBtnDownload}`}
                    title={`Download ${cred.fileName}`}
                  >
                    <Download size={13} />
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
