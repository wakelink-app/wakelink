import ScrollReveal from './ScrollReveal'

export default function WhyBeAnOwner() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">
            Why Be an <span className="text-[#2693D8]">Owner</span>?
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
            Your jet ski's sitting there. You use it maybe a few hours a week. Why not make money the rest of the time?
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            List it. Earn when you're not riding. That's the whole pitch.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
