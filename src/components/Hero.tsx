import React from 'react';

interface Props {
  onExploreClick: () => void;
}

export const Hero: React.FC<Props> = ({ onExploreClick }) => {
  return (
    <section id="home" className="hero-section">
      {/* Top technical status log line */}
      <div className="hero-status-row">
        <div className="tech-tag">
          <span className="tech-prompt">&gt;</span> INITIALIZING_PORTFOLIO.EXE
        </div>
        <div className="tech-tag status-tag">
          <span className="status-dot"></span>
          STATUS: <span className="status-val">ONLINE</span>
        </div>
      </div>

      <div className="hero-grid">
        {/* Left Headline & Pitch */}
        <div className="hero-content">
          <h1 className="hero-title">
            Building Systems<br />
            Behind the <span className="text-emerald">Interface.</span>
          </h1>

          <p className="hero-subtitle">
            I design and develop scalable backend systems and cross-platform mobile applications,
            transforming complex requirements into reliable, production-grade software solutions.
          </p>

          <div className="hero-actions">
            <button onClick={onExploreClick} className="btn-tech btn-tech-primary">
              VIEW MY WORK <span className="btn-arrow">→</span>
            </button>
            <a href="/.NET_Resume.pdf" download className="btn-tech btn-tech-ghost" title="Download verified .NET Developer Resume">
              DOWNLOAD .NET CV <span className="btn-icon">↓</span>
            </a>
            <a href="/Flutter_Resume.pdf" download className="btn-tech btn-tech-ghost" title="Download verified Flutter Developer Resume">
              DOWNLOAD FLUTTER CV <span className="btn-icon">↓</span>
            </a>
          </div>

          <div className="hero-scroll-prompt">
            <a href="#projects" className="scroll-indicator">
              <span className="tech-prompt">&gt;</span> SCROLL_TO_EXPLORE <span className="scroll-arrow">↓</span>
            </a>
          </div>
        </div>

        {/* Center/Right: Portrait with Corner Brackets & Quick Meta */}
        <div className="hero-portrait-card">
          <div className="portrait-frame">
            {/* Corner Crosshair Reticles matching reference */}
            <span className="corner-bracket top-left">┌</span>
            <span className="corner-bracket top-right">┐</span>
            <span className="corner-bracket bottom-left">└</span>
            <span className="corner-bracket bottom-right">┘</span>

            <div className="portrait-image-wrapper">
              <img
                src="/assets/gajendra_portrait.jpg"
                alt="Gajendra Pardhi — Full-Stack Software Developer"
                className="portrait-img"
              />
              <div className="portrait-overlay">
                <span className="portrait-hint">GAJENDRA PARDHI // SYSTEM ARCHITECT</span>
              </div>
            </div>
          </div>

          {/* Quick Info Grid Beside Portrait matching reference */}
          <div className="portrait-meta-col">
            <div className="meta-block">
              <div className="meta-key">&gt; WHO_AM_I</div>
              <div className="meta-val highlight-white">Gajendra Pardhi</div>
            </div>

            <div className="meta-block">
              <div className="meta-key">&gt; ROLE</div>
              <div className="meta-val">
                Associate Software Developer<br />
                <span className="meta-sub">.NET Core · Flutter · SQL</span>
              </div>
            </div>

            <div className="meta-block">
              <div className="meta-key">&gt; COMPANY</div>
              <div className="meta-val">Dynage Tech Pvt. Ltd.</div>
            </div>

            <div className="meta-block">
              <div className="meta-key">&gt; LOCATION</div>
              <div className="meta-val">Nagpur, MH, India</div>
            </div>

            <div className="meta-block">
              <div className="meta-key">&gt; EXPERIENCE</div>
              <div className="meta-val highlight-white">1.5+ Years</div>
            </div>

            <div className="meta-block">
              <div className="meta-key">&gt; AVAILABILITY</div>
              <div className="meta-val availability-status">
                <span className="pulse-dot"></span> Open for new projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

