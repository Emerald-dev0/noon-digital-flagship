import { LP } from '../data/landing'
import { CtaButton, Reveal, shell } from './LpUi'

export function Book() {
  const { book } = LP

  return (
    <section id="book" className="pb-20 md:pb-28">
      <div className={shell}>
        <Reveal>
          <div className="rounded-[2rem] bg-navy-950 px-6 py-16 text-center md:px-12 md:py-20">
            <h2 className="mx-auto max-w-3xl text-[clamp(2.2rem,4.6vw,3.8rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white">
              {book.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">{book.sub}</p>

            {book.embedUrl ? (
              <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl bg-white">
                <iframe src={book.embedUrl} title="Book your call" className="h-[640px] w-full" loading="lazy" />
              </div>
            ) : (
              <div className="mt-10 flex flex-col items-center gap-4">
                <CtaButton light href={`mailto:${LP.email}?subject=${encodeURIComponent('Booking a strategy call')}`} className="px-9 py-4 text-base">
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
