import { useBarberCopy } from '../copy'

export default function Contact() {
  const t = useBarberCopy().contact

  return (
    <section id="contacto" className="bb-section bb-contact">
      <div className="bb-wrap">
        <header className="bb-head" data-reveal>
          <div>
            <h2 className="bb-h2">{t.title}</h2>
          </div>
          <p className="bb-head__note">{t.note}</p>
        </header>

        <dl className="bb-contact__grid">
          {t.items.map((item, index) => (
            <div
              key={index}
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
