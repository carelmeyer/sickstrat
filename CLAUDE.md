# CLAUDE.md

## Project Overview

**sickstrat** — single-page consulting website for product & engineering consulting (AI-focused teams). Built with Next.js 16 (App Router), designed in v0. Contact: hello@sickstrat.com.

## Tech Stack

- **Framework**: Next.js 16 with App Router, React 19, TypeScript
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS v3 + shadcn/ui (neutral base color, CSS variables)
- **Theme**: Dark-only (no light mode) — all CSS custom properties in `app/globals.css` are dark palette
- **Fonts**: Geist + Geist Mono (via `next/font/google`)
- **Icons**: Lucide React

## Commands

```bash
pnpm dev          # Start dev server (Turbopack)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run Next.js linter
```

## Project Structure

```
app/
├── layout.tsx        # Root layout (metadata, fonts)
├── page.tsx          # Single page — assembles all sections
└── globals.css       # Tailwind base + dark theme CSS variables

components/
├── hero.tsx          # Full-screen hero with logo + tagline (fade-in on mount)
├── services.tsx      # "What We Do" — 2x2 grid of service offerings
├── approach.tsx      # "How We Work" — methodology description
├── proof.tsx         # "Signal" — credibility bullets
├── contact.tsx       # "Contact" — email CTA
├── animated-section.tsx  # Reusable scroll-triggered fade-in (IntersectionObserver)
├── theme-provider.tsx    # next-themes provider (unused currently)
└── ui/               # shadcn/ui primitives (button, card, dialog, etc.)

hooks/                # Custom hooks (use-mobile, use-toast)
lib/utils.ts          # cn() helper (clsx + tailwind-merge)
```

## Key Patterns

- **Page composition**: `app/page.tsx` assembles section components separated by `<hr>` dividers
- **Animations**: `AnimatedSection` wraps content for scroll-triggered fade-in with configurable delay. Hero has its own mount-triggered fade-in.
- **Path alias**: `@/*` maps to project root (e.g., `@/components/hero`, `@/lib/utils`)
- **shadcn/ui config**: `components.json` — RSC enabled, default style, neutral base, Lucide icons
- **Max content width**: `max-w-4xl` for section content, `max-w-5xl` for dividers

## Design Tokens

All colors use HSL CSS variables defined in `app/globals.css`. Dark-only palette:
- Background: pure black (`0 0% 0%`)
- Foreground: pure white (`0 0% 100%`)
- Muted foreground: mid-gray (`0 0% 55%`) — used for secondary text and labels
- Border: dark gray (`0 0% 18%`)
- Section headings: uppercase, `text-sm`, `tracking-widest`, `text-muted-foreground`

## Notes

- Logo image is hosted on Vercel blob storage (remote pattern configured in `next.config.mjs`)
- `next.config.mjs` has `ignoreBuildErrors: true` for TypeScript — v0 scaffold convenience, should be removed when stabilized
- Many shadcn/ui components are installed but unused — v0 includes a full set by default
