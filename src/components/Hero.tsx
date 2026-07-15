import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu, Github, Linkedin, MapPin, ShieldCheck } from "lucide-react";
import { metrics, profile } from "../data/portfolio";
import { TerminalCard } from "./TerminalCard";

export function Hero() {
  return (
    <section className="section-shell flex min-h-[calc(100vh-4rem)] flex-col justify-center py-14 sm:py-20" id="home">
      <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 24 }} transition={{ duration: 0.5 }}>
          <p className="mb-5 inline-flex items-center gap-2 rounded border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
            <span className="size-2 rounded-full bg-success" />
            {profile.currentRole} - Backend + LLM automation track
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Backend engineer building API platforms, automation, and LLM-ready systems.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
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
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded border border-emerald-300/30 px-5 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300/70 hover:bg-emerald-300/10"
              href="#terminal"
            >
              Run terminal <ArrowRight className="size-4" />
            </a>
          </div>
        </motion.div>

        <TerminalCard />
      </div>

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <motion.div
            className="border border-white/10 bg-white/[0.03] p-5"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            key={metric.label}
          >
            <p className="text-3xl font-semibold text-white">{metric.value}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{metric.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid gap-3 lg:grid-cols-3">
        <div className="border border-white/10 bg-panel/70 p-4">
          <Cpu className="size-5 text-accent" />
          <p className="mt-3 text-sm font-semibold text-white">API systems</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">Production REST services, async jobs, schemas, and CI/CD.</p>
        </div>
        <div className="border border-white/10 bg-panel/70 p-4">
          <Brain className="size-5 text-emerald-300" />
          <p className="mt-3 text-sm font-semibold text-white">LLM direction</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">RAG, prompt evaluation, embeddings, and agentic API tooling.</p>
        </div>
        <div className="border border-white/10 bg-panel/70 p-4">
          <ShieldCheck className="size-5 text-warning" />
          <p className="mt-3 text-sm font-semibold text-white">Operational impact</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            <MapPin className="mr-1 inline size-3 text-accent" />
            {profile.location}; open to remote or hybrid backend roles.
          </p>
        </div>
      </div>
    </section>
  );
}
