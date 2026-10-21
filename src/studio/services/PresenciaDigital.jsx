import { useRef, useState } from 'react'
import ServiceLayout, { ServiceHero } from './ServiceLayout'
import { SvPoints, SvSection, SvSteps } from './parts'
import { useScrollProgress } from '../motion'
import Icon from './icons'
import { useCopy } from '../../i18n/context'
import COPY from './copy/presencia-digital'

// Hero: una búsqueda y el resultado de un negocio (ficticio) bien presentado.
function HeroVisual({ t }) {
  return (
    <div className="sv-find" data-parallax="0.04">
      <div className="sv-find__search">
        <Icon name="search" />
        <span className="sv-find__query">{t.query}</span>
        <i className="sv-find__caret" />
      </div>
      <div className="sv-find__result">
        <div className="sv-find__map">
          <i className="sv-find__road sv-find__road--h" />
          <i className="sv-find__road sv-find__road--v" />
          <span className="sv-find__pin">
            <Icon name="pin" />
          </span>
        </div>
        <div className="sv-find__info">
          <strong>{t.name}</strong>
          <span>{t.info}</span>
          <span className="sv-find__url">olivorestaurante.es</span>
          <span className="sv-find__actions">
            <span className="is-main">{t.actions[0]}</span>
            <span>{t.actions[1]}</span>
            <span>{t.actions[2]}</span>
          </span>
        </div>
      </div>
      <div className="sv-find__phone" data-parallax="0.1">
        <span className="sv-find__phone-bar" />
        <b />
        <b />
        <span className="sv-find__phone-btn" />
      </div>
    </div>
  )
}

// Recorrido: una línea se dibuja con el scroll y enciende cada etapa.
function Journey({ items }) {
  const ref = useRef(null)
  const fillRef = useRef(null)
  const [reached, setReached] = useState(0)

  useScrollProgress(
    ref,
    (p) => {
      fillRef.current.style.transform = `scaleY(${p.toFixed(3)})`
      setReached(Math.min(items.length, Math.floor(p * items.length + 0.35)))
    },
    'view',
  )

  return (
    <div className="sv-journey" ref={ref}>
      <span className="sv-journey__line" aria-hidden="true">
        <i ref={fillRef} />
      </span>
      <ol className="sv-journey__list">
        {items.map((item, index) => (
          <li key={index} className={`sv-journey__item${index < reached ? ' is-on' : ''}`}>
            <span className="sv-journey__dot" aria-hidden="true" />
            <div className="sv-journey__card">
              <span className="sv-journey__icon">
                <Icon name={item.icon} />
              </span>
              <span className="sv-journey__num">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="sv-journey__title">{item.title}</h3>
              <p className="sv-journey__text">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

// Piezas de la presencia digital alineadas con la marca.
function Kit({ t }) {
  return (
    <ul className="sv-kit">
      <li className="sv-kit__item" data-reveal>
        <div className="sv-kit__visual">
          <span className="sv-kit__url">
            <i />
            {t.domain}
          </span>
        </div>
        <h3 className="sv-kit__title">{t.items[0].title}</h3>
        <p className="sv-kit__text">{t.items[0].text}</p>
      </li>
      <li className="sv-kit__item" data-reveal style={{ '--reveal-delay': '80ms' }}>
        <div className="sv-kit__visual">
          <span className="sv-kit__mail">
            <Icon name="mail" />
            {t.email}
          </span>
        </div>
        <h3 className="sv-kit__title">{t.items[1].title}</h3>
        <p className="sv-kit__text">{t.items[1].text}</p>
      </li>
      <li className="sv-kit__item" data-reveal style={{ '--reveal-delay': '160ms' }}>
        <div className="sv-kit__visual">
          <span className="sv-kit__profile">
            <span className="sv-kit__pin">
              <Icon name="pin" />
            </span>
            <span>
              <b>{t.business}</b>
              <small>{t.profileMeta}</small>
            </span>
          </span>
        </div>
        <h3 className="sv-kit__title">{t.items[2].title}</h3>
        <p className="sv-kit__text">{t.items[2].text}</p>
      </li>
      <li className="sv-kit__item" data-reveal style={{ '--reveal-delay': '240ms' }}>
        <div className="sv-kit__visual">
          <span className="sv-kit__links">
            <i />
            <i />
            <i />
            <span className="sv-kit__links-line" />
          </span>
        </div>
        <h3 className="sv-kit__title">{t.items[3].title}</h3>
        <p className="sv-kit__text">{t.items[3].text}</p>
      </li>
    </ul>
  )
}

export default function PresenciaDigital() {
  const t = useCopy(COPY)
  const { sections } = t
  return (
    <ServiceLayout slug="presencia-digital" description={t.description}>
      <ServiceHero index="05" title={t.hero.title} lead={t.hero.lead} visual={<HeroVisual t={t.search} />} />

      <SvSection id="detalle" title={sections.what.title} intro={sections.what.intro}>
        <SvPoints items={t.points} />
      </SvSection>

      <SvSection className="sv-section--alt" title={sections.journey.title} intro={sections.journey.intro}>
        <Journey items={t.journey} />
      </SvSection>

      <SvSection title={sections.kit.title} intro={sections.kit.intro}>
        <Kit t={t.kit} />
      </SvSection>

      <SvSection title={sections.steps.title} intro={sections.steps.intro}>
        <SvSteps steps={t.steps} />
      </SvSection>
    </ServiceLayout>
  )
}
