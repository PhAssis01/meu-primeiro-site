import { IMAGES } from '../data'

// Galería construida solo con las imágenes disponibles.
// Para añadir fotografías: importar el archivo en data.js y añadir un <figure>.
export default function Gallery() {
  return (
    <section id="galeria" className="k-section k-gallery">
      <div className="k-wrap">
        <header className="k-head" data-reveal>
          <div>
            <h2 className="k-h2">El espacio y el trabajo</h2>
          </div>
          <p className="k-head__note">Imágenes de referencia facilitadas para este concepto.</p>
        </header>

        <div className="k-gallery__grid">
          <figure className="k-tile k-tile--space" data-reveal>
            <img src={IMAGES.space.src} alt={IMAGES.space.alt} width="570" height="304" loading="lazy" />
            <figcaption>El espacio</figcaption>
          </figure>

          <figure className="k-tile k-tile--cut" data-reveal style={{ '--reveal-delay': '80ms' }}>
            <img src={IMAGES.cut.src} alt={IMAGES.cut.alt} width="643" height="858" loading="lazy" />
            <figcaption>Degradado con textura</figcaption>
          </figure>

          <div className="k-tile k-tile--brand" data-reveal style={{ '--reveal-delay': '160ms' }}>
            <img src={IMAGES.logo.src} alt="" aria-hidden="true" width="336" height="321" loading="lazy" />
          </div>

          <a href="#reservas" className="k-tile k-tile--cta" data-reveal style={{ '--reveal-delay': '240ms' }}>
            <span className="k-tile__cta-title">Tu próximo corte empieza aquí.</span>
            <span className="k-tile__cta-link">Reservar cita →</span>
          </a>
        </div>
      </div>
    </section>
  )
}
