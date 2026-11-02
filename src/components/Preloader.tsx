import React, { useEffect, useRef } from 'react';

interface Props {
  onComplete: () => void;
}

export const Preloader: React.FC<Props> = ({ onComplete }) => {
  const completedRef = useRef(false);

  const handleFinish = () => {
    if (!completedRef.current) {
      completedRef.current = true;
      onComplete();
    }
  };

  useEffect(() => {
    // Accessibility check: instantly complete if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      handleFinish();
      return;
    }

    // Safety fallback timer to guarantee unmounting even if animation events are blocked
    const fallbackTimer = setTimeout(() => {
      handleFinish();
    }, 1950);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <div
      className="preloader-overlay"
      onAnimationEnd={(e) => {
        if (e.animationName === 'preloaderOverlayExit') {
          handleFinish();
        }
      }}
      aria-label="Portfolio initializing"
      role="status"
    >
      <div className="preloader-content">
        {/* Monogram Brand Header */}
        <div className="preloader-brand">
          <div className="preloader-monogram">GP</div>
          <div className="preloader-brand-info">
            <span className="preloader-brand-name">GAJENDRA PARDHI</span>
            <span className="preloader-brand-sub">FULL-STACK SOFTWARE DEVELOPER</span>
          </div>
        </div>

        {/* Terminal Boot Window */}
        <div className="preloader-terminal">
          <div className="terminal-header-bar">
            <div className="terminal-controls">
              <span className="terminal-circle dot-red" />
              <span className="terminal-circle dot-amber" />
              <span className="terminal-circle dot-green" />
            </div>
            <div className="terminal-title-text">
              TERMINAL // BOOT_SEQUENCE.SH
            </div>
          </div>

          <div className="terminal-content">
            <div className="terminal-line line-1">
              <span className="terminal-prompt">&gt;</span>
              <span className="terminal-text">INITIALIZING PORTFOLIO.EXE</span>
            </div>

            <div className="terminal-line line-2">
              <span className="terminal-prompt">&gt;</span>
              <span className="terminal-text">LOADING DEVELOPER PROFILE...</span>
            </div>

            <div className="terminal-line line-3">
              <span className="terminal-prompt">&gt;</span>
              <span className="terminal-text">CONNECTING MODULES...</span>
            </div>

            <div className="terminal-line line-4 line-ready">
              <span className="terminal-prompt">&gt;</span>
              <span className="terminal-text text-emerald font-bold">
                SYSTEM READY
              </span>
              <span className="ready-badge">[OK]</span>
            </div>

            <div className="terminal-cursor-row">
              <span className="terminal-cursor">_</span>
            </div>
          </div>

          {/* Thin Emerald Progress Bar */}
          <div className="preloader-progress-track">
            <div className="preloader-progress-bar" />
          </div>
        </div>

        {/* Subtitle Details */}
        <div className="preloader-footer-meta">
          <span className="preloader-meta-item">// .NET CORE 8</span>
          <span className="preloader-meta-sep">·</span>
          <span className="preloader-meta-item">FLUTTER</span>
          <span className="preloader-meta-sep">·</span>
          <span className="preloader-meta-item">SQL ARCHITECTURE</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
