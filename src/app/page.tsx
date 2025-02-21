import { About } from "@/app/components/abou"
import { Hero } from "@/app/components/hero"
import { Services } from "./components/service"
import { Testimonials } from "./components/testimonials"
import { Footer } from "./components/footer"

export default function Home(){
  return(
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )
}