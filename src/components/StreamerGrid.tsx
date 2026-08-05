import type { Streamer } from '../types/streamer'
import StreamerCard from './StreamerCard'

interface StreamerGridProps {
  streamers: Streamer[]
}

function StreamerGrid({ streamers }: StreamerGridProps) {
  if (streamers.length === 0) {
    return <p className="page-message">Nenhum streamer encontrado.</p>
  }

  return (
    <div className="streamer-grid">
      {streamers.map((streamer) => (
        <StreamerCard key={streamer.username} streamer={streamer} />
      ))}
    </div>
  )
}

export default StreamerGrid
