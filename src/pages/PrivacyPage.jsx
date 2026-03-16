import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main className="pt-24 sm:pt-28 pb-16 sm:pb-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 min-w-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">
            Privacy <span className="text-[#2693D8]">Policy</span>
          </h1>
          <div className="text-white/80 text-sm leading-relaxed space-y-6 mb-8">
            <p className="text-white/60">Last updated: {new Date().toLocaleDateString()}</p>
            
            <p>
              We collect the information you provide when you sign up, create a listing, or make a booking. This includes your name, email, phone number, and payment details. We use this to run the platform, process transactions, and communicate with you about your account and bookings.
            </p>
            
            <p>
              <strong className="text-white">We don't sell your personal information.</strong> We may share data with payment processors and other service providers we work with to operate Wakelink. These partners are contractually required to protect your information and use it only for the purposes we specify.
            </p>
            
            <p>
              We take security seriously. Your data is stored and transmitted using industry-standard encryption. If we ever experience a breach that affects your information, we'll notify you promptly.
            </p>
            
            <p>
              You can request a copy of your data or ask us to delete your account at any time. For privacy-related questions or requests, contact us at <a href="mailto:support@wakelinkapp.com" className="text-[#2693D8] hover:text-[#3BA3E8] underline transition-colors">support@wakelinkapp.com</a>.
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
