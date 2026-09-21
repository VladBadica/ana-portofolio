import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Produces one self-contained index.html (JS + CSS inlined) so the site
// can be opened directly via file:// — a normal Vite build uses an
// external <script type="module">, which Chrome/Firefox refuse to load
// over file:// due to CORS, leaving a blank page on double-click.
export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: 'dist-standalone',
    cssCodeSplit: false,
    assetsInlineLimit: Infinity,
  },
})
