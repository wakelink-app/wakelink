// No launch date yet — timer stays as hype placeholder
const units = [
  { value: '—', label: 'Days' },
  { value: '—', label: 'Hours' },
  { value: '—', label: 'Minutes' },
  { value: '—', label: 'Seconds' },
]

export default function CountdownTimer() {
  return (
    <div className="mb-12 animate-fade-in-delay-2 opacity-0">
      <p className="text-sm font-medium text-[#2693D8] tracking-widest uppercase mb-6">
        Coming soon
      </p>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-6">
        {units.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center min-w-[60px] xs:min-w-[70px] sm:min-w-[90px] py-4 sm:py-5 px-3 sm:px-4 rounded-xl sm:rounded-2xl bg-[#2693D8]/10 backdrop-blur-sm border border-[#2693D8]/40"
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2693D8]/60 tabular-nums tracking-tight">
              {value}
            </span>
            <span className="text-xs font-medium text-[#2693D8]/80 mt-1 tracking-wider uppercase">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
