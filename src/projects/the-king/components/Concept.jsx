import { CONCEPT, IMAGES, PALETTE } from '../data'

export default function Concept() {
  return (
    <section id="concepto" className="k-section k-concept">
      <div className="k-wrap">
        <div className="k-concept__intro" data-reveal>
          <p className="k-kicker">El concepto</p>
          <h2 className="k-h2">
            Una experiencia digital diseñada para representar la identidad de
            The King Barber Shop.
          </h2>
          <p className="k-concept__lead">
            Este concepto ha sido desarrollado por PH Web Studio a partir de
            tres referencias del propio negocio: su logotipo, su espacio y su
            trabajo.
          </p>
        </div>

        <div className="k-concept__grid">
          <figure className="k-concept__media" data-reveal>
            <div className="k-concept__img">
              <img src={IMAGES.space.src} alt={IMAGES.space.alt} width="570" height="304" loading="lazy" />
            </div>
            <figcaption>
              <span>Paleta extraída del espacio</span>
              <ul className="k-palette">
                {PALETTE.map((color) => (
                  <li key={color.hex}>
                    <span className="k-palette__chip" style={{ background: color.hex }} />
                    <span>{color.name}</span>
                    <code>{color.hex}</code>
                  </li>
                ))}
              </ul>
            </figcaption>
          </figure>

          <ul className="k-concept__list">
            {CONCEPT.map((item, index) => (
              <li key={item.title} data-reveal style={{ '--reveal-delay': `${index * 80}ms` }}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
