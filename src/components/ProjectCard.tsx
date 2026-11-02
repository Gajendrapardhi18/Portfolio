import React from 'react';
import { Project } from '../data/projects';
import { ProjectMockup } from './ProjectMockup';

interface Props {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export const ProjectCard: React.FC<Props> = ({ project, index, onOpen }) => {
  return (
    <div
      className="selected-card"
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(project)}
    >
      <div className="card-top-meta">
        <span className="card-index">{project.number || String(index + 1).padStart(2, '0')}</span>
        <span className="card-category-tag">// {project.categoryTag}</span>
        <span className="card-expand-icon">↗</span>
      </div>

      <h3 className="card-title">{project.title.split('–')[0].trim()}</h3>
      <p className="card-subtitle">{project.subtitle}</p>
      <p className="card-desc-snippet">{project.description}</p>

      <div className="card-mockup-wrapper">
        <ProjectMockup type={project.previewType} title={project.title} />
      </div>

      <div className="card-tags-row">
        {project.tech.slice(0, 3).map((t) => (
          <span key={t} className="tech-pill">{t}</span>
        ))}
        {project.tech.length > 3 && (
          <span className="tech-pill tech-pill-more">+{project.tech.length - 3}</span>
        )}
      </div>

      <div className="card-footer-action">
        <span className="action-label">EXPLORE ARCHITECTURE</span>
        <span className="action-arrow">→</span>
      </div>
    </div>
  );
};

export default ProjectCard;
