import {
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDot,
  Database,
  Github,
  RefreshCcw,
  ShieldAlert,
  TestTube2,
  Workflow,
} from "lucide-react";
import type { Project } from "../data/portfolio";
import { projects } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

function PartnerSyncVisual() {
  return (
    <div className="visual-grid relative flex min-h-[330px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-[#181d1a] p-6" aria-label="Diagram showing synchronization between partner and internal systems">
      <div className="absolute left-8 top-8 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-mint">Bidirectional sync</div>
      <div className="relative z-10 grid w-full max-w-xl grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="rounded-2xl border border-white/10 bg-ink/90 p-5 text-center shadow-xl">
          <span className="mx-auto grid size-10 place-items-center rounded-xl bg-mint/10 text-mint"><Database className="size-5" /></span>
          <p className="mt-4 text-sm font-bold text-paper">Partner system</p>
          <p className="mt-1 font-mono text-[0.65rem] text-stone-500">partner_ref: A-1042</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-mint">
          <ArrowLeftRight className="size-7" />
          <span className="rounded-full border border-mint/20 bg-mint/[0.08] px-2 py-1 font-mono text-[0.6rem]">safe retry</span>
        </div>
        <div className="rounded-2xl border border-white/10 bg-ink/90 p-5 text-center shadow-xl">
          <span className="mx-auto grid size-10 place-items-center rounded-xl bg-mint/10 text-mint"><RefreshCcw className="size-5" /></span>
          <p className="mt-4 text-sm font-bold text-paper">Internal system</p>
          <p className="mt-1 font-mono text-[0.65rem] text-stone-500">account_id: 8831</p>
        </div>
      </div>
      <div className="absolute bottom-7 flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-3 py-1.5 text-[0.65rem] font-semibold text-amber-100/75">
        <ShieldAlert className="size-3.5" /> Ambiguous conflicts surface for review
      </div>
    </div>
  );
}

function Customer360Visual() {
  return (
    <div className="visual-grid relative flex min-h-[330px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-[#181d1a] p-6" aria-label="Diagram showing CRM, billing, and support data flowing to a canonical customer warehouse">
      <div className="absolute left-8 top-8 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-mint">Incremental sync</div>
      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-7">
        <div className="grid w-full grid-cols-3 gap-3">
          {["Mock CRM", "Mock billing", "Mock support"].map((source, index) => (
            <div className="rounded-xl border border-white/10 bg-ink/90 p-4 text-center" key={source}>
              <span className="font-mono text-[0.65rem] text-mint">0{index + 1}</span>
              <p className="mt-2 text-xs font-bold text-stone-300">{source}</p>
            </div>
          ))}
        </div>
        <div className="h-8 w-px bg-gradient-to-b from-mint to-mint/10" />
        <div className="w-full max-w-sm rounded-2xl border border-mint/25 bg-mint/[0.07] p-5 text-center shadow-[0_0_60px_rgba(97,230,178,0.08)]">
          <Database className="mx-auto size-6 text-mint" />
          <p className="mt-3 text-sm font-bold text-paper">Canonical customer warehouse</p>
          <p className="mt-1 font-mono text-[0.62rem] text-stone-500">normalized · audited · recoverable</p>
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return project.visual === "partner-sync" ? <PartnerSyncVisual /> : <Customer360Visual />;
}

function FeaturedCaseStudy({ project }: { project: Project }) {
  const caseStudy = project.caseStudy;

  if (!caseStudy) {
    return null;
  }

  return (
    <article
      className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-ink/75 shadow-[0_35px_110px_rgba(0,0,0,0.25)]"
      id="partner-sync-case-study"
    >
      <div className="grid gap-8 border-b border-white/10 p-3 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-4">
        <ProjectVisual project={project} />

        <div className="px-3 pb-6 sm:px-7 lg:py-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-mint/25 bg-mint/[0.07] px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.13em] text-mint">
              Case study 01
            </span>
            <span className="text-xs font-semibold text-stone-500">{project.eyebrow}</span>
          </div>

          <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-paper sm:text-5xl">{project.title}</h3>
          <p className="mt-5 max-w-xl text-sm leading-7 text-stone-400 sm:text-base">{project.description}</p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((technology) => (
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[0.68rem] font-medium text-stone-400" key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-extrabold text-ink transition hover:bg-mint"
              href={project.repo}
              rel="noreferrer"
              target="_blank"
            >
              <Github className="size-4" /> View repository <ArrowUpRight className="size-4" />
            </a>
            <a
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-paper transition hover:border-mint/40 hover:text-mint"
              href={caseStudy.architectureUrl}
              rel="noreferrer"
              target="_blank"
            >
              Architecture notes <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-9 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <p className="section-kicker">The problem</p>
            <h4 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-paper sm:text-4xl">
              {caseStudy.problemTitle}
            </h4>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-stone-400 sm:text-base sm:leading-8">{caseStudy.problem}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.15em] text-stone-300">
              <ShieldAlert className="size-4 text-mint" /> Integration constraints
            </p>
            <ul className="mt-5 grid gap-4" aria-label="Partner Sync API constraints">
              {caseStudy.constraints.map((constraint) => (
                <li className="flex items-start gap-3 text-sm leading-6 text-stone-400" key={constraint}>
                  <CircleDot className="mt-1 size-3.5 shrink-0 text-mint" />
                  {constraint}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-10">
          <div className="flex items-center gap-3">
            <Workflow className="size-5 text-mint" />
            <h4 className="text-lg font-semibold text-paper">System flow</h4>
          </div>
          <div
            aria-label="Partner order flow from the demo client through FastAPI and the synchronization engine to the mock legacy ERP"
            className="mt-6 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center"
            role="img"
          >
            {["Partner / Vue demo", "FastAPI + platform DB", "Reusable sync engine", "Mock legacy ERP"].map((step, index) => (
              <div className="contents" key={step}>
                <div className="rounded-xl border border-white/10 bg-surface px-4 py-5 text-center text-xs font-bold text-stone-300">
                  <span className="mb-2 block font-mono text-[0.62rem] text-mint">0{index + 1}</span>
                  {step}
                </div>
                {index < 3 ? <ArrowRight className="mx-auto size-4 rotate-90 text-mint/70 md:rotate-0" aria-hidden="true" /> : null}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-6 text-stone-500">
            Celery beat, the CLI, and an admin trigger invoke the same synchronization functions, keeping orchestration separate from the integration logic.
          </p>
        </div>

        <div className="mt-12 border-t border-white/10 pt-10">
          <p className="section-kicker">Key engineering decisions</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {caseStudy.decisions.map((decision, index) => (
              <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7" key={decision.title}>
                <span className="font-mono text-[0.65rem] font-bold text-mint">DECISION 0{index + 1}</span>
                <h5 className="mt-4 text-lg font-semibold text-paper">{decision.title}</h5>
                <p className="mt-3 text-sm leading-7 text-stone-400">{decision.detail}</p>
              </section>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 border-t border-white/10 pt-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-mint/20 bg-mint/[0.055] p-6 sm:p-7">
            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.15em] text-mint">
              <TestTube2 className="size-4" /> Verification
            </p>
            <ul className="mt-5 grid gap-3" aria-label="Partner Sync API verification coverage">
              {caseStudy.verification.map((item) => (
                <li className="flex items-start gap-3 text-sm leading-6 text-stone-300" key={item}>
                  <Check className="mt-1 size-4 shrink-0 text-mint" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-7">
            <p className="section-kicker">Result</p>
            <p className="mt-4 text-lg leading-8 text-stone-200">{caseStudy.outcome}</p>
            <p className="mt-5 border-t border-white/10 pt-5 text-xs leading-6 text-stone-500">{caseStudy.scopeNote}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function SelectedProject({ project }: { project: Project }) {
  return (
    <article className="grid gap-8 rounded-[1.75rem] border border-white/10 bg-ink/70 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.18)] lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:p-4">
      <ProjectVisual project={project} />

      <div className="px-3 pb-5 sm:px-6 lg:py-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-mint/25 bg-mint/[0.07] px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.13em] text-mint">
            {project.status}
          </span>
          <span className="text-xs font-semibold text-stone-500">{project.eyebrow}</span>
        </div>

        <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-paper sm:text-4xl">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-stone-400 sm:text-base">{project.description}</p>

        <ul className="mt-7 grid gap-3" aria-label={`${project.title} highlights`}>
          {project.highlights.map((highlight) => (
            <li className="flex items-start gap-3 text-sm leading-6 text-stone-300" key={highlight}>
              <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-mint/10 text-mint"><Check className="size-3" /></span>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <span className="rounded-full border border-white/10 px-3 py-1.5 text-[0.68rem] font-medium text-stone-400" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <a
          className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-extrabold text-ink transition hover:bg-mint"
          href={project.repo}
          rel="noreferrer"
          target="_blank"
        >
          <Github className="size-4" /> View repository <ArrowUpRight className="size-4" />
        </a>
      </div>
    </article>
  );
}

export function Projects() {
  const featuredCaseStudy = projects.find((project) => project.caseStudy);
  const selectedProjects = projects.filter((project) => !project.caseStudy);

  return (
    <section className="border-y border-white/10 bg-surface py-24 sm:py-32" id="work">
      <div className="section-shell">
        <SectionHeading
          eyebrow="02 / Case studies & selected work"
          title="Backend work, explained through the decisions that make it reliable."
          description="The first case study goes beyond the technology list to show the problem, constraints, architecture, failure handling, and verification behind a public project."
        />

        <div className="mt-14">{featuredCaseStudy ? <FeaturedCaseStudy project={featuredCaseStudy} /> : null}</div>

        {selectedProjects.length > 0 ? (
          <div className="mt-16">
            <p className="section-kicker">Next project</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-paper">More selected backend work</h3>
            <div className="mt-7 space-y-7">
              {selectedProjects.map((project) => <SelectedProject key={project.title} project={project} />)}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
