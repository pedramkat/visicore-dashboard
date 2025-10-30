import React from 'react'

export default function DashboardCard({ title, subtitle, children, className = '', footer, bg = 'from-blue-50 to-indigo-100' }) {
  return (
    <div className={`rounded-2xl overflow-hidden border border-slate-200 bg-white ${className} bg-gradient-to-br ${bg}`}>
      <div className={`p-5 sm:p-6`}>
        {(title || subtitle) && (
          <div className="mb-4">
            {title && <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{title}</h3>}
            {subtitle && <p className="text-slate-600 text-sm mt-1">{subtitle}</p>}
          </div>
        )}
        <div>{children}</div>
      </div>
      {footer && (
        <div className="px-5 sm:px-6 py-4 bg-white/70 backdrop-blur border-t border-slate-200">
          {footer}
        </div>
      )}
    </div>
  )
}
