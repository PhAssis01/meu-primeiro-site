import { LaptopFrame, PhoneFrame } from './BrowserFrame'
import GenericSite from './mockups/GenericSite'
import DigitalLine from './DigitalLine'
import Arrow from './Arrow'

export default function Hero() {
  return (
    <section id="inicio" className="s-hero">
      <div className="s-hero__grid-bg" aria-hidden="true" data-parallax="-0.06" />

      <div className="s-container s-hero__inner">
        <DigitalLine />

        <div className="s-hero__copy">
          <p className="s-hero__tag s-fade" style={{ '--d': '0ms' }}>
            PH Web Studio
          </p>

          <h1 className="s-hero__title s-fade" style={{ '--d': '80ms' }}>
            Websites que hacen que tu negocio se vea profesional.
          </h1>

          <p className="s-hero__lead s-fade" style={{ '--d': '260ms' }}>
            Diseñamos y desarrollamos webs a medida para pequeños negocios:
            claras, rápidas y pensadas para convertir visitas en clientes.
          </p>

          <div className="s-hero__actions s-fade" style={{ '--d': '360ms' }}>
            <a href="#contacto" className="s-btn s-btn--primary">
              Quiero una web <Arrow />
            </a>
            <a href="#proyectos" className="s-btn s-btn--ghost">
              Ver proyectos
            </a>
          </div>
        </div>

        <div className="s-hero__visual s-fade" style={{ '--d': '200ms' }} aria-hidden="true">
          <LaptopFrame className="s-hero__laptop" data-parallax="0.05">
            <GenericSite />
          </LaptopFrame>
          <PhoneFrame className="s-hero__phone" data-parallax="0.12">
            <GenericSite variant="mobile" />
          </PhoneFrame>
        </div>
      </div>

      <div className="s-container">
        <p className="s-hero__foot s-fade" style={{ '--d': '600ms' }}>
          <span className="s-hero__tick" aria-hidden="true" />
          Webs para barberías, restaurantes, gimnasios, hoteles, talleres,
          clínicas y peluquerías.
        </p>
      </div>
    </section>
  )
}
