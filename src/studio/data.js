// Datos de PH Web Studio que no dependen del idioma (email, enlaces, orden).
// Los textos en español, inglés y portugués de Brasil están en ./copy.js.

export const CONTACT_EMAIL = 'phwebstudio.es@gmail.com'

// Envío real del formulario de contacto (opcional).
// Vacío = no hay servicio de envío configurado: el formulario prepara un email
// en la aplicación de correo del visitante y lo indica con claridad.
// Para activarlo, pega aquí la URL de un servicio de formularios que acepte
// POST con FormData y responda 2xx (p. ej. Formspree: 'https://formspree.io/f/xxxxxxx').
// ⚠ Si lo activas: 1) añade su origen a connect-src en public/_headers (CSP) y
// 2) añade ese proveedor (y su posible transferencia internacional) a la
//    Política de privacidad (src/studio/legal/content.js).
export const CONTACT_ENDPOINT = ''

// ---------------------------------------------------------------------------
// DATOS LEGALES DEL TITULAR (Aviso legal, Política de privacidad)
// Obligatorios según la LSSI-CE (art. 10) y el RGPD (art. 13).
// Mientras un campo esté vacío, las páginas legales muestran un aviso
// «pendiente de publicación» y un aviso visible, y `npm run build` muestra una advertencia.
// No rellenar con datos inventados: solo los reales del titular.
// ---------------------------------------------------------------------------
export const LEGAL = {
  // Nombre y apellidos del titular (si es autónomo) o razón social (si es sociedad).
  ownerName: '',
  // NIF / NIE (persona física) o CIF/NIF de la sociedad.
  taxId: '',
  // Domicilio completo (calle, número, código postal, ciudad, provincia, España).
  address: '',
  // Solo si está inscrito en un registro público (p. ej. Registro Mercantil:
  // tomo, folio, hoja). Si es autónomo sin inscripción, escribir exactamente: 'no-aplica'.
  registry: '',
  // Plazo máximo (en meses) para conservar consultas que no terminan en encargo.
  // Valor propuesto: confírmalo o cámbialo.
  contactRetentionMonths: 12,
  // Fecha de la última revisión de los textos legales (AAAA-MM-DD).
  lastUpdated: '2026-11-12',
}

export const LEGAL_ROUTES = {
  notice: '/aviso-legal',
  privacy: '/privacidad',
  cookies: '/cookies',
}

// Secciones de la Home (los nombres visibles están en copy.js → nav).
export const NAV_IDS = ['inicio', 'servicios', 'proyectos', 'proceso', 'contacto']

// `art` corresponde a una ilustración de components/ServiceArt.jsx.
// `featured: true` muestra la tarjeta en formato grande.
// `slug`: página propia del servicio en /servicios/<slug> (ver App.jsx);
// también es la clave de sus textos en copy.js → services.items.
export const SERVICES = [
  { art: 'design', slug: 'diseno-web', featured: true },
  { art: 'code', slug: 'desarrollo-web', featured: true },
  { art: 'target', slug: 'landing-pages' },
  { art: 'mobile', slug: 'optimizacion-movil' },
  { art: 'globe', slug: 'presencia-digital' },
]

export const serviceHref = (slug) => `/servicios/${slug}`

// Proyectos del portfolio. El número (01, 02…) se genera según el orden.
// `preview`: miniatura registrada en components/previews/index.js.
// Textos de cada proyecto: copy.js → projects.items[slug].
export const PROJECTS = [
  {
    slug: 'barberia',
    href: '/proyectos/barberia',
    url: 'phwebstudios.net/proyectos/barberia',
    preview: 'barberia',
  },
  {
    slug: 'inmobiliaria',
    href: '/proyectos/inmobiliaria',
    url: 'phwebstudios.net/proyectos/inmobiliaria',
    preview: 'inmobiliaria',
  },
  // Próximos proyectos (descomentar cuando existan su página, su miniatura y sus textos):
  // { slug: 'restaurante', … },
  // { slug: 'gimnasio', … },
  // { slug: 'hotel', … },
  // { slug: 'taller', … },
  // { slug: 'clinica', … },
  // { slug: 'peluqueria', … },
]
