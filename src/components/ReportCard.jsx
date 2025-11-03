import React from 'react'
import { Link } from 'react-router-dom'

const statusStyles = {
  'Critical Severity': 'text-red-700 bg-red-100 border-red-200',
  Critical: 'text-red-700 bg-red-100 border-red-200',
  Reviewed: 'text-blue-700 bg-blue-100 border-blue-200',
  Completed: 'text-green-700 bg-green-100 border-green-200',
  Pending: 'text-amber-700 bg-amber-100 border-amber-200',
}

const typeStyles = {
  MRI: 'text-indigo-700 bg-indigo-100 border-indigo-200',
  'Follow-up': 'text-amber-700 bg-amber-100 border-amber-200',
  Screening: 'text-teal-700 bg-teal-100 border-teal-200',
  Preventive: 'text-purple-700 bg-purple-100 border-purple-200',
  General: 'text-slate-700 bg-slate-100 border-slate-200',
}

function pillClass(base, map, key) {
  const c = map[key] || map.General || 'text-slate-700 bg-slate-100 border-slate-200'
  return `${base} ${c}`
}

function formatDate(d) {
  if (!d) return '—'
  const date = new Date(d)
  if (isNaN(date)) return d
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const yyyy = date.getFullYear()
  return `${dd}/${mm}/${yyyy}`
}

export default function ReportCard({ report }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{report.title}</h3>
          <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-slate-700">
            <span>👤 {report.patientName}</span>
            <span>•</span>
            <span>{formatDate(report.date)}</span>
          </div>
        </div>
        <Link
          to={`/patient/${report.patientId}`}
          className="shrink-0 inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-slate-700 bg-white hover:bg-white/70"
        >
          View Details
        </Link>
      </div>
      <p className="mt-3 text-sm text-slate-800 line-clamp-3" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
        {report.content}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className={pillClass('text-xs px-2 py-0.5 rounded-full border', statusStyles, report.status)}> {report.status} </span>
        <span className={pillClass('text-xs px-2 py-0.5 rounded-full border', typeStyles, report.type || 'General')}> {report.type} </span>
      </div>
    </div>
  )
}
