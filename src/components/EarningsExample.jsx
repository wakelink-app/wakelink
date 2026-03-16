import ScrollReveal from './ScrollReveal'

export default function EarningsExample() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-bg-dark">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-12">
        <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-4">
          Owner <span className="text-[#2693D8]">Earnings</span> Example
        </h2>
        <p className="text-lg text-[#2693D8]/90 text-center mb-12">
          The numbers. No BS.
        </p>

        <div className="bg-card-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 transition-all duration-300 hover:border-[#2693D8]/50 overflow-hidden">
          <div className="text-center mb-8">
            <div className="text-4xl md:text-5xl font-bold text-[#2693D8] mb-2">$100</div>
            <div className="text-white/70">per hour rental</div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-1 py-3 border-b border-white/10">
              <span className="text-white/80 text-sm sm:text-base">Owner keeps (75%)</span>
              <span className="font-semibold text-[#2693D8]">$75</span>
            </div>
            <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-1 py-3 border-b border-white/10">
              <span className="text-white/80 text-sm sm:text-base">Platform fee (25%)</span>
              <span className="font-medium text-white">$25</span>
            </div>
          </div>

          <p className="mt-6 text-sm text-white/60 text-center">
            10 hours a week = <span className="font-semibold text-[#2693D8]">$750</span> in your pocket
          </p>
        </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
