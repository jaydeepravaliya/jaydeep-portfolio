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

export type ProjectCaseStudy = {
  architectureUrl: string;
  constraints: string[];
  decisions: {
    title: string;
    detail: string;
  }[];
  failurePaths: {
    trigger: string;
    response: string;
  }[];
  outcome: string;
  problem: string;
  problemTitle: string;
  scopeNote: string;
  verification: string[];
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
  caseStudy?: ProjectCaseStudy;
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
    caseStudy: {
      architectureUrl:
        "https://github.com/jaydeepravaliya/partner-sync-api/blob/master/docs/architecture.md",
      problemTitle: "One order can cross two systems—and arrive more than once.",
      problem:
        "Partners submit purchase orders through a modern API while fulfillment lives in a legacy ERP. The systems do not share a database, identify partners differently, and update order state independently. A dropped response can also make a client retry the same request, so the integration must prevent duplicate orders without hiding genuine disagreements between systems.",
      constraints: [
        "No shared database or primary key between the platform and ERP",
        "Network retries must not create duplicate purchase orders",
        "Outbound orders and inbound fulfillment move on separate schedules",
        "Some state conflicts are unsafe to resolve automatically",
      ],
      decisions: [
        {
          title: "Make retries a contract",
          detail:
            "Every order request requires an idempotency key. Replaying the same body returns the original order; reusing the key with a different body returns a 409 conflict instead of guessing.",
        },
        {
          title: "Separate the sync directions",
          detail:
            "Orders move out and fulfillment status moves back through independently schedulable flows. Celery, the CLI, and the admin trigger all call the same reusable sync engine.",
        },
        {
          title: "Surface business conflicts",
          detail:
            "A cancellation request that meets an already shipped or delivered order becomes a deduplicated conflict record for human review rather than a silent overwrite.",
        },
        {
          title: "Isolate and audit failures",
          detail:
            "A failed order is marked without stopping the whole run, while each synchronization execution records its direction, timing, counts, and error message.",
        },
      ],
      failurePaths: [
        {
          trigger: "The client retries after the response is lost",
          response: "The same idempotency key and request body return the original order instead of creating a duplicate.",
        },
        {
          trigger: "An idempotency key is reused for different order data",
          response: "The API returns a 409 conflict so a client bug cannot be mistaken for a legitimate retry.",
        },
        {
          trigger: "One order cannot be pushed to the mock ERP",
          response: "That order is marked as an error while the synchronization run continues processing the remaining orders.",
        },
        {
          trigger: "A cancellation request meets an already shipped order",
          response: "The mismatch becomes a deduplicated conflict record that remains visible for human review.",
        },
      ],
      verification: [
        "19 pytest tests",
        "Authentication and role visibility",
        "Idempotency and pagination",
        "Synchronization and conflict paths",
      ],
      outcome:
        "The result is a demonstrable integration where retries converge on one order, each sync direction can run independently, and ambiguous state is made visible for review.",
      scopeNote:
        "This is a production-style public project built with a mock legacy ERP. It does not claim live customer usage or commercial production traffic.",
    },
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
