import { profile } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Built with React, Tailwind CSS, and Vite.</p>
        <p>{profile.name} - Backend Developer</p>
      </div>
    </footer>
  );
}
