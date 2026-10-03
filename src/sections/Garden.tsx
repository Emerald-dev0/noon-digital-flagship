import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion'
import { GARDEN } from '../data/content'
import { Reveal } from '../components/ui/Reveal'

/* The vine. Drawn in a 1000 x 2000 box and stretched to the canvas with
   preserveAspectRatio="none" — strokes stay even thanks to non-scaling-stroke. */
const VINE =
  'M500,0 C500,110 408,168 406,300 C404,432 604,470 606,620 C608,772 402,800 400,950 C398,1100 606,1140 608,1290 C610,1442 402,1470 402,1620 C402,1762 494,1852 500,2000'

const VB = { w: 1000, h: 2000 }
const NODE_AT = [0.165, 0.5, 0.845] // where Plant / Grow / Harvest sit on the vine
const LEAF_AT = [0.06, 0.1, 0.23, 0.29, 0.36, 0.43, 0.57, 0.63, 0.7, 0.76, 0.9, 0.95]

type Pt = { x: number; y: number }

function useVinePoints() {
  const ref = useRef<SVGPathElement>(null)
  const [samples, setSamples] = useState<Pt[]>([])

  useEffect(() => {
    const path = ref.current
    if (!path) return
    const len = path.getTotalLength()
    const out: Pt[] = []
    for (let i = 0; i <= 240; i++) {
      const p = path.getPointAtLength((i / 240) * len)
      out.push({ x: (p.x / VB.w) * 100, y: (p.y / VB.h) * 100 })
    }
    setSamples(out)
  }, [])

  const at = (t: number): Pt => {
    if (!samples.length) return { x: 50, y: t * 100 }
    return samples[Math.min(samples.length - 1, Math.round(t * (samples.length - 1)))]
  }

  return { ref, samples, at }
}

/* ---------------------------------------------------------------- leaf art */
function Leaf({ flip, tone }: { flip: boolean; tone: 'violet' | 'ember' }) {
  return (
    <svg
      viewBox="0 0 48 30"
      className={`h-[26px] w-[42px] md:h-[34px] md:w-[54px] ${flip ? '-scale-x-100' : ''}`}
      style={{ filter: `drop-shadow(0 0 10px ${tone === 'ember' ? 'rgba(255,138,61,.5)' : 'rgba(139,92,246,.55)'})` }}
      aria-hidden
    >
      <path
        d="M2 26C6 8 22 1 46 2 44 20 28 29 2 26Z"
        fill={tone === 'ember' ? 'rgba(255,138,61,0.16)' : 'rgba(139,92,246,0.18)'}
        stroke={tone === 'ember' ? '#ffa552' : '#bda2ff'}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path
        d="M4 25C16 19 32 11 45 3"
        stroke={tone === 'ember' ? '#ffc98a' : '#d6c6ff'}
        strokeWidth="0.8"
        opacity="0.7"
        fill="none"
      />
    </svg>
  )
}

/* ------------------------------------------------------- stage proof panes */
function ProofPane({ stage }: { stage: (typeof GARDEN.stages)[number] }) {
  const proof = stage.proof as any

  if (proof.type === 'serp') {
    return (
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {proof.images.map((img: { src: string; caption: string }) => (
          <figure
            key={img.src}
            className="thumb-frame group relative overflow-hidden rounded-xl bg-white"
          >
            <img
              src={img.src}
              alt={`YouTube search results for ${img.caption}`}
              loading="lazy"
              className="img-proof block h-[220px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] md:h-[240px]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-ink-950/90 px-3 py-2 font-sans text-[10.5px] tracking-wide text-white/60 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    )
  }

  if (proof.type === 'thumbs') {
    return (
      <div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {proof.images.map((src: string, i: number) => (
            <motion.figure
              key={src}
              whileHover={{ y: -5, rotate: i % 2 ? 1.4 : -1.4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="thumb-frame overflow-hidden rounded-lg"
            >
              <img src={src} alt="Client video thumbnail" loading="lazy" className="img-bright block aspect-video w-full object-cover" />
            </motion.figure>
          ))}
        </div>
        {/* extra unused thumbnails — bright strip */}
        <div className="no-bar mt-2.5 flex gap-2.5 overflow-x-auto pb-1">
          {['/images/thumbnails/image5.png', '/images/thumbnails/image7.png', '/images/thumbnails/image15.png', '/images/thumbnails/image18.png'].map((src) => (
            <img key={src} src={src} alt="More client thumbnails" loading="lazy" className="img-bright h-[52px] w-[92px] shrink-0 rounded-md border border-white/15 object-cover" />
          ))}
        </div>
      </div>
    )
  }

  // attribution table + real chat receipt
  const max = Math.max(...proof.rows.map((r: any) => r.calls))
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-white/10 bg-ink-950/60 p-4 md:p-5">
        <div className="mb-3 flex items-center justify-between gap-2 font-sans text-[10.5px] uppercase tracking-[0.16em] text-white/35">
          <span>Lead source</span>
          <span className="text-right">Calls booked · last month</span>
        </div>
        <ul className="space-y-2">
          {proof.rows.map((r: any) => (
            <li key={r.source} className="relative flex items-center gap-2 sm:gap-3">
              <span className="w-[72px] shrink-0 text-[12px] text-white/60 sm:w-[86px] sm:text-[12.5px]">{r.source}</span>
              <span className="relative h-[22px] flex-1 overflow-hidden rounded-[5px] bg-white/[0.045]">
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: Math.max(r.calls / max, 0.012) }}
                  viewport={{ once: true, margin: '-15%' }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className={`absolute inset-y-0 left-0 w-full origin-left rounded-[5px] ${
                    r.calls === max
                      ? 'bg-gradient-to-r from-ember-500 to-ember-300 shadow-[0_0_24px_-4px_rgba(255,138,61,0.8)]'
                      : 'bg-violet-500/35'
                  }`}
                />
              </span>
              <span
                className={`num w-7 shrink-0 text-right text-[12.5px] ${
                  r.calls === max ? 'text-ember-300' : 'text-white/40'
                }`}
              >
                {r.calls}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3.5 text-[11.5px] text-white/30">
          Client attribution sheet. Dialling, email and paid social: zero.
        </p>
      </div>
      <figure className="thumb-frame-warm overflow-hidden rounded-xl">
        <img src="/assets/chat/chat-revshare.png" alt="Client chat confirming revenue share payout" loading="lazy" className="img-proof block w-full object-cover" style={{ maxHeight: 180 }} />
        <figcaption className="flex items-center gap-2 bg-ink-950/90 px-3 py-2 font-sans text-[10.5px] text-white/55">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Real client message · revenue-share confirmed
        </figcaption>
      </figure>
    </div>
  )
}

/* ---------------------------------------------------------------- the card */
function StageCard({
  stage,
  side,
}: {
  stage: (typeof GARDEN.stages)[number]
  side: 'left' | 'right'
}) {
  const reduced = useReducedMotion()

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 40, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full max-w-[600px] ${
        side === 'right' ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'
      }`}
    >
      <div className="glow-ring surface relative overflow-hidden p-6 shadow-lift md:p-8">
        <div
          aria-hidden
          className={`absolute -top-24 h-52 w-52 rounded-full blur-[80px] ${
            stage.key === 'harvest' ? 'bg-ember-600/[0.22]' : 'bg-violet-600/[0.22]'
          } ${side === 'right' ? '-right-20' : '-left-20'}`}
        />

        <header className="relative flex items-center gap-3">
          <span className="num font-display text-[12px] tracking-[0.18em] text-white/30">{stage.index}</span>
          <span className="h-px w-6 bg-white/15" />
          <h3 className="font-display text-[clamp(1.75rem,3.6vw,2.6rem)] font-semibold tracking-[-0.045em] text-white">
            {stage.name}
          </h3>
          <span
            className={`ml-auto rounded-full border px-3 py-1 font-sans text-[10.5px] uppercase tracking-[0.14em] ${
              stage.key === 'harvest'
                ? 'border-ember-400/30 bg-ember-500/10 text-ember-300'
                : 'border-violet-400/30 bg-violet-500/10 text-violet-200'
            }`}
          >
            {stage.alias}
          </span>
        </header>

        <p className="relative mt-5 font-display text-[clamp(1.05rem,2.1vw,1.3rem)] font-medium leading-[1.25] tracking-[-0.025em] text-white/[0.92]">
          {stage.headline}
        </p>
        <p className="relative mt-3.5 text-[14.5px] leading-relaxed text-white/[0.52]">{stage.body}</p>

        <ul className="relative mt-6 grid gap-2 sm:grid-cols-2">
          {stage.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-[12.8px] text-white/60">
              <svg viewBox="0 0 12 12" className="mt-[5px] h-2.5 w-2.5 shrink-0" aria-hidden>
                <path
                  d="M6 1.5 7.4 4.6 10.5 6 7.4 7.4 6 10.5 4.6 7.4 1.5 6 4.6 4.6Z"
                  fill={stage.key === 'harvest' ? '#ffa552' : '#a279ff'}
                />
              </svg>
              {b}
            </li>
          ))}
        </ul>

        <div className="relative mt-7">
          <ProofPane stage={stage} />
        </div>

        <footer className="relative mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-white/[0.08] pt-5">
          <span
            className={`num font-display text-[clamp(1.6rem,3.4vw,2.2rem)] font-semibold tracking-[-0.045em] ${
              stage.key === 'harvest' ? 'text-ember-400' : 'text-violet-200'
            }`}
          >
            {stage.metric.value}
          </span>
          <span className="text-[12.5px] leading-snug text-white/[0.42]">{stage.metric.label}</span>
        </footer>
      </div>
    </motion.article>
  )
}

/* ================================================================= SECTION */
export function Garden() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { ref: measureRef, samples, at } = useVinePoints()

  const { scrollYProgress } = useScroll({
    target: canvasRef,
    offset: ['start 78%', 'end 65%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 30, mass: 0.35 })
  const full = useTransform(progress, () => 1)
  const draw = reduced ? full : progress

  // travelling bud position, sampled off the real path geometry
  const budX = useTransform(progress, (v) => `${at(Math.min(Math.max(v, 0), 1)).x}%`)
  const budY = useTransform(progress, (v) => `${at(Math.min(Math.max(v, 0), 1)).y}%`)
  const budOpacity = useTransform(progress, [0, 0.03, 0.97, 1], [0, 1, 1, 0])

  return (
    <section id="garden" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[60rem] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(139,92,246,0.14),transparent_70%)]"
      />

      {/* ---------------------------------------------------------- header */}
      <div className="shell relative">
        <Reveal className="mx-auto max-w-[44rem] text-center">
          <span className="eyebrow mx-auto">{GARDEN.eyebrow}</span>
          <h2 className="fluid-h2 mt-6 font-display text-white">
            The YouTube{' '}
            <span className="bg-gradient-to-br from-violet-200 via-violet-400 to-ember-400 bg-clip-text text-transparent">
              Garden
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-[34rem] text-[15.5px] leading-relaxed text-white/50">{GARDEN.sub}</p>
          <div className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5">
            {GARDEN.stages.map((s, i) => (
              <span key={s.key} className="flex items-center gap-4">
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-white/45">{s.name}</span>
                {i < 2 && <span className="h-1 w-1 rounded-full bg-white/20" />}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* ---------------------------------------------------------- canvas */}
      <div ref={canvasRef} className="shell relative mt-16 md:mt-24">
        <div className="relative">
          {/* vine layer */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <svg
              viewBox={`0 0 ${VB.w} ${VB.h}`}
              preserveAspectRatio="none"
              className="h-full w-full"
              aria-hidden
            >
              <defs>
                <linearGradient id="vineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5b23c4" />
                  <stop offset="45%" stopColor="#a279ff" />
                  <stop offset="100%" stopColor="#ff8a3d" />
                </linearGradient>
                <filter id="vineGlow" x="-40%" y="-10%" width="180%" height="120%">
                  <feGaussianBlur stdDeviation="9" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* ghost track */}
              <path
                ref={measureRef}
                d={VINE}
                fill="none"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="1 7"
                strokeLinecap="round"
              />
              {/* glow pass */}
              <motion.path
                d={VINE}
                fill="none"
                stroke="url(#vineGrad)"
                strokeWidth="7"
                opacity="0.35"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                filter="url(#vineGlow)"
                style={{ pathLength: draw }}
              />
              {/* crisp pass */}
              <motion.path
                d={VINE}
                fill="none"
                stroke="url(#vineGrad)"
                strokeWidth="2.4"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                style={{ pathLength: draw }}
              />
            </svg>

            {/* leaves, pinned to real points on the vine */}
            {samples.length > 0 &&
              LEAF_AT.map((t, i) => {
                const p = at(t)
                return <LeafAt key={t} p={p} t={t} i={i} progress={progress} />
              })}

            {/* travelling bud */}
            {samples.length > 0 && !reduced && (
              <motion.span
                style={{ left: budX, top: budY, opacity: budOpacity }}
                className="absolute -ml-[9px] -mt-[9px] block h-[18px] w-[18px] rounded-full"
              >
                <span className="absolute inset-0 rounded-full bg-violet-300 shadow-[0_0_28px_8px_rgba(167,121,255,0.65)]" />
                <span className="absolute inset-[5px] rounded-full bg-white" />
              </motion.span>
            )}
          </div>

          {/* stage rows */}
          <div className="relative z-10 space-y-20 md:space-y-28">
            {GARDEN.stages.map((stage, i) => (
              <div
                key={stage.key}
                className={`relative flex ${i === 1 ? 'justify-start' : 'justify-end'} ${
                  i === 0 ? 'pt-6' : ''
                } ${i === 2 ? 'pb-10' : ''}`}
              >
                <span
                  aria-hidden
                  className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 select-none font-display text-[clamp(5rem,11vw,10rem)] font-semibold leading-none tracking-[-0.06em] text-white/[0.035] lg:block ${
                    i === 1 ? 'right-[4%]' : 'left-[4%]'
                  }`}
                >
                  {stage.name}
                </span>
                <StageCard stage={stage} side={i === 1 ? 'left' : 'right'} />
              </div>
            ))}
          </div>

          {/* stage nodes on the vine (desktop only — they would collide on mobile) */}
          {samples.length > 0 &&
            GARDEN.stages.map((stage, i) => {
              const p = at(NODE_AT[i])
              return (
                <NodeMarker
                  key={stage.key}
                  label={stage.name}
                  p={p}
                  threshold={NODE_AT[i]}
                  progress={progress}
                  tone={stage.key === 'harvest' ? 'ember' : 'violet'}
                />
              )
            })}
        </div>
      </div>

      <div className="shell relative mt-16 text-center md:mt-20">
        <Reveal>
          <p className="mx-auto max-w-[38rem] text-[15px] text-white/45">
            Plant, grow, harvest. Then do it again next quarter with the compounding advantage of everything
            already ranking.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- leaf wrapper */
function LeafAt({
  p,
  t,
  i,
  progress,
}: {
  p: Pt
  t: number
  i: number
  progress: MotionValue<number>
}) {
  const reduced = useReducedMotion()
  const scale = useTransform(progress, [t - 0.03, t + 0.02], [reduced ? 1 : 0, 1])
  const opacity = useTransform(progress, [t - 0.03, t + 0.02], [reduced ? 1 : 0, 1])
  const flip = i % 2 === 0
  return (
    <motion.span
      style={{
        left: `${p.x}%`,
        top: `${p.y}%`,
        scale,
        opacity,
        rotate: flip ? -22 + (i % 3) * 7 : 160 + (i % 3) * 7,
        transformOrigin: flip ? '0% 100%' : '0% 100%',
      }}
      className="absolute block origin-left"
    >
      <Leaf flip={false} tone={t > 0.78 ? 'ember' : 'violet'} />
    </motion.span>
  )
}

/* -------------------------------------------------------- node marker */
function NodeMarker({
  label,
  p,
  threshold,
  progress,
  tone,
}: {
  label: string
  p: Pt
  threshold: number
  progress: MotionValue<number>
  tone: 'violet' | 'ember'
}) {
  const reduced = useReducedMotion()
  const scale = useTransform(progress, [threshold - 0.05, threshold], [reduced ? 1 : 0.2, 1])
  const opacity = useTransform(progress, [threshold - 0.05, threshold], [reduced ? 1 : 0, 1])

  return (
    <motion.div
      style={{ left: `${p.x}%`, top: `${p.y}%`, scale, opacity }}
      className="pointer-events-none absolute z-20 hidden -translate-x-1/2 -translate-y-1/2 md:block"
    >
      <span className="relative flex h-14 w-14 items-center justify-center">
        <span
          className={`absolute inset-0 rounded-full ${
            tone === 'ember' ? 'bg-ember-500/[0.18]' : 'bg-violet-500/[0.18]'
          } backdrop-blur-sm`}
        />
        <span
          className={`absolute inset-0 rounded-full border ${
            tone === 'ember' ? 'border-ember-400/50' : 'border-violet-300/50'
          }`}
        />
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            tone === 'ember'
              ? 'bg-ember-400 shadow-[0_0_22px_6px_rgba(255,138,61,0.55)]'
              : 'bg-violet-200 shadow-[0_0_22px_6px_rgba(167,121,255,0.55)]'
          }`}
        />
        <span className="absolute -bottom-7 whitespace-nowrap font-sans text-[10.5px] uppercase tracking-[0.22em] text-white/55">
          {label}
        </span>
      </span>
    </motion.div>
  )
}
