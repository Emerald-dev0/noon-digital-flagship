// Renders the landing page to static HTML after `vite build`, then removes the
// script the browser would otherwise need. The delivered page is HTML + CSS.
import { build } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const out = path.join(root, 'dist')
const tmp = path.join(root, '.ssr-tmp')

await build({
  configFile: false,
  root,
  logLevel: 'warn',
  plugins: [react()],
  resolve: { alias: { '@': path.join(root, 'src') } },
  build: { ssr: 'src/entry-server.tsx', outDir: tmp, emptyOutDir: true, cssCodeSplit: false, minify: false },
})

const { render } = await import(path.join(tmp, 'entry-server.js'))
const { html } = await render()

let template = fs.readFileSync(path.join(out, 'index.html'), 'utf8')

// Animation start-states (opacity 0 / shifted) get baked in by framer-motion.
// A page with no JavaScript must ship the settled state instead.
const settled = html
  .replace(/opacity:0(?=[;"])/g, 'opacity:1')
  .replace(/transform:translate[XY]\([^)]*\)(;|")/g, '$1')

template = template.replace('<div id="root"></div>', `<div id="root">${settled}</div>`)
template = template.replace(/\s*<script\b[^>]*><\/script>/g, '')

fs.writeFileSync(path.join(out, 'index.html'), template)
for (const f of fs.readdirSync(path.join(out, 'assets'))) {
  if (/\.js$/.test(f)) fs.rmSync(path.join(out, 'assets', f))
}
fs.rmSync(tmp, { recursive: true, force: true })
console.log(`prerendered index.html: ${(fs.statSync(path.join(out, 'index.html')).size / 1024).toFixed(0)} KB`)
