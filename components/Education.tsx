'use client';

import React from 'react';
import { Calendar, MapPin, Award, BookOpen, CheckCircle } from 'lucide-react';
import { EDUCATION_INFO } from '@/data/portfolioData';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className={`section ${styles.educationSection}`}>
      <div className="container">
        
        {/* Section Header with Large Watermark */}
        <div className="section-header-editorial">
          <div className="section-watermark">ACADEMICS</div>
          <div className="section-label-editorial">/EDUCATION</div>
          <h2 className="section-title-editorial">Academic Degree &amp; Engineering Foundation</h2>
        </div>

        {/* Editorial Education Showcase Card */}
        <div className={styles.eduCard}>
          <div className={styles.cardHeader}>
            <div className={styles.degreeBlock}>
              <span className={styles.statusPill}>{EDUCATION_INFO.status}</span>
              <h3 className={styles.degreeTitle}>
                {EDUCATION_INFO.degree} &mdash; {EDUCATION_INFO.field}
              </h3>
              <h4 className={styles.institutionName}>{EDUCATION_INFO.institution}</h4>
            </div>

            <div className={styles.metaBlock}>
              <div className={styles.metaRow}>
                <Calendar size={14} className={styles.metaIcon} />
                <span>{EDUCATION_INFO.period}</span>
              </div>
              <div className={styles.metaRow}>
                <MapPin size={14} className={styles.metaIcon} />
                <span>{EDUCATION_INFO.campus}</span>
              </div>
              <div className={styles.metaRow}>
                <Award size={14} className={styles.metaIcon} />
                <span>{EDUCATION_INFO.affiliation}</span>
              </div>
            </div>
          </div>

          <p className={styles.descriptionText}>
            {EDUCATION_INFO.description}
          </p>

          <div className={styles.disciplinesBox}>
            <div className={styles.disciplinesHeader}>
              <BookOpen size={16} className={styles.bookIcon} />
              <span className={styles.disciplinesTitle}>Core Computer Engineering Curriculum</span>
            </div>
            
            <div className={styles.disciplinesGrid}>
              <div className={styles.disciplineItem}>
                <CheckCircle size={14} className={styles.checkIcon} />
                <span>Object-Oriented Programming (OOP)</span>
              </div>
              <div className={styles.disciplineItem}>
                <CheckCircle size={14} className={styles.checkIcon} />
                <span>Data Structures &amp; Algorithms (DSA)</span>
              </div>
              <div className={styles.disciplineItem}>
                <CheckCircle size={14} className={styles.checkIcon} />
                <span>Relational Database Management (RDBMS)</span>
              </div>
              <div className={styles.disciplineItem}>
                <CheckCircle size={14} className={styles.checkIcon} />
                <span>Operating Systems &amp; Concurrency</span>
              </div>
              <div className={styles.disciplineItem}>
                <CheckCircle size={14} className={styles.checkIcon} />
                <span>Computer Networks &amp; Web Protocols</span>
              </div>
              <div className={styles.disciplineItem}>
                <CheckCircle size={14} className={styles.checkIcon} />
                <span>Software Engineering Methodologies</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
