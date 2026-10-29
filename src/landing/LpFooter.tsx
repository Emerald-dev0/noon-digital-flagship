import { LP } from '../data/landing'
import { Wordmark } from './LpNav'
import { shell } from './LpUi'

export function LpFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-white">
      <div className={shell}>
        <div className="flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-4 text-sm leading-relaxed text-slate-500">{LP.footer.blurb}</p>
          </div>
          <nav className="grid grid-cols-2 gap-x-14 gap-y-3 text-sm font-semibold text-slate-500">
            {LP.footer.links.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-brand-700">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 py-7 text-[13px] text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {LP.brand}. All rights reserved.</p>
          <a href={`mailto:${LP.email}`} className="font-semibold transition-colors hover:text-brand-700">
            {LP.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
