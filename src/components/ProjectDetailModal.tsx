import React, { useEffect } from 'react';
import { Project } from '../data/projects';
import { ProjectMockup } from './ProjectMockup';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<Props> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="modal-top-bar">
          <div className="modal-tag-group">
            <span className="modal-index">{project.number}</span>
            <span className={`modal-badge ${project.isProfessional ? 'badge-pro' : 'badge-dev'}`}>
              {project.category}
            </span>
            <span className="modal-category-name">// {project.categoryTag}</span>
          </div>

          <button onClick={onClose} className="modal-close-btn" aria-label="Close dialog">
            ✕
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="modal-scroll-body">
          <h2 className="modal-heading">{project.title}</h2>
          <p className="modal-lead-subtitle">{project.subtitle}</p>

          {/* Large Architectural Mockup */}
          <div className="modal-mockup-frame">
            <ProjectMockup type={project.previewType} title={project.title} />
          </div>

          {/* Results Summary Box */}
          <div className="modal-results-banner">
            <div className="results-banner-label">VERIFIED QUANTIFIABLE METRICS</div>
            <div className="results-banner-grid">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="banner-metric">
                  <div className="banner-val">{m.value}</div>
                  <div className="banner-desc">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Deep Architectural Breakdown */}
          <div className="modal-section-block">
            <div className="block-title">
              <span className="tech-prompt">&gt;</span> ARCHITECTURAL_OVERVIEW
            </div>
            <p className="block-text">{project.longDescription}</p>
          </div>

          {/* Responsibilities & Achievements */}
          <div className="modal-section-block">
            <div className="block-title">
              <span className="tech-prompt">&gt;</span> ENGINEERING_RESPONSIBILITIES_&amp;_DELIVERABLES
            </div>
            <ul className="modal-bullet-list">
              {project.responsibilities.map((r, i) => (
                <li key={i} className="bullet-item">
                  <span className="bullet-reticle">▸</span>
                  <span className="bullet-content">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack List */}
          <div className="modal-section-block">
            <div className="block-title">
              <span className="tech-prompt">&gt;</span> INTEGRATED_TECHNOLOGIES
            </div>
            <div className="modal-tags-wrap">
              {project.tech.map((t) => (
                <span key={t} className="tech-pill tech-pill-lg">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div className="modal-footer-bar">
          <span className="footer-mono-note">// GAJENDRA PARDHI · PRODUCTION ARCHITECTURE</span>
          <button onClick={onClose} className="btn-modal-dismiss">
            CLOSE_PANEL [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};

