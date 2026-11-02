import React, { useEffect } from 'react';
import { Project } from '../data/projects';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<Props> = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [project, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-panel">
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-left">
            <span className="modal-number">Project {project.number} · {project.categoryTag}</span>
            <h2 className="modal-title" id="modal-title">{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project details"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Badges */}
          <div className="modal-badges">
            {project.isProfessional ? (
              <span className="badge badge-professional">Professional</span>
            ) : (
              <>
                <span className="badge badge-personal">Personal</span>
                <span className="badge badge-dev">In Development</span>
              </>
            )}
          </div>

          {/* Overview */}
          <div>
            <div className="modal-section-title">Overview</div>
            <p className="modal-description">{project.longDescription}</p>
          </div>

          {/* Key contributions */}
          <div>
            <div className="modal-section-title">Key Contributions</div>
            <ul className="modal-achievements">
              {project.achievements.map((item, i) => (
                <li key={i} className="modal-achievement-item">
                  <span className="achievement-dot" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="modal-section-title">Tech Stack</div>
            <div className="modal-tech-list">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
