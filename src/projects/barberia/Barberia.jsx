import { usePageMeta, useReveal } from '../../lib/hooks'
import Header from './components/Header'
import Hero from './components/Hero'
import Concept from './components/Concept'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './barberia.css'

// Demo de web para barberías — proyecto conceptual de PH Web Studio.
export default function Barberia() {
  usePageMeta(
    'Demo de web para barberías — Proyecto conceptual de PH Web Studio',
    'barberia',
    'Demo de website para barberías creada por PH Web Studio: plantilla personalizable con servicios, galería y reserva de citas desde el móvil.',
  )
  useReveal()

  return (
    <div className="barber">
      <Header />
      <main>
        <Hero />
        <Concept />
        <Services />
        <Gallery />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
