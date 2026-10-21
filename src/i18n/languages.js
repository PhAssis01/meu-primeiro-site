// Idiomas del sitio. El primero es el idioma por defecto (español).
// `code`: clave de los textos · `short`: lo que muestra el selector ·
// `html`: atributo lang del documento · `og`: og:locale.
export const LANGUAGES = [
  { code: 'es', short: 'ES', name: 'Español', html: 'es', og: 'es_ES' },
  { code: 'en', short: 'EN', name: 'English', html: 'en', og: 'en_US' },
  { code: 'pt-BR', short: 'PT-BR', name: 'Português (Brasil)', html: 'pt-BR', og: 'pt_BR' },
]

export const DEFAULT_LANG = LANGUAGES[0].code

export const STORAGE_KEY = 'ph-lang'

export const isLang = (value) => LANGUAGES.some((language) => language.code === value)

// Preferencia guardada; si no hay (o no se puede leer), español.
export function readStoredLang() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return isLang(stored) ? stored : DEFAULT_LANG
  } catch {
    return DEFAULT_LANG
  }
}
