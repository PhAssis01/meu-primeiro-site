import { useEffect, useRef, useState } from 'react'
import ServiceLayout, { ServiceHero } from './ServiceLayout'
import { ScrollStory, stageClass, SvPoints, SvSection, SvSteps } from './parts'
import { prefersReducedMotion } from '../motion'
import BrowserFrame from '../components/BrowserFrame'

const IMPRESSION = [
  { icon: 'bolt', title: 'Rapidez', text: 'La página aparece enseguida y el visitante no se queda mirando una pantalla en blanco.' },
  { icon: 'eye', title: 'Claridad', text: 'En pocos segundos se entiende qué ofreces y qué puede hacer quien la visita.' },
  { icon: 'shield', title: 'Confianza', text: 'Una página que carga bien y no da saltos transmite seriedad.' },
]

const ANATOMY = [
  { title: 'Un titular claro', text: 'Lo primero que se carga es lo que más importa: qué ofreces y para quién, sin rodeos.' },
  { title: 'Beneficios a la vista', text: 'Después, las razones para elegirte, en bloques cortos que se leen de un vistazo.' },
  { title: 'Una sola acción', text: 'Un único objetivo —llamar, escribir o reservar— con un botón que siempre se encuentra.' },
  { title: 'Contacto sin fricción', text: 'Un formulario breve, con los campos justos, para que dar el paso cueste poco.' },
]

const UX = [
  { icon: 'gauge', title: 'Carga progresiva', text: 'Lo visible se muestra primero; lo demás llega mientras se lee.' },
  { icon: 'image', title: 'Imágenes ajustadas', text: 'Cada pantalla recibe imágenes del tamaño que necesita.' },
  { icon: 'layout', title: 'Sin saltos', text: 'El espacio de cada elemento está reservado: nada se mueve al cargar.' },
  { icon: 'target', title: 'Objetivo único', text: 'Todo en la página empuja hacia la misma acción.' },
]

const STEPS = [
  { title: 'Objetivo', text: 'Decidimos qué acción debe hacer el visitante.' },
  { title: 'Mensaje', text: 'Escribimos un titular y unos beneficios que se entienden rápido.' },
  { title: 'Construcción', text: 'Diseñamos y desarrollamos una página ligera y adaptada al móvil.' },
  { title: 'Revisión', text: 'Comprobamos cómo carga y cómo se usa en distintos dispositivos.' },
]

// Hero: una página que se carga por partes al abrir la web.
function HeroVisual() {
  const [stage, setStage] = useState(() => (prefersReducedMotion() ? 4 : 0))

  useEffect(() => {
    if (stage >= 4) return undefined
    const timer = setTimeout(() => setStage((value) => value + 1), stage === 0 ? 700 : 520)
    return () => clearTimeout(timer)
  }, [stage])

  return (
    <BrowserFrame url="tunegocio.com" className={`sv-load ${stageClass(stage)}`} data-parallax="0.04">
      <div className="sv-load__page">
        <span className="sv-load__progress" />
        <div className="sv-load__hero">
          <div className="sv-load__copy">
            <b className="sv-load__h">
              <span>Tu negocio, en su mejor versión.</span>
            </b>
            <b className="sv-load__p" />
            <b className="sv-load__p sv-load__p--short" />
            <b className="sv-load__btn">
              <span>Reservar</span>
            </b>
          </div>
          <div className="sv-load__img">
            <i />
          </div>
        </div>
        <div className="sv-load__cards">
          <b />
          <b />
          <b />
        </div>
      </div>
    </BrowserFrame>
  )
}

// Comparación ilustrativa entre una página lenta y una optimizada.
function SlowFast() {
  const ref = useRef(null)
  const [run, setRun] = useState(0)

  useEffect(() => {
    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun((value) => value || 1)
          observer.disconnect()
        }
      },
      { threshold: 0.45 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const state = run ? ' is-running' : ''

  return (
    <div className="sv-vs" ref={ref} data-reveal>
      <div className="sv-vs__grid" key={run}>
        <figure className={`sv-vs__item sv-vs__item--slow${state}`}>
          <figcaption>
            <strong>Sin optimizar</strong>
            <span className="sv-vs__status">
              <span className="sv-vs__loading">Cargando…</span>
              <span className="sv-vs__ready">Lista</span>
            </span>
          </figcaption>
          <div className="sv-vs__screen" aria-hidden="true">
            <span className="sv-vs__bar" />
            <span className="sv-vs__spinner" />
            <div className="sv-vs__page">
              <b className="sv-vs__img" />
              <b className="sv-vs__h" />
              <b className="sv-vs__p" />
              <b className="sv-vs__btn" />
            </div>
          </div>
        </figure>
        <figure className={`sv-vs__item sv-vs__item--fast${state}`}>
          <figcaption>
            <strong>Optimizada</strong>
            <span className="sv-vs__status">
              <span className="sv-vs__loading">Cargando…</span>
              <span className="sv-vs__ready">Lista</span>
            </span>
          </figcaption>
          <div className="sv-vs__screen" aria-hidden="true">
            <span className="sv-vs__bar" />
            <div className="sv-vs__page">
              <b className="sv-vs__img" />
              <b className="sv-vs__h" />
              <b className="sv-vs__p" />
              <b className="sv-vs__btn" />
            </div>
          </div>
        </figure>
      </div>
      <div className="sv-vs__foot">
        <p className="sv-note">
          Simulación ilustrativa. Los tiempos reales dependen de cada web, del
          alojamiento y de la conexión de quien la visita.
        </p>
        <button type="button" className="s-btn s-btn--ghost s-btn--sm" onClick={() => setRun((value) => value + 1)}>
          <span aria-hidden="true">↻</span> Repetir
        </button>
      </div>
    </div>
  )
}

// Relato: la landing aparece por partes a medida que se avanza.
function Anatomy({ stage }) {
  return (
    <BrowserFrame url="tunegocio.com/oferta" className={`sv-anat ${stageClass(stage)}`}>
      <span className="sv-anat__progress" />
      <div className="sv-anat__page">
        <div className="sv-anat__part sv-anat__part--0">
          <b className="sv-anat__h">Tu negocio, en su mejor versión.</b>
          <b className="sv-anat__p" />
        </div>
        <div className="sv-anat__part sv-anat__part--1">
          {[0, 1, 2].map((item) => (
            <span key={item} className="sv-anat__benefit">
              <i />
              <b />
            </span>
          ))}
        </div>
        <div className="sv-anat__part sv-anat__part--2">
          <span className="sv-anat__cta">Reservar ahora</span>
        </div>
        <div className="sv-anat__part sv-anat__part--3">
          <b className="sv-anat__field" />
          <b className="sv-anat__field" />
          <span className="sv-anat__send" />
        </div>
      </div>
    </BrowserFrame>
  )
}

export default function LandingPages() {
  return (
    <ServiceLayout
      slug="landing-pages"
      description="Landing pages rápidas y con un único objetivo: que cargan bien, causan buena primera impresión y convierten visitas en contactos."
    >
      <ServiceHero
        index="03"
        title="Páginas rápidas que causan buena impresión."
        lead="Una landing page tiene pocos segundos para convencer. La diseñamos para que cargue bien, se entienda al instante y lleve a una sola acción."
        visual={<HeroVisual />}
      />

      <SvSection
        id="detalle"
        title="La primera impresión cuenta"
        intro="Antes de leer una sola palabra, el visitante ya ha notado si la página responde rápido y se ve ordenada."
      >
        <SvPoints items={IMPRESSION} columns={3} />
      </SvSection>

      <SvSection
        className="sv-section--alt"
        title="Lenta frente a optimizada"
        intro="La misma página, construida de dos formas distintas."
      >
        <SlowFast />
      </SvSection>

      <SvSection
        title="Una página que se construye ante tus ojos"
        intro="Así se ordena una landing eficaz: lo importante primero, el resto a continuación. Desplázate para verla cargar."
      >
        <ScrollStory steps={ANATOMY}>{(stage) => <Anatomy stage={stage} />}</ScrollStory>
      </SvSection>

      <SvSection
        className="sv-section--alt"
        title="Experiencia de usuario"
        intro="Detalles que no se ven a simple vista, pero que hacen que la página sea agradable de usar."
      >
        <SvPoints items={UX} />
      </SvSection>

      <SvSection title="Cómo creamos tu landing" intro="Un proceso corto y enfocado en el resultado.">
        <SvSteps steps={STEPS} />
      </SvSection>
    </ServiceLayout>
  )
}
