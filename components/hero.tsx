"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6">
      <div
        className={`flex flex-col items-center gap-10 transition-all duration-1000 ease-out motion-reduce:transition-none ${
          loaded
            ? "is-visible opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 motion-reduce:translate-y-0 motion-reduce:opacity-100"
        }`}
      >
        <Image
          src="/sickstrat-logo-glitched.webp"
          alt="sickstrat logo"
          width={800}
          height={800}
          priority
          className="glitch-burst w-full max-w-[80vw] md:max-w-[60vw] lg:max-w-[50vw]"
        />
        <p className="glitch max-w-md text-center text-lg leading-relaxed text-muted-foreground md:text-xl" data-text="Building what's next. Shipping what matters. ▌">
          {"Building what's next. Shipping what matters. "}
          <span className="cursor-blink" aria-hidden>▌</span>
        </p>
      </div>
    </section>
  )
}
