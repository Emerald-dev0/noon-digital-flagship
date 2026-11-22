import { CREATORS } from '../data/content'
import { Reveal } from '../components/ui/Reveal'

import {
  ArrowUpRight01Icon,
  InstagramIcon,
  Linkedin01Icon,
  Mail01Icon,
  NewTwitterIcon,
  SkoolIcon,
  TiktokIcon,
  YoutubeIcon,
} from 'hugeicons-react'

// Brand marks come from Hugeicons; each keeps its own colour.
const PLATFORM_ICON: Record<string, JSX.Element> = {
  YouTube: <YoutubeIcon size={12} strokeWidth={2} className="text-[#FF0033]" />,
  Instagram: <InstagramIcon size={12} strokeWidth={2} className="text-[#D62976]" />,
  TikTok: <TiktokIcon size={12} strokeWidth={2} className="text-white" />,
  X: <NewTwitterIcon size={12} strokeWidth={2} className="text-white" />,
  LinkedIn: <Linkedin01Icon size={12} strokeWidth={2} className="text-[#0A66C2]" />,
  Skool: <SkoolIcon size={12} strokeWidth={2} className="text-[#f5c542]" />,
  Newsletter: <Mail01Icon size={12} strokeWidth={2} className="text-[#a279ff]" />,
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
                  <img src={person.cover} alt={`${person.name} channel thumbnail`} loading="lazy" decoding="async" className="img-bright h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/25 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 font-sans text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    {person.tag}
                  </span>
                  <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-violet-500/90 px-2.5 py-1 font-sans text-[10px] font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Watch
                    <ArrowUpRight01Icon size={12} strokeWidth={2} aria-hidden="true" />
                  </span>
                </div>

                <div className="relative p-4 md:p-5">
                <div className="relative -mt-10 flex items-end gap-3.5">
                  <span className="relative shrink-0">
                    <img
                      src={person.avatar}
                      alt={person.name}
                      loading="lazy"
                      decoding="async"
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
