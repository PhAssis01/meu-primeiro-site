import { useEffect, useId, useRef, useState } from 'react'
import { useCopy, useLang } from './context'
import { LANGUAGES } from './languages'
import './lang-switch.css'

const LABEL = {
  es: 'Idioma',
  en: 'Language',
  'pt-BR': 'Idioma',
}

// Selector de idioma (ES · EN · PT-BR). Hereda el color del contexto
// (estudio o demo), así que encaja en ambas identidades sin colores propios.
export default function LangSwitch({ className = '', size }) {
  const { lang, setLang } = useLang()
  const label = useCopy(LABEL)

  return (
    <div
      className={`lang-switch${size ? ` lang-switch--${size}` : ''} ${className}`.trim()}
      role="group"
      aria-label={label}
    >
      {LANGUAGES.map((language) => {
        const active = language.code === lang
        return (
          <button
            key={language.code}
            type="button"
            lang={language.html}
            className={`lang-switch__btn${active ? ' is-active' : ''}`}
            aria-pressed={active}
            title={language.name}
            onClick={() => setLang(language.code)}
          >
            <span aria-hidden="true">{language.short}</span>
            <span className="visually-hidden">{language.name}</span>
          </button>
        )
      })}
    </div>
  )
}

// Variante compacta para cabeceras estrechas: muestra el idioma activo
// y despliega la lista completa al pulsar.
export function LangMenu({ className = '' }) {
  const { lang, setLang } = useLang()
  const label = useCopy(LABEL)
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const toggleRef = useRef(null)
  const listId = useId()
  const current = LANGUAGES.find((language) => language.code === lang)

  useEffect(() => {
    if (!open) return undefined
    const onPointer = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className={`lang-menu${open ? ' is-open' : ''} ${className}`.trim()} ref={rootRef}>
      <button
        type="button"
        ref={toggleRef}
        className="lang-menu__toggle"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${label}: ${current.name}`}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true">{current.short}</span>
        <svg className="lang-menu__chevron" viewBox="0 0 10 6" aria-hidden="true">
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <ul id={listId} className="lang-menu__list" hidden={!open} aria-label={label}>
        {LANGUAGES.map((language) => {
          const active = language.code === lang
          return (
            <li key={language.code}>
              <button
                type="button"
                lang={language.html}
                className={`lang-menu__item${active ? ' is-active' : ''}`}
                aria-pressed={active}
                onClick={() => {
                  setLang(language.code)
                  setOpen(false)
                  toggleRef.current?.focus()
                }}
              >
                <span className="lang-menu__code" aria-hidden="true">
                  {language.short}
                </span>
                <span>{language.name}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
