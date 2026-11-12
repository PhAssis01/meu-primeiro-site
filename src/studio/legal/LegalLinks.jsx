import { useCopy } from '../../i18n/context'
import Link from '../../router/Link'
import { LEGAL_ROUTES } from '../data'
import { LEGAL_COPY } from './content'

// Enlaces a Aviso legal · Privacidad · Cookies (pie de página de todas las páginas).
// `current`: página legal activa (marca aria-current).
export default function LegalLinks({ className, current }) {
  const t = useCopy(LEGAL_COPY).ui
  return (
    <nav className={className} aria-label={t.nav}>
      {Object.entries(LEGAL_ROUTES).map(([key, to]) => (
        <Link key={key} to={to} aria-current={current === key ? 'page' : undefined}>
          {t.links[key]}
        </Link>
      ))}
    </nav>
  )
}
