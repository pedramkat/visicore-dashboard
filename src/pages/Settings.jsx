import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { getCurrentUserId, getSettingsForUser, saveSettingsForUser } from '../data/mockSettings'

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const userId = getCurrentUserId()
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    darkMode: false,
    twoFactor: false,
    autoSave: true,
    cloudSync: true,
  })

  useEffect(() => {
    const s = getSettingsForUser(userId)
    setSettings(s)
  }, [userId])

  const toggle = (key) => setSettings((s) => ({ ...s, [key]: !s[key] }))

  const onSave = async () => {
    setSaving(true)
    setSaved(false)
    // mimic async
    await new Promise((r) => setTimeout(r, 300))
    saveSettingsForUser(userId, settings)
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  const Switch = ({ checked, onChange, label, sub }) => (
    <div className="flex items-center justify-between py-2">
      <div>
        <div className="font-medium text-slate-900">{label}</div>
        {sub && <div className="text-sm text-slate-500">{sub}</div>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${checked ? 'bg-brand' : 'bg-slate-300'}`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${checked ? 'translate-x-5' : 'translate-x-1'}`}
        />
      </button>
    </div>
  )

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
            <h1 className="text-xl sm:text-2xl font-semibold">Settings</h1>
            <p className="text-slate-500 text-sm mt-0.5">Manage your application preferences</p>
          </div>
          <button
            onClick={onSave}
            className="inline-flex items-center gap-2 rounded-lg bg-brand hover:bg-brand-dark text-white px-4 py-2 border border-brand"
            disabled={saving}
          >
            <span>💾</span>
            {saving ? 'Saving…' : saved ? 'Saved' : 'Save Settings'}
          </button>
        </header>
        <main className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Notifications */}
            <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span>🔔</span>
                <h2 className="text-lg font-semibold">Notifications</h2>
              </div>
              <Switch
                checked={settings.emailNotifications}
                onChange={() => toggle('emailNotifications')}
                label="Email Notifications"
                sub="Receive email updates about patient reports"
              />
              <div className="my-2 border-t border-slate-200" />
              <Switch
                checked={settings.pushNotifications}
                onChange={() => toggle('pushNotifications')}
                label="Push Notifications"
                sub="Get instant alerts for critical updates"
              />
            </section>

            {/* Appearance */}
            <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span>🎨</span>
                <h2 className="text-lg font-semibold">Appearance</h2>
              </div>
              <Switch
                checked={settings.darkMode}
                onChange={() => toggle('darkMode')}
                label="Dark Mode"
                sub="Use dark theme for the interface"
              />
              <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
                The Visicore theme features a premium design inspired by medical technology.
              </div>
            </section>

            {/* Security */}
            <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span>🛡️</span>
                <h2 className="text-lg font-semibold">Security</h2>
              </div>
              <Switch
                checked={settings.twoFactor}
                onChange={() => toggle('twoFactor')}
                label="Two-Factor Authentication"
                sub="Add an extra layer of security"
              />
              <div className="mt-3 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700">
                All patient data is encrypted and HIPAA compliant.
              </div>
            </section>

            {/* Data & Storage */}
            <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span>🗄️</span>
                <h2 className="text-lg font-semibold">Data & Storage</h2>
              </div>
              <Switch
                checked={settings.autoSave}
                onChange={() => toggle('autoSave')}
                label="Auto-Save"
                sub="Automatically save changes"
              />
              <div className="my-2 border-t border-slate-200" />
              <Switch
                checked={settings.cloudSync}
                onChange={() => toggle('cloudSync')}
                label="Cloud Sync"
                sub="Sync data across devices"
              />
            </section>
          </div>
        </main>
      </div>
    </div>
  )
 }
