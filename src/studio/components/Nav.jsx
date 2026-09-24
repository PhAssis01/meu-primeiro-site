import { useCallback, useState } from 'react'
import { NAV_LINKS, CONTACT_EMAIL } from '../data'
import { useActiveSection, useMenuBehavior, useScrolled } from '../../lib/hooks'
import Logo from './Logo'
import Arrow from './Arrow'

const SECTION_IDS = NAV_LINKS.map((link) => link.id)

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  const scrolled = useScrolled()
  const active = useActiveSection(SECTION_IDS)
  useMenuBehavior(open, close)

  return (
    <header
      className={`s-nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}
    >
      <div className="s-container s-nav__inner">
        <a href="#inicio" className="s-logo" onClick={close} aria-label="PH Web Studio — inicio">
          <Logo />
        </a>

        <nav className="s-nav__links" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'is-active' : undefined}
              aria-current={active === link.id ? 'location' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="s-btn s-btn--primary s-btn--sm s-nav__cta">
          Hablemos <Arrow />
        </a>

        <button
          type="button"
          className="s-burger"
          aria-expanded={open}
          aria-controls="s-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="s-menu" className="s-menu" inert={!open} aria-hidden={!open}>
        <nav className="s-container s-menu__inner" aria-label="Menú móvil">
          <ul className="s-menu__list">
            {NAV_LINKS.map((link, index) => (
              <li key={link.id} style={{ '--i': index }}>
                <a href={`#${link.id}`} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="s-menu__foot">
            <a href={`mailto:${CONTACT_EMAIL}`} className="s-menu__mail">
              {CONTACT_EMAIL}
            </a>
            <a href="#contacto" onClick={close} className="s-btn s-btn--primary">
              Hablemos <Arrow />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
