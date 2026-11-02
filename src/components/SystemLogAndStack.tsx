import React, { useState, useEffect } from 'react';

export const SystemLogAndStack: React.FC = () => {
  const [timestamp, setTimestamp] = useState('21:19:32');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      setTimestamp(`${h}:${m}:${s}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="system-stack-bar">
      {/* System Log Card */}
      <div className="log-panel">
        <div className="panel-title">
          <span className="tech-prompt">&gt;</span> SYSTEM_LOG
        </div>
        <div className="log-entries">
          <div className="log-line">
            <span className="log-time">[{timestamp}]</span> <span className="log-msg">Portfolio core mounted</span>
          </div>
          <div className="log-line">
            <span className="log-time">[{timestamp}]</span> <span className="log-msg">.NET Core 8 &amp; Flutter modules active</span>
          </div>
          <div className="log-line">
            <span className="log-time">[{timestamp}]</span> <span className="log-msg text-emerald">Ready for collaboration</span>
          </div>
        </div>
      </div>

      {/* Tech Stack Icons Card */}
      <div className="stack-panel">
        <div className="panel-title">
          <span className="tech-prompt">&gt;</span> CORE_TECH_STACK
        </div>
        <div className="stack-badges-grid">
          <div className="stack-item" title=".NET Core 7/8 Backend">
            <span className="stack-symbol">.NET</span>
            <span className="stack-name">C# / Core</span>
          </div>
          <div className="stack-item" title="Flutter Cross-Platform Mobile">
            <span className="stack-symbol">FL</span>
            <span className="stack-name">Flutter / Dart</span>
          </div>
          <div className="stack-item" title="SQL Server & Query Optimization">
            <span className="stack-symbol">SQL</span>
            <span className="stack-name">SQL Server</span>
          </div>
          <div className="stack-item" title="Entity Framework Core">
            <span className="stack-symbol">EF</span>
            <span className="stack-name">EF Core</span>
          </div>
          <div className="stack-item" title="RESTful & RBAC APIs">
            <span className="stack-symbol">API</span>
            <span className="stack-name">REST / JWT</span>
          </div>
          <div className="stack-item" title="FastAPI & Python">
            <span className="stack-symbol">PY</span>
            <span className="stack-name">Python / FastAPI</span>
          </div>
          <div className="stack-item" title="PostgreSQL & PostGIS">
            <span className="stack-symbol">PG</span>
            <span className="stack-name">Postgres</span>
          </div>
        </div>
      </div>
    </div>
  );
};

