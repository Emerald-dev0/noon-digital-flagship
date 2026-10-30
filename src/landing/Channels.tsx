import { LP, type LpChannel } from '../data/landing'
import { Reveal, SectionHead, shell } from './LpUi'
import { PLATFORM_META, PlatformIcon } from './VideoBits'
import { cn } from '../utils/cn'

function ChannelCard({ person }: { person: LpChannel }) {
  return (
    <article className="w-[262px] shrink-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_28px_-18px_rgba(10,21,48,0.25)] sm:w-[292px]">
      <header className="flex items-center gap-3">
        {person.avatar ? (
          <img src={person.avatar} alt={person.name} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
        ) : (
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-slate-100 font-helv text-sm font-bold text-navy-900 ring-1 ring-slate-200" aria-hidden="true">
            {person.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
          </span>
        )}
        <div className="min-w-0">
          <h3 className="truncate text-[15px] font-bold leading-tight text-navy-900">{person.name}</h3>
          <p className="truncate text-xs text-slate-400">{person.role}</p>
        </div>
      </header>
      <div className="mt-3.5 flex flex-wrap gap-1.5">
        {person.platforms.map((row) => {
          const inner = (
            <>
              <PlatformIcon p={row.p} className={cn('h-3.5 w-3.5', row.p === 'tiktok' ? 'text-white' : PLATFORM_META[row.p].color)} />
              <span className="text-xs font-bold tabular-nums">{row.v}</span>
            </>
          )
          const cls = 'flex items-center gap-1.5 rounded-full bg-navy-950 py-1.5 pl-2.5 pr-3 text-white'
          return row.href ? (
            <a key={row.p} href={row.href} target="_blank" rel="noreferrer" className={cn(cls, 'transition-opacity hover:opacity-70')} title={`${person.name} on ${PLATFORM_META[row.p].label}`}>
              {inner}
            </a>
          ) : (
            <span key={row.p} className={cls}>{inner}</span>
          )
        })}
      </div>
    </article>
  )
}

function Row({ people, reverse = false, duration }: { people: LpChannel[]; reverse?: boolean; duration: string }) {
  const row = [...people, ...people]
  return (
    <div
      className="flex w-max animate-marquee gap-3.5 px-4 py-1 hover:[animation-play-state:paused] sm:gap-4"
      style={{ '--marquee-duration': duration, animationDirection: reverse ? 'reverse' : undefined } as React.CSSProperties}
    >
      {row.map((person, i) => (
        <ChannelCard key={`${person.name}-${i}`} person={person} />
      ))}
    </div>
  )
}

export function Channels() {
  const { channels } = LP
  const first = channels.people.slice(0, 5)
  const second = [...channels.people.slice(5), channels.people[0]]

  return (
    <section id="channels" className="py-16 md:py-24">
      <div className={shell}>
        <SectionHead label="Our clients" title="Channels we've worked with" sub={channels.sub} />
      </div>

      <Reveal className="mt-9 md:mt-10" delay={0.05}>
        <div
          className="space-y-3.5 overflow-hidden sm:space-y-4"
          style={{
            maskImage: 'linear-gradient(90deg, transparent, black 6%, black 94%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 6%, black 94%, transparent)',
          }}
        >
          <Row people={first} duration="46s" />
          <Row people={second} duration="52s" reverse />
        </div>
      </Reveal>
    </section>
  )
}
