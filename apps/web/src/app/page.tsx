import AirportReportCard from "@/components/AirportReportCard";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ReportQueuePanel from "@/components/ReportQueuePanel";
import { airportReports } from "@/data/airportReports";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05203c] text-slate-950">
      <Header />
      <HeroSection />

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

            <div className="grid gap-4 md:grid-cols-3">
              {airportReports.map((report) => (
                <AirportReportCard key={report.code} report={report} />
              ))}
            </div>
          </div>

          <ReportQueuePanel />
        </div>
      </section>
    </main>
  );
}