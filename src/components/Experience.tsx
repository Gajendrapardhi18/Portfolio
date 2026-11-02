import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <div>
          <p className="section-label">// professional_experience</p>
          <h2 className="section-title">Work History</h2>
        </div>
      </div>

      {/* Experience */}
      <div className="experience-item" style={{ marginBottom: '2rem' }}>
        <div className="exp-dot-col"><div className="exp-dot" /></div>
        <div className="exp-body">
          <p className="exp-role">Associate .NET Developer</p>
          <p className="exp-company">Dynage Tech Pvt. Ltd.</p>
          <p className="exp-meta">Oct 2024 – Present · Nagpur, Maharashtra, India</p>
          <ul className="exp-achievements">
            <li className="exp-achievement">Built and maintained the DBTM platform deployed across 3+ training centres.</li>
            <li className="exp-achievement">Designed RESTful APIs with JWT-based RBAC and secure endpoints.</li>
            <li className="exp-achievement">Reduced trainee onboarding time by ~40% through automation.</li>
            <li className="exp-achievement">Developed cross-platform Flutter applications for Android and iOS.</li>
            <li className="exp-achievement">Implemented Repository Pattern and Dependency Injection for clean architecture.</li>
            <li className="exp-achievement">Optimised SQL queries and EF Core performance, improving report speed by ~30%.</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="section-header" style={{ marginTop: '0.5rem' }}>
        <div>
          <p className="section-label">// education_certifications</p>
          <h2 className="section-title">Education & Certifications</h2>
        </div>
      </div>
      <div className="edu-cert-grid">
        <div className="edu-block">
          <p className="edu-degree">B.Tech – Information Technology</p>
          <p className="edu-uni">Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur</p>
          <p className="edu-meta">Graduated 2024 · CGPA 7.7</p>
        </div>
        <ul className="cert-list">
          <li className="cert-item">
            <span className="cert-dot">▸</span>
            <span>Project Management Job Simulation<br /><small style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem' }}>Accenture North America · Forage</small></span>
          </li>
          <li className="cert-item">
            <span className="cert-dot">▸</span>
            <span>Data Analytics & Visualization Job Simulation<br /><small style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem' }}>Accenture North America · Forage</small></span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;

