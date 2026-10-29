import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import { LP } from '../data/landing'
import { CtaButton, Em, Reveal, shell } from './LpUi'
import { PlayButton, YouTubeLite } from './VideoBits'
import { CountUp } from '../components/ui/CountUp'
import { cn } from '../utils/cn'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
})

// The wall: all 24 real client thumbnails in three scrolling columns.
const sm = (n: number) => `/images/thumbnails/sm/image${n}.webp`
const COLUMNS: { images: number[]; duration: string; reverse?: boolean }[] = [
  { images: [8, 1, 15, 20, 6, 13, 22, 4], duration: '42s' },
  { images: [2, 17, 10, 23, 5, 19, 12, 21], duration: '52s', reverse: true },
  { images: [9, 3, 24, 11, 16, 7, 14, 18], duration: '46s' },
]

function ThumbWall() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="relative h-[420px] overflow-hidden sm:h-[500px] lg:h-[600px]"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 12%, black 86%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 12%, black 86%, transparent)',
      }}
      aria-hidden="true"
    >
      <div className="flex h-full -rotate-3 scale-[1.12] items-start justify-center gap-3">
        {COLUMNS.map((col, ci) => (
          <div
            key={ci}
            className={cn(
              'flex w-[31%] min-w-[150px] max-w-[230px] shrink-0 animate-marquee-y flex-col gap-3',
              ci === 2 && 'hidden sm:flex',
            )}
            style={{
              '--marquee-duration': col.duration,
              animationDirection: col.reverse ? 'reverse' : undefined,
            } as React.CSSProperties}
          >
            {[...col.images, ...col.images].map((n, i) => (
              <img
                key={`${n}-${i}`}
                src={sm(n)}
                alt=""
                loading={i < 4 ? 'eager' : 'lazy'}
                className="aspect-video w-full rounded-lg object-cover shadow-[0_14px_30px_-12px_rgba(10,21,48,0.35)] ring-1 ring-black/10"
              />
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function FloatChip({
  chip,
  className,
  delay,
}: {
  chip: { value: string; label: string }
  className?: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'absolute z-20 flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-2.5 shadow-[0_18px_40px_-12px_rgba(10,21,48,0.45)] ring-1 ring-slate-100',
        className,
      )}
    >
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
        <TrendingUp className="h-4 w-4" />
      </span>
      <span>
        <span className="block font-archivo text-[15px] font-extrabold leading-none text-navy-900">{chip.value}</span>
        <span className="mt-1 block text-[11px] font-medium text-slate-400">{chip.label}</span>
      </span>
    </motion.div>
  )
}

function Vsl() {
  const { vsl } = LP
  return (
    <Reveal className="mx-auto mt-16 max-w-4xl md:mt-24">
      <p className="mb-3.5 flex items-baseline gap-2 text-[15px] font-bold text-navy-900">
        {vsl.label}
        <span className="text-sm font-medium text-slate-400">— how the whole system works, in 9 minutes</span>
      </p>
      {vsl.youtubeId ? (
        <YouTubeLite id={vsl.youtubeId} title="Watch this first" className="shadow-[0_30px_70px_-24px_rgba(10,21,48,0.5)]" />
      ) : (
        <div className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-navy-950 shadow-[0_30px_70px_-24px_rgba(10,21,48,0.5)]">
          <img src={vsl.poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute inset-0 bg-black/45" />
          <button type="button" className="absolute inset-0 grid w-full cursor-pointer place-items-center" aria-label="Play the video">
            <PlayButton size="lg" />
          </button>
          <span className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-5 pb-4">
            <span className="relative h-1 flex-1 rounded-full bg-white/25">
              <span className="absolute inset-y-0 left-0 w-[4%] rounded-full bg-brand-500" />
            </span>
            <span className="text-xs font-semibold tabular-nums text-white/90">{vsl.duration}</span>
          </span>
        </div>
      )}
    </Reveal>
  )
}

export function LpHero() {
  const { hero } = LP

  return (
    <section id="top" className="relative overflow-hidden">
      {/* faint blue tint, dahus-style — flat, no blobs */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-[linear-gradient(to_bottom,#e8efff_0%,#f4f8ff_55%,#ffffff_100%)]" />

      <div className={`${shell} relative`}>
        <div className="grid items-center gap-10 pt-[128px] lg:grid-cols-[1fr_1.02fr] lg:gap-6 lg:pt-[150px]">
          <div className="relative z-10">
            <motion.p {...fade(0)} className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand-600">
              <span className="h-px w-8 bg-brand-600" />
              {hero.kicker}
            </motion.p>

            <motion.h1
              {...fade(0.07)}
              className="mt-5 text-[clamp(3rem,6.4vw,5.4rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-navy-900"
            >
              {hero.titleTop} <Em>{hero.titleAccent}</Em>
            </motion.h1>

            <motion.p {...fade(0.14)} className="mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600">
              {hero.sub}
            </motion.p>

            <motion.div {...fade(0.21)} className="mt-8 flex flex-wrap items-center gap-5">
              <CtaButton href={hero.cta.href} className="px-8 py-4 text-base">
                {hero.cta.label}
              </CtaButton>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {hero.avatars.map((src) => (
                    <img key={src} src={src} alt="" className="h-9 w-9 rounded-full object-cover ring-2 ring-white" />
                  ))}
                </div>
                <p className="max-w-[150px] text-[13px] font-medium leading-tight text-slate-500">{hero.socialProof}</p>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <ThumbWall />
            <FloatChip chip={hero.chips[0]} delay={0.75} className="-left-1 bottom-[16%] -rotate-2 sm:left-[3%]" />
            <FloatChip chip={hero.chips[1]} delay={0.9} className="-right-1 top-[12%] rotate-2 sm:right-[3%]" />
          </div>
        </div>

        <Vsl />

        <Reveal className="mt-16 border-y border-slate-200/90 md:mt-24">
          <div className="grid grid-cols-2 divide-slate-200/90 max-lg:gap-y-2 lg:grid-cols-4 lg:divide-x">
            {hero.stats.map((s) => (
              <div key={s.label} className="py-8 lg:px-9 lg:first:pl-0">
                <p className="font-archivo text-5xl font-extrabold tracking-tight text-navy-900 md:text-[3.4rem]">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-1.5 text-sm text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
