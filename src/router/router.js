// Enrutador mínimo basado en la History API (sin dependencias).
// Suficiente para un portfolio con pocas páginas.
import { useEffect, useState } from 'react'

function normalize(pathname) {
  return pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
}

export function navigate(to) {
  window.history.pushState({}, '', to)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export function usePathname() {
  const [pathname, setPathname] = useState(() =>
    normalize(window.location.pathname),
  )

  useEffect(() => {
    const onChange = () => setPathname(normalize(window.location.pathname))
    window.addEventListener('popstate', onChange)
    return () => window.removeEventListener('popstate', onChange)
  }, [])

  return pathname
}
