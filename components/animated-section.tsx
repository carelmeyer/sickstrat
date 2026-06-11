"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type Variant = "up" | "left" | "right" | "none"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  /** Entrance direction; "none" only toggles `is-visible` (for CSS-driven entrances) */
  variant?: Variant
}

const hiddenByVariant: Record<Variant, string> = {
  up: "opacity-0 translate-y-4",
  left: "opacity-0 -translate-x-20",
  right: "opacity-0 translate-x-20",
  none: "",
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  variant = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <section
      ref={ref}
      className={cn(
        variant !== "none" &&
          "transition-all duration-500 ease-snap motion-reduce:transition-none",
        isVisible
          ? "is-visible translate-x-0 translate-y-0 opacity-100"
          : cn(
              hiddenByVariant[variant],
              "motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
            ),
        className
      )}
    >
      {children}
    </section>
  )
}
