import { technologyGroups } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const technologyCount = technologyGroups.reduce(
  (total, group) => total + group.technologies.length,
  0,
);

export function Skills() {
  return (
    <section className="border-y border-white/10 bg-surface/40 py-24 sm:py-28" id="stack" aria-labelledby="stack-heading">
      <div className="section-shell">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div id="stack-heading">
            <SectionHeading
              eyebrow="Stack"
              title="The tools behind the backend."
              description="A focused view of the technologies I use across APIs, data systems, background processing, testing, and cloud delivery. Hover over a logo to reveal its brand colors."
            />
          </div>

          <div className="flex gap-8 border-l border-mint/35 pl-5 font-mono text-xs uppercase tracking-[0.12em] text-stone-500">
            <span>
              <strong className="block text-xl text-paper">{technologyCount}</strong>
              Technologies
            </span>
            <span>
              <strong className="block text-xl text-paper">{technologyGroups.length}</strong>
              Categories
            </span>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/10">
          {technologyGroups.map((group) => (
            <article
              className="grid border-b border-white/10 bg-ink last:border-b-0 lg:grid-cols-[14rem_minmax(0,1fr)]"
              key={group.name}
            >
              <header className="border-b border-white/10 bg-white/[0.018] p-5 sm:p-6 lg:border-b-0 lg:border-r">
                <h3 className="text-sm font-bold capitalize text-paper">{group.name}</h3>
                <p className="mt-2 max-w-xs text-xs leading-5 text-stone-500">{group.description}</p>
              </header>

              <ul className="flex min-w-0 flex-wrap gap-px bg-white/[0.08]">
                {group.technologies.map((technology) => (
                  <li
                    className="technology-card group relative flex min-h-32 min-w-36 flex-1 basis-36 flex-col items-center justify-center gap-3 bg-ink px-2 py-5 text-center transition-colors duration-300 hover:bg-white/[0.035]"
                    key={technology.name}
                  >
                    <span className="technology-logo-frame relative grid size-14 place-items-center rounded-xl border border-transparent transition-all duration-300">
                      <span className="font-mono text-[0.62rem] font-black text-stone-600">
                        {technology.code}
                      </span>
                      <img
                        alt=""
                        aria-hidden="true"
                        className="technology-logo absolute inset-0 size-full object-contain p-2"
                        height="56"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                        src={technology.logo}
                        width="56"
                      />
                    </span>

                    <span className="max-w-full text-xs font-semibold leading-4 text-stone-500 transition-colors duration-300 group-hover:text-paper sm:text-sm">
                      {technology.name}
                    </span>

                    {technology.status ? (
                      <span className="rounded-full border border-mint/20 bg-mint/[0.06] px-2 py-0.5 text-[0.55rem] font-extrabold uppercase tracking-[0.1em] text-mint/75">
                        {technology.status}
                      </span>
                    ) : null}
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
