import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Approach } from "@/components/approach"
import { Proof } from "@/components/proof"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main>
      <Hero />
      <div className="mx-auto w-full max-w-5xl">
        <hr className="border-border" />
      </div>
      <Services />
      <div className="mx-auto w-full max-w-5xl">
        <hr className="border-border" />
      </div>
      <Approach />
      <div className="mx-auto w-full max-w-5xl">
        <hr className="border-border" />
      </div>
      <Proof />
      <div className="mx-auto w-full max-w-5xl">
        <hr className="border-border" />
      </div>
      <Contact />
    </main>
  )
}
