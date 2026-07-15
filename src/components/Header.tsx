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
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-white/10 bg-ink/95 px-5 py-6 backdrop-blur-xl lg:flex lg:flex-col">
        <a className="focus-ring rounded text-lg font-semibold text-white" href="#home" onClick={() => handleNavigate("#home")}>
          JR<span className="text-accent">.engineer</span>
        </a>

        <div className="mt-6 border border-accent/20 bg-accent/10 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-accent">
            <TerminalSquare className="size-4" />
            command nav
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Navigate the portfolio like a backend control surface.
          </p>
        </div>

        <nav className="mt-8 space-y-2" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <a
                className="focus-ring group relative flex items-center justify-between overflow-hidden rounded px-3 py-3 text-sm font-semibold text-slate-300 transition hover:text-white"
                href={item.href}
                key={item.href}
                onClick={() => handleNavigate(item.href)}
              >
                {isActive ? (
                  <motion.span
                    className="absolute inset-0 border border-accent/35 bg-accent/10"
                    layoutId="active-sidebar-link"
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
                <span className="relative font-mono text-xs text-slate-500 transition group-hover:text-accent">
                  {item.command}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="mt-auto">
          <p className="mb-3 text-xs font-semibold uppercase text-slate-500">External links</p>
          <div className="grid grid-cols-3 gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  aria-label={link.label}
                  className="focus-ring inline-flex size-11 items-center justify-center rounded border border-white/10 text-slate-300 transition hover:border-accent/50 hover:bg-white/5 hover:text-white"
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
      </aside>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 backdrop-blur-xl lg:hidden">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <a className="focus-ring rounded text-sm font-semibold text-white" href="#home" onClick={() => handleNavigate("#home")}>
              JR<span className="text-accent">.engineer</span>
            </a>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    aria-label={link.label}
                    className="focus-ring inline-flex size-9 items-center justify-center rounded border border-white/10 text-slate-300"
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
                className={`focus-ring rounded border px-3 py-2 text-xs font-semibold transition ${
                  activeHref === item.href
                    ? "border-accent/50 bg-accent/10 text-accent"
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
