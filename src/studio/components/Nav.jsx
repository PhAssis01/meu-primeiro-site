import { useCallback, useState } from 'react'
import { NAV_IDS, CONTACT_EMAIL } from '../data'
import { useStudioCopy } from '../copy'
import { useActiveSection, useMenuBehavior, useScrolled } from '../../lib/hooks'
import LangSwitch from '../../i18n/LangSwitch'
import Logo from './Logo'
import Arrow from './Arrow'

export default function Nav() {
  const t = useStudioCopy()
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  const scrolled = useScrolled()
  const active = useActiveSection(NAV_IDS)
  useMenuBehavior(open, close)

  return (
    <header
      className={`s-nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}
    >
      <div className="s-container s-nav__inner">
        <a href="#inicio" className="s-logo" onClick={close} aria-label={t.common.logoHome}>
          <Logo />
        </a>

        <nav className="s-nav__links" aria-label={t.common.mainNav}>
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : undefined}
              aria-current={active === id ? 'location' : undefined}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <LangSwitch className="s-nav__lang" />

        <a href="#contacto" className="s-btn s-btn--primary s-btn--sm s-nav__cta">
          {t.common.talk} <Arrow />
        </a>

        <button
          type="button"
          className="s-burger"
          aria-expanded={open}
          aria-controls="s-menu"
          aria-label={open ? t.common.closeMenu : t.common.openMenu}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="s-menu" className="s-menu" inert={!open} aria-hidden={!open}>
        <nav className="s-container s-menu__inner" aria-label={t.common.mobileNav}>
          <ul className="s-menu__list">
            {NAV_IDS.map((id, index) => (
              <li key={id} style={{ '--i': index }}>
                <a href={`#${id}`} onClick={close}>
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <div className="s-menu__foot">
            <LangSwitch size="lg" />
            <a href={`mailto:${CONTACT_EMAIL}`} className="s-menu__mail">
              {CONTACT_EMAIL}
            </a>
            <a href="#contacto" onClick={close} className="s-btn s-btn--primary">
              {t.common.talk} <Arrow />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
