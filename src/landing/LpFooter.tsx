import { PlayIcon } from 'hugeicons-react'
import { LP } from '../data/landing'
import { Reveal, shell } from './LpUi'

export function LpFooter() {
  return (
    <footer className="bg-ink-900">
      <div className={shell}>
        <div className="flex flex-col gap-10 pb-12 pt-14 md:flex-row md:items-start md:justify-between md:pt-16">
          <div className="max-w-sm">
            <a href="#top" aria-label="Noon Digital — back to top" className="block w-fit">
              <img src="/logo-light.png" alt="Noon Digital" className="h-8 w-auto" />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/50">{LP.footer.blurb}</p>
            <a
              href={`mailto:${LP.email}`}
              className="mt-5 inline-block text-sm font-semibold text-white underline decoration-blush-500 decoration-2 underline-offset-4 transition-colors hover:text-blush-400"
            >
              {LP.email}
            </a>
          </div>
          <nav className="grid grid-cols-2 gap-x-14 gap-y-3 text-sm font-semibold text-white/55" aria-label="Footer">
            {LP.footer.links.map((link) => (
              <a key={link.href} href={link.href} className="w-fit transition-all duration-200 hover:translate-x-0.5 hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-7 text-[13px] text-white/35 sm:flex-row">
          <p>© {new Date().getFullYear()} {LP.brand}. All rights reserved.</p>
          <p>Built for search. Ranked on purpose.</p>
        </div>

        <Reveal className="select-none overflow-hidden pb-3" delay={0.05}>
          <p aria-hidden="true" className="flex items-baseline justify-center gap-[0.06em] whitespace-nowrap text-center font-helv text-[12.5vw] font-bold lowercase leading-[0.85] tracking-[-0.04em] text-white/[0.08]">
            noon digital
            <PlayIcon strokeWidth={2.6} className="h-[0.24em] w-[0.24em] shrink-0 translate-y-[0.02em] text-blush-500/80" />
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
