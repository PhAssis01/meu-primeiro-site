import { CITIES, OPERATIONS, PRICE_STEPS, TYPES } from '../data'
import { formatAmount, useEstateCopy } from '../copy'

// Selector Comprar / Alquilar.
export function OperationTabs({ value, onChange, idPrefix }) {
  const t = useEstateCopy()
  return (
    <div className="re-tabs" role="radiogroup" aria-label={t.search.operation}>
      {OPERATIONS.map((operation) => (
        <label key={operation} className={`re-tabs__item${value === operation ? ' is-active' : ''}`}>
          <input
            type="radio"
            name={`${idPrefix}-operation`}
            value={operation}
            checked={value === operation}
            onChange={() => onChange('operation', operation)}
          />
          <span>{t.operations[operation]}</span>
        </label>
      ))}
    </div>
  )
}

function Select({ id, label, value, onChange, children }) {
  return (
    <div className="re-select">
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={(event) => onChange(event.target.value)}>
        {children}
      </select>
    </div>
  )
}

// Campos del buscador. `fields`: cuáles mostrar (el hero usa una versión corta).
export default function SearchFields({ filters, onChange, idPrefix, fields }) {
  const t = useEstateCopy()
  const s = t.search
  const steps = PRICE_STEPS[filters.operation]
  const show = (name) => fields.includes(name)

  return (
    <>
      {show('city') && (
        <Select id={`${idPrefix}-city`} label={s.location} value={filters.city} onChange={(v) => onChange('city', v)}>
          <option value="">{s.anyLocation}</option>
          {CITIES.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </Select>
      )}
      {show('type') && (
        <Select id={`${idPrefix}-type`} label={s.type} value={filters.type} onChange={(v) => onChange('type', v)}>
          <option value="">{s.anyType}</option>
          {TYPES.map((type) => (
            <option key={type} value={type}>
              {t.types[type].one}
            </option>
          ))}
        </Select>
      )}
      {show('min') && (
        <Select id={`${idPrefix}-min`} label={s.minPrice} value={filters.min} onChange={(v) => onChange('min', v)}>
          <option value="">{s.noMin}</option>
          {steps.map((step) => (
            <option key={step} value={step}>
              {formatAmount(step, t)}
            </option>
          ))}
        </Select>
      )}
      {show('max') && (
        <Select id={`${idPrefix}-max`} label={s.maxPrice} value={filters.max} onChange={(v) => onChange('max', v)}>
          <option value="">{s.noMax}</option>
          {steps.map((step) => (
            <option key={step} value={step}>
              {formatAmount(step, t)}
            </option>
          ))}
        </Select>
      )}
      {show('beds') && (
        <Select id={`${idPrefix}-beds`} label={s.beds} value={filters.beds} onChange={(v) => onChange('beds', v)}>
          <option value="">{s.anyBeds}</option>
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {s.bedsOption(n)}
            </option>
          ))}
        </Select>
      )}
      {show('sort') && (
        <Select id={`${idPrefix}-sort`} label={s.sort} value={filters.sort} onChange={(v) => onChange('sort', v)}>
          {Object.entries(s.sortOptions).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </Select>
      )}
    </>
  )
}
