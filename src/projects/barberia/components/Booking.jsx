import { useState } from 'react'
import { useBarberCopy } from '../copy'

function today() {
  const now = new Date()
  const offset = now.getTimezoneOffset() * 60000
  return new Date(now.getTime() - offset).toISOString().slice(0, 10)
}

// Formulario de demostración: no envía datos a ningún sitio.
export default function Booking() {
  const t = useBarberCopy()
  const b = t.booking
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="reservas" className="bb-section bb-booking">
      <div className="bb-wrap bb-booking__grid">
        <div className="bb-booking__intro" data-reveal>
          <h2 className="bb-h2">{b.title}</h2>
          <p className="bb-booking__lead">{b.lead}</p>
          <p className="bb-booking__small">{b.small}</p>
        </div>

        <form
          className="bb-form"
          onSubmit={handleSubmit}
          onChange={() => setSent(false)}
          data-reveal
        >
          <div className="bb-field">
            <label htmlFor="b-name">{b.name}</label>
            <input id="b-name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="bb-field">
            <label htmlFor="b-phone">{b.phone}</label>
            <input id="b-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
          </div>
          <div className="bb-field bb-field--full">
            <label htmlFor="b-service">{b.service}</label>
            <select id="b-service" name="service" required defaultValue="">
              <option value="" disabled>
                {b.choose}
              </option>
              {t.services.items.map((service, index) => (
                <option key={index}>{service.name}</option>
              ))}
            </select>
          </div>
          <div className="bb-field">
            <label htmlFor="b-date">{b.date}</label>
            <input id="b-date" name="date" type="date" min={today()} required />
          </div>
          <div className="bb-field">
            <label htmlFor="b-time">{b.time}</label>
            <input id="b-time" name="time" type="time" step="900" required />
          </div>

          <div className="bb-form__foot">
            <button type="submit" className="bb-btn bb-btn--gold">
              {t.book}
            </button>
            <p className="bb-form__note" role="status">
              {sent ? b.sent : b.idle}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
