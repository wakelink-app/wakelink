import Header from '../components/Header'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import WhyWakelink from '../components/WhyWakelink'
import WhyBeAnOwner from '../components/WhyBeAnOwner'
import EarningsExample from '../components/EarningsExample'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main>
        <Hero />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <WhyWakelink />
        <section id="why-owner">
          <WhyBeAnOwner />
        </section>
        <section id="earnings">
          <EarningsExample />
        </section>
        <section id="owner">
          <CTA />
        </section>
        <Footer />
      </main>
    </div>
  )
}
