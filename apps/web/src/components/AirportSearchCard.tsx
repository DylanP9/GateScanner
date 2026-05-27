import type { AirportReport } from "@/data/airportReports";

type AirportSearchCardProps = {
  searchTerm: string;
  terminalFilter: string;
  resultCount: number;
  suggestions: AirportReport[];
  onSearchTermChange: (value: string) => void;
  onTerminalFilterChange: (value: string) => void;
  onSuggestionSelect: (airportName: string) => void;
};

export default function AirportSearchCard({
  searchTerm,
  terminalFilter,
  resultCount,
  suggestions,
  onSearchTermChange,
  onTerminalFilterChange,
  onSuggestionSelect,
}: AirportSearchCardProps) {
  const shouldShowSuggestions =
    searchTerm.trim().length > 0 && suggestions.length > 0;

  return (
    <div className="relative mt-5 rounded-3xl bg-white/95 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur sm:p-5">
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        <button className="shrink-0 rounded-full bg-[#05203c] px-5 py-2 text-sm font-bold text-white">
          Departure queues
        </button>

        <button className="shrink-0 rounded-full px-5 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100">
          Arrivals
        </button>

        <button className="shrink-0 rounded-full px-5 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100">
          Baggage & customs
        </button>
      </div>

      <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr_auto]">
        <div className="relative">
          <label className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <span className="block text-xs font-bold uppercase tracking-wide text-slate-500">
              Airport
            </span>

            <input
              value={searchTerm}
              onChange={(event) => onSearchTermChange(event.target.value)}
              className="mt-1 w-full bg-transparent text-base font-extrabold text-slate-950 outline-none placeholder:text-slate-400 sm:text-lg"
              placeholder="Search Heathrow, LHR..."
            />
          </label>

          {shouldShowSuggestions ? (
            <div className="absolute left-0 right-0 top-full z-20 mt-2 max-h-72 overflow-y-auto rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200">
              {suggestions.map((airport) => (
                <button
                  key={airport.code}
                  type="button"
                  onClick={() =>
                    onSuggestionSelect(`${airport.airport} (${airport.code})`)
                  }
                  className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left hover:bg-sky-50"
                >
                  <div>
                    <p className="text-sm font-black text-slate-950">
                      {airport.airport}
                    </p>
                    <p className="text-xs font-bold text-slate-500">
                      {airport.city}, {airport.country} · {airport.terminal}
                    </p>
                  </div>

                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-black text-sky-700">
                    {airport.code}
                  </span>
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <label className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <span className="block text-xs font-bold uppercase tracking-wide text-slate-500">
            Terminal
          </span>

          <input
            value={terminalFilter}
            onChange={(event) => onTerminalFilterChange(event.target.value)}
            className="mt-1 w-full bg-transparent text-base font-extrabold text-slate-950 outline-none placeholder:text-slate-400 sm:text-lg"
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

      <div className="mt-4 grid gap-3 rounded-2xl bg-sky-50 p-4 sm:grid-cols-3">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-sky-700">
            Included
          </p>
          <p className="mt-1 text-sm font-bold text-slate-700">
            Security + passport
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
            Departure estimate
          </p>
        </div>
      </div>
    </div>
  );
}