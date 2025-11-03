import React, { useMemo, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { patients } from '../data/mockData'
import CounterStat from '../components/CounterStat'
import { Link } from 'react-router-dom'
import ReportCard from '../components/ReportCard'

function formatDate(d) {
  if (!d) return '—'
  const date = new Date(d)
  if (isNaN(date)) return d
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const yyyy = date.getFullYear()
  return `${dd}/${mm}/${yyyy}`
}

export default function Reports() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')

  const allReports = useMemo(() => {
    // Build a report list; guarantee at least one report per patient and add a type when missing
    const items = patients.flatMap((p) => {
      const baseType = p.mriImages?.length ? 'MRI' : 'Follow-up'
      if (!p.reports || p.reports.length === 0) {
        return [
          {
            id: `auto-${p.id}`,
            date: p.lastVisit || new Date().toISOString().slice(0, 10),
            title: baseType === 'MRI' ? 'MRI Analysis' : 'Follow-up',
            type: baseType,
            status: 'Completed',
            content:
              p.analysis || p.summary || 'No detailed notes available.',
            doctor: 'Dr. Sarah Johnson',
            patientId: p.id,
            patientName: p.name,
          },
        ]
      }
      return p.reports.map((r, idx) => ({
        id: r.id ?? `${p.id}-${idx}`,
        date: r.date,
        title: r.title || 'Report',
        type: r.type || (r.title?.toLowerCase().includes('mri') ? 'MRI' : baseType),
        status: r.status || 'Reviewed',
        content: r.content,
        doctor: r.doctor || '—',
        patientId: p.id,
        patientName: p.name,
      }))
    })
    // Sort by date desc
    return items.sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [])

  const types = useMemo(() => {
    const s = new Set(allReports.map((r) => r.type || 'General'))
    return ['all', ...Array.from(s)]
  }, [allReports])

  const filtered = allReports.filter((r) => {
    const nameOk = r.patientName.toLowerCase().includes(query.trim().toLowerCase())
    const typeOk = typeFilter === 'all' || r.type === typeFilter
    return nameOk && typeOk
  })

  return (
    <div className="min-h-screen bg-white text-slate-900 flex">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 min-w-0">
        <header className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-slate-200 flex items-center gap-4">
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-slate-700 hover:bg-slate-50"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            ☰
          </button>
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-semibold">Medical Reports</h1>
            <p className="text-slate-500 text-sm mt-0.5">View and manage patient reports</p>
          </div>
          <CounterStat label="Total Reports" value={filtered.length} icon="📄" />
        </header>
        <main className="px-4 sm:px-6 lg:px-8 py-6">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by patient name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 pl-10 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔎</span>
            </div>
            <div className="relative">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              >
                {types.map((t) => (
                  <option key={t} value={t}>
                    {t === 'all' ? 'All Types' : t}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">▾</span>
            </div>
          </div>

          {/* List */}
          <div className="mt-6 space-y-4">
            {filtered.map((r) => (
              <ReportCard key={r.id} report={r} />
            ))}
            {filtered.length === 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-500">No reports match your filters.</div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
