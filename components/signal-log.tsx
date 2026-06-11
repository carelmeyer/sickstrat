"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const GLYPHS = "!<>-_\\/[]{}—=+*^?#01"

function randomGlyphs(count: number) {
  let out = ""
  for (let i = 0; i < count; i++) {
    out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
  }
  return out
}

function SignalLine({ text, active, delay }: { text: string; active: boolean; delay: number }) {
  const [display, setDisplay] = useState("")
  const [dashOn, setDashOn] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!active) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text)
      setDashOn(true)
      setDone(true)
      return
    }

    let interval: ReturnType<typeof setInterval> | undefined
    const timer = setTimeout(() => {
      setDashOn(true)
      let revealed = 0
      interval = setInterval(() => {
        revealed += 1
        if (revealed >= text.length) {
          setDisplay(text)
          setDone(true)
          clearInterval(interval)
        } else {
          const tail = randomGlyphs(Math.min(5, text.length - revealed))
          setDisplay(text.slice(0, revealed) + tail)
        }
      }, 22)
    }, delay)

    return () => {
      clearTimeout(timer)
      if (interval) clearInterval(interval)
    }
  }, [active, delay, text])

  return (
    <div className="flex items-center gap-4">
      <span
        className={cn(
          "h-px w-6 origin-left bg-muted-foreground transition-transform duration-300",
          dashOn ? "scale-x-100" : "scale-x-0"
        )}
      />
      <p className="relative font-mono text-base text-foreground" aria-label={text}>
        <span aria-hidden className="invisible">
          {text}
        </span>
        <span aria-hidden className="absolute inset-0">
          {display}
          {dashOn && !done && <span className="text-muted-foreground">▌</span>}
        </span>
      </p>
    </div>
  )
}

export function SignalLog({ lines }: { lines: string[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex flex-col gap-6">
      {lines.map((line, i) => (
        <SignalLine key={line} text={line} active={started} delay={i * 450} />
      ))}
    </div>
  )
}
