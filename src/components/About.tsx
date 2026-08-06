import { CloudCog, DatabaseZap, RefreshCcw, ShieldCheck } from "lucide-react";
import { capabilities } from "../data/portfolio";

const capabilityIcons = [RefreshCcw, DatabaseZap, CloudCog];

export function About() {
  return (
    <section className="py-24 sm:py-32" id="about">
      <div className="section-shell grid gap-14 xl:grid-cols-[0.86fr_1.14fr] xl:gap-20">
        <div>
          <p className="section-kicker">01 / About</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-paper sm:text-5xl">
            Backend engineering built around failure modes—not happy paths.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400">
            My strongest work sits where API design, data consistency, background processing, databases, and cloud delivery meet. I focus on the decisions that keep services understandable when conditions are imperfect.
          </p>

          <div className="mt-9 grid overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-3">
            {capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index];

              return (
                <article className="border-b border-white/10 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0" key={capability.title}>
                  <Icon className="size-5 text-mint" />
                  <h3 className="mt-5 text-sm font-bold text-paper">{capability.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">{capability.topics.join(", ")}</p>
                </article>
              );
            })}
          </div>
        </div>

        <article className="relative rounded-[1.65rem] border border-white/10 bg-white/[0.025] p-2 shadow-[0_35px_100px_rgba(0,0,0,0.28)]">
          <div className="relative min-h-[420px] overflow-hidden rounded-[1.25rem] border border-white/[0.05] bg-surface p-6 sm:p-8">
            <div className="absolute right-0 top-0 size-72 rounded-full bg-mint/[0.08] blur-3xl" aria-hidden="true" />
            <div className="relative flex items-center justify-between gap-4">
              <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.15em] text-mint">Featured project 01</span>
              <span className="hidden font-mono text-[0.65rem] text-zinc-600 sm:block">github.com/jaydeepravaliya</span>
            </div>

            <div className="relative mt-16 max-w-xl sm:mt-20">
              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-paper sm:text-4xl">Partner Sync API</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                A production-style FastAPI integration platform for safe retries, bidirectional synchronization, identity mapping, and conflicts that need human review.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["FastAPI", "PostgreSQL", "Celery", "Redis", "JWT", "pytest"].map((technology) => (
                  <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-zinc-300" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mt-9 w-full rounded-2xl border border-mint/20 bg-[#1a1a1a]/90 p-5 font-mono text-xs leading-6 text-zinc-400 shadow-2xl sm:absolute sm:right-8 sm:top-14 sm:mt-0 sm:w-64 sm:rotate-2">
              <p><span className="font-bold text-mint">POST</span> /orders</p>
              <p>Idempotency-Key: 8f21...</p>
              <div className="my-3 h-px bg-white/10" />
              <p><span className="font-bold text-mint">201</span> order accepted</p>
              <p>sync_status: queued</p>
            </div>

            <div className="relative mt-9 flex items-center gap-2 text-xs font-semibold text-zinc-500 sm:absolute sm:bottom-8 sm:right-8 sm:mt-0">
              <ShieldCheck className="size-4 text-mint" /> Auth, retry, sync, and conflict behavior tested
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
