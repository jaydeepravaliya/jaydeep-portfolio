import { motion } from "framer-motion";
import { ExternalLink, Github, Radio } from "lucide-react";
import { projects } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-24" id="projects">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Project showcase built for recruiter scanning."
            description="Each card emphasizes the engineering problem, the stack signal, and the next click: repository, live site, or demo status."
          />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              className="group flex h-full flex-col border border-white/10 bg-panel p-6 transition hover:border-accent/40"
              key={project.title}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded border border-emerald-300/25 bg-emerald-300/10 px-2 py-1 text-xs font-semibold text-emerald-200">
                      {project.status}
                    </span>
                    <span className="rounded border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-slate-300">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
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

              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <a
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-accent/50 hover:bg-white/5"
                  href={project.repo}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Github className="size-4" />
                  GitHub
                </a>
                {project.demo ? (
                  <a
                    className="focus-ring inline-flex items-center justify-center gap-2 rounded bg-accent px-4 py-2 text-sm font-semibold text-ink transition hover:bg-sky-300"
                    href={project.demo}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <ExternalLink className="size-4" />
                    Live demo
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center gap-2 rounded border border-white/10 px-4 py-2 text-sm font-semibold text-slate-500">
                    <Radio className="size-4" />
                    Demo planned
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
