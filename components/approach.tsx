import { AnimatedSection } from "@/components/animated-section"

export function Approach() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-32">
      <div className="md:grid md:grid-cols-[200px_1fr] md:gap-12">
        <div>
          <div className="md:sticky md:top-32">
            <AnimatedSection>
              <h2 className="glitch mb-16 font-mono text-sm font-medium uppercase tracking-widest text-muted-foreground md:mb-0" data-text="02 — How We Work">
                02 — How We Work
              </h2>
            </AnimatedSection>
          </div>
        </div>
        <div>
          <AnimatedSection delay={100}>
            <p className="mb-12 text-lg leading-relaxed text-foreground">
              {"Two gears."}
            </p>
          </AnimatedSection>
          <div className="mb-12 grid gap-10 overflow-x-clip md:grid-cols-2">
            <AnimatedSection variant="left" delay={150}>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Mode A — Embed
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                {"We embed with your team."}
              </p>
            </AnimatedSection>
            <AnimatedSection variant="right" delay={150}>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Mode B — Deliver
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                {"We take the whole thing and deliver it done."}
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={300}>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {"Every stack, every stage, every market cycle. The reps are in. Opinionated where it counts, zero ego where it doesn't."}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {"We stay until it ships. Then we get out of your way."}
            </p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
