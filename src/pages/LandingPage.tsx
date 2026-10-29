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

// VSL landing page. Section order follows the client's doc.
export default function LandingPage() {
  useSmoothScroll()

  return (
    <div className="lp min-h-screen bg-white font-sans text-slate-500 antialiased">
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
