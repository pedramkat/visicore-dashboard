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
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="w-full max-w-sm bg-panel text-white rounded-xl shadow-xl border border-slate-800 p-8">
        <h1 className="text-2xl font-semibold mb-2">Visicore – Doctor Login</h1>
        <p className="text-sm text-slate-400 mb-6">Sign in to access your dashboard</p>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-slate-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="doctor@example.com"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900 text-white placeholder-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900 text-white placeholder-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
            />
          </div>
          {error && (
            <p className="text-red-400 text-xs">{error}</p>
          )}
          <button
            type="submit"
            className="w-full rounded-lg bg-brand hover:bg-brand-dark text-white px-3 py-2 font-medium transition"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}
