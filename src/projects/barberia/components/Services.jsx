import { SERVICES } from '../data'

export default function Services() {
  return (
    <section id="servicios" className="bb-section bb-services">
      <div className="bb-wrap">
        <header className="bb-head" data-reveal>
          <div>
            <h2 className="bb-h2">Nuestros servicios</h2>
          </div>
          <p className="bb-head__note">Precios por definir con el negocio.</p>
        </header>

        <ul className="bb-services__grid">
          {SERVICES.map((service, index) => (
            <li
              key={service.name}
              className="bb-service"
              data-reveal
              style={{ '--reveal-delay': `${index * 70}ms` }}
            >
              <h3 className="bb-service__name">{service.name}</h3>
              <p className="bb-service__text">{service.text}</p>
              <div className="bb-service__foot">
                <span className="bb-service__price">Precio: por definir</span>
                <a href="#reservas" className="bb-service__link">
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
