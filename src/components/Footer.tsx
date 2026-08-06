import { ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col gap-5 text-xs font-medium tracking-wide text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, and careful backend positioning.</p>
        <a className="focus-ring inline-flex items-center gap-2 text-zinc-300 transition hover:text-mint" href="#home">
          Back to top <ArrowUp className="size-3.5" />
        </a>
      </div>
    </footer>
  );
}
