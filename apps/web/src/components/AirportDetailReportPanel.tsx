"use client";

import { useState } from "react";

import type {
  AirportReport,
  QueueSubmission,
  QueueType,
} from "@/data/airportReports";
import { queueTypes } from "@/data/airportReports";

type AirportDetailReportPanelProps = {
  airport: AirportReport;
};

type ReportFormErrors = {
  queueType?: string;
  waitMinutes?: string;
};

export default function AirportDetailReportPanel({
  airport,
}: AirportDetailReportPanelProps) {
  const [queueType, setQueueType] = useState<QueueType>("Security");
  const [waitMinutes, setWaitMinutes] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<ReportFormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [localReports, setLocalReports] = useState<QueueSubmission[]>([]);

  function validateForm() {
    const formErrors: ReportFormErrors = {};
    const parsedWaitMinutes = Number(waitMinutes);

    if (queueType.length === 0) {
      formErrors.queueType = "Queue type is required.";
    }

    if (waitMinutes.trim().length === 0) {
      formErrors.waitMinutes = "Wait time is required.";
    } else if (!Number.isFinite(parsedWaitMinutes)) {
      formErrors.waitMinutes = "Wait time must be a number.";
    } else if (parsedWaitMinutes <= 0) {
      formErrors.waitMinutes = "Wait time must be greater than 0.";
    } else if (parsedWaitMinutes > 240) {
      formErrors.waitMinutes = "Wait time must be 240 minutes or less.";
    }

    return formErrors;
  }

  function resetForm() {
    setQueueType("Security");
    setWaitMinutes("");
    setNote("");
  }

  function handleSubmit() {
    const formErrors = validateForm();

    setErrors(formErrors);
    setSuccessMessage("");

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    const newReport: QueueSubmission = {
      id: Date.now(),
      airport: airport.airport,
      terminal: airport.terminal,
      queueType,
      waitMinutes: Number(waitMinutes),
      note: note.trim(),
      submittedAt: "just now",
    };

    setLocalReports((currentReports) => [newReport, ...currentReports]);
    setSuccessMessage(`Report added locally for ${airport.airport}.`);
    resetForm();
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-wide text-sky-600">
          Submit airport report
        </p>

        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
          Report a queue at {airport.code}
        </h2>

        <p className="mt-3 text-sm font-semibold leading-7 text-slate-500">
          This form is pre-filled for {airport.airport} and {airport.terminal}.
          Reports are stored locally for now until the backend is connected.
        </p>
      </div>

      <div className="mt-6 grid gap-4 rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="block text-xs font-black uppercase tracking-wide text-slate-500">
              Airport
            </span>
            <input
              value={`${airport.airport} (${airport.code})`}
              readOnly
              className="mt-2 w-full rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-500 outline-none ring-1 ring-slate-200"
            />
          </label>

          <label className="block">
            <span className="block text-xs font-black uppercase tracking-wide text-slate-500">
              Terminal
            </span>
            <input
              value={airport.terminal}
              readOnly
              className="mt-2 w-full rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-500 outline-none ring-1 ring-slate-200"
            />
          </label>
        </div>

        <label className="block">
          <span className="block text-xs font-black uppercase tracking-wide text-slate-500">
            Queue type
          </span>

          <select
            value={queueType}
            onChange={(event) => setQueueType(event.target.value as QueueType)}
            className="mt-2 w-full rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-950 outline-none ring-1 ring-slate-200 focus:ring-sky-400"
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
            onChange={(event) => setWaitMinutes(event.target.value)}
            inputMode="numeric"
            placeholder="14"
            className="mt-2 w-full rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-950 outline-none ring-1 ring-slate-200 placeholder:text-slate-400 focus:ring-sky-400"
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
            onChange={(event) => setNote(event.target.value)}
            placeholder="Example: security was moving quickly"
            className="mt-2 min-h-24 w-full resize-none rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-950 outline-none ring-1 ring-slate-200 placeholder:text-slate-400 focus:ring-sky-400"
          />
        </label>

        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-2xl bg-sky-500 px-5 py-4 text-sm font-black text-white hover:bg-sky-600"
        >
          Submit report for {airport.code}
        </button>

        {successMessage ? (
          <p className="rounded-2xl bg-emerald-50 p-3 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
            {successMessage}
          </p>
        ) : null}
      </div>

      {localReports.length > 0 ? (
        <div className="mt-6">
          <p className="text-sm font-black uppercase tracking-wide text-slate-500">
            Your local reports for {airport.code}
          </p>

          <div className="mt-4 space-y-3">
            {localReports.slice(0, 3).map((report) => (
              <div
                key={report.id}
                className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black text-slate-950">
                      {report.queueType}
                    </p>
                    <p className="text-xs font-bold text-slate-500">
                      {report.terminal} · {report.submittedAt}
                    </p>
                  </div>

                  <p className="text-xl font-black text-sky-600">
                    {report.waitMinutes}m
                  </p>
                </div>

                {report.note ? (
                  <p className="mt-2 text-sm font-semibold text-slate-500">
                    {report.note}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}