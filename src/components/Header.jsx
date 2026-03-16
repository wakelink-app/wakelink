import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/#how-it-works', label: 'How It Works' },
  { to: '/#why-owner', label: 'Owners', isButton: true, outline: true },
  { to: '/#earnings', label: 'Earnings' },
  { to: '/list-your-jet-ski', label: 'List Your Jet Ski', isButton: true },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-[#2693D8]/20 pt-[env(safe-area-inset-top)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-0 group flex-shrink-0 min-w-0">
          <img
            src="/wakelink-logo.png"
            alt="Wakelink"
            className="h-10 sm:h-12 w-auto object-contain flex-shrink-0"
          />
          <span className="flex flex-col items-start leading-[1.2] min-w-0">
            <span className="text-lg sm:text-xl font-bold text-[#2693D8] group-hover:text-[#3BA3E8] transition-colors tracking-tight truncate">Wakelink</span>
            <span className="flex items-center gap-1 -mt-0.5">
              <span className="text-white/40 text-xs font-light">/</span>
              <span className="text-[0.75rem] sm:text-[0.8rem] font-medium text-white/90 tracking-wide">Miami</span>
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link to="/#how-it-works" className="text-white/70 hover:text-[#2693D8] text-sm font-medium transition-colors">
            How It Works
          </Link>
          <Link to="/#why-owner" className="px-4 py-2 border border-[#2693D8]/50 text-[#2693D8] text-sm font-medium rounded-lg hover:bg-[#2693D8]/10 transition-colors">
            Owners
          </Link>
          <Link to="/#earnings" className="text-white/70 hover:text-[#2693D8] text-sm font-medium transition-colors">
            Earnings
          </Link>
          <Link
            to="/list-your-jet-ski"
            className="px-4 py-2 bg-[#2693D8] text-black text-sm font-semibold rounded-lg hover:bg-[#3BA3E8] transition-colors"
          >
            List Your Jet Ski
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 -mr-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav overlay */}
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 top-[calc(env(safe-area-inset-top)+4rem)] bg-dark/98 backdrop-blur-2xl border-t border-white/10 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col p-6 gap-2">
          {navLinks.map(({ to, label, isButton, outline }) => (
            <Link
              key={label}
              to={to}
              onClick={closeMenu}
              className={`block py-4 px-4 rounded-xl text-base font-medium transition-colors touch-manipulation min-h-[48px] flex items-center ${
                isButton
                  ? outline
                    ? 'border border-[#2693D8]/50 text-[#2693D8] hover:bg-[#2693D8]/10'
                    : 'bg-[#2693D8] text-black hover:bg-[#3BA3E8]'
                  : 'text-white/80 hover:text-[#2693D8] hover:bg-white/5'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
