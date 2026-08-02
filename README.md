# Jaydeep Portfolio

A responsive React, TypeScript, Tailwind CSS, and Framer Motion portfolio focused on Jaydeep Ravaliya's Python backend engineering work.

Live site: <https://jaydeepravaliya.github.io/jaydeep-portfolio/>

## Run locally

```bash
pnpm install
pnpm run dev
```

## Build

```bash
pnpm run build
```

## Structure

- `src/data/portfolio.ts` contains verified profile, capability, technology, and project content.
- `src/components/` contains the responsive navigation, hero, stack marquee, about, project, contact, and footer sections.
- `src/App.tsx` assembles the page.
- `src/index.css` contains the global graphite-and-mint design system and reduced-motion behavior.

## Featured work

- Partner Sync API
- Customer360 Sync Lab

Publishing to GitHub Pages is handled by `.github/workflows/deploy.yml` after an authorized push to `main`.
