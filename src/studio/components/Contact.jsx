import { useState } from 'react'
import { CONTACT_EMAIL, CONTACT_ENDPOINT } from '../data'

// Formulario de contacto.
// · Con CONTACT_ENDPOINT (data.js): el mensaje se envía de verdad a ese servicio
//   y solo se muestra "enviado" si el servicio lo confirma.
// · Sin CONTACT_ENDPOINT: se prepara un email en la aplicación de correo del
//   visitante. El texto deja claro que el mensaje solo llega si lo envía desde
//   allí, y el formulario conserva lo escrito (con opción de copiarlo).
const buildMail = (data) => {
  const name = String(data.get('name') || '').trim()
  const subject = `Proyecto web — ${name}`
  const body = `${String(data.get('message') || '').trim()}\n\n${name}\n${String(data.get('email') || '').trim()}`
  return { subject, body }
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

export default function Contact() {
  // idle · sending · sent · error · mailto
  const [status, setStatus] = useState('idle')
  const [copied, setCopied] = useState('')
  const [draft, setDraft] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const { subject, body } = buildMail(data)
    setDraft(`Para: ${CONTACT_EMAIL}\nAsunto: ${subject}\n\n${body}`)
    setCopied('')

    // Campo trampa para bots: si viene relleno, no se envía nada.
    if (data.get('_gotcha')) return

    if (!CONTACT_ENDPOINT) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      form.reset()
      setStatus('sent')
    } catch {
      // No se borra nada: el visitante puede reintentar o copiar su mensaje.
      setStatus('error')
    }
  }

  const handleCopy = async (what) => {
    const ok = await copyText(what === 'email' ? CONTACT_EMAIL : draft)
    setCopied(ok ? what : 'fail')
  }

  const notes = {
    idle: CONTACT_ENDPOINT
      ? 'Te responderemos por email lo antes posible.'
      : 'Se abrirá tu aplicación de correo con el mensaje preparado. Solo nos llegará cuando lo envíes desde allí.',
    sending: 'Enviando…',
    sent: 'Mensaje enviado. Te responderemos por email lo antes posible.',
    error: `No se ha podido enviar el mensaje. Tu texto sigue en el formulario: inténtalo de nuevo o escríbenos a ${CONTACT_EMAIL}.`,
    mailto: `Hemos preparado el mensaje en tu aplicación de correo, pero aún no se ha enviado: revísalo y pulsa «Enviar» allí. Si no se ha abierto, copia el mensaje y escríbenos a ${CONTACT_EMAIL}.`,
  }

  const showAlt = status === 'mailto' || status === 'error'

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
            <div className="s-form__trap" aria-hidden="true">
              <label htmlFor="c-gotcha">No rellenar</label>
              <input id="c-gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <button type="submit" className="s-btn s-btn--primary" disabled={status === 'sending'}>
              {CONTACT_ENDPOINT ? 'Enviar mensaje' : 'Enviar por email'}
            </button>
            <p className={`s-form__note${status === 'error' ? ' is-error' : ''}`} role="status" aria-live="polite">
              {notes[status]}
            </p>
            {showAlt && (
              <div className="s-form__alt">
                <button type="button" className="s-form__copy" onClick={() => handleCopy('message')}>
                  {copied === 'message' ? 'Mensaje copiado' : 'Copiar mensaje'}
                </button>
                <button type="button" className="s-form__copy" onClick={() => handleCopy('email')}>
                  {copied === 'email' ? 'Email copiado' : 'Copiar email'}
                </button>
                <a className="s-form__copy" href={`mailto:${CONTACT_EMAIL}`}>
                  Abrir correo
                </a>
                {copied === 'fail' && (
                  <span className="s-form__hint">
                    No se ha podido copiar. Selecciona el texto del formulario y cópialo manualmente.
                  </span>
                )}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
