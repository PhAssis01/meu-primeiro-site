import { useBarberCopy } from '../copy'
import { LogoPlaceholder, PhotoPlaceholder } from './Placeholder'

// Galería de la demo: cada hueco reservado se sustituye por las fotos del cliente.
export default function Gallery() {
  const t = useBarberCopy()
  const g = t.gallery

  return (
    <section id="galeria" className="bb-section bb-gallery">
      <div className="bb-wrap">
        <header className="bb-head" data-reveal>
          <div>
            <h2 className="bb-h2">{g.title}</h2>
          </div>
          <p className="bb-head__note">{g.note}</p>
        </header>

        <div className="bb-gallery__grid">
          <figure className="bb-tile bb-tile--space" data-reveal>
            <PhotoPlaceholder hint={g.spaceHint} />
            <figcaption>{g.space}</figcaption>
          </figure>

          <figure className="bb-tile bb-tile--cut" data-reveal style={{ '--reveal-delay': '80ms' }}>
            <PhotoPlaceholder hint={g.cutHint} />
            <figcaption>{g.cuts}</figcaption>
          </figure>

          <div className="bb-tile bb-tile--brand" data-reveal style={{ '--reveal-delay': '160ms' }}>
            <LogoPlaceholder />
          </div>

          <a href="#reservas" className="bb-tile bb-tile--cta" data-reveal style={{ '--reveal-delay': '240ms' }}>
            <span className="bb-tile__cta-title">{g.cta}</span>
            <span className="bb-tile__cta-link">{t.book} →</span>
          </a>
        </div>
      </div>
    </section>
  )
}
