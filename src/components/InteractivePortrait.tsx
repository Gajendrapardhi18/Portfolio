import React, { useState, useEffect, useRef } from 'react';

interface Props {
  defaultSrc: string;
  hoverSrc: string;
  alt: string;
}

export const InteractivePortrait: React.FC<Props> = ({ defaultSrc, hoverSrc, alt }) => {
  const [hoverReady, setHoverReady] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Initialize pointer type based on primary input device capability
  const isTouchDevice =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(hover: none)').matches;
  const lastPointerTypeRef = useRef<'mouse' | 'touch' | 'pen'>(isTouchDevice ? 'touch' : 'mouse');

  // Preload both portrait images on mount to eliminate flicker
  useEffect(() => {
    const imgDefault = new Image();
    imgDefault.src = defaultSrc;

    const imgHover = new Image();
    imgHover.src = hoverSrc;
    imgHover.onload = () => setHoverReady(true);
    imgHover.onerror = () => {
      setLoadError(`Hover image could not be loaded: ${hoverSrc}`);
    };
  }, [defaultSrc, hoverSrc]);

  // Record input device type on contact
  const handlePointerDown = (e: React.PointerEvent) => {
    lastPointerTypeRef.current = (e.pointerType as 'mouse' | 'touch' | 'pen') || 'mouse';
  };

  // Mobile / Touch: First tap switches to image 2; second tap switches back to image 1
  const handleClick = () => {
    if (lastPointerTypeRef.current === 'touch' || lastPointerTypeRef.current === 'pen') {
      setIsToggled((prev) => !prev);
    }
  };

  // Keyboard navigation: Enter or Space toggles alternate view
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsToggled((prev) => !prev);
    }
  };

  // Desktop Mouse: Hover in
  const handleMouseEnter = () => {
    if (lastPointerTypeRef.current === 'mouse') {
      setIsHovered(true);
    }
  };

  // Desktop Mouse: Hover out
  const handleMouseLeave = () => {
    if (lastPointerTypeRef.current === 'mouse') {
      setIsHovered(false);
      setIsToggled(false);
    }
  };

  const isSecondImageActive = isHovered || isToggled;

  return (
    <div className="hero-portrait-wrap">
      <div
        className={`interactive-portrait-container ${isSecondImageActive ? 'is-active' : ''}`}
        onPointerDown={handlePointerDown}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-pressed={isSecondImageActive}
        aria-label={`${alt}. ${isSecondImageActive ? 'Alternate portrait view active. Tap or click to switch back.' : 'Default portrait view active. Tap or click to toggle alternate expression.'}`}
      >
        {loadError && (
          <div className="portrait-error-alert" role="alert">
            {loadError}
          </div>
        )}

        {/* Base / Default Portrait Image */}
        <img
          src={defaultSrc}
          alt={alt}
          className="portrait-img-layer portrait-img-default"
          onError={() => setLoadError(`Default image could not be loaded: ${defaultSrc}`)}
        />

        {/* Alternate / Hover Portrait Image (Crossfade) */}
        <img
          src={hoverSrc}
          alt=""
          aria-hidden="true"
          className={`portrait-img-layer portrait-img-hover ${isSecondImageActive && hoverReady ? 'is-visible' : ''}`}
        />
      </div>

      {/* Subtle decorative accent bar for desktop layout */}
      <div className="hero-portrait-accent" aria-hidden="true" />
    </div>
  );
};

export default InteractivePortrait;
