import { usePageMeta, useReveal } from '../../lib/hooks'
import { usePathname } from '../../router/router'
import NotFound from '../../studio/NotFound'
import { BASE, findProperty } from './data'
import { useEstateCopy } from './copy'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import PropertyPage from './components/PropertyPage'
import './inmobiliaria.css'

// Demo de web para inmobiliarias — proyecto conceptual de PH Web Studio.
// Rutas: /proyectos/inmobiliaria (inicio) y /proyectos/inmobiliaria/<slug> (ficha).
// Todo el contenido es ficticio (ver data.js).
function EstatePage({ property }) {
  const t = useEstateCopy()
  const title = property ? t.meta.property(t.properties[property.slug].title) : t.meta.title
  const description = property ? t.properties[property.slug].description[0] : t.meta.description
  usePageMeta(title, 'inmobiliaria', description)
  useReveal()

  return (
    <div className="estate">
      <Header home={!property} />
      <main id="main">{property ? <PropertyPage property={property} /> : <Home />}</main>
      <Footer />
    </div>
  )
}

export default function Inmobiliaria() {
  const pathname = usePathname()
  const slug = pathname.slice(BASE.length + 1)
  const property = slug ? findProperty(slug) : null
  if (slug && !property) return <NotFound />
  // `key`: al pasar de una ficha a otra se reinician galería, formularios y animaciones.
  return <EstatePage key={slug || 'home'} property={property} />
}
