export function NoonMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[12px] ${className}`}
      style={{
        background: 'linear-gradient(135deg, #1a1035 0%, #2d1065 45%, #4c1d95 70%, #7c2d12 100%)',
        boxShadow:
          '0 0 0 1px rgba(255,255,255,0.14) inset, 0 8px 24px -8px rgba(139,92,246,0.7), 0 4px 12px -4px rgba(255,138,61,0.4)',
      }}
      aria-hidden
    >
      {/* glow wash */}
      <span
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(90% 90% at 20% 10%, rgba(189,162,255,0.5), transparent 55%), radial-gradient(80% 80% at 85% 90%, rgba(255,138,61,0.45), transparent 60%)',
        }}
      />
      <svg viewBox="0 0 32 32" className="relative h-[68%] w-[68%]" aria-hidden>
        <defs>
          <linearGradient id="noonGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ede9fe" />
            <stop offset="45%" stopColor="#bda2ff" />
            <stop offset="78%" stopColor="#ffa552" />
            <stop offset="100%" stopColor="#ffc98a" />
          </linearGradient>
        </defs>
        {/* ن — crescent bowl + dot: noon, the Arabic letter, and a sunrise */}
        <path
          d="M5 13.5c0 6.8 4.9 11.2 11 11.2s11-4.4 11-11.2"
          fill="none"
          stroke="url(#noonGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="16" cy="7" r="3" fill="url(#noonGrad)" />
        {/* sunrise tick */}
        <path d="M16 17.5v4M12.5 19l2 1.6M19.5 19l-2 1.6" stroke="#ffc98a" strokeWidth="1.4" strokeLinecap="round" opacity="0.9" />
      </svg>
    </span>
  )
}

export function Wordmark({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <NoonMark />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[17px] font-bold tracking-[-0.02em] text-white">
            Noon Digital
          </span>
          <span className="mt-[3px] font-sans text-[9px] font-medium uppercase tracking-[0.32em] text-white/45">
            YouTube that books
          </span>
        </span>
      )}
    </span>
  )
}
