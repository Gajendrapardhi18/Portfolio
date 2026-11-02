import React from 'react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className = '' }) => {
  return (
    <header className={`site-header ${className}`}>
      <div className="header-brand">
        <div className="brand-monogram">GP</div>
        <div className="brand-text">
          <span className="brand-name">GAJENDRA PARDHI</span>
          <span className="brand-sub">FULLSTACK DEVELOPER</span>
        </div>
      </div>

      <nav className="header-nav">
        <a href="#home" className="nav-link active">
          <span className="nav-prefix">01_</span>HOME
        </a>
        <a href="#projects" className="nav-link">
          <span className="nav-prefix">02_</span>PROJECTS
        </a>
        <a href="#case-studies" className="nav-link">
          <span className="nav-prefix">03_</span>CASE_STUDIES
        </a>
        <a href="#skills" className="nav-link">
          <span className="nav-prefix">04_</span>STACK
        </a>
        <a href="#contact" className="nav-link">
          <span className="nav-prefix">05_</span>CONTACT
        </a>
      </nav>
    </header>
  );
};

