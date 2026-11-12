// Miniatura de la demo inmobiliaria (sin marca: logo y nombre son marcadores).
// Usa una de las fotos de demostración de la propia demo. Escala con cqw.
import { useEstateCopy } from '../../../projects/inmobiliaria/copy'
import { photoSources } from '../../../projects/inmobiliaria/components/Photo'

export default function EstatePreview() {
  const t = useEstateCopy()
  const hero = photoSources('hero')

  return (
    <div className="ep" aria-hidden="true">
      <div className="ep__nav">
        <span className="ep__logo">
          <i className="ep__mark" />
          <span>{t.brand}</span>
        </span>
        <span className="ep__links">
          <i />
          <i />
          <i />
          <i />
        </span>
        <span className="ep__cta">{t.cta}</span>
      </div>
      <div className="ep__hero">
        <img src={hero.src} alt="" loading="lazy" decoding="async" className="ep__img" />
        <span className="ep__title">{t.hero.title}</span>
      </div>
      <div className="ep__search">
        <span className="ep__tabs">
          <b>{t.operations.venta}</b>
          <span>{t.operations.alquiler}</span>
        </span>
        <i />
        <i />
        <i />
        <span className="ep__btn">{t.search.submit}</span>
      </div>
    </div>
  )
}
