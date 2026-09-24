// Miniatura de The King Barber Shop con sus imágenes reales.
// Escala con el contenedor gracias a las unidades cqw.
import logo from '../../../projects/the-king/assets/logo-the-king.png'
import photo from '../../../projects/the-king/assets/corte-degradado.jpg'

export default function KingPreview({ variant = 'desktop' }) {
  const mobile = variant === 'mobile'

  return (
    <div className={`kp${mobile ? ' kp--mobile' : ''}`}>
      <div className="kp__nav">
        <img src={logo} alt="" className="kp__logo" />
        {mobile ? (
          <span className="kp__burger">
            <i />
            <i />
          </span>
        ) : (
          <>
            <span className="kp__links">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span className="kp__cta">Reservar cita</span>
          </>
        )}
      </div>

      <div className="kp__hero">
        <div className="kp__text">
          <span className="kp__kicker">The King Barber Shop</span>
          <b>Estilo.</b>
          <b>Precisión.</b>
          <b>Carácter.</b>
          <span className="kp__p" />
          <span className="kp__p kp__p--short" />
          <span className="kp__actions">
            <i className="kp__btn" />
            <i className="kp__btn kp__btn--ghost" />
          </span>
        </div>
        <div className="kp__photo">
          <img src={photo} alt="" />
        </div>
      </div>
    </div>
  )
}
