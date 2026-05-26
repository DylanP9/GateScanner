import Link from "next/link";

import type { AirportReport } from "@/data/airportReports";
import { getCombinedDepartureMinutes } from "@/data/airportReports";

type AirportReportCardProps = {
  report: AirportReport;
};

export default function AirportReportCard({ report }: AirportReportCardProps) {
  const combinedMinutes = getCombinedDepartureMinutes(report);

  return (
    <Link
      href={`/airports/${report.code.toLowerCase()}`}
      className="block rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
    >
      <article>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xl font-black">{report.code}</p>
            <p className="text-sm font-semibold text-slate-500">
              {report.airport} · {report.terminal}
            </p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-black ${report.statusClass}`}
          >
            {report.status}
          </span>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3">
            <span className="text-sm font-bold text-slate-600">Security</span>
            <span className="text-xl font-black">
              {report.securityMinutes}m
            </span>
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3">
            <span className="text-sm font-bold text-slate-600">Passport</span>
            <span className="text-xl font-black">
              {report.passportMinutes}m
            </span>
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-sky-50 p-3 ring-1 ring-sky-100">
            <span className="text-sm font-black text-sky-700">Combined</span>
            <span className="text-xl font-black text-sky-700">
              {combinedMinutes}m
            </span>
          </div>
        </div>

        <p className="mt-4 text-xs font-semibold text-slate-400">
          Updated {report.updated} · {report.reports} reports
        </p>

        <p className="mt-3 text-xs font-black uppercase tracking-wide text-sky-600">
          View airport details →
        </p>
      </article>
    </Link>
  );
}