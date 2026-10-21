import { useEffect, useRef, useState } from 'react'
import ServiceLayout, { ServiceHero } from './ServiceLayout'
import { ScrollStory, stageClass, SvPoints, SvSection, SvSteps } from './parts'
import { prefersReducedMotion } from '../motion'
import BrowserFrame from '../components/BrowserFrame'
import { useCopy } from '../../i18n/context'
import { useStudioCopy } from '../copy'
import COPY from './copy/landing-pages'

// Hero: una página que se carga por partes al abrir la web.
function HeroVisual() {
  const mock = useStudioCopy().mock
  const [stage, setStage] = useState(() => (prefersReducedMotion() ? 4 : 0))

  useEffect(() => {
    if (stage >= 4) return undefined
    const timer = setTimeout(() => setStage((value) => value + 1), stage === 0 ? 700 : 520)
    return () => clearTimeout(timer)
  }, [stage])

  return (
    <BrowserFrame url={mock.domain} className={`sv-load ${stageClass(stage)}`} data-parallax="0.04">
      <div className="sv-load__page">
        <span className="sv-load__progress" />
        <div className="sv-load__hero">
          <div className="sv-load__copy">
            <b className="sv-load__h">
              <span>{mock.headline}</span>
            </b>
            <b className="sv-load__p" />
            <b className="sv-load__p sv-load__p--short" />
            <b className="sv-load__btn">
              <span>{mock.book}</span>
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
function SlowFast({ t }) {
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
            <strong>{t.slow}</strong>
            <span className="sv-vs__status">
              <span className="sv-vs__loading">{t.loading}</span>
              <span className="sv-vs__ready">{t.ready}</span>
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
            <strong>{t.fast}</strong>
            <span className="sv-vs__status">
              <span className="sv-vs__loading">{t.loading}</span>
              <span className="sv-vs__ready">{t.ready}</span>
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
        <p className="sv-note">{t.note}</p>
        <button type="button" className="s-btn s-btn--ghost s-btn--sm" onClick={() => setRun((value) => value + 1)}>
          <span aria-hidden="true">↻</span> {t.replay}
        </button>
      </div>
    </div>
  )
}

// Relato: la landing aparece por partes a medida que se avanza.
function Anatomy({ stage, t }) {
  const mock = useStudioCopy().mock
  return (
    <BrowserFrame url={`${mock.domain}${t.offerPath}`} className={`sv-anat ${stageClass(stage)}`}>
      <span className="sv-anat__progress" />
      <div className="sv-anat__page">
        <div className="sv-anat__part sv-anat__part--0">
          <b className="sv-anat__h">{mock.headline}</b>
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
          <span className="sv-anat__cta">{t.bookNow}</span>
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
  const t = useCopy(COPY)
  const { sections } = t
  return (
    <ServiceLayout slug="landing-pages" description={t.description}>
      <ServiceHero index="03" title={t.hero.title} lead={t.hero.lead} visual={<HeroVisual />} />

      <SvSection id="detalle" title={sections.impression.title} intro={sections.impression.intro}>
        <SvPoints items={t.impression} columns={3} />
      </SvSection>

      <SvSection className="sv-section--alt" title={sections.versus.title} intro={sections.versus.intro}>
        <SlowFast t={t.versus} />
      </SvSection>

      <SvSection title={sections.anatomy.title} intro={sections.anatomy.intro}>
        <ScrollStory steps={t.anatomy}>{(stage) => <Anatomy stage={stage} t={t} />}</ScrollStory>
      </SvSection>

      <SvSection className="sv-section--alt" title={sections.ux.title} intro={sections.ux.intro}>
        <SvPoints items={t.ux} />
      </SvSection>

      <SvSection title={sections.steps.title} intro={sections.steps.intro}>
        <SvSteps steps={t.steps} />
      </SvSection>
    </ServiceLayout>
  )
}
