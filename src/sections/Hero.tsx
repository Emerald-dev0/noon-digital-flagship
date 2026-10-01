import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion, useMotionValue, useSpring } from 'framer-motion'
import { HERO } from '../data/content'
import { RevealLines, Reveal } from '../components/ui/Reveal'
import { MagneticButton, ArrowGlyph } from '../components/ui/MagneticButton'
import { CountUp } from '../components/ui/CountUp'

const QUERY = 'appointment setting course'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 120])
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, reduced ? 1 : 0.15])

  // pointer parallax for the card stack
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const px = useSpring(mx, { stiffness: 90, damping: 20 })
  const py = useSpring(my, { stiffness: 90, damping: 20 })

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={(e) => {
        if (reduced) return
        const r = e.currentTarget.getBoundingClientRect()
        mx.set(((e.clientX - r.left) / r.width - 0.5) * 2)
        my.set(((e.clientY - r.top) / r.height - 0.5) * 2)
      }}
      className="relative overflow-hidden pb-20 pt-[132px] md:pb-28 md:pt-[180px]"
    >
      {/* ambient light */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-18rem] h-[42rem] w-[72rem] -translate-x-1/2 rounded-full bg-violet-700/[0.22] blur-[140px]" />
        <div className="absolute right-[-10rem] top-[14rem] h-[30rem] w-[30rem] rounded-full bg-ember-600/[0.12] blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(110% 70% at 50% 10%, #000 20%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(110% 70% at 50% 10%, #000 20%, transparent 75%)',
          }}
        />
      </div>

      <motion.div style={{ y, opacity: fade }} className="shell">
        <div className="grid items-end gap-14 lg:grid-cols-12 lg:gap-10">
          {/* ---------------------------------------------------------- copy */}
          <div className="lg:col-span-7">
            <Reveal y={14} delay={0.05}>
              <span className="eyebrow">{HERO.eyebrow}</span>
            </Reveal>

            <RevealLines
              lines={HERO.lines}
              accentIndex={2}
              delay={0.18}
              className="fluid-display mt-7 font-display font-semibold text-white"
            />

            <Reveal delay={0.55} y={18} className="mt-8 max-w-[34rem]">
              <p className="text-[16.5px] leading-[1.7] text-white/[0.62] md:text-[17.5px]">{HERO.sub}</p>
            </Reveal>

            <Reveal delay={0.68} y={18} className="mt-9 flex flex-wrap items-center gap-3.5">
              <MagneticButton href={HERO.primary.href}>
                {HERO.primary.label} <ArrowGlyph />
              </MagneticButton>
              <MagneticButton href={HERO.secondary.href} variant="ghost" strength={0.22}>
                {HERO.secondary.label}
              </MagneticButton>
            </Reveal>

            <Reveal delay={0.8} y={12} className="mt-5">
              <p className="text-[12.5px] text-white/35">{HERO.microCopy}</p>
            </Reveal>
          </div>

          {/* -------------------------------------------------------- visual */}
          <div className="lg:col-span-5">
            <motion.div
              style={{
                x: useTransform(px, [-1, 1], [-14, 14]),
                y: useTransform(py, [-1, 1], [-10, 10]),
              }}
              className="relative mx-auto h-[395px] w-full max-w-[460px] sm:h-[420px]"
            >
              {/* search pill */}
              <Reveal delay={0.3} y={20} className="absolute left-0 top-0 z-30 w-[86%]">
                <div className="glow-ring surface flex items-center gap-3 rounded-full px-4 py-3">
                  <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-white/40" fill="none">
                    <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M13.5 13.5 17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  <span className="truncate font-sans text-[13.5px] text-white/80">
                    {QUERY}
                    {!reduced && (
                      <motion.span
                        animate={{ opacity: [1, 0.1, 1] }}
                        transition={{ duration: 1.1, repeat: Infinity }}
                        className="ml-[1px] inline-block h-[14px] w-[1.5px] translate-y-[2px] bg-violet-300"
                      />
                    )}
                  </span>
                  <span className="ml-auto hidden shrink-0 rounded-full bg-violet-500/15 px-2.5 py-1 font-sans text-[10.5px] font-medium tracking-wide text-violet-200 sm:block">
                    #1 result
                  </span>
                </div>
              </Reveal>

              {/* stacked result cards */}
              {[
                { src: '/images/thumbnails/image20.png', rot: -7, x: 0, yy: 86, z: 10, scale: 0.9, delay: 0.5 },
                { src: '/images/thumbnails/image24.png', rot: 5, x: 48, yy: 132, z: 20, scale: 0.95, delay: 0.42 },
                { src: '/images/thumbnails/image4.png', rot: -2, x: 16, yy: 182, z: 30, scale: 1, delay: 0.34 },
              ].map((c) => (
                <motion.figure
                  key={c.src}
                  initial={reduced ? false : { opacity: 0, y: c.yy + 40, rotate: c.rot * 2, scale: c.scale * 0.94 }}
                  animate={{ opacity: 1, y: c.yy, rotate: c.rot, scale: c.scale }}
                  transition={{ duration: 1.1, delay: c.delay, ease: [0.16, 1, 0.3, 1] }}
                  style={{ zIndex: c.z, left: c.x }}
                  className="absolute w-[82%] overflow-hidden rounded-xl border border-white/[0.12] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]"
                >
                  <img src={c.src} alt="" loading="eager" className="block aspect-video w-full object-cover" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/85 to-transparent px-3 pb-2 pt-8">
                    <span className="rounded bg-black/60 px-1.5 py-0.5 font-sans text-[10px] text-white/75">
                      ranked
                    </span>
                  </figcaption>
                </motion.figure>
              ))}

              <div
                aria-hidden
                className="absolute bottom-[-4rem] left-1/2 h-40 w-[26rem] -translate-x-1/2 rounded-full bg-violet-600/[0.22] blur-[90px]"
              />
            </motion.div>
          </div>
        </div>

        {/* --------------------------------------------------------- stats */}
        <Reveal delay={0.9} y={22} className="mt-16 md:mt-24">
          <div className="hairline" />
          <dl className="grid gap-px overflow-hidden sm:grid-cols-3">
            {HERO.stats.map((s) => (
              <div key={s.label} className="group relative py-7 pr-6 sm:py-8">
                <dt
                  className={`num font-display text-[clamp(1.9rem,4vw,2.9rem)] font-semibold tracking-[-0.045em] ${
                    s.tone === 'ember' ? 'text-ember-400' : 'text-white'
                  }`}
                >
                  <CountUp value={s.value} />
                </dt>
                <dd className="mt-1.5 max-w-[16rem] text-[13px] leading-snug text-white/45">{s.label}</dd>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-violet-400 to-transparent transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </dl>
        </Reveal>
      </motion.div>
    </section>
  )
}
