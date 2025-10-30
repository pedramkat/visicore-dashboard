import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import DashboardCard from '../components/DashboardCard'

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
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
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold">Dashboard</h1>
            <p className="text-slate-500 text-sm mt-0.5">Manage and monitor your work flow</p>
          </div>
        </header>

        <main className="px-4 sm:px-6 lg:px-8 py-6">
          {/* Hero grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-4 sm:gap-6">
            {/* Heart health overview - large left card (xl: span 7) */}
            <DashboardCard
              title="Heart health overview"
              subtitle="The valve is working perfectly!"
              className="xl:col-span-7"
              bg="from-blue-100 via-sky-100 to-indigo-100"
              footer={<button className="px-3 py-2 text-sm rounded-lg bg-white text-slate-700 border border-slate-200 hover:bg-slate-50">Add info</button>}
            >
              <div className="h-44 sm:h-56 flex items-center justify-center">
                <div className="w-full h-28 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center text-slate-600 text-sm">
                  Heart model / chart placeholder
                </div>
              </div>
            </DashboardCard>

            {/* Mini stats - xl span 5 */}
            <DashboardCard
              title={<span className="text-sm text-slate-600">SpO₂ 97%</span>}
              className="xl:col-span-5"
              bg="from-indigo-100 to-blue-100"
            >
              <div className="h-44 sm:h-56 flex items-center justify-center">
                <div className="w-full h-28 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center text-slate-600 text-sm">
                  Live vitals chart placeholder
                </div>
              </div>
            </DashboardCard>

            {/* Meditation / media card - xl span 3 */}
            <DashboardCard title="Mindfulness" className="xl:col-span-3" bg="from-indigo-200 to-purple-200">
              <div className="h-40 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center text-slate-600 text-sm">
                Audio player placeholder
              </div>
            </DashboardCard>

            {/* Choose your personal doctor - xl span 6 */}
            <DashboardCard title="Choose your latest patient" className="xl:col-span-6" bg="from-blue-50 to-indigo-100">
              <div className="grid grid-cols-4 gap-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="h-16 w-16 rounded-full bg-white/70 ring-2 ring-white/60" />
                    <div className="h-2 w-14 rounded bg-white/60" />
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <button className="px-3 py-2 text-sm rounded-lg bg-white text-slate-700 border border-slate-200 hover:bg-slate-50">See everyone</button>
              </div>
            </DashboardCard>

            {/* Personal sleep tracking - xl span 3
            <DashboardCard title="Personal sleep tracking" className="xl:col-span-3" bg="from-indigo-100 to-blue-200">
              <div className="h-40 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center text-slate-600 text-sm">
                Sleep chart placeholder
              </div>
            </DashboardCard> */}

            {/* Recovery goal - xl span 3 */}
            <DashboardCard title="Recovery goal" subtitle="Month" className="xl:col-span-3" bg="from-slate-50 to-blue-50">
              <div className="flex items-center justify-center py-6">
                <svg viewBox="0 0 36 36" className="w-36 h-36">
                  <path d="M18 2.0845
                           a 15.9155 15.9155 0 0 1 0 31.831
                           a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                  <path d="M18 2.0845
                           a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#2563eb" strokeWidth="3" strokeDasharray="75, 100" />
                </svg>
              </div>
              <div className="text-center text-slate-600 text-sm">Get better by +126%</div>
            </DashboardCard>
          </div>
        </main>
      </div>
    </div>
  )
}
