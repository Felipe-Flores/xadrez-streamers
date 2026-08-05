import type { StatusFilterOption } from '../types/filter'

interface StatusFilterProps {
  value: StatusFilterOption
  onChange: (value: StatusFilterOption) => void
}

const OPTIONS: { value: StatusFilterOption; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'online', label: 'Online' },
  { value: 'offline', label: 'Offline' },
]

function StatusFilter({ value, onChange }: StatusFilterProps) {
  return (
    <select
      className="filter-select"
      value={value}
      onChange={(event) => onChange(event.target.value as StatusFilterOption)}
      aria-label="Filtrar por status"
    >
      {OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default StatusFilter
