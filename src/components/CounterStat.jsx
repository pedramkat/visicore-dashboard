import React from 'react'

export default function CounterStat({ label, value, icon = '📄', className = '' }) {
  return (
    <div className={`hidden sm:flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 ${className}`}>
      <span>{icon}</span>
      <span className="text-slate-500">{label}</span>
      <span className="ml-1 font-semibold text-slate-900">{value}</span>
    </div>
  )
}
