import { motion } from "framer-motion";
import { skillGroups, skillScores } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section className="py-20 sm:py-24" id="skills">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills dashboard"
          title="Backend depth with an active LLM systems learning track."
          description="A recruiter should see the core signal quickly: production Python APIs first, then databases, cloud automation, and applied AI direction."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border border-white/10 bg-panel p-5 sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Capability index</h3>
                <p className="mt-1 text-sm text-slate-400">Production strength and current growth areas.</p>
              </div>
              <span className="rounded border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                Backend-led
              </span>
            </div>

            <div className="space-y-5">
              {skillScores.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white">{skill.name}</p>
                      <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-400">{skill.detail}</p>
                    </div>
                    <span className="shrink-0 font-mono text-sm text-accent">{skill.level}%</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded bg-white/10">
                    <motion.div
                      className="h-full rounded bg-accent"
                      initial={{ width: 0 }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      viewport={{ once: true }}
                      whileInView={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="border border-white/10 bg-panel p-5">
              <p className="text-sm font-semibold uppercase text-accent">Learning signal</p>
              <h3 className="mt-3 text-xl font-semibold text-white">LLMs as backend systems, not magic.</h3>
              <p className="mt-3 leading-7 text-slate-300">
                I am approaching LLMs through APIs, data retrieval, evaluation, automation, and reliability. That makes the
                learning direction naturally connected to backend engineering work.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="border border-white/10 bg-white/[0.03] p-5">
                <p className="font-mono text-3xl font-semibold text-emerald-300">6</p>
                <p className="mt-2 text-sm text-slate-400">Core skill lanes tracked</p>
              </div>
              <div className="border border-white/10 bg-white/[0.03] p-5">
                <p className="font-mono text-3xl font-semibold text-accent">API</p>
                <p className="mt-2 text-sm text-slate-400">Primary engineering leverage</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group) => (
            <section className="border border-white/10 bg-panel/75 p-5" key={group.title}>
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    className="rounded border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
