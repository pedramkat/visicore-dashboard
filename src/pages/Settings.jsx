import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Icon } from '../components/Icons';

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [twoFA, setTwoFA] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [cloudSync, setCloudSync] = useState(false);

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
            <h1 className="text-xl sm:text-2xl font-semibold">Settings</h1>
            <p className="text-slate-500 text-sm mt-0.5">Manage your account in this page</p>
          </div>
        </header>

        <div className="m-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Notifications */}
          <SectionCard icon={<Icon.Bell className="h-4 w-4 text-slate-200" />} title="Notifications">
            <SettingRow
              label="Email Notifications"
              description="Receive email updates about patient reports"
              control={<Switch checked={emailNotif} onChange={setEmailNotif} />}
            />
            <div className="my-2 h-px bg-white/10" />
            <SettingRow
              label="Push Notifications"
              description="Get instant alerts for critical updates"
              control={<Switch checked={pushNotif} onChange={setPushNotif} />}
            />
          </SectionCard>


          {/* Appearance */}
          <SectionCard icon={<Icon.Moon className="h-4 w-4 text-slate-200" />} title="Appearance">
            <SettingRow
              label="Dark Mode"
              description="Use dark theme for the interface"
              control={<Switch checked={darkMode} onChange={setDarkMode} />}
            />
            <div className="mt-4 rounded-xl border border-white/10 bg-slate-800/60 p-4 text-sm text-slate-100">
              The Visicore theme features a premium dark design inspired by medical technology.
            </div>
          </SectionCard>


          {/* Security */}
          <SectionCard icon={<Icon.Shield className="h-4 w-4 text-slate-200" />} title="Security">
            <SettingRow
              label="Two-Factor Authentication"
              description="Add an extra layer of security"
              control={<Switch checked={twoFA} onChange={setTwoFA} />}
            />
            <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-500">
              All patient data is encrypted and HIPAA compliant.
            </div>
          </SectionCard>


          {/* Data & Storage */}
          <SectionCard icon={<Icon.Database className="h-4 w-4 text-slate-200" />} title="Data & Storage">
            <SettingRow
              label="Auto-Save"
              description="Automatically save changes"
              control={<Switch checked={autoSave} onChange={setAutoSave} />}
            />
            <div className="my-2 h-px bg-white/10" />
            <SettingRow
              label="Cloud Sync"
              description="Sync data across devices"
              control={<Switch checked={cloudSync} onChange={setCloudSync} />}
            />
          </SectionCard>
        </div>

        {/* Save button */}
        <div className="m-6 flex justify-end">
          <button
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 ring-1 ring-sky-500 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <Icon.Save className="h-4 w-4" />
            Save Settings
          </button>
        </div>
      </div>
    </div>
  )
}

const SectionCard = ({ icon, title, children }) => (
  <section className="rounded-xl border border-slate-300 bg-white">
    <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800/70">
        {icon}
      </div>
      <h2 className="text-base font-semibold">{title}</h2>
    </div>
    <div className="p-5">{children}</div>
  </section>
);

const SettingRow = ({ label, description, control }) => (
  <div className="flex items-center justify-between gap-6 py-3">
    <div>
      <div className="text-sm font-medium">{label}</div>
      {description && <div className="text-xs text-slate-500">{description}</div>}
    </div>
    <div className="shrink-0">{control}</div>
  </div>
);

const Switch = ({ checked, onChange, disabled, id }) => (
  <button
    role="switch"
    aria-checked={checked}
    aria-disabled={disabled}
    id={id}
    onClick={() => !disabled && onChange(!checked)}
    className={[
      "relative inline-flex h-6 w-11 items-center rounded-full transition",
      disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
      checked ? "bg-sky-500" : "bg-slate-600",
      "focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900",
    ].join(" ")}
  >
    <span
      className={[
        "inline-block h-5 w-5 transform rounded-full bg-white transition",
        checked ? "translate-x-5" : "translate-x-1",
      ].join(" ")}
    />
  </button>
);
