import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { ResumeType } from '../data/resumes';

interface Props {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onResumePreview: (type: ResumeType) => void;
}

export const Header: React.FC<Props> = ({ theme, onToggleTheme, onResumePreview }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <a href="#home" className="header-logo" onClick={handleNavClick}>
            <div className="logo-mark">GP</div>
            <span className="logo-text">Gajendra Pardhi</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="header-nav" aria-label="Main navigation">
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Desktop Actions: Theme Toggle + Resume Downloads */}
          <div className="header-actions">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              type="button"
              onClick={() => onResumePreview('dotnet')}
              className="btn btn-ghost btn-sm"
              aria-label="Preview .NET Developer Resume"
            >
              .NET CV
            </button>
            <button
              type="button"
              onClick={() => onResumePreview('flutter')}
              className="btn btn-outline btn-sm"
              aria-label="Preview Flutter Developer Resume"
            >
              Flutter CV
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Hamburger */}
          <div className="header-mobile-controls">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} className="theme-toggle-mobile" />
            <button
              className="header-hamburger"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <nav className={`mobile-nav ${mobileOpen ? 'open' : ''}`} aria-label="Mobile navigation">
          <a href="#projects" className="mobile-nav-link" onClick={handleNavClick}>Projects</a>
          <a href="#experience" className="mobile-nav-link" onClick={handleNavClick}>Experience</a>
          <a href="#skills" className="mobile-nav-link" onClick={handleNavClick}>Skills</a>
          <a href="#education" className="mobile-nav-link" onClick={handleNavClick}>Education</a>
          <a href="#contact" className="mobile-nav-link" onClick={handleNavClick}>Contact</a>
          <div className="mobile-nav-actions">
            <button
              type="button"
              onClick={() => {
                onResumePreview('dotnet');
                setMobileOpen(false);
              }}
              className="btn btn-ghost btn-sm"
              aria-label="Preview .NET Developer Resume"
            >
              .NET CV
            </button>
            <button
              type="button"
              onClick={() => {
                onResumePreview('flutter');
                setMobileOpen(false);
              }}
              className="btn btn-outline btn-sm"
              aria-label="Preview Flutter Developer Resume"
            >
              Flutter CV
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
