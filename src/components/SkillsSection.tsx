import React from 'react';

const technicalSkills = [
  { name: 'Backend Systems (.NET Core / C# / EF Core)', level: 92 },
  { name: 'Cross-Platform Mobile (Flutter / Dart)', level: 88 },
  { name: 'Database Architecture & CTE Optimization', level: 90 },
  { name: 'RESTful API Engineering & RBAC Security', level: 94 },
  { name: 'Clean Architecture & SOLID Principles', level: 90 },
  { name: 'Unit Testing & Quality Assurance (xUnit)', level: 85 },
];

const specializations = [
  { title: 'Scalable Backend & REST API Development', tag: '.NET Core 7/8' },
  { title: 'Cross-Platform Mobile Apps (Android & iOS)', tag: 'Flutter / Dart' },
  { title: 'Recursive SQL Logic & CTE Hierarchies', tag: 'SQL Server' },
  { title: 'Role-Based Access Control (RBAC) & JWT', tag: 'API Security' },
  { title: 'Repository Pattern & Loose Coupling (DI)', tag: 'Architecture' },
  { title: 'Database Optimization & Stored Procedures', tag: '30% Faster Reports' },
];

const toolsList = [
  'Visual Studio 2022',
  'Git & GitHub',
  'Android Studio',
  'SSMS (SQL Server)',
  'Postman',
  'Swagger / OpenAPI',
  'VS Code',
  'xUnit Test Runner',
  'Docker',
  'Supabase & PostgreSQL',
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="technical-overview-section">
      <div className="three-col-grid">
        {/* Column 1: Technical Skills with Progress Bars matching reference */}
        <div className="overview-card skills-col">
          <div className="card-header-mono">
            <span className="icon-code">&lt;/&gt;</span> TECHNICAL SKILLS
          </div>

          <div className="skills-bars-list">
            {technicalSkills.map((sk) => (
              <div key={sk.name} className="skill-bar-row">
                <div className="skill-bar-meta">
                  <span className="skill-name">{sk.name}</span>
                  <span className="skill-pct">{sk.level}%</span>
                </div>
                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{ width: `${sk.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Specializations with Arrows matching reference */}
        <div className="overview-card services-col">
          <div className="card-header-mono">
            <span className="icon-cube">⬡</span> CORE SPECIALIZATIONS
          </div>

          <div className="specializations-list">
            {specializations.map((spec) => (
              <div key={spec.title} className="spec-item">
                <div className="spec-info">
                  <span className="spec-title">{spec.title}</span>
                  <span className="spec-tag">{spec.tag}</span>
                </div>
                <span className="spec-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Tools I Use matching reference */}
        <div className="overview-card tools-col">
          <div className="card-header-mono">
            <span className="icon-tool">🛠</span> TOOLS I USE
          </div>

          <div className="tools-grid-list">
            {toolsList.map((tool) => (
              <div key={tool} className="tool-item">
                <span className="tool-bullet">▹</span>
                <span className="tool-text">{tool}</span>
              </div>
            ))}
          </div>

          <div className="education-micro-box">
            <div className="micro-heading">// EDUCATION &amp; CERTS</div>
            <div className="micro-body">
              <strong>B.Tech in IT</strong> (2024, CGPA 7.7)<br />
              <span className="micro-sub">Rashtrasant Tukadoji Maharaj Nagpur Univ.</span><br />
              <span className="micro-cert">Accenture Job Simulations (Forage)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

