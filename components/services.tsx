import { AnimatedSection } from "@/components/animated-section"

const services = [
  {
    title: "Product Strategy",
    description:
      "No fluff roadmaps. We define the what and why for AI-native products — then cut everything else.",
  },
  {
    title: "Technical Architecture",
    description:
      "System design that holds under pressure. LLM orchestration, data pipelines, infra decisions you won't have to undo.",
  },
  {
    title: "Fractional Leadership",
    description:
      "Fractional leadership across product and engineering — whatever the run demands, from strategy down to the codebase.",
  },
  {
    title: "AI Integration",
    description:
      "AI into your existing stack without torching what works. Production-grade. No science projects.",
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
