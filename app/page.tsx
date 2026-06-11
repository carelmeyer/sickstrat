import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Approach } from "@/components/approach"
import { Proof } from "@/components/proof"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SignalDivider } from "@/components/signal-divider"

export default function Page() {
  return (
    <main>
      <Hero />
      <SignalDivider offset="22%" />
      <Services />
      <SignalDivider offset="63%" />
      <Approach />
      <SignalDivider offset="38%" />
      <Proof />
      <SignalDivider offset="76%" />
      <Contact />
      <SignalDivider offset="30%" />
      <Footer />
    </main>
  )
}
