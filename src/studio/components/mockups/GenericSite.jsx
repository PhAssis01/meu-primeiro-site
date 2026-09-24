// Interfaz genérica de un website moderno (sin marcas ni clientes).
// Se usa en los dispositivos del hero para representar lo que construimos.
// Escala con el contenedor gracias a las unidades cqw.

function Chart() {
  return (
    <svg viewBox="0 0 120 48" className="gs__chart" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="gs-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 40 C 14 38, 20 30, 32 31 S 52 20, 64 22 S 86 10, 98 12 S 114 6, 120 4 V48 H0 Z" fill="url(#gs-fill)" />
      <path
        className="gs__chart-line"
        d="M0 40 C 14 38, 20 30, 32 31 S 52 20, 64 22 S 86 10, 98 12 S 114 6, 120 4"
        fill="none"
        stroke="#d9d9d9"
        strokeWidth="1.4"
        vectorEffect="non-scaling-stroke"
        pathLength="1"
      />
    </svg>
  )
}

function Cursor() {
  return (
    <svg viewBox="0 0 16 20" className="gs__cursor" aria-hidden="true">
      <path d="M1 1v15l4-4 3 7 3-1.4-3-6.6h6z" fill="#f4f4f4" stroke="#0a0a0a" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  )
}

export default function GenericSite({ variant = 'desktop' }) {
  if (variant === 'mobile') {
    return (
      <div className="gs gs--mobile">
        <div className="gs__nav">
          <span className="gs__brand"><i />Studio</span>
          <span className="gs__burger"><i /><i /></span>
        </div>
        <div className="gs__body">
          <span className="gs__pill gs-in" style={{ '--d': '0.5s' }} />
          <b className="gs__h gs-in" style={{ '--d': '0.6s' }}>Tu negocio, en su mejor versión.</b>
          <span className="gs__line gs-in" style={{ '--d': '0.7s' }} />
          <span className="gs__line gs__line--short gs-in" style={{ '--d': '0.75s' }} />
          <span className="gs__btn gs-in" style={{ '--d': '0.85s' }} />
          <div className="gs__card gs-in" style={{ '--d': '1s' }}>
            <span className="gs__label" />
            <Chart />
          </div>
          <div className="gs__tiles gs-in" style={{ '--d': '1.15s' }}>
            <i /><i />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="gs">
      <div className="gs__nav">
        <span className="gs__brand"><i />Studio</span>
        <span className="gs__links"><i /><i /><i /><i /></span>
        <span className="gs__cta" />
      </div>

      <div className="gs__hero">
        <div className="gs__copy">
          <span className="gs__pill gs-in" style={{ '--d': '0.4s' }} />
          <b className="gs__h gs-in" style={{ '--d': '0.5s' }}>Tu negocio, en su mejor versión.</b>
          <span className="gs__line gs-in" style={{ '--d': '0.6s' }} />
          <span className="gs__line gs__line--short gs-in" style={{ '--d': '0.65s' }} />
          <span className="gs__actions gs-in" style={{ '--d': '0.75s' }}>
            <span className="gs__btn" />
            <span className="gs__btn gs__btn--ghost" />
            <Cursor />
          </span>
        </div>

        <div className="gs__panel gs-in" style={{ '--d': '0.9s' }}>
          <div className="gs__panel-head">
            <span className="gs__label" />
            <span className="gs__ring" />
          </div>
          <Chart />
          <div className="gs__bars">
            <i style={{ '--h': '38%' }} />
            <i style={{ '--h': '62%' }} />
            <i style={{ '--h': '48%' }} />
            <i style={{ '--h': '80%' }} />
            <i style={{ '--h': '66%' }} />
          </div>
        </div>
      </div>

      <div className="gs__features">
        {[0, 1, 2].map((item) => (
          <div key={item} className="gs__feature gs-in" style={{ '--d': `${1.05 + item * 0.1}s` }}>
            <i className="gs__icon" />
            <span className="gs__line" />
            <span className="gs__line gs__line--short" />
          </div>
        ))}
      </div>
    </div>
  )
}
