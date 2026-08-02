export type Technology = {
  code: string;
  name: string;
};

export type Capability = {
  title: string;
  detail: string;
  topics: string[];
};

export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  repo: string;
  status: string;
  highlights: string[];
  visual: "partner-sync" | "customer-360";
};

export const profile = {
  name: "Jaydeep Ravaliya",
  title: "Python Backend Software Engineer",
  location: "Cleveland, Ohio",
  email: "workwith.jayr@gmail.com",
  github: "https://github.com/jaydeepravaliya",
  linkedin: "https://www.linkedin.com/in/jaydeep-ravaliya",
  summary:
    "I build Python backend systems that remain reliable when APIs retry, background jobs fail, or different systems disagree about data.",
};

export const technologies: Technology[] = [
  { code: "PY", name: "Python" },
  { code: "FA", name: "FastAPI" },
  { code: "DJ", name: "Django" },
  { code: "PG", name: "PostgreSQL" },
  { code: "MY", name: "MySQL" },
  { code: "RD", name: "Redis" },
  { code: "CL", name: "Celery" },
  { code: "AW", name: "AWS" },
  { code: "DK", name: "Docker" },
  { code: "PT", name: "pytest" },
  { code: "CI", name: "CI/CD" },
];

export const capabilities: Capability[] = [
  {
    title: "Reliable APIs",
    detail: "Backend interfaces designed for the failure paths that matter, not only the successful request.",
    topics: ["Idempotency", "Safe retries", "Authentication", "API contracts"],
  },
  {
    title: "System integration",
    detail: "Clear boundaries and reconciliation workflows when separate systems represent the same data differently.",
    topics: ["Identity mapping", "Conflict handling", "Data normalization", "Audit trails"],
  },
  {
    title: "Async and cloud delivery",
    detail: "Maintainable background processing and repeatable delivery across application, data, and cloud layers.",
    topics: ["Celery and Redis", "AWS", "Docker", "CI/CD"],
  },
];

export const projects: Project[] = [
  {
    title: "Partner Sync API",
    eyebrow: "FastAPI B2B integration platform",
    description:
      "A production-style public project that models two independent systems with different partner identifiers and shared data that can fall out of sync.",
    stack: ["FastAPI", "PostgreSQL", "Celery", "Redis", "JWT", "Docker", "pytest"],
    repo: "https://github.com/jaydeepravaliya/partner-sync-api",
    status: "Public project",
    highlights: [
      "Idempotent order intake and safe retry behavior",
      "Bidirectional synchronization with independent schedules",
      "Conflict detection, deduplication, and human review",
      "Nineteen tests across auth, sync, pagination, and conflicts",
    ],
    visual: "partner-sync",
  },
  {
    title: "Customer360 Sync Lab",
    eyebrow: "Python data integration",
    description:
      "A data-integration lab that synchronizes mock CRM, billing, and support systems into a canonical customer warehouse.",
    stack: ["Python", "SQLite", "ETL", "Watermarks", "Testing", "GitHub Actions"],
    repo: "https://github.com/jaydeepravaliya/customer360-sync-lab",
    status: "Public project",
    highlights: [
      "Incremental synchronization with per-source watermarks",
      "Idempotent upserts and schema normalization",
      "Soft-delete propagation and synchronization auditing",
      "Conflict capture and dead-letter handling",
    ],
    visual: "customer-360",
  },
];
