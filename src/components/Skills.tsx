import React from 'react';

const skillGroups = [
  {
    label: 'Languages',
    skills: ['C#', 'Dart', 'JavaScript', 'HTML', 'CSS', 'Python'],
  },
  {
    label: 'Frameworks',
    skills: ['.NET Core 7/8', 'ASP.NET MVC', 'EF Core', 'Flutter', 'Bootstrap', 'FastAPI'],
  },
  {
    label: 'APIs & Auth',
    skills: ['RESTful APIs', 'JWT', 'Swagger', 'AJAX', 'WebSocket'],
  },
  {
    label: 'Databases',
    skills: ['SQL Server', 'PostgreSQL', 'Supabase', 'PostGIS', 'LINQ', 'SSMS'],
  },
  {
    label: 'Mobile',
    skills: ['Flutter (Android/iOS)', 'Dart', 'Provider', 'Riverpod', 'JSON Parsing', 'Bluetooth'],
  },
  {
    label: 'Architecture',
    skills: ['SOLID Principles', 'Repository Pattern', 'Clean Architecture', 'DI', 'Agile/Scrum'],
  },
  {
    label: 'Testing & Tools',
    skills: ['xUnit', 'Postman', 'Visual Studio', 'Git', 'Android Studio'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="section-header">
        <div>
          <p className="section-label">// technical_skills</p>
          <h2 className="section-title">Technology Stack</h2>
        </div>
      </div>
      <div className="skills-grid">
        {skillGroups.map(group => (
          <div className="skill-group" key={group.label}>
            <div className="skill-group-label">{group.label}</div>
            <div className="skill-tags">
              {group.skills.map(s => <span className="tag" key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

