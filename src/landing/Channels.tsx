import { LP, type LpChannel } from '../data/landing'
import { Em, Reveal, SectionHead, shell } from './LpUi'
import { PLATFORM_META, PlatformIcon } from './VideoBits'
import { cn } from '../utils/cn'

function ChannelChip({ person }: { person: LpChannel }) {
  return (
    <article className="flex shrink-0 items-center gap-4 rounded-2xl border border-slate-200 bg-white py-3 pl-3 pr-5">
      <img src={person.avatar} alt={person.name} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
      <div className="min-w-0">
        <h3 className="whitespace-nowrap text-[15px] font-bold leading-tight text-navy-900">{person.name}</h3>
        <p className="whitespace-nowrap text-xs text-slate-400">{person.role}</p>
      </div>
      <span className="h-8 w-px bg-slate-200" />
      <div className="flex items-center gap-4">
        {person.platforms.map((row) => {
          const inner = (
            <>
              <PlatformIcon p={row.p} className={cn('h-4 w-4', PLATFORM_META[row.p].color)} />
              <span className="text-[13px] font-bold tabular-nums text-navy-900">{row.v}</span>
            </>
          )
          const cls = 'flex items-center gap-1.5'
          return row.href ? (
            <a key={row.p} href={row.href} target="_blank" rel="noreferrer" className={cn(cls, 'transition-opacity hover:opacity-60')} title={`${person.name} on ${PLATFORM_META[row.p].label}`}>
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
      className="flex w-max animate-marquee gap-4 px-4 py-1 hover:[animation-play-state:paused]"
      style={{ '--marquee-duration': duration, animationDirection: reverse ? 'reverse' : undefined } as React.CSSProperties}
    >
      {row.map((person, i) => (
        <ChannelChip key={`${person.name}-${i}`} person={person} />
      ))}
    </div>
  )
}

export function Channels() {
  const { channels } = LP
  const first = channels.people.slice(0, 5)
  const second = [...channels.people.slice(5), channels.people[0]]

  return (
    <section id="channels" className="py-20 md:py-24">
      <div className={shell}>
        <SectionHead
          title={<>Channels we&apos;ve <Em>worked with</Em></>}
          sub={channels.sub}
        />
      </div>

      <Reveal className="mt-10" delay={0.05}>
        <div
          className="space-y-4 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(90deg, transparent, black 6%, black 94%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 6%, black 94%, transparent)',
          }}
        >
          <Row people={first} duration="44s" />
          <Row people={second} duration="50s" reverse />
        </div>
      </Reveal>
    </section>
  )
}
