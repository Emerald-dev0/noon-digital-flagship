import { useEffect, useState, type CSSProperties } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Asterisk02Icon, PlayCircleIcon, Search01Icon } from 'hugeicons-react'
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

// The wall: all 24 real client thumbnails in three scrolling columns.
const sm = (n: number) => `/images/thumbnails/sm/image${n}.webp`
const COLUMNS: { images: number[]; duration: string; reverse?: boolean }[] = [
  { images: [8, 1, 15, 20, 6, 13, 22, 4], duration: '46s' },
  { images: [2, 17, 10, 23, 5, 19, 12, 21], duration: '56s', reverse: true },
  { images: [9, 3, 24, 11, 16, 7, 14, 18], duration: '50s' },
]

function ThumbWall() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.25 }}
      className="relative h-[340px] overflow-hidden sm:h-[480px] lg:h-[560px]"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 12%, black 86%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 12%, black 86%, transparent)',
      }}
      aria-hidden="true"
    >
      <div className="flex h-full -rotate-3 scale-[1.15] items-start justify-center gap-2.5 sm:gap-3">
        {COLUMNS.map((col, ci) => (
          <div
            key={ci}
            className="flex w-[31%] min-w-[126px] max-w-[230px] shrink-0 animate-marquee-y flex-col gap-2.5 motion-reduce:animate-none sm:gap-3"
            style={
              {
                '--marquee-duration': col.duration,
                animationDirection: col.reverse ? 'reverse' : undefined,
              } as CSSProperties
            }
          >
            {[...col.images, ...col.images].map((n, i) => (
              <img
                key={`${n}-${i}`}
                src={sm(n)}
                alt=""
                loading={i < 4 ? 'eager' : 'lazy'}
                className="aspect-video w-full rounded-lg object-cover shadow-[0_14px_30px_-12px_rgba(10,8,16,0.35)] ring-1 ring-black/10"
              />
            ))}
          </div>
        ))}
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
            <span className="font-medium text-slate-400">— how the whole system works</span>
          </p>
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
            <h1 className="font-helv text-[clamp(2.9rem,6.4vw,5.2rem)] font-bold leading-[0.98] tracking-[-0.035em] text-ink-900">
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
                      <img key={src} src={src} alt="" className="h-9 w-9 rounded-lg object-cover ring-2 ring-cream" />
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
                <TypedSearch />
                <p className="mt-2.5 text-[13px] text-slate-500">
                  Search any of those — <strong className="font-bold text-ink-900">you&apos;ll find our clients.</strong>
                </p>
              </div>
            </Reveal>
          </div>

          <ThumbWall />
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
