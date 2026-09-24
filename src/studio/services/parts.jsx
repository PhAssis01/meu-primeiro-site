// Bloques reutilizables de las páginas de servicio.
import { useEffect, useRef, useState } from 'react'
import Icon from './icons'

const pad = (n) => String(n).padStart(2, '0')

// Clases de estado para ilustraciones por fases:
// "is-stage-2 from-1 from-2" → el CSS puede usar .from-N ("fase N alcanzada").
export function stageClass(stage) {
  let classes = `is-stage-${stage}`
  for (let n = 1; n <= stage; n += 1) classes += ` from-${n}`
  return classes
}

// Sección con la cabecera estándar del estudio (.s-head).
export function SvSection({ id, title, intro, className = '', children }) {
  return (
    <section id={id} className={`s-section sv-section ${className}`}>
      <div className="s-container">
        {title ? (
          <header className="s-head" data-reveal>
            <h2 className="s-h2">{title}</h2>
            {intro ? <p className="s-body">{intro}</p> : null}
          </header>
        ) : null}
        {children}
      </div>
    </section>
  )
}

// Tarjetas con icono (reutilizan el estilo .s-card de la Home).
export function SvPoints({ items, columns = 4 }) {
  return (
    <ul className={`sv-points sv-points--${columns}`}>
      {items.map((item, index) => (
        <li
          key={item.title}
          className="s-card sv-point"
          data-reveal
          style={{ '--reveal-delay': `${index * 70}ms` }}
        >
          <span className="sv-point__icon">
            <Icon name={item.icon} />
          </span>
          <h3 className="s-card__title">{item.title}</h3>
          <p className="s-card__text">{item.text}</p>
        </li>
      ))}
    </ul>
  )
}

// Pasos numerados (mismo marcado y estilo que "Cómo trabajamos").
export function SvSteps({ steps }) {
  return (
    <ol className="s-process__list">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="s-step"
          data-reveal
          style={{ '--reveal-delay': `${index * 80}ms` }}
        >
          <span className="s-step__number">{pad(index + 1)}</span>
          <h3 className="s-step__title">{step.title}</h3>
          <p className="s-step__text">{step.text}</p>
        </li>
      ))}
    </ol>
  )
}

// Relato con escenario fijo: los textos avanzan con el scroll y la
// ilustración (render prop) recibe el paso activo.
export function ScrollStory({ steps, children }) {
  const [active, setActive] = useState(0)
  const listRef = useRef(null)

  useEffect(() => {
    const items = Array.from(listRef.current.querySelectorAll('[data-step]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.step))
        })
      },
      { rootMargin: '-48% 0px -48% 0px' },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="sv-story">
      <div className="sv-story__visual">
        <div className="sv-story__sticky" aria-hidden="true">
          {children(active)}
          <ol className="sv-story__dots">
            {steps.map((step, index) => (
              <li key={step.title} className={index <= active ? 'is-on' : undefined} />
            ))}
          </ol>
        </div>
      </div>
      <ol className="sv-story__steps" ref={listRef}>
        {steps.map((step, index) => (
          <li
            key={step.title}
            data-step={index}
            className={`sv-story__step${index === active ? ' is-active' : ''}`}
          >
            <span className="sv-story__num">{pad(index + 1)}</span>
            <h3 className="sv-story__title">{step.title}</h3>
            <p className="sv-story__text">{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
