import { motion } from "framer-motion";
import { Activity, BarChart3, Brain, LineChart } from "lucide-react";
import { researchMetrics } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const researchTracks = [
  {
    icon: Brain,
    title: "LLM evaluation",
    text: "Learning how to score prompts, retrieval quality, latency, and tool-call reliability before shipping AI features.",
  },
  {
    icon: Activity,
    title: "Automation analytics",
    text: "Tracking deployment, queue, and cost signals so automation work can be measured rather than merely described.",
  },
  {
    icon: LineChart,
    title: "Backend performance",
    text: "Connecting API latency, query plans, cache behavior, and async workload metrics to business-facing outcomes.",
  },
];

export function QuantResearch() {
  return (
    <section className="py-20 sm:py-24" id="research">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Quantitative & Research"
          title="A measurement-first section for backend and LLM work."
          description="This section gives recruiters the signal that projects are approached like systems: measured, compared, improved, and documented."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border border-white/10 bg-panel p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Impact telemetry</h3>
                <p className="mt-1 text-sm text-slate-400">Performance, delivery, responsiveness, and cost signals.</p>
              </div>
              <BarChart3 className="size-6 text-accent" />
            </div>

            <div className="mt-8 flex h-56 items-end gap-3 border-b border-l border-white/10 px-3 pb-3 sm:gap-5">
              {researchMetrics.map((metric) => (
                <div className="flex min-w-0 flex-1 flex-col items-center justify-end gap-3" key={metric.label}>
                  <motion.div
                    className="w-full rounded-t bg-accent"
                    initial={{ height: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    whileInView={{ height: `${Math.max(18, (metric.value / 60) * 100)}%` }}
                  />
                  <div className="text-center">
                    <p className="font-mono text-sm font-semibold text-white">{metric.value}%</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{metric.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {researchMetrics.map((metric) => (
                <div className="border border-white/10 bg-white/[0.03] p-4" key={metric.note}>
                  <p className="font-semibold text-white">{metric.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{metric.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {researchTracks.map((track) => {
              const Icon = track.icon;

              return (
                <motion.article
                  className="border border-white/10 bg-panel p-5"
                  key={track.title}
                  whileHover={{ y: -4 }}
                >
                  <Icon className="size-5 text-emerald-300" />
                  <h3 className="mt-4 text-lg font-semibold text-white">{track.title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{track.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
