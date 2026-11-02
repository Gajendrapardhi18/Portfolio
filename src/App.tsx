import React, { useState, useEffect } from 'react';
import projects, { Project } from './data/projects';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelectedProjects } from './components/SelectedProjects';
import { SystemLogAndStack } from './components/SystemLogAndStack';
import { CaseStudies } from './components/CaseStudies';
import { SkillsSection } from './components/SkillsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import './styles/global.css';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Clean URL parameters: safely strips external referral tags (e.g. ?utm_source=chatgpt.com)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search) {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
        let hasUtm = false;

        utmKeys.forEach((key) => {
          if (urlParams.has(key)) {
            urlParams.delete(key);
            hasUtm = true;
          }
        });

        if (hasUtm) {
          const remainingQuery = urlParams.toString();
          const cleanUrl =
            window.location.pathname +
            (remainingQuery ? `?${remainingQuery}` : '') +
            window.location.hash;

          window.history.replaceState({}, document.title, cleanUrl);
        }
      } catch (err) {
        // Silent fail-safe
      }
    }
  }, []);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToCaseStudies = () => {
    const el = document.getElementById('case-studies');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      <div className="app-container">
        {/* Top Presentation Bar */}
        <div className="presentation-bar">
          <div className="pres-status">
            <span className="pres-dot"></span>
            <span>GAJENDRA PARDHI // FULL-STACK SOFTWARE DEVELOPER PORTFOLIO</span>
          </div>
          <div className="pres-actions">
            <a href="#home" className="pres-link">[01 // HOME]</a>
            <a href="#projects" className="pres-link">[02 // SELECTED]</a>
            <a href="#case-studies" className="pres-link">[03 // CASE STUDIES]</a>
            <a href="#skills" className="pres-link">[04 // STACK]</a>
            <a href="#contact" className="pres-link">[05 // CONTACT]</a>
          </div>
        </div>

        {/* Dual Canvas Presentation Grid matching the reference screenshot */}
        <div className="dual-canvas-grid">
          {/* =========================================================================
              CANVAS 1 / LEFT PANE: BRANDING, HERO, PORTRAIT, SELECTED PROJECTS, LOGS
              ========================================================================= */}
          <section className="canvas-panel canvas-left" id="panel-overview">
            <Header />

            <Hero onExploreClick={handleScrollToProjects} />

            <SelectedProjects
              projects={projects}
              onSelectProject={setSelectedProject}
              onViewAllClick={handleScrollToCaseStudies}
            />

            <SystemLogAndStack />

            <div className="panel-subfooter">
              <span>© {new Date().getFullYear()} GAJENDRA PARDHI. ALL RIGHTS RESERVED.</span>
              <span className="text-emerald">BASED IN NAGPUR, INDIA •</span>
            </div>
          </section>

          {/* =========================================================================
              CANVAS 2 / RIGHT PANE: CASE STUDIES, TECHNICAL SKILLS, RADAR CTA, FOOTER
              ========================================================================= */}
          <section className="canvas-panel canvas-right" id="panel-details">
            <CaseStudies
              projects={projects}
              onSelectProject={setSelectedProject}
            />

            <SkillsSection />

            <CtaSection />

            <Footer />
          </section>
        </div>

        {/* Interactive Project Detail Dialog */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </>
  );
};

export default App;
