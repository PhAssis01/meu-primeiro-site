// The King Barber Shop — proyecto conceptual creado por PH Web Studio.
// No contiene datos comerciales reales: los campos entre corchetes son
// marcadores para completar con la información que facilite el negocio.

import logo from './assets/logo-the-king.png'
import cutPhoto from './assets/corte-degradado.jpg'
import spacePhoto from './assets/espacio.jpg'

export const IMAGES = {
  logo: {
    src: logo,
    alt: 'Logotipo de The King Barber Shop: escudo con corona y león en dorado',
  },
  cut: {
    src: cutPhoto,
    alt: 'Vista posterior de un corte degradado con textura rizada en la parte superior',
  },
  space: {
    src: spacePhoto,
    alt: 'Interior de la barbería con sillones negros y dorados, madera clara e iluminación cálida',
  },
}

export const DEMO_LABEL = 'Proyecto conceptual — creado por PH Web Studio'

export const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'concepto', label: 'Concepto' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'galeria', label: 'Galería' },
  { id: 'contacto', label: 'Contacto' },
]

// Sin precios: se definirán con el negocio.
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

// Referencias del concepto (lo que PH Web Studio tomó del propio negocio).
export const CONCEPT = [
  {
    title: 'El logotipo',
    text: 'El escudo con corona y león marca el tono de toda la web: dorado sobre negro, clásico y con presencia.',
  },
  {
    title: 'El espacio',
    text: 'Sillones negros con detalles dorados, madera clara y luz cálida definen la paleta y la atmósfera.',
  },
  {
    title: 'El trabajo',
    text: 'Los cortes son los protagonistas. El diseño deja espacio para que las fotografías hablen.',
  },
]

export const PALETTE = [
  { name: 'Negro', hex: '#080808' },
  { name: 'Dorado', hex: '#C8A45D' },
  { name: 'Marfil', hex: '#F5F1E8' },
]

// Marcadores de contacto: sustituir por los datos reales del negocio.
export const CONTACT = [
  { title: 'Dirección', value: '[Dirección del local]' },
  { title: 'Teléfono', value: '[Teléfono de contacto]' },
  { title: 'Horario', value: '[Horario de apertura]' },
]
