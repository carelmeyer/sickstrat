"use client"

import { useMemo } from "react"

export function Footer() {
  const email = useMemo(() => {
    const user = "hello"
    const domain = "sickstrat"
    const tld = "com"
    return `${user}@${domain}.${tld}`
  }, [])

  return (
    <footer className="mx-auto w-full max-w-4xl px-6 py-10">
      <p className="font-mono text-xs text-muted-foreground">
        {"sickstrat // "}
        <a
          href={`mailto:${email}`}
          className="transition-colors hover:text-foreground"
        >
          {email}
        </a>
        {" // © 2026 "}
        <span className="cursor-blink" aria-hidden>▌</span>
      </p>
    </footer>
  )
}
