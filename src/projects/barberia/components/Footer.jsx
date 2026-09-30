import Link from '../../../router/Link'
import { BRAND_PLACEHOLDER, DEMO_LABEL } from '../data'
import { ScissorsIcon } from './Placeholder'

export default function Footer() {
  return (
    <footer className="bb-footer">
      <div className="bb-wrap">
        <div className="bb-footer__brand">
          <ScissorsIcon className="bb-footer__icon" />
          <span className="bb-footer__name">{BRAND_PLACEHOLDER}</span>
        </div>
        <div className="bb-footer__bar">
          <p>{DEMO_LABEL}</p>
          <Link to="/" className="bb-footer__back">
            ← Volver al portfolio
          </Link>
        </div>
      </div>
    </footer>
  )
}
