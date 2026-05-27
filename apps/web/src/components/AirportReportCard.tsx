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
            <p className="text-2xl font-black text-slate-950">{report.code}</p>
            <p className="mt-1 text-sm font-semibold text-slate-500">
              {report.city} · {report.terminal}
            </p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-black ${report.statusClass}`}
          >
            {report.status}
          </span>
        </div>

        <div className="mt-6 rounded-3xl bg-sky-50 p-5 ring-1 ring-sky-100">
          <p className="text-xs font-black uppercase tracking-wide text-sky-700">
            Combined departure queue
          </p>

          <div className="mt-2 flex items-end justify-between gap-3">
            <p className="text-5xl font-black tracking-tight text-sky-700">
              {combinedMinutes}m
            </p>

            <p className="pb-2 text-xs font-bold text-sky-700">
              Security + passport
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-slate-50 p-3">
            <p className="text-xs font-bold text-slate-500">Security</p>
            <p className="mt-1 text-xl font-black text-slate-950">
              {report.securityMinutes}m
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-3">
            <p className="text-xs font-bold text-slate-500">Passport</p>
            <p className="mt-1 text-xl font-black text-slate-950">
              {report.passportMinutes}m
            </p>
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