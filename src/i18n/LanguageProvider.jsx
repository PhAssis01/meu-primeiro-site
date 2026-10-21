import { useCallback, useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './context'
import { LANGUAGES, STORAGE_KEY, isLang, readStoredLang } from './languages'

// Guarda el idioma elegido (localStorage) y lo aplica al documento:
// <html lang> y og:locale. Título y descripción los pone cada página (usePageMeta).
export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang)

  const setLang = useCallback((next) => {
    if (!isLang(next)) return
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* sin almacenamiento: el idioma se mantiene solo durante la visita */
    }
  }, [])

  useEffect(() => {
    const language = LANGUAGES.find((item) => item.code === lang)
    document.documentElement.lang = language.html
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language.og)
  }, [lang])

  // Mantiene el mismo idioma si se cambia en otra pestaña.
  useEffect(() => {
    const onStorage = (event) => {
      if (event.key === STORAGE_KEY && isLang(event.newValue)) setLangState(event.newValue)
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
