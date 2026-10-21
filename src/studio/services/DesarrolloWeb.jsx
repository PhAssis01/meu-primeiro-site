import { useState } from 'react'
import ServiceLayout, { ServiceHero } from './ServiceLayout'
import { ScrollStory, stageClass, SvPoints, SvSection, SvSteps } from './parts'
import Icon from './icons'
import { useCopy } from '../../i18n/context'
import { useStudioCopy } from '../copy'
import COPY from './copy/desarrollo-web'

// Hero: la web descompuesta en capas (estructura, estilo, interacción).
function HeroVisual({ t }) {
  return (
    <div className="sv-layers">
      <div className="sv-layer sv-layer--1" data-parallax="0.02">
        <span className="sv-layer__tag">{t.layers[0]}</span>
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
        <span className="sv-layer__tag">{t.layers[1]}</span>
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
        <span className="sv-layer__tag">{t.layers[2]}</span>
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
function CodeToUi({ stage, t }) {
  const mock = useStudioCopy().mock
  return (
    <div className={`sv-dev ${stageClass(stage)}`}>
      <pre className="sv-dev__code">
        {t.code.map((line, index) => (
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
            <b className="sv-dev__h">{mock.headline}</b>
            <b className="sv-dev__p" />
            <span className="sv-dev__btn">{mock.book}</span>
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
            <i /> {t.published}
          </span>
        </div>
      </div>
    </div>
  )
}

// Demo real de diseño adaptable: el visitante cambia el ancho de la pantalla.
const SIZES = [
  { id: 'movil', value: 30 },
  { id: 'tablet', value: 62 },
  { id: 'escritorio', value: 100 },
]

function Responsive({ t }) {
  const mock = useStudioCopy().mock
  const [width, setWidth] = useState(100)
  return (
    <div className="sv-resp" data-reveal>
      <div className="sv-resp__controls">
        <div className="sv-resp__presets" role="group" aria-label={t.responsive.group}>
          {SIZES.map((size, index) => (
            <button
              key={size.id}
              type="button"
              className={`sv-chip${width === size.value ? ' is-on' : ''}`}
              aria-pressed={width === size.value}
              onClick={() => setWidth(size.value)}
            >
              {t.responsive.sizes[index]}
            </button>
          ))}
        </div>
        <label className="sv-resp__range">
          <span>{t.responsive.range}</span>
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
                <b className="sv-resp__h">{mock.headline}</b>
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
        {t.responsive.note}
      </p>
    </div>
  )
}

// Demos de interacción que el visitante puede probar.
function Interactions({ t }) {
  const d = t.demos
  const [menu, setMenu] = useState(false)
  const [email, setEmail] = useState('')
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)

  return (
    <ul className="sv-demos">
      <li className="sv-demo" data-reveal>
        <div className="sv-demo__stage">
          <button type="button" className="sv-demo__btn">
            {d.button}
          </button>
        </div>
        <h3 className="sv-demo__title">{d.states.title}</h3>
        <p className="sv-demo__text">{d.states.text}</p>
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
                aria-label={menu ? d.menuClose : d.menuOpen}
                onClick={() => setMenu((value) => !value)}
              >
                <i />
                <i />
              </button>
            </div>
            <ul className="sv-demo__items" aria-hidden={!menu}>
              {d.menuItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <h3 className="sv-demo__title">{d.menu.title}</h3>
        <p className="sv-demo__text">{d.menu.text}</p>
      </li>
      <li className="sv-demo" data-reveal style={{ '--reveal-delay': '160ms' }}>
        <div className="sv-demo__stage">
          <label className={`sv-demo__field${email ? (valid ? ' is-valid' : ' is-invalid') : ''}`}>
            <span className="visually-hidden">{d.emailLabel}</span>
            <input
              type="email"
              placeholder={d.emailPlaceholder}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="off"
            />
            <i aria-hidden="true">{valid ? <Icon name="check" /> : null}</i>
          </label>
        </div>
        <h3 className="sv-demo__title">{d.forms.title}</h3>
        <p className="sv-demo__text">{d.forms.text}</p>
      </li>
    </ul>
  )
}

export default function DesarrolloWeb() {
  const t = useCopy(COPY)
  const { sections } = t
  return (
    <ServiceLayout slug="desarrollo-web" description={t.description}>
      <ServiceHero index="02" title={t.hero.title} lead={t.hero.lead} visual={<HeroVisual t={t} />} />

      <SvSection id="detalle" title={sections.what.title} intro={sections.what.intro}>
        <SvPoints items={t.points} />
      </SvSection>

      <SvSection className="sv-section--alt" title={sections.story.title} intro={sections.story.intro}>
        <ScrollStory steps={t.stages}>{(stage) => <CodeToUi stage={stage} t={t} />}</ScrollStory>
      </SvSection>

      <SvSection title={sections.responsive.title} intro={sections.responsive.intro}>
        <Responsive t={t} />
      </SvSection>

      <SvSection className="sv-section--alt" title={sections.interactions.title} intro={sections.interactions.intro}>
        <Interactions t={t} />
      </SvSection>

      <SvSection title={sections.features.title} intro={sections.features.intro}>
        <ul className="sv-features">
          {t.features.map((feature, index) => (
            <li key={index} data-reveal style={{ '--reveal-delay': `${index * 50}ms` }}>
              <Icon name="check" />
              {feature}
            </li>
          ))}
        </ul>
      </SvSection>

      <SvSection className="sv-section--alt" title={sections.performance.title} intro={sections.performance.intro}>
        <SvPoints items={t.performance} columns={3} />
      </SvSection>

      <SvSection title={sections.steps.title} intro={sections.steps.intro}>
        <SvSteps steps={t.steps} />
      </SvSection>
    </ServiceLayout>
  )
}
