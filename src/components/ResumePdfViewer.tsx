import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { ResumeData } from '../data/resumes';

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

interface Props {
  resume: ResumeData;
  onClose: () => void;
}

interface PageRenderItemProps {
  pdfDoc: pdfjsLib.PDFDocumentProxy;
  pageNumber: number;
  scale: number;
  onVisible: (pageNumber: number) => void;
}

const PageRenderItem: React.FC<PageRenderItemProps> = ({
  pdfDoc,
  pageNumber,
  scale,
  onVisible,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isRendering, setIsRendering] = useState(true);

  // Render page to canvas
  useEffect(() => {
    let isCancelled = false;
    let currentRenderTask: pdfjsLib.RenderTask | null = null;

    const renderPage = async () => {
      try {
        const page = await pdfDoc.getPage(pageNumber);
        if (isCancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const viewport = page.getViewport({ scale });
        const pixelRatio = Math.max(window.devicePixelRatio || 1, 1);

        canvas.width = Math.floor(viewport.width * pixelRatio);
        canvas.height = Math.floor(viewport.height * pixelRatio);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        const renderContext = {
          canvas,
          canvasContext: ctx,
          viewport,
          transform: pixelRatio !== 1 ? [pixelRatio, 0, 0, pixelRatio, 0, 0] : undefined,
        };

        currentRenderTask = page.render(renderContext);
        await currentRenderTask.promise;

        if (!isCancelled) {
          setIsRendering(false);
        }
      } catch (err: unknown) {
        if (isCancelled) return;
        // Ignore expected cancellation exceptions
        if (err && typeof err === 'object' && 'name' in err && err.name === 'RenderingCancelledException') {
          return;
        }
        console.error(`Error rendering PDF page ${pageNumber}:`, err);
      }
    };

    setIsRendering(true);
    renderPage();

    return () => {
      isCancelled = true;
      if (currentRenderTask) {
        try {
          currentRenderTask.cancel();
        } catch {
          // Ignore
        }
      }
    };
  }, [pdfDoc, pageNumber, scale]);

  // Track active page via IntersectionObserver
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            onVisible(pageNumber);
          }
        });
      },
      {
        threshold: [0.4, 0.7],
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [pageNumber, onVisible]);

  return (
    <div
      ref={wrapperRef}
      id={`pdf-page-${pageNumber}`}
      className="pdf-page-container"
      data-page-number={pageNumber}
    >
      <div className="pdf-canvas-shadow-wrap">
        <canvas ref={canvasRef} className="pdf-page-canvas" />
        {isRendering && (
          <div className="pdf-page-rendering-overlay">
            <span className="pdf-spinner-sm" />
          </div>
        )}
      </div>
      <div className="pdf-page-number-footer">
        Page {pageNumber} of {pdfDoc.numPages}
      </div>
    </div>
  );
};

export const ResumePdfViewer: React.FC<Props> = ({ resume, onClose }) => {
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [fitMode, setFitMode] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const basePageWidthRef = useRef<number>(612);

  // Compute fit-to-width scale based on current container width
  const computeFitScale = useCallback(() => {
    const container = containerRef.current;
    if (!container || !basePageWidthRef.current) return 1.0;

    const containerWidth = container.clientWidth;
    const isMobile = window.innerWidth < 640;
    const padding = isMobile ? 24 : 48;
    const availableWidth = Math.max(containerWidth - padding, 260);

    const calculated = availableWidth / basePageWidthRef.current;
    return Math.min(Math.max(calculated, 0.45), 2.2);
  }, []);

  // Load PDF Document with cancellation protection
  useEffect(() => {
    let isCurrent = true;
    let loadingTask: pdfjsLib.PDFDocumentLoadingTask | null = null;
    let loadedDoc: pdfjsLib.PDFDocumentProxy | null = null;

    setIsLoading(true);
    setErrorMessage(null);
    setCurrentPage(1);

    const load = async () => {
      try {
        loadingTask = pdfjsLib.getDocument({
          url: resume.url,
          cMapPacked: true,
        });

        const doc = await loadingTask.promise;
        if (!isCurrent) {
          try {
            doc.cleanup();
          } catch {
            // Ignore
          }
          return;
        }

        loadedDoc = doc;
        setPdfDoc(doc);
        setNumPages(doc.numPages);

        const firstPage = await doc.getPage(1);
        if (!isCurrent) return;

        const unscaledViewport = firstPage.getViewport({ scale: 1.0 });
        basePageWidthRef.current = unscaledViewport.width;

        const initialScale = computeFitScale();
        setScale(initialScale);
        setFitMode(true);
        setIsLoading(false);
      } catch (err: unknown) {
        if (!isCurrent) return;
        if (err && typeof err === 'object' && 'name' in err && err.name === 'AbortException') {
          return;
        }
        console.error('Failed to load PDF document:', err);
        setIsLoading(false);
        setErrorMessage(
          err instanceof Error
            ? err.message
            : 'Unable to load resume PDF document. Please try again or download directly.'
        );
      }
    };

    load();

    return () => {
      isCurrent = false;
      if (loadingTask) {
        try {
          loadingTask.destroy();
        } catch {
          // Ignore
        }
      }
      if (loadedDoc) {
        try {
          loadedDoc.cleanup();
        } catch {
          // Ignore
        }
      }
    };
  }, [resume.url, computeFitScale]);

  // Handle window resize for fit-to-width mode
  useEffect(() => {
    const handleResize = () => {
      if (fitMode && basePageWidthRef.current) {
        const newScale = computeFitScale();
        setScale(newScale);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [fitMode, computeFitScale]);

  // Scroll to a specific page
  const scrollToPage = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > numPages) return;
    const pageEl = document.getElementById(`pdf-page-${pageNumber}`);
    if (pageEl) {
      pageEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setCurrentPage(pageNumber);
    }
  };

  // Zoom handlers
  const handleZoomIn = () => {
    setFitMode(false);
    setScale((prev) => Math.min(Number((prev + 0.15).toFixed(2)), 2.5));
  };

  const handleZoomOut = () => {
    setFitMode(false);
    setScale((prev) => Math.max(Number((prev - 0.15).toFixed(2)), 0.45));
  };

  const handleFitWidth = () => {
    const newScale = computeFitScale();
    setScale(newScale);
    setFitMode(true);
  };

  const pageNumbers = Array.from({ length: numPages }, (_, i) => i + 1);

  return (
    <div className="resume-custom-viewer">
      {/* Custom Toolbar */}
      <div className="pdf-toolbar" role="toolbar" aria-label="Resume PDF viewer toolbar">
        {/* Left: Document Info */}
        <div className="pdf-toolbar-section pdf-toolbar-info">
          <span className="pdf-badge">
            {resume.type === 'dotnet' ? '.NET Core' : 'Flutter'}
          </span>
          <span className="pdf-title-text" title={resume.title}>
            {resume.title}
          </span>
        </div>

        {/* Center: Page Navigation & Zoom Controls */}
        <div className="pdf-toolbar-section pdf-toolbar-controls">
          {/* Page Navigation */}
          <div className="pdf-control-group">
            <button
              type="button"
              className="pdf-btn pdf-btn-nav"
              onClick={() => scrollToPage(currentPage - 1)}
              disabled={currentPage <= 1 || isLoading}
              aria-label="Previous page"
              title="Previous page"
            >
              ‹
            </button>
            <span className="pdf-page-indicator" aria-live="polite">
              Page <strong>{currentPage}</strong> of <strong>{numPages || 1}</strong>
            </span>
            <button
              type="button"
              className="pdf-btn pdf-btn-nav"
              onClick={() => scrollToPage(currentPage + 1)}
              disabled={currentPage >= numPages || isLoading}
              aria-label="Next page"
              title="Next page"
            >
              ›
            </button>
          </div>

          <span className="pdf-toolbar-divider" />

          {/* Zoom Controls */}
          <div className="pdf-control-group">
            <button
              type="button"
              className="pdf-btn pdf-btn-zoom"
              onClick={handleZoomOut}
              disabled={scale <= 0.45 || isLoading}
              aria-label="Zoom out"
              title="Zoom out"
            >
              −
            </button>
            <span className="pdf-zoom-indicator">
              {Math.round(scale * 100)}%
            </span>
            <button
              type="button"
              className="pdf-btn pdf-btn-zoom"
              onClick={handleZoomIn}
              disabled={scale >= 2.5 || isLoading}
              aria-label="Zoom in"
              title="Zoom in"
            >
              +
            </button>
            <button
              type="button"
              className={`pdf-btn pdf-btn-fit ${fitMode ? 'active' : ''}`}
              onClick={handleFitWidth}
              disabled={isLoading}
              aria-label="Fit to width"
              title="Fit to width"
            >
              Fit
            </button>
          </div>
        </div>

        {/* Right: Download Resume & Close Modal Buttons */}
        <div className="pdf-toolbar-section pdf-toolbar-actions">
          <a
            href={resume.url}
            download={resume.fileName}
            className="btn btn-primary btn-sm pdf-download-btn"
            aria-label={`Download ${resume.title}`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="pdf-download-text">Download Resume</span>
          </a>

          <button
            type="button"
            className="modal-close-btn pdf-close-btn"
            onClick={onClose}
            aria-label="Close resume preview"
            title="Close"
          >
            ×
          </button>
        </div>
      </div>

      {/* Main PDF Scroll Container */}
      <div
        ref={containerRef}
        className="pdf-scroll-container"
        tabIndex={0}
        aria-label="PDF Document Pages"
      >
        {/* Loading Indicator */}
        {isLoading && (
          <div className="pdf-loading-state">
            <div className="pdf-spinner" />
            <p className="pdf-loading-text">Loading {resume.title}...</p>
            <span className="pdf-loading-subtext">Rendering high-resolution vector pages</span>
          </div>
        )}

        {/* Error State */}
        {!isLoading && errorMessage && (
          <div className="pdf-error-state">
            <div className="pdf-error-icon">⚠️</div>
            <h3 className="pdf-error-title">Unable to Load PDF</h3>
            <p className="pdf-error-desc">{errorMessage}</p>
            <div className="pdf-error-actions">
              <a
                href={resume.url}
                download={resume.fileName}
                className="btn btn-primary btn-sm"
              >
                Download Original PDF
              </a>
            </div>
          </div>
        )}

        {/* Rendered Canvas Pages */}
        {!isLoading && !errorMessage && pdfDoc && (
          <div className="pdf-pages-list">
            {pageNumbers.map((pNum) => (
              <PageRenderItem
                key={`${resume.type}-page-${pNum}`}
                pdfDoc={pdfDoc}
                pageNumber={pNum}
                scale={scale}
                onVisible={setCurrentPage}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePdfViewer;
