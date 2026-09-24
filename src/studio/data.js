// Contenido editable de PH Web Studio.
// Cambia aquí textos, email y proyectos sin tocar los componentes.

export const CONTACT_EMAIL = 'phwebstudio.es@gmail.com'

export const META_DESCRIPTION =
  'PH Web Studio es un estudio de diseño y desarrollo web. Creamos websites profesionales para negocios que quieren crecer.'

export const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'proceso', label: 'Proceso' },
  { id: 'contacto', label: 'Contacto' },
]

// `art` corresponde a una ilustración de components/ServiceArt.jsx.
// `featured: true` muestra la tarjeta en formato grande.
// `slug`: página propia del servicio en /servicios/<slug> (ver App.jsx).
export const SERVICES = [
  {
    art: 'design',
    slug: 'diseno-web',
    title: 'Diseño web',
    text: 'Una imagen a medida que refleja la personalidad de tu negocio y transmite confianza desde el primer vistazo.',
    featured: true,
  },
  {
    art: 'code',
    slug: 'desarrollo-web',
    title: 'Desarrollo web',
    text: 'Webs rápidas, seguras y fáciles de mantener, construidas con tecnología actual.',
    featured: true,
  },
  {
    art: 'target',
    slug: 'landing-pages',
    title: 'Landing pages',
    text: 'Páginas con un único objetivo: que te llamen, te escriban o reserven.',
  },
  {
    art: 'mobile',
    slug: 'optimizacion-movil',
    title: 'Optimización móvil',
    text: 'Diseñadas primero para el teléfono, donde te busca buena parte de tus clientes.',
  },
  {
    art: 'globe',
    slug: 'presencia-digital',
    title: 'Presencia digital',
    text: 'Dominio, correo profesional y perfil de Google alineados con tu marca.',
  },
]

// Proyectos del portfolio. El número (01, 02…) se genera según el orden.
// `preview`: miniatura registrada en components/previews/index.js.
export const serviceHref = (slug) => `/servicios/${slug}`

export const PROJECTS = [
  {
    slug: 'the-king',
    name: 'The King Barber Shop',
    category: 'Barbería',
    label: 'Proyecto conceptual — creado por PH Web Studio',
    description:
      'Propuesta de website para una barbería de estética negra y dorada: identidad fiel al logotipo, servicios claros y reserva de citas desde el móvil.',
    highlights: ['Web completa', 'Reserva de citas', 'Adaptada a móvil'],
    href: '/proyectos/the-king',
    url: 'phwebstudio.com/proyectos/the-king',
    preview: 'the-king',
  },
  // Próximos proyectos (descomentar cuando existan su página y su miniatura):
  // { slug: 'restaurante', name: '…', category: 'Restaurante', … },
  // { slug: 'gimnasio', name: '…', category: 'Gimnasio', … },
  // { slug: 'hotel', name: '…', category: 'Hotel', … },
  // { slug: 'taller', name: '…', category: 'Taller mecánico', … },
  // { slug: 'clinica', name: '…', category: 'Clínica', … },
  // { slug: 'peluqueria', name: '…', category: 'Peluquería', … },
]

export const PROCESS = [
  {
    title: 'Hablamos',
    text: 'Conocemos tu negocio, a tus clientes y lo que necesitas conseguir con la web.',
  },
  {
    title: 'Diseñamos',
    text: 'Definimos la estructura y la propuesta visual antes de escribir una sola línea de código.',
  },
  {
    title: 'Construimos',
    text: 'Desarrollamos la web, rápida y adaptada a cualquier pantalla, y la revisamos contigo.',
  },
  {
    title: 'Publicamos',
    text: 'La ponemos en línea con tu dominio y te acompañamos en los primeros pasos.',
  },
]
