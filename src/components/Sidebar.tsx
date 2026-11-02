import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      {/* Logo / Monogram */}
      <div className="logo">
        <div className="logo-mark">GP</div>
        <div className="logo-name">
          Gajendra<br />Pardhi
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <a href="#about">// about</a>
        <a href="#projects">// projects</a>
        <a href="#skills">// skills</a>
        <a href="#experience">// experience</a>
        <a href="#contact">// contact</a>
      </nav>

      {/* Portrait */}
      <div className="portrait-wrapper">
        <img
          src="/assets/gajendra_portrait.jpg"
          alt="Gajendra Pardhi — Full-Stack Software Developer"
        />
      </div>

      {/* Name & title */}
      <p className="profile-name">Gajendra Pardhi</p>
      <p className="profile-title">Full‑Stack Software Developer</p>

      {/* Availability */}
      <div className="availability">
        <span className="availability-dot" />
        Available for projects
      </div>

      {/* Meta info */}
      <ul className="meta-list">
        <li className="meta-item">
          <span className="meta-label">// role</span>
          <span className="meta-value">Associate .NET Developer</span>
        </li>
        <li className="meta-item">
          <span className="meta-label">// company</span>
          <span className="meta-value">Dynage Tech Pvt. Ltd.</span>
        </li>
        <li className="meta-item">
          <span className="meta-label">// location</span>
          <span className="meta-value">Nagpur, Maharashtra, India</span>
        </li>
        <li className="meta-item">
          <span className="meta-label">// experience</span>
          <span className="meta-value">1.5+ Years</span>
        </li>
      </ul>

      {/* Sidebar footer */}
      <div className="sidebar-footer">
        <div>// system_log</div>
        <div>[21:19:32] Initialising portfolio...</div>
        <div>[21:19:33] Loading projects...</div>
        <div>[21:19:34] Ready.</div>
      </div>
    </aside>
  );
};

export default Sidebar;

