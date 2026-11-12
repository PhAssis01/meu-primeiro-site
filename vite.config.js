import { readFileSync } from 'node:fs'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Cabeceras de la regla `/*` de public/_headers (las mismas que aplica Cloudflare).
// Se usan en `vite preview` para probar la CSP y demás cabeceras en local.
// No se aplican en `npm run dev`: el modo desarrollo inyecta scripts en línea
// (recarga en caliente) que la CSP bloquearía.
function headersFromCloudflareFile() {
  const headers = {}
  let inGlobalRule = false
  for (const line of readFileSync(new URL('./public/_headers', import.meta.url), 'utf8').split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith('#')) continue
    if (!/^\s/.test(line)) {
      inGlobalRule = line.trim() === '/*'
      continue
    }
    if (!inGlobalRule) continue
    const index = line.indexOf(':')
    if (index > 0) headers[line.slice(0, index).trim()] = line.slice(index + 1).trim()
  }
  return headers
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    headers: headersFromCloudflareFile(),
  },
})
