import { CalendarDays, Check, Mail } from 'lucide-react'
import { LP } from '../data/landing'
import { Reveal, SectionHead, shell } from './LpUi'

export function Book() {
  const { book } = LP

  return (
    <section id="book" className="relative overflow-hidden bg-[#f6f8fe] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-brand-200/60 blur-[110px]" />
      </div>

      <div className={`${shell} relative`}>
        <SectionHead eyebrow={book.eyebrow} title={book.title} sub={book.sub} />

        <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {book.bullets.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-bold text-navy-900 ring-1 ring-slate-200"
            >
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              {b}
            </span>
          ))}
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl" delay={0.1}>
          {book.embedUrl ? (
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_70px_-30px_rgba(23,51,127,0.5)]">
              <iframe
                src={book.embedUrl}
                title="Book your strategy call"
                className="h-[640px] w-full"
                loading="lazy"
              />
            </div>
          ) : (
            /* PLACEHOLDER — set LP.book.embedUrl (Cal.com / Calendly) to go live */
            <div className="rounded-3xl border-2 border-dashed border-brand-200 bg-white px-8 py-16 text-center shadow-[0_30px_70px_-36px_rgba(23,51,127,0.45)]">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <CalendarDays className="h-8 w-8" />
              </span>
              <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-navy-900">
                Booking calendar goes here
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">{book.fallbackNote}</p>
              <a
                href={`mailto:${LP.email}?subject=${encodeURIComponent('Strategy call — YouTube growth')}`}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_14px_34px_-12px_rgba(47,107,255,0.65)] transition-all hover:-translate-y-0.5 hover:bg-brand-700"
              >
                <Mail className="h-4 w-4" />
                {LP.email}
              </a>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
