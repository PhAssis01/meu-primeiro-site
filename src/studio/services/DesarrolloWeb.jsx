import { useState } from 'react'
import ServiceLayout, { ServiceHero } from './ServiceLayout'
import { ScrollStory, stageClass, SvPoints, SvSection, SvSteps } from './parts'
import Icon from './icons'

const POINTS = [
  { icon: 'code', title: 'Código a medida', text: 'Convertimos el diseño aprobado en una web real, sin plantillas pesadas.' },
  { icon: 'layers', title: 'Componentes', text: 'Piezas reutilizables que mantienen la web coherente y fácil de ampliar.' },
  { icon: 'phone', title: 'Cualquier pantalla', text: 'La misma web se adapta al móvil, la tablet y el ordenador.' },
  { icon: 'shield', title: 'Fácil de mantener', text: 'Una base ordenada para actualizar contenido sin romper nada.' },
]

const STAGES = [
  { title: 'Estructura', text: 'Primero, el esqueleto: cabecera, contenido principal y pie, con etiquetas que describen qué es cada parte.' },
  { title: 'Componentes', text: 'El diseño se divide en piezas —hero, tarjetas, botones— que se reutilizan en toda la web.' },
  { title: 'Interacciones', text: 'Damos vida a cada elemento: estados al pasar el ratón, menú, formularios y respuestas al tocar.' },
  { title: 'Rendimiento', text: 'Optimizamos imágenes y código y dejamos la web publicada y lista para recibir visitas.' },
]

const CODE = [
  { g: 0, t: '<header>' },
  { g: 0, t: '  <Logo /> <Menu />' },
  { g: 0, t: '</header>' },
  { g: 0, t: '<main>' },
  { g: 1, t: '  <Hero titulo="Tu negocio…" />' },
  { g: 1, t: '  <Servicios columnas={3} />' },
  { g: 2, t: '  <Boton alPulsar={reservar}>' },
  { g: 2, t: '    Reservar' },
  { g: 2, t: '  </Boton>' },
  { g: 0, t: '</main>' },
  { g: 3, t: '// imágenes optimizadas · carga diferida' },
]

const FEATURES = [
  'Formulario de contacto',
  'Reserva de citas',
  'Mapa y horarios',
  'Galería de imágenes',
  'Varios idiomas',
  'Blog o novedades',
  'Botón de WhatsApp',
  'SEO técnico básico',
]

const PERFORMANCE = [
  { icon: 'image', title: 'Imágenes adaptadas', text: 'Cada imagen se sirve con el tamaño y el formato adecuados para cada pantalla.' },
  { icon: 'bolt', title: 'Código ligero', text: 'Solo lo necesario: menos peso significa que la web aparece antes.' },
  { icon: 'gauge', title: 'Carga progresiva', text: 'Primero lo que se ve; el resto se carga cuando hace falta.' },
]

const STEPS = [
  { title: 'Maquetación', text: 'Construimos la estructura a partir del diseño aprobado.' },
  { title: 'Funciones', text: 'Añadimos formularios, reservas y todo lo que tu negocio necesite.' },
  { title: 'Pruebas', text: 'Revisamos en distintos navegadores, móviles y tamaños de pantalla.' },
  { title: 'Publicación', text: 'La ponemos en línea con tu dominio, lista para usarse.' },
]

// Hero: la web descompuesta en capas (estructura, estilo, interacción).
function HeroVisual() {
  return (
    <div className="sv-layers">
      <div className="sv-layer sv-layer--1" data-parallax="0.02">
        <span className="sv-layer__tag">Estructura</span>
        <div className="sv-layer__body sv-layer__body--wire">
          <b />
          <b />
          <b />
          <span>
            <i />
            <i />
            <i />
          </span>
        </div>
      </div>
      <div className="sv-layer sv-layer--2" data-parallax="0.06">
        <span className="sv-layer__tag">Estilo</span>
        <div className="sv-layer__body sv-layer__body--style">
          <b />
          <b />
          <b />
          <span>
            <i />
            <i />
            <i />
          </span>
        </div>
      </div>
      <div className="sv-layer sv-layer--3" data-parallax="0.11">
        <span className="sv-layer__tag">Interacción</span>
        <div className="sv-layer__body sv-layer__body--ui">
          <b />
          <b />
          <b className="sv-layer__btn" />
          <svg viewBox="0 0 16 20" className="sv-layer__cursor" aria-hidden="true">
            <path d="M1 1v15l4-4 3 7 3-1.4-3-6.6h6z" fill="#f4f4f4" stroke="#0a0a0a" strokeWidth="1" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

// Relato: el código resaltado y la parte de la web que genera.
function CodeToUi({ stage }) {
  return (
    <div className={`sv-dev ${stageClass(stage)}`}>
      <pre className="sv-dev__code">
        {CODE.map((line, index) => (
          <span key={index} className={`sv-dev__line${line.g === stage ? ' is-hot' : ''}${line.g > stage ? ' is-later' : ''}`}>
            <em>{String(index + 1).padStart(2, ' ')}</em>
            {line.t}
          </span>
        ))}
      </pre>
      <div className="sv-dev__preview">
        <div className="sv-dev__bar" />
        <div className="sv-dev__page">
          <div className="sv-dev__nav">
            <b />
            <span>
              <i />
              <i />
              <i />
            </span>
          </div>
          <div className="sv-dev__hero">
            <b className="sv-dev__h">Tu negocio, en su mejor versión.</b>
            <b className="sv-dev__p" />
            <span className="sv-dev__btn">Reservar</span>
          </div>
          <div className="sv-dev__cards">
            <i />
            <i />
            <i />
          </div>
          <svg viewBox="0 0 16 20" className="sv-dev__cursor" aria-hidden="true">
            <path d="M1 1v15l4-4 3 7 3-1.4-3-6.6h6z" fill="#f4f4f4" stroke="#0a0a0a" strokeWidth="1" strokeLinejoin="round" />
          </svg>
          <span className="sv-dev__badge">
            <i /> Publicada
          </span>
        </div>
      </div>
    </div>
  )
}

// Demo real de diseño adaptable: el visitante cambia el ancho de la pantalla.
const SIZES = [
  { id: 'movil', label: 'Móvil', value: 30 },
  { id: 'tablet', label: 'Tablet', value: 62 },
  { id: 'escritorio', label: 'Escritorio', value: 100 },
]

function Responsive() {
  const [width, setWidth] = useState(100)
  return (
    <div className="sv-resp" data-reveal>
      <div className="sv-resp__controls">
        <div className="sv-resp__presets" role="group" aria-label="Tamaño de pantalla">
          {SIZES.map((size) => (
            <button
              key={size.id}
              type="button"
              className={`sv-chip${width === size.value ? ' is-on' : ''}`}
              aria-pressed={width === size.value}
              onClick={() => setWidth(size.value)}
            >
              {size.label}
            </button>
          ))}
        </div>
        <label className="sv-resp__range">
          <span>Ancho de pantalla</span>
          <input
            type="range"
            min="26"
            max="100"
            value={width}
            onChange={(event) => setWidth(Number(event.target.value))}
          />
        </label>
      </div>
      <div className="sv-resp__stage">
        <div className="sv-resp__frame" style={{ width: `${width}%` }}>
          <div className="sv-resp__site">
            <div className="sv-resp__nav">
              <b />
              <span className="sv-resp__links">
                <i />
                <i />
                <i />
              </span>
              <span className="sv-resp__burger">
                <i />
                <i />
              </span>
            </div>
            <div className="sv-resp__hero">
              <div>
                <b className="sv-resp__h">Tu negocio, en su mejor versión.</b>
                <b className="sv-resp__p" />
                <b className="sv-resp__btn" />
              </div>
              <i className="sv-resp__img" />
            </div>
            <div className="sv-resp__cards">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>
      <p className="sv-note">
        Mueve el control: el contenido se reorganiza solo, igual que en una web real.
      </p>
    </div>
  )
}

// Demos de interacción que el visitante puede probar.
function Interactions() {
  const [menu, setMenu] = useState(false)
  const [email, setEmail] = useState('')
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)

  return (
    <ul className="sv-demos">
      <li className="sv-demo" data-reveal>
        <div className="sv-demo__stage">
          <button type="button" className="sv-demo__btn">
            Reservar cita
          </button>
        </div>
        <h3 className="sv-demo__title">Estados</h3>
        <p className="sv-demo__text">Pasa el ratón o pulsa: el botón responde para confirmar la acción.</p>
      </li>
      <li className="sv-demo" data-reveal style={{ '--reveal-delay': '80ms' }}>
        <div className="sv-demo__stage">
          <div className={`sv-demo__menu${menu ? ' is-open' : ''}`}>
            <div className="sv-demo__menubar">
              <b />
              <button
                type="button"
                className="sv-demo__burger"
                aria-expanded={menu}
                aria-label={menu ? 'Cerrar menú de ejemplo' : 'Abrir menú de ejemplo'}
                onClick={() => setMenu((value) => !value)}
              >
                <i />
                <i />
              </button>
            </div>
            <ul className="sv-demo__items" aria-hidden={!menu}>
              <li>Inicio</li>
              <li>Servicios</li>
              <li>Contacto</li>
            </ul>
          </div>
        </div>
        <h3 className="sv-demo__title">Menú</h3>
        <p className="sv-demo__text">Pulsa el icono: un menú claro y cómodo en pantallas pequeñas.</p>
      </li>
      <li className="sv-demo" data-reveal style={{ '--reveal-delay': '160ms' }}>
        <div className="sv-demo__stage">
          <label className={`sv-demo__field${email ? (valid ? ' is-valid' : ' is-invalid') : ''}`}>
            <span className="visually-hidden">Email de ejemplo</span>
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="off"
            />
            <i aria-hidden="true">{valid ? <Icon name="check" /> : null}</i>
          </label>
        </div>
        <h3 className="sv-demo__title">Formularios</h3>
        <p className="sv-demo__text">Escribe un email: el campo te avisa al momento si está bien escrito.</p>
      </li>
    </ul>
  )
}

export default function DesarrolloWeb() {
  return (
    <ServiceLayout
      slug="desarrollo-web"
      description="Desarrollo web a medida: convertimos el diseño en una web rápida, adaptable a cualquier pantalla y fácil de mantener."
    >
      <ServiceHero
        index="02"
        title="Del diseño a una web que funciona."
        lead="Convertimos el diseño en una web real: rápida, adaptable a cualquier pantalla y construida sobre una base ordenada y fácil de mantener."
        visual={<HeroVisual />}
      />

      <SvSection
        id="detalle"
        title="Qué es el desarrollo web"
        intro="Es la parte que no se ve pero se nota: cómo está construida la web, cómo responde y lo bien que funciona."
      >
        <SvPoints items={POINTS} />
      </SvSection>

      <SvSection
        className="sv-section--alt"
        title="Cómo un diseño se convierte en web"
        intro="Cada bloque de código da forma a una parte de la página. Desplázate para seguir el proceso."
      >
        <ScrollStory steps={STAGES}>{(stage) => <CodeToUi stage={stage} />}</ScrollStory>
      </SvSection>

      <SvSection
        title="Adaptada a cada pantalla"
        intro="Una sola web que se reorganiza según el dispositivo: columnas en el ordenador, lectura cómoda en el móvil."
      >
        <Responsive />
      </SvSection>

      <SvSection
        className="sv-section--alt"
        title="Interacciones"
        intro="Pequeños detalles que hacen que la web se sienta viva y fácil de usar. Pruébalos."
      >
        <Interactions />
      </SvSection>

      <SvSection
        title="Estructura y funcionalidades"
        intro="Construimos lo que tu negocio necesita, nada más y nada menos."
      >
        <ul className="sv-features">
          {FEATURES.map((feature, index) => (
            <li key={feature} data-reveal style={{ '--reveal-delay': `${index * 50}ms` }}>
              <Icon name="check" />
              {feature}
            </li>
          ))}
        </ul>
      </SvSection>

      <SvSection
        className="sv-section--alt"
        title="Rendimiento"
        intro="Una web ligera se abre antes y se usa con más gusto, sobre todo desde el móvil."
      >
        <SvPoints items={PERFORMANCE} columns={3} />
      </SvSection>

      <SvSection title="Cómo trabajamos el desarrollo" intro="Del diseño aprobado a la web publicada.">
        <SvSteps steps={STEPS} />
      </SvSection>
    </ServiceLayout>
  )
}
