import { useState } from 'react'
import { CONTACT_EMAIL } from '../data'

// Sin backend: al enviar, se abre la aplicación de correo del visitante
// con el mensaje ya preparado. No se envía nada automáticamente.
export default function Contact() {
  const [prepared, setPrepared] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = data.get('name')
    const subject = `Proyecto web — ${name}`
    const body = `${data.get('message')}\n\n${name}\n${data.get('email')}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setPrepared(true)
  }

  return (
    <section id="contacto" className="s-section s-contact">
      <div className="s-container s-contact__grid">
        <div className="s-contact__intro" data-reveal>
          <h2 className="s-h2 s-h2--xl">Hablemos</h2>
          <p className="s-body">
            Cuéntanos qué necesitas y te mostraremos cómo podemos ayudarte.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="s-contact__mail">
            {CONTACT_EMAIL}
          </a>
        </div>

        <form className="s-form" onSubmit={handleSubmit} data-reveal>
          <div className="s-field">
            <label htmlFor="c-name">Nombre</label>
            <input id="c-name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="s-field">
            <label htmlFor="c-email">Email</label>
            <input id="c-email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="s-field">
            <label htmlFor="c-message">Mensaje</label>
            <textarea id="c-message" name="message" rows="5" required />
          </div>
          <div className="s-form__foot">
            <button type="submit" className="s-btn s-btn--primary">
              Enviar mensaje
            </button>
            <p className="s-form__note" role="status">
              {prepared
                ? 'Hemos abierto tu aplicación de correo con el mensaje preparado. Revísalo y envíalo desde allí.'
                : 'Al enviar se abrirá tu aplicación de correo con el mensaje listo.'}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
