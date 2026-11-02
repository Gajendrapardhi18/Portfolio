import React from 'react';
import { Project } from '../data/projects';
import { ProjectMockup } from './ProjectMockup';

interface Props {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onViewAllClick: () => void;
}

export const SelectedProjects: React.FC<Props> = ({ projects, onSelectProject, onViewAllClick }) => {
  // Take top 3 projects for selected showcase
  const topProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="selected-projects-section">
      <div className="section-head-row">
        <div className="section-title-group">
          <span className="section-slash">//</span>
          <h2 className="section-heading">SELECTED PROJECTS</h2>
        </div>

        <button onClick={onViewAllClick} className="btn-view-all">
          VIEW_ALL_PROJECTS <span className="icon-reticle">⛶</span>
        </button>
      </div>

      <div className="selected-cards-grid">
        {topProjects.map((proj) => (
          <div
            key={proj.id}
            className="selected-card"
            onClick={() => onSelectProject(proj)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onSelectProject(proj)}
          >
            {/* Card Header */}
            <div className="card-top-meta">
              <span className="card-index">{proj.number}</span>
              <span className="card-category-tag">// {proj.categoryTag}</span>
              <span className="card-expand-icon">↗</span>
            </div>

            <h3 className="card-title">{proj.title.split('–')[0].trim()}</h3>
            <p className="card-subtitle">{proj.subtitle}</p>

            <p className="card-desc-snippet">{proj.description}</p>

            {/* Visual Mockup Preview */}
            <div className="card-mockup-wrapper">
              <ProjectMockup type={proj.previewType} title={proj.title} />
            </div>

            {/* Tech Tag Pills */}
            <div className="card-tags-row">
              {proj.tech.slice(0, 3).map((t) => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
              {proj.tech.length > 3 && (
                <span className="tech-pill tech-pill-more">+{proj.tech.length - 3}</span>
              )}
            </div>

            <div className="card-footer-action">
              <span className="action-label">EXPLORE ARCHITECTURE</span>
              <span className="action-arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

