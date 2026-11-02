import React from 'react';

export const ExperienceSection: React.FC = () => {
  const achievements = [
    'Developed and maintained production .NET Core backend APIs consumed by Flutter mobile clients across multiple client environments.',
    'Built the full-stack DBTM trainer–trainee management platform deployed across multiple training centers.',
    'Engineered recursive CTE-based SQL solutions for hierarchical account tree modules in the Cooperative Banking System.',
    'Implemented JWT-based RBAC across Admin, Trainer, and Member roles for secure API access.',
    'Automated trainee registration pipelines, reducing manual onboarding steps significantly.',
    'Integrated push notification systems to improve task completion and schedule adherence.',
    'Collaborated in Agile sprint cycles with consistent on-time delivery of feature integrations.',
    'Applied Clean Architecture, Repository Pattern, and Dependency Injection principles for maintainable codebases.',
  ];

  return (
    <section id="experience" className="experience-section section-alt">
      <div className="container">
        <div className="section-label">Work History</div>
        <h2 className="section-title">Experience</h2>

        <div style={{ marginTop: 48 }}>
          <div className="experience-card">
            <div className="exp-top-row">
              <div>
                <div className="exp-org-badge">
                  <span className="exp-org-dot" />
                  <span className="exp-org-name">Dynage Tech Pvt. Ltd.</span>
                </div>
                <h3 className="exp-role-title">Associate Software Developer</h3>
                <div className="exp-meta">
                  <span>Nagpur, Maharashtra</span>
                  <span className="exp-meta-sep">·</span>
                  <span>Full-time</span>
                </div>
              </div>
              <div className="exp-period-badge">Oct 2024 – Present</div>
            </div>

            <div className="exp-divider" />

            <div className="exp-achievements">
              {achievements.map((item, i) => (
                <div key={i} className="exp-achievement-item">
                  <span className="achievement-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

