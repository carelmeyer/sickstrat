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
            {"Two gears. We embed with your team — in the code, in the war room, in the calls nobody wants to make. Or we take the whole thing and deliver it done."}
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {"We've done this across every stack, every stage, every market cycle. The reps are in. That's why we're opinionated where it counts and zero ego where it doesn't. We stay until it ships — then we get out of your way."}
          </p>
        </div>
      </AnimatedSection>
    </div>
  )
}
