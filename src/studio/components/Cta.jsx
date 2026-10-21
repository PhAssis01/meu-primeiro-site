import { useStudioCopy } from '../copy'
import Arrow from './Arrow'

export default function Cta() {
  const t = useStudioCopy().cta

  return (
    <section className="s-cta" aria-labelledby="s-cta-title">
      <div className="s-container s-cta__inner" data-reveal>
        <h2 id="s-cta-title" className="s-cta__title">
          {t.title}
        </h2>
        <div className="s-cta__side">
          <p className="s-body">{t.text}</p>
          <a href="#contacto" className="s-btn s-btn--primary s-btn--lg">
            {t.button} <Arrow />
          </a>
        </div>
      </div>
    </section>
  )
}
