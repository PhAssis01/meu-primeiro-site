// Lógica de filtrado del buscador (sin dependencias de React).
import { PROPERTIES } from './data'

export const DEFAULT_FILTERS = {
  operation: 'venta',
  city: '',
  type: '',
  min: '',
  max: '',
  beds: '',
  sort: 'relevance',
}

// Aplica un cambio. Al cambiar de operación se reinician los precios
// (venta en euros, alquiler en euros/mes: los rangos no son comparables).
export function updateFilters(filters, key, value) {
  const next = { ...filters, [key]: value }
  if (key === 'operation') {
    next.min = ''
    next.max = ''
  }
  // Si el mínimo supera al máximo, se ajusta el otro extremo.
  if (next.min && next.max && Number(next.min) > Number(next.max)) {
    if (key === 'min') next.max = ''
    else next.min = ''
  }
  return next
}

export function filterProperties(filters, list = PROPERTIES) {
  const result = list.filter(
    (property) =>
      property.operation === filters.operation &&
      (!filters.city || property.city === filters.city) &&
      (!filters.type || property.type === filters.type) &&
      (!filters.min || property.price >= Number(filters.min)) &&
      (!filters.max || property.price <= Number(filters.max)) &&
      (!filters.beds || property.beds >= Number(filters.beds)),
  )
  const sorters = {
    priceAsc: (a, b) => a.price - b.price,
    priceDesc: (a, b) => b.price - a.price,
    areaDesc: (a, b) => b.area - a.area,
  }
  return sorters[filters.sort] ? [...result].sort(sorters[filters.sort]) : result
}

// Categoría elegida desde la sección «Explora por tipo»: si no hay inmuebles
// de ese tipo en la operación actual, se cambia a la que sí los tiene.
export function filtersForType(filters, type) {
  const hasType = (operation) => PROPERTIES.some((p) => p.type === type && p.operation === operation)
  const operation = hasType(filters.operation)
    ? filters.operation
    : PROPERTIES.find((p) => p.type === type)?.operation ?? filters.operation
  return { ...DEFAULT_FILTERS, operation, type }
}

export const isFiltered = (filters) =>
  Object.keys(DEFAULT_FILTERS).some((key) => key !== 'operation' && key !== 'sort' && filters[key] !== DEFAULT_FILTERS[key])
