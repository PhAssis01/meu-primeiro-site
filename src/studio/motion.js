// Animaciones de scroll exclusivas de PH Web Studio.
// No afecta a los proyectos (The King, etc.): solo actúa dentro de .studio.
//
// - Marca el contenedor con .s-motion para activar los estados iniciales
//   (si el JS no se ejecuta, todo el contenido sigue visible).
// - Parallax sutil en los elementos con [data-parallax="<factor>"].
//   El factor es la fracción del desplazamiento que se aplica (0.05 = 5%).
// - Línea de progreso de lectura (.s-progress).
// Un único listener de scroll, con requestAnimationFrame y sin librerías.
import { useEffect, useRef } from 'react'

const MOBILE_QUERY = '(max-width: 960px)'
const REDUCED_QUERY = '(prefers-reduced-motion: reduce)'
const MAX_SHIFT = 48 // px: tope de desplazamiento para que nada "salte"

export function useStudioMotion(rootRef) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    const reduced = window.matchMedia(REDUCED_QUERY)
    const mobile = window.matchMedia(MOBILE_QUERY)

    root.classList.add('s-motion')

    const progress = root.querySelector('.s-progress')
    const items = Array.from(root.querySelectorAll('[data-parallax]')).map((el) => ({
      el,
      factor: parseFloat(el.dataset.parallax) || 0,
      visible: false,
    }))

    // Solo se calcula el parallax de los elementos visibles.
    const observer =
      'IntersectionObserver' in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                const item = items.find((i) => i.el === entry.target)
                if (item) item.visible = entry.isIntersecting
              })
              schedule()
            },
            { rootMargin: '10% 0px' },
          )
        : null

    let frame = 0

    function update() {
      frame = 0
      const viewport = window.innerHeight
      const still = reduced.matches
      // En móvil la intensidad se reduce a menos de la mitad.
      const intensity = still ? 0 : mobile.matches ? 0.4 : 1

      if (progress) {
        const max = document.documentElement.scrollHeight - viewport
        const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
        progress.style.transform = `scaleX(${ratio})`
      }

      items.forEach((item) => {
        if (!item.visible && observer) return
        if (!intensity) {
          item.el.style.translate = ''
          return
        }
        const rect = item.el.getBoundingClientRect()
        // Distancia del centro del elemento al centro de la pantalla.
        const offset = rect.top + rect.height / 2 - viewport / 2
        const shift = Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, -offset * item.factor * intensity))
        item.el.style.translate = `0 ${shift.toFixed(1)}px`
      })
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(update)
    }

    items.forEach((item) => observer?.observe(item.el))
    update()

    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    reduced.addEventListener?.('change', schedule)
    mobile.addEventListener?.('change', schedule)

    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      reduced.removeEventListener?.('change', schedule)
      mobile.removeEventListener?.('change', schedule)
      items.forEach((item) => {
        item.el.style.translate = ''
      })
      root.classList.remove('s-motion')
    }
  }, [rootRef])
}

// Progreso de scroll (0 → 1) de una sección, para las páginas de servicios.
// mode 'sticky': 0 cuando la sección toca el borde superior y 1 cuando su
//   final llega al borde inferior (secciones altas con un escenario fijo).
// mode 'view': 0 cuando la sección entra por abajo y 1 cuando su final pasa
//   por el 60 % de la pantalla.
// `onProgress` se llama en requestAnimationFrame; debe escribir estilos
// directamente (sin estado de React por fotograma).
export function useScrollProgress(ref, onProgress, mode = 'sticky') {
  const callback = useRef(onProgress)
  useEffect(() => {
    callback.current = onProgress
  })

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined
    let frame = 0

    function update() {
      frame = 0
      const rect = element.getBoundingClientRect()
      const viewport = window.innerHeight
      if (rect.bottom < -viewport || rect.top > viewport * 2) return
      const raw =
        mode === 'view'
          ? (viewport - rect.top) / (rect.height + viewport * 0.4)
          : -rect.top / Math.max(1, rect.height - viewport)
      callback.current(Math.min(1, Math.max(0, raw)))
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [ref, mode])
}

// true cuando el usuario ha pedido reducir el movimiento.
export function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

// Enlaces internos (#seccion) con desplazamiento suave y controlado:
// parte de la posición actual, dura 600–1000 ms según la distancia, frena al
// llegar y termina justo al inicio de la sección (respetando scroll-margin).
// Con prefers-reduced-motion el salto es inmediato.
export function useSmoothAnchors(rootRef) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined
    let frame = 0

    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
    const stopUserScroll = () => cancelAnimationFrame(frame)

    function scrollToTarget(target) {
      const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const end = Math.min(max, Math.max(0, target.getBoundingClientRect().top + window.scrollY - margin))
      const start = window.scrollY
      const distance = end - start
      cancelAnimationFrame(frame)

      if (prefersReducedMotion() || Math.abs(distance) < 2) {
        window.scrollTo({ top: end, behavior: 'instant' })
        return
      }

      const duration = Math.min(1000, Math.max(600, 420 + Math.abs(distance) * 0.18))
      const t0 = performance.now()
      const step = (now) => {
        const t = Math.min(1, (now - t0) / duration)
        window.scrollTo({ top: start + distance * ease(t), behavior: 'instant' })
        if (t < 1) frame = requestAnimationFrame(step)
      }
      frame = requestAnimationFrame(step)
    }

    function onClick(event) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return
      }
      const link = event.target.closest?.('a[href^="#"]')
      if (!link || !root.contains(link)) return
      const id = decodeURIComponent(link.getAttribute('href').slice(1))
      const target = id && document.getElementById(id)
      if (!target) return
      event.preventDefault()
      scrollToTarget(target)
      window.history.replaceState(window.history.state, '', `#${id}`)
    }

    root.addEventListener('click', onClick)
    // Si el usuario toma el control (rueda, dedo, teclado), se cancela.
    window.addEventListener('wheel', stopUserScroll, { passive: true })
    window.addEventListener('touchstart', stopUserScroll, { passive: true })
    window.addEventListener('keydown', stopUserScroll)
    return () => {
      cancelAnimationFrame(frame)
      root.removeEventListener('click', onClick)
      window.removeEventListener('wheel', stopUserScroll)
      window.removeEventListener('touchstart', stopUserScroll)
      window.removeEventListener('keydown', stopUserScroll)
    }
  }, [rootRef])
}
