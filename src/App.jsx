import { useEffect } from 'react'
import { usePathname } from './router/router'
import StudioHome from './studio/StudioHome'
import NotFound from './studio/NotFound'
import Barberia from './projects/barberia/Barberia'
import DisenoWeb from './studio/services/DisenoWeb'
import DesarrolloWeb from './studio/services/DesarrolloWeb'
import LandingPages from './studio/services/LandingPages'
import OptimizacionMovil from './studio/services/OptimizacionMovil'
import PresenciaDigital from './studio/services/PresenciaDigital'
import LegalPage from './studio/legal/LegalPage'
import Inmobiliaria from './projects/inmobiliaria/Inmobiliaria'
import { BASE as ESTATE_BASE } from './projects/inmobiliaria/data'

const LegalNotice = () => <LegalPage page="notice" />
const Privacy = () => <LegalPage page="privacy" />
const Cookies = () => <LegalPage page="cookies" />

// Rutas del sitio. Para añadir un proyecto nuevo:
// 1. crear su carpeta en src/projects/<nombre>/
// 2. registrar aquí su ruta
// 3. añadirlo a la lista PROJECTS en src/studio/data.js
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const ROUTES = {
  '/': StudioHome,
  '/proyectos/barberia': Barberia,
  // Demo inmobiliaria: inicio + fichas en /proyectos/inmobiliaria/<slug> (ver resolvePage)
  [ESTATE_BASE]: Inmobiliaria,
  // Páginas de servicio (slugs en src/studio/data.js → SERVICES)
  '/servicios/diseno-web': DisenoWeb,
  '/servicios/desarrollo-web': DesarrolloWeb,
  '/servicios/landing-pages': LandingPages,
  '/servicios/optimizacion-movil': OptimizacionMovil,
  '/servicios/presencia-digital': PresenciaDigital,
  // Páginas legales (rutas en src/studio/data.js → LEGAL_ROUTES)
  '/aviso-legal': LegalNotice,
  '/privacidad': Privacy,
  '/cookies': Cookies,
}

export default function App() {
  const pathname = usePathname()
  // Rutas con subpáginas (fichas de inmuebles). Un slug inexistente muestra 404 (Inmobiliaria.jsx).
  const Page = ROUTES[pathname] ?? (pathname.startsWith(`${ESTATE_BASE}/`) ? Inmobiliaria : NotFound)

  useEffect(() => {
    const { hash } = window.location
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView()
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname])

  return <Page />
}
