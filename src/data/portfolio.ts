export type Metric = {
  value: string;
  label: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type SkillScore = {
  name: string;
  level: number;
  category: string;
  detail: string;
};

export type Project = {
  title: string;
  challenge: string;
  stack: string[];
  repo: string;
  demo?: string;
  status: string;
  type: string;
};

export type ResearchMetric = {
  value: number;
  label: string;
  note: string;
};

export const profile = {
  name: "Jaydeep Ravaliya",
  title: "Backend Developer, Automation Engineer, and LLM Learner",
  currentRole: "Python Developer at Centific",
  location: "Cleveland, OH",
  email: "workwith.jayr@gmail.com",
  github: "https://github.com/jaydeepravaliya",
  linkedin: "https://www.linkedin.com/in/jaydeep-ravaliya",
  avatar: "https://avatars.githubusercontent.com/u/75767797?v=4",
  summary:
    "I build reliable Python APIs, cloud-aware backend systems, and automation workflows while expanding into LLM-powered developer and operations tooling.",
};

export const metrics: Metric[] = [
  { value: "4+", label: "Years building backend systems" },
  { value: "41%", label: "API performance improvement delivered" },
  { value: "50%", label: "Faster CI/CD release cycles" },
  { value: "LLM", label: "Currently building applied AI depth" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend Core",
    items: ["Python", "FastAPI", "Django", "Django REST Framework", "REST API Design", "Microservices"],
  },
  {
    title: "Data Layer",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Schema Design", "Indexing"],
  },
  {
    title: "Automation and Cloud",
    items: ["AWS", "Boto3", "Docker", "Terraform", "Jenkins", "GitHub Actions", "Power Automate"],
  },
  {
    title: "LLM Learning Track",
    items: ["Prompt Engineering", "RAG Concepts", "Embeddings", "Evaluation", "Agent Workflows", "API Tooling"],
  },
  {
    title: "Data and Quality",
    items: ["Pandas", "NumPy", "pytest", "CI/CD", "Git", "API Integration", "Observability"],
  },
];

export const skillScores: SkillScore[] = [
  {
    name: "Python API Engineering",
    level: 92,
    category: "backend",
    detail: "FastAPI, Django, DRF, service boundaries, request lifecycle, and integration patterns.",
  },
  {
    name: "Database Performance",
    level: 86,
    category: "data",
    detail: "PostgreSQL/MySQL schema design, indexes, migrations, query tuning, and relational modeling.",
  },
  {
    name: "Cloud Automation",
    level: 78,
    category: "automation",
    detail: "AWS services, Boto3, infrastructure tuning, S3 lifecycle policy, RDS, CloudWatch, and CI/CD.",
  },
  {
    name: "Async Workloads",
    level: 82,
    category: "backend",
    detail: "Celery, Redis queues, background jobs, bottleneck triage, and production troubleshooting.",
  },
  {
    name: "LLM Systems Learning",
    level: 64,
    category: "llm",
    detail: "Prompt design, RAG architecture, embeddings, tool calling concepts, and evaluation workflows.",
  },
  {
    name: "Automation Workflows",
    level: 74,
    category: "automation",
    detail: "CI/CD, GitHub Actions, Jenkins, API-driven automation, and Power Automate exploration.",
  },
];

export const projects: Project[] = [
  {
    title: "Portfolio Command Center",
    challenge:
      "Turns a traditional resume into an interactive developer platform with terminal commands, animated skills, project signals, and GitHub Pages deployment.",
    stack: ["React", "Tailwind", "Framer Motion", "GitHub Pages"],
    repo: "https://github.com/jaydeepravaliya/jaydeep-portfolio",
    demo: "https://jaydeepravaliya.github.io/jaydeep-portfolio/",
    status: "Live",
    type: "Frontend Platform",
  },
  {
    title: "Customer360 Sync Lab",
    challenge:
      "Synchronizes customer records from CRM, billing, and support sources into a canonical warehouse with incremental watermarks, idempotent upserts, audit logs, and conflict capture.",
    stack: ["Python", "SQLite", "ETL", "Testing", "GitHub Actions"],
    repo: "https://github.com/jaydeepravaliya/customer360-sync-lab",
    status: "Interview-ready",
    type: "Data Integration",
  },
  {
    title: "Inventory Management System",
    challenge:
      "Models warehouse stock movement, order processing, and inventory tracking with relational data handling for operational workflows.",
    stack: ["Django", "Python", "MySQL", "Inventory", "Backend"],
    repo: "https://github.com/jaydeepravaliya/inventory_management_sys",
    status: "Backend",
    type: "Operations System",
  },
  {
    title: "Lead Management API",
    challenge:
      "Implements a FastAPI service for lead intake, protected lead review, status updates, file upload handling, and lightweight SQLite persistence.",
    stack: ["FastAPI", "SQLite", "Auth", "File Uploads", "REST"],
    repo: "https://github.com/jaydeepravaliya/lead-management-app-fastapi",
    status: "API",
    type: "Service Design",
  },
  {
    title: "Django Login System",
    challenge:
      "Provides signup, login, admin management, CRUD operations, and a Postman-tested API surface for user data workflows.",
    stack: ["Django", "DRF", "Postman", "Auth", "CRUD"],
    repo: "https://github.com/jaydeepravaliya/DjangoProject",
    status: "Auth",
    type: "Web Services",
  },
];

export const researchMetrics: ResearchMetric[] = [
  {
    value: 41,
    label: "API performance",
    note: "Improvement delivered through backend optimization.",
  },
  {
    value: 50,
    label: "Release velocity",
    note: "CI/CD acceleration through Jenkins and GitHub Actions automation.",
  },
  {
    value: 30,
    label: "System responsiveness",
    note: "Async workload improvement with Celery and Redis queue tuning.",
  },
  {
    value: 20,
    label: "AWS cost efficiency",
    note: "Operational cost reduction through resource and storage policy tuning.",
  },
];
