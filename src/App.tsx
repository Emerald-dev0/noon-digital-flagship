import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

/* Lazy so landing-page visitors never download the flagship's GSAP bundle. */
const FlagshipPage = lazy(() => import('./pages/FlagshipPage'))

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The VSL landing page from the client's brief — the main deliverable */}
        <Route path="/" element={<LandingPage />} />
        {/* Earlier dark flagship concept, kept for reference */}
        <Route
          path="/flagship"
          element={
            <Suspense fallback={<div className="min-h-screen bg-[#07060b]" />}>
              <FlagshipPage />
            </Suspense>
          }
        />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
