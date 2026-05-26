import type { RecentAirportReport } from "@/data/airportReports";

type RecentAirportReportsProps = {
  reports: RecentAirportReport[];
};

export default function RecentAirportReports({
  reports,
}: RecentAirportReportsProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-wide text-sky-600">
          Recent crowd reports
        </p>

        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
          Latest queue updates
        </h2>
      </div>

      <div className="mt-6 space-y-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black text-slate-950">
                  {report.queueType}
                </p>

                <p className="text-xs font-bold text-slate-500">
                  {report.terminal} · {report.submittedAt}
                </p>
              </div>

              <p className="text-xl font-black text-sky-600">
                {report.waitMinutes}m
              </p>
            </div>

            <p className="mt-3 text-sm font-semibold text-slate-500">
              {report.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}