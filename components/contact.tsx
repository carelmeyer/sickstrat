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
    <div className="mx-auto max-w-4xl px-6 py-32 pb-48">
      <AnimatedSection>
        <h2 className="mb-16 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Contact
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <p className="mb-10 text-3xl font-medium text-foreground md:text-4xl">
          Ready when you are.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <a
          href={`mailto:${email}`}
          className="group inline-flex items-center gap-3 border-b border-muted-foreground/30 pb-1 text-lg text-foreground transition-colors hover:border-foreground"
        >
          <Mail className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
          {email}
        </a>
      </AnimatedSection>
    </div>
  )
}
