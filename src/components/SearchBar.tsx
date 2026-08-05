interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search">
      <span className="material-symbols-outlined search__icon" aria-hidden="true">
        search
      </span>
      <input
        type="text"
        className="search__input"
        placeholder="Buscar usuário..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar
