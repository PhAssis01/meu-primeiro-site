import { useBarberCopy } from '../copy'

export default function Services() {
  const t = useBarberCopy().services

  return (
    <section id="servicios" className="bb-section bb-services">
      <div className="bb-wrap">
        <header className="bb-head" data-reveal>
          <div>
            <h2 className="bb-h2">{t.title}</h2>
          </div>
          <p className="bb-head__note">{t.note}</p>
        </header>

        <ul className="bb-services__grid">
          {t.items.map((service, index) => (
            <li
              key={index}
              className="bb-service"
              data-reveal
              style={{ '--reveal-delay': `${index * 70}ms` }}
            >
              <h3 className="bb-service__name">{service.name}</h3>
              <p className="bb-service__text">{service.text}</p>
              <div className="bb-service__foot">
                <span className="bb-service__price">{t.price}</span>
                <a href="#reservas" className="bb-service__link">
                  {t.book} <span aria-hidden="true">→</span>
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
