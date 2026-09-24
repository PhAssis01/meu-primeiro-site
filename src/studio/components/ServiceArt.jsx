// Pequeñas ilustraciones abstractas de cada servicio (línea fina + un acento blanco).
const LINE = { fill: 'none', stroke: 'currentColor', strokeWidth: 1, vectorEffect: 'non-scaling-stroke' }

const ART = {
  // Diseño web: rejilla de maquetación con un bloque destacado
  design: (
    <>
      <rect x="1" y="1" width="158" height="94" rx="6" {...LINE} />
      <path d="M1 16h158" {...LINE} />
      <rect x="12" y="28" width="62" height="8" rx="2" className="sa-soft" />
      <rect x="12" y="42" width="44" height="5" rx="2" className="sa-soft" />
      <rect x="12" y="62" width="30" height="12" rx="3" className="sa-accent" />
      <rect x="88" y="26" width="60" height="58" rx="4" {...LINE} />
      <path d="M88 26l60 58M148 26l-60 58" {...LINE} className="sa-faint" />
    </>
  ),
  // Desarrollo web: líneas de código abstractas
  code: (
    <>
      <rect x="1" y="1" width="158" height="94" rx="6" {...LINE} />
      <rect x="12" y="16" width="40" height="5" rx="2" className="sa-accent" />
      <rect x="58" y="16" width="30" height="5" rx="2" className="sa-soft" />
      <rect x="24" y="30" width="56" height="5" rx="2" className="sa-soft" />
      <rect x="24" y="44" width="36" height="5" rx="2" className="sa-soft" />
      <rect x="66" y="44" width="44" height="5" rx="2" className="sa-accent sa-dim" />
      <rect x="36" y="58" width="48" height="5" rx="2" className="sa-soft" />
      <rect x="24" y="72" width="28" height="5" rx="2" className="sa-soft" />
      <rect x="12" y="84" width="18" height="5" rx="2" className="sa-accent" />
      <rect x="138" y="28" width="1.5" height="12" className="sa-caret" />
    </>
  ),
  // Landing pages: un único objetivo, un botón y el cursor
  target: (
    <>
      <rect x="1" y="1" width="158" height="94" rx="6" {...LINE} />
      <rect x="40" y="22" width="80" height="8" rx="2" className="sa-soft" />
      <rect x="54" y="36" width="52" height="5" rx="2" className="sa-soft" />
      <rect x="56" y="52" width="48" height="16" rx="4" className="sa-accent" />
      <path d="M96 60v14l3.6-3.6 2.6 6 2.6-1.2-2.6-5.8h5z" className="sa-cursor" />
    </>
  ),
  // Optimización móvil: escritorio y móvil con el mismo contenido
  mobile: (
    <>
      <rect x="1" y="8" width="104" height="72" rx="5" {...LINE} />
      <rect x="12" y="20" width="44" height="6" rx="2" className="sa-soft" />
      <rect x="12" y="32" width="30" height="4" rx="2" className="sa-soft" />
      <rect x="12" y="46" width="20" height="8" rx="2" className="sa-accent" />
      <rect x="66" y="20" width="28" height="48" rx="3" {...LINE} className="sa-faint" />
      <rect x="116" y="2" width="42" height="92" rx="8" {...LINE} />
      <rect x="124" y="18" width="26" height="5" rx="2" className="sa-soft" />
      <rect x="124" y="28" width="18" height="4" rx="2" className="sa-soft" />
      <rect x="124" y="40" width="16" height="7" rx="2" className="sa-accent" />
      <rect x="124" y="54" width="26" height="28" rx="3" {...LINE} className="sa-faint" />
    </>
  ),
  // Presencia digital: búsqueda y primer resultado
  globe: (
    <>
      <rect x="1" y="6" width="158" height="18" rx="9" {...LINE} />
      <circle cx="14" cy="15" r="4" {...LINE} />
      <rect x="24" y="13" width="54" height="4" rx="2" className="sa-soft" />
      <rect x="1" y="36" width="4" height="22" rx="2" className="sa-accent" />
      <rect x="12" y="38" width="70" height="6" rx="2" className="sa-accent sa-dim" />
      <rect x="12" y="50" width="110" height="4" rx="2" className="sa-soft" />
      <rect x="12" y="70" width="58" height="6" rx="2" className="sa-soft" />
      <rect x="12" y="82" width="96" height="4" rx="2" className="sa-soft sa-dim" />
    </>
  ),
}

export default function ServiceArt({ name }) {
  return (
    <svg viewBox="0 0 160 96" className="s-art" aria-hidden="true">
      {ART[name]}
    </svg>
  )
}
