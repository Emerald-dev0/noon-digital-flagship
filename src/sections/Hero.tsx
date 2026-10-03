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
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
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

            <Reveal
              delay={0.68}
              y={18}
              className="mt-9 grid grid-cols-1 gap-3 min-[420px]:flex min-[420px]:flex-wrap min-[420px]:items-center min-[420px]:gap-3.5"
            >
              <MagneticButton href={HERO.primary.href} className="w-full justify-center min-[420px]:w-auto">
                {HERO.primary.label} <ArrowGlyph />
              </MagneticButton>
              <MagneticButton
                href={HERO.secondary.href}
                variant="ghost"
                strength={0.22}
                className="w-full justify-center min-[420px]:w-auto"
              >
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
              className="relative mx-auto h-[500px] w-full max-w-[430px] sm:h-[560px] lg:h-[600px]"
            >
              {/* search pill */}
              <Reveal delay={0.3} y={20} className="absolute left-0 top-0 z-30 w-[92%] sm:w-[86%]">
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
                  <span className="ml-auto shrink-0 rounded-full bg-violet-500/20 px-2.5 py-1 font-sans text-[10.5px] font-medium tracking-wide text-violet-100">
                    #1 result
                  </span>
                </div>
              </Reveal>

              {/* stacked result cards — brighter, punchier */}
              {[
                { src: '/images/thumbnails/image20.png', rot: -5, x: 4, yy: 104, z: 10, scale: 0.88, delay: 0.5 },
                { src: '/images/thumbnails/image22.png', rot: 3, x: 46, yy: 244, z: 20, scale: 0.94, delay: 0.42 },
                { src: '/images/thumbnails/image4.png', rot: -2, x: 10, yy: 388, z: 30, scale: 1, delay: 0.34 },
              ].map((c) => (
                <motion.figure
                  key={c.src}
                  initial={reduced ? false : { opacity: 0, y: c.yy + 40, rotate: c.rot * 2, scale: c.scale * 0.94 }}
                  animate={{ opacity: 1, y: c.yy, rotate: c.rot, scale: c.scale }}
                  transition={{ duration: 1.1, delay: c.delay, ease: [0.16, 1, 0.3, 1] }}
                  style={{ zIndex: c.z, left: c.x }}
                  className="thumb-frame absolute w-[82%] overflow-hidden rounded-xl sm:w-[76%]"
                >
                  <img src={c.src} alt="Ranked client video thumbnail" loading="eager" fetchPriority="high" decoding="async" className="img-bright block aspect-video w-full object-cover" />
                  {c.z === 30 && (
                    <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/90 to-transparent px-3 pb-2.5 pt-10">
                      <span className="flex items-center gap-1.5 rounded-full bg-violet-500/90 px-2 py-0.5 font-sans text-[10px] font-medium text-white">
                        <span className="h-1 w-1 rounded-full bg-white" /> ranked #1
                      </span>
                      <span className="rounded bg-black/60 px-1.5 py-0.5 font-sans text-[10px] text-white/70">
                        17.2K views
                      </span>
                    </figcaption>
                  )}
                </motion.figure>
              ))}

              {/* floating proof: faces + booked-calls chip — mobile visible */}
              <Reveal delay={0.6} y={16} className="absolute bottom-2 right-0 z-30 w-[62%] sm:w-[54%]">
                <div className="thumb-frame-warm overflow-hidden rounded-xl bg-ink-900/90 backdrop-blur-md">
                  <div className="flex items-center gap-2 px-3 pt-2.5">
                    <div className="flex -space-x-2">
                      {['/people/face-image11-0.png', '/people/face-image19-0.png', '/people/face-image8-0.png', '/people/face-image12-0.png'].map((a) => (
                        <img key={a} src={a} alt="" loading="lazy" decoding="async" className="h-6 w-6 rounded-full object-cover object-top ring-2 ring-ink-900" />
                      ))}
                    </div>
                    <span className="font-sans text-[10px] font-medium text-white/70">6 channels live</span>
                    <span className="ml-auto flex items-center gap-1 rounded-full bg-emerald-400/15 px-2 py-0.5 font-sans text-[9.5px] font-semibold text-emerald-300">
                      <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" /> 35 calls/mo
                    </span>
                  </div>
                  <img src="/assets/proof/views-454k.png" alt="Client channel analytics showing 454K views" loading="lazy" decoding="async" className="img-proof mt-2 block w-full object-cover object-top" style={{ height: 86 }} />
                </div>
              </Reveal>

              <div
                aria-hidden
                className="absolute bottom-[-4rem] left-1/2 h-40 w-[26rem] -translate-x-1/2 rounded-full bg-violet-600/[0.28] blur-[90px]"
              />
            </motion.div>

            {/* mobile thumbnail strip — swipeable, bright */}
            <div className="no-bar snap-dope snap-peek -mx-5 mt-8 flex gap-2.5 overflow-x-auto px-5 pb-1 lg:hidden">
              {['/images/thumbnails/image1.png', '/images/thumbnails/image8.png', '/images/thumbnails/image14.png', '/images/thumbnails/image17.png', '/images/thumbnails/image24.png'].map((src) => (
                <img key={src} src={src} alt="Client thumbnail" loading="lazy" decoding="async" className="img-bright thumb-frame h-[64px] w-[114px] shrink-0 rounded-lg object-cover" />
              ))}
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------- stats */}
        <Reveal delay={0.9} y={22} className="mt-12 md:mt-24">
          <div className="hairline" />
          <dl className="grid grid-cols-3 gap-3 sm:gap-px sm:overflow-hidden">
            {HERO.stats.map((s) => (
              <div key={s.label} className="group relative py-5 pr-2 sm:py-8 sm:pr-6">
                <dt
                  className={`num font-display text-[clamp(1.15rem,5.2vw,2.9rem)] font-semibold tracking-[-0.045em] ${
                    s.tone === 'ember' ? 'text-ember-400' : 'text-white'
                  }`}
                >
                  <CountUp value={s.value} />
                </dt>
                <dd className="mt-1.5 max-w-[16rem] text-[11px] leading-snug text-white/45 sm:text-[13px]">{s.label}</dd>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-violet-400 to-transparent transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </dl>
        </Reveal>
      </motion.div>
    </section>
  )
}
