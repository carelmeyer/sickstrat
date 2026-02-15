import { AnimatedSection } from "@/components/animated-section"

const signals = [
  "25+ years shipping product at speed.",
  "AI-native since GPT-2.",
  "Startups, scale-ups, Fortune 500 — all the terrain.",
]

export function Proof() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-32">
      <AnimatedSection>
        <h2 className="mb-16 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Signal
        </h2>
      </AnimatedSection>
      <div className="flex flex-col gap-6">
        {signals.map((signal, i) => (
          <AnimatedSection key={signal} delay={i * 100}>
            <div className="flex items-center gap-4">
              <span className="h-px w-6 bg-muted-foreground" />
              <p className="text-lg text-foreground">{signal}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
