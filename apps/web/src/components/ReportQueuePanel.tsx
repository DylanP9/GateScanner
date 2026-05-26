export default function ReportQueuePanel() {
  return (
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
  );
}