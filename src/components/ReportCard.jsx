import { Icon } from "./Icons";

export default function ReportCard({ report }) {
    function formatDate(iso) {
        try {
            const d = new Date(iso);
            const dd = String(d.getDate()).padStart(2, "0");
            const mm = String(d.getMonth() + 1).padStart(2, "0");
            const yyyy = d.getFullYear();
            return `${dd}/${mm}/${yyyy}`;
        } catch {
            return iso;
        }
    }
    return (

        <div className="rounded-lg border border-slate-200 bg-white mb-2 p-5">
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-lg font-semibold tracking-tight">{report.title}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-sm">
                        <span className="inline-flex items-center gap-1.5"><Icon.User className="h-4 w-4" /> {report.patient}</span>
                        <span className="inline-flex items-center gap-1.5"><Icon.Calendar className="h-4 w-4" /> {formatDate(report.datetime)}</span>
                    </div>
                </div>
                <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500">
                    View Details
                </button>
            </div>


            <p className="mt-3 line-clamp-3 text-sm">
                {report.report}
            </p>


            <div className="mt-4 flex flex-wrap gap-2">
                <Badge tone={report.severity == "High Severity" ? "yellow" : (report.severity == "Low Severity" ? "green" : "red")}>{report.severity}</Badge>
                <Badge tone={report.status == "Completed" ? "sky" : (report.status == "Reviewed" ? "green" : "yellow")}>{report.status}</Badge>
            </div>
        </div>
    )
}


const toneMap = {
    red: "bg-red-500/10 text-red-300 border-red-500/30",
    green: "bg-green-500/10 text-green-300 border-green-500/30",
    yellow: "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
    sky: "bg-sky-500/10 text-sky-300 border-sky-500/30",
};


const Badge = ({ tone = "green", children }) => (
    <span className={
        `inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${toneMap[tone]}`
    }>
        {children}
    </span>
);
