import { AnimatedSection } from "@/components/animated-section"

const services = [
  {
    title: "Research & Prototyping",
    description:
      "Deep research, fast answers. We explore the problem space, test the assumptions, and deliver a working prototype — not a report.",
  },
  {
    title: "Product Strategy",
    description:
      "We kill the noise. Sharp product vision for AI-native and agentic builds — what to ship, what to automate, what to cut. No roadmap theater.",
  },
  {
    title: "Technical Architecture",
    description:
      "Built to take impact. Agentic systems, LLM orchestration, data pipelines, infra calls you can bet on. We design systems that don't flinch — and agents that don't hallucinate.",
  },
  {
    title: "AI Integration",
    description:
      "AI and agentic automation into your existing stack without burning it down. No rewrites, no science fairs. Production-grade, battle-tested, shipped.",
  },
  {
    title: "Full Build",
    description:
      "Hand us the problem, we'll hand you the product. From agentic workflows to full platforms — strategy, design, engineering, deployment. End to end, no babysitting required.",
  },
  {
    title: "Fractional Leadership",
    description:
      "Fractional leadership across product and engineering — 25+ years deep, scoped to the challenge, from strategy down to the codebase.",
  },
]

export function Services() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-32">
      <AnimatedSection>
        <h2 className="mb-16 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          What We Do
        </h2>
      </AnimatedSection>
      <div className="grid gap-12 md:grid-cols-2">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 100}>
            <div className="group">
              <h3 className="mb-3 text-xl font-medium text-foreground">
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
