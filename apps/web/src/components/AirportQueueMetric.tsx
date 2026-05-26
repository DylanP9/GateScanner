type AirportQueueMetricProps = {
  label: string;
  value: number;
  description: string;
};

export default function AirportQueueMetric({
  label,
  value,
  description,
}: AirportQueueMetricProps) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <p className="text-sm font-black uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-3 text-4xl font-black text-slate-950">{value}m</p>

      <p className="mt-2 text-sm font-semibold text-slate-500">
        {description}
      </p>
    </div>
  );
}