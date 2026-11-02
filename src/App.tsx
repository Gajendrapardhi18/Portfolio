import React, { useState, useEffect } from 'react';
import projects, { Project } from './data/projects';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumePreviewModal } from './components/ResumePreviewModal';
import { RESUMES, ResumeData, ResumeType } from './data/resumes';
import './styles/global.css';

const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
};

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [previewResume, setPreviewResume] = useState<ResumeData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Apply theme to html root and persist in localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Listen to OS theme changes if user hasn't manually set a preference
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem('portfolio-theme');
      if (!saved) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Clean URL: safely strip external referral UTM tags
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
          const remaining = urlParams.toString();
          const cleanUrl =
            window.location.pathname +
            (remaining ? `?${remaining}` : '') +
            window.location.hash;
          window.history.replaceState({}, document.title, cleanUrl);
        }
      } catch {
        // Silent fail-safe
      }
    }
  }, []);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumePreview = (type: ResumeType) => {
    setPreviewResume(RESUMES[type]);
  };

  return (
    <>
      {isLoading && <Preloader theme={theme} onComplete={() => setIsLoading(false)} />}

      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        <Header
          theme={theme}
          onToggleTheme={toggleTheme}
          onResumePreview={handleResumePreview}
        />

        <main>
          <Hero
            onScrollToProjects={handleScrollToProjects}
            onResumePreview={handleResumePreview}
          />

          <div className="section-divider" />

          <ProjectsSection
            projects={projects}
            onSelectProject={setSelectedProject}
          />

          <div className="section-divider" />

          <ExperienceSection />

          <div className="section-divider" />

          <SkillsSection />

          <div className="section-divider" />

          <EducationSection />

          <div className="section-divider" />

          <ContactSection onResumePreview={handleResumePreview} />
        </main>

        <Footer onResumePreview={handleResumePreview} />
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumePreviewModal
        resume={previewResume}
        onClose={() => setPreviewResume(null)}
      />
    </>
  );
};

export default App;
