import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { users } from '../data/mockData'

export default function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const user = users[0]
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
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold">Profile</h1>
            <p className="text-slate-500 text-sm mt-0.5">This page is currently empty.</p>
          </div>
        </header>
        <main className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-500">
            <div className="flex items-center gap-4">
              <img src={user?.avatar} alt={user?.name} className="h-12 w-12 rounded-full" />
              <div>
                <div className="font-medium text-slate-900">{user?.name}</div>
                <div className="text-sm text-slate-500">{user?.email}</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
