import { motion } from 'framer-motion'
import { BadgeCheck, Play } from 'lucide-react'
import { LP } from '../data/landing'
import { CtaButton, Eyebrow, shell } from './LpUi'
import { YouTubeLite } from './VideoBits'
import { CountUp } from '../components/ui/CountUp'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
})

function VslPlayer() {
  const { vsl } = LP

  if (vsl.youtubeId) {
    return <YouTubeLite id={vsl.youtubeId} title="VSL" rounded="rounded-3xl" />
  }

  /* PLACEHOLDER — renders until LP.vsl.youtubeId is set in src/data/landing.ts */
  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-3xl bg-navy-950">
      <div className="absolute inset-0 bg-[radial-gradient(120%_150%_at_20%_0%,#2f6bff_0%,#17337f_42%,#060d26_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(70% 70% at 50% 40%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(70% 70% at 50% 40%, black, transparent)',
        }}
      />
      <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white/85 ring-1 ring-white/20 backdrop-blur">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
        {vsl.label}
      </span>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
        <span className="relative grid place-items-center">
          <span className="absolute h-24 w-24 animate-ping rounded-full bg-brand-400/30" />
          <span className="relative grid h-24 w-24 place-items-center rounded-full bg-brand-600 text-white shadow-[0_24px_50px_-12px_rgba(47,107,255,0.9)]">
            <Play className="ml-1.5 h-10 w-10 fill-current" />
          </span>
        </span>
        <p className="max-w-md text-balance text-xl font-bold text-white md:text-2xl">
          How we book calls from YouTube search
        </p>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
          VSL drops here
        </p>
      </div>
      {/* faux progress bar */}
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-white/10">
        <div className="h-full w-[8%] bg-brand-500" />
      </div>
    </div>
  )
}

export function LpHero() {
  const { hero } = LP

  return (
    <section id="top" className="relative overflow-hidden pt-[150px] md:pt-[170px]">
      {/* soft blue wash, dahus-style */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(60%_100%_at_50%_0%,#dbe7ff_0%,#eef3ff_45%,transparent_100%)]" />
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl" />
        <div className="absolute -right-40 top-64 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl" />
      </div>

      <div className={`${shell} relative`}>
        <div className="mx-auto max-w-3xl text-center">
          <motion.div {...fade(0)}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 text-[clamp(2.4rem,5.4vw,4.3rem)] font-extrabold leading-[1.02] tracking-tight text-navy-900"
          >
            {hero.titleA}{' '}
            <span className="bg-gradient-to-r from-brand-600 to-sky-500 bg-clip-text text-transparent">
              {hero.titleAccent}
            </span>
          </motion.h1>

          <motion.p {...fade(0.16)} className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-500 md:text-lg">
            {hero.sub}
          </motion.p>
        </div>

        <motion.div {...fade(0.24)} className="relative mx-auto mt-12 max-w-4xl">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-b from-brand-400/35 via-brand-300/15 to-transparent blur-2xl" />
          <div className="relative rounded-3xl bg-white p-2 shadow-[0_40px_90px_-30px_rgba(23,51,127,0.45)] ring-1 ring-slate-200/80">
            <VslPlayer />
          </div>
        </motion.div>

        <motion.div {...fade(0.32)} className="mt-10 flex flex-col items-center gap-4">
          <CtaButton href={hero.cta.href} className="px-9 py-4 text-base">
            {hero.cta.label}
          </CtaButton>
          <p className="flex items-center gap-2 text-sm font-medium text-slate-400">
            <BadgeCheck className="h-4 w-4 text-emerald-500" />
            {hero.ctaNote}
          </p>
        </motion.div>

        {/* stat band */}
        <motion.div
          {...fade(0.4)}
          className="mx-auto mt-14 grid max-w-4xl divide-y divide-slate-100 rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_-30px_rgba(23,51,127,0.35)] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {hero.stats.map((s) => (
            <div key={s.label} className="px-6 py-7 text-center">
              <div className="text-4xl font-extrabold tracking-tight text-navy-900 md:text-[2.6rem]">
                <CountUp value={s.value} />
              </div>
              <div className="mt-1.5 text-sm font-medium text-slate-400">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
