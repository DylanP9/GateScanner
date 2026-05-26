const airportReports = [
  {
    airport: "London Heathrow",
    code: "LHR",
    terminal: "Terminal 5",
    securityMinutes: 18,
    passportMinutes: 12,
    status: "Busy",
    statusClass: "bg-amber-100 text-amber-700",
    updated: "4 min ago",
    reports: 23,
  },
  {
    airport: "Edinburgh Airport",
    code: "EDI",
    terminal: "Main Terminal",
    securityMinutes: 9,
    passportMinutes: 6,
    status: "Clear",
    statusClass: "bg-emerald-100 text-emerald-700",
    updated: "8 min ago",
    reports: 11,
  },
  {
    airport: "Manchester Airport",
    code: "MAN",
    terminal: "Terminal 1",
    securityMinutes: 24,
    passportMinutes: 15,
    status: "Heavy",
    statusClass: "bg-red-100 text-red-700",
    updated: "11 min ago",
    reports: 18,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05203c] text-slate-950">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400 text-lg font-black text-[#05203c] shadow-lg shadow-sky-950/30">
            GS
          </div>
          <div>
            <p className="text-xl font-extrabold tracking-tight">GateScanner</p>
            <p className="text-xs text-sky-100/80">Airport queue intelligence</p>
          </div>
        </div>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-sky-50 md:flex">
          <a href="#" className="hover:text-sky-300">
            Airports
          </a>
          <a href="#" className="hover:text-sky-300">
            Live queues
          </a>
          <a href="#" className="hover:text-sky-300">
            How it works
          </a>
          <a href="#" className="hover:text-sky-300">
            For airports
          </a>
        </nav>

        <button className="rounded-lg border border-white/25 px-4 py-2 text-sm font-bold text-white hover:bg-white/10">
          Sign in
        </button>
      </header>

      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-10 pt-8 md:pb-16 md:pt-16">
        <div className="pointer-events-none absolute right-[-120px] top-12 hidden rotate-[-8deg] opacity-20 md:block">
          <svg
            width="620"
            height="360"
            viewBox="0 0 620 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M118 236C212 170 352 92 552 54"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="14 18"
            />
            <path
              d="M81 254L541 64C560 56 579 75 570 94L529 181C525 189 517 194 508 193L344 184L255 300C249 308 238 311 229 306L195 287L238 199L99 194C84 193 76 176 85 164L101 143L288 145L379 84L50 92C37 92 30 76 39 66L60 39L478 39C508 39 539 46 566 61L583 71C603 82 609 108 596 126L542 202C530 219 510 229 489 227L341 215L249 335C239 348 220 351 207 342L151 304L190 226L99 229C82 230 70 214 77 198L81 254Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="relative max-w-4xl text-white">
          <p className="mb-4 inline-flex rounded-full bg-sky-400/15 px-4 py-2 text-sm font-bold text-sky-100 ring-1 ring-sky-300/25">
            Live security and passport-control times from real travellers
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Know the airport queue before you fly.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-sky-50/85">
            Search an airport once and see the combined departure queue picture
            across security and passport control, with arrivals and baggage
            information available when you need it.
          </p>
        </div>

        <div className="relative mt-10 rounded-3xl bg-white/95 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur md:p-5">
          <div className="mb-4 flex flex-wrap gap-2">
            <button className="rounded-full bg-[#05203c] px-5 py-2 text-sm font-bold text-white">
              Departure queues
            </button>
            <button className="rounded-full px-5 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100">
              Arrivals
            </button>
            <button className="rounded-full px-5 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100">
              Baggage & customs
            </button>
          </div>

          <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr_auto]">
            <label className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="block text-xs font-bold uppercase tracking-wide text-slate-500">
                Airport
              </span>
              <input
                className="mt-1 w-full bg-transparent text-lg font-extrabold text-slate-950 outline-none placeholder:text-slate-400"
                placeholder="London Heathrow (LHR)"
              />
            </label>

            <label className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="block text-xs font-bold uppercase tracking-wide text-slate-500">
                Terminal
              </span>
              <input
                className="mt-1 w-full bg-transparent text-lg font-extrabold text-slate-950 outline-none placeholder:text-slate-400"
                placeholder="Any terminal"
              />
            </label>

            <button className="rounded-2xl bg-sky-500 px-8 py-4 text-base font-black text-white shadow-lg shadow-sky-200 hover:bg-sky-600">
              Check queues
            </button>
          </div>

          <div className="mt-4 grid gap-3 rounded-2xl bg-sky-50 p-4 md:grid-cols-3">
            <div>
              <p className="text-xs font-black uppercase tracking-wide text-sky-700">
                Included in this search
              </p>
              <p className="mt-1 text-sm font-bold text-slate-700">
                Security + passport control
              </p>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wide text-sky-700">
                Best for
              </p>
              <p className="mt-1 text-sm font-bold text-slate-700">
                Departing travellers
              </p>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wide text-sky-700">
                Result shown
              </p>
              <p className="mt-1 text-sm font-bold text-slate-700">
                Total airport queue estimate
              </p>
            </div>
          </div>
        </div>
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

            <div className="grid gap-4 md:grid-cols-3">
              {airportReports.map((report) => {
                const combinedMinutes =
                  report.securityMinutes + report.passportMinutes;

                return (
                  <article
                    key={report.code}
                    className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
                  >
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
                        <span className="text-sm font-bold text-slate-600">
                          Security
                        </span>
                        <span className="text-xl font-black">
                          {report.securityMinutes}m
                        </span>
                      </div>
                      <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3">
                        <span className="text-sm font-bold text-slate-600">
                          Passport
                        </span>
                        <span className="text-xl font-black">
                          {report.passportMinutes}m
                        </span>
                      </div>
                      <div className="flex items-center justify-between rounded-2xl bg-sky-50 p-3 ring-1 ring-sky-100">
                        <span className="text-sm font-black text-sky-700">
                          Combined
                        </span>
                        <span className="text-xl font-black text-sky-700">
                          {combinedMinutes}m
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-xs font-semibold text-slate-400">
                      Updated {report.updated} · {report.reports} reports
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="rounded-3xl bg-[#05203c] p-6 text-white shadow-xl shadow-slate-300/50">
            <p className="text-sm font-extrabold uppercase tracking-wide text-sky-300">
              Report your queue
            </p>
            <h3 className="mt-3 text-3xl font-black leading-tight">
              Help travellers behind you.
            </h3>
            <p className="mt-4 text-sm leading-7 text-sky-50/80">
              Share how long one stage took. GateScanner combines security and
              passport-control reports into a simple departure queue estimate.
            </p>

            <div className="mt-6 rounded-3xl bg-white p-4 text-slate-950">
              <label className="block rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">
                <span className="block text-xs font-black uppercase tracking-wide text-slate-500">
                  Wait time
                </span>
                <input
                  className="mt-1 w-full bg-transparent text-3xl font-black outline-none placeholder:text-slate-400"
                  placeholder="14 minutes"
                />
              </label>
              <button className="mt-4 w-full rounded-2xl bg-sky-500 px-5 py-4 font-black text-white hover:bg-sky-600">
                Submit live report
              </button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-2xl font-black">52</p>
                <p className="text-xs font-bold text-sky-100/70">Airports</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-2xl font-black">1.8k</p>
                <p className="text-xs font-bold text-sky-100/70">Reports</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-2xl font-black">3h</p>
                <p className="text-xs font-bold text-sky-100/70">Expiry</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}