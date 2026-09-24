import { PROJECTS } from '../data'
import { PREVIEWS } from './previews'
import Link from '../../router/Link'
import BrowserFrame from './BrowserFrame'
import Arrow from './Arrow'

function ProjectCard({ project, index }) {
  const Preview = PREVIEWS[project.preview]
  const number = String(index + 1).padStart(2, '0')

  return (
    <article className={`s-project${index % 2 ? ' s-project--flip' : ''}`} data-reveal>
      <Link
        to={project.href}
        className="s-project__media"
        aria-label={`Ver proyecto ${project.name}`}
        tabIndex={-1}
      >
        <BrowserFrame url={project.url} data-parallax="0.04">
          {Preview ? <Preview /> : null}
        </BrowserFrame>
      </Link>

      <div className="s-project__info">
        <div className="s-project__top">
          <span className="s-project__number">{number}</span>
          <span className="s-project__category">{project.category}</span>
        </div>
        <h3 className="s-project__name">{project.name}</h3>
        <p className="s-project__label">{project.label}</p>
        <p className="s-project__desc">{project.description}</p>
        <ul className="s-project__tags" aria-label="Qué incluye">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link to={project.href} className="s-btn s-btn--primary">
          Ver proyecto <Arrow />
        </Link>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" className="s-section s-projects">
      <div className="s-container">
        <header className="s-head" data-reveal>
          <h2 className="s-h2">Proyectos seleccionados</h2>
          <p className="s-body">
            La prueba de nuestro trabajo: cada proyecto tiene su propia
            identidad, adaptada al negocio.
          </p>
        </header>

        <div className="s-projects__list">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <p className="s-projects__more" data-reveal>
          <span>Estamos preparando nuevos proyectos para otros sectores.</span>
          <a href="#contacto" className="s-link">
            ¿Quieres que el próximo sea el tuyo?
          </a>
        </p>
      </div>
    </section>
  )
}
