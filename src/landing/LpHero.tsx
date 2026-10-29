import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import { LP } from '../data/landing'
import { CtaButton, Reveal, shell } from './LpUi'
import { PlayButton, YouTubeLite } from './VideoBits'
import { CountUp } from '../components/ui/CountUp'
import { cn } from '../utils/cn'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
})

// The collage is the actual client thumbnails, fanned out dahus-style.
const COLLAGE: { src: string; cls: string; float?: number }[] = [
  { src: '/images/thumbnails/image17.png', cls: 'left-[4%] top-[38%] w-[36%] rotate-[4deg] z-0' },
  { src: '/images/thumbnails/image24.png', cls: 'right-[-3%] top-[36%] w-[32%] rotate-[7deg] z-0' },
  { src: '/images/thumbnails/image20.png', cls: 'left-0 top-[1%] w-[47%] -rotate-6 z-10', float: 7 },
  { src: '/images/thumbnails/image2.png', cls: 'right-0 top-0 w-[45%] rotate-[5deg] z-10', float: 8.5 },
  { src: '/images/thumbnails/image8.png', cls: 'left-[21%] top-[17%] w-[58%] z-20', float: 9 },
  { src: '/images/thumbnails/image10.png', cls: 'bottom-[4%] left-[1%] w-[43%] -rotate-3 z-30', float: 7.5 },
  { src: '/images/thumbnails/image9.png', cls: 'bottom-[1%] right-[2%] w-[47%] rotate-[3deg] z-30', float: 8 },
]

function Collage() {
  const { chips } = LP.hero
  return (
    <div className="relative h-[360px] w-full sm:h-[440px] lg:h-[520px]">
      {COLLAGE.map((item, i) => (
        <motion.img
          key={item.src}
          src={item.src}
          alt=""
          initial={{ opacity: 0, y: 24, rotate: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 + i * 0.07, ease: 'easeOut' }}
          className={cn(
            'absolute aspect-video rounded-xl object-cover shadow-[0_24px_50px_-18px_rgba(10,21,48,0.45)] ring-1 ring-black/10',
            item.cls,
          )}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute -left-2 bottom-[30%] z-40 flex -rotate-2 items-center gap-2.5 rounded-xl bg-white px-3.5 py-2.5 shadow-[0_16px_36px_-12px_rgba(10,21,48,0.4)] ring-1 ring-slate-100 sm:left-[2%]"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
          <TrendingUp className="h-4 w-4" />
        </span>
        <span>
          <span className="block font-archivo text-[15px] font-extrabold leading-none text-navy-900">{chips[0].value}</span>
          <span className="mt-1 block text-[11px] font-medium text-slate-400">{chips[0].label}</span>
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.82 }}
        className="absolute -right-2 top-[30%] z-40 flex rotate-2 items-center gap-2.5 rounded-xl bg-white px-3.5 py-2.5 shadow-[0_16px_36px_-12px_rgba(10,21,48,0.4)] ring-1 ring-slate-100 sm:right-[1%]"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50 text-brand-600">
          <TrendingUp className="h-4 w-4" />
        </span>
        <span>
          <span className="block font-archivo text-[15px] font-extrabold leading-none text-navy-900">{chips[1].value}</span>
          <span className="mt-1 block text-[11px] font-medium text-slate-400">{chips[1].label}</span>
        </span>
      </motion.div>
    </div>
  )
}

function Vsl() {
  const { vsl } = LP
  return (
    <Reveal className="mx-auto mt-16 max-w-4xl md:mt-20">
      <p className="mb-3.5 flex items-center gap-2 text-sm font-bold text-navy-900">
        {vsl.label}
        <span className="font-medium text-slate-400">— how the whole system works, in 9 minutes</span>
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
    <section id="top" className="relative">
      <div className={shell}>
        <div className="grid items-center gap-12 pt-[130px] lg:grid-cols-[1fr_1.05fr] lg:gap-8 lg:pt-[160px]">
          <div>
            <motion.p {...fade(0)} className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand-600">
              <span className="h-px w-8 bg-brand-600" />
              {hero.kicker}
            </motion.p>

            <motion.h1
              {...fade(0.07)}
              className="mt-5 text-[clamp(2.7rem,5.6vw,4.6rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-navy-900"
            >
              {hero.titleTop}{' '}
              <span className="relative inline-block whitespace-nowrap text-brand-600">
                {hero.titleAccent}
                <svg viewBox="0 0 220 12" preserveAspectRatio="none" className="absolute -bottom-1.5 left-0 h-[10px] w-full text-brand-300" aria-hidden="true">
                  <path d="M3 9 C 60 3, 150 3, 217 7" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
                </svg>
              </span>{' '}
              {hero.titleBottom}
            </motion.h1>

            <motion.p {...fade(0.14)} className="mt-6 max-w-lg text-[17px] leading-relaxed text-slate-500">
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

          <Collage />
        </div>

        <Vsl />

        <Reveal className="mt-16 border-y border-slate-200/90 md:mt-20">
          <div className="grid grid-cols-2 divide-slate-200/90 max-lg:gap-y-2 lg:grid-cols-4 lg:divide-x">
            {hero.stats.map((s) => (
              <div key={s.label} className="py-7 lg:px-8 lg:first:pl-0">
                <p className="font-archivo text-4xl font-extrabold tracking-tight text-navy-900 md:text-[2.75rem]">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-1 text-sm text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
