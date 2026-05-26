"use client";

import { useMemo, useState } from "react";

import AirportReportCard from "@/components/AirportReportCard";
import AirportSearchCard from "@/components/AirportSearchCard";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ReportQueuePanel from "@/components/ReportQueuePanel";
import { airportReports, matchesAirportSearch } from "@/data/airportReports";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [terminalFilter, setTerminalFilter] = useState("");

  const filteredReports = useMemo(() => {
    const normalisedTerminalFilter = terminalFilter.trim().toLowerCase();

    return airportReports.filter((report) => {
      const matchesSearch = matchesAirportSearch(report, searchTerm);

      const matchesTerminal =
        normalisedTerminalFilter.length === 0 ||
        report.terminal.toLowerCase().includes(normalisedTerminalFilter);

      return matchesSearch && matchesTerminal;
    });
  }, [searchTerm, terminalFilter]);

  return (
    <main className="min-h-screen bg-[#05203c] text-slate-950">
      <Header />

      <HeroSection />

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <AirportSearchCard
          searchTerm={searchTerm}
          terminalFilter={terminalFilter}
          resultCount={filteredReports.length}
          onSearchTermChange={setSearchTerm}
          onTerminalFilterChange={setTerminalFilter}
        />
      </section>

      <section className="bg-slate-50 px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-wide text-sky-600">
                  Live airport snapshot
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
                  Popular airport reports
                </h2>
              </div>

              <button className="hidden rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-100 md:block">
                View all airports
              </button>
            </div>

            {filteredReports.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-3">
                {filteredReports.map((report) => (
                  <AirportReportCard key={report.code} report={report} />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
                <p className="text-xl font-black text-slate-950">
                  No airport found
                </p>

                <p className="mt-2 text-sm font-semibold text-slate-500">
                  Try searching by airport name, airport code, city, or
                  terminal. For example: Heathrow, LHR, Edinburgh, or Terminal
                  5.
                </p>
              </div>
            )}
          </div>

          <ReportQueuePanel />
        </div>
      </section>
    </main>
  );
}