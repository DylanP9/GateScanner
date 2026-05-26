export default function Header() {
  return (
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
  );
}