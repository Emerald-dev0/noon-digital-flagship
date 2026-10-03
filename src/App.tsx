import { Grain } from './components/ui/Grain'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { Nav } from './sections/Nav'
import { Hero } from './sections/Hero'
import { Ticker } from './sections/Ticker'
import { TrustStats } from './sections/TrustStats'
import { Problems } from './sections/Problems'
import { Garden } from './sections/Garden'
import { TestimonialWall } from './sections/TestimonialWall'
import { Creators } from './sections/Creators'
import { VideoTestimonials } from './sections/VideoTestimonials'
import { Results } from './sections/Results'
import { Pricing } from './sections/Pricing'
import { Faq } from './sections/Faq'
import { FinalCta } from './sections/FinalCta'

export default function App() {
  useSmoothScroll()

  return (
    <>
      <Grain />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <TrustStats />
        <Problems />
        <Garden />
        <TestimonialWall />
        <Creators />
        <VideoTestimonials />
        <Results />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
    </>
  )
}
