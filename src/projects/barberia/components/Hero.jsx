import { BRAND_PLACEHOLDER } from '../data'
import { LogoPlaceholder, PhotoPlaceholder } from './Placeholder'

export default function Hero() {
  return (
    <section id="inicio" className="bb-hero">
      <div className="bb-wrap bb-hero__grid">
        <div className="bb-hero__copy">
          <p className="bb-kicker bb-in">{BRAND_PLACEHOLDER}</p>
          <h1 className="bb-hero__title">
            <span className="bb-in" style={{ '--d': '80ms' }}>Estilo.</span>
            <span className="bb-in" style={{ '--d': '160ms' }}>Precisión.</span>
            <span className="bb-in" style={{ '--d': '240ms' }}>Carácter.</span>
          </h1>
          <p className="bb-hero__text bb-in" style={{ '--d': '360ms' }}>
            Cortes cuidados al detalle, barba con forma y un espacio pensado
            para que disfrutes del momento.
          </p>
          <div className="bb-hero__actions bb-in" style={{ '--d': '440ms' }}>
            <a href="#reservas" className="bb-btn bb-btn--gold">
              Reservar cita
            </a>
            <a href="#servicios" className="bb-btn bb-btn--line">
              Ver servicios
            </a>
          </div>
        </div>

        <figure className="bb-hero__media">
          <div className="bb-frame">
            <PhotoPlaceholder hint="Foto de tus cortes" className="bb-frame__ph" />
          </div>
          <LogoPlaceholder className="bb-hero__seal" />
        </figure>
      </div>
    </section>
  )
}
