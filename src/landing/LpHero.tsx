import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight01Icon, Asterisk02Icon, CallIcon, EyeIcon, PlayCircleIcon, Search01Icon } from 'hugeicons-react'
import { LP } from '../data/landing'
import { CountUp } from '../components/ui/CountUp'
import { CtaButton, Em, Reveal, shell } from './LpUi'
import { PlayButton, YouTubeLite } from './VideoBits'
import { cn } from '../utils/cn'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

// The searches our clients actually rank for (from the ranking data),
// typed out one by one in a YouTube-style search box.
function TypedSearch() {
  const queries = LP.ranking.terms.map((t) => t.term)
  const reduce = useReducedMotion()
  const [text, setText] = useState<string>(queries[0])

  useEffect(() => {
    if (reduce) return
    let qi = 0
    let ci = queries[0].length
    let deleting = false
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      const full = queries[qi]
      if (!deleting) {
        ci += 1
        setText(full.slice(0, ci))
        if (ci === full.length) {
          deleting = true
          timer = setTimeout(tick, 1700)
          return
        }
        timer = setTimeout(tick, 55)
      } else {
        ci -= 1
        setText(full.slice(0, ci))
        if (ci === 0) {
          deleting = false
          qi = (qi + 1) % queries.length
          timer = setTimeout(tick, 380)
          return
        }
        timer = setTimeout(tick, 24)
      }
    }
    timer = setTimeout(tick, 1900)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce])

  return (
    <div className="flex items-center gap-3 rounded-full border border-ink-900/15 bg-paper py-3.5 pl-5 pr-4 shadow-[0_16px_36px_-20px_rgba(10,8,16,0.35)]">
      <span className="min-w-0 flex-1 truncate text-[15px] font-medium text-ink-900">
        {text}
        <motion.span
          aria-hidden="true"
          className="ml-0.5 inline-block h-[18px] w-[2px] translate-y-[3px] rounded-full bg-brand-500"
          animate={reduce ? undefined : { opacity: [1, 0, 1] }}
          transition={{ duration: 1.05, repeat: Infinity, ease: 'easeInOut' }}
        />
      </span>
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink-900 text-white">
        <Search01Icon size={17} strokeWidth={2.2} />
      </span>
    </div>
  )
}

function FloatChip({ className, delay = 0, children }: { className?: string; delay?: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      className={cn('absolute z-20', className)}
    >
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay }}
        className="flex items-center gap-2 rounded-full bg-paper py-2 pl-2.5 pr-3.5 shadow-[0_16px_34px_-14px_rgba(10,8,16,0.45)] ring-1 ring-ink-900/10"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
      className="relative mx-auto w-full max-w-[540px] lg:max-w-none"
    >
      <div className="relative overflow-hidden rounded-[28px] border border-ink-900/10 bg-brand-300 shadow-[0_44px_84px_-34px_rgba(122,62,238,0.5)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.55)_1.2px,transparent_1.2px)] [background-size:22px_22px]"
        />
        <PlayCircleIcon aria-hidden="true" className="absolute -right-10 -top-10 h-48 w-48 text-white/25" strokeWidth={1.1} />

        <div className="relative p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-900/60">From the channels</p>
            <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-900/60">
              <span className="h-1.5 w-1.5 rounded-full bg-blush-500" />
              Live now
            </p>
          </div>

          <div className="relative mt-5 h-[292px] sm:h-[330px]">
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="absolute left-0 top-1 w-[68%]"
            >
              <motion.img
                src="/images/thumbnails/image8.png"
                alt="Appointment Setting 7HR Course — client thumbnail"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full rounded-xl border-4 border-white shadow-[0_24px_44px_-16px_rgba(10,8,16,0.5)]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 3.5 }}
              transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
              className="absolute bottom-9 right-0 w-[62%]"
            >
              <motion.img
                src="/images/thumbnails/image10.png"
                alt="Learn Arabic Like A Baby — client thumbnail"
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="w-full rounded-xl border-4 border-white shadow-[0_24px_44px_-16px_rgba(10,8,16,0.5)]"
              />
            </motion.div>

            <FloatChip className="right-1 top-0 sm:right-3" delay={0.95}>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-100 text-brand-700">
                <CallIcon size={15} strokeWidth={2} />
              </span>
              <span className="text-[13px] font-bold text-ink-900">37 calls / month</span>
            </FloatChip>
            <FloatChip className="bottom-20 left-0 sm:left-2" delay={1.1}>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-100 text-brand-700">
                <EyeIcon size={16} strokeWidth={2} />
              </span>
              <span className="text-[13px] font-bold text-ink-900">201K views, one video</span>
            </FloatChip>

            <motion.div
              initial={{ opacity: 0, y: 16, rotate: -12 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ duration: 0.6, delay: 1.25, ease: EASE }}
              className="absolute -bottom-1 left-5 z-20 bg-blush-500 px-3.5 py-2.5 shadow-[0_14px_28px_-10px_rgba(255,105,197,0.7)]"
            >
              <p className="text-[13px] font-bold leading-tight text-ink-900">
                £29,078 collected
                <span className="block font-semibold text-ink-900/65">in a single quarter</span>
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative flex items-center justify-between gap-4 bg-ink-900 px-5 py-4 sm:px-7">
          <p className="text-sm font-bold text-white">Real thumbnails. Real channels. Real calls.</p>
          <a
            href="#work"
            aria-label="See our work"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/30 text-white transition-colors duration-200 hover:bg-white hover:text-ink-900"
          >
            <ArrowUpRight01Icon size={17} strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const TICKER = ['Arabic coaches', 'Tech sales', 'Appointment setting', 'Tutoring', 'Personal brands', 'Podcasts', 'YouTube SEO', 'Thumbnails', 'Scripting']

function Ticker() {
  const row = [...TICKER, ...TICKER, ...TICKER, ...TICKER]
  return (
    <div className="overflow-hidden bg-ink-900 py-3.5" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center gap-7 [--marquee-duration:38s]">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-7 text-[13px] font-bold uppercase tracking-[0.18em] text-cream">
            {w}
            <Asterisk02Icon size={15} strokeWidth={2.4} className="text-blush-500" />
          </span>
        ))}
      </div>
    </div>
  )
}

function Vsl() {
  const { vsl } = LP
  return (
    <div className="mt-14 pb-16 md:mt-20 md:pb-24">
      <Reveal>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="flex flex-wrap items-center gap-x-2.5 text-base font-bold text-ink-900">
            <PlayCircleIcon size={23} strokeWidth={1.9} className="text-brand-600" />
            {vsl.label}
            <span className="font-medium text-slate-400">— how the whole system works, in 9 minutes</span>
          </p>
          <p className="text-xs font-bold tabular-nums text-slate-400">{vsl.duration}</p>
        </div>
      </Reveal>
      <Reveal delay={0.08} className="max-w-4xl">
        <div className="rounded-[22px] border border-ink-900/10 bg-paper p-2 shadow-[0_38px_72px_-32px_rgba(10,8,16,0.4)]">
          {vsl.youtubeId ? (
            <YouTubeLite id={vsl.youtubeId} title="Watch this first" rounded="rounded-2xl" />
          ) : (
            <div className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-navy-950">
              <img src={vsl.poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <span className="absolute inset-0 bg-black/45" />
              <button type="button" className="absolute inset-0 grid w-full cursor-pointer place-items-center" aria-label="Play the video">
                <PlayButton size="lg" />
              </button>
              <span className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-5 pb-4">
                <span className="relative h-1 flex-1 rounded-full bg-white/25">
                  <span className="absolute inset-y-0 left-0 w-[4%] rounded-full bg-blush-500" />
                </span>
                <span className="text-xs font-semibold tabular-nums text-white/90">{vsl.duration}</span>
              </span>
            </div>
          )}
        </div>
      </Reveal>
    </div>
  )
}

export function LpHero() {
  const { hero } = LP

  return (
    <section id="top" className="relative overflow-hidden">
      <div className={shell}>
        <div className="grid items-center gap-12 pt-[118px] md:pt-[150px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <Reveal>
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-600">
                <span className="h-2 w-2 rounded-[2px] bg-blush-500" aria-hidden="true" />
                {hero.kicker}
              </p>
            </Reveal>

            <h1 className="mt-5 font-helv text-[clamp(2.9rem,6.4vw,5.2rem)] font-bold leading-[0.98] tracking-[-0.035em] text-ink-900">
              <span className="block overflow-hidden pb-1">
                <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.85, delay: 0.05, ease: EASE }}>
                  {hero.titleTop}
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.85, delay: 0.16, ease: EASE }}>
                  <Em>{hero.titleAccent}</Em>
                </motion.span>
              </span>
            </h1>

            <Reveal delay={0.28}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{hero.sub}</p>
            </Reveal>

            <Reveal delay={0.36}>
              <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center">
                <CtaButton href={hero.cta.href} className="w-full px-8 py-4 text-base sm:w-auto">
                  {hero.cta.label}
                </CtaButton>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {hero.avatars.map((src) => (
                      <img key={src} src={src} alt="" className="h-9 w-9 rounded-full object-cover ring-2 ring-cream" />
                    ))}
                  </div>
                  <p className="max-w-[210px] text-[13px] font-medium leading-tight text-slate-500">
                    Zakariya, Shaf, Aqib, Yaseen — four of the nine channels below
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.44}>
              <div className="mt-9 max-w-xl">
                <p className="mb-2.5 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  <span>What your buyers search</span>
                  <span>On YouTube, right now</span>
                </p>
                <TypedSearch />
                <p className="mt-2.5 text-[13px] text-slate-500">
                  Search any of those — <strong className="font-bold text-ink-900">you&apos;ll find our clients.</strong>
                </p>
              </div>
            </Reveal>
          </div>

          <HeroVisual />
        </div>

        <Reveal className="mt-14 grid grid-cols-2 border-t border-ink-900/10 md:mt-20 lg:grid-cols-4" delay={0.1}>
          {hero.stats.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                'border-ink-900/10 py-6 lg:py-8',
                i % 2 === 1 && 'border-l pl-6',
                i >= 2 && 'border-t lg:border-t-0',
                i > 0 && 'lg:border-l lg:pl-8',
              )}
            >
              <p className="font-helv text-[2.3rem] font-bold leading-none tracking-tight text-ink-900 md:text-[3rem]">
                <CountUp value={s.value} />
              </p>
              <p className="mt-2 text-[13px] text-slate-500">{s.label}</p>
            </div>
          ))}
        </Reveal>

        <Vsl />
      </div>

      <Ticker />
    </section>
  )
}
