import { PALETTE } from '../data'
import { useBarberCopy } from '../copy'
import { PhotoPlaceholder } from './Placeholder'

export default function Concept() {
  const t = useBarberCopy()

  return (
    <section id="concepto" className="bb-section bb-concept">
      <div className="bb-wrap">
        <div className="bb-concept__intro" data-reveal>
          <p className="bb-kicker">{t.demoShort}</p>
          <h2 className="bb-h2">{t.concept.title}</h2>
          <p className="bb-concept__lead">{t.concept.lead}</p>
        </div>

        <div className="bb-concept__grid">
          <figure className="bb-concept__media" data-reveal>
            <div className="bb-concept__img">
              <PhotoPlaceholder hint={t.concept.photo} />
            </div>
            <figcaption>
              <span>{t.concept.palette}</span>
              <ul className="bb-palette">
                {PALETTE.map((hex, index) => (
                  <li key={hex}>
                    <span className="bb-palette__chip" style={{ background: hex }} />
                    <span>{t.palette[index]}</span>
                    <code>{hex}</code>
                  </li>
                ))}
              </ul>
            </figcaption>
          </figure>

          <ul className="bb-concept__list">
            {t.concept.items.map((item, index) => (
              <li key={index} data-reveal style={{ '--reveal-delay': `${index * 80}ms` }}>
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
