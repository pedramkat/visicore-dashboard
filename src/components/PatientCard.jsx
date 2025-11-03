import React from 'react'

export default function PatientCard({ patient }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-4 flex gap-4 min-h-[9rem] bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50">
      <img
        src={patient.image}
        alt={patient.name}
        className="h-12 w-12 rounded-full object-cover ring-2 ring-slate-200"
        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/48?text=P' }}
      />
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-900">{patient.name}</h3>
          {patient.status && (
            <span className={`text-xs px-2 py-0.5 rounded-full border ${
              patient.status === 'Critical' ? 'text-red-700 bg-red-50 border-red-200' :
              patient.status === 'Monitoring' ? 'text-blue-700 bg-blue-50 border-blue-200' :
              patient.status === 'Recovered' ? 'text-green-700 bg-green-50 border-green-200' : 'text-slate-700 bg-slate-50 border-slate-200'
            }`}>
              {patient.status}
            </span>
          )}
        </div>
        <div className="text-sm text-slate-500">{patient.age} years • {patient.gender}</div>
        {patient.summary && (
          <div className="mt-3 text-sm text-slate-600">
            <div className="flex items-start gap-2">
              <span>🫀</span>
              <p
                className="m-0"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {patient.summary}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
