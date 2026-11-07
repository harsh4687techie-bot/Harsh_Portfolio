'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, Download, ExternalLink } from 'lucide-react';
import styles from './PdfViewer.module.css';

interface PdfViewerProps {
  url: string;
  scale?: number;
  onLoadSuccess?: (numPages: number) => void;
  onLoadError?: (error: string) => void;
}

declare global {
  interface Window {
    pdfjsLib?: any;
  }
}

export default function PdfViewer({
  url,
  scale = 1.0,
  onLoadSuccess,
  onLoadError,
}: PdfViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const renderTasksRef = useRef<any[]>([]);

  // Step 1: Ensure PDF.js is loaded from local vendor directory
  const loadPdfJs = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') return reject('Window undefined');
      if (window.pdfjsLib) {
        resolve(window.pdfjsLib);
        return;
      }

      // Check if script tag is already in DOM
      const existingScript = document.querySelector('script[src="/vendor/pdfjs/pdf.min.js"]');
      if (existingScript) {
        existingScript.addEventListener('load', () => {
          if (window.pdfjsLib) resolve(window.pdfjsLib);
          else reject('Failed to initialize pdfjsLib');
        });
        existingScript.addEventListener('error', () => reject('Failed to load /vendor/pdfjs/pdf.min.js'));
        return;
      }

      const script = document.createElement('script');
      script.src = '/vendor/pdfjs/pdf.min.js';
      script.async = true;
      script.onload = () => {
        if (window.pdfjsLib) {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = '/vendor/pdfjs/pdf.worker.min.js';
          resolve(window.pdfjsLib);
        } else {
          reject('pdfjsLib not defined after script load');
        }
      };
      script.onerror = () => reject('Could not load local PDF.js bundle');
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    let isCancelled = false;

    // Cancel any ongoing page render tasks before loading new document/scale
    renderTasksRef.current.forEach((task) => {
      try {
        task?.cancel();
      } catch {
        // ignore cancellation errors
      }
    });
    renderTasksRef.current = [];

    setIsLoading(true);
    setError(null);

    loadPdfJs()
      .then((pdfjs) => {
        if (isCancelled) return;
        pdfjs.GlobalWorkerOptions.workerSrc = '/vendor/pdfjs/pdf.worker.min.js';

        const loadingTask = pdfjs.getDocument({
          url,
          cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
          cMapPacked: true,
        });

        return loadingTask.promise;
      })
      .then(async (pdfDoc) => {
        if (isCancelled || !pdfDoc) return;
        setNumPages(pdfDoc.numPages);
        onLoadSuccess?.(pdfDoc.numPages);

        if (!containerRef.current) return;
        containerRef.current.innerHTML = '';

        // Render each page into its own canvas
        for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
          if (isCancelled) break;

          const page = await pdfDoc.getPage(pageNum);
          const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
          const userScale = Math.max(0.7, Math.min(scale, 2.5));
          const viewport = page.getViewport({ scale: userScale * dpr });

          // Page wrapper
          const pageWrapper = document.createElement('div');
          pageWrapper.className = styles.pageWrapper;

          // If multi-page, add page number badge
          if (pdfDoc.numPages > 1) {
            const badge = document.createElement('div');
            badge.className = styles.pageBadge;
            badge.textContent = `Page ${pageNum} of ${pdfDoc.numPages}`;
            pageWrapper.appendChild(badge);
          }

          // Canvas Frame
          const canvasFrame = document.createElement('div');
          canvasFrame.className = styles.canvasFrame;

          // Canvas element
          const canvas = document.createElement('canvas');
          canvas.className = styles.canvasElement;
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.style.width = `${viewport.width / dpr}px`;
          canvas.style.height = `${viewport.height / dpr}px`;

          canvasFrame.appendChild(canvas);
          pageWrapper.appendChild(canvasFrame);
          containerRef.current.appendChild(pageWrapper);

          const context = canvas.getContext('2d');
          if (context) {
            const renderContext = {
              canvasContext: context,
              viewport,
            };
            const renderTask = page.render(renderContext);
            renderTasksRef.current.push(renderTask);
            await renderTask.promise;
          }
        }

        setIsLoading(false);
      })
      .catch((err) => {
        if (isCancelled) return;
        // Ignore task cancellation errors
        if (err?.name === 'RenderingCancelledException') return;
        console.error('PDF.js render error:', err);
        setError('Could not render document canvas. You can still open or download it below.');
        setIsLoading(false);
        onLoadError?.(err?.message || 'Failed to render PDF');
      });

    return () => {
      isCancelled = true;
      renderTasksRef.current.forEach((task) => {
        try {
          task?.cancel();
        } catch {}
      });
      renderTasksRef.current = [];
    };
  }, [url, scale]);

  return (
    <div className={styles.pdfViewerContainer}>
      {isLoading && (
        <div className={styles.loadingBox}>
          <div className={styles.spinner} />
          <span>Rendering high-resolution document...</span>
        </div>
      )}

      {error ? (
        <div className={styles.errorBox}>
          <AlertCircle size={32} />
          <h4 className={styles.errorTitle}>Document Preview</h4>
          <p className={styles.errorText}>{error}</p>
          <div className={styles.errorActions}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.fallbackBtn}
            >
              <ExternalLink size={14} />
              <span>Open in New Tab</span>
            </a>
            <a href={url} download className={styles.fallbackBtn}>
              <Download size={14} />
              <span>Download File</span>
            </a>
          </div>
        </div>
      ) : (
        <div ref={containerRef} style={{ width: '100%' }} />
      )}
    </div>
  );
}

