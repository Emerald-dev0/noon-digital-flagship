import { ArrowUpRight } from 'lucide-react'
import { LP, type LpChannel } from '../data/landing'
import { Reveal, SectionHead, shell } from './LpUi'
import { PLATFORM_META, PlatformIcon } from './VideoBits'
import { cn } from '../utils/cn'

function ChannelCard({ person }: { person: LpChannel }) {
  return (
    <article className="w-[290px] shrink-0 rounded-3xl border border-slate-200/90 bg-white p-5 shadow-[0_16px_40px_-24px_rgba(23,51,127,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_50px_-24px_rgba(47,107,255,0.5)]">
      <header className="flex items-center gap-3.5">
        <img
          src={person.avatar}
          alt={person.name}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-50"
        />
        <div className="min-w-0">
          <h3 className="truncate text-[15px] font-bold leading-tight text-navy-900">{person.name}</h3>
          <p className="truncate text-[13px] text-slate-400">{person.role}</p>
        </div>
      </header>

      <div className="mt-4 divide-y divide-slate-100 rounded-2xl bg-slate-50/80 px-3.5">
        {person.platforms.map((row) => {
          const meta = PLATFORM_META[row.p]
          const inner = (
            <>
              <span className="flex items-center gap-2.5">
                <PlatformIcon p={row.p} className={cn('h-[18px] w-[18px]', meta.color)} />
                <span className="text-[13px] font-semibold text-slate-600">{meta.label}</span>
              </span>
              <span className="flex items-center gap-1 text-[13px] font-bold text-navy-900">
                {row.v}
                <span className="font-medium text-slate-400">followers</span>
                {row.href && (
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover/row:text-brand-600" />
                )}
              </span>
            </>
          )
          const cls = 'group/row flex items-center justify-between py-2.5'
          return row.href ? (
            <a key={row.p} href={row.href} target="_blank" rel="noreferrer" className={cls}>
              {inner}
            </a>
          ) : (
            <div key={row.p} className={cls}>
              {inner}
            </div>
          )
        })}
      </div>
    </article>
  )
}

export function Channels() {
  const { channels } = LP
  const row = [...channels.people, ...channels.people]

  return (
    <section id="channels" className="relative py-24 md:py-32">
      <div className={shell}>
        <SectionHead eyebrow={channels.eyebrow} title={channels.title} sub={channels.sub} />
      </div>

      <Reveal className="relative mt-14" delay={0.1}>
        <div
          className="overflow-hidden"
          style={{
            maskImage: 'linear-gradient(90deg, transparent, black 6%, black 94%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 6%, black 94%, transparent)',
          }}
        >
          <div
            className="flex w-max animate-marquee gap-5 px-5 py-2 [--marquee-duration:55s] hover:[animation-play-state:paused]"
          >
            {row.map((person, i) => (
              <ChannelCard key={`${person.name}-${i}`} person={person} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
