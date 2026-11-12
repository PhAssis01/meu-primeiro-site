import { useRef, useState } from 'react'
import { useEstateCopy } from '../copy'
import Photo from './Photo'
import { ChevronIcon } from './Icons'

// Galería: foto grande + miniaturas. Flechas, teclado (← →) y deslizamiento en móvil.
export default function Gallery({ images, title }) {
  const t = useEstateCopy()
  const g = t.detail.gallery
  const [index, setIndex] = useState(0)
  const startX = useRef(null)
  const count = images.length
  const go = (step) => setIndex((current) => (current + step + count) % count)

  const onKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      go(-1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      go(1)
    }
  }

  const onPointerDown = (event) => {
    if (event.pointerType !== 'mouse') startX.current = event.clientX
  }
  const onPointerUp = (event) => {
    if (startX.current === null) return
    const delta = event.clientX - startX.current
    startX.current = null
    if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1)
  }

  return (
    <section className="re-gallery" aria-roledescription="carousel" aria-label={g.label}>
      <div
        className="re-gallery__stage"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (startX.current = null)}
      >
        {images.map((name, i) => (
          <Photo
            key={name}
            name={name}
            alt={`${t.card.photoAlt(title)} — ${g.counter(i + 1, count)}`}
            sizes="(max-width: 960px) 100vw, 64vw"
            priority={i === 0}
            className={`re-gallery__img${i === index ? ' is-active' : ''}`}
            aria-hidden={i !== index}
          />
        ))}
        <button type="button" className="re-gallery__arrow re-gallery__arrow--prev" onClick={() => go(-1)} aria-label={g.prev}>
          <ChevronIcon direction="left" />
        </button>
        <button type="button" className="re-gallery__arrow re-gallery__arrow--next" onClick={() => go(1)} aria-label={g.next}>
          <ChevronIcon />
        </button>
        <span className="re-gallery__counter" aria-live="polite">
          {g.counter(index + 1, count)}
        </span>
      </div>

      <ul className="re-gallery__thumbs">
        {images.map((name, i) => (
          <li key={name}>
            <button
              type="button"
              className={`re-gallery__thumb${i === index ? ' is-active' : ''}`}
              aria-label={g.thumb(i + 1)}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
            >
              <Photo name={name} sizes="120px" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
