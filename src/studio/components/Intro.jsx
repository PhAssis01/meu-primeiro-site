// Intro de bienvenida de la Home: "WELCOME" construido a partir de código.
//
//   0.0–0.7 s  nacimiento   · fragmentos de código gris aparecen en la oscuridad
//   0.7–2.0 s  evolución    · los fragmentos viajan y se organizan en las letras,
//                             líneas de construcción, pulsos de energía blanca
//   2.0–2.6 s  WELCOME      · la palabra se vuelve nítida, un brillo la recorre
//   2.6–3.5 s  disolución   · los fragmentos se dispersan, la pantalla se abre
//                             y la Home entra por detrás
//
// Todo se dibuja en un único <canvas> (sin cientos de elementos DOM).
// Paleta solo en grises y blanco. Solo se reproduce al entrar por la Home,
// una vez por pestaña. Con prefers-reduced-motion: WELCOME simple y estático.
import { useEffect, useRef, useState } from 'react'
import './intro.css'

const WORD = 'WELCOME'

// Tiempos (s)
const FORM_END = 2.0 // la palabra queda formada
const LEAVE_AT = 2.6 // empieza la disolución
const LEAVE = 0.9 // transición hacia la Home
const REDUCED_HOLD = 1100 // ms, modo reducido

const STORAGE_KEY = 'ph-intro-seen'

const GLYPHS = ['0', '1', '0', '1', '{', '}', '<', '>', '/', '=', '[', ']', ':', '.', '+', '_', '|', '*']
const TOKENS = ['010101', 'const', '<div>', '{ }', '=>', '01', 'PH', '/', '[]', '::', '</>', 'fn()', '0x1F', 'let', '1010', '{…}']
const MONO = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace'

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Se decide una sola vez, al cargar la página.
const PLAY_ON_LOAD = (() => {
  try {
    if (window.location.pathname !== '/' || window.location.hash) return false
    return window.sessionStorage.getItem(STORAGE_KEY) !== '1'
  } catch {
    return false
  }
})()

let consumed = false

export function shouldPlayIntro() {
  return PLAY_ON_LOAD && !consumed
}

// ---------- utilidades ----------

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const easeOut = (t) => 1 - Math.pow(1 - t, 3)

function offscreen(w, h) {
  const c = document.createElement('canvas')
  c.width = Math.max(1, Math.ceil(w))
  c.height = Math.max(1, Math.ceil(h))
  return c
}

// Dibuja la palabra con el mismo espaciado que el resto del sitio (-0.03em).
function drawWord(ctx, font, size, x, y) {
  ctx.font = font
  const spacing = -0.03 * size
  const widths = [...WORD].map((ch) => ctx.measureText(ch).width)
  const total = widths.reduce((a, b) => a + b, 0) + spacing * (WORD.length - 1)
  let cx = x - total / 2
  ;[...WORD].forEach((ch, i) => {
    ctx.fillText(ch, cx, y)
    cx += widths[i] + spacing
  })
  return total
}

// ---------- escena ----------

function buildScene(w, h, dpr, displayFont) {
  const mobile = w < 700
  const rand = Math.random
  const size = clamp(w * 0.14, 48, 136)
  const font = `600 ${size}px ${displayFont}`
  const cx = w / 2
  const cy = h / 2

  // Palabra nítida (y versión con halo) pre-renderizada una sola vez.
  const pad = size * 0.6
  const probe = offscreen(1, 1).getContext('2d')
  probe.font = font
  const approxW = [...WORD].reduce((a, ch) => a + probe.measureText(ch).width, 0)
  const boxW = approxW + pad * 2
  const boxH = size * 1.6
  const word = offscreen(boxW * dpr, boxH * dpr)
  const wctx = word.getContext('2d')
  wctx.scale(dpr, dpr)
  wctx.fillStyle = '#f2f2f2'
  wctx.textBaseline = 'middle'
  const wordW = drawWord(wctx, font, size, boxW / 2, boxH / 2 + size * 0.04)

  const glow = offscreen(boxW * dpr, boxH * dpr)
  const gctx = glow.getContext('2d')
  gctx.scale(dpr, dpr)
  gctx.shadowColor = 'rgba(255, 255, 255, 0.55)'
  gctx.shadowBlur = size * 0.28
  gctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
  gctx.textBaseline = 'middle'
  drawWord(gctx, font, size, boxW / 2, boxH / 2 + size * 0.04)

  // Puntos objetivo: se muestrea la forma de las letras.
  const sample = offscreen(boxW, boxH)
  const sctx = sample.getContext('2d')
  sctx.fillStyle = '#fff'
  sctx.textBaseline = 'middle'
  drawWord(sctx, font, size, boxW / 2, boxH / 2 + size * 0.04)
  const data = sctx.getImageData(0, 0, sample.width, sample.height).data
  const step = mobile ? 3.2 : size > 110 ? 5 : 4.2
  let targets = []
  for (let y = 0; y < sample.height; y += step) {
    for (let x = 0; x < sample.width; x += step) {
      if (data[(Math.floor(y) * sample.width + Math.floor(x)) * 4 + 3] > 140) {
        targets.push({ x: cx - boxW / 2 + x + (rand() - 0.5), y: cy - boxH / 2 + y + (rand() - 0.5) })
      }
    }
  }
  const max = mobile ? 420 : 900
  if (targets.length > max) {
    targets = targets.sort(() => rand() - 0.5).slice(0, max)
  }

  // Caja real de las letras (para líneas de construcción y zonas libres).
  const capTop = cy - size * 0.36
  const base = cy + size * 0.36
  const left = cx - wordW / 2
  const right = cx + wordW / 2

  // Fragmentos de datos que se mueven y se vuelven letras.
  const minX = Math.min(...targets.map((t) => t.x))
  const spanX = Math.max(1, Math.max(...targets.map((t) => t.x)) - minX)
  const tokens = []
  const tokenCount = mobile ? 7 : 14
  for (let i = 0; i < tokenCount * 3 && tokens.length < tokenCount; i += 1) {
    const x = rand() * w
    const y = rand() * h
    // Nunca sobre la palabra
    if (x > left - 60 && x < right + 60 && y > capTop - 70 && y < base + 70) continue
    const z = rand()
    const born = rand() * 0.55
    const die = rand() < 0.4 ? 1.1 + rand() * 0.9 : 99
    tokens.push({
      text: TOKENS[i % TOKENS.length],
      x,
      y,
      vx: (rand() - 0.5) * (6 + z * 10),
      vy: (rand() - 0.5) * 4,
      z,
      born,
      die,
      // reaparece en otro sitio
      x2: rand() * w,
      y2: rand() < 0.5 ? rand() * (capTop - 80) : base + 80 + rand() * (h - base - 80),
    })
  }

  const fragments = targets.map((t) => {
    // Parte nace cerca de los "tokens" de código, parte en cualquier lugar.
    let sx
    let sy
    if (tokens.length && rand() < 0.18) {
      const tk = tokens[Math.floor(rand() * tokens.length)]
      sx = tk.x + (rand() - 0.5) * 160
      sy = tk.y + (rand() - 0.5) * 110
    } else {
      const ang = rand() * Math.PI * 2
      const dist = (0.25 + Math.pow(rand(), 0.7) * 0.75) * Math.max(w, h) * 0.6
      sx = cx + Math.cos(ang) * dist
      sy = cy + Math.sin(ang) * dist * 0.7
    }
    const z = rand()
    const order = (t.x - minX) / spanX // la palabra se construye de izquierda a derecha
    const depart = 0.7 + order * 0.42 + rand() * 0.28
    const travel = 0.5 + rand() * 0.35
    const mx = (sx + t.x) / 2
    const my = (sy + t.y) / 2
    const bend = (rand() - 0.5) * 220
    return {
      sx,
      sy,
      tx: t.x,
      ty: t.y,
      // punto de control: trayectoria curva
      qx: mx + bend * 0.6,
      qy: my + bend,
      dx: (rand() - 0.5) * 14,
      dy: (rand() - 0.5) * 10,
      z,
      born: rand() * 0.6,
      depart: Math.min(depart, FORM_END - travel),
      travel,
      a: 0.28 + z * 0.5,
      g: Math.floor(rand() * GLYPHS.length),
      nextFlip: rand() * 0.15,
      phase: rand() * 6.28,
      out: (() => {
        const ang = Math.atan2(t.y - cy, t.x - cx) + (rand() - 0.5) * 0.9
        const sp = 70 + rand() * 230
        return { x: Math.cos(ang) * sp, y: Math.sin(ang) * sp * 0.8 }
      })(),
    }
  })

  // Atlas de glifos en blanco (el gris sale de la opacidad).
  const gsize = mobile ? 9 : 11
  const atlas = GLYPHS.map((ch) => {
    const c = offscreen(gsize * 1.2 * dpr, gsize * 1.4 * dpr)
    const x = c.getContext('2d')
    x.scale(dpr, dpr)
    x.font = `500 ${gsize}px ${MONO}`
    x.fillStyle = '#fff'
    x.textAlign = 'center'
    x.textBaseline = 'middle'
    x.fillText(ch, gsize * 0.6, gsize * 0.7)
    return c
  })

  // Punto de luz blanco (energía)
  const spark = offscreen(32, 32)
  const sp = spark.getContext('2d')
  const grad = sp.createRadialGradient(16, 16, 0, 16, 16, 16)
  grad.addColorStop(0, 'rgba(255,255,255,0.95)')
  grad.addColorStop(0.25, 'rgba(255,255,255,0.35)')
  grad.addColorStop(1, 'rgba(255,255,255,0)')
  sp.fillStyle = grad
  sp.fillRect(0, 0, 32, 32)

  // Líneas de construcción: techo y base de las letras, y los bordes laterales.
  const guides = [
    { x1: 0, y1: capTop, x2: w, y2: capTop, delay: 0.8 },
    { x1: 0, y1: base, x2: w, y2: base, delay: 0.9 },
    { x1: left, y1: 0, x2: left, y2: h, delay: 1.0 },
    { x1: right, y1: 0, x2: right, y2: h, delay: 1.05 },
  ]
  const pulses = [
    { guide: 0, start: 1.15, dir: 1 },
    { guide: 1, start: 1.45, dir: -1 },
    { guide: 3, start: 1.7, dir: 1 },
  ]

  const shine = offscreen(boxW * dpr, boxH * dpr)

  return {
    w,
    h,
    dpr,
    mobile,
    cx,
    cy,
    size,
    box: { x: cx - boxW / 2, y: cy - boxH / 2, w: boxW, h: boxH },
    word,
    glow,
    shine,
    fragments,
    tokens,
    atlas,
    gsize,
    spark,
    guides,
    pulses,
    flashes: [],
    nextFlash: 1.4,
  }
}

function fragmentPos(f, t) {
  if (t < f.depart) {
    const k = t - f.born
    return { x: f.sx + f.dx * k, y: f.sy + f.dy * k, moving: false }
  }
  if (t < f.depart + f.travel) {
    const p = easeInOut((t - f.depart) / f.travel)
    const k = f.depart - f.born
    const ax = f.sx + f.dx * k
    const ay = f.sy + f.dy * k
    const u = 1 - p
    return {
      x: u * u * ax + 2 * u * p * f.qx + p * p * f.tx,
      y: u * u * ay + 2 * u * p * f.qy + p * p * f.ty,
      moving: true,
    }
  }
  // Llegó: una vibración mínima alrededor de su sitio
  return {
    x: f.tx + Math.sin(t * 2.3 + f.phase) * 0.7,
    y: f.ty + Math.cos(t * 1.9 + f.phase) * 0.5,
    moving: false,
    arrived: true,
  }
}

function draw(ctx, s, t, leaveT) {
  const { w, h } = s
  ctx.clearRect(0, 0, w, h)
  const leaving = leaveT > 0
  const fadeOut = 1 - easeOut(clamp(leaveT))

  // --- tokens de código de fondo (profundidad por tamaño y opacidad)
  ctx.textBaseline = 'middle'
  for (const tk of s.tokens) {
    let alpha
    let x
    let y
    if (t < tk.die) {
      alpha = clamp((t - tk.born) / 0.35) * clamp((tk.die - t) / 0.25)
      x = tk.x + tk.vx * t
      y = tk.y + tk.vy * t
    } else {
      const k = t - tk.die - 0.25
      alpha = clamp(k / 0.35)
      x = tk.x2 + tk.vx * k
      y = tk.y2 + tk.vy * k
    }
    // Se apagan cuando aparece la palabra
    alpha *= 1 - 0.6 * clamp((t - 1.8) / 0.5)
    alpha *= fadeOut * (0.12 + tk.z * 0.28)
    if (alpha <= 0.005) continue
    ctx.globalAlpha = alpha
    ctx.fillStyle = '#fff'
    ctx.font = `400 ${10 + tk.z * 4}px ${MONO}`
    ctx.fillText(tk.text, x, y)
  }

  // --- líneas de construcción
  const guideFade = clamp(1 - (t - 2.1) / 0.5) * 0.8 + 0.2
  s.guides.forEach((g, i) => {
    const p = easeOut(clamp((t - g.delay) / 0.7))
    if (p <= 0) return
    const mx = (g.x1 + g.x2) / 2
    const my = (g.y1 + g.y2) / 2
    const x1 = mx + (g.x1 - mx) * p
    const y1 = my + (g.y1 - my) * p
    const x2 = mx + (g.x2 - mx) * p
    const y2 = my + (g.y2 - my) * p
    const grad = ctx.createLinearGradient(x1, y1, x2, y2)
    grad.addColorStop(0, 'rgba(255,255,255,0)')
    grad.addColorStop(0.5, 'rgba(255,255,255,1)')
    grad.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.globalAlpha = (i < 2 ? 0.14 : 0.09) * guideFade * fadeOut
    ctx.strokeStyle = grad
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
  })

  // --- pulsos de energía blanca recorriendo las líneas
  if (!leaving) {
    for (const pl of s.pulses) {
      const g = s.guides[pl.guide]
      const len = Math.hypot(g.x2 - g.x1, g.y2 - g.y1)
      const k = (t - pl.start) / (len / 900)
      if (k < 0 || k > 1) continue
      const p = pl.dir > 0 ? k : 1 - k
      const px = g.x1 + (g.x2 - g.x1) * p
      const py = g.y1 + (g.y2 - g.y1) * p
      const tail = 70 * pl.dir
      const ux = (g.x2 - g.x1) / len
      const uy = (g.y2 - g.y1) / len
      const grad = ctx.createLinearGradient(px - ux * tail, py - uy * tail, px, py)
      grad.addColorStop(0, 'rgba(255,255,255,0)')
      grad.addColorStop(1, 'rgba(255,255,255,0.8)')
      ctx.globalAlpha = Math.sin(k * Math.PI) * 0.9
      ctx.strokeStyle = grad
      ctx.lineWidth = 1.2
      ctx.beginPath()
      ctx.moveTo(px - ux * tail, py - uy * tail)
      ctx.lineTo(px, py)
      ctx.stroke()
      ctx.drawImage(s.spark, px - 8, py - 8, 16, 16)
    }
  }

  // --- fragmentos
  const wordShown = clamp((t - (FORM_END - 0.1)) / 0.45)
  const settle = 1 - 0.78 * wordShown // se atenúan cuando la palabra es nítida
  const gw = s.gsize * 1.2
  const gh = s.gsize * 1.4
  const arrivedList = []
  for (const f of s.fragments) {
    if (t < f.born) continue
    // Los glifos cambian mientras viajan: datos "calculándose"
    if (t > f.nextFlip) {
      f.g = Math.floor(Math.random() * GLYPHS.length)
      f.nextFlip = t + (t < f.depart + f.travel ? 0.08 + Math.random() * 0.1 : 0.5 + Math.random() * 0.8)
    }
    const pos = fragmentPos(f, t)
    let x = pos.x
    let y = pos.y
    if (leaving) {
      const e = leaveT * leaveT
      x += f.out.x * (leaveT * 0.6 + e * 0.6)
      y += f.out.y * (leaveT * 0.6 + e * 0.6)
    }
    let alpha = f.a * clamp((t - f.born) / 0.3)
    // Antes de moverse los datos apenas se insinúan; en movimiento se encienden
    if (t < f.depart) alpha *= 0.55
    if (pos.moving) alpha *= 1.15
    alpha *= pos.arrived ? settle : 1
    alpha *= fadeOut
    if (alpha <= 0.01) continue
    const scale = (0.7 + f.z * 0.55) * (pos.arrived ? 0.9 : 1)
    ctx.globalAlpha = Math.min(1, alpha)
    ctx.drawImage(s.atlas[f.g], x - (gw * scale) / 2, y - (gh * scale) / 2, gw * scale, gh * scale)
    if (pos.arrived) arrivedList.push({ x, y })
  }

  // --- destellos: pequeños puntos de energía sobre las letras
  if (!leaving && t > 1.35 && t < 2.5 && arrivedList.length) {
    if (t > s.nextFlash) {
      const p = arrivedList[Math.floor(Math.random() * arrivedList.length)]
      s.flashes.push({ x: p.x, y: p.y, t })
      s.nextFlash = t + 0.09 + Math.random() * 0.12
    }
  }
  s.flashes = s.flashes.filter((fl) => t - fl.t < 0.3)
  for (const fl of s.flashes) {
    const k = (t - fl.t) / 0.3
    ctx.globalAlpha = Math.sin(k * Math.PI) * 0.75 * fadeOut
    const sz = 10 + k * 8
    ctx.drawImage(s.spark, fl.x - sz / 2, fl.y - sz / 2, sz, sz)
  }

  // --- WELCOME nítido
  if (wordShown > 0) {
    const zoom = leaving ? 1 - 0.07 * easeOut(clamp(leaveT)) : 1 + 0.025 * (1 - easeOut(wordShown))
    const alpha = easeOut(wordShown) * (1 - easeOut(clamp(leaveT * 1.25)))
    const { x, y, w: bw, h: bh } = s.box
    ctx.save()
    ctx.translate(s.cx, s.cy)
    ctx.scale(zoom, zoom)
    ctx.translate(-s.cx, -s.cy)
    ctx.globalAlpha = alpha * 0.55
    ctx.drawImage(s.glow, x, y, bw, bh)
    ctx.globalAlpha = alpha
    ctx.drawImage(s.word, x, y, bw, bh)

    // Brillo blanco que recorre las letras una vez
    const k = (t - 2.05) / 0.75
    if (k > 0 && k < 1 && !leaving) {
      const sc = s.shine.getContext('2d')
      const W = s.shine.width
      const H = s.shine.height
      sc.globalCompositeOperation = 'source-over'
      sc.clearRect(0, 0, W, H)
      sc.drawImage(s.word, 0, 0)
      sc.globalCompositeOperation = 'source-in'
      const bx = (-0.2 + k * 1.4) * W
      const grad = sc.createLinearGradient(bx - W * 0.12, 0, bx + W * 0.12, 0)
      grad.addColorStop(0, 'rgba(255,255,255,0)')
      grad.addColorStop(0.5, 'rgba(255,255,255,1)')
      grad.addColorStop(1, 'rgba(255,255,255,0)')
      sc.fillStyle = grad
      sc.fillRect(0, 0, W, H)
      ctx.globalAlpha = 0.55 * Math.sin(k * Math.PI)
      ctx.globalCompositeOperation = 'lighter'
      ctx.drawImage(s.shine, x, y, bw, bh)
      ctx.globalCompositeOperation = 'source-over'
    }
    ctx.restore()
  }

  ctx.globalAlpha = 1
}

function useCodeIntro(canvasRef, leavingRef, animated) {
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ctx || !animated) return undefined

    const displayFont =
      getComputedStyle(canvas).getPropertyValue('--display').trim() || '"Space Grotesk", Arial, sans-serif'
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
    let scene = null
    const start = performance.now()

    const build = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      scene = buildScene(w, h, dpr, displayFont)
    }
    build()

    // Si la tipografía termina de cargar al principio, se recalcula la forma.
    let fontsTimer = 0
    document.fonts?.load(`600 100px ${displayFont}`).then(() => {
      if ((performance.now() - start) / 1000 < 0.6) build()
    })

    let frame = 0
    const loop = (now) => {
      frame = requestAnimationFrame(loop)
      const t = (now - start) / 1000
      const leaveT = leavingRef.current ? (now - leavingRef.current) / 1000 / LEAVE : 0
      draw(ctx, scene, t, leaveT)
    }
    frame = requestAnimationFrame(loop)
    window.addEventListener('resize', build)
    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(fontsTimer)
      window.removeEventListener('resize', build)
    }
  }, [canvasRef, leavingRef, animated])
}

export default function Intro({ onReveal, onDone }) {
  const canvasRef = useRef(null)
  const leavingRef = useRef(0)
  const [reduced] = useState(reducedMotion)
  const [leaving, setLeaving] = useState(false)
  const callbacks = useRef({ onReveal, onDone })
  useCodeIntro(canvasRef, leavingRef, !reduced)

  useEffect(() => {
    callbacks.current = { onReveal, onDone }
  })

  useEffect(() => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* sin almacenamiento: la intro simplemente puede repetirse */
    }
    window.scrollTo(0, 0)

    const timers = []
    let started = false
    const finish = (delay) =>
      timers.push(
        setTimeout(() => {
          consumed = true
          callbacks.current.onDone?.()
        }, delay),
      )

    const leave = () => {
      if (started) return
      started = true
      timers.forEach(clearTimeout)
      if (reduced) {
        finish(0)
        return
      }
      leavingRef.current = performance.now()
      setLeaving(true)
      callbacks.current.onReveal?.()
      finish(LEAVE * 1000)
    }

    timers.push(setTimeout(leave, reduced ? REDUCED_HOLD : LEAVE_AT * 1000))

    // Durante la intro no se puede hacer scroll; clic, Enter o Escape la saltan.
    const block = (event) => event.preventDefault()
    const onKey = (event) => {
      if (event.key === 'Escape' || event.key === 'Enter') leave()
      else if ([' ', 'ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End'].includes(event.key)) {
        event.preventDefault()
      }
    }
    window.addEventListener('wheel', block, { passive: false })
    window.addEventListener('touchmove', block, { passive: false })
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', leave)

    return () => {
      timers.forEach(clearTimeout)
      window.removeEventListener('wheel', block)
      window.removeEventListener('touchmove', block)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', leave)
    }
  }, [reduced])

  const classes = ['ph-intro', reduced && 'is-reduced', leaving && 'is-leaving'].filter(Boolean).join(' ')

  return (
    <div className={classes} aria-hidden="true">
      <div className="ph-intro__bg">
        <canvas ref={canvasRef} className="ph-intro__canvas" />
      </div>
      {reduced ? (
        <div className="ph-intro__stage">
          <span className="ph-intro__word">{WORD}</span>
        </div>
      ) : null}
    </div>
  )
}
