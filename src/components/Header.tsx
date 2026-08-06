import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "../data/portfolio";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        isScrolled || isOpen
          ? "border-white/10 bg-ink/90 shadow-[0_14px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl"
          : "border-white/10 bg-transparent"
      }`}
    >
      <div className="section-shell flex h-20 items-center">
        <a className="focus-ring text-xl font-black tracking-[-0.045em] text-paper" href="#home" onClick={() => setIsOpen(false)}>
          Jaydeep <span className="text-mint">Ravaliya</span>
        </a>

        <nav className="ml-auto hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              className="focus-ring text-sm font-medium tracking-wide text-zinc-300 transition hover:text-mint"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
          <a
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-paper transition hover:border-mint/45 hover:bg-mint/10"
            href={profile.github}
            rel="noreferrer"
            target="_blank"
          >
            GitHub <ArrowUpRight className="size-4 text-mint" />
          </a>
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          className="focus-ring ml-auto inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-paper md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isOpen ? (
        <nav className="section-shell border-t border-white/10 py-4 md:hidden" id="mobile-navigation" aria-label="Mobile navigation">
          <div className="grid gap-2">
            {navigation.map((item) => (
              <a
                className="focus-ring rounded-xl px-3 py-3 text-base font-semibold text-zinc-200 transition hover:bg-white/[0.04] hover:text-mint"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
