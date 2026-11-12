import { useCallback, useState } from 'react'
import { BASE, NAV_IDS } from '../data'
import { useEstateCopy } from '../copy'
import { useMenuBehavior, useScrolled } from '../../../lib/hooks'
import LangSwitch from '../../../i18n/LangSwitch'
import Link from '../../../router/Link'

// Espacio reservado para el logotipo de la agencia (no hay marca ficticia).
export function LogoPlaceholder() {
  const t = useEstateCopy()
  return (
    <span className="re-logo">
      <span className="re-logo__mark" aria-hidden="true">
        {t.logo}
      </span>
      <span className="re-logo__name">{t.brand}</span>
    </span>
  )
}

// En la página principal los enlaces son anclas; en una ficha vuelven a la principal.
function SectionLink({ id, home, onClick, className, children }) {
  if (home) {
    return (
      <a href={`#${id}`} onClick={onClick} className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link to={id === 'inicio' ? BASE : `${BASE}#${id}`} onClick={onClick} className={className}>
      {children}
    </Link>
  )
}

export default function Header({ home = false }) {
  const t = useEstateCopy()
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  const scrolled = useScrolled(24)
  useMenuBehavior(open, close)

  return (
    <header className={`re-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="re-demo">
        <div className="re-wrap re-demo__inner">
          <span className="re-demo__long">{t.demoLabel}</span>
          <span className="re-demo__short">{t.demoShort}</span>
          <div className="re-demo__end">
            <LangSwitch size="sm" className="re-demo__lang" />
            <Link to="/" className="re-demo__back" aria-label="PH Web Studio">
              ← PH<span className="re-demo__back-long"> Web Studio</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="re-wrap re-nav">
        <SectionLink id="inicio" home={home} onClick={close} className="re-nav__brand">
          <LogoPlaceholder />
        </SectionLink>

        <nav className="re-nav__links" aria-label={t.common.mainNav}>
          {NAV_IDS.map((id) => (
            <SectionLink key={id} id={id} home={home}>
              {t.nav[id]}
            </SectionLink>
          ))}
        </nav>

        <SectionLink id="contacto" home={home} className="re-btn re-btn--dark re-btn--sm re-nav__cta">
          {t.cta}
        </SectionLink>

        <button
          type="button"
          className="re-burger"
          aria-expanded={open}
          aria-controls="re-menu"
          aria-label={open ? t.common.closeMenu : t.common.openMenu}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="re-menu" className="re-menu" inert={!open} aria-hidden={!open}>
        <nav className="re-wrap re-menu__inner" aria-label={t.common.mobileNav}>
          <ul>
            {NAV_IDS.map((id) => (
              <li key={id}>
                <SectionLink id={id} home={home} onClick={close}>
                  {t.nav[id]}
                </SectionLink>
              </li>
            ))}
          </ul>
          <div className="re-menu__foot">
            <LangSwitch size="lg" />
            <SectionLink id="contacto" home={home} onClick={close} className="re-btn re-btn--dark re-btn--block">
              {t.cta}
            </SectionLink>
          </div>
        </nav>
      </div>
    </header>
  )
}
