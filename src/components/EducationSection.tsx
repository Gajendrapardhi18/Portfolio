import React from 'react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="education-section section-alt">
      <div className="container">
        <div className="section-label">Qualifications</div>
        <h2 className="section-title">Education & Certifications</h2>

        {/* Degree */}
        <div className="education-grid">
          <div className="edu-card">
            <div className="edu-card-type">Degree</div>
            <h3 className="edu-card-title">Bachelor of Technology — Information Technology</h3>
            <div className="edu-card-institution">RTM Nagpur University</div>
            <div className="edu-card-meta">
              <span>Graduated 2024</span>
              <span className="edu-badge">CGPA 7.7</span>
            </div>
          </div>

          {/* Certifications */}
          <div className="edu-card">
            <div className="edu-card-type">Certifications</div>
            <h3 className="edu-card-title">Professional Certifications</h3>
            <div className="edu-card-institution">Accenture — Forage Virtual Experience</div>
            <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span className="edu-badge" style={{ marginTop: 2, flexShrink: 0 }}>2024</span>
                <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>
                  Project Management &amp; Agile Methodologies
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span className="edu-badge" style={{ marginTop: 2, flexShrink: 0 }}>2024</span>
                <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>
                  Data Analytics Fundamentals
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

