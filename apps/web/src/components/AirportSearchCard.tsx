type AirportSearchCardProps = {
  searchTerm: string;
  terminalFilter: string;
  resultCount: number;
  onSearchTermChange: (value: string) => void;
  onTerminalFilterChange: (value: string) => void;
};

export default function AirportSearchCard({
  searchTerm,
  terminalFilter,
  resultCount,
  onSearchTermChange,
  onTerminalFilterChange,
}: AirportSearchCardProps) {
  return (
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
            value={searchTerm}
            onChange={(event) => onSearchTermChange(event.target.value)}
            className="mt-1 w-full bg-transparent text-lg font-extrabold text-slate-950 outline-none placeholder:text-slate-400"
            placeholder="Search Heathrow, LHR, Edinburgh..."
          />
        </label>

        <label className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <span className="block text-xs font-bold uppercase tracking-wide text-slate-500">
            Terminal
          </span>

          <input
            value={terminalFilter}
            onChange={(event) => onTerminalFilterChange(event.target.value)}
            className="mt-1 w-full bg-transparent text-lg font-extrabold text-slate-950 outline-none placeholder:text-slate-400"
            placeholder="Any terminal"
          />
        </label>

        <button
          type="button"
          className="rounded-2xl bg-sky-500 px-8 py-4 text-base font-black text-white shadow-lg shadow-sky-200 hover:bg-sky-600"
        >
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
            Results found
          </p>
          <p className="mt-1 text-sm font-bold text-slate-700">
            {resultCount} airport{resultCount === 1 ? "" : "s"}
          </p>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-wide text-sky-700">
            Result shown
          </p>
          <p className="mt-1 text-sm font-bold text-slate-700">
            Total departure queue estimate
          </p>
        </div>
      </div>
    </div>
  );
}