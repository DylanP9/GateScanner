"use client";

import { useMemo, useState } from "react";

import AirportReportCard from "@/components/AirportReportCard";
import AirportSearchCard from "@/components/AirportSearchCard";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ReportQueuePanel from "@/components/ReportQueuePanel";
import {
  airportReports,
  matchesAirportSearch,
  type QueueSubmission,
  type QueueType,
} from "@/data/airportReports";

type ReportFormErrors = {
  airport?: string;
  terminal?: string;
  queueType?: string;
  waitMinutes?: string;
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [terminalFilter, setTerminalFilter] = useState("");

  const [reportAirport, setReportAirport] = useState("");
  const [reportTerminal, setReportTerminal] = useState("");
  const [reportQueueType, setReportQueueType] =
    useState<QueueType>("Security");
  const [reportWaitMinutes, setReportWaitMinutes] = useState("");
  const [reportNote, setReportNote] = useState("");
  const [reportErrors, setReportErrors] = useState<ReportFormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [recentSubmissions, setRecentSubmissions] = useState<
    QueueSubmission[]
  >([]);

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

  const airportSuggestions = useMemo(() => {
    const normalisedSearch = searchTerm.trim().toLowerCase();

    if (normalisedSearch.length === 0) {
      return [];
    }

    return airportReports
      .filter((report) => matchesAirportSearch(report, searchTerm))
      .slice(0, 5);
  }, [searchTerm]);

  function handleSuggestionSelect(selectedAirport: string) {
    setSearchTerm(selectedAirport);
  }

  function validateReportForm() {
    const errors: ReportFormErrors = {};
    const trimmedAirport = reportAirport.trim();
    const trimmedTerminal = reportTerminal.trim();
    const parsedWaitMinutes = Number(reportWaitMinutes);

    if (trimmedAirport.length === 0) {
      errors.airport = "Airport is required.";
    }

    if (trimmedTerminal.length === 0) {
      errors.terminal = "Terminal is required.";
    }

    if (reportQueueType.length === 0) {
      errors.queueType = "Queue type is required.";
    }

    if (reportWaitMinutes.trim().length === 0) {
      errors.waitMinutes = "Wait time is required.";
    } else if (!Number.isFinite(parsedWaitMinutes)) {
      errors.waitMinutes = "Wait time must be a number.";
    } else if (parsedWaitMinutes <= 0) {
      errors.waitMinutes = "Wait time must be greater than 0.";
    } else if (parsedWaitMinutes > 240) {
      errors.waitMinutes = "Wait time must be 240 minutes or less.";
    }

    return errors;
  }

  function resetReportForm() {
    setReportAirport("");
    setReportTerminal("");
    setReportQueueType("Security");
    setReportWaitMinutes("");
    setReportNote("");
  }

  function handleReportSubmit() {
    const errors = validateReportForm();

    setReportErrors(errors);
    setSuccessMessage("");

    if (Object.keys(errors).length > 0) {
      return;
    }

    const newSubmission: QueueSubmission = {
      id: Date.now(),
      airport: reportAirport.trim(),
      terminal: reportTerminal.trim(),
      queueType: reportQueueType,
      waitMinutes: Number(reportWaitMinutes),
      note: reportNote.trim(),
      submittedAt: "just now",
    };

    setRecentSubmissions((currentSubmissions) => [
      newSubmission,
      ...currentSubmissions,
    ]);

    setSuccessMessage("Report submitted locally. Supabase storage comes next.");
    resetReportForm();
  }

  return (
    <main className="min-h-screen bg-[#05203c] text-slate-950">
      <Header />

      <HeroSection />

      <section
        id="airport-search"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-10"
      >
        <AirportSearchCard
          searchTerm={searchTerm}
          terminalFilter={terminalFilter}
          resultCount={filteredReports.length}
          suggestions={airportSuggestions}
          onSearchTermChange={setSearchTerm}
          onTerminalFilterChange={setTerminalFilter}
          onSuggestionSelect={handleSuggestionSelect}
        />
      </section>

      <section
        id="live-queues"
        className="scroll-mt-24 bg-slate-50 px-6 py-12"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-wide text-sky-600">
                  Live airport snapshot
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
                  Current airport queue estimates
                </h2>
              </div>

              <a
                href="#airport-search"
                className="hidden rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-100 md:block"
              >
                Search airports
              </a>
            </div>

            {filteredReports.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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

          <div id="submit-report" className="scroll-mt-24">
            <ReportQueuePanel
              airport={reportAirport}
              terminal={reportTerminal}
              queueType={reportQueueType}
              waitMinutes={reportWaitMinutes}
              note={reportNote}
              errors={reportErrors}
              successMessage={successMessage}
              recentSubmissions={recentSubmissions}
              onAirportChange={setReportAirport}
              onTerminalChange={setReportTerminal}
              onQueueTypeChange={setReportQueueType}
              onWaitMinutesChange={setReportWaitMinutes}
              onNoteChange={setReportNote}
              onSubmit={handleReportSubmit}
            />
          </div>
        </div>
      </section>

      <HowItWorks />
    </main>
  );
}