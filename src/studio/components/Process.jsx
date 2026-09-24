import { PROCESS } from '../data'

export default function Process() {
  return (
    <section id="proceso" className="s-section s-process">
      <div className="s-container">
        <header className="s-head" data-reveal>
          <h2 className="s-h2">Cómo trabajamos</h2>
          <p className="s-body">
            Un proceso sencillo y transparente, con tu aprobación en cada paso.
          </p>
        </header>
        <ol className="s-process__list">
          {PROCESS.map((step, index) => (
            <li
              key={step.title}
              className="s-step"
              data-reveal
              style={{ '--reveal-delay': `${index * 80}ms` }}
            >
              <span className="s-step__number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="s-step__title">{step.title}</h3>
              <p className="s-step__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
