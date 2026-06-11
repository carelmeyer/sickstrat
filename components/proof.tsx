import { AnimatedSection } from "@/components/animated-section"
import { SignalLog } from "@/components/signal-log"

const signals = [
  "25+ years shipping product at full send.",
  "AI-native since GPT-2. Agentic since day one.",
  "Startups. Scale-ups. Fortune 500. Every gradient.",
  "We build what lasts.",
]

export function Proof() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-32">
      <div className="md:grid md:grid-cols-[200px_1fr] md:gap-12">
        <div>
          <div className="md:sticky md:top-32">
            <AnimatedSection>
              <h2 className="glitch mb-16 font-mono text-sm font-medium uppercase tracking-widest text-muted-foreground md:mb-0" data-text="03 — Signal">
                03 — Signal
              </h2>
            </AnimatedSection>
          </div>
        </div>
        <SignalLog lines={signals} />
      </div>
    </div>
  )
}
