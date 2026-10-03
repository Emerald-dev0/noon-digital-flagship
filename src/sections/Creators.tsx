import { CREATORS } from '../data/content'
import { Reveal } from '../components/ui/Reveal'

const PLATFORM_ICON: Record<string, JSX.Element> = {
  YouTube: (
    <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden>
      <path fill="#FF0033" d="M22 12c0-2.6-.2-4-.5-4.6a2.6 2.6 0 0 0-1.8-1.8C18.7 5.2 15.6 5 12 5s-6.7.2-7.7.6a2.6 2.6 0 0 0-1.8 1.8C2.2 8 2 9.4 2 12s.2 4 .5 4.6c.3.9 1 1.5 1.8 1.8 1 .4 4.1.6 7.7.6s6.7-.2 7.7-.6a2.6 2.6 0 0 0 1.8-1.8c.3-.6.5-2 .5-4.6Z" />
      <path fill="#fff" d="m10 9.2 5 2.8-5 2.8V9.2Z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden>
      <defs>
        <linearGradient id="igc" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FEDA75" />
          <stop offset="45%" stopColor="#D62976" />
          <stop offset="100%" stopColor="#962FBF" />
        </linearGradient>
      </defs>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="url(#igc)" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.7" />
      <circle cx="17.3" cy="6.8" r="1.2" fill="#fff" />
    </svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden>
      <path fill="#25F4EE" d="M15.5 3h2.2c.3 2 1.5 3.4 3.3 3.6v2.2c-1.3 0-2.5-.4-3.5-1.1v6.1a5.6 5.6 0 1 1-5.6-5.6c.3 0 .5 0 .8.1v2.3a3.3 3.3 0 1 0 2.5 3.2V3Z" />
      <path fill="#FE2C55" d="M16.4 3h1.9c.3 2 1.4 3.3 3.2 3.5v2.1c-1.3 0-2.5-.4-3.5-1.1v6.1a5.6 5.6 0 0 1-8.7 4.6 5.6 5.6 0 0 0 8-5V3h-.9Z" opacity=".85" />
    </svg>
  ),
  X: (
    <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden>
      <path fill="#fff" d="M3 3h4.3l4.4 6 5-6H20l-6.7 7.9L21 21h-4.3l-4.8-6.5L6.4 21H4l7.2-8.5L3 3Z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden>
      <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" fill="#0A66C2" />
      <path fill="#fff" d="M6 9.5h2.3V18H6V9.5ZM7.2 5.8a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8ZM10.2 9.5h2.2v1.2c.4-.7 1.3-1.4 2.6-1.4 2 0 2.9 1.2 2.9 3.4V18h-2.3v-4.7c0-1.2-.4-1.8-1.4-1.8s-1.7.7-1.7 1.9V18h-2.3V9.5Z" />
    </svg>
  ),
  Skool: (
    <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden>
      <rect x="2.5" y="4.5" width="19" height="15" rx="3.5" fill="#f5c542" />
      <path fill="#1a1a1a" d="M8 9h2.4l1.6 3 1.6-3H16l-3 5.2V17h-2v-2.8L8 9Z" />
    </svg>
  ),
  Newsletter: (
    <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden>
      <rect x="2.5" y="5" width="19" height="14" rx="3" fill="#a279ff" />
      <path d="m5 8.5 7 4.6 7-4.6" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  ),
}

export function Creators() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">{CREATORS.eyebrow}</span>
            <h2 className="fluid-h2 mt-6 font-display text-white">{CREATORS.title}</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-[14.5px] leading-relaxed text-white/45">{CREATORS.sub}</p>
          </Reveal>
        </div>

        <div className="no-bar snap-dope snap-peek -mx-5 mt-10 flex gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:rounded-[24px] sm:border sm:border-white/[0.08] sm:bg-white/[0.06] sm:p-0 md:mt-14 lg:grid-cols-3">
          {CREATORS.people.map((person, i) => (
            <Reveal key={person.name} delay={0.05 * (i % 3)} className="h-full w-[84%] shrink-0 sm:w-auto">
              <a
                href={person.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${person.name}'s channel (${person.handle}) on YouTube`}
                className="thumb-frame group relative block h-full overflow-hidden rounded-2xl bg-ink-900 outline-none transition-transform duration-500 active:scale-[0.98] sm:rounded-none sm:border-0 focus-visible:ring-2 focus-visible:ring-violet-400/70 md:p-0"
              >
                {/* bright full-bleed cover */}
                <div className="relative h-36 overflow-hidden sm:h-40">
                  <img src={person.cover} alt={`${person.name} channel thumbnail`} loading="lazy" className="img-bright h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/25 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 font-sans text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    {person.tag}
                  </span>
                  <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-violet-500/90 px-2.5 py-1 font-sans text-[10px] font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Watch
                    <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
                      <path d="M4 12 12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>

                <div className="relative p-4 md:p-5">
                <div className="relative -mt-10 flex items-end gap-3.5">
                  <span className="relative shrink-0">
                    <img
                      src={person.avatar}
                      alt={person.name}
                      loading="lazy"
                      className="h-14 w-14 rounded-full border-2 border-ink-900 object-cover object-top ring-1 ring-white/25 transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                    <span className="absolute inset-0 rounded-full opacity-0 shadow-[0_0_26px_4px_rgba(139,92,246,0.55)] transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="min-w-0 pb-0.5">
                    <h3 className="truncate font-display text-[17px] font-semibold tracking-[-0.03em] text-white">
                      {person.name}
                    </h3>
                    <p className="mt-0.5 truncate text-[12.5px] text-white/55">{person.role}</p>
                  </div>
                </div>

                <p className="mt-2 truncate font-sans text-[11.5px] text-violet-300 transition-colors duration-300 group-hover:text-violet-200">
                  {person.handle}
                </p>

                <ul className="relative mt-3.5 flex flex-wrap gap-1.5">
                  {person.chips.map((chip) => (
                    <li
                      key={chip.p}
                      className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1.5 pr-2.5 transition-colors duration-300 group-hover:border-white/[0.18]"
                    >
                      <span className="flex h-4 w-4 items-center justify-center">{PLATFORM_ICON[chip.p]}</span>
                      <span className="num font-sans text-[11.5px] font-medium text-white/80">{chip.v}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <p className="mt-3 text-center font-sans text-[10.5px] uppercase tracking-[0.2em] text-white/25 sm:hidden">
          Swipe → 6 live channels
        </p>
      </div>
    </section>
  )
}
