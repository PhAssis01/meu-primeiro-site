import { usePageMeta } from '../lib/hooks'
import Link from '../router/Link'
import { useStudioCopy } from './copy'
import './studio.css'

export default function NotFound() {
  const t = useStudioCopy()
  usePageMeta(t.meta.notFoundTitle, 'studio')

  return (
    <main className="studio s-404">
      <div className="s-container">
        <p className="s-404__code">404</p>
        <h1 className="s-h2">{t.notFound.title}</h1>
        <p className="s-body">{t.notFound.text}</p>
        <Link to="/" className="s-btn s-btn--primary">
          {t.notFound.back}
        </Link>
      </div>
    </main>
  )
}
