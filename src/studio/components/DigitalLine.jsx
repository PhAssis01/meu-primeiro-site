// Línea digital del hero: atraviesa el título (la idea), pasa por el
// smartphone (diseño y desarrollo) y entra en el portátil (la web publicada).
// Coordenadas en un lienzo de 1000×600 que se estira sobre el hero.
// Un pulso de luz recorre el trazo lentamente.
const PATH =
  'M -20 348 C 120 348, 260 312, 400 324 S 520 398, 580 450 S 650 512, 712 500 S 792 468, 812 430'

export default function DigitalLine() {
  return (
    <svg
      className="s-line"
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="s-line-fade" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="0.25" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="0.8" stopColor="#d9d9d9" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <path className="s-line__base" d={PATH} stroke="url(#s-line-fade)" />
      <path className="s-line__pulse" d={PATH} />
    </svg>
  )
}
