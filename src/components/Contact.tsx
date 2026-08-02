import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export function Contact() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32" id="contact">
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/[0.055] blur-3xl" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] px-6 py-16 text-center shadow-[0_35px_100px_rgba(0,0,0,0.22)] sm:px-12 sm:py-20">
          <p className="section-kicker">03 / Contact</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.05em] text-paper sm:text-6xl">
            Let’s talk about backend systems that need to stay dependable.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-400">
            For questions about my projects, Python backend engineering, APIs, or system integration, email is the clearest place to start.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-mint px-6 py-3.5 text-sm font-extrabold text-[#122019] transition hover:bg-[#7aefc1]"
              href={`mailto:${profile.email}?subject=Backend%20Engineering%20Conversation`}
            >
              <Mail className="size-4" /> Email Jaydeep <ArrowUpRight className="size-4" />
            </a>
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold text-paper transition hover:border-mint/40 hover:bg-mint/[0.06]"
              href={profile.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <Linkedin className="size-4 text-mint" /> LinkedIn
            </a>
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold text-paper transition hover:border-mint/40 hover:bg-mint/[0.06]"
              href={profile.github}
              rel="noreferrer"
              target="_blank"
            >
              <Github className="size-4 text-mint" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
