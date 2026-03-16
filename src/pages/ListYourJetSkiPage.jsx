import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Add your Google Apps Script Web App URL to .env as VITE_GOOGLE_SCRIPT_URL
const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || ''

export default function ListYourJetSkiPage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [jetSkis, setJetSkis] = useState('')
  const [status, setStatus] = useState('') // 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (status === 'success') {
      const t = setTimeout(() => navigate('/', { state: { listSuccess: true } }), 2000)
      return () => clearTimeout(t)
    }
  }, [status, navigate])

  const handleSubmitForm = (e) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !phone.trim() || !jetSkis) {
      setStatus('error')
      setErrorMsg('Please fill in all fields.')
      return
    }
    setStatus('loading')
    setErrorMsg('')
    if (SCRIPT_URL) {
      const form = document.createElement('form')
      form.method = 'GET'
      form.action = SCRIPT_URL
      form.target = 'wakelink-form-frame'
      form.style.display = 'none'
      const formData = { name: name.trim(), email: email.trim(), phone: phone.trim(), jetskis: jetSkis }
      Object.entries(formData).forEach(([key, val]) => {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = key
        input.value = val
        form.appendChild(input)
      })
      document.body.appendChild(form)
      form.submit()
      document.body.removeChild(form)
      setStatus('success')
      setName('')
      setEmail('')
      setPhone('')
      setJetSkis('')
    } else {
      // Fallback: open mailto
      const subject = encodeURIComponent('List My Jet Ski - Wakelink')
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nJet Skis: ${jetSkis}`)
      window.location.href = `mailto:support@wakelinkapp.com?subject=${subject}&body=${body}`
      setStatus('success')
    }
  }

  return (
    <div className="min-h-screen bg-dark">
      <iframe name="wakelink-form-frame" title="Form submit" className="hidden" />
      <Header />
      <main className="pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-md mx-auto w-full min-w-0">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-2">
            List Your Jet Ski
          </h1>
          <p className="text-white/70 text-center mb-10">
            We'll be in touch soon.
          </p>

          {!SCRIPT_URL && (
            <div className="mb-6 p-4 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-200 text-sm">
              <strong>Setup required:</strong> Add your Google Apps Script URL to <code className="bg-black/30 px-1 rounded">.env</code> as <code className="bg-black/30 px-1 rounded">VITE_GOOGLE_SCRIPT_URL</code>, then restart the dev server. Until then, submissions will open your email client.
            </div>
          )}

          <form onSubmit={handleSubmitForm} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-card-dark border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#2693D8]/50 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-card-dark border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#2693D8]/50 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 123-4567"
                className="w-full px-4 py-3 rounded-xl bg-card-dark border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#2693D8]/50 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="jetSkis" className="block text-sm font-medium text-white/90 mb-2">
                How many jet skis do you own?
              </label>
              <select
                id="jetSkis"
                value={jetSkis}
                onChange={(e) => setJetSkis(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-card-dark border border-white/10 text-white focus:outline-none focus:border-[#2693D8]/50 transition-colors appearance-none cursor-pointer"
                required
              >
                <option value="" className="bg-card-dark text-white/40">Select...</option>
                <option value="1" className="bg-card-dark">1</option>
                <option value="2" className="bg-card-dark">2</option>
                <option value="3+" className="bg-card-dark">3+</option>
              </select>
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm">{errorMsg}</p>
            )}

            {status === 'success' && (
              <p className="text-[#2693D8] text-center font-medium">Thanks! We'll reach out soon. Taking you home...</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading' || !name.trim() || !email.trim() || !phone.trim() || !jetSkis}
              className="w-full py-3.5 sm:py-4 bg-[#2693D8] text-black font-semibold rounded-xl hover:bg-[#3BA3E8] transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] touch-manipulation"
            >
              {status === 'loading' ? 'Submitting...' : "Let's Connect"}
            </button>
          </form>

          <Link to="/" className="block text-center text-[#2693D8] hover:text-[#3BA3E8] text-sm mt-8 transition-colors">
            ← Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
