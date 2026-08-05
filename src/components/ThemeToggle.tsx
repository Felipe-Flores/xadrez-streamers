import { useTheme } from '../hooks/useTheme'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dracula'

  return (
    <button
      type="button"
      className="theme-toggle"
      role="switch"
      aria-checked={isDark}
      aria-label={
        isDark
          ? 'Tema escuro ativo, alternar para claro'
          : 'Tema claro ativo, alternar para escuro'
      }
      title={isDark ? 'Tema Dark' : 'Tema Claro'}
      onClick={() => setTheme(isDark ? 'light' : 'dracula')}
    >
      <span
        className="material-symbols-outlined theme-toggle__icon theme-toggle__icon--sun"
        aria-hidden="true"
      >
        light_mode
      </span>
      <span className="theme-toggle__knob" />
      <span
        className="material-symbols-outlined theme-toggle__icon theme-toggle__icon--moon"
        aria-hidden="true"
      >
        dark_mode
      </span>
    </button>
  )
}

export default ThemeToggle
