'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { PROJECTS, ProjectItem } from '@/data/portfolioData';
import ProjectModal from './ProjectModal';
import styles from './SelectedWork.module.css';

const FILTER_CATEGORIES = ['All', 'Backend', 'Full Stack', 'AI / ML', 'Web Development'] as const;

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Backend') {
      return (
        p.id === 'vital-ledger' ||
        p.id === 'om-sai-transport' ||
        p.id === 'gym-management' ||
        p.id === 'equity-volume-analyzer'
      );
    }
    if (activeFilter === 'Full Stack') {
      return (
        p.id === 'student-project-hub' ||
        p.id === 'society-sphere' ||
        p.id === 'momentify'
      );
    }
    if (activeFilter === 'AI / ML') {
      return (
        p.id === 'groundtruth-loop' ||
        p.id === 'equity-volume-analyzer'
      );
    }
    if (activeFilter === 'Web Development') {
      return (
        p.id === 'student-project-hub' ||
        p.id === 'society-sphere' ||
        p.id === 'momentify' ||
        p.id === 'vital-ledger'
      );
    }
    return true;
  });

  return (
    <section id="work" className={`section ${styles.workSection}`}>
      <div className="container">
        
        {/* Section Header with Large Watermark */}
        <div className="section-header-editorial">
          <div className="section-watermark">PORTFOLIO</div>
          <div className="section-label-editorial">/SELECTED WORK</div>
          <h2 className="section-title-editorial">Architected Software &amp; Real Systems</h2>
          <p className="section-subtitle-editorial">
            An image-focused editorial gallery of practical backend engines, logistical platforms, and analytical applications built to real-world specifications.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className={styles.filterBar}>
          <div className={styles.filterList} role="tablist" aria-label="Filter Projects">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
                className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterBtnActive : ''}`}
              >
                <span>{cat}</span>
                <span className={styles.filterCount}>
                  {cat === 'All'
                    ? PROJECTS.length
                    : PROJECTS.filter((p) => {
                        if (cat === 'Backend') {
                          return (
                            p.id === 'vital-ledger' ||
                            p.id === 'om-sai-transport' ||
                            p.id === 'gym-management' ||
                            p.id === 'equity-volume-analyzer'
                          );
                        }
                        if (cat === 'Full Stack') {
                          return (
                            p.id === 'student-project-hub' ||
                            p.id === 'society-sphere' ||
                            p.id === 'momentify'
                          );
                        }
                        if (cat === 'AI / ML') {
                          return (
                            p.id === 'groundtruth-loop' ||
                            p.id === 'equity-volume-analyzer'
                          );
                        }
                        if (cat === 'Web Development') {
                          return (
                            p.id === 'student-project-hub' ||
                            p.id === 'society-sphere' ||
                            p.id === 'momentify' ||
                            p.id === 'vital-ledger'
                          );
                        }
                        return true;
                      }).length}
                </span>
              </button>
            ))}
          </div>

          <span className={styles.totalBadge}>
            Showing {filteredProjects.length} of {PROJECTS.length} Systems
          </span>
        </div>

        {/* 2-Column Image-First Showcase Grid */}
        <div className={styles.showcaseGrid}>
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={styles.projectCard}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Showcase Frame */}
              <div className={styles.imageFrame}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className={styles.projectImage}
                  loading="lazy"
                />
                
                <div className={styles.imageOverlay}>
                  <div className={styles.viewDetailsPill}>
                    <span>View Case Study</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                <div className={styles.categoryPill}>
                  {project.category}
                </div>
              </div>

              {/* Minimal Project Metadata */}
              <div className={styles.cardInfo}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <div className={styles.cardArrowWrap}>
                    <ArrowUpRight size={18} className={styles.cardArrow} />
                  </div>
                </div>

                <div className={styles.cardSubtitle}>{project.subtitle}</div>
                <p className={styles.cardDesc}>{project.description}</p>

                <div className={styles.cardFooter}>
                  <div className={styles.techTags}>
                    {project.technologies.slice(0, 3).map((t) => (
                      <span key={t} className={styles.techTag}>
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={styles.techMore}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubIconBtn}
                      onClick={(e) => e.stopPropagation()}
                      title={`Open ${project.title} on GitHub`}
                    >
                      <Github size={15} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Interactive Project Details Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
