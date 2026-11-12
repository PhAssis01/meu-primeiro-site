import { useCallback, useMemo, useState } from 'react'
import { PROPERTIES, TYPES, TYPE_IMAGES } from '../data'
import { useEstateCopy } from '../copy'
import { DEFAULT_FILTERS, filterProperties, filtersForType, isFiltered, updateFilters } from '../filters'
import Photo from './Photo'
import PropertyCard from './PropertyCard'
import SearchFields, { OperationTabs } from './SearchFields'
import ContactForm from './ContactForm'
import { ArrowIcon, SearchIcon, WhyIcons } from './Icons'

// Los filtros se recuerdan en memoria durante la visita (al volver de una ficha
// siguen igual). No se guardan en el navegador ni se envían a ningún sitio.
let lastFilters = DEFAULT_FILTERS

const scrollToSearch = () => document.getElementById('buscar')?.scrollIntoView()

function Hero({ filters, onChange }) {
  const t = useEstateCopy()
  const handleSubmit = (event) => {
    event.preventDefault()
    scrollToSearch()
  }

  return (
    <section id="inicio" className="re-hero">
      <div className="re-wrap">
        <div className="re-hero__frame">
          <Photo name="hero" alt={t.hero.photoAlt} sizes="(max-width: 1280px) 100vw, 1240px" priority className="re-hero__img" />
          <div className="re-hero__copy">
            <p className="re-kicker re-kicker--light">{t.hero.kicker}</p>
            <h1 className="re-hero__title">{t.hero.title}</h1>
            <p className="re-hero__text">{t.hero.text}</p>
          </div>
        </div>

        <form className="re-quick" role="search" aria-label={t.search.label} onSubmit={handleSubmit}>
          <OperationTabs value={filters.operation} onChange={onChange} idPrefix="hero" />
          <div className="re-quick__fields">
            <SearchFields filters={filters} onChange={onChange} idPrefix="hero" fields={['city', 'type', 'max']} />
            <button type="submit" className="re-btn re-btn--dark re-quick__submit">
              <SearchIcon className="re-btn__icon" />
              {t.search.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

function Featured() {
  const t = useEstateCopy()
  const featured = PROPERTIES.filter((property) => property.featured).slice(0, 6)
  return (
    <section id="destacados" className="re-section">
      <div className="re-wrap">
        <header className="re-head" data-reveal>
          <h2 className="re-h2">{t.featured.title}</h2>
          <p className="re-lead">{t.featured.intro}</p>
        </header>
        <div className="re-grid">
          {featured.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
        <p className="re-center">
          <a href="#buscar" className="re-btn re-btn--line">
            {t.featured.all} <ArrowIcon className="re-btn__icon" />
          </a>
        </p>
      </div>
    </section>
  )
}

function Categories({ onPick }) {
  const t = useEstateCopy()
  return (
    <section id="categorias" className="re-section re-section--tint">
      <div className="re-wrap">
        <header className="re-head" data-reveal>
          <h2 className="re-h2">{t.categories.title}</h2>
          <p className="re-lead">{t.categories.intro}</p>
        </header>
        <ul className="re-cats">
          {TYPES.map((type) => {
            const count = PROPERTIES.filter((property) => property.type === type).length
            return (
              <li key={type}>
                <button type="button" className="re-cat" onClick={() => onPick(type)}>
                  <Photo name={TYPE_IMAGES[type]} sizes="(max-width: 700px) 46vw, 20vw" className="re-cat__img" />
                  <span className="re-cat__body">
                    <span className="re-cat__name">{t.types[type].many}</span>
                    <span className="re-cat__count">{t.categories.count(count)}</span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

function Why() {
  const t = useEstateCopy()
  return (
    <section className="re-section">
      <div className="re-wrap re-why">
        <header className="re-why__head" data-reveal>
          <h2 className="re-h2">{t.why.title}</h2>
          <p className="re-lead">{t.why.intro}</p>
        </header>
        <ul className="re-why__list">
          {t.why.items.map((item, index) => {
            const Icon = WhyIcons[index]
            return (
              <li key={item.title} className="re-why__item" data-reveal style={{ '--reveal-delay': `${index * 60}ms` }}>
                <Icon className="re-why__icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

function Search({ filters, onChange, onReset }) {
  const t = useEstateCopy()
  const results = useMemo(() => filterProperties(filters), [filters])

  return (
    <section id="buscar" className="re-section re-section--tint">
      <div className="re-wrap">
        <header className="re-head">
          <h2 className="re-h2">{t.search.title}</h2>
          <p className="re-lead">{t.search.intro}</p>
        </header>

        <form className="re-filters" role="search" aria-label={t.search.label} onSubmit={(e) => e.preventDefault()}>
          <OperationTabs value={filters.operation} onChange={onChange} idPrefix="search" />
          <div className="re-filters__fields">
            <SearchFields
              filters={filters}
              onChange={onChange}
              idPrefix="search"
              fields={['city', 'type', 'min', 'max', 'beds', 'sort']}
            />
          </div>
        </form>

        <div className="re-results__bar">
          <p className="re-results__count" role="status" aria-live="polite">
            {t.search.results(results.length)}
          </p>
          {isFiltered(filters) ? (
            <button type="button" className="re-textbtn" onClick={onReset}>
              {t.search.reset}
            </button>
          ) : null}
        </div>

        {results.length ? (
          <div className="re-grid">
            {results.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        ) : (
          <div className="re-empty">
            <p className="re-empty__title">{t.search.empty}</p>
            <p>{t.search.emptyHint}</p>
            <button type="button" className="re-btn re-btn--line" onClick={onReset}>
              {t.search.reset}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function Contact() {
  const t = useEstateCopy()
  const c = t.contact
  return (
    <section id="contacto" className="re-section">
      <div className="re-wrap re-contact">
        <div className="re-contact__intro" data-reveal>
          <h2 className="re-h2">{c.title}</h2>
          <p className="re-lead">{c.text}</p>
          <p className="re-kicker re-contact__office">{c.office}</p>
          <dl className="re-contact__details">
            {c.details.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

export default function Home() {
  const [filters, setFilters] = useState(lastFilters)

  const apply = useCallback((next) => {
    lastFilters = next
    setFilters(next)
  }, [])
  const onChange = useCallback((key, value) => apply(updateFilters(lastFilters, key, value)), [apply])
  const onReset = useCallback(() => apply({ ...DEFAULT_FILTERS, operation: lastFilters.operation }), [apply])
  const onPick = useCallback(
    (type) => {
      apply(filtersForType(lastFilters, type))
      scrollToSearch()
    },
    [apply],
  )

  return (
    <>
      <Hero filters={filters} onChange={onChange} />
      <Featured />
      <Categories onPick={onPick} />
      <Why />
      <Search filters={filters} onChange={onChange} onReset={onReset} />
      <Contact />
    </>
  )
}
