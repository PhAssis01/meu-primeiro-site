import { useEffect } from 'react'
import { usePathname } from './router/router'
import StudioHome from './studio/StudioHome'
import NotFound from './studio/NotFound'
import TheKing from './projects/the-king/TheKing'
import DisenoWeb from './studio/services/DisenoWeb'
import DesarrolloWeb from './studio/services/DesarrolloWeb'
import LandingPages from './studio/services/LandingPages'
import OptimizacionMovil from './studio/services/OptimizacionMovil'
import PresenciaDigital from './studio/services/PresenciaDigital'

// Rutas del sitio. Para añadir un proyecto nuevo:
// 1. crear su carpeta en src/projects/<nombre>/
// 2. registrar aquí su ruta
// 3. añadirlo a la lista PROJECTS en src/studio/data.js
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const ROUTES = {
  '/': StudioHome,
  '/proyectos/the-king': TheKing,
  // Páginas de servicio (slugs en src/studio/data.js → SERVICES)
  '/servicios/diseno-web': DisenoWeb,
  '/servicios/desarrollo-web': DesarrolloWeb,
  '/servicios/landing-pages': LandingPages,
  '/servicios/optimizacion-movil': OptimizacionMovil,
  '/servicios/presencia-digital': PresenciaDigital,
}

export default function App() {
  const pathname = usePathname()
  const Page = ROUTES[pathname] ?? NotFound

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
