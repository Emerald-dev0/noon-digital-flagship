import { LP, type LpChannel } from '../data/landing'
import { shell } from './LpUi'
import { PLATFORM_META, PlatformIcon } from './VideoBits'
import { cn } from '../utils/cn'

function Pills({ person }: { person: LpChannel }) {
  return (
    <div className="flex flex-wrap gap-1.5">
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
  )
}

// Featured channels use the actual YouTube channel-header screenshots
// from the client's doc — not a redesign of them.
function FeaturedCard({ person }: { person: LpChannel }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <img src={person.header} alt={`${person.name} on YouTube`} loading="lazy" className="block w-full border-b border-slate-100" />
      <div className="flex flex-wrap items-center justify-between gap-3 p-4">
        <p className="text-sm font-bold text-navy-900">{person.role}</p>
        <Pills person={person} />
      </div>
    </article>
  )
}

function ListRow({ person }: { person: LpChannel }) {
  return (
    <div className="flex flex-wrap items-center gap-3 py-3.5">
      {person.avatar ? (
        <img src={person.avatar} alt={person.name} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
      ) : (
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-slate-100 font-helv text-sm font-bold text-navy-900 ring-1 ring-slate-200" aria-hidden="true">
          {person.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate text-[15px] font-bold leading-tight text-navy-900">{person.name}</p>
        <p className="truncate text-xs text-slate-400">{person.role}</p>
      </div>
      <Pills person={person} />
    </div>
  )
}

export function Channels() {
  const { channels } = LP
  const featured = channels.people.filter((p) => p.header)
  const rest = channels.people.filter((p) => !p.header)

  return (
    <section id="channels" className="bg-white py-16 md:py-24">
      <div className={shell}>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Our clients</p>
        <h2 className="mt-3 font-helv text-[clamp(2.05rem,4.6vw,3.7rem)] font-bold leading-[1.02] tracking-[-0.03em] text-navy-900">
          Channels we&apos;ve worked with
        </h2>
        <p className="mt-3.5 max-w-2xl text-[15px] leading-relaxed text-slate-500 md:text-lg">
          {channels.sub}{' '}
          <strong className="font-bold text-navy-900">9 channels — coaches, consultants, a tutoring brand, a podcast and a chessboxer.</strong>
        </p>

        <div className="mt-10 grid items-start gap-4 sm:grid-cols-2">
          {featured.map((person) => (
            <FeaturedCard key={person.name} person={person} />
          ))}
        </div>

        <div className="mt-6 divide-y divide-slate-100 border-y border-slate-100">
          {rest.map((person) => (
            <ListRow key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}
