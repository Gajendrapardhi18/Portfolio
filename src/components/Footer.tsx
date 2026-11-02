import React from 'react';
import { ResumeType } from '../data/resumes';

interface FooterProps {
  onResumePreview?: (type: ResumeType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onResumePreview }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            <div className="footer-logo-mark">GP</div>
            <span className="footer-copyright">
              © {year} Gajendra Pardhi. All rights reserved.
            </span>
          </div>

          <div className="footer-links">
            <a
              href="https://linkedin.com/in/gajendra-pardhi-47916b208"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Gajendrapardhi18"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a href="mailto:gajendraspardhi@gmail.com" className="footer-link">
              Email
            </a>
            <button
              type="button"
              onClick={() => onResumePreview?.('dotnet')}
              className="footer-link"
              aria-label="Preview .NET Developer Resume"
            >
              .NET CV
            </button>
            <button
              type="button"
              onClick={() => onResumePreview?.('flutter')}
              className="footer-link"
              aria-label="Preview Flutter Developer Resume"
            >
              Flutter CV
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
