// Demo de web para inmobiliarias — proyecto conceptual creado por PH Web Studio.
//
// ⚠ TODO ES FICTICIO: no es una inmobiliaria real, los inmuebles no existen,
// no están a la venta ni en alquiler y los precios son inventados. Las fotos
// son imágenes de demostración (Unsplash, ver ./img/CREDITS.md) y no muestran
// los inmuebles descritos. No hay nombre ni logotipo de agencia: el espacio del
// logo muestra un marcador («Nombre de tu inmobiliaria»).
//
// Aquí están solo los datos que no dependen del idioma. Los textos
// (es · en · pt-BR) están en ./copy.js. Este archivo no importa nada para que
// scripts/prerender-routes.mjs pueda leerlo desde Node.

export const BASE = '/proyectos/inmobiliaria'
export const propertyHref = (slug) => `${BASE}/${slug}`

// Secciones de la página principal (nombres visibles en copy.js → nav).
export const NAV_IDS = ['inicio', 'destacados', 'categorias', 'buscar', 'contacto']

// venta · alquiler
export const OPERATIONS = ['venta', 'alquiler']
export const TYPES = ['piso', 'apartamento', 'casa', 'villa', 'atico']

// Opciones de precio de los filtros (euros; en alquiler, euros al mes).
export const PRICE_STEPS = {
  venta: [150000, 200000, 250000, 300000, 400000, 500000],
  alquiler: [800, 1000, 1200, 1500],
}

// Foto de cada categoría (clave de ./img).
export const TYPE_IMAGES = {
  piso: 'ext-piso-tgn',
  apartamento: 'ext-salou',
  casa: 'ext-casa-reus',
  villa: 'ext-villa',
  atico: 'ext-atico',
}

// Inmuebles ficticios.
// · images: claves de ./img (la primera es la portada).
// · features: claves de copy.js → features.
// · nearby: minutos a pie (aprox., de ejemplo) → copy.js → nearby.
// · map: posición del marcador en el mapa ilustrativo (%, no es una ubicación real).
// · Descripciones y títulos: copy.js → properties[slug].
export const PROPERTIES = [
  {
    slug: 'piso-tarragona',
    ref: 'DEMO-01',
    operation: 'venta',
    type: 'piso',
    city: 'Tarragona',
    price: 189000,
    beds: 3,
    baths: 2,
    area: 92,
    featured: true,
    images: ['ext-piso-tgn', 'salon-1', 'cocina-1', 'dormitorio-2', 'bano-1'],
    features: ['ascensor', 'terraza', 'aire', 'calefaccion', 'armarios'],
    nearby: { transporte: 4, comercios: 3, colegios: 6, playa: 15 },
    map: [38, 46],
  },
  {
    slug: 'casa-moderna-reus',
    ref: 'DEMO-02',
    operation: 'venta',
    type: 'casa',
    city: 'Reus',
    price: 325000,
    beds: 4,
    baths: 3,
    area: 210,
    featured: true,
    images: ['ext-casa-reus', 'salon-2', 'cocina-2', 'dormitorio-1', 'bano-2'],
    features: ['piscina', 'jardin', 'garaje', 'aire', 'placasSolares'],
    nearby: { transporte: 8, comercios: 6, colegios: 5, parque: 3 },
    map: [62, 34],
  },
  {
    slug: 'piso-barcelona',
    ref: 'DEMO-03',
    operation: 'venta',
    type: 'piso',
    city: 'Barcelona',
    price: 275000,
    beds: 2,
    baths: 1,
    area: 68,
    featured: true,
    images: ['ext-piso-bcn', 'salon-3', 'cocina-3', 'dormitorio-3', 'bano-1'],
    features: ['ascensor', 'balcon', 'calefaccion', 'reformado'],
    nearby: { transporte: 2, comercios: 2, colegios: 7, parque: 5 },
    map: [44, 58],
  },
  {
    slug: 'casa-cerca-de-la-costa',
    ref: 'DEMO-04',
    operation: 'venta',
    type: 'casa',
    city: 'Cambrils',
    price: 410000,
    beds: 4,
    baths: 2,
    area: 180,
    featured: true,
    images: ['ext-casa-costa', 'salon-4', 'cocina-2', 'dormitorio-2', 'comedor-1'],
    features: ['piscina', 'jardin', 'terraza', 'garaje', 'aire'],
    nearby: { playa: 6, comercios: 9, transporte: 10, colegios: 12 },
    map: [56, 66],
  },
  {
    slug: 'apartamento-salou',
    ref: 'DEMO-05',
    operation: 'venta',
    type: 'apartamento',
    city: 'Salou',
    price: 165000,
    beds: 2,
    baths: 1,
    area: 64,
    featured: true,
    images: ['ext-salou', 'terraza-mar', 'salon-1', 'cocina-1', 'dormitorio-3'],
    features: ['vistasMar', 'terraza', 'piscinaComunitaria', 'ascensor', 'aire'],
    nearby: { playa: 3, comercios: 4, transporte: 6, parque: 8 },
    map: [48, 70],
  },
  {
    slug: 'villa-contemporanea',
    ref: 'DEMO-06',
    operation: 'venta',
    type: 'villa',
    city: 'Altafulla',
    price: 520000,
    beds: 5,
    baths: 4,
    area: 320,
    featured: true,
    images: ['ext-villa', 'salon-3', 'cocina-3', 'dormitorio-1', 'bano-2'],
    features: ['piscina', 'jardin', 'garaje', 'domotica', 'vistasMar', 'placasSolares'],
    nearby: { playa: 10, comercios: 12, colegios: 14, transporte: 15 },
    map: [66, 52],
  },
  {
    slug: 'piso-alquiler-tarragona',
    ref: 'DEMO-07',
    operation: 'alquiler',
    type: 'piso',
    city: 'Tarragona',
    price: 950,
    beds: 2,
    baths: 1,
    area: 75,
    featured: false,
    images: ['ext-piso-alquiler', 'salon-4', 'cocina-1', 'dormitorio-3', 'bano-1'],
    features: ['amueblado', 'ascensor', 'calefaccion', 'balcon'],
    nearby: { transporte: 3, comercios: 2, colegios: 5, playa: 18 },
    map: [34, 40],
  },
  {
    slug: 'atico-alquiler-barcelona',
    ref: 'DEMO-08',
    operation: 'alquiler',
    type: 'atico',
    city: 'Barcelona',
    price: 1450,
    beds: 2,
    baths: 2,
    area: 85,
    featured: false,
    images: ['ext-atico', 'vista-mar', 'salon-3', 'cocina-3', 'dormitorio-1'],
    features: ['terraza', 'vistasMar', 'aire', 'amueblado', 'ascensor'],
    nearby: { transporte: 2, comercios: 3, playa: 9, parque: 4 },
    map: [52, 44],
  },
]

export const CITIES = [...new Set(PROPERTIES.map((property) => property.city))].sort((a, b) =>
  a.localeCompare(b, 'es'),
)

export const findProperty = (slug) => PROPERTIES.find((property) => property.slug === slug)
