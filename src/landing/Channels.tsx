import { ArrowUpRight01Icon, InstagramIcon } from 'hugeicons-react'
import { LP, type LpChannel } from '../data/landing'
import { Em, Reveal, SectionHead, shell } from './LpUi'

// Compact creator cards, auto-scrolling horizontally (pauses on hover).
// Profile pics + follower counts are from Instagram, per the client.
function ChannelCard({ person }: { person: LpChannel }) {
  return (
    <a
      href={person.href}
      target="_blank"
      rel="noreferrer"
      title={`${person.name} on Instagram`}
      className="group mr-4 block w-[276px] shrink-0 rounded-xl border border-ink-900/10 bg-paper p-4 shadow-[0_14px_32px_-20px_rgba(10,8,16,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_22px_40px_-20px_rgba(122,62,238,0.45)]"
    >
      <span className="flex items-center gap-3">
        {person.avatar ? (
          <img src={person.avatar} alt={person.name} loading="lazy" className="h-12 w-12 shrink-0 rounded-lg object-cover" />
        ) : (
          <span
            className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-brand-100 font-helv text-sm font-bold text-brand-700 ring-1 ring-brand-200"
            aria-hidden="true"
          >
            {person.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
          </span>
        )}
        <span className="min-w-0">
          <span className="block truncate text-[15px] font-bold leading-tight text-ink-900">{person.name}</span>
          <span className="block truncate text-xs text-slate-400">{person.handle}</span>
        </span>
        <ArrowUpRight01Icon
          size={17}
          strokeWidth={2.2}
          className="ml-auto shrink-0 text-slate-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600"
        />
      </span>
      <span className="mt-3.5 flex items-center justify-between gap-3 border-t border-ink-900/5 pt-3">
        <span className="truncate text-xs font-medium text-slate-500">{person.role}</span>
        <span className="flex shrink-0 items-center gap-1.5 text-[13px] font-bold tabular-nums text-ink-900">
          <InstagramIcon size={15} strokeWidth={2} className="text-[#d62976]" />
          {person.ig ? (
            <>
              {person.ig} <span className="font-medium text-slate-400">followers</span>
            </>
          ) : (
            <span className="font-medium text-slate-400">Instagram</span>
          )}
        </span>
      </span>
    </a>
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
          <div className="flex w-max animate-marquee [--marquee-duration:46s] hover:[animation-play-state:paused] motion-reduce:animate-none">
            {row.map((person, i) => (
              <ChannelCard key={`${person.handle}-${i}`} person={person} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
