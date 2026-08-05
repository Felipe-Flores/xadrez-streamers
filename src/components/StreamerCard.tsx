import type { Streamer } from '../types/streamer'

interface StreamerCardProps {
  streamer: Streamer
}

function StreamerCard({ streamer }: StreamerCardProps) {
  const hasTwitch = streamer.twitch_url !== null

  return (
    <article className="streamer-card">
      <div className="streamer-card__avatar-wrap">
        <span
          className={`streamer-card__status ${
            streamer.is_live
              ? 'streamer-card__status--online'
              : 'streamer-card__status--offline'
          }`}
          role="img"
          aria-label={streamer.is_live ? 'Online' : 'Offline'}
          title={streamer.is_live ? 'Online' : 'Offline'}
        />
        {streamer.avatar ? (
          <img
            className="streamer-card__avatar"
            src={streamer.avatar}
            alt={`Avatar de ${streamer.username}`}
          />
        ) : (
          <div
            className="streamer-card__avatar streamer-card__avatar--fallback"
            aria-hidden="true"
          >
            {streamer.username.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <h2 className="streamer-card__name">{streamer.username}</h2>
      <div className="streamer-card__footer">
        {hasTwitch ? (
          <a
            className="streamer-card__button"
            href={streamer.twitch_url!}
            target="_blank"
            rel="noreferrer"
          >
            Ver na Twitch
            <span
              className="material-symbols-outlined streamer-card__button-icon"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </a>
        ) : (
          <button
            type="button"
            className="streamer-card__button"
            disabled
            title="Streamer sem canal na Twitch"
          >
            Ver na Twitch
            <span
              className="material-symbols-outlined streamer-card__button-icon"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </button>
        )}
      </div>
    </article>
  )
}

export default StreamerCard
