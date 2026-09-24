import { usePageMeta } from '../lib/hooks'
import Link from '../router/Link'
import './studio.css'

export default function NotFound() {
  usePageMeta('Página no encontrada — PH Web Studio', 'studio')

  return (
    <main className="studio s-404">
      <div className="s-container">
        <p className="s-404__code">404</p>
        <h1 className="s-h2">Esta página no existe.</h1>
        <p className="s-body">Puede que el enlace haya cambiado.</p>
        <Link to="/" className="s-btn s-btn--primary">
          Volver a PH Web Studio
        </Link>
      </div>
    </main>
  )
}
