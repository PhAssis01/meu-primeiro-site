import { useRef, useState } from 'react'
import ServiceLayout, { ServiceHero } from './ServiceLayout'
import { SvPoints, SvSection, SvSteps } from './parts'
import { useScrollProgress } from '../motion'
import Icon from './icons'

const POINTS = [
  { icon: 'globe', title: 'Un lugar propio', text: 'Tu web es la única parte de internet que controlas por completo.' },
  { icon: 'search', title: 'Fácil de encontrar', text: 'Web y perfiles bien enlazados facilitan que quien te busca llegue a ti.' },
  { icon: 'shield', title: 'Imagen coherente', text: 'El mismo nombre, estilo y datos en todas partes transmiten seriedad.' },
  { icon: 'chat', title: 'Siempre disponible', text: 'Tus clientes pueden informarse y contactarte a cualquier hora.' },
]

const JOURNEY = [
  { icon: 'store', title: 'Tu empresa', text: 'Tu negocio, con su nombre, su forma de trabajar y lo que ofrece.' },
  { icon: 'layout', title: 'Tu web', text: 'Un espacio propio donde contarlo todo con tu imagen, disponible a cualquier hora.' },
  { icon: 'search', title: 'Te encuentran', text: 'Cuando alguien busca lo que ofreces, tu web y tu perfil le llevan hasta ti.' },
  { icon: 'phone', title: 'Desde el móvil', text: 'Buena parte de tus clientes te descubrirá desde el teléfono, en cualquier momento.' },
  { icon: 'call', title: 'Te contactan', text: 'Llamar, escribir o reservar a un toque, sin pasos innecesarios.' },
  { icon: 'check', title: 'Confianza', text: 'Una imagen profesional y coherente hace que te elijan con tranquilidad.' },
]

const STEPS = [
  { title: 'Revisión', text: 'Vemos cómo aparece hoy tu negocio en internet.' },
  { title: 'Dominio y correo', text: 'Registramos tu dominio y configuramos tu correo profesional.' },
  { title: 'Web', text: 'Diseñamos y publicamos tu web con tu identidad.' },
  { title: 'Perfiles', text: 'Alineamos tu perfil de Google y tus redes con la web.' },
]

// Hero: una búsqueda y el resultado de un negocio (ficticio) bien presentado.
function HeroVisual() {
  return (
    <div className="sv-find" data-parallax="0.04">
      <div className="sv-find__search">
        <Icon name="search" />
        <span className="sv-find__query">restaurante cerca de mí</span>
        <i className="sv-find__caret" />
      </div>
      <div className="sv-find__result">
        <div className="sv-find__map">
          <i className="sv-find__road sv-find__road--h" />
          <i className="sv-find__road sv-find__road--v" />
          <span className="sv-find__pin">
            <Icon name="pin" />
          </span>
        </div>
        <div className="sv-find__info">
          <strong>Olivo · Restaurante</strong>
          <span>Cocina mediterránea · Abierto ahora</span>
          <span className="sv-find__url">olivorestaurante.es</span>
          <span className="sv-find__actions">
            <span className="is-main">Sitio web</span>
            <span>Llamar</span>
            <span>Cómo llegar</span>
          </span>
        </div>
      </div>
      <div className="sv-find__phone" data-parallax="0.1">
        <span className="sv-find__phone-bar" />
        <b />
        <b />
        <span className="sv-find__phone-btn" />
      </div>
    </div>
  )
}

// Recorrido: una línea se dibuja con el scroll y enciende cada etapa.
function Journey() {
  const ref = useRef(null)
  const fillRef = useRef(null)
  const [reached, setReached] = useState(0)

  useScrollProgress(
    ref,
    (p) => {
      fillRef.current.style.transform = `scaleY(${p.toFixed(3)})`
      setReached(Math.min(JOURNEY.length, Math.floor(p * JOURNEY.length + 0.35)))
    },
    'view',
  )

  return (
    <div className="sv-journey" ref={ref}>
      <span className="sv-journey__line" aria-hidden="true">
        <i ref={fillRef} />
      </span>
      <ol className="sv-journey__list">
        {JOURNEY.map((item, index) => (
          <li key={item.title} className={`sv-journey__item${index < reached ? ' is-on' : ''}`}>
            <span className="sv-journey__dot" aria-hidden="true" />
            <div className="sv-journey__card">
              <span className="sv-journey__icon">
                <Icon name={item.icon} />
              </span>
              <span className="sv-journey__num">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="sv-journey__title">{item.title}</h3>
              <p className="sv-journey__text">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

// Piezas de la presencia digital alineadas con la marca.
function Kit() {
  return (
    <ul className="sv-kit">
      <li className="sv-kit__item" data-reveal>
        <div className="sv-kit__visual">
          <span className="sv-kit__url">
            <i />
            tunegocio.es
          </span>
        </div>
        <h3 className="sv-kit__title">Dominio propio</h3>
        <p className="sv-kit__text">Una dirección fácil de recordar, con el nombre de tu negocio.</p>
      </li>
      <li className="sv-kit__item" data-reveal style={{ '--reveal-delay': '80ms' }}>
        <div className="sv-kit__visual">
          <span className="sv-kit__mail">
            <Icon name="mail" />
            hola@tunegocio.es
          </span>
        </div>
        <h3 className="sv-kit__title">Correo profesional</h3>
        <p className="sv-kit__text">Escribe a tus clientes desde una dirección con tu dominio.</p>
      </li>
      <li className="sv-kit__item" data-reveal style={{ '--reveal-delay': '160ms' }}>
        <div className="sv-kit__visual">
          <span className="sv-kit__profile">
            <span className="sv-kit__pin">
              <Icon name="pin" />
            </span>
            <span>
              <b>Tu negocio</b>
              <small>Horario · Teléfono · Web</small>
            </span>
          </span>
        </div>
        <h3 className="sv-kit__title">Perfil de Google</h3>
        <p className="sv-kit__text">Datos correctos y enlazados con tu web, para que te encuentren en el mapa.</p>
      </li>
      <li className="sv-kit__item" data-reveal style={{ '--reveal-delay': '240ms' }}>
        <div className="sv-kit__visual">
          <span className="sv-kit__links">
            <i />
            <i />
            <i />
            <span className="sv-kit__links-line" />
          </span>
        </div>
        <h3 className="sv-kit__title">Todo conectado</h3>
        <p className="sv-kit__text">Web, redes y perfiles con la misma imagen y enlaces entre sí.</p>
      </li>
    </ul>
  )
}

export default function PresenciaDigital() {
  return (
    <ServiceLayout
      slug="presencia-digital"
      description="Presencia digital para negocios: web, dominio, correo profesional y perfil de Google alineados con tu marca."
    >
      <ServiceHero
        index="05"
        title="Que te encuentren, y que les guste lo que ven."
        lead="Tu web, tu dominio, tu correo y tu perfil de Google, alineados con tu marca para que tu negocio tenga una presencia profesional en internet."
        visual={<HeroVisual />}
      />

      <SvSection
        id="detalle"
        title="Qué es la presencia digital"
        intro="Es todo lo que alguien encuentra de tu negocio en internet. Cuando está cuidado y conectado, trabaja por ti."
      >
        <SvPoints items={POINTS} />
      </SvSection>

      <SvSection
        className="sv-section--alt"
        title="De tu negocio a tu cliente"
        intro="Así ayuda una web a que alguien que no te conoce acabe contactándote."
      >
        <Journey />
      </SvSection>

      <SvSection
        title="Todo alineado con tu marca"
        intro="Las piezas básicas de una presencia profesional, configuradas y coherentes entre sí."
      >
        <Kit />
      </SvSection>

      <SvSection title="Cómo lo ponemos en marcha" intro="Nos encargamos de la parte técnica para que tú solo tengas que revisarla.">
        <SvSteps steps={STEPS} />
      </SvSection>
    </ServiceLayout>
  )
}
