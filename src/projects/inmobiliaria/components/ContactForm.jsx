import { useState } from 'react'
import { useEstateCopy } from '../copy'

// Formulario de demostración: no envía ni guarda datos (no hay servidor ni almacenamiento).
// Al pulsar «Enviar» solo se muestra el aviso de demostración y se vacía el formulario.
export default function ContactForm() {
  const t = useEstateCopy()
  const c = t.contact
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    setSent(true)
  }

  return (
    <form className="re-form" onSubmit={handleSubmit} onChange={() => setSent(false)} data-reveal>
      <div className="re-field">
        <label htmlFor="re-c-name">{c.name}</label>
        <input id="re-c-name" name="name" type="text" autoComplete="off" maxLength={100} required />
      </div>
      <div className="re-field">
        <label htmlFor="re-c-email">{c.email}</label>
        <input id="re-c-email" name="email" type="email" autoComplete="off" maxLength={254} required />
      </div>
      <div className="re-field">
        <label htmlFor="re-c-phone">{c.phone}</label>
        <input id="re-c-phone" name="phone" type="tel" inputMode="tel" autoComplete="off" maxLength={30} />
      </div>
      <div className="re-field">
        <label htmlFor="re-c-interest">{c.interest}</label>
        <select id="re-c-interest" name="interest" defaultValue={c.interestOptions[0]}>
          {c.interestOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="re-field re-field--full">
        <label htmlFor="re-c-message">{c.message}</label>
        <textarea id="re-c-message" name="message" rows="4" maxLength={2000} required />
      </div>
      <div className="re-form__foot">
        <button type="submit" className="re-btn re-btn--dark">
          {c.submit}
        </button>
        <p className="re-form__note" role="status" aria-live="polite">
          {sent ? c.sent : c.idle}
        </p>
      </div>
    </form>
  )
}
