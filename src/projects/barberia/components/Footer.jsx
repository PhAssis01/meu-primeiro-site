import Link from '../../../router/Link'
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
          <Link to="/" className="bb-footer__back">
            ← {t.backPortfolio}
          </Link>
        </div>
      </div>
    </footer>
  )
}
