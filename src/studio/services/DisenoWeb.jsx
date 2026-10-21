import ServiceLayout, { ServiceHero } from './ServiceLayout'
import { ScrollStory, stageClass, SvPoints, SvSection, SvSteps } from './parts'
import BrowserFrame from '../components/BrowserFrame'
import GenericSite from '../components/mockups/GenericSite'
import { useCopy } from '../../i18n/context'
import { useStudioCopy } from '../copy'
import COPY from './copy/diseno-web'

// Hero: la web genérica del estudio con capas de herramienta de diseño.
function HeroVisual({ t }) {
  const mock = useStudioCopy().mock
  return (
    <div className="sv-dh">
      <BrowserFrame url={mock.domain} className="sv-dh__frame" data-parallax="0.04">
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
        <span className="sv-dh__panel-title">{t.panel}</span>
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
function DesignBuild({ stage, t }) {
  const mock = useStudioCopy().mock
  return (
    <div className="sv-build-wrap">
      <BrowserFrame url={mock.domain} className={`sv-build ${stageClass(stage)}`}>
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
                <span>{mock.headlineLines[0]}</span>
              </b>
              <b className="sv-b sv-b--h1 sv-b--short">
                <span>{mock.headlineLines[1]}</span>
              </b>
              <b className="sv-b sv-b--p" />
              <b className="sv-b sv-b--p sv-b--short" />
              <b className="sv-b sv-b--btn">
                <span>{mock.book}</span>
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
        <span>{t.layer}</span>
        {t.stages[stage].label}
      </p>
    </div>
  )
}

// Comparación: web improvisada frente a web diseñada.
function Compare({ t }) {
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
          <strong>{t.compare.rough.title}</strong>
          {t.compare.rough.text}
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
          <strong>{t.compare.clean.title}</strong>
          {t.compare.clean.text}
        </figcaption>
      </figure>
      <ul className="sv-compare__notes">
        {t.compare.notes.map(
          (note, index) => (
            <li key={index} data-reveal style={{ '--reveal-delay': `${200 + index * 80}ms` }}>
              {note}
            </li>
          ),
        )}
      </ul>
    </div>
  )
}

export default function DisenoWeb() {
  const t = useCopy(COPY)
  return (
    <ServiceLayout slug="diseno-web" description={t.description}>
      <ServiceHero index="01" title={t.hero.title} lead={t.hero.lead} visual={<HeroVisual t={t} />} />

      <SvSection id="detalle" title={t.sections.what.title} intro={t.sections.what.intro}>
        <SvPoints items={t.points} />
      </SvSection>

      <SvSection className="sv-section--alt" title={t.sections.story.title} intro={t.sections.story.intro}>
        <ScrollStory steps={t.stages}>{(stage) => <DesignBuild stage={stage} t={t} />}</ScrollStory>
      </SvSection>

      <SvSection title={t.sections.value.title} intro={t.sections.value.intro}>
        <Compare t={t} />
      </SvSection>

      <SvSection title={t.sections.steps.title} intro={t.sections.steps.intro}>
        <SvSteps steps={t.steps} />
      </SvSection>
    </ServiceLayout>
  )
}
