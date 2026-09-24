import ServiceLayout, { ServiceHero } from './ServiceLayout'
import { ScrollStory, stageClass, SvPoints, SvSection, SvSteps } from './parts'
import BrowserFrame from '../components/BrowserFrame'
import GenericSite from '../components/mockups/GenericSite'

const POINTS = [
  { icon: 'layout', title: 'Estructura clara', text: 'Cada página se organiza para que el visitante encuentre lo que busca sin pensar.' },
  { icon: 'palette', title: 'Identidad propia', text: 'Colores, tipografía e imágenes que reflejan la personalidad de tu negocio.' },
  { icon: 'cursor', title: 'Interfaz cuidada', text: 'Botones, menús y formularios pensados para usarse con facilidad.' },
  { icon: 'target', title: 'Orientada a un objetivo', text: 'Todo el diseño guía hacia lo importante: que te contacten o reserven.' },
]

const STAGES = [
  { title: 'Estructura', label: 'Wireframe', text: 'Empezamos por el esqueleto: qué contenido va en cada zona y en qué orden. Sin colores ni adornos, solo la lógica de la página.' },
  { title: 'Retícula y jerarquía', label: 'Retícula', text: 'Alineamos todo sobre una retícula y definimos tamaños de texto. Así la página respira y se lee de un vistazo.' },
  { title: 'Estilo visual', label: 'Estilo', text: 'Aplicamos tu identidad: color de acento, tipografía, imágenes y detalles que hacen que la web sea reconocible.' },
  { title: 'Diseño final', label: 'Listo', text: 'Revisamos cada estado —botones, menú, formularios— y dejamos el diseño listo para desarrollarlo.' },
]

const STEPS = [
  { title: 'Briefing', text: 'Conocemos tu negocio, tu público y tus referencias.' },
  { title: 'Estructura', text: 'Definimos las páginas y el recorrido del visitante.' },
  { title: 'Propuesta visual', text: 'Diseñamos la web completa en escritorio y móvil.' },
  { title: 'Ajustes', text: 'La revisamos contigo hasta que encaja con lo que buscas.' },
]

// Hero: la web genérica del estudio con capas de herramienta de diseño.
function HeroVisual() {
  return (
    <div className="sv-dh">
      <BrowserFrame url="tunegocio.com" className="sv-dh__frame" data-parallax="0.04">
        <GenericSite />
        <div className="sv-dh__guides">
          {Array.from({ length: 6 }, (_, i) => (
            <i key={i} />
          ))}
        </div>
        <div className="sv-dh__select">
          <i />
          <i />
          <i />
          <i />
        </div>
      </BrowserFrame>
      <div className="sv-dh__panel" data-parallax="0.1">
        <span className="sv-dh__panel-title">Estilo</span>
        <span className="sv-dh__type">Aa</span>
        <span className="sv-dh__meta">Space Grotesk · 600</span>
        <span className="sv-dh__swatches">
          <i style={{ background: '#0a0a0a' }} />
          <i style={{ background: '#f4f4f4' }} />
          <i style={{ background: '#8e8e8e' }} />
        </span>
      </div>
    </div>
  )
}

// Relato: la misma página pasa de wireframe a diseño final.
function DesignBuild({ stage }) {
  return (
    <div className="sv-build-wrap">
      <BrowserFrame url="tunegocio.com" className={`sv-build ${stageClass(stage)}`}>
        <div className="sv-build__page">
          <div className="sv-build__guides">
            {Array.from({ length: 6 }, (_, i) => (
              <i key={i} />
            ))}
          </div>
          <div className="sv-build__nav">
            <b className="sv-b sv-b--logo" />
            <span className="sv-build__links">
              <b className="sv-b" />
              <b className="sv-b" />
              <b className="sv-b" />
            </span>
            <b className="sv-b sv-b--cta" />
          </div>
          <div className="sv-build__hero">
            <div className="sv-build__copy">
              <b className="sv-b sv-b--eyebrow" />
              <b className="sv-b sv-b--h1">
                <span>Tu negocio, en su</span>
              </b>
              <b className="sv-b sv-b--h1 sv-b--short">
                <span>mejor versión.</span>
              </b>
              <b className="sv-b sv-b--p" />
              <b className="sv-b sv-b--p sv-b--short" />
              <b className="sv-b sv-b--btn">
                <span>Reservar</span>
              </b>
            </div>
            <div className="sv-b sv-build__img">
              <i />
            </div>
          </div>
          <div className="sv-build__cards">
            <b className="sv-b sv-build__card" />
            <b className="sv-b sv-build__card" />
            <b className="sv-b sv-build__card" />
          </div>
        </div>
      </BrowserFrame>
      <p className="sv-build__chip">
        <span>Capa</span>
        {STAGES[stage].label}
      </p>
    </div>
  )
}

// Comparación: web improvisada frente a web diseñada.
function Compare() {
  return (
    <div className="sv-compare">
      <figure className="sv-compare__item" data-reveal>
        <div className="sv-mini sv-mini--rough">
          <b style={{ width: '38%' }} />
          <b style={{ width: '82%', marginLeft: '9%' }} />
          <b style={{ width: '56%', marginLeft: '3%' }} />
          <span className="sv-mini__row">
            <i style={{ height: '64%' }} />
            <i style={{ height: '92%', marginTop: '6%' }} />
            <i style={{ height: '48%' }} />
          </span>
          <b style={{ width: '24%', marginLeft: '60%' }} />
        </div>
        <figcaption>
          <strong>Improvisada</strong>
          Elementos desalineados, sin jerarquía y sin una acción clara.
        </figcaption>
      </figure>
      <figure className="sv-compare__item" data-reveal style={{ '--reveal-delay': '120ms' }}>
        <div className="sv-mini sv-mini--clean">
          <b className="sv-mini__eyebrow" />
          <b className="sv-mini__h" />
          <b className="sv-mini__p" />
          <b className="sv-mini__btn" />
          <span className="sv-mini__row">
            <i />
            <i />
            <i />
          </span>
        </div>
        <figcaption>
          <strong>Diseñada</strong>
          Orden, aire y un camino evidente hacia el contacto.
        </figcaption>
      </figure>
      <ul className="sv-compare__notes">
        {['Transmite confianza desde el primer vistazo', 'Se entiende en pocos segundos', 'Guía al visitante hacia la acción'].map(
          (note, index) => (
            <li key={note} data-reveal style={{ '--reveal-delay': `${200 + index * 80}ms` }}>
              {note}
            </li>
          ),
        )}
      </ul>
    </div>
  )
}

export default function DisenoWeb() {
  return (
    <ServiceLayout
      slug="diseno-web"
      description="Diseño web a medida para pequeños negocios: estructura, identidad visual e interfaz pensadas para transmitir confianza."
    >
      <ServiceHero
        index="01"
        title="Diseño web que se entiende a primera vista."
        lead="Diseñamos la imagen y la estructura de tu web para que refleje tu negocio, transmita confianza y lleve al visitante a contactarte."
        visual={<HeroVisual />}
      />

      <SvSection
        id="detalle"
        title="Qué es el diseño web"
        intro="No es solo que la web sea bonita: es decidir qué ve el visitante, en qué orden y qué le invita a hacer."
      >
        <SvPoints items={POINTS} />
      </SvSection>

      <SvSection
        className="sv-section--alt"
        title="Del boceto a la web"
        intro="Así evoluciona una página durante el diseño. Desplázate para ver cada fase."
      >
        <ScrollStory steps={STAGES}>{(stage) => <DesignBuild stage={stage} />}</ScrollStory>
      </SvSection>

      <SvSection
        title="El valor de una web profesional"
        intro="Con el mismo contenido, el diseño cambia por completo lo que siente quien la visita."
      >
        <Compare />
      </SvSection>

      <SvSection title="Cómo trabajamos el diseño" intro="Un proceso sencillo, con tu aprobación en cada paso.">
        <SvSteps steps={STEPS} />
      </SvSection>
    </ServiceLayout>
  )
}
