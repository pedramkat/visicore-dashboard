import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { patients } from '../data/mockData'

export default function PatientDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const patient = patients.find((p) => String(p.id) === String(id))
  const [activeTab, setActiveTab] = useState('medical') // 'medical' | 'mri' | 'analysis'

  if (!patient) {
    navigate('/patients', { replace: true })
    return null
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex">
      <Sidebar open={false} onClose={() => {}} />
      <div className="flex-1 min-w-0">
        <header className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-slate-200 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-slate-700 hover:bg-slate-50"
            aria-label="Go back"
          >
            ←
          </button>
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-semibold">Patient Details</h1>
            <p className="text-slate-500 text-sm mt-0.5">Comprehensive patient information</p>
          </div>
          {patient.status && (
            <span className={`text-xs px-2 py-1 rounded-full border ${
              patient.status === 'Critical' ? 'text-red-700 bg-red-50 border-red-200' :
              patient.status === 'Monitoring' ? 'text-blue-700 bg-blue-50 border-blue-200' :
              patient.status === 'Recovered' ? 'text-green-700 bg-green-50 border-green-200' : 'text-slate-700 bg-slate-50 border-slate-200'
            }`}>
              {patient.status}
            </span>
          )}
        </header>

        <main className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile card */}
            <div className="lg:col-span-1 rounded-xl border border-slate-200 bg-white shadow-sm p-6">
              <div className="flex flex-col items-center text-center">
                <img
                  src={patient.image}
                  alt={patient.name}
                  className="h-24 w-24 rounded-full object-cover ring-2 ring-slate-200"
                  onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/96?text=P' }}
                />
                <h2 className="mt-4 text-xl font-semibold">{patient.name}</h2>
                <p className="text-slate-500 text-sm">Patient ID: {patient.id}</p>
              </div>

              <div className="mt-6 space-y-3">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="text-xs uppercase text-slate-500">Age / Gender</div>
                  <div className="font-medium">{patient.age} years • {patient.gender}</div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="text-xs uppercase text-slate-500">Blood Type</div>
                  <div className="font-medium">{patient.medicalInfo?.bloodType || '—'}</div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="text-xs uppercase text-slate-500">Allergies</div>
                  <div className="font-medium">{patient.medicalInfo?.allergies?.length ? patient.medicalInfo.allergies.join(', ') : 'None'}</div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="text-xs uppercase text-slate-500">Conditions</div>
                  <ul className="list-disc list-inside text-sm text-slate-700">
                    {(patient.medicalInfo?.conditions || []).map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                    {!patient.medicalInfo?.conditions?.length && <li className="list-none text-slate-500">None</li>}
                  </ul>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="text-xs uppercase text-slate-500">Date of Birth</div>
                  <div className="font-medium">{patient.dateOfBirth || '—'}</div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="text-xs uppercase text-slate-500">Last Visit</div>
                  <div className="font-medium">{patient.lastVisit || '—'}</div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="text-xs uppercase text-slate-500">Next Appointment</div>
                  <div className="font-medium">{patient.nextAppointment || '—'}</div>
                </div>
              </div>
            </div>

            {/* Right column with tabs */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-1">
                <button
                  onClick={() => setActiveTab('medical')}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                    activeTab === 'medical' ? 'bg-brand text-white' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  Medical Info
                </button>
                <button
                  onClick={() => setActiveTab('mri')}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                    activeTab === 'mri' ? 'bg-brand text-white' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  MRI Images
                </button>
                <button
                  onClick={() => setActiveTab('analysis')}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                    activeTab === 'analysis' ? 'bg-brand text-white' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  Analysis
                </button>
              </div>

              {/* Tab Panels */}
              {activeTab === 'medical' && (
                <div className="space-y-6">
                  <section className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span>🫀</span>
                      <h3 className="text-lg font-semibold">Diagnosis</h3>
                    </div>
                    <p className="text-slate-700">{patient.summary || 'No diagnosis summary available.'}</p>
                  </section>
                  <section className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span>📚</span>
                      <h3 className="text-lg font-semibold">Medical History</h3>
                    </div>
                    {patient.medicalHistory?.length ? (
                      <ul className="list-disc list-inside text-slate-700">
                        {patient.medicalHistory.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-slate-500">No medical history available.</p>
                    )}
                  </section>
                  <section className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span>💊</span>
                      <h3 className="text-lg font-semibold">Current Medications</h3>
                    </div>
                    {patient.medications?.length ? (
                      <ul className="list-disc list-inside text-slate-700">
                        {patient.medications.map((m, idx) => (
                          <li key={idx}>{m}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-slate-500">No medications recorded.</p>
                    )}
                  </section>
                  <section className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span>🌿</span>
                      <h3 className="text-lg font-semibold">Allergies</h3>
                    </div>
                    {patient.medicalInfo?.allergies?.length ? (
                      <ul className="list-disc list-inside text-slate-700">
                        {patient.medicalInfo.allergies.map((a, idx) => (
                          <li key={idx}>{a}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-slate-500">No known allergies.</p>
                    )}
                  </section>
                </div>
              )}

              {activeTab === 'mri' && (
                <section className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span>🧠</span>
                    <h3 className="text-lg font-semibold">MRI Scans</h3>
                  </div>
                  {patient.mriImages?.length ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {patient.mriImages.map((m) => (
                        <div key={m.id} className="rounded-lg border border-slate-200 bg-slate-50 p-4 flex gap-4">
                          <img src={m.url} alt={m.type} className="h-16 w-16 object-contain rounded" />
                          <div className="text-sm">
                            <div className="font-medium">{m.type}</div>
                            <div className="text-slate-500">{m.date}</div>
                            {m.analysis?.findings?.length && (
                              <ul className="list-disc list-inside mt-1 text-slate-700">
                                {m.analysis.findings.map((f, idx) => (
                                  <li key={idx}>{f}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-500">No MRI images available.</p>
                  )}
                </section>
              )}

              {activeTab === 'analysis' && (
                <section className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span>📈</span>
                    <h3 className="text-lg font-semibold">Medical Analysis & Findings</h3>
                  </div>
                  <p className="text-slate-700">{patient.analysis || 'No analysis available.'}</p>
                </section>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
