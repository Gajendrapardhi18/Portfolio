import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <span className="footer-monogram">GP</span>
        <span className="footer-thanks">// THANKS FOR VISITING · GAJENDRA PARDHI</span>
      </div>

      <div className="footer-center">
        <span className="footer-copyright">
          © {new Date().getFullYear()} Gajendra Pardhi · Built with React + TypeScript + Vite
        </span>
      </div>

      <div className="footer-right">
        <a
          href="https://linkedin.com/in/gajendra-pardhi-47916b208"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
          title="LinkedIn"
        >
          <span className="social-tag">IN</span>
        </a>
        <a
          href="mailto:gajendraspardhi@gmail.com"
          className="social-icon-link"
          title="Email Gajendra"
        >
          <span className="social-tag">✉</span>
        </a>
        <a
          href="/.NET_Resume.pdf"
          download
          className="resume-pill-link"
          title="Download .NET Resume PDF"
        >
          .NET CV ↓
        </a>
        <a
          href="/Flutter_Resume.pdf"
          download
          className="resume-pill-link"
          title="Download Flutter Resume PDF"
        >
          FLUTTER CV ↓
        </a>
      </div>
    </footer>
  );
};

