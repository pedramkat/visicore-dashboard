import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { users } from '../data/mockData'

export default function Sidebar({ open = false, onClose = () => {} }) {
  const navigate = useNavigate()
  const navItem = ({ to, label, icon }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
          isActive ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
        }`
      }
      onClick={onClose}
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-64 shrink-0 border-r border-slate-200 bg-white min-h-screen p-4">
        <div className="flex items-center gap-3 mb-6">
          <img src="/images/visicore-128.png" alt="Visicore" className="h-10 w-10" />
          <div>
            <div className="font-semibold text-slate-900">Visicore</div>
            <div className="text-xs text-slate-500">Medical Dashboard</div>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          {navItem({ to: '/dashboard', label: 'Dashboard', icon: (<span className="i">🏠</span>) })}
          {navItem({ to: '/patients', label: 'Patients', icon: (<span className="i">👥</span>) })}
          {navItem({ to: '/reports', label: 'Reports', icon: (<span>📄</span>) })}
          {navItem({ to: '/settings', label: 'Settings', icon: (<span>⚙️</span>) })}
          {navItem({ to: '/profile', label: 'Profile', icon: (<span>👤</span>) })}
        </nav>

        <div className="my-4 border-t border-slate-200"></div>

        <button
          className="mt-1 w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-100"
          onClick={() => navigate('/')}
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>
        
        <div className="mt-auto pt-6 space-y-3">
          {/* Doctor profile */}
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
            <img
              src={users[0]?.avatar || 'https://via.placeholder.com/40?text=DR'}
              alt={users[0]?.name || 'Doctor'}
              className="h-10 w-10 rounded-full object-cover"
              onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/40?text=DR' }}
            />
            <div className="min-w-0">
              <div className="text-sm font-medium text-slate-900 truncate">{users[0]?.name || 'Doctor'}</div>
              <div className="text-xs text-slate-500 truncate">{users[0]?.email || 'doctor@example.com'}</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile drawer */}
      <div className={`lg:hidden fixed inset-0 z-40 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={onClose}
        />
        {/* Panel */}
        <aside
          className={`absolute left-0 top-0 h-full w-72 border-r border-slate-200 bg-white p-4 transform transition-transform ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <img src="/images/visicore-128.png" alt="Visicore" className="h-10 w-10" />
              <div>
                <div className="font-semibold text-slate-900">Visicore</div>
                <div className="text-xs text-slate-500">Medical Dashboard</div>
              </div>
            </div>
            <button onClick={onClose} aria-label="Close sidebar" className="p-2 rounded hover:bg-slate-100">✕</button>
          </div>
          <nav className="flex flex-col gap-2">
            {navItem({ to: '/dashboard', label: 'Dashboard', icon: (<span className="i">🏠</span>) })}
            {navItem({ to: '/patients', label: 'Patients', icon: (<span className="i">👥</span>) })}
            {navItem({ to: '/reports', label: 'Reports', icon: (<span>📄</span>) })}
            {navItem({ to: '/settings', label: 'Settings', icon: (<span>⚙️</span>) })}
            {navItem({ to: '/profile', label: 'Profile', icon: (<span>👤</span>) })}
          </nav>
          <div className="my-4 border-t border-slate-200"></div>
          <div className="mt-4 space-y-3">
            {/* Doctor profile */}
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <img
                src={users[0]?.avatar || 'https://via.placeholder.com/40?text=DR'}
                alt={users[0]?.name || 'Doctor'}
                className="h-10 w-10 rounded-full object-cover"
                onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/40?text=DR' }}
              />
              <div className="min-w-0">
                <div className="text-sm font-medium text-slate-900 truncate">{users[0]?.name || 'Doctor'}</div>
                <div className="text-xs text-slate-500 truncate">{users[0]?.email || 'doctor@example.com'}</div>
              </div>
            </div>
            <button className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-100">
              <span>🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </aside>
      </div>
    </>
  )
}
