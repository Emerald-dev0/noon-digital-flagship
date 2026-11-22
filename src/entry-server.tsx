import { renderToString } from 'react-dom/server'
import LandingPage from './pages/LandingPage'

// Build-time only: renders the landing page to HTML. The page uses no route
// hooks, so it renders without a Router.
export function render() {
  return { html: renderToString(<LandingPage />) }
}
