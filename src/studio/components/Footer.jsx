import { CONTACT_EMAIL, NAV_LINKS } from '../data'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="s-footer">
      <div className="s-container s-footer__inner">
        <a href="#inicio" className="s-logo" aria-label="PH Web Studio — volver arriba">
          <Logo />
        </a>
        <nav className="s-footer__links" aria-label="Pie de página">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
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
