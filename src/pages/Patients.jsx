import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import PatientCard from '../components/PatientCard'
import CounterStat from '../components/CounterStat'
import { patients } from '../data/mockData'

export default function Patients() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [animate, setAnimate] = useState(true)

  const normalized = query.trim().toLowerCase()
  const filteredPatients = patients.filter((p) => {
    const nameMatch = p.name.toLowerCase().includes(normalized)
    const ageMatch = String(p.age).includes(normalized)
    return nameMatch || ageMatch
  })

  useEffect(() => {
    setAnimate(false)
    const t = setTimeout(() => setAnimate(true), 0)
    return () => clearTimeout(t)
  }, [normalized])

  return (
    <div className="min-h-screen bg-white text-slate-900 flex">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 min-w-0">
        <header className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-slate-200 flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-slate-700 hover:bg-slate-50"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            ☰
          </button>
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-semibold">Patients</h1>
            <p className="text-slate-500 text-sm mt-0.5">Manage and monitor your patient records</p>
          </div>
          <CounterStat label="Total Patients" value={filteredPatients.length} icon="👥" />
        </header>

        <div className="px-4 sm:px-6 lg:px-8 mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search patients by name or age..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full max-w-full lg:max-w-xl rounded-lg border border-slate-300 bg-white px-4 py-2 pl-10 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔎</span>
          </div>
        </div>

        <main className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {filteredPatients.map((p, i) => (
              <Link
                to={`/patient/${p.id}`}
                key={p.id}
                aria-label={`Open details for ${p.name}`}
                className={`block transform-gpu transition-all duration-300 ease-in-out ${
                  animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand rounded-xl`}
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                <PatientCard patient={p} />
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
