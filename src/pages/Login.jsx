import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { users } from '../data/mockData'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('doctor@example.com')
  const [password, setPassword] = useState('123')
  const [error, setError] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const user = users.find((u) => u.email === email && u.password === password)
    if (user) {
      setError('')
      navigate('/dashboard')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', background: '#0f172a' }}>
      <div style={{ background: '#111827', padding: '32px', borderRadius: 12, width: 360, color: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}>
        <h1 style={{ fontSize: 24, marginBottom: 16 }}>Visicore – Doctor Login</h1>
        <p style={{ fontSize: 14, color: '#9ca3af', marginBottom: 24 }}>Sign in to access your dashboard 21</p>
        <form onSubmit={onSubmit}>
          <label style={{ display: 'block', fontSize: 12, color: '#d1d5db', marginBottom: 6 }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="doctor@example.com"
            required
            style={{
              width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #374151', background: '#0b1220', color: 'white', marginBottom: 14,
            }}
          />
          <label style={{ display: 'block', fontSize: 12, color: '#d1d5db', marginBottom: 6 }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            style={{
              width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #374151', background: '#0b1220', color: 'white', marginBottom: 20,
            }}
          />
          {error && (
            <p style={{ color: '#f87171', fontSize: 12, marginBottom: 12 }}>{error}</p>
          )}
          <button type="submit" style={{ width: '100%', padding: '10px 12px', borderRadius: 8, background: '#2563eb', color: 'white', border: 'none', cursor: 'pointer' }}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}
