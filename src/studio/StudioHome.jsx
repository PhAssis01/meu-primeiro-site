import { useCallback, useRef, useState } from 'react'
import { usePageMeta, useReveal } from '../lib/hooks'
import { useSmoothAnchors, useStudioMotion } from './motion'
import { META_DESCRIPTION } from './data'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import Cta from './components/Cta'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro, { shouldPlayIntro } from './components/Intro'
import './studio.css'
import './home.css'

export default function StudioHome() {
  usePageMeta('PH Web Studio — Diseño y desarrollo web', 'studio', META_DESCRIPTION)
  useReveal()
  const rootRef = useRef(null)
  useStudioMotion(rootRef)
  useSmoothAnchors(rootRef)

  // Intro de bienvenida: 'intro' → 'reveal' → null (ver components/Intro.jsx)
  const [intro, setIntro] = useState(() => (shouldPlayIntro() ? 'intro' : null))
  const onReveal = useCallback(() => setIntro('reveal'), [])
  const onDone = useCallback(() => setIntro(null), [])
  const introClass = intro === 'intro' ? ' is-intro' : intro === 'reveal' ? ' is-intro-reveal' : ''

  return (
    <div className={`studio s-home${introClass}`} ref={rootRef}>
      {intro ? <Intro onReveal={onReveal} onDone={onDone} /> : null}
      <div className="s-progress" aria-hidden="true" />
      <a href="#main" className="s-skip">Saltar al contenido</a>
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
