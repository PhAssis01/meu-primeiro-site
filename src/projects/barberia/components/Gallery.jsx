import { LogoPlaceholder, PhotoPlaceholder } from './Placeholder'

// Galería de la demo: cada hueco reservado se sustituye por las fotos del cliente.
export default function Gallery() {
  return (
    <section id="galeria" className="bb-section bb-gallery">
      <div className="bb-wrap">
        <header className="bb-head" data-reveal>
          <div>
            <h2 className="bb-h2">Tu espacio y tu trabajo</h2>
          </div>
          <p className="bb-head__note">Espacios reservados para las fotos de tu barbería.</p>
        </header>

        <div className="bb-gallery__grid">
          <figure className="bb-tile bb-tile--space" data-reveal>
            <PhotoPlaceholder hint="Foto del local" />
            <figcaption>Tu espacio</figcaption>
          </figure>

          <figure className="bb-tile bb-tile--cut" data-reveal style={{ '--reveal-delay': '80ms' }}>
            <PhotoPlaceholder hint="Foto de un corte" />
            <figcaption>Tus cortes</figcaption>
          </figure>

          <div className="bb-tile bb-tile--brand" data-reveal style={{ '--reveal-delay': '160ms' }}>
            <LogoPlaceholder />
          </div>

          <a href="#reservas" className="bb-tile bb-tile--cta" data-reveal style={{ '--reveal-delay': '240ms' }}>
            <span className="bb-tile__cta-title">Tu próximo corte empieza aquí.</span>
            <span className="bb-tile__cta-link">Reservar cita →</span>
          </a>
        </div>
      </div>
    </section>
  )
}
