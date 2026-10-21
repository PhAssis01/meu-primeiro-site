import { createContext, useContext } from 'react'
import { DEFAULT_LANG } from './languages'

export const LanguageContext = createContext({ lang: DEFAULT_LANG, setLang: () => {} })

// Idioma activo y función para cambiarlo.
export function useLang() {
  return useContext(LanguageContext)
}

// Devuelve los textos del idioma activo a partir de un objeto { es, en, 'pt-BR' }.
// Si faltara un idioma, se usa el español.
export function useCopy(copy) {
  const { lang } = useLang()
  return copy[lang] ?? copy[DEFAULT_LANG]
}
