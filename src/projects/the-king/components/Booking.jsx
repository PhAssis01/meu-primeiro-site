import { useState } from 'react'
import { SERVICES } from '../data'

function today() {
  const now = new Date()
  const offset = now.getTimezoneOffset() * 60000
  return new Date(now.getTime() - offset).toISOString().slice(0, 10)
}

// Formulario de demostración: no envía datos a ningún sitio.
export default function Booking() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="reservas" className="k-section k-booking">
      <div className="k-wrap k-booking__grid">
        <div className="k-booking__intro" data-reveal>
          <h2 className="k-h2">Reserva tu cita</h2>
          <p className="k-booking__lead">
            Elige tu momento y déjanos cuidar de tu estilo.
          </p>
          <p className="k-booking__small">
            En la web final, este formulario puede conectarse con el sistema de
            reservas que utilice la barbería.
          </p>
        </div>

        <form
          className="k-form"
          onSubmit={handleSubmit}
          onChange={() => setSent(false)}
          data-reveal
        >
          <div className="k-field">
            <label htmlFor="b-name">Nombre</label>
            <input id="b-name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="k-field">
            <label htmlFor="b-phone">Teléfono</label>
            <input id="b-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
          </div>
          <div className="k-field k-field--full">
            <label htmlFor="b-service">Servicio</label>
            <select id="b-service" name="service" required defaultValue="">
              <option value="" disabled>
                Elige un servicio
              </option>
              {SERVICES.map((service) => (
                <option key={service.name}>{service.name}</option>
              ))}
            </select>
          </div>
          <div className="k-field">
            <label htmlFor="b-date">Fecha</label>
            <input id="b-date" name="date" type="date" min={today()} required />
          </div>
          <div className="k-field">
            <label htmlFor="b-time">Hora</label>
            <input id="b-time" name="time" type="time" step="900" required />
          </div>

          <div className="k-form__foot">
            <button type="submit" className="k-btn k-btn--gold">
              Reservar cita
            </button>
            <p className="k-form__note" role="status">
              {sent
                ? 'Demostración: la solicitud no se ha enviado.'
                : 'Formulario de demostración: no envía datos.'}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
