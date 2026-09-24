import Link from '../../../router/Link'
import { DEMO_LABEL, IMAGES } from '../data'

export default function Footer() {
  return (
    <footer className="k-footer">
      <div className="k-wrap">
        <div className="k-footer__brand">
          <img src={IMAGES.logo.src} alt={IMAGES.logo.alt} width="336" height="321" loading="lazy" />
        </div>
        <div className="k-footer__bar">
          <p>{DEMO_LABEL}</p>
          <Link to="/" className="k-footer__back">
            ← Volver al portfolio
          </Link>
        </div>
      </div>
    </footer>
  )
}
