import React from 'react';

interface Props {
  type: 'dashboard' | 'banking' | 'gym' | 'sports' | 'attendance';
  title?: string;
}

export const ProjectMockup: React.FC<Props> = ({ type, title = 'Application' }) => {
  return (
    <div className={`mockup-container mockup-${type}`} aria-label={`Illustrative preview of ${title}`}>
      {type === 'dashboard' && (
        <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="mockup-svg">
          <rect width="360" height="200" fill="#0d1110" rx="6" />
          {/* Top Window Bar */}
          <rect x="0" y="0" width="360" height="22" fill="#141c18" />
          <circle cx="14" cy="11" r="3.5" fill="#2d3732" />
          <circle cx="25" cy="11" r="3.5" fill="#2d3732" />
          <circle cx="36" cy="11" r="3.5" fill="#00e575" fillOpacity="0.7" />
          <text x="50" y="14" fill="#6e7d76" fontSize="8" fontFamily="monospace">DBTM // Trainer-Trainee Hub</text>

          {/* Left Mini Sidebar */}
          <rect x="8" y="30" width="44" height="160" rx="4" fill="#111714" />
          <rect x="14" y="38" width="32" height="6" rx="2" fill="#00e575" fillOpacity="0.4" />
          <rect x="14" y="52" width="28" height="4" rx="2" fill="#2d3732" />
          <rect x="14" y="62" width="24" height="4" rx="2" fill="#2d3732" />
          <rect x="14" y="72" width="30" height="4" rx="2" fill="#2d3732" />

          {/* Stat Cards */}
          <rect x="60" y="30" width="90" height="42" rx="4" fill="#141c18" stroke="#1f2a24" strokeWidth="1" />
          <text x="68" y="44" fill="#8e9c95" fontSize="8" fontFamily="sans-serif">Active Trainees</text>
          <text x="68" y="62" fill="#00e575" fontSize="15" fontWeight="bold" fontFamily="monospace">148</text>

          <rect x="158" y="30" width="90" height="42" rx="4" fill="#141c18" stroke="#1f2a24" strokeWidth="1" />
          <text x="166" y="44" fill="#8e9c95" fontSize="8" fontFamily="sans-serif">Completion Rate</text>
          <text x="166" y="62" fill="#f3f4f6" fontSize="15" fontWeight="bold" fontFamily="monospace">94.2%</text>

          <rect x="256" y="30" width="94" height="42" rx="4" fill="#141c18" stroke="#1f2a24" strokeWidth="1" />
          <text x="264" y="44" fill="#8e9c95" fontSize="8" fontFamily="sans-serif">Centers Synced</text>
          <text x="264" y="62" fill="#00e575" fontSize="15" fontWeight="bold" fontFamily="monospace">3 Centers</text>

          {/* Chart Area */}
          <rect x="60" y="80" width="290" height="110" rx="4" fill="#121815" stroke="#1a241f" strokeWidth="1" />
          <text x="70" y="96" fill="#8e9c95" fontSize="9" fontFamily="monospace">TRAINING TELEMETRY & PROGRESS</text>
          {/* Grid lines */}
          <line x1="70" y1="120" x2="340" y2="120" stroke="#1a241f" strokeDasharray="3 3" />
          <line x1="70" y1="145" x2="340" y2="145" stroke="#1a241f" strokeDasharray="3 3" />
          <line x1="70" y1="170" x2="340" y2="170" stroke="#1a241f" strokeDasharray="3 3" />
          {/* Chart area line */}
          <path d="M70 165 Q110 140 150 150 T230 115 T310 100 T340 95" fill="none" stroke="#00e575" strokeWidth="2.5" />
          <path d="M70 165 Q110 140 150 150 T230 115 T310 100 T340 95 L340 180 L70 180 Z" fill="url(#emeraldGrad)" opacity="0.15" />
          <defs>
            <linearGradient id="emeraldGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00e575" />
              <stop offset="100%" stopColor="#00e575" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      )}

      {type === 'banking' && (
        <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="mockup-svg">
          <rect width="360" height="200" fill="#0a0e0c" rx="6" />
          <rect x="0" y="0" width="360" height="22" fill="#121a16" />
          <circle cx="14" cy="11" r="3.5" fill="#28332d" />
          <circle cx="25" cy="11" r="3.5" fill="#28332d" />
          <circle cx="36" cy="11" r="3.5" fill="#00e575" fillOpacity="0.7" />
          <text x="50" y="14" fill="#6e7d76" fontSize="8" fontFamily="monospace">CoreBanking // CTE Recursive Account Hierarchy</text>

          {/* Tree View Structure */}
          <rect x="14" y="32" width="332" height="156" rx="4" fill="#101713" stroke="#1c2721" strokeWidth="1" />
          <text x="24" y="48" fill="#00e575" fontSize="9" fontFamily="monospace">▼ [ROOT] COOPERATIVE GENERAL LEDGER (500+ NODES)</text>

          {/* Level 1 Node */}
          <line x1="32" y1="56" x2="32" y2="155" stroke="#233229" strokeWidth="1.5" />
          <line x1="32" y1="68" x2="48" y2="68" stroke="#233229" strokeWidth="1.5" />
          <rect x="52" y="60" width="280" height="18" rx="3" fill="#16221c" stroke="#25352c" strokeWidth="1" />
          <text x="60" y="72" fill="#e5e7eb" fontSize="8" fontFamily="monospace">▶ 1000 — ASSETS (LIQUID & FIXED RESERVES)</text>
          <text x="270" y="72" fill="#00e575" fontSize="8" fontFamily="monospace">$48.2M BAL</text>

          {/* Level 2 Sub-nodes */}
          <line x1="32" y1="92" x2="64" y2="92" stroke="#233229" strokeWidth="1.5" />
          <line x1="64" y1="92" x2="64" y2="135" stroke="#233229" strokeWidth="1.5" />
          <rect x="68" y="84" width="264" height="18" rx="3" fill="#131c17" stroke="#1d2a22" strokeWidth="1" />
          <text x="76" y="96" fill="#9ca3af" fontSize="8" fontFamily="monospace">▼ 1100 — Current Assets & Vault Cash</text>
          <text x="270" y="96" fill="#8e9c95" fontSize="8" fontFamily="monospace">$12.4M</text>

          <line x1="64" y1="114" x2="80" y2="114" stroke="#233229" strokeWidth="1.5" />
          <rect x="84" y="106" width="248" height="18" rx="3" fill="#17241e" />
          <text x="92" y="118" fill="#d1d5db" fontSize="8" fontFamily="monospace">• 1110.04 Vault Central Reserve — Verified</text>
          <text x="270" y="118" fill="#00e575" fontSize="8" fontFamily="monospace">ACTIVE</text>

          {/* Level 1 Node 2 */}
          <line x1="32" y1="140" x2="48" y2="140" stroke="#233229" strokeWidth="1.5" />
          <rect x="52" y="132" width="280" height="18" rx="3" fill="#16221c" stroke="#25352c" strokeWidth="1" />
          <text x="60" y="144" fill="#e5e7eb" fontSize="8" fontFamily="monospace">▶ 2000 — LIABILITIES & MEMBER DEPOSITS</text>
          <text x="270" y="144" fill="#00e575" fontSize="8" fontFamily="monospace">$39.8M BAL</text>

          <rect x="24" y="162" width="312" height="18" rx="2" fill="#0c120f" />
          <text x="32" y="174" fill="#526058" fontSize="7.5" fontFamily="monospace">EXEC_TIME: 14ms | CTE_DEPTH: UNLIMITED | TRANSACTION_ROLLBACK: SAFE</text>
        </svg>
      )}

      {type === 'gym' && (
        <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="mockup-svg">
          <rect width="360" height="200" fill="#0d1110" rx="6" />
          <rect x="0" y="0" width="360" height="22" fill="#141c18" />
          <circle cx="14" cy="11" r="3.5" fill="#2d3732" />
          <circle cx="25" cy="11" r="3.5" fill="#2d3732" />
          <circle cx="36" cy="11" r="3.5" fill="#00e575" fillOpacity="0.7" />
          <text x="50" y="14" fill="#6e7d76" fontSize="8" fontFamily="monospace">GymAPI // Member & Subscription Operations (RBAC)</text>

          {/* RBAC Role Badges */}
          <rect x="14" y="30" width="102" height="26" rx="4" fill="#17221c" stroke="#24332b" strokeWidth="1" />
          <circle cx="24" cy="43" r="4" fill="#00e575" />
          <text x="34" y="46" fill="#f3f4f6" fontSize="8" fontFamily="monospace">ADMIN [FULL]</text>

          <rect x="122" y="30" width="106" height="26" rx="4" fill="#131b17" stroke="#1f2c25" strokeWidth="1" />
          <circle cx="132" cy="43" r="4" fill="#3b82f6" />
          <text x="142" y="46" fill="#f3f4f6" fontSize="8" fontFamily="monospace">TRAINER [STAFF]</text>

          <rect x="234" y="30" width="112" height="26" rx="4" fill="#131b17" stroke="#1f2c25" strokeWidth="1" />
          <circle cx="244" cy="43" r="4" fill="#eab308" />
          <text x="254" y="46" fill="#f3f4f6" fontSize="8" fontFamily="monospace">MEMBER [APP]</text>

          {/* Member Table Mock */}
          <rect x="14" y="64" width="332" height="124" rx="4" fill="#111714" stroke="#1b2520" strokeWidth="1" />
          <text x="24" y="80" fill="#6e7d76" fontSize="8" fontFamily="monospace">MEMBER ID</text>
          <text x="96" y="80" fill="#6e7d76" fontSize="8" fontFamily="monospace">NAME / TIER</text>
          <text x="194" y="80" fill="#6e7d76" fontSize="8" fontFamily="monospace">EXPIRY</text>
          <text x="280" y="80" fill="#6e7d76" fontSize="8" fontFamily="monospace">STATUS</text>

          {/* Row 1 */}
          <rect x="20" y="88" width="320" height="22" rx="3" fill="#16201b" />
          <text x="26" y="102" fill="#00e575" fontSize="8" fontFamily="monospace">#MBR-9021</text>
          <text x="96" y="102" fill="#f3f4f6" fontSize="8" fontFamily="sans-serif">Vikram Shah [Pro]</text>
          <text x="194" y="102" fill="#8e9c95" fontSize="8" fontFamily="monospace">2027-10-14</text>
          <rect x="280" y="93" width="50" height="13" rx="2" fill="#00e575" fillOpacity="0.2" />
          <text x="290" y="102" fill="#00e575" fontSize="7.5" fontFamily="monospace">ACTIVE</text>

          {/* Row 2 */}
          <rect x="20" y="114" width="320" height="22" rx="3" fill="#131c18" />
          <text x="26" y="128" fill="#00e575" fontSize="8" fontFamily="monospace">#MBR-9022</text>
          <text x="96" y="128" fill="#f3f4f6" fontSize="8" fontFamily="sans-serif">Anita Rao [Basic]</text>
          <text x="194" y="128" fill="#8e9c95" fontSize="8" fontFamily="monospace">2026-12-01</text>
          <rect x="280" y="119" width="50" height="13" rx="2" fill="#00e575" fillOpacity="0.2" />
          <text x="290" y="128" fill="#00e575" fontSize="7.5" fontFamily="monospace">ACTIVE</text>

          {/* Row 3 */}
          <rect x="20" y="140" width="320" height="22" rx="3" fill="#16201b" />
          <text x="26" y="154" fill="#00e575" fontSize="8" fontFamily="monospace">#MBR-9023</text>
          <text x="96" y="154" fill="#f3f4f6" fontSize="8" fontFamily="sans-serif">Karan Patel [Elite]</text>
          <text x="194" y="154" fill="#8e9c95" fontSize="8" fontFamily="monospace">2026-11-20</text>
          <rect x="280" y="145" width="50" height="13" rx="2" fill="#f59e0b" fillOpacity="0.2" />
          <text x="287" y="154" fill="#f59e0b" fontSize="7.5" fontFamily="monospace">RENEWAL</text>
        </svg>
      )}

      {type === 'sports' && (
        <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="mockup-svg">
          <rect width="360" height="200" fill="#0b0e12" rx="6" />
          <rect x="0" y="0" width="360" height="22" fill="#111720" />
          <circle cx="14" cy="11" r="3.5" fill="#243142" />
          <circle cx="25" cy="11" r="3.5" fill="#243142" />
          <circle cx="36" cy="11" r="3.5" fill="#00e575" fillOpacity="0.7" />
          <text x="50" y="14" fill="#677c95" fontSize="8" fontFamily="monospace">Peakspot // Real-Time Athletic Telemetry & PostGIS</text>

          {/* Metric telemetry widgets */}
          <rect x="14" y="30" width="102" height="46" rx="4" fill="#121a24" stroke="#1d2b3a" strokeWidth="1" />
          <text x="22" y="44" fill="#8499b2" fontSize="8" fontFamily="sans-serif">Avg Pace</text>
          <text x="22" y="64" fill="#00e575" fontSize="15" fontWeight="bold" fontFamily="monospace">4:18 /km</text>

          <rect x="122" y="30" width="102" height="46" rx="4" fill="#121a24" stroke="#1d2b3a" strokeWidth="1" />
          <text x="130" y="44" fill="#8499b2" fontSize="8" fontFamily="sans-serif">Heart Rate</text>
          <text x="130" y="64" fill="#f43f5e" fontSize="15" fontWeight="bold" fontFamily="monospace">164 bpm</text>

          <rect x="230" y="30" width="116" height="46" rx="4" fill="#121a24" stroke="#1d2b3a" strokeWidth="1" />
          <text x="238" y="44" fill="#8499b2" fontSize="8" fontFamily="sans-serif">Elevation Gain</text>
          <text x="238" y="64" fill="#38bdf8" fontSize="15" fontWeight="bold" fontFamily="monospace">+410 m</text>

          {/* Route Map and Elevation Path */}
          <rect x="14" y="84" width="332" height="104" rx="4" fill="#0f151e" stroke="#1b2533" strokeWidth="1" />
          <text x="24" y="98" fill="#677c95" fontSize="8" fontFamily="monospace">POSTGIS GPS ROUTE TELEMETRY STREAM [LIVE_WS]</text>
          {/* Simulated route curve */}
          <path d="M24 165 C70 110, 100 170, 160 130 S240 100, 330 145" fill="none" stroke="#00e575" strokeWidth="2.5" />
          <circle cx="24" cy="165" r="4" fill="#00e575" />
          <circle cx="160" cy="130" r="3" fill="#38bdf8" />
          <circle cx="330" cy="145" r="4" fill="#f43f5e" />
          <rect x="24" y="174" width="310" height="8" rx="2" fill="#141c28" />
        </svg>
      )}

      {type === 'attendance' && (
        <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="mockup-svg">
          <rect width="360" height="200" fill="#0d1110" rx="6" />
          <rect x="0" y="0" width="360" height="22" fill="#141c18" />
          <circle cx="14" cy="11" r="3.5" fill="#2d3732" />
          <circle cx="25" cy="11" r="3.5" fill="#2d3732" />
          <circle cx="36" cy="11" r="3.5" fill="#00e575" fillOpacity="0.7" />
          <text x="50" y="14" fill="#6e7d76" fontSize="8" fontFamily="monospace">AttendanceSaaS // Mobile BLE & Proximity Verification</text>

          {/* Phone Frame representation */}
          <rect x="130" y="30" width="100" height="160" rx="8" fill="#141c18" stroke="#00e575" strokeWidth="1.5" />
          <rect x="160" y="34" width="40" height="4" rx="2" fill="#232f28" />

          {/* BLE Pulse circles */}
          <circle cx="180" cy="90" r="28" stroke="#00e575" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
          <circle cx="180" cy="90" r="18" stroke="#00e575" strokeWidth="1" strokeOpacity="0.6" />
          <circle cx="180" cy="90" r="8" fill="#00e575" />

          <text x="180" y="130" textAnchor="middle" fill="#f3f4f6" fontSize="8" fontFamily="sans-serif" fontWeight="bold">BEACON DETECTED</text>
          <text x="180" y="142" textAnchor="middle" fill="#00e575" fontSize="7" fontFamily="monospace">HQ Main Entrance</text>
          <rect x="146" y="152" width="68" height="16" rx="3" fill="#00e575" />
          <text x="180" y="163" textAnchor="middle" fill="#000000" fontSize="7.5" fontFamily="monospace" fontWeight="bold">CLOCK IN</text>

          {/* Side Info */}
          <text x="18" y="55" fill="#8e9c95" fontSize="8" fontFamily="monospace">BLE PROTOCOL</text>
          <text x="18" y="70" fill="#f3f4f6" fontSize="10" fontFamily="monospace">Proximity OK</text>
          <text x="18" y="90" fill="#8e9c95" fontSize="8" fontFamily="monospace">MULTI-TENANT</text>
          <text x="18" y="105" fill="#00e575" fontSize="10" fontFamily="monospace">PostgreSQL</text>

          <text x="246" y="55" fill="#8e9c95" fontSize="8" fontFamily="monospace">STATE MGMT</text>
          <text x="246" y="70" fill="#f3f4f6" fontSize="10" fontFamily="monospace">Riverpod</text>
          <text x="246" y="90" fill="#8e9c95" fontSize="8" fontFamily="monospace">SYNC ENGINE</text>
          <text x="246" y="105" fill="#00e575" fontSize="10" fontFamily="monospace">Realtime DB</text>
        </svg>
      )}
      <div className="mockup-caption">// ILLUSTRATIVE ARCHITECTURE VISUAL · NON-CONFIDENTIAL</div>
    </div>
  );
};

