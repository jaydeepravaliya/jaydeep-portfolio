export type Technology = {
  code: string;
  logo: string;
  name: string;
  status?: "Learning";
};

export type TechnologyGroup = {
  name: string;
  description: string;
  technologies: Technology[];
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

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

export const technologyGroups: TechnologyGroup[] = [
  {
    name: "Languages & scripting",
    description: "Core languages for backend services and automation.",
    technologies: [
      { code: "PY", logo: devicon("python/python-original.svg"), name: "Python" },
      { code: "SH", logo: devicon("bash/bash-original.svg"), name: "Bash" },
      {
        code: "TS",
        logo: devicon("typescript/typescript-original.svg"),
        name: "TypeScript",
        status: "Learning",
      },
    ],
  },
  {
    name: "Frameworks & APIs",
    description: "Frameworks for API-first services and backend applications.",
    technologies: [
      { code: "FA", logo: devicon("fastapi/fastapi-original.svg"), name: "FastAPI" },
      { code: "DJ", logo: devicon("django/django-plain.svg"), name: "Django" },
      { code: "FL", logo: devicon("flask/flask-original.svg"), name: "Flask" },
    ],
  },
  {
    name: "Databases & search",
    description: "Relational, document, caching, and search systems.",
    technologies: [
      { code: "PG", logo: devicon("postgresql/postgresql-original.svg"), name: "PostgreSQL" },
      { code: "MY", logo: devicon("mysql/mysql-original.svg"), name: "MySQL" },
      { code: "MO", logo: devicon("mongodb/mongodb-original.svg"), name: "MongoDB" },
      { code: "RD", logo: devicon("redis/redis-original.svg"), name: "Redis" },
      {
        code: "ES",
        logo: devicon("elasticsearch/elasticsearch-original.svg"),
        name: "Elasticsearch",
      },
    ],
  },
  {
    name: "Async & data tools",
    description: "Background processing and practical data workflows.",
    technologies: [
      {
        code: "CL",
        logo: "https://raw.githubusercontent.com/celery/celery/master/docs/images/celery_512.png",
        name: "Celery",
      },
      { code: "PD", logo: devicon("pandas/pandas-original.svg"), name: "Pandas" },
      { code: "NP", logo: devicon("numpy/numpy-original.svg"), name: "NumPy" },
    ],
  },
  {
    name: "Cloud & infrastructure",
    description: "Cloud delivery, containers, and repeatable infrastructure.",
    technologies: [
      {
        code: "AWS",
        logo: devicon("amazonwebservices/amazonwebservices-plain-wordmark.svg"),
        name: "AWS",
      },
      { code: "DK", logo: devicon("docker/docker-original.svg"), name: "Docker" },
      { code: "TF", logo: devicon("terraform/terraform-original.svg"), name: "Terraform" },
    ],
  },
  {
    name: "Testing & delivery",
    description: "Testing, source control, and continuous delivery tooling.",
    technologies: [
      { code: "PT", logo: devicon("pytest/pytest-original.svg"), name: "pytest" },
      { code: "GT", logo: devicon("git/git-original.svg"), name: "Git" },
      { code: "GH", logo: devicon("github/github-original.svg"), name: "GitHub" },
      {
        code: "GHA",
        logo: devicon("githubactions/githubactions-original.svg"),
        name: "GitHub Actions",
      },
      { code: "JK", logo: devicon("jenkins/jenkins-original.svg"), name: "Jenkins" },
    ],
  },
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
