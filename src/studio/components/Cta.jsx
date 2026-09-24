import Arrow from './Arrow'

export default function Cta() {
  return (
    <section className="s-cta" aria-labelledby="s-cta-title">
      <div className="s-container s-cta__inner" data-reveal>
        <h2 id="s-cta-title" className="s-cta__title">
          ¿Tu negocio necesita una web que esté a la altura?
        </h2>
        <div className="s-cta__side">
          <p className="s-body">
            Cuéntanos tu idea. Te respondemos con una propuesta clara y sin
            compromiso.
          </p>
          <a href="#contacto" className="s-btn s-btn--primary s-btn--lg">
            Hablemos de tu proyecto <Arrow />
          </a>
        </div>
      </div>
    </section>
  )
}
