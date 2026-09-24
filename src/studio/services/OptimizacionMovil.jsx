import { useRef, useState } from 'react'
import ServiceLayout, { ServiceHero } from './ServiceLayout'
import { SvPoints, SvSection, SvSteps } from './parts'
import { prefersReducedMotion, useScrollProgress } from '../motion'
import { PhoneFrame } from '../components/BrowserFrame'
import Icon from './icons'

// Notas que acompañan a la demo. `at`: progreso (0–1) en el que se activan.
const NOTES = [
  { at: 0, label: 'Inicio', title: 'Lo importante, arriba', text: 'Nombre, propuesta y botón de reserva visibles nada más abrir la web.' },
  { at: 0.18, label: 'Acciones', title: 'Acciones a un toque', text: 'Llamar, cómo llegar u horario: botones grandes, pensados para el pulgar.' },
  { at: 0.38, label: 'Carta', title: 'Textos legibles', text: 'Tamaños de letra y espacios cómodos, sin tener que hacer zoom.' },
  { at: 0.58, label: 'Ubicación', title: 'Siempre a mano', text: 'La acción principal se mantiene visible mientras el cliente navega.' },
  { at: 0.8, label: 'Reserva', title: 'Reserva en segundos', text: 'Formularios cortos y pasos claros, cómodos de completar con una mano.' },
]

const MENU = [
  { name: 'Arroz del día', note: 'Para dos personas', price: '16 €' },
  { name: 'Pulpo a la brasa', note: 'Patata y pimentón', price: '18 €' },
  { name: 'Ensalada de temporada', note: 'Verduras de mercado', price: '11 €' },
  { name: 'Tarta de queso', note: 'Receta de la casa', price: '6 €' },
]

const WHY = [
  { icon: 'touch', title: 'Pensada para el pulgar', text: 'Botones y enlaces con el tamaño y la separación justos para tocarlos sin fallar.' },
  { icon: 'type', title: 'Lectura cómoda', text: 'Textos que se leen sin hacer zoom y contenidos ordenados en una sola columna.' },
  { icon: 'bolt', title: 'Carga ligera', text: 'Imágenes y recursos adaptados para que la web responda bien también con datos móviles.' },
  { icon: 'call', title: 'Acciones directas', text: 'Llamar, escribir o llegar hasta ti con un solo toque.' },
]

const STEPS = [
  { title: 'Primero el móvil', text: 'Diseñamos cada página empezando por la pantalla pequeña.' },
  { title: 'Toques y tamaños', text: 'Ajustamos botones, textos y formularios al uso con una mano.' },
  { title: 'Pruebas reales', text: 'Revisamos la web en distintos teléfonos y navegadores.' },
  { title: 'Velocidad', text: 'Comprobamos que carga con fluidez antes de publicarla.' },
]

const clamp = (value) => Math.min(1, Math.max(0, value))

// Web de demostración (negocio ficticio) que se "usa" dentro del teléfono.
function DemoApp({ phase, viewRef, scrollRef, touchRef }) {
  return (
    <div className={`sv-app is-phase-${phase}`} ref={viewRef}>
      <div className="sv-app__status">
        <span>9:41</span>
        <span className="sv-app__island" />
        <span className="sv-app__icons">
          <i />
          <i />
          <i />
        </span>
      </div>
      <div className="sv-app__header">
        <span className="sv-app__brand">
          <i />
          Olivo
        </span>
        <span className="sv-app__burger">
          <i />
          <i />
        </span>
      </div>

      <div className="sv-app__scroll" ref={scrollRef}>
        <section className="sv-app__hero">
          <div className="sv-app__photo">
            <i />
          </div>
          <p className="sv-app__eyebrow">Cocina mediterránea</p>
          <h3 className="sv-app__h">Cocina de mercado en el centro.</h3>
          <p className="sv-app__p">Producto de temporada, en un espacio tranquilo y cercano.</p>
          <div className="sv-app__btns">
            <span className="sv-app__btn">Reservar mesa</span>
            <span className="sv-app__btn sv-app__btn--ghost">Ver carta</span>
          </div>
        </section>

        <section className="sv-app__actions">
          {[
            ['call', 'Llamar'],
            ['pin', 'Cómo llegar'],
            ['clock', 'Horario'],
          ].map(([icon, label]) => (
            <span key={label} className="sv-app__action">
              <Icon name={icon} />
              {label}
            </span>
          ))}
        </section>

        <section className="sv-app__block">
          <h4 className="sv-app__title">Carta</h4>
          <ul className="sv-app__menu">
            {MENU.map((dish) => (
              <li key={dish.name}>
                <i />
                <span>
                  <b>{dish.name}</b>
                  <small>{dish.note}</small>
                </span>
                <em>{dish.price}</em>
              </li>
            ))}
          </ul>
        </section>

        <section className="sv-app__block">
          <h4 className="sv-app__title">Horario</h4>
          <dl className="sv-app__hours">
            <div>
              <dt>Lunes a jueves</dt>
              <dd>13:00 – 16:00 · 20:00 – 23:00</dd>
            </div>
            <div>
              <dt>Viernes y sábado</dt>
              <dd>13:00 – 16:30 · 20:00 – 23:30</dd>
            </div>
            <div>
              <dt>Domingo</dt>
              <dd>13:00 – 16:30</dd>
            </div>
          </dl>
        </section>

        <section className="sv-app__block">
          <h4 className="sv-app__title">Dónde estamos</h4>
          <div className="sv-app__map">
            <i className="sv-app__road sv-app__road--h" />
            <i className="sv-app__road sv-app__road--v" />
            <span className="sv-app__pin">
              <Icon name="pin" />
            </span>
          </div>
          <p className="sv-app__p">Calle Mayor, 12 · Centro</p>
        </section>

        <section className="sv-app__block">
          <h4 className="sv-app__title">Reserva</h4>
          <div className="sv-app__form">
            <span className="sv-app__field">
              <small>Personas</small>2
            </span>
            <span className="sv-app__field">
              <small>Día</small>Hoy
            </span>
            <span className="sv-app__field">
              <small>Hora</small>21:00
            </span>
          </div>
        </section>

        <footer className="sv-app__footer">Olivo · Restaurante</footer>
      </div>

      <div className="sv-app__bar">
        <span className="sv-app__btn">Reservar mesa</span>
      </div>

      <div className="sv-app__sheet">
        <span className="sv-app__grip" />
        <div className="sv-app__sheet-form">
          <p className="sv-app__title">Tu reserva</p>
          <p className="sv-app__summary">2 personas · Hoy · 21:00</p>
          <span className="sv-app__btn">Confirmar reserva</span>
        </div>
        <div className="sv-app__done">
          <span className="sv-app__check">
            <Icon name="check" />
          </span>
          <p className="sv-app__title">Reserva enviada</p>
          <p className="sv-app__summary">Te enviaremos la confirmación.</p>
        </div>
      </div>

      <span className="sv-app__touch" ref={touchRef} />
      <span className="sv-app__tap" />
    </div>
  )
}

// Demo: el scroll de la página mueve el contenido dentro del teléfono.
function PhoneDemo() {
  const sectionRef = useRef(null)
  const tiltRef = useRef(null)
  const viewRef = useRef(null)
  const scrollRef = useRef(null)
  const touchRef = useRef(null)
  const fillRef = useRef(null)
  const last = useRef({ p: -1, timer: 0 })
  const [note, setNote] = useState(0)
  const [phase, setPhase] = useState(0)

  useScrollProgress(sectionRef, (p) => {
    const view = viewRef.current
    const content = scrollRef.current
    if (!view || !content) return

    // 0–4 %: pausa inicial · 4–80 %: recorrido del contenido · 80–100 %: reserva
    const travel = clamp((p - 0.04) / 0.76)
    const max = Math.max(0, content.offsetHeight - view.clientHeight)
    content.style.transform = `translate3d(0, ${(-travel * max).toFixed(1)}px, 0)`
    fillRef.current.style.transform = `scaleY(${p.toFixed(3)})`

    if (!prefersReducedMotion()) {
      tiltRef.current.style.transform = `translate3d(0, ${((0.5 - p) * 14).toFixed(1)}px, 0) rotate(${((p - 0.5) * 1.6).toFixed(2)}deg)`

      // Indicador de dedo mientras se desplaza el contenido
      if (last.current.p >= 0 && Math.abs(p - last.current.p) > 0.0005 && p > 0.04 && p < 0.8) {
        touchRef.current.classList.add('is-on')
        clearTimeout(last.current.timer)
        last.current.timer = setTimeout(() => touchRef.current?.classList.remove('is-on'), 220)
      }
    }
    last.current.p = p

    let index = 0
    NOTES.forEach((item, i) => {
      if (p >= item.at) index = i
    })
    setNote(index)
    setPhase(p >= 0.92 ? 3 : p >= 0.83 ? 2 : travel > 0.1 ? 1 : 0)
  })

  return (
    <section id="detalle" className="sv-phone-demo" ref={sectionRef} aria-label="Demostración en un teléfono">
      <div className="sv-phone-demo__stage">
        <div className="s-container sv-phone-demo__grid">
          <div className="sv-phone-demo__notes">
            <p className="sv-phone-demo__eyebrow">Desliza para usarla</p>
            <ol>
              {NOTES.map((item, index) => (
                <li key={item.title} className={index === note ? 'is-active' : undefined}>
                  <span className="sv-phone-demo__num">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="sv-phone-demo__device" aria-hidden="true">
            <div className="sv-phone-demo__tilt" ref={tiltRef}>
              <PhoneFrame className="sv-iphone">
                <DemoApp phase={phase} viewRef={viewRef} scrollRef={scrollRef} touchRef={touchRef} />
              </PhoneFrame>
            </div>
          </div>

          <div className="sv-phone-demo__map" aria-hidden="true">
            <span className="sv-phone-demo__track">
              <i ref={fillRef} />
            </span>
            <ol>
              {NOTES.map((item, index) => (
                <li key={item.label} className={index <= note ? 'is-on' : undefined}>
                  {item.label}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function OptimizacionMovil() {
  return (
    <ServiceLayout
      slug="optimizacion-movil"
      description="Webs optimizadas para el móvil: diseñadas primero para el teléfono, cómodas de usar con una mano y rápidas de cargar."
    >
      <ServiceHero
        centered
        index="04"
        title="Tu web, cómoda en la palma de la mano."
        lead="Buena parte de tus clientes te buscará desde el teléfono. Diseñamos cada web primero para el móvil: clara, rápida y fácil de usar con una mano."
      />

      <PhoneDemo />

      <SvSection
        className="sv-section--alt"
        title="Por qué primero el móvil"
        intro="Una web pensada para el teléfono se siente natural en la mano y funciona igual de bien en el ordenador."
      >
        <SvPoints items={WHY} />
      </SvSection>

      <SvSection title="Cómo la optimizamos" intro="Cada detalle se revisa en la pantalla donde más se usa.">
        <SvSteps steps={STEPS} />
      </SvSection>
    </ServiceLayout>
  )
}
