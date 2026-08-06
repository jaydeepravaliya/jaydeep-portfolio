import { ArrowDownRight, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";

export function Hero() {
  return (
    <section className="grid-backdrop relative flex min-h-[850px] flex-col overflow-hidden border-b border-white/10 pt-20" id="home">
      <div className="pointer-events-none absolute inset-x-0 top-24 grid h-[610px] place-items-center overflow-hidden" aria-hidden="true">
        <span className="monogram-outline translate-x-[-4%] text-[clamp(20rem,40vw,35rem)] font-black italic leading-none tracking-[-0.16em]">
          JR
        </span>
      </div>

      <div className="section-shell relative z-10 flex flex-1 flex-col items-center justify-center py-20 text-center">
        <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-mint/25 bg-mint/[0.07] px-3 py-2 text-center text-[0.58rem] font-extrabold tracking-[0.08em] text-mint sm:px-4 sm:text-xs sm:tracking-[0.14em]">
          <span className="size-1.5 rounded-full bg-mint shadow-[0_0_16px_#61e6b2]" />
          PYTHON BACKEND SOFTWARE ENGINEER
        </p>

        <h1 className="mt-7 max-w-5xl text-[clamp(2.65rem,11vw,6rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-paper">
          Reliable systems.
          <span className="block font-serif font-normal italic text-mint">Clear APIs.</span>
          <span className="block sm:hidden">Data that stays<br />in sync.</span>
          <span className="hidden sm:block">Data that stays in sync.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
          {profile.summary}
        </p>

        <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-mint px-6 py-3.5 text-sm font-extrabold text-[#111111] transition hover:bg-[#7aefc1]"
            href="#work"
          >
            View projects <ArrowDownRight className="size-4" />
          </a>
          <a
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.025] px-6 py-3.5 text-sm font-bold text-paper transition hover:border-mint/45 hover:bg-mint/[0.07]"
            href={profile.github}
            rel="noreferrer"
            target="_blank"
          >
            Explore GitHub <ArrowUpRight className="size-4 text-mint" />
          </a>
        </div>
      </div>

      <div className="section-shell relative z-10 grid min-h-24 grid-cols-2 items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-zinc-500 sm:grid-cols-3">
        <span className="inline-flex items-center gap-2">
          <MapPin className="size-3.5 text-mint" /> {profile.location}
        </span>
        <span className="hidden text-center text-zinc-300 sm:block">API reliability · Integration · Cloud delivery</span>
        <div className="flex justify-end gap-4">
          <a className="focus-ring inline-flex items-center gap-1.5 text-zinc-300 transition hover:text-mint" href={profile.github} rel="noreferrer" target="_blank">
            <Github className="size-3.5" /> GitHub
          </a>
          <a className="focus-ring inline-flex items-center gap-1.5 text-zinc-300 transition hover:text-mint" href={profile.linkedin} rel="noreferrer" target="_blank">
            <Linkedin className="size-3.5" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
