interface RefreshButtonProps {
  loading: boolean
  onRefresh: () => void
}

function RefreshButton({ loading, onRefresh }: RefreshButtonProps) {
  return (
    <button
      type="button"
      className="icon-button refresh-button"
      onClick={onRefresh}
      disabled={loading}
      aria-label="Atualizar lista de streamers"
      title="Atualizar lista"
    >
      <span
        className={`material-symbols-outlined${
          loading ? ' refresh-button__icon--spin' : ''
        }`}
        aria-hidden="true"
      >
        refresh
      </span>
    </button>
  )
}

export default RefreshButton
