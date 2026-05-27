import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white">
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400 text-lg font-black text-[#05203c] shadow-lg shadow-sky-950/30">
          GS
        </div>

        <div>
          <p className="text-xl font-extrabold tracking-tight">GateScanner</p>
          <p className="text-xs text-sky-100/80">Airport queue intelligence</p>
        </div>
      </Link>

      <nav className="hidden items-center gap-7 text-sm font-semibold text-sky-50 md:flex">
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
        className="rounded-lg border border-white/25 px-4 py-2 text-sm font-bold text-white hover:bg-white/10"
      >
        Report queue
      </a>
    </header>
  );
}