import React, { useEffect, useRef } from 'react';

interface Props {
  onComplete: () => void;
  theme?: 'light' | 'dark';
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
    // Accessibility: instantly complete if user prefers reduced motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      handleFinish();
      return;
    }

    // Safety fallback — ensures unmounting even if animation events are blocked
    const fallback = setTimeout(() => {
      handleFinish();
    }, 2100);

    return () => clearTimeout(fallback);
  }, []);

  return (
    <div
      className="preloader-overlay"
      onAnimationEnd={(e) => {
        if (e.animationName === 'preloaderFadeOut') {
          handleFinish();
        }
      }}
      aria-label="Portfolio loading"
      role="status"
    >
      <div className="preloader-inner">
        {/* Monogram */}
        <div className="preloader-monogram">GP</div>

        {/* Name */}
        <div className="preloader-name">Gajendra Pardhi</div>

        {/* Progress bar */}
        <div className="preloader-progress-track">
          <div className="preloader-progress-bar" />
        </div>

        {/* Terminal lines */}
        <div className="preloader-lines">
          <div className="preloader-line l1">Initializing portfolio...</div>
          <div className="preloader-line l2">Loading developer profile...</div>
          <div className="preloader-line l3">Connecting modules...</div>
          <div className="preloader-line l4">
            System ready
            <span className="preloader-cursor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
