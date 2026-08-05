import type { SortOrder, StatusFilterOption } from '../types/filter'
import type { Streamer } from '../types/streamer'

export function filterStreamers(
  streamers: Streamer[],
  search: string,
  status: StatusFilterOption,
  sort: SortOrder,
): Streamer[] {
  const query = search.trim().toLowerCase()

  const filtered = streamers.filter((streamer) => {
    const matchesSearch =
      query === '' || streamer.username.toLowerCase().includes(query)
    const matchesStatus =
      status === 'all' ||
      (status === 'online' && streamer.is_live) ||
      (status === 'offline' && !streamer.is_live)
    return matchesSearch && matchesStatus
  })

  return [...filtered].sort((a, b) => {
    if (a.is_live === b.is_live) {
      return a.username.localeCompare(b.username)
    }
    return sort === 'online-first'
      ? a.is_live
        ? -1
        : 1
      : a.is_live
        ? 1
        : -1
  })
}
