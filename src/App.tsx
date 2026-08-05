import { useCallback, useEffect, useMemo, useState } from 'react'
import { fetchStreamers } from './api/streamers'
import Header from './components/Header'
import LoadingGrid from './components/LoadingGrid'
import RefreshButton from './components/RefreshButton'
import SearchBar from './components/SearchBar'
import SortControl from './components/SortControl'
import StatusFilter from './components/StatusFilter'
import StreamerGrid from './components/StreamerGrid'
import type { Streamer } from './types/streamer'
import type { SortOrder, StatusFilterOption } from './types/filter'
import { filterStreamers } from './utils/filterStreamers'
import './App.css'

const REFRESH_INTERVAL_MS = 20 * 60 * 1000

function App() {
  const [streamers, setStreamers] = useState<Streamer[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilterOption>('all')
  const [sortOrder, setSortOrder] = useState<SortOrder>('online-first')

  const loadStreamers = useCallback(async (showLoading: boolean) => {
    if (showLoading) setLoading(true)
    try {
      const data = await fetchStreamers()
      setStreamers(data.streamers)
      setError(null)
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : 'Erro ao carregar os streamers.',
      )
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }, [])

  useEffect(() => {
    void loadStreamers(true)

    const interval = window.setInterval(() => {
      void loadStreamers(false)
    }, REFRESH_INTERVAL_MS)

    return () => window.clearInterval(interval)
  }, [loadStreamers])

  const handleRefresh = () => {
    setRefreshing(true)
    void loadStreamers(false)
  }

  const visibleStreamers = useMemo(
    () => filterStreamers(streamers, search, statusFilter, sortOrder),
    [streamers, search, statusFilter, sortOrder],
  )

  const showError = error !== null && streamers.length === 0

  return (
    <>
      <Header />
      <main className="page">
        <div className="page-header">
          <h1 className="page-title">Streamers</h1>
          <p className="page-subtitle">
            Descubra e acompanhe os streamers de xadrez da plataforma.
          </p>
        </div>
        <div className="toolbar">
          <SearchBar value={search} onChange={setSearch} />
          <StatusFilter value={statusFilter} onChange={setStatusFilter} />
          <SortControl value={sortOrder} onChange={setSortOrder} />
          <RefreshButton loading={refreshing} onRefresh={handleRefresh} />
        </div>
        {loading ? (
          <LoadingGrid />
        ) : showError ? (
          <div className="error-state" role="alert">
            <p className="page-message page-message--error">{error}</p>
            <button
              type="button"
              className="retry-button"
              onClick={() => void loadStreamers(true)}
            >
              Tentar novamente
            </button>
          </div>
        ) : (
          <StreamerGrid streamers={visibleStreamers} />
        )}
      </main>
    </>
  )
}

export default App
