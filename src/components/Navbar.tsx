import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
            <span className="text-sm font-semibold">S</span>
          </div>
          <span className="text-sm font-semibold tracking-tight text-slate-950">sewood</span>
        </div>

        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600">
          <a href="#about" className="transition hover:text-slate-950">About</a>
          <a href="#skills" className="transition hover:text-slate-950">Skills</a>
          <a href="#projects" className="transition hover:text-slate-950">Portfolio</a>
          <a href="#contact" className="transition hover:text-slate-950">Contact Me</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
          >
            Download CV
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </span>
          </a>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

