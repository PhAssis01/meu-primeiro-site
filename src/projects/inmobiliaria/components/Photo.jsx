// Fotos de demostración servidas desde el propio dominio (./img, WebP en 800 y 1600 px).
// El navegador elige el tamaño según `sizes`, así que en móvil solo baja la versión ligera.
const FILES = import.meta.glob('../img/*.webp', { eager: true, query: '?url', import: 'default' })

const file = (name, width) => FILES[`../img/${name}-${width}.webp`]

export function photoSources(name) {
  const small = file(name, 800)
  const large = file(name, 1600)
  const extra = file(name, 2400)
  const srcSet = [`${small} 800w`, `${large} 1600w`, extra ? `${extra} 2400w` : null].filter(Boolean).join(', ')
  return { src: small, srcSet }
}

export default function Photo({ name, alt = '', sizes = '100vw', priority = false, className = '', ...rest }) {
  const { src, srcSet } = photoSources(name)
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width="1600"
      height="1067"
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : undefined}
      className={className}
      {...rest}
    />
  )
}
