export interface ProjectMetric {
  value: string;
  label: string;
}

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
  metrics: ProjectMetric[];
  responsibilities: string[];
  image: string;
  previewType: 'dashboard' | 'banking' | 'gym' | 'sports' | 'attendance';
}

const projects: Project[] = [
  {
    id: 1,
    number: '01',
    title: 'DBTM – Digital Body Training Management',
    subtitle: 'Enterprise Trainer–Trainee Management Platform',
    category: 'Professional',
    isProfessional: true,
    categoryTag: 'SAAS PLATFORM / MOBILE',
    tech: ['.NET Core 7', 'Entity Framework Core', 'SQL Server', 'REST APIs', 'Flutter', 'Dart'],
    description:
      'Full-stack Trainer–Trainee management platform deployed across 3+ training centers, handling task assignment, progress tracking, and multi-center data isolation.',
    longDescription:
      'Architected and delivered an enterprise-grade platform with a .NET Core 7 REST API backend and cross-platform Flutter mobile applications for Android & iOS. Automated the trainee registration pipeline, integrated push notifications, and applied Clean Architecture with Repository Pattern.',
    metrics: [
      { value: '40% ↓', label: 'Trainee Onboarding Time' },
      { value: '25% ↑', label: 'Task Completion Rate' },
      { value: '3+', label: 'Training Centers Deployed' },
    ],
    responsibilities: [
      'Architected full-stack trainer–trainee management platform deployed across 3+ training centers',
      'Built cross-platform Flutter app (Android & iOS) integrated with .NET Core backend APIs',
      'Reduced trainee onboarding time by ~40% through automated registration and profile setup',
      'Implemented push notification reminder system, improving task completion by ~25%',
      'Applied Dependency Injection and Repository Pattern for loosely coupled, testable codebase',
      'Collaborated with stakeholders to translate business rules into validated API logic',
    ],
    image: '/assets/placeholder-project.svg',
    previewType: 'dashboard',
  },
  {
    id: 2,
    number: '02',
    title: 'Cooperative Banking System',
    subtitle: 'Hierarchical Account Tree & Recursive SQL Engine',
    category: 'Professional',
    isProfessional: true,
    categoryTag: 'FINANCIAL CORE / BACKEND',
    tech: ['.NET Core', 'Entity Framework Core', 'SQL Server', 'Recursive CTE', 'REST APIs'],
    description:
      'Recursive tree-structured Account Management module supporting 500+ account nodes across asset and liability categories with zero performance degradation.',
    longDescription:
      'Engineered an enterprise financial tree hierarchy handling unlimited parent-child account depth using Common Table Expressions (CTE) in SQL Server. Optimized EF Core mappings and built bulk transaction stored procedures with rollback safety.',
    metrics: [
      { value: '30% ↑', label: 'Report Generation Speed' },
      { value: '500+', label: 'Account Tree Nodes Supported' },
      { value: '0ms', label: 'Hierarchy Degradation' },
    ],
    responsibilities: [
      'Built recursive tree-structured account management module supporting 500+ account nodes',
      'Implemented CTE-based recursive SQL logic replacing brittle iterative approaches',
      'Optimized SQL queries and EF Core mappings using execution plan analysis (30% speedup)',
      'Designed Stored Procedures for bulk account operations ensuring transactional integrity',
      'Integrated backend APIs with front-end tree-view for auditor drill-downs',
      'Enforced strict account hierarchy validation at the API layer before DB writes',
    ],
    image: '/assets/placeholder-project.svg',
    previewType: 'banking',
  },
  {
    id: 3,
    number: '03',
    title: 'Gym Management System',
    subtitle: 'Role-Based Operational & Subscription Management API',
    category: 'Professional',
    isProfessional: true,
    categoryTag: 'OPERATIONAL BACKEND / RBAC',
    tech: ['.NET Core', 'Entity Framework Core', 'SQL Server', 'REST APIs', 'JWT', 'xUnit'],
    description:
      'Developed 8+ REST API endpoints covering member registration, subscription lifecycle, and health metrics tracking for daily gym operations.',
    longDescription:
      'Implemented JWT-based Role-Based Access Control (Admin, Trainer, Member roles), comprehensive server-side input validation, business rule enforcement, and automated regression testing via xUnit in an Agile environment.',
    metrics: [
      { value: '20% ↓', label: 'Data Entry Error Rate' },
      { value: '8+', label: 'Secure REST Endpoints' },
      { value: '100%', label: 'Sprint Delivery Coverage' },
    ],
    responsibilities: [
      'Developed 8+ REST API endpoints covering member lifecycle and health metric tracking',
      'Implemented Role-Based Access Control (RBAC) using JWT across Admin, Trainer, Member',
      'Reduced data entry errors by ~20% through comprehensive server-side input validation',
      'Wrote comprehensive unit tests using xUnit, improving system regression reliability',
      'Collaborated in a 3-member Agile team delivering integrations across 2-week sprints',
    ],
    image: '/assets/placeholder-project.svg',
    previewType: 'gym',
  },
  {
    id: 4,
    number: '04',
    title: 'Peakspot – Sports Performance Platform',
    subtitle: 'Athletic Telemetry & Workout Analytics Engine',
    category: 'Professional',
    isProfessional: true,
    categoryTag: 'ANALYTICS & REAL-TIME',
    tech: ['FastAPI', 'Python', 'PostgreSQL', 'PostGIS', 'Supabase', 'WebSocket'],
    description:
      'Athletic telemetry and workout analytics platform designed for real-time tracking, geospatial routing, and structured performance metrics.',
    longDescription:
      'Engineered an API engine leveraging FastAPI and Supabase, storing spatial movement routes with PostgreSQL & PostGIS, and transmitting live telemetry metrics via WebSockets to client applications.',
    metrics: [
      { value: 'Live', label: 'WebSocket Telemetry Stream' },
      { value: 'Spatial', label: 'PostGIS Route Optimization' },
      { value: 'FastAPI', label: 'High-Throughput Async Backend' },
    ],
    responsibilities: [
      'Designed high-performance RESTful and WebSocket API architecture using FastAPI',
      'Integrated PostgreSQL with PostGIS extension for geospatial route tracing',
      'Built authentication and data layer on Supabase backend with strict schema integrity',
      'Structured athlete performance dashboards for historical tracking and trend analysis',
    ],
    image: '/assets/placeholder-project.svg',
    previewType: 'sports',
  },
  {
    id: 5,
    number: '05',
    title: 'Attendance Management SaaS',
    subtitle: 'Cross-Platform Proximity Attendance Tracking',
    category: 'Personal / In Development',
    isProfessional: false,
    categoryTag: 'MOBILE APP & IOT',
    tech: ['Flutter', 'Dart', 'Riverpod', 'Bluetooth BLE', 'Supabase', 'PostgreSQL'],
    description:
      'Cross-platform Flutter application for proximity-verified employee attendance using Bluetooth beacons, real-time sync, and multi-tenant admin dashboards.',
    longDescription:
      'Currently in active development: features BLE (Bluetooth Low Energy) beacon detection to automate clock-in upon physical office arrival, powered by Riverpod state management and a cloud database backend.',
    metrics: [
      { value: 'BLE', label: 'Bluetooth Proximity Check-in' },
      { value: 'Riverpod', label: 'Reactive State Architecture' },
      { value: 'Active', label: 'In Ongoing Development' },
    ],
    responsibilities: [
      'Building cross-platform mobile frontend with Flutter & Dart for Android and iOS',
      'Implementing BLE proximity scanning for contactless check-in validation',
      'Architecting reactive global state and offline caching using Riverpod',
      'Designing multi-tenant database models in PostgreSQL via Supabase',
    ],
    image: '/assets/placeholder-project.svg',
    previewType: 'attendance',
  },
];

export default projects;
