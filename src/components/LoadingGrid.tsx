const SKELETON_COUNT = 8

function LoadingGrid() {
  return (
    <div className="streamer-grid" aria-label="Carregando streamers">
      {Array.from({ length: SKELETON_COUNT }, (_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-card__avatar" />
          <div className="skeleton-card__name" />
          <div className="skeleton-card__button" />
        </div>
      ))}
    </div>
  )
}

export default LoadingGrid
