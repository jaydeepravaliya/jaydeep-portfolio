import { ArrowRight, Mail } from "lucide-react";
import { profile } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section className="py-20 sm:py-24" id="contact">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="Contact"
            title="Open to backend, automation, and AI-adjacent engineering opportunities."
            description="The best-fit conversations are around Python APIs, FastAPI, Django, AWS, database performance, CI/CD automation, and practical LLM tooling."
          />

          <div className="border border-white/10 bg-panel p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase text-accent">Professional email</p>
            <a
              className="focus-ring mt-3 inline-flex max-w-full items-center gap-3 rounded text-lg font-semibold text-white transition hover:text-accent sm:text-2xl"
              href={`mailto:${profile.email}`}
            >
              <Mail className="size-5 shrink-0 text-accent" />
              <span className="break-all">{profile.email}</span>
            </a>
            <p className="mt-5 leading-7 text-slate-300">
              I usually respond with context, availability, and a clear next step.
            </p>
            <a
              className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded bg-accent px-5 py-3 text-sm font-semibold text-ink transition hover:bg-sky-300"
              href={`mailto:${profile.email}?subject=Backend%20Developer%20Opportunity`}
            >
              Start a conversation <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
