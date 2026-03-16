import { Link } from 'react-router-dom'
import CountdownTimer from './CountdownTimer'

export default function Hero() {
  return (
    <section className="relative min-h-[85svh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99c2c8c?w=1920')`,
        }}
      />
      <div className="absolute inset-0 bg-dark/60" />
      <div className="absolute inset-0 bg-[#2693D8]/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.15] mb-4 sm:mb-6 animate-fade-in opacity-0">
          <span className="block">Find a Jet Ski Near You</span>
        <span className="block mt-4"><span className="text-[#2693D8]">Or</span> List Yours & Earn</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-3 sm:mb-4 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-1 opacity-0 px-1">
          Spot a jet ski, book it, ride it. We're built for impulse. No planning ahead, no hassle. Miami water in minutes.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#2693D8] mb-8 sm:mb-12 tracking-tight animate-fade-in-delay-1 opacity-0">
          Tap. Match. Ride.
        </p>
        <CountdownTimer />
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-sm sm:max-w-none mx-auto animate-fade-in-delay-3 opacity-0">
          <Link
            to="/list-your-jet-ski"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#2693D8] text-black font-semibold rounded-xl shadow-soft hover:bg-[#3BA3E8] transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-0.5 text-center min-h-[48px] flex items-center justify-center touch-manipulation"
          >
            Become an Owner
          </Link>
        </div>
      </div>
    </section>
  )
}
