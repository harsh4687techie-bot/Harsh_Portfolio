'use client';

import React from 'react';
import { Code2, Server, Database, Layout, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import styles from './Skills.module.css';

export default function Skills() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={18} className={styles.categoryIcon} />;
      case 'Server':
        return <Server size={18} className={styles.categoryIcon} />;
      case 'Database':
        return <Database size={18} className={styles.categoryIcon} />;
      case 'Layout':
        return <Layout size={18} className={styles.categoryIcon} />;
      case 'Terminal':
        return <Terminal size={18} className={styles.categoryIcon} />;
      default:
        return <Code2 size={18} className={styles.categoryIcon} />;
    }
  };

  return (
    <section id="skills" className={`section ${styles.skillsSection}`}>
      <div className="container">
        
        {/* Section Header with Large Watermark */}
        <div className="section-header-editorial">
          <div className="section-watermark">EXPERTISE</div>
          <div className="section-label-editorial">/EXPERTISE</div>
          <h2 className="section-title-editorial">Technical Toolkit &amp; Competencies</h2>
          <p className="section-subtitle-editorial">
            Practical backend infrastructure, relational databases, and modern developer tooling applied across working codebases.
          </p>
        </div>

        {/* 5-Column / Responsive Clean Grouping */}
        <div className={styles.categoriesGrid}>
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={cat.title} className={styles.catCard}>
              <div className={styles.catHeader}>
                <div className={styles.catIconWrap}>{getCategoryIcon(cat.iconName)}</div>
                <div className={styles.catMeta}>
                  <span className={styles.catIndex}>0{idx + 1}</span>
                  <h3 className={styles.catTitle}>{cat.title}</h3>
                </div>
              </div>

              <div className={styles.skillsList}>
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`${styles.skillChip} ${
                      skill.highlight ? styles.highlightChip : ''
                    }`}
                  >
                    <span className={styles.skillDot}></span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Integrity Statement */}
        <div className={styles.integrityBar}>
          <div className={styles.integrityLeft}>
            <Sparkles size={18} className={styles.integrityIcon} />
            <div>
              <h4 className={styles.integrityTitle}>No Arbitrary Percentage Gauges</h4>
              <p className={styles.integrityText}>
                Every technology listed here represents software actively engineered, deployed, or maintained across verified GitHub repositories and practical student initiatives.
              </p>
            </div>
          </div>

          <span className={styles.verifiedTag}>Verified Stacks</span>
        </div>

      </div>
    </section>
  );
}
