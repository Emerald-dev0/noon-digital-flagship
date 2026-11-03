import { CalendarAdd01Icon, CheckmarkCircle01Icon, PlayCircleIcon, Search01Icon } from 'hugeicons-react'
import { LP } from '../data/landing'
import { CtaButton, Reveal, shell } from './LpUi'

const POINTS = [
  { icon: CalendarAdd01Icon, text: 'Free 20-minute call' },
  { icon: Search01Icon, text: "We pull up your buyers' searches live" },
  { icon: CheckmarkCircle01Icon, text: 'Straight yes or no — no pressure' },
]

export function Book() {
  const { book } = LP

  return (
    <section id="book" className="py-16 md:py-24">
      <div className={shell}>
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-brand-600 px-5 py-12 shadow-[0_40px_80px_-34px_rgba(122,62,238,0.65)] sm:px-10 md:p-14">
            <div
              aria-hidden="true"
              className="absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.22)_1.2px,transparent_1.2px)] [background-size:24px_24px]"
            />
            <PlayCircleIcon aria-hidden="true" className="absolute -bottom-14 -right-14 h-72 w-72 rotate-12 text-white/10" strokeWidth={1} />

            <div className="relative max-w-2xl">
              <h2 className="font-helv text-[clamp(2.1rem,4.8vw,3.9rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white">
                {book.title}
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/70 md:text-lg">{book.sub}</p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {POINTS.map(({ icon: Icon, text }) => (
                  <span key={text} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-[13px] font-semibold text-white ring-1 ring-white/15">
                    <Icon size={16} strokeWidth={2} className="text-blush-400" />
                    {text}
                  </span>
                ))}
              </div>

              {book.embedUrl ? (
                <div className="mt-10 overflow-hidden rounded-2xl bg-white p-2 shadow-2xl">
                  <iframe src={book.embedUrl} title="Book your call" className="h-[640px] w-full rounded-xl" loading="lazy" />
                </div>
              ) : (
                <>
                  <div className="mt-9 flex flex-wrap items-center gap-5">
                    <CtaButton
                      light
                      href={`mailto:${LP.email}?subject=${encodeURIComponent('Booking a strategy call')}`}
                      className="w-full px-9 py-4 text-base sm:w-auto"
                    >
                      {book.cta}
                    </CtaButton>
                    <p className="text-sm text-white/60">Takes 30 seconds.</p>
                  </div>
                  <p className="mt-6 text-sm text-white/65">
                    Prefer email?{' '}
                    <a href={`mailto:${LP.email}`} className="font-semibold text-white underline decoration-blush-400 decoration-2 underline-offset-4 hover:text-blush-400">
                      {LP.email}
                    </a>
                  </p>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
