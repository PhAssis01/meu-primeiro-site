// Demo de web para barberías — proyecto conceptual creado por PH Web Studio.
// Es una plantilla: no representa a ningún negocio real. El nombre, el logotipo,
// las fotografías, los colores y los textos se sustituyen por los de cada cliente.

// Texto que aparece en los espacios reservados para el logotipo y las fotos.
export const BRAND_PLACEHOLDER = 'Nombre de tu barbería'

export const DEMO_LABEL = 'Demo para barberías — creada por PH Web Studio'

export const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'concepto', label: 'Concepto' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'galeria', label: 'Galería' },
  { id: 'contacto', label: 'Contacto' },
]

// Sin precios: se definirán con cada negocio.
export const SERVICES = [
  {
    name: 'Corte',
    text: 'Clásico o actual, a tijera o a máquina, adaptado a tu tipo de pelo y a tu estilo.',
  },
  {
    name: 'Barba',
    text: 'Perfilado, rebaje y definición para una barba cuidada y con forma.',
  },
  {
    name: 'Corte + Barba',
    text: 'El servicio completo para salir con la imagen terminada de principio a fin.',
  },
  {
    name: 'Tratamientos',
    text: 'Cuidados para el pelo y la barba que completan el resultado.',
  },
]

// Qué se personaliza a partir de cada barbería.
export const CONCEPT = [
  {
    title: 'Tu logotipo',
    text: 'El logotipo marca el tono de toda la web: colores, tipografía y estilo parten de tu marca.',
  },
  {
    title: 'Tu espacio',
    text: 'Las fotos de tu local definen la atmósfera y ayudan a elegir la paleta de la web.',
  },
  {
    title: 'Tu trabajo',
    text: 'Los cortes son los protagonistas. El diseño deja espacio para que tus fotografías hablen.',
  },
]

// Paleta de ejemplo de esta demo (se adapta a la identidad de cada cliente).
export const PALETTE = [
  { name: 'Negro', hex: '#080808' },
  { name: 'Dorado', hex: '#C8A45D' },
  { name: 'Marfil', hex: '#F5F1E8' },
]

// Marcadores de contacto: se sustituyen por los datos reales de cada negocio.
export const CONTACT = [
  { title: 'Dirección', value: '[Dirección del local]' },
  { title: 'Teléfono', value: '[Teléfono de contacto]' },
  { title: 'Horario', value: '[Horario de apertura]' },
]
