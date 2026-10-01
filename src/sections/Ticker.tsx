import { TICKER } from '../data/content'

function Row({ reverse = false, duration = '42s' }: { reverse?: boolean; duration?: string }) {
  const items = [...TICKER, ...TICKER]
  return (
    <div className="mask-fade-x flex overflow-hidden">
      <div
        className="flex shrink-0 animate-marquee items-center gap-10 pr-10"
        style={
          {
            '--marquee-duration': duration,
            animationDirection: reverse ? 'reverse' : 'normal',
          } as React.CSSProperties
        }
      >
        {items.map((t, i) => (
          <span key={`${t}-${i}`} className="flex shrink-0 items-center gap-10">
            <span className="whitespace-nowrap font-display text-[clamp(1.1rem,2.4vw,1.75rem)] font-medium tracking-[-0.035em] text-white/80">
              {t}
            </span>
            <span aria-hidden className="relative h-1.5 w-1.5 shrink-0 rotate-45 bg-violet-400/80">
              <span className="absolute inset-0 blur-[6px] bg-violet-400" />
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Ticker() {
  return (
    <section aria-label="What we believe" className="relative select-none border-y border-white/[0.08] bg-ink-900/60 py-7 md:py-9">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_140%_at_50%_50%,rgba(139,92,246,0.14),transparent_70%)]"
      />
      <div className="relative space-y-3">
        <Row duration="54s" />
        <div className="opacity-45">
          <Row reverse duration="68s" />
        </div>
      </div>
    </section>
  )
}
