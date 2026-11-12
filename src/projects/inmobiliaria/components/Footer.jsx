import Link from '../../../router/Link'
import LegalLinks from '../../../studio/legal/LegalLinks'
import { useEstateCopy } from '../copy'
import { LogoPlaceholder } from './Header'

export default function Footer() {
  const t = useEstateCopy()

  return (
    <footer className="re-footer">
      <div className="re-wrap">
        <div className="re-footer__top">
          <LogoPlaceholder />
          <p className="re-footer__text">{t.footer.text}</p>
        </div>
        <div className="re-footer__bar">
          <p>{t.footer.credits}</p>
          {/* Información legal de PH Web Studio (titular de este sitio, no de una agencia ficticia) */}
          <LegalLinks className="re-footer__legal" />
          <Link to="/" className="re-footer__back">
            ← {t.footer.back}
          </Link>
        </div>
      </div>
    </footer>
  )
}
