import Link from "next/link";
import { notFound } from "next/navigation";

import AirportQueueMetric from "@/components/AirportQueueMetric";
import Header from "@/components/Header";
import RecentAirportReports from "@/components/RecentAirportReports";
import {
  airportReports,
  getAirportByCode,
  getCombinedDepartureMinutes,
  getRecentAirportReports,
} from "@/data/airportReports";

type AirportDetailPageProps = {
  params: Promise<{
    code: string;
  }>;
};

export function generateStaticParams() {
  return airportReports.map((report) => ({
    code: report.code.toLowerCase(),
  }));
}

export default async function AirportDetailPage({
  params,
}: AirportDetailPageProps) {
  const { code } = await params;
  const airport = getAirportByCode(code);

  if (!airport) {
    notFound();
  }

  const combinedDepartureMinutes = getCombinedDepartureMinutes(airport);
  const recentReports = getRecentAirportReports(airport);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="bg-[#05203c]">
        <Header />

        <section className="mx-auto max-w-7xl px-6 pb-14 pt-10 text-white">
          <Link
            href="/"
            className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-sky-100 ring-1 ring-white/15 hover:bg-white/15"
          >
            ← Back to airport search
          </Link>

          <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-wide text-sky-300">
                Airport detail
              </p>

              <h1 className="mt-3 text-5xl font-black tracking-tight md:text-7xl">
                {airport.airport}
              </h1>

              <p className="mt-4 text-lg font-semibold text-sky-50/80">
                {airport.code} · {airport.city}, {airport.country} ·{" "}
                {airport.terminal}
              </p>
            </div>

            <div className="rounded-3xl bg-white p-5 text-slate-950 shadow-2xl shadow-slate-950/20">
              <p className="text-sm font-black uppercase tracking-wide text-slate-500">
                Departure estimate
              </p>

              <p className="mt-2 text-5xl font-black text-sky-600">
                {combinedDepartureMinutes}m
              </p>

              <p className="mt-2 text-sm font-bold text-slate-500">
                Security + passport control
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <AirportQueueMetric
            label="Security"
            value={airport.securityMinutes}
            description="Estimated security queue time"
          />

          <AirportQueueMetric
            label="Passport"
            value={airport.passportMinutes}
            description="Estimated passport control time"
          />

          <AirportQueueMetric
            label="Baggage"
            value={airport.baggageMinutes}
            description="Estimated baggage wait time"
          />

          <AirportQueueMetric
            label="Customs"
            value={airport.customsMinutes}
            description="Estimated customs queue time"
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-wide text-sky-600">
                  Current status
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
                  {airport.status} at {airport.code}
                </h2>

                <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-slate-500">
                  GateScanner combines recent mock reports for security,
                  passport control, baggage, and customs. This page will later
                  connect to live Supabase data.
                </p>
              </div>

              <span
                className={`inline-flex rounded-full px-4 py-2 text-sm font-black ${airport.statusClass}`}
              >
                {airport.status}
              </span>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                  Reports used
                </p>
                <p className="mt-2 text-3xl font-black">{airport.reports}</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                  Last updated
                </p>
                <p className="mt-2 text-3xl font-black">{airport.updated}</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                  Data source
                </p>
                <p className="mt-2 text-3xl font-black">Mock</p>
              </div>
            </div>

            <Link
              href="/"
              className="mt-8 inline-flex rounded-2xl bg-sky-500 px-5 py-4 text-sm font-black text-white hover:bg-sky-600"
            >
              Submit report for this airport
            </Link>
          </div>

          <RecentAirportReports reports={recentReports} />
        </div>
      </section>
    </main>
  );
}