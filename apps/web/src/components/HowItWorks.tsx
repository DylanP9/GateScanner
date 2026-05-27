const steps = [
  {
    number: "01",
    title: "Search an airport",
    description:
      "Find an airport by name, code, city, or terminal before you travel.",
  },
  {
    number: "02",
    title: "Check queue estimates",
    description:
      "See combined departure queue times across security and passport control.",
  },
  {
    number: "03",
    title: "Submit your wait time",
    description:
      "Help other travellers by sharing how long your queue actually took.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-extrabold uppercase tracking-wide text-sky-600">
            How it works
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            Airport queue information in three simple steps.
          </h2>

          <p className="mt-4 text-sm font-semibold leading-7 text-slate-500">
            GateScanner keeps the experience simple: search, check the queue,
            and share your own report when you travel.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200"
            >
              <p className="text-sm font-black text-sky-600">{step.number}</p>

              <h3 className="mt-4 text-xl font-black text-slate-950">
                {step.title}
              </h3>

              <p className="mt-3 text-sm font-semibold leading-7 text-slate-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}