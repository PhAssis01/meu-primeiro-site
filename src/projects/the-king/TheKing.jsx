import { usePageMeta, useReveal } from '../../lib/hooks'
import Header from './components/Header'
import Hero from './components/Hero'
import Concept from './components/Concept'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './the-king.css'

// The King Barber Shop — proyecto conceptual de PH Web Studio.
export default function TheKing() {
  usePageMeta(
    'The King Barber Shop — Proyecto conceptual de PH Web Studio',
    'the-king',
    'Propuesta de website para The King Barber Shop: proyecto conceptual creado por PH Web Studio.',
  )
  useReveal()

  return (
    <div className="king">
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
