import { useCallback, useState } from 'react'
import { NAV_IDS } from '../data'
import { useBarberCopy } from '../copy'
import { ScissorsIcon } from './Placeholder'
import { useMenuBehavior, useScrolled } from '../../../lib/hooks'
import LangSwitch from '../../../i18n/LangSwitch'
import Link from '../../../router/Link'

export default function Header() {
  const t = useBarberCopy()
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  const scrolled = useScrolled(40)
  useMenuBehavior(open, close)

  return (
    <header className={`bb-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="bb-demo">
        <div className="bb-wrap bb-demo__inner">
          <span className="bb-demo__long">{t.demoLabel}</span>
          <span className="bb-demo__short">{t.demoShort}</span>
          <div className="bb-demo__end">
            <LangSwitch size="sm" className="bb-demo__lang" />
            <Link to="/" className="bb-demo__back">
              ← PH Web Studio
            </Link>
          </div>
        </div>
      </div>

      <div className="bb-wrap bb-nav">
        <a href="#inicio" className="bb-logo" onClick={close} aria-label={`${t.brand} — ${t.common.home}`}>
          <ScissorsIcon className="bb-logo__icon" />
          <span className="bb-logo__name">{t.brand}</span>
        </a>

        <nav className="bb-nav__links" aria-label={t.common.mainNav}>
          {NAV_IDS.map((id) => (
            <a key={id} href={`#${id}`}>
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <a href="#reservas" className="bb-btn bb-btn--gold bb-nav__cta">
          {t.book}
        </a>

        <button
          type="button"
          className="bb-burger"
          aria-expanded={open}
          aria-controls="bb-menu"
          aria-label={open ? t.common.closeMenu : t.common.openMenu}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="bb-menu" className="bb-menu" inert={!open} aria-hidden={!open}>
        <nav className="bb-wrap bb-menu__inner" aria-label={t.common.mobileNav}>
          <ul>
            {NAV_IDS.map((id, index) => (
              <li key={id} style={{ '--i': index }}>
                <a href={`#${id}`} onClick={close}>
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <div className="bb-menu__foot">
            <LangSwitch size="lg" />
            <a href="#reservas" onClick={close} className="bb-btn bb-btn--gold bb-btn--block">
              {t.book}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
