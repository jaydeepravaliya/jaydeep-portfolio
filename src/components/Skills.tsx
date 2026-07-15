import { skillGroups } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section className="py-20 sm:py-24" id="skills">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Backend, automation, and data tools grouped for fast scanning."
          description="The stack is centered on Python services, relational databases, API integration, cloud automation, and CI/CD workflows."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <section className="border border-white/10 bg-panel p-6" key={group.title}>
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
