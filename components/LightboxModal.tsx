'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Download, ExternalLink, FileText, AlertCircle } from 'lucide-react';
import styles from './LightboxModal.module.css';

export interface LightboxData {
  title: string;
  organization: string;
  role?: string;
  date?: string;
  filePath: string;
  fileName: string;
  fileType: 'pdf' | 'jpg' | 'png';
  description?: string;
}

interface LightboxModalProps {
  data: LightboxData | null;
  onClose: () => void;
}

export default function LightboxModal({ data, onClose }: LightboxModalProps) {
  const [scale, setScale] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  // Reset state on document change
  useEffect(() => {
    setScale(1);
    setIsLoading(true);
    setHasError(false);
  }, [data]);

  // Handle ESC key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (data) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [data, handleKeyDown]);

  if (!data) return null;

  const isPdf = data.fileType === 'pdf';

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.3, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.3, 0.7));
  const resetZoom = () => setScale(1);

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.container}>
        {/* Modal Header */}
        <header className={styles.header}>
          <div className={styles.headerInfo}>
            <div className={styles.badgeRow}>
              <span className={styles.typeBadge}>{data.fileType.toUpperCase()}</span>
              {data.date && <span className={styles.dateBadge}>{data.date}</span>}
            </div>
            <h2 id="lightbox-modal-title" className={styles.title}>
              {data.title}
            </h2>
            <p className={styles.org}>{data.organization}</p>
          </div>

          <div className={styles.actions}>
            {/* Download Button */}
            <a
              href={data.filePath}
              download={data.fileName}
              className={styles.actionBtn}
              title="Download Document"
              aria-label="Download Document"
            >
              <Download size={16} />
              <span className={styles.btnText}>Download</span>
            </a>

            {/* View Full in New Tab */}
            <a
              href={data.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionBtn}
              title="Open Document in New Tab"
              aria-label="Open Document in New Tab"
            >
              <ExternalLink size={16} />
              <span className={styles.btnText}>New Tab</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className={styles.closeBtn}
              aria-label="Close Viewer (ESC)"
              title="Close (ESC)"
              autoFocus
            >
              <X size={20} />
            </button>
          </div>
        </header>

        {/* Modal Body / Document Viewport */}
        <div className={styles.viewport}>
          {isLoading && !hasError && (
            <div className={styles.loadingContainer}>
              <div className={styles.spinner}></div>
              <span>Loading document...</span>
            </div>
          )}

          {hasError ? (
            <div className={styles.errorContainer}>
              <AlertCircle size={32} className={styles.errorIcon} />
              <p>Unable to load document preview inline.</p>
              <div className={styles.errorActions}>
                <a
                  href={data.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionBtn}
                >
                  <ExternalLink size={14} />
                  <span>Open in New Tab</span>
                </a>
                <a
                  href={data.filePath}
                  download={data.fileName}
                  className={styles.actionBtn}
                >
                  <Download size={14} />
                  <span>Download Original</span>
                </a>
              </div>
            </div>
          ) : isPdf ? (
            <div className={styles.pdfWrapper}>
              <iframe
                src={`${data.filePath}#view=FitH`}
                title={data.title}
                className={styles.pdfFrame}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false);
                  setHasError(true);
                }}
              />
            </div>
          ) : (
            <div
              className={styles.imageWrapper}
              style={{ transform: `scale(${scale})` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={data.filePath}
                alt={data.title}
                className={styles.image}
                draggable={false}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false);
                  setHasError(true);
                }}
              />
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <footer className={styles.footer}>
          {!isPdf ? (
            <div className={styles.zoomControls}>
              <button
                onClick={zoomOut}
                disabled={scale <= 0.7}
                className={styles.controlBtn}
                aria-label="Zoom Out"
                title="Zoom Out"
              >
                <ZoomOut size={16} />
              </button>
              <span className={styles.zoomLevel}>{Math.round(scale * 100)}%</span>
              <button
                onClick={zoomIn}
                disabled={scale >= 3}
                className={styles.controlBtn}
                aria-label="Zoom In"
                title="Zoom In"
              >
                <ZoomIn size={16} />
              </button>
              <button
                onClick={resetZoom}
                className={styles.controlBtn}
                aria-label="Reset Zoom"
                title="Reset Zoom"
              >
                <RotateCcw size={14} />
                <span className={styles.controlLabel}>Reset</span>
              </button>
            </div>
          ) : (
            <div className={styles.pdfInfo}>
              <FileText size={15} className={styles.blueIcon} />
              <span>Interactive PDF Document Viewer &bull; Use toolbar or open in new tab</span>
            </div>
          )}

          <div className={styles.footerNote}>
            Press <kbd className={styles.kbd}>ESC</kbd> to close
          </div>
        </footer>
      </div>
    </div>
  );
}
