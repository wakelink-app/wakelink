import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main className="pt-24 sm:pt-28 pb-16 sm:pb-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 min-w-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">
            About <span className="text-[#2693D8]">Wakelink</span>
          </h1>
          <p className="text-white/80 leading-relaxed mb-12">
            Built for Miami. Owners list their rides, renters book on the spot. No rental shops, no appointments—just find one, book it, go. We're big on impulse. See it, want it, ride it.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6">
              For <span className="text-[#2693D8]">Renters</span>
            </h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Want to ride but don't wanna own? Same. We built this for that. Browse what's near you, pick one, book it. Could be on the water in an hour. We're not about planning weeks ahead—it's for when you wake up and decide today's a jet ski day.
              </p>
              <p>
                Renters are verified, listings are real. You'll see what you're getting before you pay. Meet the owner, grab the keys, go. First time or hundredth, doesn't matter. We've got options.
              </p>
              <p>
                Payment's straightforward. No surprises. Hit us up if something's off.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">
              For <span className="text-[#2693D8]">Owners</span>
            </h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Your jet ski's probably sitting there most of the time, right? We get it. List it, set your price, block off days when you wanna use it. The rest of the time it's making you money. Most people ride a few hours a week max. The rest is wasted.
              </p>
              <p>
                We run the app and handle payments. You keep 75%. You take care of the in-person stuff—meet the renter, hand over the keys, show them the basics. That's on you.
              </p>
              <p>
                Getting in early means you're at the top when we grow.
              </p>
            </div>
          </section>

          <Link to="/" className="text-[#2693D8] hover:text-[#3BA3E8] font-medium transition-colors">
            ← Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
