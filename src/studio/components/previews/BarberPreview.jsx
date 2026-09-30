// Miniatura de la demo para barberías (plantilla genérica, sin marcas reales).
// Escala con el contenedor gracias a las unidades cqw.

function Scissors({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="35" r="6" />
      <circle cx="36" cy="35" r="6" />
      <path d="M16.5 31 34 6M31.5 31 14 6" />
    </svg>
  )
}

export default function BarberPreview({ variant = 'desktop' }) {
  const mobile = variant === 'mobile'

  return (
    <div className={`bp${mobile ? ' bp--mobile' : ''}`}>
      <div className="bp__nav">
        <span className="bp__logo">
          <Scissors className="bp__logo-icon" />
          <span>Tu logo</span>
        </span>
        {mobile ? (
          <span className="bp__burger">
            <i />
            <i />
          </span>
        ) : (
          <>
            <span className="bp__links">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span className="bp__cta">Reservar cita</span>
          </>
        )}
      </div>

      <div className="bp__hero">
        <div className="bp__text">
          <span className="bp__kicker">Nombre de tu barbería</span>
          <b>Estilo.</b>
          <b>Precisión.</b>
          <b>Carácter.</b>
          <span className="bp__p" />
          <span className="bp__p bp__p--short" />
          <span className="bp__actions">
            <i className="bp__btn" />
            <i className="bp__btn bp__btn--ghost" />
          </span>
        </div>
        <div className="bp__photo">
          <Scissors className="bp__photo-icon" />
          <span className="bp__photo-name">Nombre de tu barbería</span>
        </div>
      </div>
    </div>
  )
}
