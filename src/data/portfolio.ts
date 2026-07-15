export type Metric = {
  value: string;
  label: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  challenge: string;
  stack: string[];
  repo: string;
};

export const profile = {
  name: "Jaydeep Ravaliya",
  title: "Backend Developer and Automation Engineer",
  currentRole: "Python Developer at Centific",
  location: "Cleveland, OH",
  email: "workwith.jayr@gmail.com",
  github: "https://github.com/jaydeepravaliya",
  linkedin: "https://www.linkedin.com/in/jaydeep-ravaliya",
  avatar: "https://avatars.githubusercontent.com/u/75767797?v=4",
  summary:
    "I build reliable Python APIs, cloud-aware backend systems, and automation workflows that make production services faster, easier to operate, and simpler to scale.",
};

export const metrics: Metric[] = [
  { value: "4+", label: "Years building backend systems" },
  { value: "41%", label: "API performance improvement delivered" },
  { value: "50%", label: "Faster CI/CD release cycles" },
  { value: "20%", label: "AWS operational cost reduction" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Django", "Django REST Framework", "Flask", "REST API Design"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Schema Design"],
  },
  {
    title: "Automation and Cloud",
    items: ["AWS", "Boto3", "Docker", "Terraform", "Jenkins", "GitHub Actions"],
  },
  {
    title: "Data and Quality",
    items: ["Pandas", "NumPy", "pytest", "CI/CD", "Git", "API Integration"],
  },
];

export const projects: Project[] = [
  {
    title: "Customer360 Sync Lab",
    challenge:
      "Synchronizes customer records from CRM, billing, and support sources into a canonical warehouse with incremental watermarks, idempotent upserts, audit logs, and conflict capture.",
    stack: ["Python", "SQLite", "ETL", "Testing", "GitHub Actions"],
    repo: "https://github.com/jaydeepravaliya/customer360-sync-lab",
  },
  {
    title: "Inventory Management System",
    challenge:
      "Models warehouse stock movement, order processing, and inventory tracking with relational data handling for operational workflows.",
    stack: ["Django", "Python", "MySQL", "Inventory", "Backend"],
    repo: "https://github.com/jaydeepravaliya/inventory_management_sys",
  },
  {
    title: "Lead Management API",
    challenge:
      "Implements a FastAPI service for lead intake, protected lead review, status updates, file upload handling, and lightweight SQLite persistence.",
    stack: ["FastAPI", "SQLite", "Auth", "File Uploads", "REST"],
    repo: "https://github.com/jaydeepravaliya/lead-management-app-fastapi",
  },
  {
    title: "Django Login System",
    challenge:
      "Provides signup, login, admin management, CRUD operations, and a Postman-tested API surface for user data workflows.",
    stack: ["Django", "DRF", "Postman", "Auth", "CRUD"],
    repo: "https://github.com/jaydeepravaliya/DjangoProject",
  },
];
