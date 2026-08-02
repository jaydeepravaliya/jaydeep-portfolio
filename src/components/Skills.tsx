import { technologies } from "../data/portfolio";

function TechnologySet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-7 pr-7 sm:gap-10 sm:pr-10" aria-hidden={hidden || undefined}>
      {technologies.map((technology) => (
        <div className="flex items-center gap-3" key={technology.name}>
          <span className="grid size-8 place-items-center rounded-lg border border-mint/25 bg-mint/[0.08] font-mono text-[0.65rem] font-bold text-mint">
            {technology.code}
          </span>
          <span className="whitespace-nowrap text-sm font-bold text-stone-300">{technology.name}</span>
          <span className="ml-4 text-[0.55rem] text-mint/40" aria-hidden="true">◆</span>
        </div>
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <section className="overflow-hidden border-b border-white/10 bg-ink py-7" id="stack" aria-label="Technology stack">
      <div className="tech-marquee-track flex min-w-max">
        <TechnologySet />
        <TechnologySet hidden />
      </div>
    </section>
  );
}
