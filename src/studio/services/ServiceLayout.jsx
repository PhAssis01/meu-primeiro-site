// Estructura común de las páginas de servicio: cabecera, hero, otros
// servicios, llamada a la acción y pie. Reutiliza la identidad del estudio
// (studio.css) y sus animaciones (useReveal + useStudioMotion).
import { useRef } from 'react'
import { usePageMeta, useReveal, useScrolled } from '../../lib/hooks'
import Link from '../../router/Link'
import { CONTACT_EMAIL, NAV_IDS, SERVICES, serviceHref } from '../data'
import { useStudioCopy } from '../copy'
import { useStudioMotion } from '../motion'
import LangSwitch, { LangMenu } from '../../i18n/LangSwitch'
import Logo from '../components/Logo'
import Arrow from '../components/Arrow'
import ServiceArt from '../components/ServiceArt'
import '../studio.css'
import './services.css'

function ServiceNav() {
  const t = useStudioCopy()
  const scrolled = useScrolled()
  return (
    <header className={`s-nav sv-nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="s-container s-nav__inner">
        <Link to="/" className="s-logo" aria-label={t.common.logoHome}>
          <Logo />
        </Link>
        <Link to="/#servicios" className="sv-back">
          <span className="sv-back__arrow" aria-hidden="true">←</span>
          <span className="sv-back__long">{t.service.allServices}</span>
          <span className="sv-back__short">{t.service.servicesShort}</span>
        </Link>
        <LangSwitch className="sv-nav__lang" />
        <LangMenu className="sv-nav__lang-menu" />
        <Link to="/#contacto" className="s-btn s-btn--primary s-btn--sm sv-nav__cta">
          {t.common.talk} <Arrow />
        </Link>
      </div>
    </header>
  )
}

export function ServiceHero({ index, title, lead, visual, centered = false }) {
  const t = useStudioCopy().service
  return (
    <section className={`sv-hero${centered ? ' sv-hero--center' : ''}`}>
      <div className="s-hero__grid-bg" aria-hidden="true" data-parallax="-0.06" />
      <div className="s-container sv-hero__inner">
        <div className="sv-hero__copy">
          <p className="s-hero__tag s-fade" style={{ '--d': '0ms' }}>
            {t.tag} · {index}
          </p>
          <h1 className="s-hero__title sv-hero__title s-fade" style={{ '--d': '80ms' }}>
            {title}
          </h1>
          <p className="s-hero__lead s-fade" style={{ '--d': '220ms' }}>
            {lead}
          </p>
          <div className="s-hero__actions s-fade" style={{ '--d': '320ms' }}>
            <Link to="/#contacto" className="s-btn s-btn--primary">
              {t.wantSite} <Arrow />
            </Link>
            <a href="#detalle" className="s-btn s-btn--ghost">
              {t.howItWorks}
            </a>
          </div>
        </div>
        {visual ? (
          <div className="sv-hero__visual s-fade" style={{ '--d': '200ms' }} aria-hidden="true">
            {visual}
          </div>
        ) : null}
      </div>
    </section>
  )
}

function OtherServices({ current }) {
  const t = useStudioCopy()
  const others = SERVICES.filter((service) => service.slug !== current)
  return (
    <section className="s-section sv-more" aria-labelledby="sv-more-title">
      <div className="s-container">
        <header className="s-head" data-reveal>
          <h2 id="sv-more-title" className="s-h2">
            {t.service.otherTitle}
          </h2>
          <p className="s-body">{t.service.otherIntro}</p>
        </header>
        <ul className="sv-more__list">
          {others.map((service, index) => (
            <li key={service.slug} data-reveal style={{ '--reveal-delay': `${index * 70}ms` }}>
              <Link to={serviceHref(service.slug)} className="sv-more__link">
                <span className="sv-more__art">
                  <ServiceArt name={service.art} />
                </span>
                <span className="sv-more__title">{t.services.items[service.slug].title}</span>
                <span className="sv-more__go" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// Misma llamada a la acción que la Home (mismas clases y textos),
// con enlaces que vuelven a la sección de contacto de la página principal.
function ServiceCta() {
  const t = useStudioCopy().cta
  return (
    <section className="s-cta" aria-labelledby="sv-cta-title">
      <div className="s-container s-cta__inner" data-reveal>
        <h2 id="sv-cta-title" className="s-cta__title">
          {t.title}
        </h2>
        <div className="s-cta__side">
          <p className="s-body">{t.text}</p>
          <Link to="/#contacto" className="s-btn s-btn--primary s-btn--lg">
            {t.button} <Arrow />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ServiceFooter() {
  const t = useStudioCopy()
  return (
    <footer className="s-footer">
      <div className="s-container s-footer__inner">
        <Link to="/" className="s-logo" aria-label={t.common.logoHome}>
          <Logo />
        </Link>
        <nav className="s-footer__links" aria-label={t.common.footerNav}>
          {NAV_IDS.map((id) => (
            <Link key={id} to={id === 'inicio' ? '/' : `/#${id}`}>
              {t.nav[id]}
            </Link>
          ))}
        </nav>
        <div className="s-footer__meta">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <span>© {new Date().getFullYear()} PH Web Studio</span>
        </div>
      </div>
    </footer>
  )
}

export default function ServiceLayout({ slug, description, children }) {
  const t = useStudioCopy()
  usePageMeta(`${t.services.items[slug].title} — PH Web Studio`, 'studio', description)
  useReveal()
  const rootRef = useRef(null)
  useStudioMotion(rootRef)

  return (
    <div className="studio sv" ref={rootRef}>
      <div className="s-progress" aria-hidden="true" />
      <a href="#main" className="s-skip">
        {t.common.skip}
      </a>
      <ServiceNav />
      <main id="main">
        {children}
        <OtherServices current={slug} />
        <ServiceCta />
      </main>
      <ServiceFooter />
    </div>
  )
}
