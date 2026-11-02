import React, { useState } from 'react';
import { Project } from '../data/projects';
import { ProjectMockup } from './ProjectMockup';

interface Props {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const CaseStudies: React.FC<Props> = ({ projects, onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'professional' | 'personal'>('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'professional') return p.isProfessional;
    if (filter === 'personal') return !p.isProfessional;
    return true;
  });

  return (
    <section id="case-studies" className="case-studies-section">
      <div className="section-head-row">
        <div className="section-title-group">
          <span className="section-slash">//</span>
          <h2 className="section-heading">CASE STUDIES &amp; PRODUCTION SYSTEMS</h2>
        </div>

        {/* Filter controls */}
        <div className="filter-tab-group">
          <button
            onClick={() => setFilter('all')}
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          >
            ALL ({projects.length})
          </button>
          <button
            onClick={() => setFilter('professional')}
            className={`filter-btn ${filter === 'professional' ? 'active' : ''}`}
          >
            PROFESSIONAL (4)
          </button>
          <button
            onClick={() => setFilter('personal')}
            className={`filter-btn ${filter === 'personal' ? 'active' : ''}`}
          >
            IN DEVELOPMENT (1)
          </button>
        </div>
      </div>

      <div className="case-studies-list">
        {filteredProjects.map((proj) => (
          <article
            key={proj.id}
            className={`case-study-row ${proj.isProfessional ? 'type-professional' : 'type-personal'}`}
            onClick={() => onSelectProject(proj)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onSelectProject(proj)}
          >
            {/* Number */}
            <div className="case-num-col">
              <span className="case-num">{proj.number}</span>
              <span className={`case-classification-badge ${proj.isProfessional ? 'badge-pro' : 'badge-dev'}`}>
                {proj.category}
              </span>
            </div>

            {/* Thumbnail Mockup */}
            <div className="case-thumb-col">
              <ProjectMockup type={proj.previewType} title={proj.title} />
            </div>

            {/* Info Column */}
            <div className="case-info-col">
              <div className="case-category-tag">// {proj.categoryTag}</div>
              <h3 className="case-title">{proj.title}</h3>
              <p className="case-desc">{proj.description}</p>

              <div className="case-tech-tags">
                {proj.tech.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>

              <div className="case-click-hint">
                <span className="hint-text">Inspect architectural decisions &amp; schema</span>
                <span className="hint-arrow">↗</span>
              </div>
            </div>

            {/* Results Metric Box matching reference screenshot */}
            <div className="case-results-box">
              <div className="results-label">
                RESULTS <span className="results-arrow">↗</span>
              </div>
              <div className="results-metrics-list">
                {proj.metrics.map((m, idx) => (
                  <div key={idx} className="metric-item">
                    <span className="metric-val">{m.value}</span>
                    <span className="metric-desc">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

