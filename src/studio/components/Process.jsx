import { useStudioCopy } from '../copy'

export default function Process() {
  const t = useStudioCopy().process

  return (
    <section id="proceso" className="s-section s-process">
      <div className="s-container">
        <header className="s-head" data-reveal>
          <h2 className="s-h2">{t.title}</h2>
          <p className="s-body">{t.intro}</p>
        </header>
        <ol className="s-process__list">
          {t.steps.map((step, index) => (
            <li
              key={index}
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
