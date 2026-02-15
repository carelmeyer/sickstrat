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
        className={`flex flex-col items-center gap-10 transition-all duration-1000 ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sickstrat-logo-glitched-uqTDYVsFosVgX1t541NAS7Ku6NPLIp.webp"
          alt="sickstrat logo"
          width={800}
          height={800}
          priority
          className="w-full max-w-[80vw] md:max-w-[60vw] lg:max-w-[50vw]"
        />
        <p className="max-w-md text-center text-lg leading-relaxed text-muted-foreground md:text-xl">
          {"Product & engineering consulting for teams building what's next."}
        </p>
      </div>
    </section>
  )
}
