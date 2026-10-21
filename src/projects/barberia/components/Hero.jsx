import { useBarberCopy } from '../copy'
import { LogoPlaceholder, PhotoPlaceholder } from './Placeholder'

export default function Hero() {
  const t = useBarberCopy()

  return (
    <section id="inicio" className="bb-hero">
      <div className="bb-wrap bb-hero__grid">
        <div className="bb-hero__copy">
          <p className="bb-kicker bb-in">{t.brand}</p>
          <h1 className="bb-hero__title">
            {t.hero.title.map((word, index) => (
              <span key={index} className="bb-in" style={{ '--d': `${80 * (index + 1)}ms` }}>
                {word}
              </span>
            ))}
          </h1>
          <p className="bb-hero__text bb-in" style={{ '--d': '360ms' }}>
            {t.hero.text}
          </p>
          <div className="bb-hero__actions bb-in" style={{ '--d': '440ms' }}>
            <a href="#reservas" className="bb-btn bb-btn--gold">
              {t.book}
            </a>
            <a href="#servicios" className="bb-btn bb-btn--line">
              {t.hero.services}
            </a>
          </div>
        </div>

        <figure className="bb-hero__media">
          <div className="bb-frame">
            <PhotoPlaceholder hint={t.hero.photo} className="bb-frame__ph" />
          </div>
          <LogoPlaceholder className="bb-hero__seal" />
        </figure>
      </div>
    </section>
  )
}
