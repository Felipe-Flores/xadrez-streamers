import ThemeToggle from './ThemeToggle'

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__brand" href="/">
          Xadrez Streamers
        </a>
        <div className="header__actions">
          <button type="button" className="icon-button" aria-label="Notificações">
            <span className="material-symbols-outlined" aria-hidden="true">
              notifications
            </span>
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
