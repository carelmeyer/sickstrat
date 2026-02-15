import { AnimatedSection } from "@/components/animated-section"

export function Approach() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-32">
      <AnimatedSection>
        <h2 className="mb-16 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          How We Work
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <div className="max-w-2xl">
          <p className="mb-6 text-lg leading-relaxed text-foreground">
            {"We drop in and go. No handoffs, no decks that collect dust. We're in the codebase, in the room, in the hard calls."}
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {"Async-first. Sprint-aligned when it matters. Opinionated where it counts, low-ego everywhere else. We stay until the work ships — not until the contract runs out."}
          </p>
        </div>
      </AnimatedSection>
    </div>
  )
}
