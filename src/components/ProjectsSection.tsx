import React from 'react';
import { Project } from '../data/projects';

interface Props {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<Props> = ({ projects, onSelectProject }) => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <div>
            <div className="section-label">Selected Work</div>
            <h2 className="section-title">Projects</h2>
            <p className="section-desc">
              A selection of professional and personal projects — spanning enterprise backends,
              mobile applications, and real-time systems.
            </p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card"
              onClick={() => onSelectProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onSelectProject(project);
              }}
              aria-label={`View details for ${project.title}`}
            >
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <div className="project-badges">
                  {project.isProfessional ? (
                    <span className="badge badge-professional">Professional</span>
                  ) : (
                    <>
                      <span className="badge badge-personal">Personal</span>
                      <span className="badge badge-dev">In Development</span>
                    </>
                  )}
                </div>
              </div>

              <div>
                <div className="project-category-tag">{project.categoryTag}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech-list">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="project-card-footer">
                <span className="project-view-link">
                  View details →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

