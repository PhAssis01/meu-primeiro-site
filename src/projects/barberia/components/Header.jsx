import { useCallback, useState } from 'react'
import { BRAND_PLACEHOLDER, DEMO_LABEL, NAV_LINKS } from '../data'
import { ScissorsIcon } from './Placeholder'
import { useMenuBehavior, useScrolled } from '../../../lib/hooks'
import Link from '../../../router/Link'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  const scrolled = useScrolled(40)
  useMenuBehavior(open, close)

  return (
    <header className={`bb-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="bb-demo">
        <div className="bb-wrap bb-demo__inner">
          <span className="bb-demo__long">{DEMO_LABEL}</span>
          <span className="bb-demo__short">Demo para barberías</span>
          <Link to="/" className="bb-demo__back">
            ← PH Web Studio
          </Link>
        </div>
      </div>

      <div className="bb-wrap bb-nav">
        <a href="#inicio" className="bb-logo" onClick={close} aria-label={`${BRAND_PLACEHOLDER} — inicio`}>
          <ScissorsIcon className="bb-logo__icon" />
          <span className="bb-logo__name">{BRAND_PLACEHOLDER}</span>
        </a>

        <nav className="bb-nav__links" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#reservas" className="bb-btn bb-btn--gold bb-nav__cta">
          Reservar cita
        </a>

        <button
          type="button"
          className="bb-burger"
          aria-expanded={open}
          aria-controls="bb-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="bb-menu" className="bb-menu" inert={!open} aria-hidden={!open}>
        <nav className="bb-wrap bb-menu__inner" aria-label="Menú móvil">
          <ul>
            {NAV_LINKS.map((link, index) => (
              <li key={link.id} style={{ '--i': index }}>
                <a href={`#${link.id}`} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#reservas" onClick={close} className="bb-btn bb-btn--gold bb-btn--block">
            Reservar cita
          </a>
        </nav>
      </div>
    </header>
  )
}
