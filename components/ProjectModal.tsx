'use client';

import React, { useEffect, useCallback } from 'react';
import { X, ExternalLink, Github, CheckCircle2, HelpCircle, Layers, Sparkles } from 'lucide-react';
import { ProjectItem } from '@/data/portfolioData';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.container}>
        {/* Modal Header */}
        <header className={styles.header}>
          <div className={styles.metaRow}>
            <span className={styles.categoryBadge}>{project.category}</span>
            <span className={styles.statusBadge}>{project.status}</span>
          </div>

          <button
            onClick={onClose}
            className={styles.closeBtn}
            aria-label="Close project modal (ESC)"
            title="Close (ESC)"
            autoFocus
          >
            <X size={20} />
          </button>
        </header>

        {/* Scrollable Modal Content */}
        <div className={styles.body}>
          {/* Main Screenshot Banner */}
          <div className={styles.imageFrame}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={`${project.title} Screenshot`}
              className={styles.screenshot}
            />
          </div>

          {/* Title & Domain */}
          <div className={styles.titleArea}>
            <h2 id="project-modal-title" className={styles.title}>
              {project.title}
            </h2>
            <div className={styles.subtitle}>{project.subtitle}</div>
            <p className={styles.domain}>{project.domain}</p>
          </div>

          {/* Overview */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>Project Overview</h3>
            <p className={styles.description}>{project.description}</p>
          </div>

          {/* Problem Solved */}
          <div className={styles.problemCard}>
            <div className={styles.cardHeader}>
              <HelpCircle size={17} className={styles.accentIcon} />
              <span className={styles.cardTitle}>Problem Solved</span>
            </div>
            <p className={styles.cardText}>{project.problemSolved}</p>
          </div>

          {/* Contribution */}
          <div className={styles.contributionCard}>
            <div className={styles.cardHeader}>
              <CheckCircle2 size={17} className={styles.accentIcon} />
              <span className={styles.cardTitle}>My Engineering Contribution</span>
            </div>
            <p className={styles.cardText}>{project.contribution}</p>
          </div>

          {/* Technologies */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>Technologies Used</h3>
            <div className={styles.techList}>
              {project.technologies.map((t) => (
                <span key={t} className={styles.techChip}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <footer className={styles.footer}>
          <div className={styles.footerActions}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-primary"
                title="Inspect repository on GitHub"
              >
                <Github size={16} />
                <span>GitHub Repository</span>
                <ExternalLink size={13} />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-secondary"
                title="View live deployment"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>

          <div className={styles.footerHint}>
            Press <kbd className={styles.kbd}>ESC</kbd> to close
          </div>
        </footer>
      </div>
    </div>
  );
}

