import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Database,
  Github,
  KeyRound,
  RefreshCcw,
  ShieldAlert,
  TestTube2,
  Workflow,
} from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project, ProjectCaseStudy } from "../data/portfolio";
import { projects } from "../data/portfolio";

const chapters = [
  "Cover",
  "The problem",
  "Constraints",
  "Architecture",
  "Decisions",
  "Failure paths",
  "Verification",
] as const;

export const PARTNER_SYNC_CASE_STUDY_PAGE_COUNT = chapters.length;

const partnerSyncProjectCandidate = projects.find((item) => item.visual === "partner-sync" && item.caseStudy);

if (!partnerSyncProjectCandidate?.caseStudy) {
  throw new Error("Partner Sync case study data is missing.");
}

const partnerSyncProject: Project & { caseStudy: ProjectCaseStudy } = {
  ...partnerSyncProjectCandidate,
  caseStudy: partnerSyncProjectCandidate.caseStudy,
};

type CaseStudyReaderProps = {
  onClose: () => void;
  onPageChange: (page: number) => void;
  page: number;
};

type PageContentProps = {
  caseStudy: ProjectCaseStudy;
  project: Project;
};

function PageIntro({ chapter, title, description }: { chapter: string; title: string; description?: string }) {
  return (
    <header>
      <p className="section-kicker">{chapter}</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-paper sm:text-5xl lg:text-6xl" id="case-study-page-title">
        {title}
      </h1>
      {description ? <p className="mt-6 max-w-3xl text-base leading-8 text-stone-400 sm:text-lg">{description}</p> : null}
    </header>
  );
}

function CoverPage({ caseStudy, project }: PageContentProps) {
  return (
    <div className="grid min-h-[570px] gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/[0.07] px-3 py-2 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-mint">
          <BookOpen className="size-4" /> Case study 01
        </div>
        <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-paper sm:text-6xl lg:text-7xl" id="case-study-page-title">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-400">{caseStudy.problemTitle}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <span className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-stone-300" key={technology}>
              {technology}
            </span>
          ))}
        </div>
        <p className="mt-9 flex items-center gap-2 text-xs font-semibold text-stone-500">
          <ArrowRight className="size-4 text-mint" /> Use Next or the arrow keys to move through the case study.
        </p>
      </div>

      <div className="visual-grid relative min-h-[430px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#181d1a] p-6 sm:p-8">
        <div className="absolute right-0 top-0 size-64 rounded-full bg-mint/[0.08] blur-3xl" aria-hidden="true" />
        <p className="relative font-mono text-[0.65rem] uppercase tracking-[0.16em] text-mint">Bidirectional order sync</p>
        <div className="relative mt-16 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div className="rounded-2xl border border-white/10 bg-ink/90 p-5 text-center">
            <Database className="mx-auto size-6 text-mint" />
            <p className="mt-4 text-sm font-bold text-paper">Partner platform</p>
            <p className="mt-2 font-mono text-[0.62rem] text-stone-500">partner_ref: A-1042</p>
          </div>
          <div className="text-center text-mint">
            <RefreshCcw className="mx-auto size-7" />
            <span className="mt-2 block font-mono text-[0.58rem]">push / pull</span>
          </div>
          <div className="rounded-2xl border border-white/10 bg-ink/90 p-5 text-center">
            <Workflow className="mx-auto size-6 text-mint" />
            <p className="mt-4 text-sm font-bold text-paper">Mock legacy ERP</p>
            <p className="mt-2 font-mono text-[0.62rem] text-stone-500">legacy_code: ACME-01</p>
          </div>
        </div>
        <div className="relative mt-8 rounded-2xl border border-amber-300/20 bg-amber-300/[0.055] p-4 text-center text-xs leading-6 text-amber-100/75">
          Reliable integration means defining what happens when retries, partial failures, and conflicting state are normal.
        </div>
      </div>
    </div>
  );
}

function ProblemPage({ caseStudy }: PageContentProps) {
  const risks = [
    {
      title: "A retry can look like a new order",
      detail: "If the first response is lost, the client cannot know whether the write succeeded before trying again.",
    },
    {
      title: "The systems identify partners differently",
      detail: "The API and ERP cannot assume their primary keys describe the same partner record.",
    },
    {
      title: "Both sides can change shared state",
      detail: "Fulfillment and cancellation decisions can cross in transit and produce a disagreement that code should not hide.",
    },
  ];

  return (
    <div>
      <PageIntro chapter="Chapter 02 / The problem" title={caseStudy.problemTitle} description={caseStudy.problem} />
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {risks.map((risk, index) => (
          <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-6" key={risk.title}>
            <span className="font-mono text-[0.65rem] font-bold text-mint">RISK 0{index + 1}</span>
            <h2 className="mt-4 text-lg font-semibold text-paper">{risk.title}</h2>
            <p className="mt-3 text-sm leading-7 text-stone-400">{risk.detail}</p>
          </section>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-mint/20 bg-mint/[0.055] p-6 sm:p-7">
        <p className="text-sm font-semibold leading-7 text-stone-200">
          The engineering goal was not simply to move data. It was to make repeated requests safe, keep both directions observable, and make ambiguous state visible.
        </p>
      </div>
    </div>
  );
}

function ConstraintsPage({ caseStudy }: PageContentProps) {
  return (
    <div>
      <PageIntro
        chapter="Chapter 03 / Constraints"
        title="Designing around the integration that exists."
        description="The project deliberately models boundaries common to legacy-to-modern integrations instead of assuming one clean database or one authoritative identifier."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {caseStudy.constraints.map((constraint, index) => (
          <section className="flex min-h-36 gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6" key={constraint}>
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-mint/10 font-mono text-xs font-bold text-mint">0{index + 1}</span>
            <div>
              <h2 className="text-base font-semibold leading-7 text-paper">{constraint}</h2>
              <p className="mt-2 text-xs leading-6 text-stone-500">A constraint treated as part of the API and synchronization design.</p>
            </div>
          </section>
        ))}
      </div>
      <div className="mt-8 flex items-start gap-4 rounded-2xl border border-amber-300/20 bg-amber-300/[0.05] p-6 text-sm leading-7 text-amber-100/75">
        <ShieldAlert className="mt-1 size-5 shrink-0" />
        <p>Some disagreements carry business meaning. Automatically selecting one system as the winner could hide a cancellation, shipment, or fulfillment decision.</p>
      </div>
    </div>
  );
}

function ArchitecturePage() {
  const flow = [
    { label: "Partner / Vue demo", detail: "JWT-authenticated order intake" },
    { label: "FastAPI + platform DB", detail: "Orders, keys, sync runs, conflicts" },
    { label: "Reusable sync engine", detail: "Independent sync_out and sync_in" },
    { label: "Mock legacy ERP", detail: "Blocking, denormalized boundary" },
  ];

  return (
    <div>
      <PageIntro
        chapter="Chapter 04 / Architecture"
        title="One sync engine, several safe ways to run it."
        description="Celery, the CLI, and the admin endpoint orchestrate the same core synchronization functions, keeping the integration logic reusable and directly testable."
      />
      <div
        aria-label="Partner order flow from the Vue demo through FastAPI and the reusable synchronization engine to the mock legacy ERP"
        className="mt-12 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center"
        role="img"
      >
        {flow.map((step, index) => (
          <div className="contents" key={step.label}>
            <div className="min-h-40 rounded-2xl border border-white/10 bg-surface p-5 text-center">
              <span className="font-mono text-[0.65rem] font-bold text-mint">0{index + 1}</span>
              <p className="mt-5 text-sm font-bold text-paper">{step.label}</p>
              <p className="mt-2 text-xs leading-5 text-stone-500">{step.detail}</p>
            </div>
            {index < flow.length - 1 ? <ArrowRight className="mx-auto size-4 rotate-90 text-mint md:rotate-0" aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {["Celery beat", "CLI command", "Admin trigger"].map((trigger) => (
          <div className="rounded-xl border border-mint/15 bg-mint/[0.04] px-4 py-4 text-center text-xs font-bold text-stone-300" key={trigger}>
            {trigger} <span className="ml-1 text-mint">→ sync engine</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DecisionsPage({ caseStudy }: PageContentProps) {
  const icons = [KeyRound, RefreshCcw, ShieldAlert, Workflow];

  return (
    <div>
      <PageIntro
        chapter="Chapter 05 / Decisions"
        title="Reliability comes from explicit choices."
        description="Each decision makes one failure mode visible instead of relying on optimistic assumptions."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {caseStudy.decisions.map((decision, index) => {
          const Icon = icons[index];
          return (
            <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-6" key={decision.title}>
              <div className="flex items-center justify-between gap-4">
                <Icon className="size-5 text-mint" />
                <span className="font-mono text-[0.62rem] font-bold text-stone-600">DECISION 0{index + 1}</span>
              </div>
              <h2 className="mt-5 text-lg font-semibold text-paper">{decision.title}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-400">{decision.detail}</p>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function FailurePathsPage({ caseStudy }: PageContentProps) {
  return (
    <div>
      <PageIntro
        chapter="Chapter 06 / Failure paths"
        title="The unhappy paths are part of the design."
        description="The project defines a visible response for repeated requests, invalid retries, isolated synchronization errors, and business-state conflicts."
      />
      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
        {caseStudy.failurePaths.map((path, index) => (
          <section className="grid gap-4 border-b border-white/10 bg-white/[0.02] p-6 last:border-b-0 md:grid-cols-[0.9fr_auto_1.1fr] md:items-center" key={path.trigger}>
            <div>
              <span className="font-mono text-[0.62rem] font-bold text-mint">SCENARIO 0{index + 1}</span>
              <h2 className="mt-2 text-sm font-semibold leading-6 text-paper">{path.trigger}</h2>
            </div>
            <ArrowRight className="size-4 rotate-90 text-stone-600 md:rotate-0" aria-hidden="true" />
            <p className="text-sm leading-7 text-stone-400">{path.response}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

function VerificationPage({ caseStudy, project }: PageContentProps) {
  return (
    <div>
      <PageIntro
        chapter="Chapter 07 / Verification"
        title="Important behavior is exercised directly."
        description="The test suite focuses on the API and synchronization paths that carry the most reliability risk."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
        <section className="rounded-2xl border border-mint/20 bg-mint/[0.055] p-6 sm:p-7">
          <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-mint">
            <TestTube2 className="size-4" /> Test coverage
          </p>
          <ul className="mt-6 grid gap-4">
            {caseStudy.verification.map((item) => (
              <li className="flex items-start gap-3 text-sm leading-6 text-stone-300" key={item}>
                <Check className="mt-1 size-4 shrink-0 text-mint" /> {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7">
          <p className="section-kicker">Result</p>
          <p className="mt-5 text-lg leading-8 text-stone-200">{caseStudy.outcome}</p>
          <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-6 text-stone-500">{caseStudy.scopeNote}</p>
        </section>
      </div>
      <div className="mt-7 flex flex-wrap gap-3">
        <a className="focus-ring inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-extrabold text-ink transition hover:bg-mint" href={project.repo} rel="noreferrer" target="_blank">
          <Github className="size-4" /> View repository <ArrowUpRight className="size-4" />
        </a>
        <a className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-paper transition hover:border-mint/40 hover:text-mint" href={caseStudy.architectureUrl} rel="noreferrer" target="_blank">
          Architecture notes <ArrowUpRight className="size-4" />
        </a>
      </div>
    </div>
  );
}

function PageContent({ page, project, caseStudy }: PageContentProps & { page: number }) {
  switch (page) {
    case 1:
      return <CoverPage caseStudy={caseStudy} project={project} />;
    case 2:
      return <ProblemPage caseStudy={caseStudy} project={project} />;
    case 3:
      return <ConstraintsPage caseStudy={caseStudy} project={project} />;
    case 4:
      return <ArchitecturePage />;
    case 5:
      return <DecisionsPage caseStudy={caseStudy} project={project} />;
    case 6:
      return <FailurePathsPage caseStudy={caseStudy} project={project} />;
    default:
      return <VerificationPage caseStudy={caseStudy} project={project} />;
  }
}

export function CaseStudyReader({ onClose, onPageChange, page }: CaseStudyReaderProps) {
  const project = partnerSyncProject;
  const caseStudy = project.caseStudy;
  const reduceMotion = useReducedMotion();
  const previousPage = useRef(page);
  const pageRef = useRef<HTMLElement>(null);
  const direction = page >= previousPage.current ? 1 : -1;
  const isLastPage = page === PARTNER_SYNC_CASE_STUDY_PAGE_COUNT;

  useEffect(() => {
    const previousTitle = document.title;
    return () => {
      document.title = previousTitle;
    };
  }, []);

  useEffect(() => {
    previousPage.current = page;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    pageRef.current?.focus({ preventScroll: true });
    document.title = `${chapters[page - 1]} | Partner Sync API`;
  }, [page, reduceMotion]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" && page < PARTNER_SYNC_CASE_STUDY_PAGE_COUNT) {
        onPageChange(page + 1);
      }
      if (event.key === "ArrowLeft" && page > 1) {
        onPageChange(page - 1);
      }
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPageChange, page]);

  return (
    <div className="min-h-screen bg-ink text-paper">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
        <div className="section-shell flex h-20 items-center gap-4">
          <button className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-bold text-paper transition hover:border-mint/40 hover:text-mint" onClick={onClose} type="button">
            <ArrowLeft className="size-4" /> <span className="hidden sm:inline">Back to portfolio</span><span className="sm:hidden">Back</span>
          </button>
          <div className="hidden h-5 w-px bg-white/10 sm:block" aria-hidden="true" />
          <p className="hidden text-xs font-extrabold uppercase tracking-[0.14em] text-stone-500 sm:block">Partner Sync API / Case study</p>
          <p className="ml-auto font-mono text-xs font-bold text-mint">{String(page).padStart(2, "0")} / {String(PARTNER_SYNC_CASE_STUDY_PAGE_COUNT).padStart(2, "0")}</p>
        </div>
        <div className="h-0.5 bg-white/[0.04]" role="progressbar" aria-label="Case study progress" aria-valuemin={1} aria-valuemax={PARTNER_SYNC_CASE_STUDY_PAGE_COUNT} aria-valuenow={page}>
          <motion.div className="h-full bg-mint" animate={{ width: `${(page / PARTNER_SYNC_CASE_STUDY_PAGE_COUNT) * 100}%` }} transition={{ duration: reduceMotion ? 0 : 0.28 }} />
        </div>
      </header>

      <main className="section-shell py-7 sm:py-10 lg:py-12">
        <div className="grid gap-5 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-7">
          <nav aria-label="Case study chapters" className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-4 hidden text-[0.65rem] font-extrabold uppercase tracking-[0.15em] text-stone-600 lg:block">Chapters</p>
            <ol className="flex gap-2 overflow-x-auto pb-2 lg:grid lg:overflow-visible lg:pb-0">
              {chapters.map((chapter, index) => {
                const chapterPage = index + 1;
                const isActive = chapterPage === page;
                return (
                  <li className="shrink-0" key={chapter}>
                    <button
                      aria-current={isActive ? "step" : undefined}
                      aria-label={`Page ${chapterPage}: ${chapter}`}
                      className={`focus-ring flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-xs font-bold transition lg:px-4 lg:py-3 ${isActive ? "border-mint/30 bg-mint/[0.08] text-mint" : "border-white/10 text-stone-500 hover:border-white/20 hover:text-paper"}`}
                      onClick={() => onPageChange(chapterPage)}
                      type="button"
                    >
                      <span className="font-mono text-[0.62rem]">{String(chapterPage).padStart(2, "0")}</span>
                      <span className="hidden lg:inline">{chapter}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
            <p className="mt-5 hidden text-[0.65rem] leading-5 text-stone-600 lg:block">Arrow keys navigate. Escape returns to the portfolio.</p>
          </nav>

          <section className="case-study-book overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_35px_110px_rgba(0,0,0,0.32)]" aria-live="polite">
            <div className="min-h-[690px] overflow-hidden p-6 sm:p-9 lg:p-12">
              <AnimatePresence initial={false} mode="wait" custom={direction}>
                <motion.article
                  animate={{ opacity: 1, rotateY: 0, x: 0 }}
                  className="outline-none"
                  custom={direction}
                  exit={{ opacity: 0, rotateY: reduceMotion ? 0 : direction * -1.2, x: reduceMotion ? 0 : direction * -36 }}
                  initial={{ opacity: 0, rotateY: reduceMotion ? 0 : direction * 1.2, x: reduceMotion ? 0 : direction * 36 }}
                  key={page}
                  ref={pageRef}
                  tabIndex={-1}
                  transition={{ duration: reduceMotion ? 0 : 0.26, ease: "easeOut" }}
                  aria-labelledby="case-study-page-title"
                >
                  <PageContent caseStudy={caseStudy} page={page} project={project} />
                </motion.article>
              </AnimatePresence>
            </div>

            <nav aria-label="Case study page navigation" className="flex items-center justify-between gap-4 border-t border-white/10 bg-black/10 px-5 py-4 sm:px-8">
              <button
                className="focus-ring inline-flex min-w-28 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-bold text-paper transition enabled:hover:border-mint/40 enabled:hover:text-mint disabled:cursor-not-allowed disabled:opacity-30"
                disabled={page === 1}
                onClick={() => onPageChange(page - 1)}
                type="button"
              >
                <ArrowLeft className="size-4" /> Previous
              </button>
              <span className="hidden text-xs font-semibold text-stone-500 sm:block">{chapters[page - 1]}</span>
              <button
                className="focus-ring inline-flex min-w-28 items-center justify-center gap-2 rounded-full bg-paper px-4 py-2.5 text-sm font-extrabold text-ink transition hover:bg-mint"
                onClick={() => isLastPage ? onClose() : onPageChange(page + 1)}
                type="button"
              >
                {isLastPage ? "Finish" : "Next"} <ArrowRight className="size-4" />
              </button>
            </nav>
          </section>
        </div>
      </main>
    </div>
  );
}
