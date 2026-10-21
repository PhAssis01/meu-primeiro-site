import { PROJECTS } from '../data'
import { useStudioCopy } from '../copy'
import { PREVIEWS } from './previews'
import Link from '../../router/Link'
import BrowserFrame from './BrowserFrame'
import Arrow from './Arrow'

function ProjectCard({ project, index, t }) {
  const Preview = PREVIEWS[project.preview]
  const number = String(index + 1).padStart(2, '0')
  const text = t.items[project.slug]

  return (
    <article className={`s-project${index % 2 ? ' s-project--flip' : ''}`} data-reveal>
      <Link
        to={project.href}
        className="s-project__media"
        aria-label={t.viewAria(text.name)}
        tabIndex={-1}
      >
        <BrowserFrame url={project.url} data-parallax="0.04">
          {Preview ? <Preview /> : null}
        </BrowserFrame>
      </Link>

      <div className="s-project__info">
        <div className="s-project__top">
          <span className="s-project__number">{number}</span>
          <span className="s-project__category">{text.category}</span>
        </div>
        <h3 className="s-project__name">{text.name}</h3>
        <p className="s-project__label">{text.label}</p>
        <p className="s-project__desc">{text.description}</p>
        <ul className="s-project__tags" aria-label={t.includes}>
          {text.highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Link to={project.href} className="s-btn s-btn--primary">
          {t.view} <Arrow />
        </Link>
      </div>
    </article>
  )
}

export default function Projects() {
  const t = useStudioCopy().projects

  return (
    <section id="proyectos" className="s-section s-projects">
      <div className="s-container">
        <header className="s-head" data-reveal>
          <h2 className="s-h2">{t.title}</h2>
          <p className="s-body">{t.intro}</p>
        </header>

        <div className="s-projects__list">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} t={t} />
          ))}
        </div>

        <p className="s-projects__more" data-reveal>
          <span>{t.more}</span>
          <a href="#contacto" className="s-link">
            {t.moreLink}
          </a>
        </p>
      </div>
    </section>
  )
}
