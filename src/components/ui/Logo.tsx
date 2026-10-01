export function NoonMark({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <linearGradient id="noonGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#bda2ff" />
          <stop offset="55%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ff8a3d" />
        </linearGradient>
      </defs>
      {/* ن — a crescent bowl with the dot: noon, the Arabic letter, and a sunrise at once */}
      <path
        d="M5 12c0 7.2 4.9 12 11 12s11-4.8 11-12"
        fill="none"
        stroke="url(#noonGrad)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="16" cy="6.4" r="2.6" fill="url(#noonGrad)" />
    </svg>
  )
}

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <NoonMark />
      <span className="font-display text-[17px] font-semibold tracking-[-0.03em] text-white">
        Noon<span className="text-white/40">&nbsp;Digital</span>
      </span>
    </span>
  )
}
