import { ArrowUpRight01Icon } from 'hugeicons-react'
import { LP, type LpChannel } from '../data/landing'
import { Em, Reveal, SectionHead, shell } from './LpUi'
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
        const cls = 'flex items-center gap-1.5 rounded-full bg-ink-900 py-1.5 pl-2.5 pr-3 text-white'
        return row.href ? (
          <a key={row.p} href={row.href} target="_blank" rel="noreferrer" className={cn(cls, 'transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600')} title={`${person.name} on ${PLATFORM_META[row.p].label}`}>
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
// from the client's doc — shown as-is, not redesigned.
function FeaturedCard({ person }: { person: LpChannel }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-ink-900/10 bg-paper shadow-[0_18px_40px_-24px_rgba(10,8,16,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_56px_-24px_rgba(122,62,238,0.45)]">
      <img src={person.header} alt={`${person.name} on YouTube`} loading="lazy" className="block w-full border-b border-ink-900/5" />
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5">
        <p className="text-sm font-bold text-ink-900">{person.role}</p>
        <Pills person={person} />
      </div>
    </article>
  )
}

function ListRow({ person }: { person: LpChannel }) {
  const ig = person.platforms[0]
  return (
    <div className="group -mx-2 flex flex-wrap items-center gap-3 rounded-2xl px-2 py-3.5 transition-colors duration-200 hover:bg-brand-50">
      {person.avatar ? (
        <img src={person.avatar} alt={person.name} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
      ) : (
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-100 font-helv text-sm font-bold text-brand-700 ring-1 ring-brand-200" aria-hidden="true">
          {person.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate text-[15px] font-bold leading-tight text-ink-900">{person.name}</p>
        <p className="truncate text-xs text-slate-400">{person.role}</p>
      </div>
      <Pills person={person} />
      {ig?.href && (
        <a
          href={ig.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${person.name}`}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink-900/15 text-ink-900 opacity-0 transition-all duration-200 hover:bg-ink-900 hover:text-white group-hover:opacity-100"
        >
          <ArrowUpRight01Icon size={16} strokeWidth={2.2} />
        </a>
      )}
    </div>
  )
}

export function Channels() {
  const { channels } = LP
  const featured = channels.people.filter((p) => p.header)
  const rest = channels.people.filter((p) => !p.header)

  return (
    <section id="channels" className="py-16 md:py-24">
      <div className={shell}>
        <SectionHead
          title={<>Channels we&apos;ve <Em>worked with.</Em></>}
          sub={`${channels.sub} 9 channels — coaches, consultants, a tutoring brand, a podcast and a chessboxer.`}
        />

        <div className="mt-10 grid items-start gap-4 sm:grid-cols-2 md:mt-12">
          {featured.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.07}>
              <FeaturedCard person={person} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-5 rounded-3xl border border-ink-900/10 bg-paper px-3 py-1.5 shadow-[0_18px_40px_-28px_rgba(10,8,16,0.35)] sm:px-4">
          <div className="divide-y divide-ink-900/5">
            {rest.map((person) => (
              <ListRow key={person.name} person={person} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
