import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, TerminalSquare } from "lucide-react";
import { profile } from "../data/portfolio";

const navItems = [
  { label: "Console", href: "#home", command: "boot" },
  { label: "About", href: "#about", command: "whoami" },
  { label: "Skills", href: "#skills", command: "show_skills" },
  { label: "Research", href: "#research", command: "metrics" },
  { label: "Projects", href: "#projects", command: "projects" },
  { label: "Contact", href: "#contact", command: "contact" },
];

let audioContext: AudioContext | null = null;

function playClickSound() {
  if (typeof window === "undefined") {
    return;
  }

  const AudioContextConstructor =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

  if (!AudioContextConstructor) {
    return;
  }

  audioContext ??= new AudioContextConstructor();
  void audioContext.resume();

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const now = audioContext.currentTime;

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(740, now);
  oscillator.frequency.exponentialRampToValueAtTime(420, now + 0.09);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.045, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.11);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.12);
}

export function Header() {
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-38% 0px -52% 0px",
        threshold: 0.01,
      },
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (href: string) => {
    setActiveHref(href);
    playClickSound();
  };

  const socialLinks = [
    { label: "GitHub profile", href: profile.github, icon: Github },
    { label: "LinkedIn profile", href: profile.linkedin, icon: Linkedin },
    { label: "Email Jaydeep", href: `mailto:${profile.email}`, icon: Mail },
  ];

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-80 p-4 lg:block">
        <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#15171f]/90 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent to-fuchsia-400" />
          <div className="absolute -left-24 top-20 size-52 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute -right-24 bottom-24 size-52 rounded-full bg-fuchsia-500/10 blur-3xl" />

          <div className="relative flex h-full flex-col p-5">
            <a
              className="focus-ring inline-flex items-center justify-between rounded-full border border-white/10 bg-black/25 px-4 py-3 text-lg font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              href="#home"
              onClick={() => handleNavigate("#home")}
            >
              JR<span className="text-accent">.engineer</span>
              <span className="ml-3 size-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.75)]" />
            </a>

            <div className="mt-6 rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/15 via-white/[0.04] to-fuchsia-400/10 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                <TerminalSquare className="size-4" />
                command center
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Backend systems, automation workflows, and applied LLM tooling in one focused view.
              </p>
            </div>

            <nav className="mt-7 space-y-2" aria-label="Primary navigation">
              {navItems.map((item) => {
                const isActive = activeHref === item.href;

                return (
                  <a
                    className={`focus-ring group relative flex items-center justify-between overflow-hidden rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      isActive ? "text-ink" : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                    }`}
                    href={item.href}
                    key={item.href}
                    onClick={() => handleNavigate(item.href)}
                  >
                    {isActive ? (
                      <motion.span
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent via-cyan-200 to-fuchsia-300 shadow-[0_10px_30px_rgba(56,189,248,0.28)]"
                        layoutId="active-sidebar-link"
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      />
                    ) : null}
                    <span className="relative flex items-center gap-2">
                      <span
                        className={`size-1.5 rounded-full ${
                          isActive ? "bg-ink/70" : "bg-slate-600 transition group-hover:bg-accent"
                        }`}
                      />
                      {item.label}
                    </span>
                    <span className={`relative font-mono text-xs ${isActive ? "text-ink/70" : "text-slate-500 group-hover:text-accent"}`}>
                      {item.command}
                    </span>
                  </a>
                );
              })}
            </nav>

            <div className="mt-auto rounded-3xl border border-white/10 bg-black/20 p-4">
              <p className="mb-3 text-xs font-semibold uppercase text-slate-500">External links</p>
              <div className="grid grid-cols-3 gap-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      aria-label={link.label}
                      className="focus-ring inline-flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-accent/50 hover:bg-accent/10 hover:text-white"
                      href={link.href}
                      key={link.label}
                      onClick={playClickSound}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      title={link.label}
                    >
                      <Icon className="size-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </aside>

      <header className="sticky top-0 z-40 p-3 lg:hidden">
        <div className="rounded-[1.5rem] border border-white/10 bg-[#15171f]/95 p-3 shadow-[0_16px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <a
              className="focus-ring rounded-full border border-white/10 bg-black/25 px-3 py-2 text-sm font-semibold text-white"
              href="#home"
              onClick={() => handleNavigate("#home")}
            >
              JR<span className="text-accent">.engineer</span>
            </a>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    aria-label={link.label}
                    className="focus-ring inline-flex size-9 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-slate-300"
                    href={link.href}
                    key={link.label}
                    onClick={playClickSound}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav className="mt-3 flex flex-wrap gap-2" aria-label="Mobile quick navigation">
            {navItems.map((item) => (
              <a
                className={`focus-ring rounded-full border px-3 py-2 text-xs font-semibold transition ${
                  activeHref === item.href
                    ? "border-transparent bg-gradient-to-r from-accent to-fuchsia-300 text-ink"
                    : "border-white/10 bg-white/[0.03] text-slate-300"
                }`}
                href={item.href}
                key={item.href}
                onClick={() => handleNavigate(item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
