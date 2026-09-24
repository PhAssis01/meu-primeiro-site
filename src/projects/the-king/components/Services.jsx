import { SERVICES } from '../data'

export default function Services() {
  return (
    <section id="servicios" className="k-section k-services">
      <div className="k-wrap">
        <header className="k-head" data-reveal>
          <div>
            <h2 className="k-h2">Nuestros servicios</h2>
          </div>
          <p className="k-head__note">Precios por definir con el negocio.</p>
        </header>

        <ul className="k-services__grid">
          {SERVICES.map((service, index) => (
            <li
              key={service.name}
              className="k-service"
              data-reveal
              style={{ '--reveal-delay': `${index * 70}ms` }}
            >
              <h3 className="k-service__name">{service.name}</h3>
              <p className="k-service__text">{service.text}</p>
              <div className="k-service__foot">
                <span className="k-service__price">Precio: por definir</span>
                <a href="#reservas" className="k-service__link">
                  Reservar <span aria-hidden="true">→</span>
                  <span className="visually-hidden"> {service.name}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
