import type { SortOrder } from '../types/filter'

interface SortControlProps {
  value: SortOrder
  onChange: (value: SortOrder) => void
}

function SortControl({ value, onChange }: SortControlProps) {
  const label = value === 'online-first' ? 'Online primeiro' : 'Offline primeiro'

  return (
    <button
      type="button"
      className="sort-button"
      title={label}
      onClick={() =>
        onChange(value === 'online-first' ? 'offline-first' : 'online-first')
      }
    >
      <span className="material-symbols-outlined sort-button__icon" aria-hidden="true">
        sort
      </span>
      {label}
    </button>
  )
}

export default SortControl
