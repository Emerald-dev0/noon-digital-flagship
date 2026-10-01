import { FINAL_CTA, FOOTER, SITE } from '../data/content'
import { Reveal } from '../components/ui/Reveal'
import { MagneticButton, ArrowGlyph } from '../components/ui/MagneticButton'
import { NoonMark, Wordmark } from '../components/ui/Logo'

export function FinalCta() {
  return (
    <section id="book" className="relative overflow-hidden pt-24 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[44rem] bg-[radial-gradient(60%_60%_at_50%_100%,rgba(139,92,246,0.3),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[12rem] left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-ember-600/[0.14] blur-[120px]"
      />

      <div className="shell relative text-center">
        <Reveal>
          <span className="eyebrow mx-auto">{FINAL_CTA.eyebrow}</span>
          <h2 className="fluid-h2 mx-auto mt-7 max-w-[20ch] font-display text-white">
            {FINAL_CTA.title}{' '}
            <span className="bg-gradient-to-r from-violet-300 to-ember-400 bg-clip-text text-transparent">
              {FINAL_CTA.titleAccent}
            </span>
          </h2>
          <p className="mx-auto mt-7 max-w-[38rem] text-[15.5px] leading-relaxed text-white/50">{FINAL_CTA.sub}</p>
        </Reveal>

        <Reveal delay={0.12} className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
          <MagneticButton href="https://calendly.com/noondigital" className="px-8 py-[18px] text-[15px]">
            {FINAL_CTA.primary.label} <ArrowGlyph />
          </MagneticButton>
          <MagneticButton href={FINAL_CTA.secondary.href} variant="ghost" strength={0.2}>
            {FINAL_CTA.secondary.label}
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {FINAL_CTA.bullets.map((b) => (
            <span key={b} className="flex items-center gap-2 text-[12.5px] text-white/35">
              <span className="h-1 w-1 rounded-full bg-ember-400" />
              {b}
            </span>
          ))}
        </Reveal>

        {/* oversized watermark */}
        <div aria-hidden className="pointer-events-none mt-16 select-none md:mt-24">
          <div className="mask-fade-b flex justify-center">
            <NoonMark className="h-[clamp(7rem,20vw,14rem)] w-[clamp(7rem,20vw,14rem)] opacity-25" />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/[0.08] bg-ink-950/60 py-12 backdrop-blur-sm">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark />
            <p className="mt-4 max-w-[26rem] text-[13px] leading-relaxed text-white/[0.38]">{FOOTER.blurb}</p>
            <p className="mt-5 font-sans text-[12.5px] text-white/50">
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-violet-200">
                {SITE.email}
              </a>
            </p>
          </div>

          {FOOTER.columns.map((col) => (
            <nav key={col.title} className="md:col-span-3 lg:col-span-2">
              <p className="font-sans text-[10.5px] uppercase tracking-[0.2em] text-white/[0.28]">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-1.5 text-[13px] text-white/50 transition-colors hover:text-white"
                    >
                      {l.label}
                      <span className="h-px w-0 bg-violet-400 transition-all duration-300 group-hover:w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="md:col-span-4 lg:col-span-3">
            <p className="font-sans text-[10.5px] uppercase tracking-[0.2em] text-white/[0.28]">Built on</p>
            <p className="mt-4 text-[13px] leading-relaxed text-white/45">
              Search demand, honest reporting, and a genuinely unreasonable amount of keyword research.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/[0.08] pt-6 text-[12px] text-white/[0.28] sm:flex-row sm:items-center">
          <p>{FOOTER.legal}</p>
          <p>
            Placeholder content is flagged in{' '}
            <code className="rounded bg-white/[0.05] px-1.5 py-0.5 text-white/40">src/data/content.ts</code>
          </p>
        </div>
      </div>
    </footer>
  )
}
