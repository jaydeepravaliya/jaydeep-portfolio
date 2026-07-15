import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a className="focus-ring rounded text-sm font-semibold text-white" href="#home">
          JR<span className="text-accent">.engineer</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              className="focus-ring rounded text-sm font-medium text-slate-300 transition hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            aria-label="GitHub profile"
            className="focus-ring inline-flex size-10 items-center justify-center rounded border border-white/10 text-slate-300 transition hover:border-accent/50 hover:text-white"
            href={profile.github}
            rel="noreferrer"
            target="_blank"
            title="GitHub"
          >
            <Github className="size-4" />
          </a>
          <a
            aria-label="LinkedIn profile"
            className="focus-ring inline-flex size-10 items-center justify-center rounded border border-white/10 text-slate-300 transition hover:border-accent/50 hover:text-white"
            href={profile.linkedin}
            rel="noreferrer"
            target="_blank"
            title="LinkedIn"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            aria-label="Email Jaydeep"
            className="focus-ring inline-flex size-10 items-center justify-center rounded border border-white/10 text-slate-300 transition hover:border-accent/50 hover:text-white"
            href={`mailto:${profile.email}`}
            title="Email"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
