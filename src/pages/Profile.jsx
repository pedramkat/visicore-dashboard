import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Icon } from '../components/Icons';

export default function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [fullName, setFullName] = useState("Visi Core");
  const [email, setEmail] = useState("aivisicore@gmail.com");
  const [specialization, setSpecialization] = useState("Cardiology");
  const [license, setLicense] = useState("MD-123456");
  const [hospital, setHospital] = useState("Medical Center");
  const [phone, setPhone] = useState("+1 (555) 000-0000");
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
            <p className="text-slate-500 text-sm mt-0.5">In this page you can see details of your account.</p>
          </div>
        </header>

        <div className="m-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Left card */}
          <section className="rounded-2xl ring-1 ring-white/10 md:col-span-1 border border-slate-300">
            <div className="border-b border-slate-300 px-5 py-4">Profile Picture</div>
            <div className="px-5 pb-6 pt-6 text-center">
              <Avatar name={fullName} />
              <div className="mt-4 text-xl font-semibold">{fullName}</div>
              <div className="text-sm text-slate-400">Admin</div>
              <div className="mx-auto mt-5 w-full max-w-[240px] border-t border-slate-300 pt-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Icon.Mail className="h-4 w-4" />
                  <span>{email}</span>
                </div>
              </div>
            </div>
          </section>


          {/* Right card */}
          <section className="rounded-2xl ring-1 ring-white/10 md:col-span-2 border border-slate-300">
            <div className="flex items-center gap-2 border-b border-slate-300 px-5 py-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800/70">
                <Icon.User className="h-4 w-4 text-slate-200" />
              </div>
              <span className="font-semibold">Professional Information</span>
            </div>


            <div className="p-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input label="Full Name" value={fullName} setValue={setFullName} />
                <Input label="Email Address" value={email} setValue={setEmail} type="email" placeholder="name@domain.com" disabled />
                <Input label="Specialization" value={specialization} setValue={setSpecialization} placeholder="e.g., Cardiology" />
                <Input label="License Number" value={license} setValue={setLicense} placeholder="MD-123456" />
                <Input label="Hospital/Clinic" value={hospital} setValue={setHospital} />
                <Input label="Phone Number" value={phone} setValue={setPhone} placeholder="+1 (555) 000-0000" />
              </div>


              <div className="mt-6 flex justify-end">
                <button
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 ring-1 ring-sky-500 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  <Icon.Save className="h-4 w-4" />
                  Save Changes
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

const Input = ({ label, value, setValue, type = "text", placeholder, disabled }) => (
  <div className="space-y-1.5">
    <label className="text-sm font-medium">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => setValue?.(e.target.value)}
      disabled={disabled}
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:opacity-60"
    />
  </div>
);

const Avatar = ({ name }) => {
  const initial = (name || "").trim().charAt(0).toUpperCase() || "?";
  return (
    <div className="relative mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 p-[3px] shadow-xl shadow-sky-600/10">
      <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-900">
        <span className="text-4xl font-semibold text-slate-100">{initial}</span>
      </div>
    </div>
  );
};
