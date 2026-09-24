import { IMAGES } from '../data'

export default function Hero() {
  return (
    <section id="inicio" className="k-hero">
      <div className="k-wrap k-hero__grid">
        <div className="k-hero__copy">
          <p className="k-kicker k-in">The King Barber Shop</p>
          <h1 className="k-hero__title">
            <span className="k-in" style={{ '--d': '80ms' }}>Estilo.</span>
            <span className="k-in" style={{ '--d': '160ms' }}>Precisión.</span>
            <span className="k-in" style={{ '--d': '240ms' }}>Carácter.</span>
          </h1>
          <p className="k-hero__text k-in" style={{ '--d': '360ms' }}>
            Cortes cuidados al detalle, barba con forma y un espacio pensado
            para que disfrutes del momento.
          </p>
          <div className="k-hero__actions k-in" style={{ '--d': '440ms' }}>
            <a href="#reservas" className="k-btn k-btn--gold">
              Reservar cita
            </a>
            <a href="#servicios" className="k-btn k-btn--line">
              Ver servicios
            </a>
          </div>
        </div>

        <figure className="k-hero__media">
          <div className="k-frame">
            <img
              src={IMAGES.cut.src}
              alt={IMAGES.cut.alt}
              width="643"
              height="858"
              fetchPriority="high"
            />
          </div>
          <img src={IMAGES.logo.src} alt="" className="k-hero__seal" aria-hidden="true" />
        </figure>
      </div>
    </section>
  )
}
