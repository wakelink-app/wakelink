import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-dark border-t border-[#2693D8]/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-6">
          Join Early. <span className="text-[#2693D8]">Earn More.</span>
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
          We're early. Get in now, get seen first. Early owners get the spot.
        </p>
        <Link
          to="/list-your-jet-ski"
          className="inline-block w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-[#2693D8] text-black font-semibold rounded-xl shadow-soft hover:bg-[#3BA3E8] transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-0.5 text-center min-h-[48px] flex items-center justify-center touch-manipulation"
        >
          List Your Jet Ski Now
        </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
