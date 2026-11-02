import React from 'react';
import { InteractivePortrait } from './InteractivePortrait';

interface Props {
  onScrollToProjects: () => void;
}

export const Hero: React.FC<Props> = ({ onScrollToProjects }) => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left: Text content */}
          <div className="hero-content">
            <div className="hero-label">Associate Software Developer</div>

            <h1 className="hero-name">Gajendra Pardhi</h1>

            <div className="hero-role">
              .NET Core · Flutter · Backend Development
            </div>

            <div className="hero-tagline">
              <span className="tagline-pill">C# &amp; .NET</span>
              <span className="tagline-sep">·</span>
              <span className="tagline-pill">Flutter &amp; Dart</span>
              <span className="tagline-sep">·</span>
              <span className="tagline-pill">SQL Server</span>
              <span className="tagline-sep">·</span>
              <span className="tagline-pill">REST APIs</span>
            </div>

            <p className="hero-bio">
              Associate Software Developer at Dynage Tech, building scalable backend systems and
              cross-platform mobile applications. I design clean, maintainable APIs and deliver
              production-grade software with attention to architecture and reliability.
            </p>

            <div className="hero-actions">
              <button onClick={onScrollToProjects} className="btn btn-primary">
                View Projects →
              </button>
              <a href="/.NET_Resume.pdf" download className="btn btn-outline">
                Download .NET CV ↓
              </a>
              <a href="/Flutter_Resume.pdf" download className="btn btn-ghost">
                Download Flutter CV ↓
              </a>
            </div>

            <div className="hero-meta-row">
              <div className="hero-meta-item">
                <span className="hero-meta-dot" />
                Dynage Tech Pvt. Ltd.
              </div>
              <div className="hero-meta-item">
                <span className="hero-meta-dot" />
                Nagpur, India
              </div>
              <div className="hero-meta-item">
                <span className="hero-available-dot" />
                Open to opportunities
              </div>
            </div>
          </div>

          {/* Right: Interactive Portrait with Crimson Backdrop */}
          <div className="hero-portrait-col">
            <InteractivePortrait
              defaultSrc="/assets/gajendra-default.jpeg"
              hoverSrc="/assets/gajendra-hover.jpeg"
              alt="Illustrated portrait of Gajendra Pardhi, Associate Software Developer with glasses against a crimson background"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
