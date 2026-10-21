import { useStudioCopy } from '../copy'
import { LaptopFrame, PhoneFrame } from './BrowserFrame'
import GenericSite from './mockups/GenericSite'
import DigitalLine from './DigitalLine'
import Arrow from './Arrow'

export default function Hero() {
  const t = useStudioCopy().hero

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
            {t.title}
          </h1>

          <p className="s-hero__lead s-fade" style={{ '--d': '260ms' }}>
            {t.lead}
          </p>

          <div className="s-hero__actions s-fade" style={{ '--d': '360ms' }}>
            <a href="#contacto" className="s-btn s-btn--primary">
              {t.primary} <Arrow />
            </a>
            <a href="#proyectos" className="s-btn s-btn--ghost">
              {t.secondary}
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
          {t.foot}
        </p>
      </div>
    </section>
  )
}
