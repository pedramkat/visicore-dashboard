import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { users } from '../data/mockData'

export default function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const user = users[0]
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    specialization: 'Cardiology',
    licenseNumber: 'MD-123456',
    hospital: 'Medical Center',
    phone: '+1 (555) 000-0000',
  })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSave = async () => {
    setSaving(true)
    setSaved(false)
    await new Promise((r) => setTimeout(r, 300))
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

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
            <h1 className="text-xl sm:text-2xl font-semibold">My Profile</h1>
            <p className="text-slate-500 text-sm mt-0.5">Manage your professional information</p>
          </div>
          <button
            onClick={onSave}
            className="inline-flex items-center gap-2 rounded-lg bg-brand hover:bg-brand-dark text-white px-4 py-2 border border-brand"
            disabled={saving}
          >
            <span>💾</span>
            {saving ? 'Saving…' : saved ? 'Saved' : 'Save Changes'}
          </button>
        </header>
        <main className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile picture card */}
            <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 p-6 lg:col-span-1">
              <div className="text-slate-900 font-semibold mb-4 flex items-center gap-2">
                <span>🖼️</span>
                <span>Profile Picture</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-28 w-28 rounded-full bg-gradient-to-br from-sky-300 to-indigo-400 text-white grid place-items-center text-3xl font-bold shadow-inner">
                  {user?.name?.[0] || 'U'}
                </div>
                <div className="mt-4 text-lg font-semibold">{user?.name}</div>
                <div className="text-slate-500 text-sm">Doctor</div>
                <div className="mt-4 text-slate-600 text-sm flex items-center gap-2">
                  <span>✉️</span>
                  <span>{user?.email}</span>
                </div>
              </div>
            </section>

            {/* Professional info form */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">
              <div className="text-slate-900 font-semibold mb-4 flex items-center gap-2">
                <span>👤</span>
                <span>Professional Information</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-600 mb-1">Full Name</label>
                  <input name="fullName" value={form.fullName} onChange={onChange} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-xs text-slate-600 mb-1">Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={onChange} className="w-full rounded-xl border border-slate-300 bg-slate-50 text-slate-500 px-3 py-2 text-sm focus:outline-none" readOnly />
                </div>
                <div>
                  <label className="block text-xs text-slate-600 mb-1">Specialization</label>
                  <input name="specialization" value={form.specialization} onChange={onChange} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-xs text-slate-600 mb-1">License Number</label>
                  <input name="licenseNumber" value={form.licenseNumber} onChange={onChange} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-xs text-slate-600 mb-1">Hospital/Clinic</label>
                  <input name="hospital" value={form.hospital} onChange={onChange} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-xs text-slate-600 mb-1">Phone Number</label>
                  <input name="phone" value={form.phone} onChange={onChange} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent" />
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
