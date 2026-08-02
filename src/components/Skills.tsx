import { technologyGroups } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section className="border-y border-white/10 bg-surface/40 py-24 sm:py-28" id="stack" aria-labelledby="stack-heading">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <div id="stack-heading">
            <SectionHeading
              eyebrow="Stack"
              title="The tools behind the backend."
              description="A practical stack for building APIs, moving data safely, processing background work, and delivering services with confidence."
            />
          </div>
          <p className="mt-8 max-w-xl border-l border-mint/40 pl-5 text-sm leading-7 text-stone-500">
            Grouped by the role each technology plays—not as a wall of keywords.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/10 sm:grid-cols-2">
          {technologyGroups.map((group) => (
            <article
              className={`bg-ink p-5 sm:p-6 ${group.wide ? "sm:col-span-2" : ""}`}
              key={group.name}
            >
              <div className="min-h-20">
                <h3 className="text-sm font-bold text-paper">{group.name}</h3>
                <p className="mt-2 max-w-sm text-xs leading-5 text-stone-500">{group.description}</p>
              </div>

              <ul className={`mt-5 grid gap-2.5 ${group.wide ? "sm:grid-cols-3" : "grid-cols-2"}`}>
                {group.technologies.map((technology) => (
                  <li
                    className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-3 transition-colors duration-200 hover:border-mint/25 hover:bg-mint/[0.04]"
                    key={technology.name}
                  >
                    <span className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-lg border border-white/10 bg-[#f8faf9] font-mono text-[0.6rem] font-black text-ink">
                      {technology.code}
                      <img
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 size-full object-contain p-2"
                        height="44"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                        src={technology.logo}
                        width="44"
                      />
                    </span>
                    <span className="min-w-0 text-xs font-bold leading-4 text-stone-300 transition-colors duration-200 group-hover:text-paper sm:text-sm">
                      {technology.name}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
