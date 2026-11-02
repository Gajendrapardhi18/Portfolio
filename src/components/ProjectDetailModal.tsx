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
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-panel">
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-left">
            <span className="modal-number">
              Project {project.number} · {project.categoryTag}
            </span>
            <h2 className="modal-title" id="modal-title">
              {project.title}
            </h2>
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
            {project.appType && (
              <span className="badge badge-app-type">{project.appType}</span>
            )}
            {project.isProfessional ? (
              <span className="badge badge-professional">Professional Project</span>
            ) : (
              <>
                <span className="badge badge-personal">Personal Project</span>
                <span className="badge badge-dev">In Development</span>
              </>
            )}
          </div>

          {/* Overview */}
          <div>
            <div className="modal-section-title">Overview</div>
            <p className="modal-description">{project.longDescription}</p>
          </div>

          {/* Application Purpose (if defined) */}
          {project.purpose && (
            <div>
              <div className="modal-section-title">Application Purpose</div>
              <p className="modal-description">{project.purpose}</p>
            </div>
          )}

          {/* Responsibilities or Key Contributions */}
          {project.responsibilities && project.responsibilities.length > 0 ? (
            <div>
              <div className="modal-section-title">My Responsibilities & Contributions</div>
              <ul className="modal-achievements">
                {project.responsibilities.map((item, i) => (
                  <li key={i} className="modal-achievement-item">
                    <span className="achievement-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
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
          )}

          {/* Architecture & State Management (if defined) */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <div className="modal-section-title">Architecture & State Management</div>
              <ul className="modal-achievements">
                {project.architecture.map((item, i) => (
                  <li key={i} className="modal-achievement-item">
                    <span className="achievement-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Device Integration & Real-Time (if defined) */}
          {project.deviceIntegration && project.deviceIntegration.length > 0 && (
            <div>
              <div className="modal-section-title">Device Integration & Real-Time Communication</div>
              <ul className="modal-achievements">
                {project.deviceIntegration.map((item, i) => (
                  <li key={i} className="modal-achievement-item">
                    <span className="achievement-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Challenges (if defined) */}
          {project.technicalChallenges && project.technicalChallenges.length > 0 && (
            <div>
              <div className="modal-section-title">Technical Challenges & Implementation Details</div>
              <ul className="modal-achievements">
                {project.technicalChallenges.map((item, i) => (
                  <li key={i} className="modal-achievement-item">
                    <span className="achievement-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Engineering Status / Accuracy Disclosure Note (if defined) */}
          {project.accuracyNote && (
            <div className="modal-accuracy-card">
              <div className="modal-accuracy-header">
                <span className="modal-accuracy-icon">ℹ️</span>
                <span className="modal-accuracy-title">Engineering Status Disclosure</span>
              </div>
              <p className="modal-accuracy-text">{project.accuracyNote}</p>
            </div>
          )}

          {/* Project Status */}
          {project.projectStatus && (
            <div className="modal-status-card">
              <span className="modal-status-label">Project Status</span>
              <p className="modal-status-text">{project.projectStatus}</p>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <div className="modal-section-title">Tech Stack</div>
            <div className="modal-tech-list">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
