import { BrainCircuit, DatabaseZap, GraduationCap, Workflow } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  {
    icon: GraduationCap,
    title: "STEM foundation",
    text: "Master's graduate in Computer Science from Cleveland State University with coursework in distributed systems, cloud computing, advanced databases, and software engineering principles.",
  },
  {
    icon: Workflow,
    title: "Production backend mindset",
    text: "Experienced across backend services, REST APIs, relational schema design, cloud migrations, CI/CD automation, and cross-functional delivery with QA, frontend, product, and infrastructure teams.",
  },
  {
    icon: BrainCircuit,
    title: "LLM learning direction",
    text: "Building depth in prompt design, RAG architecture, embeddings, tool workflows, and evaluation so AI features can be connected to reliable backend systems.",
  },
  {
    icon: DatabaseZap,
    title: "Automation leverage",
    text: "Comfortable turning repetitive infrastructure, deployment, data sync, and operational tasks into maintainable automation with measurable impact.",
  },
];

export function About() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-24" id="about">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About me"
          title="A backend-focused engineer growing into LLM-powered automation."
          description="I work best where API design, database performance, cloud operations, and automation meet. The next layer I am building is applied AI: LLM workflows that are grounded in APIs, retrieval, data quality, and operational reliability."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article className="border border-white/10 bg-panel p-6" key={item.title}>
                <Icon className="size-6 text-accent" />
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
