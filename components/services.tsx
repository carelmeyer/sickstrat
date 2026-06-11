import { AnimatedSection } from "@/components/animated-section"

const services = [
  {
    title: "Research & Prototyping",
    description:
      "Map the territory. Test the assumptions. Deliver a working prototype, not a report.",
  },
  {
    title: "Product Strategy",
    description:
      "Kill the noise. What to ship, what to automate, what to cut. No roadmap theater.",
  },
  {
    title: "Technical Architecture",
    description:
      "Systems that don't flinch. Agents that don't hallucinate. Risk encoded as a gate, not buried in a report.",
  },
  {
    title: "AI Integration",
    description:
      "Into your existing stack without burning it down. No rewrites, no science fairs. Production-grade, battle-tested, shipped.",
  },
  {
    title: "Full Build",
    description:
      "Hand us the problem, we'll hand you the product. End to end, no babysitting required.",
  },
  {
    title: "Fractional Leadership",
    description:
      "Product and engineering. 25+ years deep. From strategy down to the codebase. One discipline, not two.",
  },
]

export function Services() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-32">
      <AnimatedSection>
        <h2 className="glitch mb-16 font-mono text-sm font-medium uppercase tracking-widest text-muted-foreground" data-text="01 — What We Do">
          01 — What We Do
        </h2>
      </AnimatedSection>
      <div className="grid gap-12 md:grid-cols-2">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 100}>
            <div className="group">
              <h3 className="glitch-hover mb-3 text-xl font-medium text-foreground" data-text={service.title}>
                {service.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
