import { useRef, useState } from 'react'
import ServiceLayout, { ServiceHero } from './ServiceLayout'
import { SvPoints, SvSection, SvSteps } from './parts'
import { prefersReducedMotion, useScrollProgress } from '../motion'
import { PhoneFrame } from '../components/BrowserFrame'
import Icon from './icons'
import { useCopy } from '../../i18n/context'
import COPY from './copy/optimizacion-movil'

// Progreso (0–1) en el que se activa cada nota de la demo (textos en copy/optimizacion-movil.js).
const NOTE_AT = [0, 0.18, 0.38, 0.58, 0.8]

const clamp = (value) => Math.min(1, Math.max(0, value))

// Web de demostración (negocio ficticio) que se "usa" dentro del teléfono.
function DemoApp({ a, phase, viewRef, scrollRef, touchRef }) {
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
          <p className="sv-app__eyebrow">{a.eyebrow}</p>
          <h3 className="sv-app__h">{a.title}</h3>
          <p className="sv-app__p">{a.text}</p>
          <div className="sv-app__btns">
            <span className="sv-app__btn">{a.book}</span>
            <span className="sv-app__btn sv-app__btn--ghost">{a.menuLink}</span>
          </div>
        </section>

        <section className="sv-app__actions">
          {['call', 'pin', 'clock'].map((icon, index) => (
            <span key={icon} className="sv-app__action">
              <Icon name={icon} />
              {a.actions[index]}
            </span>
          ))}
        </section>

        <section className="sv-app__block">
          <h4 className="sv-app__title">{a.menuTitle}</h4>
          <ul className="sv-app__menu">
            {a.menu.map((dish, index) => (
              <li key={index}>
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
          <h4 className="sv-app__title">{a.hoursTitle}</h4>
          <dl className="sv-app__hours">
            {a.hours.map((row, index) => (
              <div key={index}>
                <dt>{row.days}</dt>
                <dd>{row.time}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="sv-app__block">
          <h4 className="sv-app__title">{a.whereTitle}</h4>
          <div className="sv-app__map">
            <i className="sv-app__road sv-app__road--h" />
            <i className="sv-app__road sv-app__road--v" />
            <span className="sv-app__pin">
              <Icon name="pin" />
            </span>
          </div>
          <p className="sv-app__p">{a.address}</p>
        </section>

        <section className="sv-app__block">
          <h4 className="sv-app__title">{a.bookingTitle}</h4>
          <div className="sv-app__form">
            {a.fields.map((field, index) => (
              <span key={index} className="sv-app__field">
                <small>{field.label}</small>
                {field.value}
              </span>
            ))}
          </div>
        </section>

        <footer className="sv-app__footer">{a.footer}</footer>
      </div>

      <div className="sv-app__bar">
        <span className="sv-app__btn">{a.book}</span>
      </div>

      <div className="sv-app__sheet">
        <span className="sv-app__grip" />
        <div className="sv-app__sheet-form">
          <p className="sv-app__title">{a.sheetTitle}</p>
          <p className="sv-app__summary">{a.summary}</p>
          <span className="sv-app__btn">{a.confirm}</span>
        </div>
        <div className="sv-app__done">
          <span className="sv-app__check">
            <Icon name="check" />
          </span>
          <p className="sv-app__title">{a.doneTitle}</p>
          <p className="sv-app__summary">{a.doneText}</p>
        </div>
      </div>

      <span className="sv-app__touch" ref={touchRef} />
      <span className="sv-app__tap" />
    </div>
  )
}

// Demo: el scroll de la página mueve el contenido dentro del teléfono.
function PhoneDemo({ t }) {
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
    NOTE_AT.forEach((at, i) => {
      if (p >= at) index = i
    })
    setNote(index)
    setPhase(p >= 0.92 ? 3 : p >= 0.83 ? 2 : travel > 0.1 ? 1 : 0)
  })

  return (
    <section id="detalle" className="sv-phone-demo" ref={sectionRef} aria-label={t.demo.aria}>
      <div className="sv-phone-demo__stage">
        <div className="s-container sv-phone-demo__grid">
          <div className="sv-phone-demo__notes">
            <p className="sv-phone-demo__eyebrow">{t.demo.eyebrow}</p>
            <ol>
              {t.notes.map((item, index) => (
                <li key={index} className={index === note ? 'is-active' : undefined}>
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
                <DemoApp a={t.app} phase={phase} viewRef={viewRef} scrollRef={scrollRef} touchRef={touchRef} />
              </PhoneFrame>
            </div>
          </div>

          <div className="sv-phone-demo__map" aria-hidden="true">
            <span className="sv-phone-demo__track">
              <i ref={fillRef} />
            </span>
            <ol>
              {t.notes.map((item, index) => (
                <li key={index} className={index <= note ? 'is-on' : undefined}>
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
  const t = useCopy(COPY)
  return (
    <ServiceLayout slug="optimizacion-movil" description={t.description}>
      <ServiceHero centered index="04" title={t.hero.title} lead={t.hero.lead} />

      <PhoneDemo t={t} />

      <SvSection className="sv-section--alt" title={t.sections.why.title} intro={t.sections.why.intro}>
        <SvPoints items={t.why} />
      </SvSection>

      <SvSection title={t.sections.steps.title} intro={t.sections.steps.intro}>
        <SvSteps steps={t.steps} />
      </SvSection>
    </ServiceLayout>
  )
}
