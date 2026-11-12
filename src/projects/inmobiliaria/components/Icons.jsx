// Iconos de línea propios (sin librerías ni marcas).
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const BedIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M3 18V7M21 18v-5a3 3 0 0 0-3-3h-8v6M3 15h18" />
    <circle cx="6.5" cy="12" r="1.6" />
  </svg>
)

export const BathIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2ZM6 12V6a2 2 0 0 1 3.6-1.2M7 19l-1 2M17 19l1 2" />
  </svg>
)

export const AreaIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
  </svg>
)

export const PinIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

export const ArrowIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ChevronIcon = ({ direction = 'right', ...props }) => (
  <svg {...base} {...props}>
    <path d={direction === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
  </svg>
)

export const CheckIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

export const SearchIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M20 20l-4.2-4.2" />
  </svg>
)

// Iconos de la sección «Por qué» (información, calendario, persona, mapa).
export const WhyIcons = [
  (props) => (
    <svg {...base} {...props}>
      <rect x="4" y="3.5" width="16" height="17" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  ),
  (props) => (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4M8.5 14.5l2 2 4-4" />
    </svg>
  ),
  (props) => (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  ),
  (props) => (
    <svg {...base} {...props}>
      <path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4ZM9 4v14M15 6v14" />
    </svg>
  ),
]
