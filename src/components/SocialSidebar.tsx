export default function SocialSidebar() {
  return (
    <div className="fixed left-8 top-1/2 z-40 hidden -translate-y-1/2 lg:flex flex-col items-center gap-6">
      <div className="h-[1px] w-8 bg-slate-300" />

      <a href="#" className="text-slate-400 transition hover:text-slate-950">
        <span className="sr-only">Instagram</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.75a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
        </svg>
      </a>

      <a href="#" className="text-slate-400 transition hover:text-slate-950">
        <span className="sr-only">Behance</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14.5 9.5a3.5 3.5 0 110 7h-3.5V9.5H14.5zm4 0h3.5v1.5h-3.5V9.5zm0 3.5h3.5v1.5h-3.5V13zM7 6.5A4.5 4.5 0 002.5 11v2a4.5 4.5 0 004.5 4.5h4A4.5 4.5 0 0015 13v-2a4.5 4.5 0 00-4.5-4.5H7zM7 8h4a2.5 2.5 0 01.13 5H7V8z" />
        </svg>
      </a>

      <a href="#" className="text-slate-400 transition hover:text-slate-950">
        <span className="sr-only">Dribbble</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12a9.99 9.99 0 0014.71 9.22c2.46-1 4.34-2.98 5.31-5.46A9.962 9.962 0 0012 2zm5.61 16.12c-.82 1.5-2.1 2.72-3.63 3.47a8.48 8.48 0 01-5.3-.55A8.493 8.493 0 014 12c0-1.35.33-2.63.92-3.75l6.56 6.56c.02.34.05.68.05 1.03 0 .37-.02.73-.06 1.09l-.56-.56c.46-.36.88-.76 1.24-1.19l5.4 5.4c.06-.13.12-.26.17-.4a8.53 8.53 0 00.84-2.37z" />
        </svg>
      </a>

      <div className="h-[1px] w-8 bg-slate-300" />
    </div>
  );
}
