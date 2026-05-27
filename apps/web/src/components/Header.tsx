import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 text-white sm:px-6">
      <Link href="/" className="flex min-w-0 items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400 text-lg font-black text-[#05203c] shadow-lg shadow-sky-950/30">
          GS
        </div>

        <div className="min-w-0">
          <p className="truncate text-lg font-extrabold tracking-tight sm:text-xl">
            GateScanner
          </p>
          <p className="hidden text-xs text-sky-100/80 sm:block">
            Airport queue intelligence
          </p>
        </div>
      </Link>

      <nav className="hidden items-center gap-7 text-sm font-semibold text-sky-50 lg:flex">
        <a href="#airport-search" className="hover:text-sky-300">
          Airports
        </a>

        <a href="#live-queues" className="hover:text-sky-300">
          Live queues
        </a>

        <a href="#how-it-works" className="hover:text-sky-300">
          How it works
        </a>

        <a href="#submit-report" className="hover:text-sky-300">
          Submit report
        </a>
      </nav>

      <a
        href="#submit-report"
        className="shrink-0 rounded-lg border border-white/25 px-3 py-2 text-xs font-bold text-white hover:bg-white/10 sm:px-4 sm:text-sm"
      >
        Report queue
      </a>
    </header>
  );
}