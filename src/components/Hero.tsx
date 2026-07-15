import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import { metrics, profile } from "../data/portfolio";

export function Hero() {
  return (
    <section className="section-shell flex min-h-[calc(100vh-4rem)] flex-col justify-center py-16 sm:py-20" id="home">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
            <span className="size-2 rounded-full bg-success" />
            {profile.currentRole}
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Backend systems, automation, and APIs built for production.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded bg-accent px-5 py-3 text-sm font-semibold text-ink transition hover:bg-sky-300"
              href={profile.github}
              rel="noreferrer"
              target="_blank"
            >
              View GitHub <Github className="size-4" />
            </a>
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/50 hover:bg-white/5"
              href={profile.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              Connect on LinkedIn <Linkedin className="size-4" />
            </a>
          </div>
        </div>

        <aside className="lg:justify-self-end" aria-label="Professional summary">
          <div className="w-full max-w-sm border border-white/10 bg-panel p-5 shadow-glow">
            <img
              alt="Jaydeep Ravaliya"
              className="aspect-square w-full rounded object-cover"
              src={profile.avatar}
            />
            <div className="mt-5">
              <p className="text-2xl font-semibold text-white">{profile.name}</p>
              <p className="mt-1 text-sm text-slate-300">{profile.title}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="size-4 text-accent" /> {profile.location}
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div className="border border-white/10 bg-white/[0.03] p-5" key={metric.label}>
            <p className="text-3xl font-semibold text-white">{metric.value}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
