import ScrollReveal from './ScrollReveal'

const steps = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Tap',
    description: 'Browse what\'s near you. Filter by location, price, whatever matters.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Match',
    description: 'Pick one, book it. Payment\'s handled. No surprises.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Ride',
    description: 'Meet up, get the keys, go. Done.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-4">
            How It <span className="text-[#2693D8]">Works</span>
          </h2>
          <p className="text-lg text-[#2693D8]/90 text-center max-w-2xl mx-auto mb-4">
            Tap. Match. Ride.
          </p>
          <p className="text-base text-white/60 text-center max-w-2xl mx-auto mb-16">
            That's it. Three steps.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 md:gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 100}>
            <div
              key={i}
              className="group relative p-6 sm:p-8 rounded-2xl bg-card-dark border border-white/10 transition-all duration-300 hover:border-[#2693D8]/50 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 text-[#2693D8] group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="mb-2 text-sm font-medium text-[#2693D8]">{`Step ${i + 1}`}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.description}</p>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
