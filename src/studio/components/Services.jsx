import { SERVICES, serviceHref } from '../data'
import Link from '../../router/Link'
import ServiceArt from './ServiceArt'

export default function Services() {
  return (
    <section id="servicios" className="s-section s-services">
      <div className="s-container">
        <header className="s-head" data-reveal>
          <h2 className="s-h2">Lo que hacemos</h2>
          <p className="s-body">
            Todo lo que tu negocio necesita para tener una web propia, desde la
            primera idea hasta el día en que se publica.
          </p>
        </header>

        <ul className="s-services__grid">
          {SERVICES.map((service, index) => (
            <li
              key={service.title}
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
                  {service.title}
                </Link>
              </h3>
              <p className="s-card__text">{service.text}</p>
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
