import React from 'react';

export const Footer: React.FC = () => {
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
            <a href="/.NET_Resume.pdf" download className="footer-link">
              .NET CV
            </a>
            <a href="/Flutter_Resume.pdf" download className="footer-link">
              Flutter CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
