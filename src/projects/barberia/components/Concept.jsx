import { CONCEPT, PALETTE } from '../data'
import { PhotoPlaceholder } from './Placeholder'

export default function Concept() {
  return (
    <section id="concepto" className="bb-section bb-concept">
      <div className="bb-wrap">
        <div className="bb-concept__intro" data-reveal>
          <p className="bb-kicker">Demo para barberías</p>
          <h2 className="bb-h2">
            Una web pensada para barberías, lista para adaptarse a la identidad
            de cada negocio.
          </h2>
          <p className="bb-concept__lead">
            Este proyecto es una demo creada por PH Web Studio. El nombre, el
            logotipo, las fotografías, los colores y los textos se sustituyen
            por los de tu barbería.
          </p>
        </div>

        <div className="bb-concept__grid">
          <figure className="bb-concept__media" data-reveal>
            <div className="bb-concept__img">
              <PhotoPlaceholder hint="Foto de tu local" />
            </div>
            <figcaption>
              <span>Paleta de ejemplo — se adapta a tu marca</span>
              <ul className="bb-palette">
                {PALETTE.map((color) => (
                  <li key={color.hex}>
                    <span className="bb-palette__chip" style={{ background: color.hex }} />
                    <span>{color.name}</span>
                    <code>{color.hex}</code>
                  </li>
                ))}
              </ul>
            </figcaption>
          </figure>

          <ul className="bb-concept__list">
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
