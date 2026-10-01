import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TICKER } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

function Row({
  reverse = false,
  duration = '42s',
  rowRef,
}: {
  reverse?: boolean
  duration?: string
  rowRef?: React.RefObject<HTMLDivElement>
}) {
  const items = [...TICKER, ...TICKER]
  return (
    <div className="mask-fade-x flex overflow-hidden">
      <div
        ref={rowRef}
        className="flex shrink-0 animate-marquee items-center gap-10 pr-10 will-change-transform"
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
              <span className="absolute inset-0 bg-violet-400 blur-[6px]" />
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Ticker() {
  const wrap = useRef<HTMLElement>(null)
  const a = useRef<HTMLDivElement>(null)
  const b = useRef<HTMLDivElement>(null)

  /* Scroll velocity bends the ticker: it skews and briefly speeds up while
     you fling the page, then settles. Pure GSAP, quickTo for cheap updates. */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rows = [a.current, b.current].filter(Boolean) as HTMLDivElement[]
    if (!rows.length) return

    const skewTo = rows.map((r) => gsap.quickTo(r, 'skewX', { duration: 0.6, ease: 'power3.out' }))
    const xTo = rows.map((r) => gsap.quickTo(r, 'x', { duration: 0.8, ease: 'power3.out' }))

    const st = ScrollTrigger.create({
      trigger: wrap.current,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const v = gsap.utils.clamp(-18, 18, self.getVelocity() / 180)
        rows.forEach((_, i) => {
          skewTo[i](v * (i === 1 ? -0.5 : 1))
          xTo[i](v * (i === 1 ? -3 : 4))
        })
      },
      onLeave: () => rows.forEach((_, i) => skewTo[i](0)),
    })

    return () => st.kill()
  }, [])

  return (
    <section
      ref={wrap}
      aria-label="What we believe"
      className="relative select-none overflow-hidden border-y border-white/[0.08] bg-ink-900/60 py-7 md:py-9"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_140%_at_50%_50%,rgba(139,92,246,0.14),transparent_70%)]"
      />
      <div className="relative space-y-3">
        <Row duration="54s" rowRef={a} />
        <div className="opacity-45">
          <Row reverse duration="68s" rowRef={b} />
        </div>
      </div>
    </section>
  )
}
