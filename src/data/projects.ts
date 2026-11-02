export interface Project {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  category: 'Professional' | 'Personal / In Development';
  isProfessional: boolean;
  categoryTag: string;
  tech: string[];
  description: string;
  longDescription: string;
  achievements: string[];
}

const projects: Project[] = [
  {
    id: 1,
    number: '01',
    title: 'DBTM – Digital Body Training Management',
    subtitle: 'Enterprise Trainer–Trainee Management Platform',
    category: 'Professional',
    isProfessional: true,
    categoryTag: 'SaaS Platform / Mobile',
    tech: ['.NET Core 7', 'Entity Framework Core', 'SQL Server', 'REST APIs', 'Flutter', 'Dart'],
    description:
      'Full-stack Trainer–Trainee management platform deployed across multiple training centers, handling task assignment, progress tracking, and multi-center data isolation.',
    longDescription:
      'Architected and delivered an enterprise-grade platform with a .NET Core 7 REST API backend and cross-platform Flutter mobile applications for Android & iOS. Applied Clean Architecture with Repository Pattern and Dependency Injection for a testable, loosely coupled codebase.',
    achievements: [
      'Architected full-stack trainer–trainee management platform deployed across multiple training centers',
      'Built cross-platform Flutter application (Android & iOS) integrated with .NET Core backend APIs',
      'Automated trainee registration and profile setup pipeline, reducing manual onboarding steps',
      'Implemented push notification reminder system for task completion and schedule tracking',
      'Applied Dependency Injection and Repository Pattern for loosely coupled, testable architecture',
      'Collaborated with stakeholders to translate business rules into validated API logic',
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Cooperative Banking System',
    subtitle: 'Hierarchical Account Tree & Recursive SQL Engine',
    category: 'Professional',
    isProfessional: true,
    categoryTag: 'Financial Core / Backend',
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
    id: 3,
    number: '03',
    title: 'Gym Management System',
    subtitle: 'Role-Based Operational & Subscription Management API',
    category: 'Professional',
    isProfessional: true,
    categoryTag: 'Operational Backend / RBAC',
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
    id: 4,
    number: '04',
    title: 'Peakspot – Sports Performance Platform',
    subtitle: 'Athletic Telemetry & Workout Analytics Engine',
    category: 'Professional',
    isProfessional: true,
    categoryTag: 'Analytics & Real-Time',
    tech: ['FastAPI', 'Python', 'PostgreSQL', 'PostGIS', 'Supabase', 'WebSocket'],
    description:
      'Athletic telemetry and workout analytics platform designed for real-time tracking, geospatial routing, and structured performance metrics.',
    longDescription:
      'Engineered an API engine leveraging FastAPI and Supabase, storing spatial movement routes with PostgreSQL & PostGIS, and transmitting live telemetry via WebSockets to client applications.',
    achievements: [
      'Designed high-performance RESTful and WebSocket API architecture using FastAPI',
      'Integrated PostgreSQL with PostGIS extension for geospatial route tracing',
      'Built authentication and data layer on Supabase with strict schema integrity',
      'Structured athlete performance data for historical tracking and trend analysis',
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
