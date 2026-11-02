import React from 'react';

export const CtaSection: React.FC = () => {
  return (
    <section id="contact" className="cta-box-section">
      <div className="cta-card">
        {/* Top prompt */}
        <div className="cta-prompt-bar">
          <span className="tech-prompt">&gt;</span> LET'S_BUILD_SOMETHING_GREAT
        </div>

        <div className="cta-inner-grid">
          {/* Left headline */}
          <div className="cta-left-col">
            <h2 className="cta-heading">
              Ready to build<br />
              what <span className="text-emerald">matters._</span>
            </h2>
            <p className="cta-subtext">
              Specialized in scalable .NET Core backend systems, high-performance SQL optimization,
              and seamless Flutter mobile applications.
            </p>
          </div>

          {/* Center SVG Radar Graphic matching reference */}
          <div className="cta-radar-col">
            <div className="radar-target-container" aria-hidden="true">
              <svg viewBox="0 0 160 160" className="radar-svg">
                {/* Concentric circles */}
                <circle cx="80" cy="80" r="70" stroke="#1d2b24" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                <circle cx="80" cy="80" r="50" stroke="#25382e" strokeWidth="1" fill="none" />
                <circle cx="80" cy="80" r="30" stroke="#00e575" strokeWidth="1" strokeOpacity="0.4" fill="none" />
                <circle cx="80" cy="80" r="10" stroke="#00e575" strokeWidth="1.5" fill="#00e575" fillOpacity="0.2" />

                {/* Crosshairs */}
                <line x1="80" y1="5" x2="80" y2="155" stroke="#25382e" strokeWidth="1" />
                <line x1="5" y1="80" x2="155" y2="80" stroke="#25382e" strokeWidth="1" />

                {/* Diagonal ticks */}
                <line x1="30" y1="30" x2="40" y2="40" stroke="#00e575" strokeWidth="1" strokeOpacity="0.5" />
                <line x1="130" y1="30" x2="120" y2="40" stroke="#00e575" strokeWidth="1" strokeOpacity="0.5" />
                <line x1="30" y1="130" x2="40" y2="120" stroke="#00e575" strokeWidth="1" strokeOpacity="0.5" />
                <line x1="130" y1="130" x2="120" y2="120" stroke="#00e575" strokeWidth="1" strokeOpacity="0.5" />

                {/* Radar sweep line */}
                <line x1="80" y1="80" x2="135" y2="45" stroke="#00e575" strokeWidth="2" strokeLinecap="round" className="radar-sweep" />
              </svg>
              <div className="radar-status-label">// TARGET: AVAILABLE</div>
            </div>
          </div>

          {/* Right action & details */}
          <div className="cta-right-col">
            <div className="meta-key">&gt; SEND_MESSAGE</div>
            <p className="cta-avail-text">
              I'm currently available for full-stack .NET and Flutter engineering roles, consulting, and collaborations.
            </p>

            <a
              href="mailto:gajendraspardhi@gmail.com?subject=Engineering%20Opportunity%20-%20Gajendra%20Pardhi"
              className="btn-start-conversation"
            >
              START A CONVERSATION <span className="btn-icon">↗</span>
            </a>

            <div className="cta-contact-links">
              <a href="mailto:gajendraspardhi@gmail.com" className="contact-link">
                <span className="link-icon">✉</span> gajendraspardhi@gmail.com
              </a>
              <a href="tel:+919579451647" className="contact-link">
                <span className="link-icon">✆</span> +91 95XXXXX647
              </a>
              <a
                href="https://linkedin.com/in/gajendra-pardhi-47916b208"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="link-icon">in</span> linkedin.com/in/gajendra-pardhi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

