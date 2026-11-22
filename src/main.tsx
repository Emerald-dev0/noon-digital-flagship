import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

// hydrate when the page was prerendered, otherwise mount fresh (dev).
const rootEl = document.getElementById('root')!
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
if (rootEl.firstElementChild) ReactDOM.hydrateRoot(rootEl, app)
else ReactDOM.createRoot(rootEl).render(app)
