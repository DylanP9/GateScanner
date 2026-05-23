const airportReports = [
  {
    airport: "London Heathrow",
    code: "LHR",
    terminal: "Terminal 5",
    security: "18 min",
    passport: "12 min",
    updated: "4 min ago",
  },
  {
    airport: "Edinburgh Airport",
    code: "EDI",
    terminal: "Main Terminal",
    security: "9 min",
    passport: "6 min",
    updated: "8 min ago",
  },
  {
    airport: "Manchester Airport",
    code: "MAN",
    terminal: "Terminal 1",
    security: "24 min",
    passport: "15 min",
    updated: "11 min ago",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10">
        <nav className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold tracking-tight">GateScanner</p>
            <p className="text-sm text-slate-400">
              Live airport queue intelligence
            </p>
          </div>

          <button className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-200 hover:bg-slate-900">
            Submit report
          </button>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">
              Crowdsourced airport wait times
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Know the queue before you fly.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              GateScanner helps travellers check live security, passport
              control, and immigration wait times before arriving at the
              airport.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-white outline-none placeholder:text-slate-500"
                placeholder="Search airport, e.g. Heathrow"
              />

              <button className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
                Search airport
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Live airport reports</h2>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                Mock data
              </span>
            </div>

            <div className="space-y-4">
              {airportReports.map((report) => (
                <div
                  key={report.code}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold">{report.airport}</p>
                      <p className="text-sm text-slate-400">
                        {report.code} · {report.terminal}
                      </p>
                    </div>

                    <p className="text-xs text-slate-500">{report.updated}</p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-slate-900 p-4">
                      <p className="text-xs text-slate-400">Security</p>
                      <p className="mt-1 text-2xl font-bold">
                        {report.security}
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-900 p-4">
                      <p className="text-xs text-slate-400">Passport</p>
                      <p className="mt-1 text-2xl font-bold">
                        {report.passport}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}