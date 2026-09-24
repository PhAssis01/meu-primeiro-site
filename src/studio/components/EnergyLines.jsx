// Líneas de energía de la Home: trazos finos tipo circuito, en el azul de la
// marca, con pequeñas partículas de luz que los recorren.
//
// - Un solo <canvas> fijo detrás de todo el contenido (z-index -1 dentro de
//   .s-home): las tarjetas y los fondos de sección lo tapan, así que las
//   líneas solo se ven en zonas vacías y nunca por encima del texto.
// - Las líneas viven en coordenadas de la página: se desplazan con el scroll.
//   Hay tres capas de profundidad (parallax) y trazos anclados al margen
//   superior vacío de cada sección.
// - Al bajar, los trazos se "dibujan" y las partículas avanzan más deprisa;
//   al subir, los trazos se recogen y las partículas retroceden.
// - prefers-reduced-motion: trazos estáticos, sin partículas ni parallax.
import { useEffect, useRef } from 'react'
import './energy-lines.css'

const BLUE = '59, 130, 246' // --blue
const LIGHT = '147, 197, 253'
const CONTENT_MAX = 1240 // --max en studio.css

// Capas de profundidad: factor de desplazamiento, intensidad y grosor.
const LAYERS = [
  { factor: 0.82, alpha: 0.5, width: 1 },
  { factor: 1, alpha: 0.8, width: 1 },
  { factor: 1.12, alpha: 1, width: 1.15 },
]

const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v))
const smooth = (t) => t * t * (3 - 2 * t)

// Generador pseudoaleatorio con semilla: el dibujo es siempre el mismo.
function random(seed) {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

function makeTrace(points, extra) {
  const segs = []
  let total = 0
  for (let i = 1; i < points.length; i += 1) {
    const a = points[i - 1]
    const b = points[i]
    const len = Math.hypot(b.x - a.x, b.y - a.y)
    segs.push({ a, b, len, start: total })
    total += len
  }
  const ys = points.map((p) => p.y)
  return { points, segs, total, minY: Math.min(...ys), maxY: Math.max(...ys), ...extra }
}

function pointAt(trace, d) {
  for (const seg of trace.segs) {
    if (d <= seg.start + seg.len) {
      const t = seg.len ? (d - seg.start) / seg.len : 0
      return { x: seg.a.x + (seg.b.x - seg.a.x) * t, y: seg.a.y + (seg.b.y - seg.a.y) * t }
    }
  }
  return trace.points[trace.points.length - 1]
}

// Construye todos los trazos a partir de las medidas reales de la página.
function generate({ width, height, docHeight, bands, mobile }) {
  const rand = random(20260924)
  const r = (a, b) => a + rand() * (b - a)
  const traces = []

  // Zona libre a cada lado: desde el borde hasta donde empieza el texto.
  const gutter = clamp(width * 0.05, 20, 64)
  const container = Math.min(width, CONTENT_MAX + gutter * 2)
  const zone = (width - container) / 2 + gutter - 14

  const withParticle = (odds) => (rand() < odds ? { d: r(0, 1), speed: r(22, 38) } : null)

  // 1) Trazos laterales en tres capas de profundidad.
  LAYERS.forEach((layer, li) => {
    const span = docHeight * layer.factor + height
    let y = height * r(0.25, 0.6) + li * 140
    let left = li % 2 === 0

    while (y < span - 120) {
      const edge = left ? -4 : width + 4
      const inner = (v) => (left ? v : width - v)

      if (zone >= 28) {
        const xa = zone * r(0.2, 0.5)
        const xb = Math.min(zone - 2, xa + zone * r(0.2, 0.45))
        const jog = xb - xa
        const run = r(140, 380)
        const pts = [
          { x: edge, y },
          { x: inner(xa), y },
          { x: inner(xb), y: y + jog },
          { x: inner(xb), y: y + jog + run },
        ]
        if (rand() < 0.5) {
          pts.push({ x: inner(xa), y: y + jog * 2 + run })
          pts.push({ x: inner(xa), y: y + jog * 2 + run + r(60, 160) })
        }
        traces.push(
          makeTrace(pts, {
            layer,
            band: false,
            drift: rand() < 0.4 ? { amp: r(3, 7), phase: r(0, 6) } : null,
            particle: withParticle(mobile ? 0.35 : 0.6),
          }),
        )
      } else {
        // Móvil: el margen es muy estrecho, solo líneas verticales pegadas al borde.
        const x = inner(r(3, 8))
        traces.push(
          makeTrace([{ x, y }, { x, y: y + r(160, 320) }], {
            layer,
            band: false,
            drift: null,
            particle: withParticle(0.3),
          }),
        )
      }

      y += mobile ? r(760, 1100) : r(420, 680)
      left = !left
    }
  })

  // 2) Trazos en el margen superior vacío de cada sección (anclados a la página).
  bands.forEach((band, i) => {
    const left = i % 2 === 0
    const edge = left ? -4 : width + 4
    const inner = (v) => (left ? v : width - v)
    const ya = band.top + (band.bottom - band.top) * r(0.3, 0.45)
    const yb = Math.min(band.bottom, ya + r(14, 24))
    const x1 = width * r(0.08, 0.16)
    const x2 = width * (mobile ? r(0.5, 0.7) : r(0.26, 0.4))
    traces.push(
      makeTrace(
        [
          { x: edge, y: ya },
          { x: inner(x1), y: ya },
          { x: inner(x1 + (yb - ya)), y: yb },
          { x: inner(x2), y: yb },
        ],
        { layer: LAYERS[1], band: true, drift: null, particle: { d: r(0, 1), speed: r(26, 40) } },
      ),
    )
  })

  traces.forEach((trace) => {
    if (trace.particle) trace.particle.d *= trace.total
  })
  return traces
}

// Sprite de brillo precalculado (más barato que shadowBlur).
function glowSprite() {
  const size = 32
  const sprite = document.createElement('canvas')
  sprite.width = size
  sprite.height = size
  const g = sprite.getContext('2d')
  const gradient = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  gradient.addColorStop(0, `rgba(${LIGHT}, 0.9)`)
  gradient.addColorStop(0.25, `rgba(${BLUE}, 0.35)`)
  gradient.addColorStop(1, `rgba(${BLUE}, 0)`)
  g.fillStyle = gradient
  g.fillRect(0, 0, size, size)
  return sprite
}

export default function EnergyLines({ rootRef }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const root = rootRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !root || !ctx) return undefined

    const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sprite = glowSprite()
    let reduced = reducedQuery.matches
    let traces = []
    let width = 0
    let height = 0
    let frame = 0
    let last = 0
    let lastScroll = window.scrollY
    let smoothScroll = window.scrollY
    let velocity = 0
    let dirty = true
    let rebuildTimer = 0

    function measureBands() {
      const main = root.querySelector('main')
      if (!main) return []
      return Array.from(main.children)
        .filter((el) => el.tagName === 'SECTION')
        .slice(1) // el hero ya tiene su propia línea digital
        .map((section) => {
          const style = getComputedStyle(section)
          const transparent = style.backgroundColor === 'rgba(0, 0, 0, 0)' || style.backgroundColor === 'transparent'
          const top = section.getBoundingClientRect().top + window.scrollY
          const pad = parseFloat(style.paddingTop) || 0
          return transparent && pad >= 60 ? { top: top + 16, bottom: top + pad - 28 } : null
        })
        .filter(Boolean)
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const widthChanged = w !== width
      width = w
      height = h
      if (widthChanged || !traces.length) rebuild()
      dirty = true
    }

    function rebuild() {
      traces = generate({
        width,
        height,
        docHeight: root.scrollHeight,
        bands: measureBands(),
        mobile: width < 700,
      })
      dirty = true
    }

    function draw(scroll, depthScroll, dt) {
      ctx.clearRect(0, 0, width, height)

      for (const trace of traces) {
        const base = trace.band ? scroll : depthScroll
        const offset = reduced ? scroll : base * trace.layer.factor
        const dx = trace.drift && !reduced ? Math.sin(base / 700 + trace.drift.phase) * trace.drift.amp : 0
        const top = trace.minY - offset
        const bottom = trace.maxY - offset

        // La partícula avanza siempre (también fuera de pantalla).
        const particle = trace.particle
        if (particle && !reduced) {
          const push = clamp(velocity * 0.3 * trace.layer.factor, -260, 260)
          const step = particle.speed + push
          particle.back = step < 0
          particle.d += step * dt
          particle.d = ((particle.d % trace.total) + trace.total) % trace.total
        }

        if (bottom < -40 || top > height + 40) continue

        // Revelado ligado al scroll: se dibuja al entrar y se recoge al salir por abajo.
        const reveal = reduced
          ? 1
          : smooth(clamp((height * 1.02 - top) / (height * 0.5 + (bottom - top) * 0.5)))
        const length = trace.total * reveal
        if (length < 2) continue

        const alpha = trace.layer.alpha
        ctx.beginPath()
        let travelled = 0
        trace.points.forEach((p, i) => {
          if (i === 0) {
            ctx.moveTo(p.x + dx, p.y - offset)
            return
          }
          const seg = trace.segs[i - 1]
          if (travelled >= length) return
          if (travelled + seg.len <= length) {
            ctx.lineTo(p.x + dx, p.y - offset)
          } else {
            const q = pointAt(trace, length)
            ctx.lineTo(q.x + dx, q.y - offset)
          }
          travelled += seg.len
        })

        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.lineWidth = 4
        ctx.strokeStyle = `rgba(${BLUE}, ${0.05 * alpha})`
        ctx.stroke()
        ctx.lineWidth = trace.layer.width
        ctx.strokeStyle = `rgba(${BLUE}, ${0.34 * alpha})`
        ctx.stroke()

        // Nodo final cuando el trazo está completo.
        if (reveal > 0.98) {
          const end = trace.points[trace.points.length - 1]
          const ex = end.x + dx
          const ey = end.y - offset
          ctx.beginPath()
          ctx.arc(ex, ey, 2.6, 0, Math.PI * 2)
          ctx.lineWidth = 1
          ctx.strokeStyle = `rgba(${BLUE}, ${0.5 * alpha})`
          ctx.stroke()
          ctx.beginPath()
          ctx.arc(ex, ey, 1, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${LIGHT}, ${0.6 * alpha})`
          ctx.fill()
        }

        // Partícula de luz con una pequeña estela.
        if (particle && !reduced && particle.d <= length) {
          const fade = smooth(clamp(particle.d / 40)) * smooth(clamp((trace.total - particle.d) / 40))
          const dir = particle.back ? 1 : -1
          for (let k = 3; k >= 0; k -= 1) {
            const d = particle.d + dir * k * 7
            if (d < 0 || d > length) continue
            const p = pointAt(trace, d)
            const size = k === 0 ? 16 : 12 - k * 2
            ctx.globalAlpha = alpha * fade * (k === 0 ? 0.9 : 0.35 / k)
            ctx.drawImage(sprite, p.x + dx - size / 2, p.y - offset - size / 2, size, size)
          }
          ctx.globalAlpha = 1
        }
      }
    }

    function loop(now) {
      frame = requestAnimationFrame(loop)
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0
      last = now
      const scroll = window.scrollY

      if (reduced) {
        if (dirty || scroll !== lastScroll) draw(scroll, scroll, 0)
        lastScroll = scroll
        dirty = false
        return
      }

      if (dt > 0) velocity += ((scroll - lastScroll) / dt - velocity) * 0.12
      lastScroll = scroll
      smoothScroll += (scroll - smoothScroll) * Math.min(1, dt * 8)
      draw(scroll, smoothScroll, dt)
      dirty = false
    }

    function start() {
      if (!frame) {
        last = 0
        frame = requestAnimationFrame(loop)
      }
    }

    function stop() {
      cancelAnimationFrame(frame)
      frame = 0
    }

    const onVisibility = () => (document.hidden ? stop() : start())
    const onReduced = () => {
      reduced = reducedQuery.matches
      dirty = true
    }
    // La altura de la página cambia (imágenes, fuentes): se recalculan los trazos.
    const observer = new ResizeObserver(() => {
      clearTimeout(rebuildTimer)
      rebuildTimer = setTimeout(rebuild, 200)
    })

    resize()
    observer.observe(root)
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)
    reducedQuery.addEventListener?.('change', onReduced)
    canvas.classList.add('is-ready')
    start()

    return () => {
      stop()
      clearTimeout(rebuildTimer)
      observer.disconnect()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
      reducedQuery.removeEventListener?.('change', onReduced)
    }
  }, [rootRef])

  return <canvas ref={canvasRef} className="s-energy" aria-hidden="true" />
}
