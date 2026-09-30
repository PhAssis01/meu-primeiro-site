import { BRAND_PLACEHOLDER } from '../data'

// Icono genérico de barbería (tijeras), dibujado a mano, sin marcas.
export function ScissorsIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="35" r="6" />
      <circle cx="36" cy="35" r="6" />
      <path d="M16.5 31 34 6M31.5 31 14 6" />
      <circle cx="24" cy="19.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

// Espacio reservado donde irá una fotografía del cliente.
// Muestra "Nombre de tu barbería" para dejar claro que es una plantilla.
export function PhotoPlaceholder({ hint, className = '' }) {
  return (
    <div
      className={`bb-ph ${className}`.trim()}
      role="img"
      aria-label={`Espacio para una foto de tu barbería${hint ? `: ${hint.toLowerCase()}` : ''}`}
    >
      <ScissorsIcon className="bb-ph__icon" />
      <span className="bb-ph__name">{BRAND_PLACEHOLDER}</span>
      {hint ? <span className="bb-ph__hint">{hint}</span> : null}
    </div>
  )
}

// Espacio reservado para el logotipo del cliente.
export function LogoPlaceholder({ className = '' }) {
  return (
    <span className={`bb-emblem ${className}`.trim()} aria-hidden="true">
      <ScissorsIcon className="bb-emblem__icon" />
      <span className="bb-emblem__text">Tu logo</span>
    </span>
  )
}
