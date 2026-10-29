import { LP } from '../data/landing'
import { CtaButton, Reveal, shell } from './LpUi'

export function Book() {
  const { book } = LP

  return (
    <section id="book" className="py-16 md:py-24">
      <div className={shell}>
        <Reveal>
          <div className="rounded-[1.75rem] bg-navy-950 px-5 py-12 text-center sm:px-8 md:rounded-[2rem] md:px-12 md:py-20">
            <img src="/logo-icon.png" alt="" className="mx-auto h-12 w-auto md:h-14" />
            <h2 className="mx-auto mt-7 max-w-3xl text-[clamp(1.9rem,4.6vw,3.8rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white">
              {book.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/60 md:mt-5 md:text-lg">{book.sub}</p>

            {book.embedUrl ? (
              <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl bg-white md:mt-12">
                <iframe src={book.embedUrl} title="Book your call" className="h-[640px] w-full" loading="lazy" />
              </div>
            ) : (
              <div className="mt-9 flex flex-col items-center gap-4 md:mt-10">
                <CtaButton light href={`mailto:${LP.email}?subject=${encodeURIComponent('Booking a strategy call')}`} className="w-full px-9 py-4 text-base sm:w-auto">
                  {book.cta}
                </CtaButton>
                <p className="text-sm text-white/50">
                  Prefer email? <a href={`mailto:${LP.email}`} className="font-semibold text-white/80 underline underline-offset-4 hover:text-white">{LP.email}</a>
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
