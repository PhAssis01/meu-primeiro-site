import { CONTACT_EMAIL, NAV_IDS } from '../data'
import { useStudioCopy } from '../copy'
import Logo from './Logo'

export default function Footer() {
  const t = useStudioCopy()

  return (
    <footer className="s-footer">
      <div className="s-container s-footer__inner">
        <a href="#inicio" className="s-logo" aria-label={t.common.logoTop}>
          <Logo />
        </a>
        <nav className="s-footer__links" aria-label={t.common.footerNav}>
          {NAV_IDS.map((id) => (
            <a key={id} href={`#${id}`}>
              {t.nav[id]}
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
