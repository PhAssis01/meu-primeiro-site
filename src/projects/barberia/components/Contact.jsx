import { CONTACT } from '../data'

export default function Contact() {
  return (
    <section id="contacto" className="bb-section bb-contact">
      <div className="bb-wrap">
        <header className="bb-head" data-reveal>
          <div>
            <h2 className="bb-h2">Visítanos</h2>
          </div>
          <p className="bb-head__note">Datos de ejemplo: se completan con los de cada negocio.</p>
        </header>

        <dl className="bb-contact__grid">
          {CONTACT.map((item, index) => (
            <div
              key={item.title}
              className="bb-contact__item"
              data-reveal
              style={{ '--reveal-delay': `${index * 70}ms` }}
            >
              <dt>{item.title}</dt>
              <dd className="bb-placeholder">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
