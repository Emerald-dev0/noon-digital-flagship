/** Film-grain + vignette overlay. Sits above everything, eats no pointer events. */
export function Grain() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60]">
      {/* grain */}
      <div
        className="absolute inset-0 opacity-[0.16] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='0.9'/%3E%3C/svg%3E\")",
          backgroundSize: '220px 220px',
        }}
      />
      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(130% 90% at 50% 0%, transparent 45%, rgba(0,0,0,0.45) 100%)',
        }}
      />
      {/* scanline-ish warmth, very subtle */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.8) 0px, rgba(255,255,255,0.8) 1px, transparent 1px, transparent 3px)',
        }}
      />
    </div>
  )
}
