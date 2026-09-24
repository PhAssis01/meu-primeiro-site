// Marcos de dispositivos dibujados con CSS.

export default function BrowserFrame({ url, children, className = '', ...rest }) {
  return (
    <div className={`s-browser ${className}`} {...rest}>
      <div className="s-browser__bar">
        <span className="s-browser__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="s-browser__url">{url}</span>
      </div>
      <div className="s-browser__screen">{children}</div>
    </div>
  )
}

export function LaptopFrame({ children, className = '', ...rest }) {
  return (
    <div className={`s-laptop ${className}`} {...rest}>
      <div className="s-laptop__lid">
        <div className="s-laptop__screen">{children}</div>
      </div>
      <div className="s-laptop__base" />
    </div>
  )
}

export function PhoneFrame({ children, className = '', ...rest }) {
  return (
    <div className={`s-phone ${className}`} {...rest}>
      <div className="s-phone__screen">{children}</div>
    </div>
  )
}
