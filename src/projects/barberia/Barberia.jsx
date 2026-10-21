import { usePageMeta, useReveal } from '../../lib/hooks'
import { useBarberCopy } from './copy'
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
  const t = useBarberCopy()
  usePageMeta(t.meta.title, 'barberia', t.meta.description)
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
