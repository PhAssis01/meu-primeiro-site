import { SERVICES, serviceHref } from '../data'
import { useStudioCopy } from '../copy'
import Link from '../../router/Link'
import ServiceArt from './ServiceArt'

export default function Services() {
  const t = useStudioCopy().services

  return (
    <section id="servicios" className="s-section s-services">
      <div className="s-container">
        <header className="s-head" data-reveal>
          <h2 className="s-h2">{t.title}</h2>
          <p className="s-body">{t.intro}</p>
        </header>

        <ul className="s-services__grid">
          {SERVICES.map((service, index) => (
            <li
              key={service.slug}
              className={`s-card${service.featured ? ' s-card--featured' : ''}`}
              data-reveal
              style={{ '--reveal-delay': `${index * 60}ms` }}
            >
              <div className="s-card__art">
                <ServiceArt name={service.art} />
              </div>
              <h3 className="s-card__title">
                {/* El enlace cubre toda la tarjeta (ver .s-card__link::after) */}
                <Link to={serviceHref(service.slug)} className="s-card__link">
                  {t.items[service.slug].title}
                </Link>
              </h3>
              <p className="s-card__text">{t.items[service.slug].text}</p>
              <span className="s-card__go" aria-hidden="true">
                →
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
