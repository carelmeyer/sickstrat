"use client"

import { useMemo } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Mail } from "lucide-react"

function useEmail() {
  return useMemo(() => {
    const user = "hello"
    const domain = "sickstrat"
    const tld = "com"
    return `${user}@${domain}.${tld}`
  }, [])
}

export function Contact() {
  const email = useEmail()

  return (
    <div className="mx-auto max-w-4xl px-6 py-32">
      <div className="md:grid md:grid-cols-[200px_1fr] md:gap-12">
        <div>
          <div className="md:sticky md:top-32">
            <AnimatedSection>
              <h2 className="glitch mb-16 font-mono text-sm font-medium uppercase tracking-widest text-muted-foreground md:mb-0" data-text="04 — Contact">
                04 — Contact
              </h2>
            </AnimatedSection>
          </div>
        </div>
        <div>
          <AnimatedSection variant="none" delay={100}>
            <p className="glitch-snap mb-12 text-5xl font-medium tracking-tight text-foreground md:text-6xl">
              Ready to move? So are we.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-3 border-b border-muted-foreground/30 pb-1 font-mono text-base text-foreground transition-colors hover:border-foreground"
            >
              <Mail className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
              {email}
            </a>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
