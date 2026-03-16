import ScrollReveal from './ScrollReveal'

const features = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Secure Payments',
    description: 'Secure payment processing. We handle the money. You get paid directly.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Verified Renters',
    description: 'Everyone\'s verified. You know who\'s on your ski.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Flexible Schedule',
    description: 'Your ski, your calendar. Block off days when you wanna ride.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Built for Miami',
    description: 'Sun, water, jet skis. That\'s the vibe. We get it.',
  },
]

export default function WhyWakelink() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-4">
            Why <span className="text-[#2693D8]">Wakelink</span>
          </h2>
          <p className="text-lg text-[#2693D8]/90 text-center max-w-2xl mx-auto mb-16">
            Miami's jet ski community. We're building it.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 80}>
            <div
              key={i}
              className="group h-full flex flex-col p-5 sm:p-6 bg-card-dark rounded-2xl border border-white/10 transition-all duration-300 hover:border-[#2693D8]/50 hover:-translate-y-1"
            >
              <div className="text-[#2693D8] mb-4 group-hover:scale-105 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
