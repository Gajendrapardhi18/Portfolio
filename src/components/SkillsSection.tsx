import React from 'react';

const skillGroups = [
  {
    label: 'Backend',
    title: 'Server-Side Development',
    skills: ['.NET Core', 'C#', 'ASP.NET Core', 'Web APIs', 'REST APIs', 'Entity Framework Core', 'xUnit'],
  },
  {
    label: 'Mobile',
    title: 'Cross-Platform Mobile',
    skills: ['Flutter', 'Dart', 'Riverpod', 'BLE / Bluetooth', 'Android', 'iOS'],
  },
  {
    label: 'Database',
    title: 'Data & Storage',
    skills: ['SQL Server', 'PostgreSQL', 'PostGIS', 'Supabase', 'Stored Procedures', 'Recursive CTE'],
  },
  {
    label: 'Architecture',
    title: 'Design & Architecture',
    skills: ['Clean Architecture', 'Repository Pattern', 'Dependency Injection', 'RBAC', 'JWT Auth', 'WebSocket'],
  },
  {
    label: 'APIs & Services',
    title: 'APIs & External Services',
    skills: ['FastAPI', 'Python', 'Push Notifications', 'Supabase Auth', 'REST', 'API Design'],
  },
  {
    label: 'Tools',
    title: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Postman', 'Agile / Scrum'],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-label">Technical Expertise</div>
        <h2 className="section-title">Skills</h2>
        <p className="section-desc">
          Technologies and tools I work with across backend, mobile, and data layers.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-group-card">
              <div className="skill-group-label">{group.label}</div>
              <div className="skill-group-title">{group.title}</div>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
