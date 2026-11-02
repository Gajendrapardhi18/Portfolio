export interface Project {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  category: 'Professional' | 'Personal / In Development';
  isProfessional: boolean;
  categoryTag: string;
  appType?: string;
  tech: string[];
  description: string;
  longDescription: string;
  achievements: string[];
  // Enhanced Case Study fields
  purpose?: string;
  responsibilities?: string[];
  architecture?: string[];
  deviceIntegration?: string[];
  technicalChallenges?: string[];
  projectStatus?: string;
  accuracyNote?: string;
}

const projects: Project[] = [
  {
    id: 1,
    number: '01',
    title: 'Peakspot — Sports Performance Platform',
    subtitle: 'Sports Performance Mobile Platform & BLE Device Integration',
    category: 'Professional',
    isProfessional: true,
    categoryTag: 'Flutter & Hardware Device Integration',
    appType: 'Flutter Mobile App',
    tech: [
      'Flutter',
      'Dart',
      'Bluetooth Low Energy (BLE)',
      'WebSockets',
      'Device Integration',
      'OTA Firmware Updates',
      'REST APIs',
    ],
    description:
      'Sports performance mobile platform involving communication between the Flutter mobile application and external sports measurement devices via Bluetooth Low Energy (BLE) and WebSockets.',
    longDescription:
      'Developed a Flutter mobile application companion for external athletic measurement hardware. Implemented end-to-end device connection lifecycles over BLE and WebSockets, including hardware discovery, provisioning, live connection diagnostics, ping/pong heartbeat monitoring, and application-side Over-The-Air (OTA) firmware update workflows.',
    purpose:
      'Designed to bridge external athletic measurement hardware with a modern mobile interface, enabling coaches and athletes to discover nearby devices, establish low-latency telemetry feeds, monitor hardware connection status, and maintain firmware directly from their mobile devices.',
    responsibilities: [
      'Developed Flutter mobile application screens for hardware scanning, device provisioning, and live telemetry.',
      'Built Bluetooth Low Energy (BLE) scanning, service discovery, and pairing workflows.',
      'Implemented WebSocket-based device communication for low-latency telemetry and sensor data streaming.',
      'Implemented real-time device connection status monitoring with visual connection indicators.',
      'Engineered ping/pong heartbeat protocols and resilient disconnect/reconnect handling on signal loss.',
      'Integrated Over-The-Air (OTA) firmware update workflow on the mobile application side.',
      'Handled raw device data parsing, packet validation, and reactive application state integration.',
    ],
    architecture: [
      'Stream-driven hardware communication architecture using Dart async Streams and StreamControllers.',
      'Reactive Riverpod state providers managing device lifecycle states (Disconnected, Connecting, Connected, Streaming, Updating).',
      'Modular hardware communication layer decoupling protocol parsing from UI rendering.',
    ],
    deviceIntegration: [
      'BLE service and characteristic discovery, MTU negotiation, and notification subscription pipelines.',
      'WebSocket bi-directional messaging with ping/pong keepalive frames for connection health tracking.',
      'Mobile-side OTA firmware update workflow: file chunking, transfer monitoring, progress bar UI, and checksum verification.',
    ],
    technicalChallenges: [
      'Connection resilience: Managed erratic Bluetooth signal drops in active training venues with state recovery mechanisms.',
      'High-frequency data streams: Efficiently throttled and batched incoming hardware packets to prevent UI frame stutter.',
      'Firmware transfer integrity: Engineered chunked binary transmission pipelines with transfer progress tracking.',
    ],
    accuracyNote:
      'Engineering Status Disclosure: Over-The-Air (OTA) firmware update workflows and device telemetry pipelines were integrated into the mobile app interface; full end-to-end device deployment and field validation remain under active engineering verification. Force plate hardware integration is exploratory and not complete.',
    projectStatus:
      'Professional engineering project; core mobile connection architecture and device telemetry workflows functional in internal test cycles with ongoing firmware update verification.',
    achievements: [
      'Developed Flutter mobile application interface for athletic measurement device management',
      'Engineered Bluetooth Low Energy (BLE) scanning, service discovery, and device provisioning',
      'Implemented WebSocket-based device communication and high-frequency telemetry data handling',
      'Designed connection status monitoring with ping/pong heartbeat and reconnect resilience',
      'Integrated application-side Over-The-Air (OTA) firmware update transfer workflows',
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'DBTM — Digital Body Training Management',
    subtitle: 'Cross-Platform Sports Training & Athlete Performance Application',
    category: 'Professional',
    isProfessional: true,
    categoryTag: 'Flutter Mobile & Full-Stack Platform',
    appType: 'Flutter Mobile & Backend',
    tech: [
      'Flutter',
      'Dart',
      'Riverpod',
      'Dio',
      'WebSocket',
      'ASP.NET Core',
      'SQL Server',
      'REST APIs',
    ],
    description:
      'Cross-platform sports training management mobile application supporting trainers and trainees with training assignments, batch and camp management, athlete testing, performance tracking, and dynamic reporting.',
    longDescription:
      'Engineered a cross-platform mobile training management application with Flutter and Dart, backed by an ASP.NET Core REST API and WebSocket architecture. The app provides trainers and athletes with streamlined digital workflows for session planning, batch tracking, physical assessment testing, and real-time training analytics.',
    purpose:
      'Developed to replace manual paper logs and fragmented spreadsheets with a centralized, real-time sports training management application across training facilities. The mobile client delivers dedicated workflows for coaches to manage batches, schedule training drills, track athletic metrics, and export performance reports directly from their mobile devices.',
    responsibilities: [
      'Developed cross-platform Flutter application screens and reusable UI component architecture across Android and iOS.',
      'Integrated ASP.NET Core REST APIs using Dio with custom interceptors for authentication tokens and structured error handling.',
      'Implemented robust reactive application state management using Riverpod (StateNotifier and Providers).',
      'Engineered tailored trainer and trainee workflows with role-specific navigation, privileges, and screen layouts.',
      'Implemented batch, camp, assignment, and multi-activity selection workflows with comprehensive validation.',
      'Developed athlete testing result screens with dynamic inputs for physical measurement metrics and calculated scores.',
      'Integrated dynamic report generation pipelines with PDF and Excel downloads and native mobile sharing.',
      'Implemented interactive performance charts and trend visualization using Flutter charting libraries.',
      'Worked on WebSocket device communication, live connection status monitoring, and reconnect/disconnect handling.',
      'Optimized application performance through widget rebuild minimization, async state caching, and cross-platform debugging.',
    ],
    architecture: [
      'Clean feature-first modular folder structure separating UI presentation, domain entities, and data providers.',
      'Encapsulated networking layer via Dio with request interceptors, response transformers, and cancellation tokens.',
      'Predictable, immutable state management using Riverpod with fine-grained UI rebuild subscriptions.',
      'Cross-platform Flutter charting integration for historical athletic progress and drill evaluation curves.',
    ],
    deviceIntegration: [
      'WebSocket real-time communication for bidirectional messaging between the mobile client and training devices.',
      'Heartbeat connection monitoring with automated exponential backoff on network disconnections.',
      'Real-time synchronization of active training session progress across trainer and trainee interfaces.',
    ],
    technicalChallenges: [
      'Complex multi-metric input validation: Built dynamic evaluation forms handling variable athletic assessment scales with real-time score computation.',
      'Mobile report export: Implemented in-app document generation enabling coaches to download and share structured PDF/Excel training summaries on the go.',
      'Network resilience: Ensured seamless state recovery and optimistic UI updates during training facility Wi-Fi/cellular transitions.',
    ],
    projectStatus:
      'Professional production application deployed in operational sports training facilities; ongoing development for advanced analytics workflows.',
    achievements: [
      'Developed cross-platform Flutter mobile application supporting trainers and trainees across training centers',
      'Implemented Riverpod reactive state management for predictable data flow and fast UI rendering',
      'Integrated ASP.NET Core REST APIs via Dio with token interceptors and robust error handling',
      'Engineered batch, camp, assignment, and athlete testing result workflows with dynamic validation',
      'Integrated dynamic PDF and Excel report generation with native mobile sharing capabilities',
      'Implemented real-time WebSocket connection monitoring and disconnect/reconnect handling',
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Cooperative Banking System',
    subtitle: 'Hierarchical Account Tree & Recursive SQL Engine',
    category: 'Professional',
    isProfessional: true,
    categoryTag: 'Financial Core / Backend',
    appType: 'Backend API & Database',
    tech: ['.NET Core', 'Entity Framework Core', 'SQL Server', 'Recursive CTE', 'REST APIs'],
    description:
      'Recursive tree-structured Account Management module supporting unlimited parent-child account nodes across asset and liability categories with transactional integrity.',
    longDescription:
      'Engineered an enterprise financial hierarchy using Common Table Expressions (CTE) in SQL Server. Optimized EF Core mappings using execution plan analysis and built bulk transaction stored procedures with rollback safety to ensure data integrity across operations.',
    achievements: [
      'Built recursive tree-structured account management module supporting unlimited account hierarchy depth',
      'Implemented CTE-based recursive SQL logic, replacing fragile iterative approaches',
      'Optimized SQL queries and EF Core mappings using execution plan analysis',
      'Designed Stored Procedures for bulk account operations ensuring transactional integrity',
      'Integrated backend APIs with front-end tree-view for auditor drill-down workflows',
      'Enforced strict account hierarchy validation at the API layer before database writes',
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Gym Management System',
    subtitle: 'Role-Based Operational & Subscription Management API',
    category: 'Professional',
    isProfessional: true,
    categoryTag: 'Operational Backend / RBAC',
    appType: 'Backend API & RBAC',
    tech: ['.NET Core', 'Entity Framework Core', 'SQL Server', 'REST APIs', 'JWT', 'xUnit'],
    description:
      'REST API system covering member registration, subscription lifecycle, health metrics tracking, and role-based access for daily gym operations.',
    longDescription:
      'Implemented JWT-based Role-Based Access Control (Admin, Trainer, Member), comprehensive server-side input validation, business rule enforcement, and automated regression testing via xUnit in an Agile team environment.',
    achievements: [
      'Developed REST API endpoints covering member lifecycle and health metric tracking',
      'Implemented Role-Based Access Control (RBAC) using JWT across Admin, Trainer, and Member roles',
      'Enforced comprehensive server-side input validation and business rule checks',
      'Wrote unit tests using xUnit to improve system regression reliability',
      'Collaborated in a 3-member Agile team delivering sprint integrations on time',
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'Attendance Management SaaS',
    subtitle: 'Cross-Platform Proximity Attendance Tracking',
    category: 'Personal / In Development',
    isProfessional: false,
    categoryTag: 'Mobile App & IoT',
    appType: 'Flutter Mobile & IoT',
    tech: ['Flutter', 'Dart', 'Riverpod', 'Bluetooth BLE', 'Supabase', 'PostgreSQL'],
    description:
      'Cross-platform Flutter application for proximity-verified employee attendance using Bluetooth beacons, real-time sync, and multi-tenant admin dashboards.',
    longDescription:
      'Currently in active development: features BLE (Bluetooth Low Energy) beacon detection to automate clock-in upon physical office arrival, powered by Riverpod state management and a cloud database backend.',
    achievements: [
      'Building cross-platform mobile frontend with Flutter & Dart for Android and iOS',
      'Implementing BLE proximity scanning for contactless check-in validation',
      'Architecting reactive global state and offline caching using Riverpod',
      'Designing multi-tenant database models in PostgreSQL via Supabase',
    ],
  },
];

export default projects;
