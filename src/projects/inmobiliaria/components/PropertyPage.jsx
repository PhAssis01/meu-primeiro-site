import { useState } from 'react'
import Link from '../../../router/Link'
import { BASE, PROPERTIES, propertyHref } from '../data'
import { formatPrice, useEstateCopy } from '../copy'
import Gallery from './Gallery'
import PropertyCard, { Facts } from './PropertyCard'
import { CheckIcon, ChevronIcon, PinIcon } from './Icons'

const today = () => {
  const now = new Date()
  return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10)
}

// Mapa ilustrativo dibujado a mano (sin servicios de mapas de terceros).
// No representa ninguna ubicación real: solo muestra cómo se vería la sección.
function IllustrativeMap({ position, city }) {
  const [x, y] = position
  return (
    <div className="re-map">
      <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="400" height="260" className="re-map__land" />
        <path d="M0 205 C 80 190, 150 228, 230 212 S 360 196, 400 214 V260 H0Z" className="re-map__sea" />
        <path d="M268 40 h70 v52 h-70z" className="re-map__park" />
        <path d="M30 70 h60 v40 h-60z M110 120 h70 v34 h-70z" className="re-map__park" />
        <path d="M0 60 L400 92 M0 150 L400 130 M120 0 L150 260 M250 0 L232 260 M330 0 L355 260" className="re-map__road" />
        <path d="M0 108 L400 104 M60 0 L70 260 M190 0 L196 260" className="re-map__street" />
      </svg>
      <span className="re-map__pin" style={{ left: `${x}%`, top: `${y}%` }}>
        <PinIcon />
      </span>
      <span className="re-map__label">{city}</span>
    </div>
  )
}

function VisitForm({ slug }) {
  const t = useEstateCopy()
  const v = t.detail.visit
  const [sent, setSent] = useState(false)

  // Demo: no se envía ni se guarda nada.
  const handleSubmit = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    setSent(true)
  }

  return (
    <form className="re-visit" onSubmit={handleSubmit} onChange={() => setSent(false)}>
      <h2 className="re-visit__title">{v.title}</h2>
      <p className="re-visit__text">{v.text}</p>
      <div className="re-field">
        <label htmlFor={`re-v-name-${slug}`}>{v.name}</label>
        <input id={`re-v-name-${slug}`} name="name" type="text" autoComplete="off" maxLength={100} required />
      </div>
      <div className="re-field">
        <label htmlFor={`re-v-phone-${slug}`}>{v.phone}</label>
        <input id={`re-v-phone-${slug}`} name="phone" type="tel" inputMode="tel" autoComplete="off" maxLength={30} required />
      </div>
      <div className="re-field">
        <label htmlFor={`re-v-date-${slug}`}>{v.date}</label>
        <input id={`re-v-date-${slug}`} name="date" type="date" min={today()} required />
      </div>
      <div className="re-field">
        <label htmlFor={`re-v-msg-${slug}`}>{v.message}</label>
        <textarea id={`re-v-msg-${slug}`} name="message" rows="3" maxLength={1000} />
      </div>
      <button type="submit" className="re-btn re-btn--dark re-btn--block">
        {v.submit}
      </button>
      <p className="re-form__note" role="status" aria-live="polite">
        {sent ? v.sent : v.idle}
      </p>
    </form>
  )
}

export default function PropertyPage({ property }) {
  const t = useEstateCopy()
  const d = t.detail
  const text = t.properties[property.slug]
  const position = PROPERTIES.indexOf(property)
  const prev = PROPERTIES[(position - 1 + PROPERTIES.length) % PROPERTIES.length]
  const next = PROPERTIES[(position + 1) % PROPERTIES.length]
  const similar = PROPERTIES.filter(
    (item) => item.slug !== property.slug && item.operation === property.operation,
  ).slice(0, 3)

  return (
    <article className="re-detail">
      <div className="re-wrap">
        <nav className="re-crumbs" aria-label={d.breadcrumb}>
          <Link to={`${BASE}#buscar`} className="re-crumbs__back">
            <ChevronIcon direction="left" className="re-crumbs__icon" />
            {d.back}
          </Link>
          <span className="re-crumbs__ref">
            {d.ref}: {property.ref}
          </span>
        </nav>

        <div className="re-notice" role="note">
          <strong>{d.fictionalTitle}.</strong> {d.fictionalText}
        </div>

        <Gallery key={property.slug} images={property.images} title={text.title} />

        <div className="re-detail__grid">
          <div className="re-detail__main">
            <header className="re-detail__head">
              <p className="re-detail__meta">
                <span className="re-badge re-badge--solid">{t.badges[property.operation]}</span>
                <span>{t.types[property.type].one}</span>
              </p>
              <h1 className="re-detail__title">{text.title}</h1>
              <p className="re-card__place">
                <PinIcon className="re-card__pin" />
                {property.city}
              </p>
              <p className="re-detail__price">{formatPrice(property, t)}</p>
              <Facts property={property} className="re-facts--lg" />
            </header>

            <section className="re-detail__block">
              <h2 className="re-h3">{d.description}</h2>
              {text.description.map((paragraph) => (
                <p key={paragraph} className="re-detail__p">
                  {paragraph}
                </p>
              ))}
            </section>

            <section className="re-detail__block">
              <h2 className="re-h3">{d.features}</h2>
              <ul className="re-features">
                {property.features.map((key) => (
                  <li key={key}>
                    <CheckIcon className="re-features__icon" />
                    {t.features[key]}
                  </li>
                ))}
              </ul>
            </section>

            <section className="re-detail__block">
              <h2 className="re-h3">{d.location}</h2>
              <IllustrativeMap position={property.map} city={property.city} />
              <p className="re-map__note">{d.mapNote}</p>
              <h3 className="re-detail__sub">{d.nearby}</h3>
              <ul className="re-nearby">
                {Object.entries(property.nearby).map(([key, minutes]) => (
                  <li key={key}>
                    <span>{t.nearby[key]}</span>
                    <span className="re-nearby__value">{d.minutes(minutes)}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="re-detail__side">
            <VisitForm key={property.slug} slug={property.slug} />
          </aside>
        </div>

        <nav className="re-pager" aria-label={d.similar}>
          <Link to={propertyHref(prev.slug)} className="re-pager__link">
            <ChevronIcon direction="left" className="re-pager__icon" />
            <span>
              <small>{d.prev}</small>
              {t.properties[prev.slug].title}
            </span>
          </Link>
          <Link to={propertyHref(next.slug)} className="re-pager__link re-pager__link--next">
            <span>
              <small>{d.next}</small>
              {t.properties[next.slug].title}
            </span>
            <ChevronIcon className="re-pager__icon" />
          </Link>
        </nav>

        {similar.length ? (
          <section className="re-detail__similar">
            <h2 className="re-h2 re-h2--sm">{d.similar}</h2>
            <div className="re-grid">
              {similar.map((item) => (
                <PropertyCard key={item.slug} property={item} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  )
}
