import type { QueueSubmission, QueueType } from "@/data/airportReports";
import { queueTypes } from "@/data/airportReports";

type ReportQueuePanelProps = {
  airport: string;
  terminal: string;
  queueType: QueueType;
  waitMinutes: string;
  note: string;
  errors: {
    airport?: string;
    terminal?: string;
    queueType?: string;
    waitMinutes?: string;
  };
  successMessage: string;
  recentSubmissions: QueueSubmission[];
  onAirportChange: (value: string) => void;
  onTerminalChange: (value: string) => void;
  onQueueTypeChange: (value: QueueType) => void;
  onWaitMinutesChange: (value: string) => void;
  onNoteChange: (value: string) => void;
  onSubmit: () => void;
};

export default function ReportQueuePanel({
  airport,
  terminal,
  queueType,
  waitMinutes,
  note,
  errors,
  successMessage,
  recentSubmissions,
  onAirportChange,
  onTerminalChange,
  onQueueTypeChange,
  onWaitMinutesChange,
  onNoteChange,
  onSubmit,
}: ReportQueuePanelProps) {
  return (
    <aside className="rounded-3xl bg-[#05203c] p-6 text-white shadow-xl shadow-slate-300/50">
      <p className="text-sm font-extrabold uppercase tracking-wide text-sky-300">
        Report your queue
      </p>

      <h3 className="mt-3 text-3xl font-black leading-tight">
        Help travellers behind you.
      </h3>

      <p className="mt-4 text-sm leading-7 text-sky-50/80">
        Share how long one airport queue took. This mock version stores your
        report locally on the page before we connect Supabase later.
      </p>

      <div className="mt-6 space-y-4 rounded-3xl bg-white p-4 text-slate-950">
        <label className="block">
          <span className="block text-xs font-black uppercase tracking-wide text-slate-500">
            Airport
          </span>
          <input
            value={airport}
            onChange={(event) => onAirportChange(event.target.value)}
            className="mt-2 w-full rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-950 outline-none ring-1 ring-slate-200 placeholder:text-slate-400 focus:ring-sky-400"
            placeholder="London Heathrow"
          />
          {errors.airport ? (
            <p className="mt-2 text-xs font-bold text-red-600">
              {errors.airport}
            </p>
          ) : null}
        </label>

        <label className="block">
          <span className="block text-xs font-black uppercase tracking-wide text-slate-500">
            Terminal
          </span>
          <input
            value={terminal}
            onChange={(event) => onTerminalChange(event.target.value)}
            className="mt-2 w-full rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-950 outline-none ring-1 ring-slate-200 placeholder:text-slate-400 focus:ring-sky-400"
            placeholder="Terminal 5"
          />
          {errors.terminal ? (
            <p className="mt-2 text-xs font-bold text-red-600">
              {errors.terminal}
            </p>
          ) : null}
        </label>

        <label className="block">
          <span className="block text-xs font-black uppercase tracking-wide text-slate-500">
            Queue type
          </span>
          <select
            value={queueType}
            onChange={(event) =>
              onQueueTypeChange(event.target.value as QueueType)
            }
            className="mt-2 w-full rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-950 outline-none ring-1 ring-slate-200 focus:ring-sky-400"
          >
            {queueTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.queueType ? (
            <p className="mt-2 text-xs font-bold text-red-600">
              {errors.queueType}
            </p>
          ) : null}
        </label>

        <label className="block">
          <span className="block text-xs font-black uppercase tracking-wide text-slate-500">
            Wait time in minutes
          </span>
          <input
            value={waitMinutes}
            onChange={(event) => onWaitMinutesChange(event.target.value)}
            className="mt-2 w-full rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-950 outline-none ring-1 ring-slate-200 placeholder:text-slate-400 focus:ring-sky-400"
            placeholder="14"
            inputMode="numeric"
          />
          {errors.waitMinutes ? (
            <p className="mt-2 text-xs font-bold text-red-600">
              {errors.waitMinutes}
            </p>
          ) : null}
        </label>

        <label className="block">
          <span className="block text-xs font-black uppercase tracking-wide text-slate-500">
            Optional note
          </span>
          <textarea
            value={note}
            onChange={(event) => onNoteChange(event.target.value)}
            className="mt-2 min-h-24 w-full resize-none rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-950 outline-none ring-1 ring-slate-200 placeholder:text-slate-400 focus:ring-sky-400"
            placeholder="Example: security moved quickly today"
          />
        </label>

        <button
          type="button"
          onClick={onSubmit}
          className="w-full rounded-2xl bg-sky-500 px-5 py-4 font-black text-white hover:bg-sky-600"
        >
          Submit live report
        </button>

        {successMessage ? (
          <p className="rounded-2xl bg-emerald-50 p-3 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
            {successMessage}
          </p>
        ) : null}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-2xl bg-white/10 p-4">
          <p className="text-2xl font-black">52</p>
          <p className="text-xs font-bold text-sky-100/70">Airports</p>
        </div>

        <div className="rounded-2xl bg-white/10 p-4">
          <p className="text-2xl font-black">
            {recentSubmissions.length}
          </p>
          <p className="text-xs font-bold text-sky-100/70">Your reports</p>
        </div>

        <div className="rounded-2xl bg-white/10 p-4">
          <p className="text-2xl font-black">3h</p>
          <p className="text-xs font-bold text-sky-100/70">Expiry</p>
        </div>
      </div>

      {recentSubmissions.length > 0 ? (
        <div className="mt-6 rounded-3xl bg-white/10 p-4">
          <p className="text-sm font-black uppercase tracking-wide text-sky-200">
            Recent local reports
          </p>

          <div className="mt-4 space-y-3">
            {recentSubmissions.slice(0, 3).map((submission) => (
              <div
                key={submission.id}
                className="rounded-2xl bg-white p-4 text-slate-950"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-black">{submission.airport}</p>
                    <p className="text-xs font-bold text-slate-500">
                      {submission.terminal} · {submission.queueType}
                    </p>
                  </div>

                  <p className="text-lg font-black text-sky-600">
                    {submission.waitMinutes}m
                  </p>
                </div>

                {submission.note ? (
                  <p className="mt-2 text-xs font-semibold text-slate-500">
                    {submission.note}
                  </p>
                ) : null}

                <p className="mt-2 text-xs font-semibold text-slate-400">
                  Submitted {submission.submittedAt}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </aside>
  );
}