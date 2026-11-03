import { LP } from '../data/landing'
import { CtaButton, shell } from './LpUi'

export function Book() {
  const { book } = LP

  return (
    <section id="book" className="border-t border-slate-200 bg-white py-16 md:py-24">
      <div className={shell}>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Book a call</p>
        <h2 className="mt-3 max-w-3xl font-helv text-[clamp(2.05rem,4.6vw,3.7rem)] font-bold leading-[1.02] tracking-[-0.03em] text-navy-900">
          {book.title}
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-500 md:text-lg">{book.sub}</p>

        {book.embedUrl ? (
          <div className="mt-10 max-w-3xl overflow-hidden rounded-2xl border border-slate-200">
            <iframe src={book.embedUrl} title="Book your call" className="h-[640px] w-full" loading="lazy" />
          </div>
        ) : (
          <>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <CtaButton
                href={`mailto:${LP.email}?subject=${encodeURIComponent('Booking a strategy call')}`}
                className="w-full px-9 py-4 text-base sm:w-auto"
              >
                {book.cta}
              </CtaButton>
              <p className="text-sm text-slate-500">Takes 30 seconds.</p>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Prefer email?{' '}
              <a href={`mailto:${LP.email}`} className="font-semibold text-navy-900 underline underline-offset-4 hover:text-brand-600">
                {LP.email}
              </a>
            </p>
          </>
        )}
      </div>
    </section>
  )
}
