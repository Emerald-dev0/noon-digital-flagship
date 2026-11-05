import type { ReactNode } from 'react'
import { ArrowUpRight01Icon, InstagramIcon, YoutubeIcon } from 'hugeicons-react'
import { LP, type LpChannel } from '../data/landing'
import { Em, Reveal, SectionHead, shell } from './LpUi'
import { TikTokIcon } from './VideoBits'

// One chip per platform the person actually has, with the live follower count.
function PlatformChip({ href, count, label, children }: { href: string; count: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title={`${label} — ${count} followers`}
      className="flex items-center gap-1.5 border border-ink-900/10 bg-white px-2 py-1 text-[11px] font-semibold tabular-nums text-ink-900 transition-colors duration-200 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
    >
      {children}
      {count}
    </a>
  )
}

// Compact creator cards, auto-scrolling horizontally (pauses on hover).
function ChannelCard({ person }: { person: LpChannel }) {
  return (
    <article className="mr-4 w-[268px] shrink-0 border border-ink-900/10 bg-paper p-4 shadow-[0_14px_32px_-20px_rgba(10,8,16,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_22px_40px_-20px_rgba(122,62,238,0.4)]">
      <a href={person.igUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-3">
        {person.avatar ? (
          <img src={person.avatar} alt={person.name} loading="lazy" className="h-11 w-11 shrink-0 object-cover" />
        ) : (
          <span
            className="grid h-11 w-11 shrink-0 place-items-center bg-brand-100 font-helv text-sm font-bold text-brand-700 ring-1 ring-brand-200"
            aria-hidden="true"
          >
            {person.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
          </span>
        )}
        <span className="min-w-0">
          <span className="block truncate text-[15px] font-bold leading-tight text-ink-900 group-hover:text-brand-700">{person.name}</span>
          <span className="block truncate text-xs text-slate-400">{person.handle}</span>
        </span>
        <ArrowUpRight01Icon
          size={16}
          strokeWidth={2.2}
          className="ml-auto shrink-0 text-slate-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600"
        />
      </a>

      <p className="mt-3 border-t border-ink-900/5 pt-2.5 text-xs font-medium text-slate-500">{person.role}</p>

      <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
        <PlatformChip href={person.igUrl} count={person.ig} label="Instagram">
          <InstagramIcon size={13} strokeWidth={2} className="text-[#d62976]" />
        </PlatformChip>
        {person.tiktok && person.tiktokUrl && (
          <PlatformChip href={person.tiktokUrl} count={person.tiktok} label="TikTok">
            <TikTokIcon className="h-3 w-3 text-slate-900" />
          </PlatformChip>
        )}
        {person.yt && person.ytUrl && (
          <PlatformChip href={person.ytUrl} count={person.yt} label="YouTube">
            <YoutubeIcon size={13} strokeWidth={2} className="text-[#ff0033]" />
          </PlatformChip>
        )}
      </div>
    </article>
  )
}

export function Channels() {
  const { channels } = LP
  const row = [...channels.people, ...channels.people]

  return (
    <section id="channels" className="py-16 md:py-24">
      <div className={shell}>
        <SectionHead title={<>Channels we&apos;ve <Em>worked with.</Em></>} sub={channels.sub} />
      </div>

      <Reveal className="mt-10 md:mt-12">
        <div className="overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex w-max animate-marquee [--marquee-duration:52s] hover:[animation-play-state:paused] motion-reduce:animate-none">
            {row.map((person, i) => (
              <ChannelCard key={`${person.handle}-${i}`} person={person} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
