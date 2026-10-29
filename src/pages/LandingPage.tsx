import { useSmoothScroll } from '../hooks/useSmoothScroll'
import { LpNav } from '../landing/LpNav'
import { LpHero } from '../landing/LpHero'
import { Channels } from '../landing/Channels'
import { ClientStories } from '../landing/ClientStories'
import { LpResults } from '../landing/LpResults'
import { LpProcess } from '../landing/LpProcess'
import { OurWork } from '../landing/OurWork'
import { Ranking } from '../landing/Ranking'
import { MoreProof } from '../landing/MoreProof'
import { Book } from '../landing/Book'
import { LpFooter } from '../landing/LpFooter'

/**
 * The VSL landing page from the client's Google Doc brief.
 * Light, dahusdigital.com-inspired design. Section order follows the doc 1:1:
 * Headline → VSL → Channels → Hear From Our Clients → Results → Process →
 * Our Work → Videos Ranking On Search → More Proof → Book.
 */
export default function LandingPage() {
  useSmoothScroll()

  return (
    <div className="lp min-h-screen bg-[#fbfcff] font-sans text-slate-500 antialiased">
      <LpNav />
      <main>
        <LpHero />
        <Channels />
        <ClientStories />
        <LpResults />
        <LpProcess />
        <OurWork />
        <Ranking />
        <MoreProof />
        <Book />
      </main>
      <LpFooter />
    </div>
  )
}
