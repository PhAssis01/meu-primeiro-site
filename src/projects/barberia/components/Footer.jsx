import Link from '../../../router/Link'
import LegalLinks from '../../../studio/legal/LegalLinks'
import { useBarberCopy } from '../copy'
import { ScissorsIcon } from './Placeholder'

export default function Footer() {
  const t = useBarberCopy()

  return (
    <footer className="bb-footer">
      <div className="bb-wrap">
        <div className="bb-footer__brand">
          <ScissorsIcon className="bb-footer__icon" />
          <span className="bb-footer__name">{t.brand}</span>
        </div>
        <div className="bb-footer__bar">
          <p>{t.demoLabel}</p>
          {/* Información legal de PH Web Studio (titular de este sitio, no de la barbería ficticia) */}
          <LegalLinks className="bb-footer__legal" />
          <Link to="/" className="bb-footer__back">
            ← {t.backPortfolio}
          </Link>
        </div>
      </div>
    </footer>
  )
}
