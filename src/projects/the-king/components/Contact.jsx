import { CONTACT } from '../data'

export default function Contact() {
  return (
    <section id="contacto" className="k-section k-contact">
      <div className="k-wrap">
        <header className="k-head" data-reveal>
          <div>
            <h2 className="k-h2">Visítanos</h2>
          </div>
          <p className="k-head__note">Datos pendientes de confirmar con el negocio.</p>
        </header>

        <dl className="k-contact__grid">
          {CONTACT.map((item, index) => (
            <div
              key={item.title}
              className="k-contact__item"
              data-reveal
              style={{ '--reveal-delay': `${index * 70}ms` }}
            >
              <dt>{item.title}</dt>
              <dd className="k-placeholder">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
