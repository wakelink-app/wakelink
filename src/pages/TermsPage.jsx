import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main className="pt-24 sm:pt-28 pb-16 sm:pb-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 min-w-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">
            Terms of <span className="text-[#2693D8]">Service</span>
          </h1>
          <div className="text-white/80 text-sm leading-relaxed space-y-6 mb-8">
            <p className="text-white/60">Last updated: {new Date().toLocaleDateString()}</p>
            
            <p>
              By using Wakelink, you agree to these terms. We provide a platform that connects jet ski owners with renters. You must be 18 or older to make a booking.
            </p>
            
            <p>
              <strong className="text-white">For owners:</strong> You're responsible for your listings and your equipment. Make sure everything you list is accurate and in good working order. You'll coordinate directly with renters for handoffs and returns.
            </p>
            
            <p>
              <strong className="text-white">For renters:</strong> Follow all safety guidelines and local laws. Treat the equipment with care. You're responsible for any damage beyond normal wear and tear.
            </p>
            
            <p>
              Wakelink facilitates the connection between users. We're not responsible for user conduct, equipment condition, or disputes between owners and renters. We encourage everyone to communicate clearly and act in good faith.
            </p>
            
            <p>
              We reserve the right to suspend or remove accounts that violate these terms or our community standards. If you have questions, reach out at <a href="mailto:support@wakelinkapp.com" className="text-[#2693D8] hover:text-[#3BA3E8] underline transition-colors">support@wakelinkapp.com</a>.
            </p>
          </div>
          <Link to="/" className="text-[#2693D8] hover:text-[#3BA3E8] font-medium transition-colors">
            ← Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
