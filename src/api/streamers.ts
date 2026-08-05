import type { Streamer, StreamersResponse } from '../types/streamer'

const STREAMERS_URL = 'https://api.chess.com/pub/streamers'

interface RawStreamer {
  username?: string
  avatar?: string
  twitch_url?: string
  is_live?: boolean
}

interface RawResponse {
  streamers?: RawStreamer[]
}

function isRawResponse(data: unknown): data is RawResponse {
  return typeof data === 'object' && data !== null && 'streamers' in data
}

function normalize(raw: RawStreamer): Streamer {
  return {
    username: raw.username ?? '',
    avatar: raw.avatar ?? '',
    twitch_url: raw.twitch_url ? raw.twitch_url : null,
    is_live: Boolean(raw.is_live),
  }
}

export async function fetchStreamers(): Promise<StreamersResponse> {
  let response: Response

  try {
    response = await fetch(STREAMERS_URL)
  } catch {
    throw new Error('Não foi possível conectar à API do Chess.com.')
  }

  if (!response.ok) {
    throw new Error(`Falha ao carregar streamers (HTTP ${response.status}).`)
  }

  const data: unknown = await response.json()

  if (!isRawResponse(data)) {
    throw new Error('Resposta da API em formato inesperado.')
  }

  return { streamers: (data.streamers ?? []).map(normalize) }
}
