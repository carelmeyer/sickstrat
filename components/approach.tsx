import { AnimatedSection } from "@/components/animated-section"

export function Approach() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-32">
      <AnimatedSection>
        <h2 className="glitch mb-16 font-mono text-sm font-medium uppercase tracking-widest text-muted-foreground" data-text="02 — How We Work">
          02 — How We Work
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <div className="max-w-2xl">
          <p className="mb-6 text-lg leading-relaxed text-foreground">
            {"Two gears. We embed with your team, or we take the whole thing and deliver it done."}
          </p>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            {"Every stack, every stage, every market cycle. The reps are in. Opinionated where it counts, zero ego where it doesn't."}
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {"We stay until it ships. Then we get out of your way."}
          </p>
        </div>
      </AnimatedSection>
    </div>
  )
}
