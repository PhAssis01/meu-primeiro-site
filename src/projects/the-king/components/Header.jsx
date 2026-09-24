import { useCallback, useState } from 'react'
import { DEMO_LABEL, IMAGES, NAV_LINKS } from '../data'
import { useMenuBehavior, useScrolled } from '../../../lib/hooks'
import Link from '../../../router/Link'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  const scrolled = useScrolled(40)
  useMenuBehavior(open, close)

  return (
    <header className={`k-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="k-demo">
        <div className="k-wrap k-demo__inner">
          <span className="k-demo__long">{DEMO_LABEL}</span>
          <span className="k-demo__short">Proyecto conceptual</span>
          <Link to="/" className="k-demo__back">
            ← PH Web Studio
          </Link>
        </div>
      </div>

      <div className="k-wrap k-nav">
        <a href="#inicio" className="k-logo" onClick={close}>
          <img src={IMAGES.logo.src} alt="The King Barber Shop — inicio" width="112" height="107" />
        </a>

        <nav className="k-nav__links" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#reservas" className="k-btn k-btn--gold k-nav__cta">
          Reservar cita
        </a>

        <button
          type="button"
          className="k-burger"
          aria-expanded={open}
          aria-controls="k-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="k-menu" className="k-menu" inert={!open} aria-hidden={!open}>
        <nav className="k-wrap k-menu__inner" aria-label="Menú móvil">
          <ul>
            {NAV_LINKS.map((link, index) => (
              <li key={link.id} style={{ '--i': index }}>
                <a href={`#${link.id}`} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#reservas" onClick={close} className="k-btn k-btn--gold k-btn--block">
            Reservar cita
          </a>
        </nav>
      </div>
    </header>
  )
}
