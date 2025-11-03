import { useState, useEffect, useMemo } from 'react'
import Sidebar from '../components/Sidebar'
import { reports } from '../data/reportData'
import { Link } from 'react-router-dom'
import ReportCard from '../components/ReportCard'
import { Icon } from '../components/Icons'

export default function Reports() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [animate, setAnimate] = useState(true)
  const [total, setTotal] = useState(0)
  const [selectedType, setSelectedType] = useState("");
  const allTypes = useMemo(() => Array.from(new Set(reports.map((r) => r.type))), []);

  useEffect(() => {
    setTotal(reports.length);
    return () => total;
  }, [total])

  const filtered = useMemo(() => {
    return reports.filter((r) => {
      const inputQuery = query.trim().toLowerCase();
      const matchesQuery = r.patient.toLowerCase().includes(inputQuery)
        || r.title.toLowerCase().includes(inputQuery)
        || r.report.toLowerCase().includes(inputQuery);
      const matchesType = selectedType ? r.type === selectedType : true;
      return matchesQuery && matchesType;
    });
  }, [query, selectedType]);

  const normalized = query.trim().toLowerCase()

  useEffect(() => {
    setAnimate(false)
    const t = setTimeout(() => setAnimate(true), 0)
    return () => clearTimeout(t)
  }, [normalized])
  return (
    <div className="min-h-screen bg-white text-slate-900 flex">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 min-w-0">
        <header className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-slate-200 flex items-center gap-4 justify-between">
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-slate-700 hover:bg-slate-50"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            ☰
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold">Reports</h1>
            <p className="text-slate-500 text-sm mt-0.5">Manage and monitor your reports</p>
          </div>
          <div className="shrink-0">
            <div className="rounded-xl px-4 py-3 text-right border border-slate-300">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-700/70">
                  <Icon.FileText className="h-5 w-5 text-slate-200" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-400">Total Reports</div>
                  <div className="text-2xl font-semibold">{total}</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Toolbar
          query={query}
          setQuery={setQuery}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          allTypes={allTypes}
        />

        <main className="px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 text-slate-500">
            {filtered.map((p, i) => (
              <Link
                to={`/patient/${p.id}`}
                key={p.id}
                aria-label={`Open details for ${p.name}`}
                className={`block transform-gpu transition-all duration-300 ease-in-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand rounded-xl`}
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                <ReportCard report={p} />
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

const Toolbar = ({ query, setQuery, selectedType, setSelectedType, allTypes }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-4 gap-3 grid xl:grid-cols-2 sm:grid-cols-1">
      {/* Search */}
      <div className="relative">
        <Icon.Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by patient name..."
          className="w-full rounded-xl py-3 pl-10 pr-4 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg border border-slate-300"
        />
      </div>
      {/* Type filter */}
      <div className="relative">
        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg border border-slate-300 flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <span className="inline-flex items-center gap-2">
            <Icon.Filter className="h-4 w-4" />
            {selectedType || "All Types"}
          </span>
          <Icon.ChevronDown className={`h-4 w-4 transition" ${open && "rotate-180"}`} />
        </button>
        {open && (
          <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-white/10 shadow-xl backdrop-blur">
            <div className="max-h-64 overflow-y-auto py-1 text-sm">
              <DropdownItem label="All Types" onClick={() => { setSelectedType(""); setOpen(false); }} active={!selectedType} />
              {allTypes.map((t) => (
                <DropdownItem key={t} label={t} onClick={() => { setSelectedType(t); setOpen(false); }} active={selectedType === t} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


const DropdownItem = ({ label, onClick, active }) => (
  <button
    onClick={onClick}
    className={`
      flex w-full items-center justify-between px-4 py-2.5 hover:bg-slate-800"
      ${active ? "text-sky-400" : "text-slate-400"}`
    }
  >
    <span>{label}</span>
    {active && <span className="text-xs">●</span>}
  </button>
);
