import React from 'react'

export default function Dashboard() {
  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', color: 'white' }}>
      <header style={{ padding: '16px 24px', borderBottom: '1px solid #1f2937' }}>
        <h1 style={{ margin: 0, fontSize: 20 }}>Visicore – Doctor Dashboard</h1>
      </header>
      <main style={{ padding: 24 }}>
        <div style={{
          background: '#111827',
          borderRadius: 12,
          padding: 24,
          border: '1px solid #1f2937',
        }}>
          <h2 style={{ marginTop: 0 }}>Welcome, Doctor</h2>
          <p style={{ color: '#9ca3af' }}>This dashboard is empty for now. We will add Patients, Reports, Settings, Profile, and Logout next.</p>
        </div>
      </main>
    </div>
  )
}
