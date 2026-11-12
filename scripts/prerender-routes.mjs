// Se ejecuta después de `vite build` (ver "build" en package.json).
//
// A partir de dist/index.html genera un HTML por ruta con su título,
// descripción, canonical y Open Graph, y un dist/404.html (noindex).
// Así el servidor puede responder 200 en las rutas que existen y un
// 404 real en las demás (ver wrangler.jsonc → not_found_handling).
//
// Si se añade una ruta en src/App.jsx, añádela también aquí y en public/sitemap.xml.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE_URL = (process.env.SITE_URL || 'https://phwebstudios.net').replace(/\/$/, '')
const DIST = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')

const HOME_DESCRIPTION =
  'PH Web Studio: diseño y desarrollo web a medida para pequeños negocios. Webs claras, rápidas y adaptadas al móvil, pensadas para convertir visitas en clientes.'

// Textos iguales a los que usa cada página en usePageMeta (versión en español,
// idioma por defecto; ver src/studio/copy.js, services/copy/ y projects/barberia/copy.js).
const ROUTES = [
  { path: '/', title: 'PH Web Studio — Diseño y desarrollo web', description: HOME_DESCRIPTION },
  {
    path: '/proyectos/barberia',
    title: 'Demo de web para barberías — Proyecto conceptual de PH Web Studio',
    description:
      'Demo de website para barberías creada por PH Web Studio: plantilla personalizable con servicios, galería y reserva de citas desde el móvil.',
  },
  {
    path: '/servicios/diseno-web',
    title: 'Diseño web — PH Web Studio',
    description:
      'Diseño web a medida para pequeños negocios: estructura, identidad visual e interfaz pensadas para transmitir confianza.',
  },
  {
    path: '/servicios/desarrollo-web',
    title: 'Desarrollo web — PH Web Studio',
    description:
      'Desarrollo web a medida: convertimos el diseño en una web rápida, adaptable a cualquier pantalla y fácil de mantener.',
  },
  {
    path: '/servicios/landing-pages',
    title: 'Landing pages — PH Web Studio',
    description:
      'Landing pages rápidas y con un único objetivo: que cargan bien, causan buena primera impresión y convierten visitas en contactos.',
  },
  {
    path: '/servicios/optimizacion-movil',
    title: 'Optimización móvil — PH Web Studio',
    description:
      'Webs optimizadas para el móvil: diseñadas primero para el teléfono, cómodas de usar con una mano y rápidas de cargar.',
  },
  {
    path: '/servicios/presencia-digital',
    title: 'Presencia digital — PH Web Studio',
    description:
      'Presencia digital para negocios: web, dominio, correo profesional y perfil de Google alineados con tu marca.',
  },
  // Páginas legales (textos en src/studio/legal/content.js)
  {
    path: '/aviso-legal',
    title: 'Aviso legal — PH Web Studio',
    description:
      'Aviso legal de PH Web Studio: datos identificativos del titular del sitio web, condiciones de uso y responsabilidad.',
  },
  {
    path: '/privacidad',
    title: 'Política de privacidad — PH Web Studio',
    description:
      'Política de privacidad de PH Web Studio: qué datos personales se tratan, para qué, con qué base legal, durante cuánto tiempo y cómo ejercer tus derechos.',
  },
  {
    path: '/cookies',
    title: 'Política de cookies — PH Web Studio',
    description:
      'Política de cookies de PH Web Studio: esta web no utiliza cookies de analítica, publicidad ni seguimiento. Información sobre el almacenamiento local del navegador.',
  },
]

// Demo inmobiliaria: inicio + una página por inmueble ficticio.
// Títulos y descripciones salen de los propios textos de la demo (versión en español).
{
  const { BASE, PROPERTIES } = await import('../src/projects/inmobiliaria/data.js')
  const { COPY } = await import('../src/projects/inmobiliaria/copy.js')
  const t = COPY.es
  ROUTES.push({ path: BASE, title: t.meta.title, description: t.meta.description })
  for (const property of PROPERTIES) {
    const text = t.properties[property.slug]
    ROUTES.push({
      path: `${BASE}/${property.slug}`,
      title: t.meta.property(text.title),
      description: text.description[0],
    })
  }
}

// Aviso si faltan datos legales obligatorios (LSSI-CE art. 10 / RGPD art. 13).
const { LEGAL } = await import('../src/studio/data.js')
const missing = ['ownerName', 'taxId', 'address', 'registry'].filter((key) => !String(LEGAL[key] ?? '').trim())
if (missing.length) {
  console.warn(
    `\n⚠  prerender-routes: faltan datos legales en src/studio/data.js → LEGAL: ${missing.join(', ')}.\n` +
      '   Las páginas legales mostrarán «pendiente de publicación» y un aviso.\n',
  )
}

const escape = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function replaceOnce(html, pattern, replacement, label) {
  if (!pattern.test(html)) throw new Error(`prerender-routes: no se encontró ${label} en dist/index.html`)
  return html.replace(pattern, replacement)
}

function withMeta(html, { title, description, url }) {
  let out = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${escape(title)}</title>`, '<title>')
  out = replaceOnce(out, /<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${escape(description)}" />`, 'meta description')
  out = replaceOnce(out, /<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${escape(title)}" />`, 'og:title')
  out = replaceOnce(out, /<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${escape(description)}" />`, 'og:description')
  out = replaceOnce(out, /<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${escape(title)}" />`, 'twitter:title')
  out = replaceOnce(out, /<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${escape(description)}" />`, 'twitter:description')
  if (url) {
    out = replaceOnce(out, /<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`, 'canonical')
    out = replaceOnce(out, /<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`, 'og:url')
  }
  return out
}

const template = readFileSync(join(DIST, 'index.html'), 'utf8')

for (const route of ROUTES) {
  const url = route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`
  const file = route.path === '/' ? 'index.html' : `${route.path.slice(1)}.html`
  const target = join(DIST, file)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, withMeta(template, { ...route, url }))
}

// 404: misma aplicación (muestra la página "no encontrada"), sin canonical y fuera del índice.
let notFound = withMeta(template, {
  title: 'Página no encontrada — PH Web Studio',
  description: 'Esta página no existe.',
})
notFound = notFound
  .replace(/\s*<link rel="canonical" href="[^"]*"\s*\/?>/, '')
  .replace(/\s*<meta property="og:url" content="[^"]*"\s*\/?>/, '')
  .replace(/<meta name="robots" content="[^"]*"\s*\/?>/, '<meta name="robots" content="noindex" />')
writeFileSync(join(DIST, '404.html'), notFound)

console.log(`prerender-routes: ${ROUTES.length} rutas + 404.html → ${SITE_URL}`)
