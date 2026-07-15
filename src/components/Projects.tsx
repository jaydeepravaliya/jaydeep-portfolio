import { ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-24" id="projects">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work with backend and automation depth."
            description="Each project focuses on the technical challenge, the implementation surface, and the repository a reviewer can inspect."
          />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              className="group flex h-full flex-col border border-white/10 bg-panel p-6 transition hover:border-accent/40"
              key={project.title}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <a
                  aria-label={`Open ${project.title} GitHub repository`}
                  className="focus-ring inline-flex size-10 shrink-0 items-center justify-center rounded border border-white/10 text-slate-300 transition hover:border-accent/50 hover:text-white"
                  href={project.repo}
                  rel="noreferrer"
                  target="_blank"
                  title="Open repository"
                >
                  <ExternalLink className="size-4" />
                </a>
              </div>

              <p className="mt-4 flex-1 leading-7 text-slate-300">{project.challenge}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    className="rounded border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-medium text-sky-100"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
