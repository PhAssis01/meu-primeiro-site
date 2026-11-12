import Link from '../../../router/Link'
import { propertyHref } from '../data'
import { formatPrice, useEstateCopy } from '../copy'
import Photo from './Photo'
import { AreaIcon, ArrowIcon, BathIcon, BedIcon, PinIcon } from './Icons'

// Datos clave (habitaciones · baños · m²), compartidos por tarjeta y ficha.
export function Facts({ property, className = '' }) {
  const t = useEstateCopy()
  return (
    <ul className={`re-facts ${className}`.trim()}>
      <li>
        <BedIcon className="re-facts__icon" />
        <span>{t.units.beds(property.beds)}</span>
      </li>
      <li>
        <BathIcon className="re-facts__icon" />
        <span>{t.units.baths(property.baths)}</span>
      </li>
      <li>
        <AreaIcon className="re-facts__icon" />
        <span>{t.units.area(property.area)}</span>
      </li>
    </ul>
  )
}

export default function PropertyCard({ property, priority = false }) {
  const t = useEstateCopy()
  const text = t.properties[property.slug]
  const href = propertyHref(property.slug)

  return (
    <article className="re-card">
      <Link to={href} className="re-card__media" tabIndex={-1} aria-hidden="true">
        <Photo
          name={property.images[0]}
          alt=""
          sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 30vw"
          priority={priority}
        />
        <span className="re-card__badges">
          <span className="re-badge">{t.badges[property.operation]}</span>
          <span className="re-badge re-badge--demo">{t.card.fictional}</span>
        </span>
      </Link>
      <div className="re-card__body">
        <p className="re-card__type">{t.types[property.type].one}</p>
        <h3 className="re-card__title">
          <Link to={href}>{text.title}</Link>
        </h3>
        <p className="re-card__place">
          <PinIcon className="re-card__pin" />
          {property.city}
        </p>
        <Facts property={property} />
        <div className="re-card__foot">
          <p className="re-card__price">{formatPrice(property, t)}</p>
          <Link to={href} className="re-link" aria-label={`${t.card.view}: ${text.title}`}>
            {t.card.view} <ArrowIcon className="re-link__icon" />
          </Link>
        </div>
      </div>
    </article>
  )
}
